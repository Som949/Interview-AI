import userModel from "../models/user.model.js";
import blacklistTokenModel from "../models/blacklist.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const isProduction = process.env.NODE_ENV === "production";
const cookieOptions = {
  httpOnly: true,
  sameSite: isProduction ? "none" : "lax",
  secure: isProduction,
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const isUserExist = await userModel.findOne({ email });

  if (isUserExist) {
    return res.status(400).json({
      success: false,
      message: "User already exist try to login",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "user created successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "user logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

const logout = async (req, res) => {
  const token = req.cookies.token;

  if (token) {
    await blacklistTokenModel.create({ token });
  }

  res.clearCookie("token", cookieOptions);
  return res.status(200).json({
    success: true,
    message: "user logged out successfully",
  });
};

export { register, login, logout };

import userModel from "../models/user.model.js";
import blacklistTokenModel from "../models/blacklist.model.js";
import jwt from "jsonwebtoken";

const checkUser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "no token found",
    });
  }

  const isTokenBlacklisted = await blacklistTokenModel.findOne({ token });

  if (isTokenBlacklisted) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }

  const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

  if (!decodedToken) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }

  try {
    req.user = await userModel.findById(decodedToken.id);
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "user not found",
    });
  }
};

export default checkUser;
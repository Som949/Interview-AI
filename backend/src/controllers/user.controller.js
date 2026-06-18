import userModel from "../models/user.model.js";


const getMe = async (req, res) => {

    const user = req.user;

    if (!user){
        return res.status(401).json({
            success: false,
            message: "user not found"
        })
    }

    try {
    const userData = await userModel.findById(user._id);
    return res.status(200).json({
        success: true,
        user: {
        _id: userData._id,
        name: userData.name,
        email: userData.email,
      },
    })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error.message
        })
    
    }


}

export {getMe};
import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import checkToken from "../middlewares/auth.middleware.js";
import { getMe } from "../controllers/user.controller.js";

const router = express.Router();

/**
 *@route post /api/auth/register
 *@description create new user and sign jwt token
 */
router.post("/register", register);

/**
 *@route post /api/auth/login
 *@description check password and email in db and sign jwt token to log in
 */
router.post("/login", login);

/**
 *@route post /api/auth/logout
 *@description clear token from cookies and blacklist it
 */
router.post("/logout", logout);

/**
 *@route post /api/auth/get-me
 *@description check user token is not in blacklist  protected route
 */
router.get("/get-me", checkToken, getMe);
export default router;

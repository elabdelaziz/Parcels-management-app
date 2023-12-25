import { Request, Response } from "express";
import config from "../config";
import jwt from "jsonwebtoken";
import UserStore from "../models/user";

const userModel = new UserStore();

export const getUserData = async (req: Request, res: Response) => {
  try {
    const userData = await userModel.getUserData(req.params.id);

    if (!userData) {
      return res.status(401).json({
        status: "error",
        message: "userData not found",
      });
    }
    return res.json({
      status: "success",
      userData: userData,
      message: "userData found successfully",
    });
  } catch (err) {
    throw new Error(`unable to find pending userData: ${err}`);
  }
};

export const auth = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.auth(username, password);
    const token = jwt.sign({ user }, config.jwToken as string);

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "email and password does not match",
      });
    }
    return res.json({
      status: "success",
      data: { ...user, token },
      message: "user logged in successfully",
    });
  } catch (err) {
    throw new Error(`unable to authenticate: ${err}`);
  }
};

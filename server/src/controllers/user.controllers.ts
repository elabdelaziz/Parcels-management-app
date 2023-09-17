import { Request, Response } from "express";
import bcrypt from "bcrypt";
import config from "../config";
import { getUser } from "../utils/_DATA";
import jwt from "jsonwebtoken";
import UserStore from "../models/user";

const userModel = new UserStore();

export const auth = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(req.body);
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

export const getTest = async (req: Request, res: Response) => {
  res.json({ message: "hello" });
};

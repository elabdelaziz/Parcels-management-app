import { Request, Response } from "express";
import config from "../config";
import jwt from "jsonwebtoken";
import UserStore from "../models/user";

const userModel = new UserStore();

export const getPendingParcels = async (req: Request, res: Response) => {
  try {
    const parcels = await userModel.getPendingParcels();

    if (!parcels) {
      return res.status(401).json({
        status: "error",
        message: "parcels not found",
      });
    }
    return res.json({
      status: "success",
      data: parcels,
      message: "parcels found successfully",
    });
  } catch (err) {
    throw new Error(`unable to find pending parcels: ${err}`);
  }
};

export const getParcels = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const parcels = await userModel.getParcels(id);

    if (!parcels) {
      return res.status(401).json({
        status: "error",
        message: "parcels not found",
      });
    }
    return res.json({
      status: "success",
      data: { parcels },
      message: "parcels found successfully",
    });
  } catch (err) {
    throw new Error(`unable to find pending parcels: ${err}`);
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

export const getTest = async (req: Request, res: Response) => {
  res.json({ message: "hello" });
};

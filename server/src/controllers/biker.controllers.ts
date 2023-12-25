import { Request, Response } from "express";
import BikerStore from "../models/biker";

const bikerModel = new BikerStore();

export const updateSingleParcel = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const parcel = await bikerModel.updateParcel(data);

    if (!parcel) {
      return res.status(401).json({
        status: "error",
        message: "parcel not found",
      });
    }
    return res.json({
      status: "success",
      data: { parcel },
      message: "parcel updated successfully",
    });
  } catch (err) {
    throw new Error(`unable to update parcel: ${err}`);
  }
};

export const pickParcel = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const parcel = await bikerModel.pickParcel(data);

    if (!parcel) {
      return res.status(401).json({
        status: "error",
        message: "parcel not found",
      });
    }
    return res.json({
      status: "success",
      data: { parcel },
      message: "parcel picked successfully",
    });
  } catch (err) {
    throw new Error(`unable to update parcel: ${err}`);
  }
};
import { Request, Response } from "express";
import BikerStore from "../models/biker";

const bikerModel = new BikerStore();

export const getBikerParcels = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const parcels = await bikerModel.getBikerParcels(id);

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
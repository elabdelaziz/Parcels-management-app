import { Request, Response } from "express";
import SenderStore from "../models/sender";

const senderModel = new SenderStore();

export const getSenderParcels = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const parcels = await senderModel.getSenderParcels(id);

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
    throw new Error(`unable to find parcels: ${err}`);
  }
};
export const createNewRequest = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const parcel = await senderModel.createNewRequest(data);

    return res.json({
      status: "success",
      data: { parcel },
      message: "request created successfully",
    });
  } catch (err) {
    throw new Error(`unable to create request: ${err}`);
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const parcel = await senderModel.deleteItem(id);

    return res.json({
      status: "success",
      data: { parcel },
      message: "item deleted successfully",
    });
  } catch (err) {
    throw new Error(`unable to delete item: ${err}`);
  }
};

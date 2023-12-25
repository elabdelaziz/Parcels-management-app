import { Request, Response } from "express";
import SenderStore from "../models/sender";

const senderModel = new SenderStore();

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

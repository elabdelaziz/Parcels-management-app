import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  try {
    // var token = jwt.sign({ user: user }, config.jwToken as unknown as string);
    // res.json({
    //   status: "success",
    //   data: { ...user },
    //   token: { token },
    //   message: "user created successfully",
    // });
  } catch (err) {
    console.log(err);
  }
};

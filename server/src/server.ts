import express, { Request, Response } from "express";
import routes from "./routes";
import cors from "cors";
import { users } from "./utils/_DATA";

const PORT = 5000;

const app: express.Application = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.get("/", function (req: Request, res: Response) {
  res.json({
    message: "hello",
  });
});

app.listen(PORT, function () {
  console.log(`app running on => ${PORT}`);
});

export default app;

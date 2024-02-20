import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

async function main() {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    // TODO: Implement 403
    res.status(200).json({
      status: "success",
      message: "You can show this page using JWT",
    });
  });

  // Register the API Routes

  // Catch All
  app.all("*", (req: Request, res: Response) => {
    return res.status(404).json({
      status: "fail",
      message: `Route: ${req.originalUrl} not found`,
    });
  });

  const PORT = 8080;
  app.listen(PORT, () => {
    console.info(`Server started on port: ${PORT}`);
  });
}

main();

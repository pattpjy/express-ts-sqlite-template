import express, { Express, Request, Response } from "express";
const env: string = process.env.NODE_ENV || "development";
import { Knex } from "knex";
import config from "./knexfile";
import cors from "cors";

const configOptions = config[env];
const db: Knex = require("knex")(configOptions);
const app: Express = express();
const port: number = Number(process.env.PORT) || 3001;

app.use(cors());

console.log(configOptions);
app.set("port", process.env.PORT || 3001);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the your_table_name database⚡️"); //return a string with a welcome message
});

app.get("/api/v1/your_table_name", async (req: Request, res: Response) => {
  try {
    const data = await db.select("*").from("your_table_name");
    res.send(data);
  } catch (err) {
    console.log("Error", err);
    res.status(404).send(err);
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

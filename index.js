import express from "express";
import cors from "cors";
import env from "dotenv";
import { route } from "./routes/mangaRoute.js";

const app = express();
env.config();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(route);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});

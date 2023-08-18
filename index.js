import express from "express";
import cors from "cors";
import { route } from "./routes/mangaRoute.js";

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(route);

app.listen(3000, () => {
  console.log("server is running");
});

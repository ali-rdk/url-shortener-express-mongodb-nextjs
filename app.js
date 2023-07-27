import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import appRootPath from "app-root-path";
import { URLRoutes } from "./routes/urlroutes.mjs";

dotenv.config({
  path: appRootPath.resolve("/env/.env"),
});
const PORT = process.env.PORT;

mongoose
  .connect(process.env.DB_URL, {
    dbName: "url_shotener",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", URLRoutes);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

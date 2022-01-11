import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";

// cannot use import syntax
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));

// middleware
app.use(express.json({ limit: "5mb" }));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

// autoload routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// run app, listen on port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

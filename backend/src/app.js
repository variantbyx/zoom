import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

// app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => {
//   return res.json({});
// });

const start = async () => {
  app.listen(8000, () => {
    console.log("LISTEN ON PORT 8000");
  });
};

start();

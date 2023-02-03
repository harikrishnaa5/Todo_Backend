const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/database");
const todoRoute = require("./Routes/todoRoute");

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// server configuration...
app.listen(process.env.PORT, () =>
  console.log(`Listening at port : ${process.env.PORT}`)
);

dbConnect();

app.use("/todo", todoRoute);

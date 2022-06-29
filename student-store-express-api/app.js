// YOUR CODE HERE
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { storage } = require("./data/storage.js");
const idRouter = require("./routes/products.js");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/store", idRouter);

app.get("/", (req, res) => {
	res.status(200).send({ ping: "pong" });
});

app.get("/store", (req, res) => {
	res.status(200).send({ products: storage.get("products").value() });
});

module.exports = app;

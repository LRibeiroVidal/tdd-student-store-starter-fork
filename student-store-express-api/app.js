// YOUR CODE HERE
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { storage } = require("./data/storage.js");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send({ ping: "pong" });
});

app.get("/store", (req, res) => {
	res.status(200).send({ products: storage.get("products").value() });
	console.log({ data: storage.get("products").value() });
});

module.exports = app;

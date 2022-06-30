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

app.post("/postOrder", (req, res) => {
	console.log("REQUEST HERE ", req.body);
	storage.get("purchases").push(req.body).write();
});

module.exports = app;

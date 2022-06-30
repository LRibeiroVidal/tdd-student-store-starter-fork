const express = require("express");
const router = express.Router();
const { storage } = require("../data/storage.js");

router.get("/:productId", async (req, res, next) => {
	try {
		const product = await storage.get("products").value()[
			req.params.productId - 1
		];
		console.log("THIS STUff ", storage.get("products").value());
		res.status(200).json({ product });
	} catch (err) {
		next(err);
	}
});

module.exports = router;

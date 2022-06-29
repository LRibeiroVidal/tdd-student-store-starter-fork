import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "@mui/material";

export default function ProductGrid(props) {
	return (
		<div className="ProductGrid">
			{props.products.map((product, idx) => {
				let url = "/store/" + product.id;
				return (
					<ProductCard
						product={product}
						amount={product.amount}
						key={idx}
						idx={idx}
						increaseAmountAt={props.increaseAmountAt}
						decreaseAmountAt={props.decreaseAmountAt}
						url={url}
					/>
				);
			})}
		</div>
	);
}

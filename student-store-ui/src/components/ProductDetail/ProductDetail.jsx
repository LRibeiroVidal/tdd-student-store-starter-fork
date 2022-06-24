import "./ProductDetail.css";
import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductDetail(props) {
	let productId = useParams();
	if (props.products.length == 0) return <div></div>;
	const product = props.products[productId.productId - 1];
	console.log(product);
	return (
		<div className="make-it-big">
			<h3>Product {productId.productId}</h3>
			<ProductCard
				product={props.products[productId.productId - 1]}
				idx={productId.productId - 1}
				increaseAmountAt={props.increaseAmountAt}
				decreaseAmountAt={props.decreaseAmountAt}
			/>
			<div>{product.description}</div>
		</div>
	);
}

import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart(props) {
	return (
		<div className="shopping-cart">
			<div className="header">
				<span>Name</span>
				<span>Quantity</span>
				<span>Unit Price</span>
				<span>Cost</span>
			</div>
		</div>
	);
}

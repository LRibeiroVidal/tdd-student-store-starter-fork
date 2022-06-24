import * as React from "react";
import "./CartItem.css";

export default function CartItem(props) {
	var formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	return (
		<div className="cart-item">
			<span className="cart-item-part">{props.product.name}</span>
			<span className="cart-item-part">{props.products[props.idx].amount}</span>
			<span className="cart-item-part">
				{formatter.format(props.product.price)}
			</span>
			<span className="cart-item-part">
				{formatter.format(props.product.price * props.product.amount)}
			</span>
		</div>
	);
}

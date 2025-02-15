import * as React from "react";
import "./ProductCard.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

export default function ProductCard(props) {
	var formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});

	return (
		<div className="product-card">
			<a href={props.url}>
				<img
					className="product-image"
					src={props.product.image}
					height="75%%"
					width="100%"
				/>
			</a>
			<div className="product-and-add">
				<div className="product-name">{props.product.name}</div>
				<div className="add-and-remove">
					<IndeterminateCheckBoxIcon
						className="remove-item"
						style={{ color: props.product.amount == 0 ? "gray" : "darkred" }}
						onClick={() => {
							props.decreaseAmountAt(props.idx);
						}}
					/>
					<span
						className={props.product.amount == 0 ? "amount hidden" : "amount"}
					>
						{props.product.amount}
					</span>
					<AddBoxIcon
						className="add-item"
						style={{ color: props.product.amount > 99 ? "gray" : "darkgreen" }}
						onClick={() => {
							props.increaseAmountAt(props.idx);
						}}
					/>
				</div>
			</div>
			<div className="stars">
				<StarIcon style={{ color: "gold" }} />
				<StarIcon style={{ color: "gold" }} />
				<StarIcon style={{ color: "gold" }} />
				<StarIcon style={{ color: "gold" }} />
				<StarHalfIcon style={{ color: "gold" }} />
			</div>
			<div className="price">{formatter.format(props.product.price)}</div>
		</div>
	);
}

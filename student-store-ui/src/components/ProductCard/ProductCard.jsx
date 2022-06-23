import * as React from "react";
import "./ProductCard.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

export default function ProductCard(props) {
	console.log(props.product);
	const [itemAmount, setItemAmount] = React.useState(props.product.amount);

	function increaseAmount() {
		if (props.product.amount > 99) return;
		props.product.amount += 1;
		setItemAmount(props.product.amount);
	}

	function decreaseAmount() {
		if (props.product.amount == 0) return;
		props.product.amount -= 1;
		setItemAmount(props.product.amount);
	}

	var formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});

	return (
		<div className="product-card">
			<img
				className="product-image"
				src={props.product.image}
				height="250px"
				width="250px"
			/>
			<div className="product-and-add">
				<div className="product-name">{props.product.name}</div>
				<div className="add-and-remove">
					<IndeterminateCheckBoxIcon
						className="remove-item"
						style={{ color: itemAmount == 0 ? "gray" : "darkred" }}
						onClick={decreaseAmount}
					/>
					<span className={itemAmount == 0 ? "amount hidden" : "amount"}>
						{itemAmount}
					</span>
					<AddBoxIcon
						className="add-item"
						style={{ color: itemAmount > 99 ? "gray" : "darkgreen" }}
						onClick={increaseAmount}
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

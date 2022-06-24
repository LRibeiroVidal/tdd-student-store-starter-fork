import * as React from "react";
import "./Home.css";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home(props) {
	return (
		<div className="home">
			<ProductGrid
				products={props.products}
				increaseAmountAt={props.increaseAmountAt}
				decreaseAmountAt={props.decreaseAmountAt}
			/>
		</div>
	);
}

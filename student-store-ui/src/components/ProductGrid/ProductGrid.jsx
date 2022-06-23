import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
	return (
		<div className="ProductGrid">
			{props.products.map((product, idx) => {
				return <ProductCard product={product} key={idx} />;
			})}
		</div>
	);
}

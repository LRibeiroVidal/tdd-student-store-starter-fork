import * as React from "react";
import CartItem from "../CartItem/CartItem";
import "./ShoppingCart.css";
import {
	Table,
	TableContainer,
	TableHead,
	TableCell,
	TableBody,
	TableRow,
} from "@mui/material";

export default function ShoppingCart(props) {
	var formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});

	return (
		<div
			className={
				props.isOpen ? "shopping-cart-elem" : "shopping-cart-elem hidden"
			}
		>
			<div className="header-shopping">
				<span className="shopping-titles">Name</span>
				<span className="shopping-titles">Quantity</span>
				<span className="shopping-titles">Unit Price</span>
				<span className="shopping-titles">Cost</span>
			</div>

			<div className="shopping-cart-items">
				<TableContainer className="shopping-cart-table">
					<Table
						sx={{ minWidth: "40%" }}
						size="small"
						aria-label="a dense table"
					>
						<TableHead></TableHead>
						<TableBody>
							{props.products.map((item) => (
								<TableRow
									key={item.name}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell align="center">{item.name}</TableCell>
									<TableCell align="center">{item.amount}</TableCell>
									<TableCell align="center">
										{formatter.format(item.price)}
									</TableCell>
									<TableCell align="center">
										{formatter.format(item.amount * item.price)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}

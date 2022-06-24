import * as React from "react";
import "./Sidebar.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AddCardIcon from "@mui/icons-material/AddCard";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({
	isOpen = false,
	shoppingCart,
	products,
	checkoutForm,
	handleOnCheckoutFormChange,
	handleOnSubmitCheckoutForm,
	handleOnToggle = () => {},
	setIsOpen,
	cartHasItems,
}) {
	return (
		<section className={isOpen ? "sidebar" : "sidebar closed"}>
			<div className="top-button">
				<button className="toggle-button" onClick={handleOnToggle}>
					<DoubleArrowIcon
						className={isOpen ? "arrow open" : "arrow"}
						style={{
							color: "white",
							height: 40,
							width: 40,
							transition: "0.5s",
						}}
					/>
				</button>

				<div className="other-icons">
					<div className="shopping-cart">
						<h3
							className={
								isOpen ? "shopping-cart-title" : "shopping-cart-title hidden"
							}
							style={{ color: "white" }}
						>
							Shopping Cart
						</h3>
						<ShoppingBasketIcon
							style={{
								color: "white",
								height: 40,
								width: 40,
								transition: "0.5s",
								margin: "5px",
							}}
						/>
					</div>
					<ShoppingCart
						isOpen={isOpen}
						products={products}
						setIsOpen={setIsOpen}
						cartHasItems={cartHasItems}
					/>
					<div className="payment-info">
						<h3
							className={
								isOpen ? "payment-info-title" : "payment-info-title hidden"
							}
							style={{ color: "white" }}
						>
							Payment Info
						</h3>
						<AddCardIcon
							style={{
								color: "white",
								height: 40,
								width: 40,
								transition: "0.5s",
								margin: "5px",
							}}
						/>
					</div>
					<br />
					<div className="confirmation-email">
						<h3
							className={
								isOpen
									? "confirmation-email-title"
									: "confirmation-email-title hidden"
							}
							style={{ color: "white" }}
						>
							Confirmation Email
						</h3>
						<ForwardToInboxIcon
							style={{
								color: "white",
								height: 40,
								width: 40,
								transition: "0.5s",
								margin: "5px",
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

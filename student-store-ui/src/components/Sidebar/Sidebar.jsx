import * as React from "react";
import "./Sidebar.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Divider } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddCardIcon from "@mui/icons-material/AddCard";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

export default function Sidebar({
	isOpen = false,
	shoppingCart,
	products,
	checkoutForm,
	handleOnCheckoutFormChange,
	handleOnSubmitCheckoutForm,
	handleOnToggle = () => {},
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

				<div className="other-icons" onClick={handleOnToggle}>
					<div className="shopping-cart">
						<PermIdentityIcon
							style={{
								color: "white",
								height: 40,
								width: 40,
								transition: "0.5s",
							}}
						/>
					</div>
					<br />
					<div className="payment-info">
						<AddCardIcon
							style={{
								color: "white",
								height: 40,
								width: 40,
								transition: "0.5s",
							}}
						/>
					</div>
					<br />
					<div className="confirmation-email">
						<ForwardToInboxIcon
							style={{
								color: "white",
								height: 40,
								width: 40,
								transition: "0.5s",
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

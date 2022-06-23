import * as React from "react";
import "./Sidebar.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

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
			<button className="toggle-button" onClick={handleOnToggle}>
				<DoubleArrowIcon
					className={isOpen ? "arrow open" : "arrow"}
					style={{ color: "white", height: 40, width: 40, transition: "0.5s" }}
				/>
			</button>
		</section>
	);
}

import * as React from "react";
import "./ReceiptContainer.css";

export default function ReceiptContainer(props) {
	var formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	var localTotal = 0;

	if (!props.showingReceipt) {
		return (
			<div className={props.isOpen ? "receipt-text" : "receipt-text hidden"}>
				A confirmation email will be sent to you so that you can confirm this
				order. Once you have confirmed the order, it will be delivered to your
				dorm room.
			</div>
		);
	} else {
		return (
			<div className={props.isOpen ? "receipt-text" : "receipt-text hidden"}>
				<h4>Receipt</h4>
				<div>
					Showing receipt for {props.userName} available at {props.userEmail}:
				</div>
				<ul className="receipt-list">
					{props.products.map((prod, idx) => {
						if (prod.amount > 0) {
							localTotal += prod.amount * prod.price;
							return (
								<li key={idx}>
									{prod.amount} total {prod.name} purchased at a cost of{" "}
									{formatter.format(prod.price)} for a total cost of{" "}
									{formatter.format(prod.price * prod.amount)}
								</li>
							);
						}
					})}
					<li>Before taxes, the subtotal was {formatter.format(localTotal)}</li>
					<li>
						After taxes and fees were applied, the total comes out to{" "}
						{formatter.format(localTotal * 1.0875)}
					</li>
				</ul>

				<div className="actions">
					<button className="shop-more-button" onClick={props.resetSidebar}>
						Shop More
					</button>
				</div>
			</div>
		);
	}
}

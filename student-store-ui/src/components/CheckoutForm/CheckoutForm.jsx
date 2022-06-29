import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm(props) {
	return (
		<div className={props.isOpen ? "checkout-form" : "checkout-form hidden"}>
			<div className="input-field">
				<label className="label">Name</label>
				<div className="control ">
					<input
						name="name"
						className="checkout-form-input"
						type="text"
						placeholder="Student Name"
						value=""
					/>
				</div>
			</div>
			<div className="input-field">
				<label className="label">Email</label>
				<div className="control">
					<input
						name="email"
						className="checkout-form-input"
						type="email"
						placeholder="student@codepath.org"
						value=""
					/>
				</div>
			</div>
			<div className="field">
				<div className="control">
					<label className="checkbox">
						<input name="termsAndConditions" type="checkbox" />
						<span className="label">
							I agree to the{" "}
							<a href="#terms-and-conditions" className="terms">
								terms and conditions
							</a>
						</span>
					</label>
				</div>
			</div>
			<p className="is-danger"></p>
			<div className="field">
				<div className="control">
					<button className="button checkout-button">Checkout</button>
				</div>
			</div>
		</div>
	);
}

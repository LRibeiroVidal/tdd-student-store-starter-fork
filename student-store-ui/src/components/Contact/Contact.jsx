import * as React from "react";
import "./Contact.css";

export default function Contact() {
	return (
		<div class="content">
			<h2>Contact Us</h2>
			<div class="summary">
				<ul class="info">
					<li className="item-contact">
						<span class="label">Email:</span>
						<span> code@path.org</span>
					</li>
					<li className="item-contact">
						<span class="label">Phone:</span>
						<span> 1-800-CODEPATH</span>
					</li>
					<li className="item-contact">
						<span class="label">Address:</span>
						<span> 123 Fake Street, San Francisco, CA</span>
					</li>
				</ul>
				<div class="media">
					<img
						src="https://codepath-student-store-demo.surge.sh//assets/happy_person.517b658d.svg"
						alt="codepath large"
						height="110%"
					/>
				</div>
			</div>
		</div>
	);
}

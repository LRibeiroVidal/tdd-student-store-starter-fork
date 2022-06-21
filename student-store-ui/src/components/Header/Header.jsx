import * as React from "react";
import "./Header.css";

export default function Header() {
	return (
		<div className="header">
			<a href="/">
				<img src="/assets/codepath.f1b3e41a.svg" />
			</a>
			<div class="socials"></div>
			<ul class="links">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">About Us</a>
				</li>
				<li>
					<a href="/">Contact Us</a>
				</li>
				<li>
					<a href="/">Buy Now</a>
				</li>
			</ul>
		</div>
	);
}

import * as React from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar">
			<Logo />

			<ul className="links">
				<Link className="link" to={"/"} >
					<li>Home</li>
				</Link>
                <Link className="link" to={"#About"}>
					<li>About Us</li>
				</Link>
                <Link className="link" to={"#Contact"}>
					<li>Contact Us</li>
				</Link>
                <Link className="link" to={"#Buy"}>
					<li>Buy Now</li>
				</Link>
			</ul>
		</nav>
	);
}

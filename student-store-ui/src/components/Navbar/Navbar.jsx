import * as React from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [activeCat, setActiveCat] = React.useState("Home");

	return (
		<nav className="navbar">
			<Logo />

			<ul className="links">
				<a
					className="link"
					href={"/"}
					onClick={() => {
						setActiveCat("Home");
					}}
				>
					<li
						style={{
							borderBottom: activeCat === "Home" ? "2px solid white" : "none",
						}}
					>
						Home
					</li>
				</a>
				<a
					className="link"
					href={"#About"}
					onClick={() => {
						setActiveCat("About");
					}}
				>
					<li
						style={{
							borderBottom: activeCat === "About" ? "2px solid white" : "none",
						}}
					>
						About Us
					</li>
				</a>
				<a
					className="link"
					href={"#Contact"}
					onClick={() => {
						setActiveCat("Contact");
					}}
				>
					<li
						style={{
							borderBottom:
								activeCat === "Contact" ? "2px solid white" : "none",
						}}
					>
						Contact Us
					</li>
				</a>
				<a
					className="link"
					href={"#Buy"}
					onClick={() => {
						setActiveCat("Buy");
					}}
				>
					<li
						style={{
							borderBottom: activeCat === "Buy" ? "2px solid white" : "none",
						}}
					>
						Buy Now
					</li>
				</a>
			</ul>
		</nav>
	);
}

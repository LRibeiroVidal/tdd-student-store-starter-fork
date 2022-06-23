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
				<Link
					className="link"
					to={"/"}
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
				</Link>
				<Link
					className="link"
					to={"#About"}
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
				</Link>
				<Link
					className="link"
					to={"#Contact"}
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
				</Link>
				<Link
					className="link"
					to={"#Buy"}
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
				</Link>
			</ul>
		</nav>
	);
}

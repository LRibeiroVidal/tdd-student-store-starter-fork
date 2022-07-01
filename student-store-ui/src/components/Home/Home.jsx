import * as React from "react";
import "./Home.css";
import ProductGrid from "../ProductGrid/ProductGrid";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function Home(props) {
	const [catSelect, setCatSelect] = React.useState("");

	function handleCatClick(cat) {
		setCatSelect(cat);
	}

	return (
		<div className="home">
			<div className="hero">
				<div className="hero_text">
					<h1>Welcome!</h1>
					<h1>Find Your Merch!</h1>
					<h3>
						We have all kinds of goodies. Click on any of the items to start
						filling up your shopping cart. Checkout whenever you're ready.
					</h3>
				</div>
				<div className="hero_img">
					<img
						src="https://codepath-student-store-demo.surge.sh//assets/student_store_icon.18e5d61a.svg"
						alt="hero"
						className="hero-img"
						width="300vw"
					/>
				</div>
			</div>
			<div className="searchbar">
				<input
					name="searchbar"
					className="searchbar-form-input"
					type="text"
					placeholder="Search"
					value={props.searchQuery}
					onChange={(e) => {
						props.setSearchQuery(e.target.value);
					}}
				/>
				<ManageSearchIcon
					className="search-icon"
					style={{ width: "2vw", height: "2vw", color: "white" }}
				/>
			</div>
			<div className="category-select">
				<div
					className={
						catSelect == ""
							? "category-select-item chosenCat"
							: "category-select-item"
					}
					onClick={() => {
						handleCatClick("");
					}}
				>
					All Categories
				</div>
				<div
					className={
						catSelect == "clothing"
							? "category-select-item chosenCat"
							: "category-select-item"
					}
					onClick={() => {
						handleCatClick("clothing");
					}}
				>
					Clothing
				</div>
				<div
					className={
						catSelect == "food"
							? "category-select-item chosenCat"
							: "category-select-item"
					}
					onClick={() => {
						handleCatClick("food");
					}}
				>
					Food
				</div>
				<div
					className={
						catSelect == "accessories"
							? "category-select-item chosenCat"
							: "category-select-item"
					}
					onClick={() => {
						handleCatClick("accessories");
					}}
				>
					Accessories
				</div>
				<div
					className={
						catSelect == "tech"
							? "category-select-item chosenCat"
							: "category-select-item"
					}
					onClick={() => {
						handleCatClick("tech");
					}}
				>
					Tech
				</div>
			</div>

			<ProductGrid
				products={props.products}
				increaseAmountAt={props.increaseAmountAt}
				decreaseAmountAt={props.decreaseAmountAt}
				searchQuery={props.searchQuery}
				catSelect={catSelect}
				id="Buy"
			/>

			<div id="About">
				<About />
			</div>

			<div id="Contact">
				<Contact />
			</div>
		</div>
	);
}

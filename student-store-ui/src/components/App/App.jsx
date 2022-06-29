import * as React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";

const URL = "http://localhost:3001/store";

export default function App() {
	const [isOpen, setIsOpen] = React.useState(false);
	function handleOnToggle() {
		setIsOpen(!isOpen);
	}

	const [products, setProducts] = React.useState([]);
	const [isFetching, setIsFetching] = React.useState(false);
	const [cartIsEmpty, setCartIsEmpty] = React.useState(true);

	React.useEffect(() => {
		setIsFetching(true);
		axios
			.get(URL)
			.then((resp) => {
				console.log(resp);
				resp.data.products.map((product) => {
					return (product.amount = 0);
				});
				setProducts(resp.data.products);
				setIsFetching(false);
				console.log("fetch completed");
			})
			.catch((err) => console.log("ERROR ", err));
	}, []);

	function increaseAmountAt(idx) {
		if (products[idx].amount > 99) return;
		var prodsCopy = [...products];
		prodsCopy[idx].amount += 1;
		setProducts(prodsCopy);
	}

	function decreaseAmountAt(idx) {
		if (products[idx].amount === 0) return;
		var prodsCopy = [...products];
		prodsCopy[idx].amount -= 1;
		setProducts(prodsCopy);
	}

	function cartHasItems() {
		setCartIsEmpty(false);
	}

	return (
		<div className="app">
			<BrowserRouter>
				<main>
					{/* YOUR CODE HERE! */}
					<Navbar />
					<Sidebar
						handleOnToggle={handleOnToggle}
						isOpen={isOpen}
						products={products}
						setIsOpen={setIsOpen}
						cartHasItems={cartHasItems}
						cartIsEmpty={cartIsEmpty}
					/>
					<Routes>
						<Route
							path="/"
							element={
								<Home
									products={products}
									increaseAmountAt={increaseAmountAt}
									decreaseAmountAt={decreaseAmountAt}
								/>
							}
						/>
						<Route
							path="/products/:productId"
							element={
								<ProductDetail
									products={products}
									increaseAmountAt={increaseAmountAt}
									decreaseAmountAt={decreaseAmountAt}
								/>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

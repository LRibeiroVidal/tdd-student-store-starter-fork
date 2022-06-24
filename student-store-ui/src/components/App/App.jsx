import * as React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";

const URL = " https://codepath-store-api.herokuapp.com/store";

export default function App() {
	const [isOpen, setIsOpen] = React.useState(false);
	function handleOnToggle() {
		setIsOpen(!isOpen);
	}

	const [products, setProducts] = React.useState([]);
	const [isFetching, setIsFetching] = React.useState(false);

	React.useEffect(() => {
		setIsFetching(true);
		axios.get(URL).then((resp) => {
			resp.data.products.map((product) => {
				return (product.amount = 0);
			});
			setProducts(resp.data.products);
			setIsFetching(false);
		});
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
						<Route path="/products/:productId" element={<ProductDetail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

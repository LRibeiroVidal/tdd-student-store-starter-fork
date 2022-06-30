import * as React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";

const URL = "http://localhost:3001";
var currentId = 1;
export default function App() {
	const [isOpen, setIsOpen] = React.useState(false);
	function handleOnToggle() {
		setIsOpen(!isOpen);
	}

	const [products, setProducts] = React.useState([]);
	const [isFetching, setIsFetching] = React.useState(false);
	const [cartIsEmpty, setCartIsEmpty] = React.useState(true);
	const [userEmail, setUserEmail] = React.useState("");
	const [userName, setUserName] = React.useState("");
	const [showingReceipt, setShowingReceipt] = React.useState(false);

	React.useEffect(() => {
		setIsFetching(true);
		axios
			.get(URL + "/store")
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

	function resetSidebar() {
		setCartIsEmpty(true);
		products.map((product) => {
			return (product.amount = 0);
		});
		setUserEmail("");
		setUserName("");
		setShowingReceipt(false);
	}

	function postOrder() {
		var order = { orderId: currentId, products: [] };
		console.log("ORDER HERE ", order);

		products.map((product) => {
			if (product.amount > 0) order.products = [...order.products, product];
		});
		currentId++;

		axios.post(URL + "/postOrder", order);
	}

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
						userEmail={userEmail}
						setUserEmail={setUserEmail}
						userName={userName}
						setUserName={setUserName}
						showingReceipt={showingReceipt}
						setShowingReceipt={setShowingReceipt}
						resetSidebar={resetSidebar}
						postOrder={postOrder}
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
							path="/store/:productId"
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

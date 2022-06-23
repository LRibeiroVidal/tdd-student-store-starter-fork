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
			setProducts(resp.data.products);
			setIsFetching(false);
		});
	}, []);

	return (
		<div className="app">
			<BrowserRouter>
				<main>
					{/* YOUR CODE HERE! */}
					<Navbar />
					<Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} />
					<Routes>
						<Route path="/" element={<Home products={products} />} />
						<Route path="/products/:productId" element={<ProductDetail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

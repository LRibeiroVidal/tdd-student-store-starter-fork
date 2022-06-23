import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function App() {
	const [isOpen, setIsOpen] = React.useState(false);
	function handleOnToggle() {
		setIsOpen(!isOpen);
	}

	return (
		<div className="app">
			<BrowserRouter>
				<main>
					{/* YOUR CODE HERE! */}
					<Navbar />
					<Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products/:productId" element={<ProductDetail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

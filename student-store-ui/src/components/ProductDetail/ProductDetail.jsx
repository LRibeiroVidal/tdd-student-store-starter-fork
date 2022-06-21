import "./ProductDetail.css";
import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


export default function ProductDetail(props) {
    let productId = useParams();
    console.log(productId);
    return (
        <div className="product-detail">
            <h3 className="product-title">Product {productId.productId}</h3>
        </div>
    );
}
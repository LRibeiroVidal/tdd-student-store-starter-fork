import "./Logo.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className="logo">
            <Link to={"/"}>
                <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"/>
            </Link>
        </div>
    )
}
import React from "react";
import "../styles/navbar.css";

export default function Navbar({ setInputValue, inputValue, search }) {
  console.log(inputValue);
  return (
    <div className="navbar">
      <span className="header">Movie Review</span>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyPress={search}
        type="text"
        placeholder="Search.."
        className="search-bar"
      />
    </div>
  );
}

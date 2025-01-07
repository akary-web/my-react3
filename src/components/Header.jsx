import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-800 p-6">
      <ul className="flex justify-between text-white font-bold">
        <Link to="/" >Blog</Link>
        <Link to="/contact">お問い合わせ</Link>
      </ul>
    </header>
  )
}

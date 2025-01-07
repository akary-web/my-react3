import React from "react";

export const Header = () => {
  return (
    <header className="bg-gray-800 p-6">
      <ul className="flex justify-between text-white font-bold">
        <li><a href="/" >Blog</a></li>
        <li><a href="/contact">お問い合わせ</a></li>
      </ul>
    </header>
  )
}

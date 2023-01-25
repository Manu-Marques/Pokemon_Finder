import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo 2.png";
import React from "react";

export default function Header() {
  return (
    <nav className="rounded-b-lg p-3 border-gray-200 bg-gray-50 bg-red-700 border-gray-700 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className='pb-3 min-[340px]:max-w-xs h-auto' />
        </Link>
        <div className="pt-1 pb-1 hidden w-full" id="navbar-hamburger">
          <ul className="flex-col rounded-lg bg-gray-50 bg-bluekemon border-gray-700">
          </ul>
        </div>
      </div>
    </nav>
  );
}
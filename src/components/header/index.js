import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo 2.png";

export default function Header({ pokemon }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const menu = document.getElementById('navbar-hamburger');
    if (open) {
      document.getElementById('navbar-hamburger').click(menu.classList.remove('hidden'));
    }
    else {
      document.getElementById('navbar-hamburger').click(menu.classList.add('hidden'));
    }
  }, [open])

  return (
    <nav className="rounded-b-lg p-3 border-gray-200 bg-gray-50 dark:bg-red-700 dark:border-gray-700 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link onClick={() => setOpen(false)} to="/" className="flex items-center">
          <img src={logo} alt="logo" className='pb-3 min-[340px]:max-w-xs h-auto' />
        </Link>
        <div className="pt-1 pb-1 hidden w-full" id="navbar-hamburger">
          <ul className="flex-col rounded-lg bg-gray-50 dark:bg-bluekemon dark:border-gray-700">
          </ul>
        </div>
      </div>
    </nav>


  );
}
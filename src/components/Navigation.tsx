import React from "react"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import logo2 from "../img/logo2.png"

export function Navigation() {
  return (
    <nav className="h-[92px] flex px-5 bg-black items-center text-white">
      <img src={logo} alt="logo" />
      <img src={logo2} alt="logo" className="p-5" />
      <menu>
        <Link to="/" className="mr-2 text-yellow-300">
          РАБОТЫ
        </Link>
      </menu>
      <span>
        <Link to="/" className="mr-2">
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}

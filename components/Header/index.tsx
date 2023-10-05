import React from "react"
import Wrapper from "../Wrapper"
import Link from "next/link"

const Header = () => {
  return (
    <Wrapper>
      <header>
        <nav className="hidden py-4  lg:flex items-center">
          <ul className="flex-1 flex gap-20 items-center">
            <li>
              <Link href="/">Jess Roque</Link>
            </li>
            <li className="w-40">Currently full stack developer at Chanz</li>
            <li className="w-40">Based in Pasig, Metro Manila, Ph</li>
          </ul>

          <ul className="flex gap-12">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Work</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  )
}

export default Header

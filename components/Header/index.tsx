"use client"
import React from "react"
import Wrapper from "../Wrapper"
import Link from "next/link"
import MobileNav from "./MobileNav"
const Header = () => {
  return (
    <Wrapper>
      <header>
        <nav className="lg:flex items-center h-[15vh]">
          <ul className="hidden flex-1 md:flex gap-20 items-center">
            <li>
              <Link href="/">Jess Roque</Link>
            </li>
            <li className="w-40">Currently full stack developer at Chanz</li>
            <li className="w-40">Based in Pasig, Metro Manila, Ph</li>
          </ul>

          <ul className="hidden md:flex gap-12">
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

          <MobileNav />
        </nav>
      </header>
    </Wrapper>
  )
}

export default Header

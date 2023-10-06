"use client"
import React from "react"
import Wrapper from "../Wrapper"
import Link from "next/link"
import MobileNav from "./MobileNav"
import { useTheme } from "@/hooks/ThemeProvider"
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/outline"

const Header = () => {
  const { theme, setTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Wrapper>
      <header>
        <nav className=" lg:flex items-center h-[15vh]">
          <ul className="hidden flex-1 lg:flex gap-20 items-center">
            <li>
              <Link href="/">Jess Roque</Link>
            </li>
            <li className="w-40">Currently full stack developer at Chanz</li>
            <li className="w-40">Based in Pasig, Metro Manila, Ph</li>
          </ul>

          <ul className="hidden lg:flex gap-12">
            <li>
              <a
                href="#Experience"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("Experience")
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("Projects")
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("Contact")
                }}
              >
                Contact
              </a>
            </li>

            {theme ? (
              <SunIcon className="w-6 h-6 " onClick={() => setTheme(!theme)} />
            ) : (
              <MoonIcon className="w-6 h-6 " onClick={() => setTheme(!theme)} />
            )}
          </ul>

          <MobileNav />
        </nav>
      </header>
    </Wrapper>
  )
}

export default Header

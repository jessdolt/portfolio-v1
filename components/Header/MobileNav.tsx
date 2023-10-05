import React, { useState, useContext } from "react"
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import NavigationDrawer from "./NavigationDrawer"
import { useTheme } from "@/hooks/ThemeProvider"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <>
      <NavigationDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="flex md:hidden justify-between items-center h-full ">
        <div className="flex items-center gap-1">
          <div className="w-[10px] h-3 mt-[2px] bg-primary-dark dark:bg-primary " />
          <h1 className="font-[800] text-[14px] tracking-[0.5px]">
            Contact Me
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          {theme ? (
            <SunIcon className="w-6 h-6 " onClick={() => setTheme(!theme)} />
          ) : (
            <MoonIcon className="w-6 h-6 " onClick={() => setTheme(!theme)} />
          )}

          <Bars3Icon
            className="w-8 h-8 text-xs cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </>
  )
}

export default MobileNav

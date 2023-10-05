import React, { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import NavigationDrawer from "./NavigationDrawer"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <NavigationDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="flex md:hidden justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="w-[10px] h-3 mt-[2px] bg-black" />
          <h1 className="font-[800] text-[14px] tracking-[0.5px]">
            Contact Me
          </h1>
        </div>
        <Bars3Icon
          className="w-7 h-7 text-xs cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </>
  )
}

export default MobileNav

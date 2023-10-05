import clsx from "clsx"
import React from "react"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const SectionTitle = ({
  children,
  className,
  isSticky,
}: {
  children: React.ReactNode
  className?: string
  isSticky?: boolean
}) => {
  return (
    <h1
      className={clsx(
        `
       text-2xl 
       mb-8 
       uppercase 
       font-bold 
       md:text-7xl 
      `,
        isSticky && "fixed w-screen top-0 bg-white py-4  backdrop-blur"
      )}
    >
      {children}
    </h1>
  )
}

export default SectionTitle

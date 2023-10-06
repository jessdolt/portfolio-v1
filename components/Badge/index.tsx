import React from "react"

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-3 py-1 text-xs bg-primary-dark dark:bg-white lg:text-md text-primary-dark dark:text-primary min-w-fit rounded-full  md:text-md ">
      {children}
    </div>
  )
}

export default Badge

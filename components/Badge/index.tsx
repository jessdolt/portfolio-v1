import React from "react"

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-3 py-1 text-xs bg-primary-dark dark:bg-primary text-primary-dark dark:text-primary min-w-fit rounded-full  md:m-2 md:text-2xl">
      {children}
    </div>
  )
}

export default Badge

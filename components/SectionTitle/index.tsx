import React from "react"

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-3xl md:text-7xl uppercase font-bold ">{children}</h1>
  )
}

export default SectionTitle

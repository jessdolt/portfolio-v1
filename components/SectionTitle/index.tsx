import React from "react"

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-4xl mb-4 md:text-7xl uppercase font-bold ">
      {children}
    </h1>
  )
}

export default SectionTitle

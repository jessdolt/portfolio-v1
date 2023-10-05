import React from "react"

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <h1 className="text-2xl mb-8 md:text-7xl uppercase font-bold ">
      {children}
    </h1>
  )
}

export default SectionTitle

import React from "react"

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <h1 className="text-4xl mb-4 md:text-7xl uppercase font-bold text-center">
      {children}
    </h1>
  )
}

export default SectionTitle

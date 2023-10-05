import React from "react"

interface WrapperProps {
  children: React.ReactNode
  section?: boolean
  className?: string
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  className = "",
  section = false,
}) => {
  const sectionClassname = "flex gap-4 md:gap-10 flex-col !px-0"

  return (
    <div
      className={`max-w-7xl mx-auto w-full px-2 ${className} ${
        section && sectionClassname
      }`}
    >
      {children}
    </div>
  )
}

export default Wrapper
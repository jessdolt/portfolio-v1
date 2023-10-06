import React from "react"

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-sm mt-2 leadning-normal dark:font-[200]">{children}</p>
  )
}

export default Description

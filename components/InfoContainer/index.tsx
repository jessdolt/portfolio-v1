import React from "react"

const InfoContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={`flex flex-col mb-8 md:gap-2`}>{children}</div>
}

export default InfoContainer

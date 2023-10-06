import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import React from "react"

interface LinkTitleProps {
  title: string
  url: string
}

const LinkTitle: React.FC<LinkTitleProps> = ({ title, url }) => {
  return (
    <a
      className="font-bold hover:scale-[1.02] transition md:text-xl flex mr-auto"
      href={url}
      target="_blank"
    >
      {title}
      <span className="ml-1">
        <ArrowTopRightOnSquareIcon className="w-3" />
      </span>
    </a>
  )
}

export default LinkTitle

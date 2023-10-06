import React from "react"

interface LinkViewProps {
  url: string
  title: string
}

const LinkView: React.FC<LinkViewProps> = ({ title, url }) => {
  return (
    <a
      className="mr-auto mb-12 border-b border-b-transparent hover:border-b-black transition dark:hover:border-b-white"
      href={url}
      target="_blank"
    >
      {title}
    </a>
  )
}

export default LinkView

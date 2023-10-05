import React from "react"
import Badge from "../Badge"

interface BadgesProps<T> {
  items: T[]
}

const Badges = <T extends string | number>({ items }: BadgesProps<T>) => {
  return (
    <div className="flex w-full flex-wrap mt-2 gap-2">
      {items.map((item, index) => (
        <Badge key={index}>{item}</Badge>
      ))}
    </div>
  )
}

export default Badges

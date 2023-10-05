import Wrapper from "../Wrapper"
import SectionTitle from "../SectionTitle"
import React, { useEffect, useState, useRef } from "react"

interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
  isSticky?: boolean
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isSticky, setIsSticky] = useState(false)

  const sectionTitleRef = useRef<HTMLDivElement>(null)
  const sectionTitleEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sectionTitle = sectionTitleRef.current
      const sectionTitle2 = sectionTitleEndRef.current

      const rect = sectionTitle?.getBoundingClientRect()
      // const rect2 = sectionTitle2?.getBoundingClientRect()
      // console.log(rect2.top)
      // if (rect2.top <= 0) {
      //   setIsSticky(false)
      //   return
      // }

      if (!rect) return

      if (rect.top <= 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll)

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Wrapper section>
      <div ref={sectionTitleRef}>
        <SectionTitle isSticky={isSticky}>{title}</SectionTitle>
      </div>
      {children}

      <div ref={sectionTitleEndRef}></div>
    </Wrapper>
  )
}

export default Section

import React from "react"
import Wrapper from "../Wrapper"
import SectionTitle from "../SectionTitle"

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="px-3 py-1 text-sm bg-black/90 text-white min-w-fit rounded-full  m-1 md:m-2 md:text-2xl">
    {children}
  </div>
)

const Skills = () => {
  const skillsArray = [
    "ReactJs",
    "NextJs",
    "JavaScript",
    "TypeScript",
    "Redux",
    "NodeJs",
    "PHP",
    "Laravel",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Prisma",
    "MySQL",
  ]

  return (
    <Wrapper section>
      <SectionTitle>Skills</SectionTitle>

      <div className="flex md:justify-center w-full flex-wrap items-center max-w-6xl mx-auto">
        {skillsArray.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </div>
    </Wrapper>
  )
}

export default Skills

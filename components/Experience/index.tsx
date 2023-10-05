import React from "react"
import Wrapper from "../Wrapper"
import SectionTitle from "../SectionTitle"

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 py-2 bg-black/90 text-white min-w-fit rounded-full m-2 text-2xl">
    {children}
  </div>
)

const Experience = () => {
  const expArray = [
    {
      id: 1,
      label: "April 2019 - June 2019",
      company: "Vertiv Philippines, Inc.",
      position: "Data Encoder Intern",
    },
    {
      id: 2,
      label: "June 2022 - April 2023",
      company: "ALC Group of Companies",
      position: "Junior Web Developer",
    },
    {
      id: 3,
      label: "May 2023 - Present",
      company: "Chanz IT Business Solutions Inc.",
      position: "Full Stack Developer",
    },
  ]

  return (
    <Wrapper section>
      <SectionTitle>Experience</SectionTitle>

      <div className="flex flex-col gap-8 md:gap-12">
        {expArray
          .sort((a, b) => b.id - a.id)
          .map((exp, i) => (
            <div
              className={`flex flex-col md:gap-2 ${
                i % 2 != 0 && "md:self-end md:text-right"
              } `}
            >
              <h2 className="text-2xl md:text-6xl uppercase font-bold text-black/60">
                {exp.label}
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold">{exp.company}</h3>
              <p className="text-2xl md:text-4xl">{exp.position}</p>
            </div>
          ))}
      </div>
    </Wrapper>
  )
}

export default Experience

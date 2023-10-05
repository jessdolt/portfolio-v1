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
      {/* <SectionTitle>Work Experience</SectionTitle> */}

      <div className="flex flex-col  gap-8 md:gap-12">
        {expArray
          .sort((a, b) => b.id - a.id)
          .map((exp, i) => (
            <div
              className={`flex md:gap-2 ${
                i % 2 != 0 && "md:self-end md:text-right"
              } `}
              key={exp.id}
            >
              <div className="max-w-[100px]">
                <h2 className="text-md font-bold md:text-6xl text-black/70">
                  {exp.label}
                </h2>
              </div>
              <div>
                <h3 className="text-md font-bold md:text-4xl ">
                  {exp.company}
                </h3>
                <p className="text-md font-[300] md:text-4xl ">
                  {exp.position}
                </p>
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  )
}

export default Experience

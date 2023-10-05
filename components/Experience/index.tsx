import React from "react"
import Wrapper from "../Wrapper"
import SectionTitle from "../SectionTitle"
import { expArray } from "./constants"

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="px-3 py-1 text-xs bg-primary-dark dark:bg-primary text-primary-dark dark:text-primary min-w-fit rounded-full  md:m-2 md:text-2xl">
    {children}
  </div>
)

const Experience = () => {
  return (
    <Wrapper section>
      <SectionTitle>Experience</SectionTitle>

      <div className="flex flex-col ">
        {expArray
          .sort((a, b) => b.id - a.id)
          .map((exp, i) => (
            <div
              className={`flex flex-col mb-10 md:gap-2 ${
                i % 2 != 0 && "md:self-end md:text-right"
              } `}
              key={exp.id}
            >
              <div className="leading-snug flex flex-col">
                <h2 className="text-xs mb-2 md:text-6xl text-black/80">
                  {exp.label}
                </h2>
                <a
                  className="font-bold hover:scale-[1.02] transition md:text-4xl"
                  href={exp.companyLink}
                  target="_blank"
                >
                  {exp.company}
                </a>
                <p className="md:text-4xl">{exp.position}</p>
              </div>

              <p className="text-sm mt-2 leadning-normal">{exp.description}</p>

              <div className="flex w-full flex-wrap mt-2 gap-2">
                {exp.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
      </div>
    </Wrapper>
  )
}

export default Experience

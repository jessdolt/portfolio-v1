import React from "react"
import Wrapper from "../Wrapper"
import SectionTitle from "../SectionTitle"
import { expArray } from "./constants"
import Badge from "../Badge"

const Projects = () => {
  return (
    <Wrapper section>
      <SectionTitle>Projects</SectionTitle>

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
                <a
                  className="font-bold hover:scale-[1.02] transition md:text-4xl mr-auto"
                  href={exp.url}
                  target="_blank"
                >
                  {exp.title}
                </a>
                {/* <p className="md:text-4xl">{exp.position}</p> */}
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

export default Projects

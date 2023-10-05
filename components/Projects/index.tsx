import React from "react"
import Wrapper from "../Wrapper"
import SectionTitle from "../SectionTitle"
import { expArray } from "./constants"
import Badge from "../Badge"
import Section from "../Section"
import Badges from "../Badges"
import LinkTitle from "../LinkTitle"

const Projects = () => {
  return (
    <Section title="Projects">
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
                <LinkTitle url={exp.url} title={exp.title} />
              </div>

              <p className="text-sm mt-2 leadning-normal">{exp.description}</p>

              <Badges items={exp.skills} />
            </div>
          ))}
      </div>
    </Section>
  )
}

export default Projects

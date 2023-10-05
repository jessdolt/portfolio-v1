import React from "react"
import { expArray } from "./constants"
import Section from "../Section"
import Badges from "../Badges"
import LinkTitle from "../LinkTitle"

const Experience = () => {
  return (
    <Section title="Experience">
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
                <LinkTitle title={exp.company} url={exp.companyLink} />
                <p className="md:text-4xl">{exp.position}</p>
              </div>

              <p className="text-sm mt-2 leadning-normal">{exp.description}</p>

              <Badges items={exp.skills} />
            </div>
          ))}
      </div>
    </Section>
  )
}

export default Experience

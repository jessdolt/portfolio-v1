import React from "react"
import { expArray } from "./constants"
import Section from "../Section"
import Badges from "../Badges"
import LinkTitle from "../LinkTitle"
import LinkView from "../LinkView"
import Description from "../Description"
import InfoContainer from "../InfoContainer"

const Experience = () => {
  return (
    <Section title="Experience">
      <div className="flex flex-col">
        {expArray
          .sort((a, b) => b.id - a.id)
          .map((exp, i) => (
            <InfoContainer key={i}>
              <div className="leading-snug flex flex-col">
                <h2 className="text-xs mb-2 md:text-6xl text-black/80">
                  {exp.label}
                </h2>
                <LinkTitle title={exp.company} url={exp.companyLink} />
                <p className="md:text-4xl">{exp.position}</p>
              </div>
              <Description>{exp.description}</Description>
              <Badges items={exp.skills} />
            </InfoContainer>
          ))}

        <LinkView title="View Full Résumé" url="/jess.pdf" />
      </div>
    </Section>
  )
}

export default Experience

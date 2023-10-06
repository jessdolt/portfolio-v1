import React from "react"
import Wrapper from "../Wrapper"
import SectionTitle from "../SectionTitle"
import { expArray } from "./constants"
import Badge from "../Badge"
import Section from "../Section"
import Badges from "../Badges"
import LinkTitle from "../LinkTitle"
import LinkView from "../LinkView"
import Description from "../Description"
import InfoContainer from "../InfoContainer"

const Projects = () => {
  return (
    <Section title="Projects">
      <div className="flex flex-col ">
        {expArray
          .sort((a, b) => b.id - a.id)
          .map((exp, i) => (
            <InfoContainer key={i}>
              <div className="leading-snug flex flex-col">
                <LinkTitle url={exp.url} title={exp.title} />
              </div>

              <Description>{exp.description}</Description>

              <Badges items={exp.skills} />
            </InfoContainer>
          ))}

        <LinkView
          title="View Project Archives"
          url="https://github.com/jessdolt?tab=repositories"
        />
      </div>
    </Section>
  )
}

export default Projects

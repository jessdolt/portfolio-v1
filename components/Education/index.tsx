import React from "react"
import Wrapper from "../Wrapper"
import SectionTitle from "../SectionTitle"

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 py-2 bg-black/90 text-white min-w-fit rounded-full m-2 text-2xl">
    {children}
  </div>
)

const Education = () => {
  const expArray = [
    {
      id: 1,
      label: "2018 - 2021",
      school: "Polytechnic University of the Philippines",
      course: "Diploma in Information Communication Technology",
    },
    {
      id: 2,
      label: "2021 - 2023",
      school: "Polytechnic University of the Philippines",
      course: "Bachelor of Science in Information Technology",
    },
  ]

  return (
    <Wrapper section>
      <SectionTitle>Education</SectionTitle>

      <div className="flex flex-col  gap-8 md:gap-12">
        {expArray
          .sort((a, b) => b.id - a.id)
          .map((edu, i) => (
            <div
              className={`flex flex-col md:gap-2 ${
                i % 2 != 0 && "md:self-end md:text-right"
              } `}
              key={edu.id}
            >
              <h2 className="text-2xl font-bold md:text-6xl text-black/70">
                {edu.label}
              </h2>
              <h3 className="text-md font-bold md:text-4xl ">{edu.course}</h3>
              <p className="text-md font-[300] md:text-4xl ">{edu.school}</p>
            </div>
          ))}
      </div>
    </Wrapper>
  )
}

export default Education

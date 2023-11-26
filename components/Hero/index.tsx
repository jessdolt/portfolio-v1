import React from "react"
import Wrapper from "../Wrapper"
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

const socialMedia = [
  {
    id: 1,
    icon: <FaFacebookSquare size={48} />,
    link: "https://www.facebook.com/jessdolt",
  },
  {
    id: 2,
    icon: <FaLinkedin size={48} />,
    link: "https://www.linkedin.com/in/jess-roque-b503a1184/",
  },
  {
    id: 3,
    icon: <FaGithubSquare size={48} />,
    link: "https://github.com/jessdolt",
  },
]

const Hero = () => {
  const date = new Date()
  return (
    <Wrapper className="mb-14 flex flex-col gap-12 lg:gap-0 ">
      <div className="flex flex-col justify-between mt-6 lg:flex-row ">
        <h1 className="text-5xl md:text-[74px] md:max-w-2xl lg:text-[104px] xl:text-[128px] lg:max-w-5xl break-words w-full font-bold leading-none uppercase ">
          Front End Developer
        </h1>
        <span className="text-xl lg:text-3xl font-bold">
          ({date.getFullYear()})
        </span>
      </div>

      <div className="flex flex-col gap-2 lg:max-w-[55%] lg:ml-auto">
        <h1 className="text-4xl md:text-5xl lg:text-[64px] lg:text-right font-bold uppercase leading-none ">
          Jess Roque
        </h1>
        <p className="text-lg font-[300] lg:text-2xl lg:text-right lg:ml-auto">
         a passionate full-stack developer with a strong focus on creating immersive and user-friendly front-end experiences. My expertise in coding ensures that every project I undertake seamlessly combines creativity with technical precision, delivering both aesthetics and functionality seamlessly
        </p>

        <div className="flex gap-2 lg:justify-end">
          {socialMedia.map((social) => (
            <a href={social.link} key={social.id} target="_blank">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero

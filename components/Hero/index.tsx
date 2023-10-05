import React from "react"
import Wrapper from "../Wrapper"
import ScrollAnimation from "react-animate-on-scroll"
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
        <h1 className="text-5xl lg:text-[148px] max-w-5xl break-words w-full font-bold leading-none uppercase ">
          Front End Developer
        </h1>
        <span className="text-xl lg:text-4xl font-bold">
          ({date.getFullYear()})
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl lg:text-[124px] font-bold uppercase leading-none ">
          Jess Roque
        </h1>
        <p className="text-lg font-[300] lg:text-3xl">
          a passionate full-stack developer with a keen focus on creating
          immersive and user-friendly front-end experiences. With a background
          in both design and coding, I bring a unique blend of creativity and
          technical expertise to every project I undertake.
        </p>

        <div className="flex gap-2">
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

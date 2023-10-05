import React from "react"
import Wrapper from "../Wrapper"
import ScrollAnimation from "react-animate-on-scroll"

const Hero = () => {
  const date = new Date()
  return (
    <Wrapper className="min-h-[90vh] flex flex-col justify-center gap-12 lg:gap-0 ">
      <div className="flex flex-col justify-between lg:flex-row">
        <h1 className="text-6xl lg:text-[148px] max-w-5xl break-words w-full font-bold leading-none uppercase ">
          Front End Developer
        </h1>
        <span className="text-xl lg:text-4xl font-bold">
          ({date.getFullYear()})
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-5xl lg:text-[124px] font-bold uppercase leading-none ">
          Jess Roque
        </h1>
        <p className="text-lg font-[300] lg:text-3xl">
          a passionate full-stack developer with a keen focus on creating
          immersive and user-friendly front-end experiences. With a background
          in both design and coding, I bring a unique blend of creativity and
          technical expertise to every project I undertake.
        </p>

        <button className="bg-black text-white mt-2 block mr-auto py-3 px-6 rounded-lg lg:hidden">
          About me
        </button>
      </div>
    </Wrapper>
  )
}

export default Hero

import React from "react"
import Wrapper from "../Wrapper"
import ScrollAnimation from "react-animate-on-scroll"

const Hero = () => {
  const date = new Date()
  return (
    <Wrapper className="mt-10 min-h-screen flex flex-col gap-12 lg:gap-0 ">
      <div className="flex justify-between flex-col lg:flex-row">
        <h1 className="text-[44px] lg:text-[148px] max-w-4xl font-bold leading-none uppercase ">
          Front End Developer
        </h1>
        <span className="text-xl lg:text-4xl font-bold">
          ({date.getFullYear()})
        </span>
      </div>

      <div className="flex flex-col max-w-3xl ml-auto gap-2 lg:gap-10 lg:items-end lg:justify-end">
        <h1 className="text-4xl lg:text-[124px] font-bold uppercase  leading-none ">
          Jess Roque
        </h1>
        <p className="texl-xl lg:text-3xl">
          a passionate full-stack developer with a keen focus on creating
          immersive and user-friendly front-end experiences. With a background
          in both design and coding, I bring a unique blend of creativity and
          technical expertise to every project I undertake.
        </p>

        <button className="bg-black text-white mt-2 block mr-auto py-2 px-4 rounded-lg lg:hidden">
          About me
        </button>
      </div>
    </Wrapper>
  )
}

export default Hero

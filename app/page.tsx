"use client"
import Experience from "@/components/Experience"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Wrapper from "@/components/Wrapper"
import { useTheme } from "@/hooks/ThemeProvider"

export default function Home() {
  const { theme } = useTheme()
  return (
    <main className={`${theme && "dark"} `}>
      <main
        className={`bg-primary min-h-screen dark:bg-primary-dark dark:text-primary-dark`}
      >
        <Header />
        <Hero />
        <Wrapper className="flex flex-col gap-4  md:gap-[128px] md:my-[128px]">
          <Experience />
          <Projects />
          {/* <Skills /> */}
          {/* <Education /> */}
        </Wrapper>
      </main>
    </main>
  )
}

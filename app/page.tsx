"use client"
import ContactMe from "@/components/ContactMe"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Wrapper from "@/components/Wrapper"
import { useTheme } from "@/hooks/ThemeProvider"

export default function Home() {
  const { theme } = useTheme()
  return (
    <main className={`${theme && "dark"} relative `}>
      <main
        className={`bg-primary min-h-screen dark:bg-primary-dark dark:text-primary-dark `}
      >
        <Header />
        <Hero />
        <Wrapper className="flex flex-col ">
          <Experience />
          <Projects />
          <ContactMe />
          {/* <Skills /> */}
          {/* <Education /> */}
          <Footer />
          <div className="pb-10"></div>
        </Wrapper>
      </main>
    </main>
  )
}

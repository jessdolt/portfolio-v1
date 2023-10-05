import Experience from "@/components/Experience"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Wrapper from "@/components/Wrapper"

export default function Home() {
  return (
    <main className="bg-[#EEEEEE] min-h-screen">
      <Header />
      <Hero />
      <Wrapper className="flex flex-col gap-[48px] py-8 md:gap-[128px] md:my-[128px]">
        <Experience />
        <Skills />
      </Wrapper>
    </main>
  )
}

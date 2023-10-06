import React from "react"
import Section from "../Section"

const Footer = () => {
  return (
    <Section>
      <footer className=" py-4">
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-gray-600 dark:text-white dark:font-[200]">
            Created using{" "}
            <a
              href="https://nextjs.org/"
              className="text-primary dark:text-primary-dark font-bold hover:underline transition"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              className="text-primary dark:text-primary-dark font-bold hover:underline transition"
            >
              Tailwind CSS
            </a>
            , and hosted on{" "}
            <a
              href="https://vercel.com/"
              className="text-primary dark:text-primary-dark font-bold hover:underline transition"
            >
              Vercel{" "}
            </a>
            👨‍💻⚙️🚀
          </p>
        </div>
      </footer>
    </Section>
  )
}

export default Footer

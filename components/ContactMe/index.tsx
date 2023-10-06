import React, { useState, useRef } from "react"
import Section from "../Section"
import InputGroup from "../InputGroup"
import emailjs from "@emailjs/browser"

const formInitalValue = {
  name: "",
  email: "",
  contact_no: "",
  subject: "",
  message: "",
}
const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null)
  const [fields, setFields] = useState(formInitalValue)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
    if (form.current === null) return console.log("form is null")

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    } catch (e) {
      console.log(e)
    } finally {
      setFields(formInitalValue)
    }
  }

  return (
    <Section title="Contact Me">
      <form className="space-y-4" ref={form} onSubmit={handleSubmit}>
        <InputGroup
          id="name"
          label="Name"
          value={fields.name}
          required
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
        />
        <InputGroup
          id="email"
          label="Email"
          required
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />
        <InputGroup
          id="contact_no"
          label="Contact No."
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
        />

        <InputGroup
          id="subject"
          label="Subject"
          value={fields.subject}
          onChange={(e) => setFields({ ...fields, subject: e.target.value })}
        />
        <InputGroup
          id="message"
          label="Message"
          required
          textArea
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
        />

        <button
          type="submit"
          className="w-full p-2 bg-primary-dark dark:bg-primary text-primary-dark dark:text-primary rounded-md"
        >
          Submit
        </button>
      </form>
    </Section>
  )
}

export default ContactMe

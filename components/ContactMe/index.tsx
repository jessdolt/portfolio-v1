import React, { useState, useRef } from "react"
import Section from "../Section"
import InputGroup from "../InputGroup"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"

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
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
    if (form.current === null) return console.log("form is null")

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      toast.success("Message sent successfully")
    } catch (e) {
      console.log(e)
    } finally {
      setFields(formInitalValue)
      setIsLoading(false)
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
          disabled={isLoading}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
        />
        <InputGroup
          id="email"
          label="Email"
          required
          value={fields.email}
          disabled={isLoading}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />
        <InputGroup
          id="contact_no"
          label="Contact No."
          value={fields.contact_no}
          disabled={isLoading}
          onChange={(e) => setFields({ ...fields, contact_no: e.target.value })}
        />

        <InputGroup
          id="subject"
          label="Subject"
          disabled={isLoading}
          value={fields.subject}
          onChange={(e) => setFields({ ...fields, subject: e.target.value })}
        />
        <InputGroup
          id="message"
          label="Message"
          required
          textArea
          disabled={isLoading}
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
        />

        <button
          type="submit"
          className="w-full p-2 bg-primary-dark dark:bg-primary text-primary-dark dark:text-primary rounded-md disabled:opacity-75"
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
    </Section>
  )
}

export default ContactMe

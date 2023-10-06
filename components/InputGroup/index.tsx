import React from "react"

interface InputGroupProps {
  id: string
  label: string
  value: string
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  type?: string
  textArea?: boolean
  required?: boolean
}

const InputGroup: React.FC<InputGroupProps> = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  textArea,
  required,
}) => {
  return (
    <div className="">
      <label htmlFor={id} className="mb-2 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {!textArea ? (
        <input
          name={id}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required
          className="p-2 border rounded-md border-black/80 w-full max-w-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
        />
      ) : (
        <textarea
          id={id}
          name={id}
          required
          value={value}
          onChange={onChange}
          className="p-2 border rounded-md border-black/80 w-full max-w-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
        />
      )}
    </div>
  )
}

export default InputGroup

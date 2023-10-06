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
  disabled?: boolean
}

const InputGroup: React.FC<InputGroupProps> = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  textArea,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="">
      <label htmlFor={id} className="text-sm mb-2 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {!textArea ? (
        <input
          name={id}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className="text-sm p-2 border rounded-md  text-black border-black/80 w-full max-w-md focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-black disabled:opacity-75"
        />
      ) : (
        <textarea
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="text-sm p-2  border rounded-md text-black border-black/80 w-full max-w-md focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-black disabled:opacity-75"
        />
      )}
    </div>
  )
}

export default InputGroup

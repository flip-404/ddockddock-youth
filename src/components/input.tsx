/* eslint-disable react/jsx-props-no-spreading */

import type { UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
  label: string
  name: string
  kind: 'login' | 'signup'
  type: string
  register: UseFormRegisterReturn
  required?: boolean
}

export default function Input({
  label,
  name,
  kind,
  register,
  type,
  required,
}: InputProps) {
  return kind === 'signup' ? (
    <label htmlFor={name} className="flex flex-col">
      <span className="flex text-sm">{label}</span>
      <input
        type={type}
        id={name}
        required={required}
        {...register}
        className="p-2 border-2 w-full text-sm"
      />
    </label>
  ) : (
    <input
      type={type}
      id={name}
      required={required}
      className="mt-2 p-3 border-2"
      placeholder={label}
      {...register}
    />
  )
}

Input.defaultProps = {
  required: false,
}

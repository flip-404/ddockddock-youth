type ErrorMessageProps = {
  message: string
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex justify-start text-xs text-red-500">{message}</div>
  )
}

export default ErrorMessage

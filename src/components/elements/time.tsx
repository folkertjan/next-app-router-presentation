interface TimeProps {
  time?: string
}

export const Time = ({ time }: TimeProps) => {
  const now = time ?? new Date().toISOString()

  return now
}

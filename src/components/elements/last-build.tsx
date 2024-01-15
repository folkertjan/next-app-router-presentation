import { Time } from './time'

interface LastBuildProps {
  label: string
  time?: string
}

export const LastBuild = ({ label, time }: LastBuildProps) => {
  return (
    <div className="pb-4 border-b mt-4 mb-8">
      {label} re-built on server: <Time time={time} />
    </div>
  )
}

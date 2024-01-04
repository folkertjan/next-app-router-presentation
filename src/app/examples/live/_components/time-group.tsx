import { Time } from './time'

export const ComponentBuiltLastTime = ({ label }: { label: string }) => {
  return (
    <div className="pb-4 border-b mt-4 mb-8">
      {label} re-built on server: <Time />
    </div>
  )
}

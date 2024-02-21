/* eslint-disable no-console */
import { Button } from '../ui/button'
import { summon } from '@/utils/lib'

export default function Countries() {
  const { data } = summon('https://restcountries.com/v3.1/name/china')

  console.count('re-renders')
  console.dir(data)

  const r = Math.floor(Math.random() * 2)
  if (r) {
    throw new Error(
      '(simulated) Error occurred which is captured by the ErrorBoundary'
    )
  }

  return (
    <div>
      {data.map((item: { fifa: string; flag: string }) => (
        <Button
          className="ml-2"
          // variant="destructive"
          key={item.fifa}
        >
          {item.flag} {item.fifa}
        </Button>
      ))}
    </div>
  )
}

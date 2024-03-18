/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { useSuspenseQueries } from '@tanstack/react-query'
import { Button } from '../ui/button'
import {
  exampleQueryOption1WithRealFetch,
  exampleQueryOption2SimulatedFetch,
  exampleQueryOption3SimulatedFetch
} from '@/utils/exampleQueryOptions'

export default function ExampleComponent() {
  const { data } = useSuspenseQueries({
    queries: [
      exampleQueryOption1WithRealFetch(),
      exampleQueryOption2SimulatedFetch(),
      exampleQueryOption3SimulatedFetch()
    ],
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending)
      }
    }
  })

  console.count('re-renders')

  return (
    <div>
      {Array.isArray(data[0]) &&
        data[0].map((item: { fifa: string; flag: string }) => (
          <Button
            className="ml-2"
            key={item.fifa}
          >
            {item.flag} {item.fifa}
          </Button>
        ))}
    </div>
  )
}

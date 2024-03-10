/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { useSuspenseQuery } from '@tanstack/react-query'
import { Button } from '../ui/button'
import { countriesQueryOption } from '@/utils/queryOptions'

export default function CountriesWithQuery() {
  const { data } = useSuspenseQuery(countriesQueryOption())

  console.count('re-renders')

  // const r = Math.floor(Math.random() * 2)
  // if (r) {
  //   throw new Error(
  //     '(simulated) Error occurred which is captured by the ErrorBoundary'
  //   )
  // }

  return (
    <div>
      {data?.map((item: { fifa: string; flag: string }) => (
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

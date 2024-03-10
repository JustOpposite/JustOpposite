/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import axios from 'axios'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Button } from '../ui/button'
import { wait } from '@/utils/lib'

const qfn = () =>
  axios.get('https://restcountries.com/v3.1/name/china').then(async (res) => {
    await wait(2000)
    return res.data
  })

export default function CountriesWithQuery() {
  const { data } = useSuspenseQuery({
    queryKey: ['countries'],
    queryFn: qfn
  })

  console.count('re-renders')

  const r = Math.floor(Math.random() * 2)
  if (r) {
    throw new Error(
      '(simulated) Error occurred which is captured by the ErrorBoundary'
    )
  }

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

import { queryOptions } from '@tanstack/react-query'
import axios from 'axios'
import { wait } from './lib'

export const enum QKey {
  COUNTRIES = 'Countries',
  FAKE1 = 'Fake1',
  FAKE2 = 'Fake2',
  ERROR = 'error'
}

const fetchCountries = () =>
  axios.get('https://restcountries.com/v3.1/name/china').then(async (res) => {
    //    await randomizerErrorAndDelay()
    return res.data
  })

const fakeFetch = async () => {
  await wait(1000)
  return 'foobar'
}

const fakeFetch2 = async () => {
  await wait(2000)
  return 'foobar long'
}

const fakeFetchWithError = async () => {
  await wait(500)
  throw new Error(
    '(simulated) Error occurred which is captured by the ErrorBoundary'
  )
}

export const fetchWithError = () => {
  axios.get('https://Xrestcountries.com/v3.1/name/china').then(async (res) => {
    await wait(1000)
    return res.data
  })
}
export const exampleQueryOption1WithRealFetch = () =>
  queryOptions({
    queryKey: [QKey.COUNTRIES],
    queryFn: fetchCountries,
    retry: 3,
    staleTime: Infinity // this is important for use with suspsense on parallel query requests
  })

export const exampleQueryOption2SimulatedFetch = () =>
  queryOptions({
    queryKey: [QKey.FAKE1],
    queryFn: fakeFetch
  })

export const exampleQueryOption3SimulatedFetch = () =>
  queryOptions({
    queryKey: [QKey.FAKE2],
    queryFn: fakeFetch2,
    throwOnError: false
  })

export const exampleQueryOptionWithError = () =>
  queryOptions({
    queryKey: [QKey.ERROR],
    queryFn: fakeFetchWithError,
    throwOnError: false
  })

import { queryOptions } from '@tanstack/react-query'
import axios from 'axios'
import { wait } from './lib'

const fetchCountries = () =>
  axios.get('https://restcountries.com/v3.1/name/china').then(async (res) => {
    await wait(2000)
    return res.data
  })

export const countriesQueryOption = () =>
  queryOptions({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    retry: 4
  })

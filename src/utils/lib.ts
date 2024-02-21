/* eslint-disable import/prefer-default-export */
import useSWR from 'swr'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function summon(url: string) {
  const fetcher = () => fetch(url).then((r) => r.json())
  return useSWR(url, fetcher, {
    suspense: true
  })
}

export function doSomethingOnReset() {
  // this is where you can perform some task wheen error boundary is reset
  window.alert('User clicked on try again after an error')
}

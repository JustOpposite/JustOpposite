import useSWR from 'swr'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wait(duration: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export async function randomizerErrorAndDelay() {
  const r = Math.floor(Math.random() * 2)
  if (r) {
    throw new Error(
      '(simulated) Error occurred which is captured by the ErrorBoundary'
    )
  }
  await wait(2000)
}

export function summon(url: string, randError = true) {
  const fetcher = () =>
    fetch(url).then(async (r) => {
      if (randError) {
        await randomizerErrorAndDelay()
      }
      return r.json()
    })
  return useSWR(url, fetcher, {
    suspense: true
  })
}

export function doSomethingOnReset() {
  // this is where you can perform some task wheen error boundary is reset
  // eslint-disable-next-line no-alert
  window.alert('User clicked on try again after an error')
}

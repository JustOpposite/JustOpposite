/* eslint-disable react/no-unstable-nested-components */
import CountriesWithQuery from '@/components/shared/CountriesWithQuery'

export default function HomeQueryOnly() {
  return (
    <div>
      <p className="mb-5">Tanstack Query Load Countries bare...</p>
      <CountriesWithQuery />
    </div>
  )
}

/* eslint-disable react/no-unstable-nested-components */
import BoundaryContainer from '@/components/shared/BoundaryContainer'
import ExampleComponent from '@/components/shared/ExampleComponent'

export default function ExampleView() {
  return (
    <div>
      <p className="mb-5">
        This is an Example view which uses BoundaryContainer to house
        ExampleComponent
      </p>
      <BoundaryContainer>
        <p className="mb-5">(ExampleComponent below:)</p>
        <ExampleComponent />
      </BoundaryContainer>
    </div>
  )
}

import { render } from '@testing-library/react'
import About from './About'

describe('<About />', () => {
  test('it can render', () => {
    const testValues = { title: 'title', description: 'description' }
    const { container, getByText } = render(
      <About title={testValues.title} description={testValues.description} />
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(getByText(testValues.title)).toBeInTheDocument()
    expect(getByText(testValues.description)).toBeInTheDocument()
  })
})

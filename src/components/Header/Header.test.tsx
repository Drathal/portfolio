import { render } from '@testing-library/react'
import Header from './Header'

describe('<Header />', () => {
  test('it can render', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

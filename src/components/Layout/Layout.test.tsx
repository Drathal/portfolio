import { render } from '@testing-library/react'
import Layout from './index'

// render head elements into body
jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: Array<React.ReactElement> }) => {
    return children
  }
}))

describe('<About />', () => {
  test('it can render', () => {
    const testValues = { pageTitle: 'title', child: 'child' }
    const { container, getByText } = render(
      <Layout pageTitle={testValues.pageTitle}>{testValues.child}</Layout>
    )

    expect(container).toMatchSnapshot()
    expect(getByText(testValues.child)).toBeInTheDocument()
    expect(getByText(testValues.pageTitle)).toBeInTheDocument()
  })
})

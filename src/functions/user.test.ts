import { handler } from './user'

describe('user', () => {
  test('no auth with wrong password', async () => {
    const event = {
      queryStringParameters: { msg: 'a' }
    }

    const mockedHandler = jest.fn().mockImplementation(handler)
    const result = await mockedHandler(event)

    expect(result).toEqual({
      body: '{"auth":false}',
      headers: { 'Content-Type': 'application/json' },
      statusCode: 401
    })
  })

  test('no auth without password', async () => {
    const event = {}

    const mockedHandler = jest.fn().mockImplementation(handler)
    const result = await mockedHandler(event)

    expect(result).toEqual({
      body: '{"auth":false}',
      headers: { 'Content-Type': 'application/json' },
      statusCode: 401
    })
  })

  test('valid auth with right password', async () => {
    const event = { queryStringParameters: { msg: process.env.PASSWORD } }

    const mockedHandler = jest.fn().mockImplementation(handler)
    const result = await mockedHandler(event)

    expect(result).toEqual({
      body: '{"auth":true}',
      headers: { 'Content-Type': 'application/json' },
      statusCode: 200
    })
  })
})

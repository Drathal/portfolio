import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import dotenv from 'dotenv'

dotenv.config()

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const msg = event?.queryStringParameters?.msg

  if (msg === process.env.PASSWORD) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ auth: true })
    }
  }

  return {
    statusCode: 401,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ auth: false })
  }
}

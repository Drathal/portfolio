import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import dotenv from 'dotenv'

dotenv.config()

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const { msg } = event.queryStringParameters

  if (msg !== process.env.PASSWORD) {
    return {
      statusCode: 401,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ auth: false })
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ auth: true })
  }
}

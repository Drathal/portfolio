import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import dotenv from 'dotenv'

dotenv.config()

export const handler = async (
  event: APIGatewayEvent
  // context: Context
): Promise<APIGatewayProxyResult> => {
  const { msg } = event.queryStringParameters

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ msg, test: process.env.PASSWORD })
  }
}

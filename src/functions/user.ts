import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import dotenv from 'dotenv'

dotenv.config()

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const { msg } = event.queryStringParameters

  console.log(context)

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

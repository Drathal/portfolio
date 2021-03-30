import { useQuery } from 'react-query'
import { authRequest, AuthData } from './authRequest'

interface UseAuth {
  isLoading: boolean
  error: unknown
  data: AuthData
}

export const useAuth = (password: string): UseAuth => {
  const { isLoading, error, data } = useQuery('fetch', async () => {
    const response = await authRequest(password)
    return response.data || { auth: false }
  })

  return { isLoading, error, data }
}

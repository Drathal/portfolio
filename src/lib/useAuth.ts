import { useQuery } from 'react-query'
import { authRequest, AuthData } from './authRequest'

interface UseAuth {
  isLoading: boolean
  error: unknown
  data: AuthData
}

export const useAuth = (password: string): UseAuth =>
  useQuery(['fetchAuth', password], async () => {
    if (!password) {
      return { auth: false }
    }

    const response = await authRequest(password)
    return response.data || { auth: false }
  })

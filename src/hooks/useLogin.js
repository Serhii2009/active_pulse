import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../contexts/AuthContext.jsx'

const useLogin = () => {
  const { login } = useAuth()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const loginUser = async (values) => {
    console.log('loginUser called with values:', values)
    try {
      setError(null)
      setLoading(true)
      const res = await fetch(
        'https://active-pulse-server.onrender.com/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      )

      const data = await res.json()
      console.log('Response data:', data)
      if (res.status === 200) {
        // для входу зазвичай використовується статус 200
        toast.success(data.message)
        login(data.token, data.user)
      } else if (res.status === 401) {
        // додано статус для невірного входу
        setError(data.message)
        toast.error(data.message)
      } else {
        toast.error('Login failed.')
      }
    } catch (error) {
      console.error('Error occurred:', error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, loginUser }
}

export default useLogin

import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../contexts/AuthContext.jsx'

const useSignup = () => {
  const { login } = useAuth()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const registerUser = async (values) => {
    console.log('registerUser called with values:', values)
    try {
      setError(null)
      setLoading(true)

      const apiUrl =
        // eslint-disable-next-line no-undef
        process.env.NODE_ENV === 'production'
          ? 'https://active-pulse-server.onrender.com/api/auth/signup'
          : 'http://localhost:3000/api/auth/signup'

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await res.json()
      console.log('Response data:', data)
      if (res.status === 201) {
        toast.success(data.message)
        login(data.token, data.user)
      } else if (res.status === 400) {
        setError(data.message)
        toast.error(data.message)
      } else {
        toast.error('Registration failed.')
      }
    } catch (error) {
      console.error('Error occurred:', error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, registerUser }
}

export default useSignup

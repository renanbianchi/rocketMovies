import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { api } from '../service/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

      localStorage.setItem('@rocketmovies:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('não foi possível entrar')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:user')
    localStorage.removeItem('@rocketmovies:token')

    setData('')
  }

  async function updateProfile(user, avatarFile) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('file', avatarFile)

        const response = await api.patch('/avatar', fileUploadForm)

        user.avatar = response.data.avatar
      }

      const response = await api.put('/users', user)

      const { updatedUser } = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(updatedUser))

      setData({ user: updatedUser, token: data.token })
      alert('Perfil atualizado')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualizar o perfil.')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketmovies:token')
    const user = localStorage.getItem('@rocketmovies:user')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth }

AuthProvider.propTypes = {
  children: PropTypes.object,
}

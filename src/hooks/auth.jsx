import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'

import { api } from "../service/api";

export const AuthContext = createContext({})

function AuthProvider( { children }) {
  const [data, setData] = useState({})

  async function signIn({email, password}) {
    
    try {
      const response = await api.post("/sessions", {email, password})
      const { user, token } = response.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      localStorage.setItem("@rocketmovies:token", token)
      
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({user, token})
    }
    catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      }
      else {
        alert("não foi possível entrar")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user")
    localStorage.removeItem("@rocketmovies:token")

    setData("")

  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token")
    const user = localStorage.getItem("@rocketmovies:user")

    console.log(token, user)
    
    if (token && user) {
    
    api.defaults.headers.authorization = `Bearer ${token}`
    
    setData({ 
      token, 
      user: JSON.parse(user)
    }) 
  }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth }

AuthProvider.propTypes = {
  children: PropTypes.object
}
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import  GlobalStyles from './styles/global'
import theme from './styles/theme'
import { Routes } from './routes'

import { AuthProvider } from './hooks/auth'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      <AuthProvider>
        <Routes isLoggedIn={false} />
      </AuthProvider>
    </ThemeProvider>
)

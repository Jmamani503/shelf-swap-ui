import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthGuard from './guards/AuthGuard'
import UserRoutes from './pages/private/User/UserRoutes'
import { Provider } from 'react-redux'
import Store from './redux/Store'
import PublicRoutes from './pages/public/PublicRoutes'

function App() {

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="login"/>} /> */}
          <Route path="/auth/*" element={<PublicRoutes />} />

          <Route path="/*" element={ <AuthGuard><UserRoutes/></AuthGuard>} />   

          <Route path='*' element={<Navigate to="/auth/login"/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App

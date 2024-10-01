import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./Login/Login"
import Register from "./Register/Register"
import ForgotPassword from "./ForgotPassword/ForgotPassword"
import AuthLayout from "../../layouts/Auth/AuthLayout"
import AuthGuard from "../../guards/AuthGuard"

const PublicRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<AuthGuard isAuth={false}/>}> */}
        <Route element={<AuthLayout></AuthLayout>}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path='*' element={<Navigate to="login"/>}></Route>
        {/* </Route> */}
        </Route>
    </Routes>
  )
}
export default PublicRoutes
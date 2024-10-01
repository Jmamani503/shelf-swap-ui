import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "../redux/Store";
import { ReactNode } from "react";

interface Props {
  children:ReactNode
}

function AuthGuard({children}: Props) {

  const userState = useSelector((store: AppStore) => store.auth)
  // console.log(userState)
  return userState.token ? children : <Navigate replace to={'auth/login'} />
}

export default AuthGuard
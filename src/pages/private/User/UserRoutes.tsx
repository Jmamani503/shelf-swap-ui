import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Shelf from "./Shelf/Shelf"
import UsersLayout from "../../../layouts/Users/UsersLayout"
import Swaps from "./Swaps/Swaps"
import AuthGuard from "../../../guards/AuthGuard"

function UserRoutes() {
  return (
    <Routes>
      {/* <Route element={<AuthGuard isAuth={true}></AuthGuard>}> */}
        <Route element={<UsersLayout/>}>
            {/* <Route path="/" element={<Navigate to="home"/>} /> */}
            <Route path="home" element={<Home />} />
            <Route path="shelf" element={<Shelf />} />
            <Route path="swaps" element={<Swaps />} />
            {/* <Route path='*' element={<Navigate to="home"/>}></Route> */}
        {/* </Route> */}
      </Route>
    </Routes>
  )
}
export default UserRoutes
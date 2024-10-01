import style from './UsersLayout.module.css'

import { Outlet } from "react-router-dom"
import SidebarNav from "./components/SidebarNav/SidebarNav"
import SidebarDetails from "./components/SidebarDetails/SidebarDetails"


function UsersLayout() {
  return (
    <div className={style.container}>
        <SidebarNav />
        <main className={style.main}>
            <Outlet></Outlet>
        </main>
        <SidebarDetails />
    </div>
    )
}
export default UsersLayout
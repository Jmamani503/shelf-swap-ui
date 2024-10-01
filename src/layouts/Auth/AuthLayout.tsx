import style from './AuthLayout.module.css'
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <main className={style.layout_container}>
        <div className={style.image_container}>
          <img className={style.image} src="https://i.pinimg.com/564x/24/47/27/244727930380623bdce5b4624d378c0d.jpg" alt="" />
        </div>
        <main>
            <Outlet></Outlet>
        </main>
    </main>
  )
}
export default AuthLayout
import style from './SidebarNav.module.css'
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { resetUser, authKey } from "../../../../redux/states/AuthSlice"
import { removeLocalStorage } from "../../../../utilities/localStorageMangement"
import { SwapsIcon, ShelfIcon, HomeIcon ,LogoutIcon} from '../../../../components/icons'

function SidebarNav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(resetUser())
    removeLocalStorage(authKey)
    navigate("login", {replace: true})
  }

  return (
    <aside className={style.aside_container}>
      <h1>Swap Shelf</h1>
      <nav className={style.nav_list}>
          <NavLink 
            end to="home" 
            className={ 
              ({isActive}) => isActive ? `${style.active} ${style.nav_item}` : style.nav_item
            }>          
            <HomeIcon/>
            <span>Home</span>
          </NavLink>
          <NavLink 
            end to="shelf" 
            className={ 
              ({isActive}) => isActive ? `${style.active} ${style.nav_item}` : style.nav_item
            }>
            <ShelfIcon/>
            <span>Shelf</span> 
          </NavLink>
          <NavLink 
             end to="swaps" 
             className={ 
               ({isActive}) => isActive ? `${style.active} ${style.nav_item}` : style.nav_item
             }>       
            <SwapsIcon />  
            <span>Swaps</span>
          </NavLink>
      </nav>
      <div className={style.session_info}>
        <div className={style.user_info}>
          <img src="https://pbs.twimg.com/profile_images/1700557938014773248/oNNz2Opn_400x400.jpg" alt="" />
          <span>Jaime</span>
        </div>
        <button onClick={logout}>
          <LogoutIcon stroke='var(--accent-color)'/>
        </button>
      </div>
    </aside>
  )
}
export default SidebarNav
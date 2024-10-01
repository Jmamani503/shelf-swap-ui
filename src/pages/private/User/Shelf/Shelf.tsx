import style from './Shelf.module.css'
import { useSelector } from "react-redux"
import { AppStore } from "../../../../redux/Store"
import { deserializeDate } from '../../../../utilities/dateManagement';
import { User } from '../../../../models/User.interface';
import ShelfBookProvider from './context/ShelfBookContext';
import ShelfBookList from './components/ShelfBookList/ShelfBookList';
import UserInfo from './components/UserInfo/UserInfo';

function Shelf() {

  const currentUser = useSelector((store: AppStore) => store.auth.user);
  const user: User = deserializeDate(currentUser);

  return (
    <ShelfBookProvider>
      <div className={style.page_container}>
        <UserInfo user={user}></UserInfo>
        <ShelfBookList user={user}></ShelfBookList>
      </div>
    </ShelfBookProvider>
  )
}
export default Shelf
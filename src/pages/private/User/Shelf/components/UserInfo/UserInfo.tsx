import { createPortal } from "react-dom";
import { User } from "../../../../../../models/User.interface";
import style from "./UserInfo.module.css";
import { useState } from "react";
import Modal from "../../../../../../components/Modal/Modal";
import EditUserInfo from "../EditUserInfo/EditUserInfo";
import EditIcon from "../../../../../../components/icons/EditIcon";

interface Props {
  user: User;
}

const UserInfo = ({ user }: Props) => {
  const [showEditForm, setEditForm] = useState(false);
  const onShowEditFrom = () => {
    setEditForm(true);
  };
  const onHideEditFrom = () => {
    setEditForm(false);
  };
    
  return (
    <section className={style.user_info_container}>
      <img
        className={style.user_photo }
        width={200}
        height={200}
        src={user.userPhoto  ? user.userPhoto :'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'}
        alt=""
      />
      <div className={style.user_info_content}>
        <div className={style.user_info_header}>
            <div className={style.user_info}>
                <img
                className={style.user_photo_small }
                src={user.userPhoto ? user.userPhoto :'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'}
                alt=""
                />
                <h3>{user.username}</h3>
            </div>
            <button onClick={onShowEditFrom}>
              <EditIcon></EditIcon>
            </button>
          {showEditForm &&
            createPortal(
              <Modal closeModal={onHideEditFrom}>
                <EditUserInfo
                  closeModal={onHideEditFrom}
                  user={user}
                ></EditUserInfo>
              </Modal>,
              document.body
            )}
        </div>
        <p>{user.description ? user.description : 'Add some description'}</p>
        <div className={style.user_stats}>
          <div className={style.stat}>
            <h3>{user.requestsQuantity}</h3>
            <span>Requests</span>
          </div>
          <div className={style.stat}>
            <h3>{user.swappedQuantity}</h3>
            <span>Swapped</span>
          </div>
          <div className={style.stat}>
            <h3>{user.cancelledQuantity}</h3>
            <span>Cancelled</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UserInfo;

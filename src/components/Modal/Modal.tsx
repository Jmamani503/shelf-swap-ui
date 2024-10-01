import React, { ReactNode } from 'react';
import style from './Modal.module.css'

interface Props{
    closeModal: () => void;
    children: ReactNode;
}

const Modal = ({ closeModal, children }:Props) => {

    const handleModalClick: React.MouseEventHandler = (event) => {
      event.stopPropagation();
    };

    return (
    <div className={style.modal_container} onClick={closeModal}>
        <div className={style.modal} onClick={handleModalClick}>
            <div className={style.modal_header}>
                <p className={style.close} onClick={() => closeModal()}>&times;</p>
            </div>
            <div className={style.modal_content}>{children}</div>
        </div>
    </div>
    )
}
export default Modal
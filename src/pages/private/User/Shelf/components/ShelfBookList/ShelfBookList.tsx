import style from "./ShelfBookList.module.css";
import { useEffect, useState } from "react";
import shelfBookService from "../../services/shelfBook.service";
import { createPortal } from "react-dom";
import Modal from "../../../../../../components/Modal/Modal";
import ExchangeShelfBookForm from "../ExchangeShelfBookForm/ExchangeShelfBookForm";
import ShelfBookCard from "../ShelfBookCard/ShelfBookCard";
import { ShelfBook } from "../../../../../../models/ShelfBook.interface";
import { User } from "../../../../../../models/User.interface";
import useShelfBooks from "../../hooks/useShelfBooks";

interface Props {
  user: User;
}

const ShelfBookList = ({ user }: Props) => {
  const [showShelfBookForm, setShowShelfBookForm] = useState(false);
  const {
    getShelfBooksByUser,
    shelfBookGetResponse,
    shelfBookGetError,
    shelfBookGetLoading,
  } = shelfBookService();
  const { shelfBooks, createShelfBooks } = useShelfBooks();
  useEffect(() => {
    if (!shelfBooks) {
      getShelfBooksByUser(user.id);
    }
  }, []);
  useEffect(() => {
    if (shelfBookGetResponse) {
      createShelfBooks(shelfBookGetResponse);
    }
  }, [shelfBookGetResponse]);

  return (
    <section className={style.shelf_container}>
      <div className={style.shelf_header}>
        <h3>Exchange Shelf</h3>
        <button onClick={() => setShowShelfBookForm(true)}>Add to Shelf</button>
        {showShelfBookForm &&
          createPortal(
            <Modal closeModal={() => setShowShelfBookForm(false)}>
              <ExchangeShelfBookForm
                closeModal={() => setShowShelfBookForm(false)}
                userId={user.id}
              />
            </Modal>,
            document.body
          )}
      </div>
      <div className={style.cards_container}>
        {shelfBooks?.map((shelfBook: ShelfBook) => (
          <ShelfBookCard
            shelfBook={shelfBook}
            key={shelfBook.id}
          ></ShelfBookCard>
        ))}
      </div>
    </section>
  );
};
export default ShelfBookList;

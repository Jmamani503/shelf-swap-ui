import style from './ShelfBookCard.module.css'
import { ShelfBook } from "../../../../../../models/ShelfBook.interface"

interface Props{
    shelfBook: ShelfBook
}

const ShelfBookCard = ({shelfBook}: Props) => {
    return (
        <div className={style.book_card}>
            <img src={shelfBook.book.cover} alt="" />
            <h3>{shelfBook.book.title}</h3>
            <span>{shelfBook.book.author}</span>
            <span>{shelfBook.bookCondition} | {shelfBook.exchangeStatus} </span>
        </div>  
    )
}
export default ShelfBookCard
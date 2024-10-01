import style from './ExchangeShelfBookForm.module.css'
import { useEffect } from "react"
import BookService from "../../services/books.service"
import { Book } from "../../../../../../models/Book.interface"
import { ShelfBookCondition } from "../../../../../../constants/ShelfBookCondition.enum"
import { SubmitHandler, useForm } from 'react-hook-form'
import { ShelfBookCreateRequest } from '../../models/ShelfBookCreateRequest.interface'
import shelfBookService from '../../services/shelfBook.service'
import useShelfBooks from '../../hooks/useShelfBooks'

interface Props {
    closeModal: () => void
    bookShelf?: any
    userId: string
}

const ExchangeShelfBookForm = ({closeModal, userId}: Props) => {

  const conditions = Object.values(ShelfBookCondition)
  const {
    getBooks,
    getBooksResponse,
    getBooksError,
    getBooksLoading
  } = BookService()
  const { register, handleSubmit } = useForm<Omit<ShelfBookCreateRequest,'user_id'>>()

  useEffect(() => {
    getBooks()
  }, [])
  
  const onSubmit:SubmitHandler<Omit<ShelfBookCreateRequest,'user_id'>> = (data) => {
    const shelfBook:ShelfBookCreateRequest = {...data, user_id:userId}
    createShelfBook(shelfBook)
    // console.log(shelfBook)
  }

  const {
    createShelfBook,
    shelfBookPostResponse,
    shelfBookPostError,
    shelfBookPostLoading
  } = shelfBookService()
  const {addShelfBook, updateShelfBook} = useShelfBooks()
  useEffect(() => {
    if(shelfBookPostResponse){
      addShelfBook(shelfBookPostResponse)
      closeModal()
    }
  
  }, [shelfBookPostResponse])
  
  return (
    <div className={style.container}>
      <h3>Add to Shelf</h3>
      <form className={style.form_container} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form_element}>
          <select {...register('book_id')} defaultValue=''>
            <option disabled value="">Select a Book</option>
            { getBooksResponse?.map((book: Book) => (
              <option key={book.id} value={book.id}>{book.title}</option>
            ))
            }
          </select>
        </div>
        <div className={style.form_element}>
          <select {...register('book_condition')} defaultValue=''>
          <option disabled value="">Select a Book</option>
            { conditions.map((condition: ShelfBookCondition) => (
              <option key={condition} value={condition}>{condition}</option>
              ))
            }
          </select>
        </div>
        <div className={style.form_button}>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}
export default ExchangeShelfBookForm
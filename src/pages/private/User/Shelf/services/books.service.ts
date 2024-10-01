import useGetRequest from "../../../../../hooks/useGetRequest"
import { Book } from "../../../../../models/Book.interface"
import { ShelfBook } from "../../../../../models/ShelfBook.interface"

const BookService = () => {

    const baseUrl: string = "http://localhost:3000"
    const endpoint: string = baseUrl+"/books"

    const {
        getRequest: getBooksRequest,
        response: getBooksResponse,
        error: getBooksError,
        loading: getBooksLoading
    } = useGetRequest<Book[]>()     

    const getBooks = () => {
        return getBooksRequest(endpoint)
    }

    return {
        getBooks,
        getBooksResponse,
        getBooksError,
        getBooksLoading
    }

}
export default BookService
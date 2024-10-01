import useGetRequest from "../../../../../hooks/useGetRequest";
import usePostRequest from "../../../../../hooks/usePostRequest"
import { ShelfBook } from "../../../../../models/ShelfBook.interface";
import { ShelfBookCreateRequest } from "../models/ShelfBookCreateRequest.interface";

const shelfBookService = () => {
  
    const baseUrl: string = 'http://localhost:3000'
    const endpoint: string = baseUrl+'/exchange-shelf'
    
    const {
        postRequest: shelfBookPostRequest,
        response: shelfBookPostResponse,
        error: shelfBookPostError,
        loading: shelfBookPostLoading
    } = usePostRequest<ShelfBook>();
    const createShelfBook = (shelfBook: ShelfBookCreateRequest) => {
        return shelfBookPostRequest(endpoint, shelfBook)
    }

    const {
        getRequest: shelfBookGetRequest,
        response: shelfBookGetResponse,
        error: shelfBookGetError,
        loading: shelfBookGetLoading
    } = useGetRequest<ShelfBook[]>()

    const getShelfBooksByUser = (userId: string) => {
        return shelfBookGetRequest(`${endpoint}/user/${userId}`)
    }

    return {
        createShelfBook,
        shelfBookPostResponse,
        shelfBookPostError,
        shelfBookPostLoading,
        getShelfBooksByUser,
        shelfBookGetResponse,
        shelfBookGetError,
        shelfBookGetLoading
    }
}
export default shelfBookService
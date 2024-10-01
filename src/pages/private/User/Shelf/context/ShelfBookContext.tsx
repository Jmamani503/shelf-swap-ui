import { ReactNode, createContext, useState } from "react"
import { ShelfBook } from "../../../../../models/ShelfBook.interface"

interface ShelfBooksContextProps {
    createShelfBooks: (shelfBook: ShelfBook[]) => void
    shelfBooks: ShelfBook[] | null
    addShelfBook: (shelfBook: ShelfBook) => void
    updateShelfBook: (updatedShelfBook: ShelfBook) => void
    deleteShelfBook: (id: string) => void
}

export const ShelfBookContext = createContext<ShelfBooksContextProps | undefined>(undefined)

interface Props {
    children: ReactNode
}

const ShelfBookProvider = ({children}:Props) => {

    const [shelfBooks, setShelfBooks] = useState<ShelfBook[] | null>(null)

    const createShelfBooks = (shelfBooks: ShelfBook[]) => {
        setShelfBooks(shelfBooks)
    }

    const addShelfBook = (shelfBook: ShelfBook) => {
        shelfBooks ? setShelfBooks([...shelfBooks, shelfBook]) : setShelfBooks([shelfBook])
    }

    const updateShelfBook = (updatedShelfBook: ShelfBook) => {
        if(shelfBooks){
            setShelfBooks(shelfBooks.map(
                shelfBook => (shelfBook.id === updatedShelfBook.id ? updatedShelfBook : shelfBook)
            ))
        }
    }

    const deleteShelfBook = (id: string) => {
        if(shelfBooks){
            setShelfBooks(shelfBooks.filter(shelfBooks => shelfBooks.id !== id))
        }
    } 
    return (
        <ShelfBookContext.Provider 
            value={{shelfBooks, addShelfBook, updateShelfBook, deleteShelfBook, createShelfBooks}}
        >
            {children}
        </ShelfBookContext.Provider>
    )
}
export default ShelfBookProvider
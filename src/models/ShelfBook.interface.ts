import { ShelfBookCondition } from "../constants/ShelfBookCondition.enum"
import { SwapStatus } from "../constants/SwapStatus.enum"
import { Book } from "./Book.interface"
import { User } from "./User.interface"

export interface ShelfBook {
    id: string
    bookCondition: ShelfBookCondition
    exchangeStatus: SwapStatus
    user: User
    book: Book
}
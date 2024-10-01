import { ShelfBookCondition } from "../../../../../constants/ShelfBookCondition.enum"

export interface ShelfBookCreateRequest {
    book_id: string
    user_id: string
    book_condition: ShelfBookCondition
}
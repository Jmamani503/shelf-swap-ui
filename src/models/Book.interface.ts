import { BookGenre } from "../constants/BookGenre.enum"

export interface Book {
    id: string
    title: string
    author: string
    genre: BookGenre
    cover: string
    createdAt: Date
    updatedAt: Date
}
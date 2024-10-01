import { useContext } from "react"
import { ShelfBookContext } from "../context/ShelfBookContext"

const useShelfBooks = () => {
    const context = useContext(ShelfBookContext)
    if(!context) throw new Error('useShelfBook is out of scope')
    return context
}
export default useShelfBooks
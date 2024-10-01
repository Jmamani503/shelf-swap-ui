import { useState } from "react"
import { useSelector } from "react-redux"
import { AppStore } from "../redux/Store"

interface GetResponse<T>{
    response: T | null
    error: string | null
    loading: boolean
    getRequest: (url: string) => Promise<void>
}

const useGetRequest = <T>(): GetResponse<T> => {
    const authToken = useSelector((store: AppStore) => store.auth.token)

    const [response, setResponse] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const getRequest = async (url: string): Promise<void> => {
        setLoading(true)
        try {
            const res = await fetch(url,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            })
            const result: T = await res.json()
            setResponse(result)
        } catch (error: any) {
            setError(error.message || "An error occurred")
        } finally {
            setLoading(false)
        }
    }
    return {getRequest, response, error, loading}
}
export default useGetRequest
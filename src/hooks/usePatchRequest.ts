import { useState } from "react"
import { useSelector } from "react-redux"
import { AppStore } from "../redux/Store"

interface PatchResponse<T> {
    response: T | null
    error: string | null
    loading: boolean
    patchRequest: (url: string, data: any) => Promise<void>
}

const usePatchRequest = <T>(): PatchResponse<T> => {
    const authToken = useSelector((store: AppStore) => store.auth.token)
    const [response, setResponse] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const patchRequest = async (url: string, data: any) => {
        setLoading(true)
        try {
            const res = await fetch(url,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(data)
            })
            const result: T = await res.json()
            setResponse(result)
        } catch (err: any) {
            setError(err.message || 'An error occurred')
        } finally {
            setLoading(false)
        }
    }
    return { patchRequest, response, error, loading}
}   
export default usePatchRequest
import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const result = await axios(url)

                setData(result)
                setIsLoading(false)
            } catch (er) {
                setError("Oops! " + er.message)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])
    return [data, isLoading, error]
}

export default useFetch
import { useState } from "react"

export const useFetching = (callback) => {
    const [isPostLoading, setIsPostLoading] = useState(false)
    const [postError, setPostError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsPostLoading(true)
            await callback(...args)
        } catch (e) {
            setPostError(e.message)
        } finally {
            setIsPostLoading(false)
        }
    }

    return [fetching, isPostLoading, postError]
}
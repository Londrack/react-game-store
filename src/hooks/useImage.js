import { useEffect, useState } from 'react'

const useImage = (filePath, fileName) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)

    const path = `../assets/${filePath}/${fileName}.svg`;

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(path) // change relative path to suit your needs
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [path])

    return {
        loading,
        error,
        image,
    }
}

export default useImage
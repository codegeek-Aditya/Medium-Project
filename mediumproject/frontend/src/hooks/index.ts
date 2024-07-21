import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from 'axios'


interface Blog {
    "content": string,
    "title": string,
    "id": number
    "author": {
        "name": string
    }
}


export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()


    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`)
            .then(response => {
                setBlog(response.data.blog)
                setLoading(false)
            })
            .catch(error => {
                console.log(`Error fetching all the blogs`, error)
            })
    }, [])

    return {
        loading,
        blog
    }


}


export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blog)
                setLoading(false)
            }
            )
            .catch(error => {
                alert(`Error fetching blogs`)
                console.log(error)
            })
    }, [])

    return {
        loading,
        blogs
    }
}



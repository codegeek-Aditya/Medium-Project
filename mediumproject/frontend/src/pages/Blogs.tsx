import { Appbar } from "../components/Appbar"
import { Blogcard } from "../components/Blogcard"
import { Skeleton } from "../components/Skeleton"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs()

    if (loading) {
        return <div>
            <Skeleton />
        </div>
    }
    return (
        <>
            <Appbar />
            <h1 className="text-center text-4xl font-bold pt-2 text-slate-700">Blogs</h1>
            <div className="flex flex-col m-2 justify-center gap-8 h-screen align-middle items-center cursor-default">
                {blogs.map(blog => <Blogcard
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"30Nov, 2023"}
                />)}
            </div>
        </>
    )
}


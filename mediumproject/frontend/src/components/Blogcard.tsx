
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}

export const Blogcard = ({ authorName, title, content, publishedDate }: BlogCardProps) => {
    return (
        <div className="flex flex-col h-screeen justify-center max-w-screen-lg min-w-max ">
            <div className="font-light">
                <Avatar name={authorName} /> {authorName} | {publishedDate}
            </div>
            <div className="font-bold pt-2">
                {title}
            </div>
            <div className="">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="font-extralight pt-2">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
            <div className="w-full border-2 mt-3">
                {/* bottom border */}
            </div>
        </div>
    )
}


export function Avatar({ name }: { name: string }) {
    return (
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{`${name[0]}`}</span>
        </div>
    )
}
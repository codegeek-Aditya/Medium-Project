
import { Avatar } from "./Blogcard"


export const Appbar = () => {
    return (
        <div className="border-b flex justify-between p-2">
            <div className="text-2xl font-bold m-2">
                Medium
            </div>
            <div className="cursor-pointer m-2">
                <Avatar name="Aditya" />
            </div>
        </div>
    )
}
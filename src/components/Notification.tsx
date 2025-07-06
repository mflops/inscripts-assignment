import { VscBell } from "react-icons/vsc";

export default function Notification() {
    return (
        <div className="h-10 w-10 p-2 flex items-center justify-center">
            <button className="cursor-pointer p-0 m-0">
                <VscBell className="w-6 h-6 text-[#121212]"/>
            </button>
        </div>
    )
}
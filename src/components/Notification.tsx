import { VscBell } from "react-icons/vsc";

export default function Notification() {
    return (
        <div className="h-12 w-12 flex items-center justify-center">
            <button className="cursor-pointer">
                <VscBell className="w-8 h-8"/>
            </button>
        </div>
    )
}
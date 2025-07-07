import { VscBell } from "react-icons/vsc";
import { useState } from "react";

export default function Notification() {
    const [notificationCount, setNotificationCount] = useState(0);

    const handleNotificationClick = () => {
        console.log('Notification button clicked!');
        setNotificationCount(prev => prev + 1);
    };

    return (
        <div className="h-10 w-10 p-2 flex items-center justify-center relative">
            <button 
                className="cursor-pointer p-0 m-0 relative"
                onClick={handleNotificationClick}
            >
                <VscBell className="w-6 h-6 text-[#121212]"/>
                {notificationCount > 0 && (
                    <div className="absolute -top-1 -right-1 bg-[#4B6A4F] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
                        {notificationCount > 99 ? '99+' : notificationCount}
                    </div>
                )}
            </button>
        </div>
    )
}
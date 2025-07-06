import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import TabButton from "./TabButton";

export default function Footer() {
    const [activeTab, setActiveTab] = useState(0);

    const handleAddTab = () => {
        console.log("Add tab clicked!");
        // Later: add logic to open a modal or create a new tab
    };

    return (
        <footer className="bg-[#FFFFFF] w-full h-14 px-10 mx-[2px] fixed bottom-0 left-0 right-0 z-10 border-t-[#EEEEEE] border-t-2 flex flex-row items-center">
            {["All Orders", "Pending", "Reviewed", "Arrived"].map((label, index) => (
                <TabButton
                    key={label}
                    label={label}
                    index={index}
                    activeIndex={activeTab}
                    onClick={() => setActiveTab(index)}
                />
            ))}

            <button
                className="h-full px-4 text-lg font-bold cursor-pointer"
                onClick={handleAddTab}
            >
                <IoAddOutline />
            </button>
        </footer>
    );
}

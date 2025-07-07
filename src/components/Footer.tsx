import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import TabButton from "./TabButton";

export default function Footer() {
    const [activeTab, setActiveTab] = useState(0);

    const handleAddTab = () => {
        console.log("Add tab clicked!");
    };

    const handleTabClick = (index: number, label: string) => {
        console.log(`${label} tab clicked!`);
        setActiveTab(index);
    };

    return (
        <footer className="bg-[#FFFFFF] w-full h-12 fixed bottom-0 left-0 right-0 z-10 border-t-[#EEEEEE] border-t-2 flex flex-row items-center pt-1 pl-8 pr-4">
            {["All Orders", "Pending", "Reviewed", "Arrived"].map((label, index) => (
                <TabButton
                    key={label}
                    label={label}
                    index={index}
                    activeIndex={activeTab}
                    onClick={() => handleTabClick(index, label)}
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

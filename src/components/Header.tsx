import { TbLayoutSidebarRightFilled } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import Searchbar from "./Searchbar";
import Profile from "./Profile";
import Notification from "./Notification";
import Breadcrumb from "./Breadcrumb";
export default function Header() {
    return (
        <div className="flex flex-row items-center border-b-neutral-200 border-b-1 p-2 justify-between">
            <div className="flex flex-row items-center gap-4">
                <button>
                    <TbLayoutSidebarRightFilled className="h-8 w-10 text-[#618666]"/>
                </button>
                <Breadcrumb />
                <HiDotsHorizontal className="text-neutral-500"/>
            </div>
            <div className="flex flex-row p-2 items-center gap-2">
                <Searchbar />
                <Notification />
                <Profile />
            </div>
        </div>
    );
}
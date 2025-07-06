import { TbLayoutSidebarRightFilled } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import Searchbar from "./Searchbar";
import Profile from "./Profile";
import Notification from "./Notification";
import Breadcrumb from "./Breadcrumb";
export default function Header() {
    return (
        <div className="flex flex-row items-center justify-between w-full h-14 py-2 px-4 border-b-1 border-b-[#EEEEEE]">
            <div className="flex flex-row items-center gap-4 h-6 p-0">
                <button>
                    <TbLayoutSidebarRightFilled className="h-7 w-7 text-[#618666]"/>
                </button>
                <Breadcrumb />
                <HiDotsHorizontal className="text-[#AFAFAF]"/>
            </div>
            <div className="flex flex-row items-center gap-1 h-10">
                <Searchbar />
                <Notification />
                <Profile />
            </div>
        </div>
    );
}
import { LiaAngleDoubleRightSolid } from "react-icons/lia";
import { VscEyeClosed } from "react-icons/vsc";
import { LuArrowUpDown } from "react-icons/lu";
import { VscListFilter } from "react-icons/vsc";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { PiArrowLineDownLight } from "react-icons/pi";
import { PiArrowLineUpLight } from "react-icons/pi";
import { VscShare } from "react-icons/vsc";
import { PiArrowsSplitLight } from "react-icons/pi";

export default function Toolbar() {
    return (
        <div className="flex flex-row items-center p-1 border-b-1 border-b-neutral-200 justify-between pr-2">
            <div className="flex flex-row">
                <div className="flex flex-row items-center h-12">
                    <div className="flex flex-row items-center gap-1 p-2 h-6 border-r-neutral-200 border-r-1 pr-4">
                        <span>Tool bar</span>
                        <LiaAngleDoubleRightSolid className="text-md"/>
                    </div>
                </div>

                <div className="flex flex-row items-center p-2 gap-2">
                    <div className="flex flex-row items-center p-2 gap-2 cursor-pointer">
                        <VscEyeClosed className="text-xl"/>
                        <span>Hide fields</span>
                    </div>
                    <div className="flex flex-row items-center p-2 gap-2 cursor-pointer">
                        <LuArrowUpDown className="text-xl"/>
                        <span>Sort</span>
                    </div>
                    <div className="flex flex-row items-center p-2 gap-2 cursor-pointer">
                        <VscListFilter className="text-xl"/>
                        <span>Filter</span>
                    </div>
                    <div className="flex flex-row items-center p-2 gap-2 cursor-pointer">
                        <TbArrowAutofitHeight className="text-xl"/>
                        <span>Cell view</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-2">
                <button className="flex flex-row items-center gap-2 border-neutral-300 border-1 p-2 rounded-lg cursor-pointer">
                    <PiArrowLineDownLight className="text-2xl text-neutral-600"/>
                    <span className="text-neutral-600">Import</span>
                </button>
                <button className="flex flex-row items-center gap-2 border-neutral-300 border-1 p-2 rounded-lg cursor-pointer">
                    <PiArrowLineUpLight className="text-2xl text-neutral-600"/>
                    <span className="text-neutral-600">Export</span>
                </button>
                <button className="flex flex-row items-center gap-2 border-neutral-300 border-1 p-2 rounded-lg cursor-pointer">
                    <VscShare className="text-2xl text-neutral-600"/>
                    <span className="text-neutral-600">Share</span>
                </button>
                <button className="flex flex-row items-center gap-2 bg-[#4B6A4F] p-2 rounded-lg w-44 justify-center cursor-pointer">
                    <PiArrowsSplitLight className="text-2xl text-white"/>
                    <span className="text-white">New Action</span>
                </button>
            </div>
        </div>
    )
}
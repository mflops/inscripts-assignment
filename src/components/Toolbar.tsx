import { LiaAngleDoubleRightSolid } from "react-icons/lia";
import { VscEyeClosed } from "react-icons/vsc";
import { LuArrowUpDown } from "react-icons/lu";
import { VscListFilter } from "react-icons/vsc";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { PiArrowLineDownLight, PiArrowsSplit } from "react-icons/pi";
import { PiArrowLineUpLight } from "react-icons/pi";
import { VscShare } from "react-icons/vsc";

export default function Toolbar() {
    return (
        <div className="flex flex-row items-center border-b-1 border-b-[#EEEEEE] justify-between h-12 w-full px-2 py-[6px] gap-2 select-none">

            {/* Tool bar button */}
            <div className="flex flex-row items-center h-full gap-1 p-2 cursor-pointer" onClick={() => console.log('Tool bar button clicked!')}>
                <span>Tool bar</span>
                <LiaAngleDoubleRightSolid className="text-md" />
            </div>

            {/* Separator */}
            <div className="h-6 w-[1px] border-r-2 border-r-[#EEEEEE]"></div>

            {/* Table Controls Block */}
            <div className="flex-1 items-center flex flex-row h-full p-0 gap-1">
                {/* Hide fields button */}
                <div className="flex flex-row items-center p-2 gap-1 cursor-pointer h-full pr-3 text-[#121212]" onClick={() => console.log('Hide fields button clicked!')}>
                    <VscEyeClosed className="text-xl" />
                    <span className="text-sm font-normal">Hide fields</span>
                </div>
                {/* Sort button */}
                <div className="flex flex-row items-center p-2 gap-1 cursor-pointer h-full pr-3 text-[#121212]" onClick={() => console.log('Sort button clicked!')}>
                    <LuArrowUpDown className="text-xl" />
                    <span className="text-sm font-normal">Sort</span>
                </div>
                {/* Filter button */}
                <div className="flex flex-row items-center p-2 gap-1 cursor-pointer h-full pr-3 text-[#121212]" onClick={() => console.log('Filter button clicked!')}>
                    <VscListFilter className="text-xl" />
                    <span className="text-sm font-normal">Filter</span>
                </div>
                <div className="flex flex-row items-center p-2 gap-1 cursor-pointer h-full pr-3 text-[#121212]" onClick={() => console.log('Cell view button clicked!')}>
                    <TbArrowAutofitHeight className="text-xl" />
                    <span className="text-sm font-normal">Cell view</span>
                </div>
            </div>

            {/* Actions right */}
            <div className="flex flex-row items-center gap-2 h-full">
                {/* Controls */}
                <div className="flex flex-row items-center h-full gap-2">
                    {/* Import control */}
                    <button className="flex flex-row items-center gap-1 border-[#EEEEEE] border-1 p-2 rounded-md cursor-pointer h-full pr-3 hover:bg-[#EEEEEE]" onClick={() => console.log('Import button clicked!')}>
                        <PiArrowLineDownLight className="text-xl text-[#545454]" />
                        <span className="text-[#545454] text-sm font-normal">Import</span>
                    </button>
                    {/* Export control */}
                    <button className="flex flex-row items-center gap-1 border-[#EEEEEE] border-1 p-2 rounded-md cursor-pointer h-full pr-3 hover:bg-[#EEEEEE]" onClick={() => console.log('Export button clicked!')}>
                        <PiArrowLineUpLight className="text-xl text-[#545454]" />
                        <span className="text-[#545454] text-sm font-normal">Export</span>
                    </button>
                    {/* Share control */}
                    <button className="flex flex-row items-center gap-1 border-[#EEEEEE] border-1 p-2 rounded-md cursor-pointer h-full pr-3 hover:bg-[#EEEEEE]" onClick={() => console.log('Share button clicked!')}>
                        <VscShare className="text-xl text-[#545454]" />
                        <span className="text-[#545454] text-sm font-normal">Share</span>
                    </button>
                </div>

                {/* New action button */}
                <button className="flex flex-row items-center gap-1 bg-[#4B6A4F] py-2 px-6 rounded-lg justify-center cursor-pointer h-full hover:bg-[#5E7C61]" onClick={() => console.log('New Action button clicked!')}>
                    <PiArrowsSplit className="text-xl text-white" />
                    <span className="text-white text-sm font-medium">New Action</span>
                </button>
            </div>
        </div>
    )
}
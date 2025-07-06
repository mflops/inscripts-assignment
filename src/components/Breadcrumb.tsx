import { VscChevronRight } from "react-icons/vsc";

export default function Breadcrumb() {
    return (
        <nav className="text-md" aria-label="Breadcrumb">
            <ol className="flex flex-row gap-1">
                <li className="flex flex-row items-center gap-2">
                    <span className="text-[#AFAFAF] cursor-pointer font-medium text-sm">Workspace</span>
                    <VscChevronRight className="text-neutral-400"/>
                </li>
                <li className="flex flex-row items-center gap-2 font-medium text-sm">
                    <span className="text-[#AFAFAF] cursor-pointer">Folder 2</span>
                    <VscChevronRight className="text-neutral-400"/>
                </li>
                <li className="flex flex-row items-center gap-2 font-medium text-sm">
                    <span className="cursor-pointer text-[#121212]">Spreadsheet 3</span>
                </li>
            </ol>
        </nav>
    )
}
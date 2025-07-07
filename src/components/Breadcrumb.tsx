import { VscChevronRight } from "react-icons/vsc";

export default function Breadcrumb() {
    return (
        <nav className="text-md" aria-label="Breadcrumb">
            <ol className="flex flex-row gap-1">
                <li className="flex flex-row items-center gap-2 font-medium text-sm">
                    <span className="text-[#AFAFAF] cursor-pointer hover:underline" onClick={() => console.log('Workspace breadcrumb clicked!')}>Workspace</span>
                    <VscChevronRight className="text-neutral-400"/>
                </li>
                <li className="flex flex-row items-center gap-2 font-medium text-sm">
                    <span className="text-[#AFAFAF] cursor-pointer hover:underline" onClick={() => console.log('Folder 2 breadcrumb clicked!')}>Folder 2</span>
                    <VscChevronRight className="text-neutral-400"/>
                </li>
                <li className="flex flex-row items-center gap-2 font-medium text-sm">
                    <span className="cursor-pointer text-[#121212] hover:underline" onClick={() => console.log('Spreadsheet 3 breadcrumb clicked!')}>Spreadsheet 3</span>
                </li>
            </ol>
        </nav>
    )
}
import { VscChevronRight } from "react-icons/vsc";

export default function Breadcrumb() {
    return (
        <nav className="text-md" aria-label="Breadcrumb">
            <ol className="flex flex-row gap-1">
                <li className="flex flex-row items-center gap-2">
                    <span className="text-neutral-400 cursor-pointer">Workspace</span>
                    <VscChevronRight className="text-neutral-400"/>
                </li>
                <li className="flex flex-row items-center gap-2">
                    <span className="text-neutral-400 cursor-pointer">Folder 2</span>
                    <VscChevronRight className="text-neutral-400"/>
                </li>
                <li className="flex flex-row items-center gap-2">
                    <span className="cursor-pointer">Spreadsheet 3</span>
                </li>
            </ol>
        </nav>
    )
}
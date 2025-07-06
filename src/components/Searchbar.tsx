import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Searchbar() {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    const [input, setInput] = useState('');
    return (
        <div className="flex flex-row items-center justify-center gap-2 bg-neutral-100 w-max h-10 text-md p-3 rounded-lg">
            <CiSearch className="w-5 h-5 text-neutral-500"/>
            <input type="text" onChange={handleChange} placeholder="Search within sheet" value={input} className="outline-none w-29 text-xs"/>
        </div>
    )
}
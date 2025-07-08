export default function Profile() {
    return (
        <div className="flex flex-row items-center gap-2 h-full pl-2 pt-1 pb-1 pr-2 cursor-pointer hover:rounded-md hover:bg-[#EEEEEE]" onClick={() => (console.log("Profile clicked!"))}>
            <img className="bg-neutral-200 h-7 w-7 rounded-full" src="/pfp.png">
            </img>
            <div className="flex flex-col h-6 justify-center w-16">
                <p className="text-xs m-0 leading-none font-regular text-[#121212] text-ellipsis overflow-hidden">John Doe</p>
                <p className="text-[#757575] text-xs m-0 leading-none font-regular text-ellipsis overflow-hidden">john.doe@example.com</p>
            </div>
        </div>
    )
}
export default function Profile() {
    return (
        <div className="flex flex-row items-center gap-2">
            <div className="bg-neutral-200 h-9 w-9 rounded-full">
            </div>
            <div className="flex flex-col h-8 justify-center">
                <p className="text-md m-0 leading-none font-light w-24">John Doe</p>
                <p className="text-neutral-500 text-sm m-0 leading-none font-light w-24">john.doe...</p>
            </div>
        </div>
    )
}
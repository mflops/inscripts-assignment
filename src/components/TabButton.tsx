interface TabButtonProps {
    label: string;
    index: number;
    activeIndex: number;
    onClick: () => void;
}

export default function TabButton({ label, index, activeIndex, onClick }: TabButtonProps) {
    const isActive = index === activeIndex;

    return (
        <button
            className={`h-full px-4 ${isActive ? "bg-[#E8F0E9] border-t-2 border-t-[#4B6A4F] text-[#3E5741] font-semibold" : "text-[#757575] font-medium"} whitespace-nowrap`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

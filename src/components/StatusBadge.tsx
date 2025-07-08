import { statusStyles, type ValidStatus } from "../constants/status";
import { IoClose } from "react-icons/io5";

interface StatusBadgeProps {
    status: ValidStatus;
    onClear: () => void;
}

// Simple Status Badge Component
export const StatusBadge = ({ status, onClear }: StatusBadgeProps) => {
    return (
        <div className="relative">
            <div 
                className="flex items-center justify-center w-full h-8 px-2 py-1 focus:ring-[#63916f] focus:ring-1 focus:ring-inset focus:shadow-[0px_0px_10px_2px_rgba(108,139,124,0.2)] outline-none"
                tabIndex={0}
                onClick={(e) => {
                    // Prevent triggering when clicking the clear button
                    if (e.target === e.currentTarget) {
                        e.currentTarget.focus();
                    }
                }}
            >
                <div className="flex items-center gap-1 group">
                    <span className={`px-1.5 py-0.5 rounded-full font-medium text-center text-sm transition-all duration-200 group-hover:pr-5 truncate whitespace-nowrap overflow-hidden ${statusStyles[status]}`}>
                        {status}
                    </span>
                    <button
                        onClick={onClear}
                        className={`opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-black/10 rounded-full -ml-6 flex-shrink-0 ${statusStyles[status].split(' ')[1]}`}
                        title="Clear status"
                    >
                        <IoClose className="text-xs" />
                    </button>
                </div>
            </div>
        </div>
    );
}; 
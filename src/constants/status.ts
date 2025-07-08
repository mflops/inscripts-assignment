// Valid status values
export const VALID_STATUSES = ["Complete", "In-process", "Blocked", "Need to start"] as const;
export type ValidStatus = typeof VALID_STATUSES[number];

export const statusStyles: Record<ValidStatus, string> = {
    "In-process": "bg-[#fef7d4] text-[#856900]",
    "Complete": "bg-[#ccf7e3] text-[#00783b]",
    "Blocked": "bg-[#ffdfdd] text-[#cd0000]",
    "Need to start": "bg-[#e2e7f1] text-[#48526a]",
}; 
import { FaBriefcase } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoCalendar } from "react-icons/io5";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { IoHandRight } from "react-icons/io5";
import { FiHash } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import type { CellContext, ColumnDef } from "@tanstack/react-table";
import type { RowData } from "../data";
import { IoMdLink } from "react-icons/io";
import { VscSync } from "react-icons/vsc";
import { PiArrowsSplitBold } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";
import { StatusBadge } from "./StatusBadge";
import { StatusInput } from "./StatusInput";
import { VALID_STATUSES, type ValidStatus } from "../constants/status";

// Extended cell context that includes our custom updateData function
interface ExtendedCellContext extends CellContext<RowData, unknown> {
    updateData: (value: string | number) => void;
}

const priorityStyles: Record<string, string> = {
    "Low": "text-[#1A8CFF]",
    "Medium": "text-[#c39900]",
    "High": "text-[#fc213a]",
}

const rowNumberCol: ColumnDef<RowData, unknown> = {
    id: "rowNumber",
    header: () => (
        <div className="flex flex-row items-center justify-center">
            <FiHash className="text-[#AFAFAF]/[0.7] text-lg" />
        </div>
    ),
    cell: ({ row }: { row: { index: number } }) => (
        <div className="text-[#757575] text-center text-sm font-normal cursor-default">{row.index + 1}</div>
    ),
    enableResizing: true,
    size: 32,
}

const jobRequestCol: ColumnDef<RowData, unknown> = {
    accessorKey: "jobRequest",
    header: () => (
        <div className="flex flex-row items-center justify-between h-4">
            <div className="flex flex-row items-center gap-1">
                <FaBriefcase className="text-[#AFAFAF] size-3" />
                <span className="font-semibold text-xs cursor-default">Job Request</span>
            </div>
            <IoChevronDownOutline className="text-[#AFAFAF] cursor-pointer size-3" onClick={() => console.log('Job Request column sort clicked!')} />
        </div>
    ),
    cell: (context) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="overflow-hidden text-ellipsis whitespace-nowrap outline-none px-2 w-full h-8 text-xs font-regular text-[#121212] focus:ring-[#63916f] focus:ring-1 focus:ring-inset focus:shadow-[0px_0px_10px_2px_rgba(108,139,124,0.2)] cursor-default"
                value={value}
                onChange={(e) => updateData(e.target.value)}
            />
        );
    },
    size: 256,
};

const submittedCol: ColumnDef<RowData, unknown> = {
    accessorKey: "submitted",
    header: () => (
        <div className="flex flex-row items-center justify-between h-4">
            <div className="flex flex-row items-center gap-1">
                <IoCalendar className="text-[#AFAFAF]/[0.7] size-3" />
                <span className="font-semibold text-xs cursor-default">Submitted</span>
            </div>
            <IoChevronDownOutline className="text-[#AFAFAF] cursor-pointer size-3" onClick={() => console.log('Submitted column sort clicked!')} />
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="text-right outline-none px-2 w-full h-8 text-xs font-regular text-[#121212] focus:ring-[#63916f] focus:ring-1 focus:ring-inset focus:shadow-[0px_0px_10px_2px_rgba(108,139,124,0.2)] cursor-default"
                onChange={(e) => updateData(e.target.value)}
                value={value}
            />
        )
    },
    size: 124,
}

const statusCol: ColumnDef<RowData, unknown> = {
    accessorKey: "status",
    header: () => (
        <div className="flex flex-row items-center justify-between h-4">
            <div className="flex flex-row items-center gap-1">
                <FaCircleChevronDown className="text-[#AFAFAF]/[0.7] size-3" />
                <span className="font-semibold text-sm cursor-default">Status</span>
            </div>
            <IoChevronDownOutline className="text-[#AFAFAF] cursor-pointer size-3" onClick={() => console.log('Status column sort clicked!')} />
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        
        // Check if the value is a valid status
        const isValidStatus = VALID_STATUSES.includes(value as ValidStatus);
        
        if (isValidStatus) {
            return (
                <StatusBadge 
                    status={value as ValidStatus} 
                    onClear={() => {
                        updateData("");
                    }} 
                />
            );
        }
        
        // Show input for invalid or empty status values
        return (
            <StatusInput 
                value={value} 
                onChange={(newStatus) => updateData(newStatus)} 
            />
        );
    },
    size: 124,
}

const submitterCol: ColumnDef<RowData, unknown> = {
    accessorKey: "submitter",
    header: () => (
        <div className="flex flex-row items-center justify-between h-4">
            <div className="flex flex-row items-center gap-1">
                <FaUser className="text-[#AFAFAF]/[0.7] size-3" />
                <span className="font-semibold text-sm cursor-default">Submitter</span>
            </div>
            <IoChevronDownOutline className="text-[#AFAFAF] cursor-pointer size-3" onClick={() => console.log('Submitter column sort clicked!')} />
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="overflow-hidden text-ellipsis whitespace-nowrap outline-none px-2 w-full h-8 text-xs font-regular text-[#121212] focus:ring-[#63916f] focus:ring-1 focus:ring-inset focus:shadow-[0px_0px_10px_2px_rgba(108,139,124,0.2)] cursor-default"
                value={value}
                onChange={(e) => updateData(e.target.value)}
            />
        )
    },
    size: 124,
}

const urlCol: ColumnDef<RowData, unknown> = {
    accessorKey: "url",
    header: () => (
        <div className="flex flex-row items-center justify-between h-4">
            <div className="flex flex-row items-center gap-1">
                <FaGlobe className="text-[#AFAFAF]/[0.7] size-3" />
                <span className="font-semibold text-sm cursor-default">URL</span>
            </div>
            <IoChevronDownOutline className="text-[#AFAFAF] cursor-pointer size-3" onClick={() => console.log('URL column sort clicked!')} />
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className={`overflow-hidden text-ellipsis whitespace-nowrap outline-none px-2 w-full h-8 text-xs font-regular text-[#121212] focus:ring-[#63916f] focus:ring-1 focus:ring-inset focus:shadow-[0px_0px_10px_2px_rgba(108,139,124,0.2)] underline hover:text-blue-500 ${value === "" ? "cursor-default" : "cursor-pointer"}`}
                value={value}
                onChange={(e) => updateData(e.target.value)}
            />
        )
    },
    size: 124,
}

const assignedCol: ColumnDef<RowData, unknown> = {
    accessorKey: "assigned",
    header: () => (
        <div className="flex flex-row items-center justify-between h-4">
            <div className="flex flex-row items-center gap-1">
                <IoHandRight className="text-[#AFAFAF]/[0.7] size-3" />
                <span className="font-semibold text-sm cursor-default">Assigned</span>
            </div>
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="outline-none px-2 w-full h-8 text-xs font-regular text-[#121212] text-ellipsis focus:ring-[#63916f] focus:ring-1 focus:ring-inset focus:shadow-[0px_0px_10px_2px_rgba(108,139,124,0.2)] cursor-default"
                value={value}
                onChange={(e) => updateData(e.target.value)}
            />
        )
    },
    size: 124,
}

const priorityCol: ColumnDef<RowData, unknown> = {
    accessorKey: "priority",
    header: () => (
        <div className="flex flex-row items-center justify-between h-4">
            <div className="flex flex-row items-center gap-1">
                <span className="font-semibold text-sm cursor-default">Priority</span>
            </div>
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        const colorClass = priorityStyles[value];
        return (
            <input 
                className={`text-center block ${colorClass} font-medium outline-none text-ellipsis px-2 w-full h-8 text-xs font-regular focus:ring-[#63916f] focus:ring-1 focus:ring-inset focus:shadow-[0px_0px_10px_2px_rgba(108,139,124,0.2)] cursor-default`} 
                value={value} 
                onChange={(e) => updateData(e.target.value)}
            />
        )
    },
    size: 124,
}

const dueDateCol: ColumnDef<RowData, unknown> = {
    accessorKey: "dueDate",
    header: () => (
        <div className="flex flex-row items-center justify-between h-4">
            <div className="flex flex-row items-center gap-1">
                <span className="font-semibold text-sm cursor-default">Due Date</span>
            </div>
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="text-right block outline-none text-ellipsis px-2 w-full h-8 text-xs font-regular text-[#121212] focus:ring-[#63916f] focus:ring-1 focus:ring-inset focus:shadow-[0px_0px_10px_2px_rgba(108,139,124,0.2)] cursor-default"
                value={value}
                onChange={(e) => updateData(e.target.value)}
            />
        )
    },
    size: 124,
}

const estValueCol: ColumnDef<RowData, unknown> = {
    accessorKey: "estValue",
    header: () => (
        <div className="flex flex-row items-center justify-between h-4">
            <div className="flex flex-row items-center gap-1">
                <span className="font-semibold text-sm cursor-default">Est. Value</span>
            </div>
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as number | string;
        const isNumber = typeof value === "number" && !isNaN(value);
        const formatted = isNumber ? new Intl.NumberFormat("en-US").format(value as number) : value;
        return (
            <div className="flex items-center gap-1 w-full">
                <input
                    className={`text-right outline-none text-ellipsis w-full h-8 text-xs font-regular text-[#121212] focus:ring-[#63916f] focus:ring-1 focus:ring-inset focus:shadow-[0px_0px_10px_2px_rgba(108,139,124,0.2)] ${isNumber ? "pl-2" : "px-2"} cursor-default`}
                    value={formatted}
                    onChange={(e) => {
                        const val = e.target.value.replace(/,/g, "");
                        const num = Number(val);
                        if (val === "" || isNaN(num)) {
                            updateData(val);
                        } else {
                            updateData(num);
                        }
                    }}
                    inputMode="numeric"
                />
                {isNumber && (
                    <MdCurrencyRupee className="text-neutral-400 text-md" />
                )}
            </div>
        );
    },
    size: 124,
}

const addColumn: ColumnDef<RowData, unknown> = {
    header: "",
    id: "addColumn",
    cell: () => (
        <div className="w-40 border-x-2 border-dashed"></div>
    ),
    size: 110,
    maxSize: 110,
}

export const columns: ColumnDef<RowData, unknown>[] = [
    {
        id: "rowNumberGroup",
        header: () => (
            <div className="bg-white w-full h-full"></div>
        ),
        columns: [rowNumberCol],
        enableResizing: false,
    },
    {
        id: "projectInfo",
        header: () => (
            <div className="flex flex-row items-center gap-2 -mt-2 -mb-2">
                <div className="flex flex-row items-center gap-1 bg-[#EEEEEE] p-1 rounded-md h-6">
                    <IoMdLink className="text-md text-[#1A8CFF]" />
                    <span className="font-normal text-[#545454] text-xs cursor-default">Q3 Financial Overview</span>
                </div>
                <VscSync className="text-[#FA6736] text-md -rotate-90 cursor-pointer" onClick={() => console.log('Sync button clicked!')} />
            </div>
        ),
        columns: [jobRequestCol, submittedCol, statusCol, submitterCol],
        enableResizing: false,
    },
    {
        id: "urlGroup",
        header: "",
        columns: [urlCol],
        enableResizing: false,
    },
    {
        id: "abcGroup",
        header: () => (
            <div className="flex flex-row items-center justify-center gap-1 h-6 w-full px-1 py-[2px]">
                <PiArrowsSplitBold className="text-[#A3ACA3]" />
                <span className="text-[#505450] font-medium text-sm cursor-default">ABC</span>
                <HiDotsHorizontal className="text-[#AFAFAF] cursor-pointer" onClick={() => (console.log("ABC menu clicked"))} />
            </div>
        ),
        columns: [assignedCol],
        enableResizing: false,
    },
    {
        id: "questionGroup",
        header: () => (
            <div className="flex flex-row items-center justify-center gap-1 px-1 py-[2px]">
                <PiArrowsSplitBold className="text-[#FFFFFF]" />
                <span className="text-[#463E59] font-medium text-sm text-center cursor-default">
                    Answer a question
                </span>
                <HiDotsHorizontal className="text-[#AFAFAF] cursor-pointer" onClick={() => (console.log("Answer a question menu clicked"))} />
            </div>
        ),
        columns: [priorityCol, dueDateCol],
        enableResizing: false,
    },
    {
        id: "extractGroup",
        header: () => (
            <div className="flex flex-row items-center justify-center gap-1 px-1 py-[2px]">
                <PiArrowsSplitBold className="text-[#FFFFFF]" />
                <span className="text-[#695149] font-medium text-sm cursor-default">Extract</span>
                <HiDotsHorizontal className="text-[#AFAFAF] cursor-pointer" onClick={() => (console.log("Extract menu clicked"))} />
            </div>
        ),
        columns: [estValueCol],
        enableResizing: false,
    },
    {
        id: "add",
        header: () => (
            <div className="flex flex-row items-center justify-center h-full w-full cursor-pointer" onClick={() => (console.log("Add column clicked!"))}>
                <IoAddOutline className="size-5 text-[#000000]" />
            </div>
        ),
        columns: [addColumn],
        enableResizing: false,
    },
];

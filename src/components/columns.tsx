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
import { TbRefresh } from "react-icons/tb";
import { PiArrowsSplitBold } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";

// Extended cell context that includes our custom updateData function
interface ExtendedCellContext extends CellContext<RowData, unknown> {
    updateData: (value: string | number) => void;
}

const statusStyles: Record<string, string> = {
    "In-process": "bg-[#fef7d4] text-[#856900]",
    "Complete": "bg-[#ccf7e3] text-[#00783b]",
    "Blocked": "bg-[#ffdfdd] text-[#cd0000]",
    "Need to start": "bg-[#e2e7f1] text-[#48526a]",
    "": "bg-white text-black",
};

const priorityStyles: Record<string, string> = {
    "Low": "text-[#1A8CFF]",
    "Medium": "text-[#c39900]",
    "High": "text-[#fc213a]",
}

const rowNumberCol: ColumnDef<RowData, unknown> = {
    id: "rowNumber",
    header: () => (
        <div className="flex flex-row items-center justify-center">
            <FiHash className="text-[#AFAFAF]/[0.7] text-2xl" />
        </div>
    ),
    cell: ({ row }: { row: { index: number } }) => (
        <div className="text-neutral-500 text-center">{row.index + 1}</div>
    ),
    size: 40,
}

const jobRequestCol: ColumnDef<RowData, unknown> = {
    accessorKey: "jobRequest",
    header: () => (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                <FaBriefcase className="text-[#AFAFAF]" />
                <span>Job Request</span>
            </div>
            <IoChevronDownOutline className="text-[#AFAFAF] cursor-pointer" />
        </div>
    ),
    cell: (context) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="overflow-hidden text-ellipsis whitespace-nowrap outline-none w-84 h-10 px-2 py-1 focus:border-[#63916f] focus:border-2 focus:shadow-[0px_0px_10px_2px_rgba(108,139,112,0.2)]"
                value={value}
                onChange={(e) => updateData(e.target.value)}
            />
        );
    },
};

const submittedCol: ColumnDef<RowData, unknown> = {
    accessorKey: "submitted",
    header: () => (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                <IoCalendar className="text-[#AFAFAF]/[0.7]" />
                <span>Submitted</span>
            </div>
            <IoChevronDownOutline className="text-[#AFAFAF] cursor-pointer" />
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="text-right outline-none w-40 h-10 px-2 py-1 focus:border-[#63916f] focus:border-2 focus:shadow-[0px_0px_10px_2px_rgba(108,139,112,0.2)]"
                onChange={(e) => updateData(e.target.value)}
                value={value}
            />
        )
    }
}

const statusCol: ColumnDef<RowData, unknown> = {
    accessorKey: "status",
    header: () => (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                <FaCircleChevronDown className="text-[#AFAFAF]/[0.7]" />
                <span>Status</span>
            </div>
            <IoChevronDownOutline className="text-[#AFAFAF] cursor-pointer" />
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        const colorClass = statusStyles[value as string];
        return (
            <div className="flex flex-row items-center justify-center w-40 h-10">
                {["Complete", "In-process", "Blocked", "Need to start"].includes(value) ? (
                    <span className={`px-2 py-1 rounded-full font-medium text-center ${colorClass} w-fit h-fit`}>{value}</span>
                ) : (
                    <input
                        className="text-center font-medium outline-none px-2 py-1 w-full text-ellipsis h-10 focus:border-[#63916f] focus:border-2 focus:shadow-[0px_0px_10px_2px_rgba(108,139,112,0.2)]"
                        value={value}
                        onChange={(e) => updateData(e.target.value)}
                    />
                )}
            </div>
        )
    }
}

const submitterCol: ColumnDef<RowData, unknown> = {
    accessorKey: "submitter",
    header: () => (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                <FaUser className="text-[#AFAFAF]/[0.7]" />
                <span>Submitter</span>
            </div>
            <IoChevronDownOutline className="text-[#AFAFAF] cursor-pointer" />
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="overflow-hidden text-ellipsis whitespace-nowrap outline-none w-40 h-10 px-2 py-1 focus:border-[#63916f] focus:border-2 focus:shadow-[0px_0px_10px_2px_rgba(108,139,112,0.2)]"
                value={value}
                onChange={(e) => updateData(e.target.value)}
            />
        )
    }
}

const urlCol: ColumnDef<RowData, unknown> = {
    accessorKey: "url",
    header: () => (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                <FaGlobe className="text-[#AFAFAF]/[0.7]" />
                <span>URL</span>
            </div>
            <IoChevronDownOutline className="text-[#AFAFAF] cursor-pointer" />
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="overflow-hidden text-ellipsis whitespace-nowrap outline-none w-40 h-10 px-2 py-1 focus:border-[#63916f] focus:border-2 focus:shadow-[0px_0px_10px_2px_rgba(108,139,112,0.2)]"
                value={value}
                onChange={(e) => updateData(e.target.value)}
            />
        )
    }
}

const assignedCol: ColumnDef<RowData, unknown> = {
    accessorKey: "assigned",
    header: () => (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                <IoHandRight className="text-[#AFAFAF]/[0.7]" />
                <span>Assigned</span>
            </div>
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="outline-none w-40 h-10 px-2 py-1 text-ellipsis focus:border-[#63916f] focus:border-2 focus:shadow-[0px_0px_10px_2px_rgba(108,139,112,0.2)]"
                value={value}
                onChange={(e) => updateData(e.target.value)}
            />
        )
    }
}

const priorityCol: ColumnDef<RowData, unknown> = {
    accessorKey: "priority",
    header: () => (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                <span>Priority</span>
            </div>
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        const colorClass = priorityStyles[value];
        return (
            <div className="w-40 p-0">
                <input className={`text-center w-full block ${colorClass} font-medium outline-none text-ellipsis h-10 px-2 py-1 focus:border-[#63916f] focus:border-2 focus:shadow-[0px_0px_10px_2px_rgba(108,139,112,0.2)]`} value={value} onChange={(e) => updateData(e.target.value)} />
            </div>
        )
    }
}

const dueDateCol: ColumnDef<RowData, unknown> = {
    accessorKey: "dueDate",
    header: () => (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                <span>Due Date</span>
            </div>
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as string;
        return (
            <input
                className="text-right w-40 block outline-none text-ellipsis h-10 px-2 py-1 focus:border-[#63916f] focus:border-2 focus:shadow-[0px_0px_10px_2px_rgba(108,139,112,0.2)]"
                value={value}
                onChange={(e) => updateData(e.target.value)}
            />
        )
    }
}

const estValueCol: ColumnDef<RowData, unknown> = {
    accessorKey: "estValue",
    header: () => (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
                <span>Est. Value</span>
            </div>
        </div>
    ),
    cell: (context: CellContext<RowData, unknown>) => {
        const { getValue, updateData } = context as ExtendedCellContext;
        const value = getValue() as number | string;

        return (
            <div className="flex items-center gap-1 w-40">
                <input
                    className="w-full text-right outline-none text-ellipsis h-10 px-2 py-1 focus:border-[#63916f] focus:border-2 focus:shadow-[0px_0px_10px_2px_rgba(108,139,112,0.2)]"
                    value={value}
                    onChange={(e) => {
                        const val = e.target.value;
                        const num = Number(val);
                        if (val === "" || isNaN(num)) {
                            updateData(val);
                        } else {
                            updateData(num);
                        }
                    }}
                />
                {typeof value === "number" && (
                    <MdCurrencyRupee className="text-neutral-400" />
                )}
            </div>
        );
    }
}

const addColumn: ColumnDef<RowData, unknown> = {
    header: "",
    id: "addColumn",
    cell: () => (
        <div className="w-40"></div>
    )
}

export const columns: ColumnDef<RowData, unknown>[] = [
    {
        id: "rowNumberGroup",
        header: () => (
            <div className="bg-white w-full h-full"></div>
        ),
        columns: [rowNumberCol],
    },
    {
        id: "projectInfo",
        header: () => (
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row items-center gap-2 bg-[#EEEEEE] p-1 rounded-md">
                    <IoMdLink className="text-lg text-[#1A8CFF]"/>
                    <span className="font-normal text-[#545454]">Q3 Financial Overview</span>
                </div>
                <TbRefresh className="text-[#FA6736] text-xl"/>
            </div>
        ),
        columns: [jobRequestCol, submittedCol, statusCol, submitterCol],
    },
    {
        id: "urlGroup",
        header: "",
        columns: [urlCol],
    },
    {
        id: "abcGroup",
        header: () => (
            <div className="flex flex-row items-center justify-center gap-2">
                <PiArrowsSplitBold className="text-[#A3ACA3]"/>
                <span className="text-[#505450] font-medium">ABC</span>
                <HiDotsHorizontal className="text-[#AFAFAF]"/>
            </div>
        ),
        columns: [assignedCol],
    },
    {
        id: "questionGroup",
        header: () => (
            <div className="flex flex-row items-center justify-center gap-2">
                <PiArrowsSplitBold className="text-[#FFFFFF]"/>
                <span className="text-[#463E59] font-medium">Answer a question</span>
                <HiDotsHorizontal className="text-[#AFAFAF]"/>
            </div>
        ),
        columns: [priorityCol, dueDateCol],
    },
    {
        id: "extractGroup",
        header: () => (
            <div className="flex flex-row items-center justify-center gap-2">
                <PiArrowsSplitBold className="text-[#FFFFFF]"/>
                <span className="text-[#695149] font-medium">Extract</span>
                <HiDotsHorizontal className="text-[#AFAFAF]"/>
            </div>
        ),
        columns: [estValueCol],
    },
    {
        id: "add",
        header: () => (
            <div className="flex flex-row items-center justify-center">
                <IoAddOutline className="size-7 text-[#000000]"/>
            </div>
        ),
        columns: [addColumn],
    },
];

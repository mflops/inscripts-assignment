import { data as initialData } from "../data";
import { columns } from "./columns";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { useState } from "react";

const createEmptyRow = () => ({
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
});

const emptyRows = Array.from({ length: 25 }, createEmptyRow);
const dataWithEmptyRows = [...initialData, ...emptyRows];

const getHeaderClass = (columnId: string) => {
    const bgMap: Record<string, string> = {
        rowNumber: "pl-2 pr-1 h-8 w-8 bg-[#EEEEEE]",
        jobRequest: "pl-2 pr-1 bg-[#EEEEEE] h-8",
        submitted: "pl-2 pr-1 bg-[#EEEEEE] h-8",
        status: "pl-2 pr-1 bg-[#EEEEEE] h-8",
        submitter: "pl-2 pr-1 bg-[#EEEEEE] h-8",
        url: "pl-2 pr-1 bg-[#EEEEEE] h-8",
        assigned: "pl-2 pr-1 bg-[#e6f2e9] h-8",
        priority: "pl-2 pr-1 bg-[#EAE3FC] h-8",
        dueDate: "pl-2 pr-1 bg-[#EAE3FC] h-8",
        estValue: "pl-2 pr-1 bg-[#ffe9df] h-8",
        addColumn: "pl-2 pr-1 bg-[#FFFFFF] h-8",
        rowNumberGroup: "bg-[#FFFFFF] p-2 h-8",
        projectInfo: "bg-[#e2e2e2] p-2 h-8",
        urlGroup: "bg-[#FFFFFF] h-8",
        abcGroup: "bg-[#cfe3d4] h-8 px-4",
        questionGroup: "bg-[#DCCFFC] h-8 px-4",
        extractGroup: "bg-[#ffc0ad] h-8 px-4",
        add: "bg-[#EEEEEE] h-8 px-2",
    }

    return (
        `text-[#757575] font-semibold border-2 border-b-0 border-[#f6f6f6] text-left ${bgMap[columnId]}`
    );
}

export default function SpreadsheetTable() {
    const [tableData, setTableData] = useState(dataWithEmptyRows)

    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        columnResizeMode: "onChange",
    })

    return (
        <div className="overflow-auto bg-[#F6F6F6] pb-16 ring-[#E2E8F0] ring-1 w-full">
            <table className="w-full">
                <thead className="h-8">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    colSpan={header.colSpan}
                                    className={`relative ${getHeaderClass(header.column.id)}`}
                                    style={{ width: header.getSize() }}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}

                                    {/* Column resizer: only for leaf columns (colSpan === 1) */}
                                    {header.column.getCanResize() && header.colSpan === 1 && (
                                        <div
                                            onMouseDown={header.getResizeHandler()}
                                            onTouchStart={header.getResizeHandler()}
                                            className={`absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none
                                            ${header.column.getIsResizing() ? "bg-[#4b6a4f]" : "bg-transparent"}`}
                                        />
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td
                                    key={cell.id}
                                    className={`bg-white ring-1 ring-[#f6f6f6] ring-inset
                                ${cell.column.id === "rowNumber" ? "px-1" : "px-0"}`}
                                    style={{ width: cell.column.getSize() }} // make sure cells respect width
                                >
                                    {flexRender(cell.column.columnDef.cell, {
                                        ...cell.getContext(),
                                        updateData: (value: string | number) => {
                                            const rowIndex = row.index;
                                            const colId = cell.column.id;
                                            setTableData(prev =>
                                                prev.map((r, i) =>
                                                    i === rowIndex ? { ...r, [colId]: value } : r
                                                )
                                            );
                                        }
                                    })}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
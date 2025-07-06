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
        rowNumber: "p-2",
        jobRequest: "p-2",
        submitted: "p-2",
        status: "p-2",
        submitter: "p-2",
        url: "p-2",
        assigned: "bg-[#e6f2e9] p-2",
        priority: "bg-[#EAE3FC] p-2",
        dueDate: "bg-[#EAE3FC] p-2",
        estValue: "bg-[#ffe9df] p-2",
        addColumn: "bg-[#FFFFFF]",
        rowNumberGroup: "bg-[#FFFFFF] p-2",
        projectInfo: "bg-[#e2e2e2] py-1 px-2",
        urlGroup: "bg-[#FFFFFF] p-2",
        abcGroup: "bg-[#cfe3d4] p-2",
        questionGroup: "bg-[#DCCFFC] p-2",
        extractGroup: "bg-[#ffc0ad] p-2",
        add: "bg-[#EEEEEE]",
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
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div className="overflow-auto bg-[#F6F6F6] pb-16">
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    colSpan={header.colSpan}
                                    className={getHeaderClass(header.column.id)}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className={` bg-white border-2 border-[#f6f6f6]
                                ${cell.column.id === "addColumn" ? "" : ""}`}>
                                    {flexRender(cell.column.columnDef.cell, {
                                        ...cell.getContext(),
                                        updateData: (value: string | number) => {
                                            const rowIndex = row.index;
                                            const colId = cell.column.id;
                                            setTableData(prev => (
                                                prev.map((r, i) =>
                                                    i === rowIndex ? { ...r, [colId]: value } : r
                                                )
                                            ))
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
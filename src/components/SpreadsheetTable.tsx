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

export default function SpreadsheetTable() {
    const [tableData, setTableData] = useState(dataWithEmptyRows)

    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div className="overflow-auto bg-[#F6F6F6]">
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => {
                        return <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return <th
                                    key={header.id}
                                    className={`p-2 text-[#757575] font-semibold border-2 border-b-0 border-[#f6f6f6] text-left ${header.column.id === "assigned"
                                        ? "bg-[#e6f2e9]"
                                        : header.column.id === "priority" || header.column.id === "dueDate"
                                            ? "bg-[#eeddfd]"
                                            : header.column.id === "estValue"
                                                ? "bg-[#ffe9df]"
                                                : header.column.id === "addColumn"
                                                    ? "bg-white"
                                                    : "bg-[#EEEEE]"
                                        }`}
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            })}
                        </tr>
                    })}
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
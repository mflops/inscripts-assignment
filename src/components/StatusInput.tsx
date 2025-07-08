interface StatusInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const StatusInput = ({ value, onChange }: StatusInputProps) => {
    return (
        <input
            className="text-center outline-none px-2 w-full h-8 text-xs font-regular text-[#121212] text-ellipsis focus:ring-[#63916f] focus:ring-1 focus:ring-inset focus:shadow-[0px_0px_10px_2px_rgba(108,139,124,0.2)] font-normal cursor-default"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}; 
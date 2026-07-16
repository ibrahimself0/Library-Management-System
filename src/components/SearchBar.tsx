import { Search } from "lucide-react";

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    onSearch?: () => void;
    placeholder?: string;
    className?: string;
};

function SearchBar({
                       value,
                       onChange,
                       onSearch,
                       placeholder = "Search...",
                       className = "",
                   }: SearchBarProps) {
    return (
        <div className={`relative w-full max-w-3xl ${className}`}>
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch?.();
                    }
                }}/*

                */
                className={`w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 outline-none transition focus:border-[#6B7280] focus:ring-2 focus:ring-[#6B7280] ${className}`}
            />
        </div>
    );
}

export default SearchBar;

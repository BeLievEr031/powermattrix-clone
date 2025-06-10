import { useState } from "react";

interface Prop {
    label: string;
    type: string;
    name: string;
    value: string;
    error?: string;
}

const Input = ({
    label,
    type = "text",
    name,
    value,
    error = "",
}: Prop) => {
    const [focused, setFocused] = useState(false);
    const [data, setData] = useState("")
    const isActive = focused || value.length > 0;

    return (
        <div className="relative w-full bg-white">
            <input
                type={type}
                name={name}
                value={data}
                onChange={(e) => setData(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => {
                    if (data.length <= 0) {
                        setFocused(false)
                    }
                }}
                placeholder=""
                required
                aria-invalid={!!error}
                className={`peer h-12 w-full rounded-sm border-2  px-3 pt-6 pb-2 text-sm placeholder-transparent
          focus:outline-none transition-all duration-200
          ${error
                        ? "border-2 border-red-500"
                        : isActive
                            ? "border-2 border-black"
                            : "border-2 border-neutral-300"
                    }`}
            />
            <label
                htmlFor={name}
                className={`capitalize absolute pointer-events-none left-3 text-neutral-600 text-md transition-all duration-200 px-1
          ${isActive ? "top-1 text-xs" : "top-3.5"}`}
            >
                {label}
            </label>

            {error && (
                <p className="text-red-600 text-sm font-bold mt-1 px-1">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;

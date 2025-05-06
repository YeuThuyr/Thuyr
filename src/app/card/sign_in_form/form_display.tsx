'use client';

import React, { useState } from "react";

interface Props{
    children: {
        name: string,
        type: string,
        id: string,
    },
}

const FormDisplay = ({children}: Props) => {
    const [ target, setTarget ] = useState("");
    const [ isFocused, setIsFocused ] = useState(false);

    return (
        <div className=" relative bg-[#F7F7F7] p-4 rounded-2xl">
            <input type={children.type} id={children.id} className="w-full px-3 py-2 bg-transparent rounded border border-transparent border-b-gray-200 outline-none focus:border-b-green-200 duration-200" onChange={(e) => setTarget(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(target.length > 0)}></input>
            <label className={`absolute left-5 transition-all text-base pointer-events-none ${
                isFocused || target
                    ? "top-1"
                    : "top-5"
                }`}
            >
                {children.name}
            </label>
        </div>
    )
}
export default FormDisplay;
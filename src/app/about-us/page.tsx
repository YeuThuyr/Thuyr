'use client'

import { useState } from "react";

export default function FloatingPlaceholderInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value.length > 0)}
        className="border-2 border-gray-300 rounded p-2 w-full focus:border-blue-500 focus:ring-0 outline-none"
      />
      <label
        className={`absolute left-2 transition-all ${
          isFocused || value
            ? "top-2 text-sm text-blue-500"
            : "top-4 text-gray-400 text-base"
        }`}
      >
        Your Name
      </label>
    </div>
  );
}

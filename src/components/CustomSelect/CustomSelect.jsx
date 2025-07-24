import React, { useState, useRef, useEffect } from "react";

export default function CustomSelect({ options = [], value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative w-48" ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm flex justify-between items-center"
      >
        <span className="text-sm text-gray-700">{value}</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {open && (
        <ul className="absolute left-0 right-0 z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-accent hover:text-white ${
                value === option ? "bg-accent text-white" : "text-gray-700"
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

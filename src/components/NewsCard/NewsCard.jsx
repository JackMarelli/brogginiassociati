import React from "react";
import { ArrowUpRight } from "lucide-react"; // Usa Lucide Icons

export default function NewsCard({ title, description, to = "#", date }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="col-span-full bg-gray-50 rounded-lg px-6 py-4 hover:bg-gray-100 transition-color duration-200 flex flex-col md:flex-row justify-between group"
    >
      <div className="flex flex-col">
        <p className="text-xs text-gray-500 mb-1">{date}</p>
        <h3 className="text-lg 2xl:text-xl font-medium flex items-center gap-2 mb-1 2xl:mb-2">
          {title}
          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </h3>
        <p className="text-sm 2xl:text-base text-gray-600">{description}</p>
      </div>
      <div className="flex-shrink-0 self-start md:self-center text-xs text-black bg-white px-2 py-1 rounded h-fit">
        PDF
      </div>
    </a>
  );
}

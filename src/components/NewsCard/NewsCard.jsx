import React from "react";

export default function NewsCard({ title, description, to = "#", date, ariaLabel }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="col-span-full bg-gray-50 rounded-lg px-6 py-4 hover:bg-gray-100 transition-color duration-200 flex flex-col md:flex-row justify-between group h-full 2xl:min-h-[180px]"
    >
      <div className="flex flex-col min-w-0 pr-4 2xl:pr-6 flex-1 justify-between">
        <div>
          <p className="text-xs 2xl:text-md text-gray-500 mb-1">
            {date}
          </p>
          <h3 className="text-lg 2xl:text-xl font-medium flex items-center gap-2 mb-1 2xl:mb-2 min-w-0 flex-1">
            {title}
          </h3>
        </div>
  <p className="text-sm 2xl:text-base text-gray-600">{description}</p>
      </div>
      <div className="flex-shrink-0 self-start md:self-center text-xs text-black bg-white px-2 py-1 rounded h-fit">
        PDF
      </div>
    </a>
  );
}

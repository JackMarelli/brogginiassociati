export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="flex flex-col items-start md:grid md:grid-cols-12 gap-4 md:gap-8 bg-gray-50 rounded-lg px-8 pt-8 pb-16">
      <h3 className="order-1 md:order-none md:col-span-5 text-3xl font-semibold md:mb-2">
        {title}
      </h3>
      <p className="order-2 md:order-none md:col-span-6 text-lg text-gray-700">
        {description}
      </p>
      <div className="col-span-1 flex items-start justify-end">
        <button className="bg-blue-900 text-white p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

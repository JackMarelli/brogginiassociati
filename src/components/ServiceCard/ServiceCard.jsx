export default function ServiceCard({ title, description, icon }) {
    return (
      <div className="p-6 bg-white rounded-lg flex flex-col">
        <div className="mb-4">
          {icon === "building" && (
            <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          )}
        </div>
        <h3 className="text-2xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
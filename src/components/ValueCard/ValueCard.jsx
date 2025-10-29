export default function ValueCard({ name, description, icon: Icon }) {
  return (
    <div className="h-full p-8 rounded-lg bg-gray-50">
      <div className="mb-4 text-gray-800">
        <Icon size={20} className="m-1" />
      </div>
  <h3 className="text-2xl 2xl:text-4xl font-medium mb-4 2xl:mb-6">{name}</h3>
  <p className="text-gray-600 text-sm 2xl:text-lg">{description}</p>
    </div>
  );
}

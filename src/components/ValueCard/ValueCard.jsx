export default function ValueCard({ name, description, icon: Icon }) {
  return (
    <div className="p-8 rounded-lg bg-gray-50">
      <div className="mb-4 text-gray-800">
        <Icon size={20} className="m-1" />
      </div>
      <h3 className="text-2xl font-medium mb-4">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

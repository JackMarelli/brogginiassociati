export default function ValueCard({ name, description, icon }) {
  return (
    <div className="p-8 rounded-lg bg-gray-50">
      <div className="mb-4 text-gray-800">{icon}</div>
      <h3 className="text-4xl font-medium mb-4">{name}</h3>
      <p className="text-gray-600 text-xl">{description}</p>
    </div>
  );
}

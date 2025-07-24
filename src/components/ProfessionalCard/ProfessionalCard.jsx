import { Link } from "react-router-dom";

export default function ProfessionalCard({ slug, image, name, role }) {
  return (
    <Link
      to={`/professionisti/${slug}`}
      className="flex flex-col w-full md:w-80 group hover:opacity-90 transition-opacity"
    >
      <div className="w-full aspect-square overflow-hidden rounded-lg bg-gray-200">
        <img
          src={image}
          alt={name}
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300 w-full h-full"
        />
      </div>
      <h3 className="text-xl font-medium mt-4 mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </Link>
  );
}

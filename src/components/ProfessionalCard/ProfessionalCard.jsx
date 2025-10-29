import { Link } from "react-router-dom";

export default function ProfessionalCard({ slug, image, name, role }) {
  return (
    <Link
      to={`/professionisti/${slug}`}
      className="flex flex-col w-full md:w-80 2xl:w-96 group hover:opacity-90 transition-opacity"
    >
      <div className="w-full aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={name}
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300 w-full h-full"
        />
      </div>
      <h3 className="text-xl 2xl:text-3xl font-medium mt-4 mb-1">{name}</h3>
      <p className="text-sm 2xl:text-lg text-gray-600">{role}</p>
    </Link>
  );
}

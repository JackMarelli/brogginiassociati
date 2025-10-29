import { Link } from "react-router-dom";

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  to = "/servizi",
}) {
  return (
    <div className="flex flex-col items-start md:grid md:grid-cols-12 gap-4 md:gap-8 bg-gray-50 rounded-lg px-8 pt-8 pb-16">
      <h3 className="order-1 md:order-none md:col-span-5 text-2xl 2xl:text-3xl font-semibold md:mb-2 2xl:mb-3">
        {title}
      </h3>
      <p className="order-2 md:order-none md:col-span-5 text-md 2xl:text-lg text-gray-700">
        {description}
      </p>
      <div className="col-span-2 flex items-start justify-end">
        <Link to={to} className="bg-accent text-white p-2 rounded-md">
          <Icon size={20} className="m-1" />
        </Link>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function NewsCard({ title, description, image, to="/" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  }

  return (
    <div onClick={handleClick} className="col-span-12 md:col-span-4 flex flex-col bg-white overflow-hidden cursor-pointer">
      {image && (
        <div className="w-full bg-gray-200 rounded-lg aspect-video overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="my-4">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

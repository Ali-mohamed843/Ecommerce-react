export default function ProductCard2({ image, name, price, alt, onClick }) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="bg-[#efefef] rounded-lg overflow-hidden aspect-[4/5] mb-4 relative">
        <img
          src={image || "/assets/placeholder.jpg"}
          alt={alt || name}
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="font-medium text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">
        ${typeof price === "number" ? price.toFixed(2) : price}
      </p>
    </div>
  );
}

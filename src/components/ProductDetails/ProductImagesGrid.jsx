import { useState } from "react";

export default function ProductImagesGrid({ images, onFavorite }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  function handleImageSelect(image) {
    setSelectedImage(image);
  }

  function handleFavorite(e) {
    e.stopPropagation(); // Prevent accidental bubbling
    if (onFavorite) onFavorite(); // Call the parent callback if provided
  }

  return (
    <div className="flex flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3 w-16 sm:w-20 flex-shrink-0">
        {images.map((image) => (
          <button
            key={image}
            className={`relative aspect-[3/4] rounded-md overflow-hidden border-2 bg-gray-100 transition-all ${
              selectedImage === image
                ? "border-gray-900"
                : "border-transparent hover:border-gray-300"
            }`}
            onClick={() => handleImageSelect(image)}
          >
            <img
              src={image}
              alt={`Thumbnail of ${image}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 relative bg-[#f8f9fa] rounded-lg overflow-hidden aspect-[3/4] flex items-center justify-center">
        <button
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors text-gray-700 z-10"
          aria-label="Add to wishlist"
          onClick={handleFavorite}
        >
          {/* Heart Icon (Inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <img
          src={selectedImage}
          alt="Main product view"
          className="w-5/6 h-5/6 object-contain mix-blend-multiply"
        />
      </div>
    </div>
  );
}

import { useState } from "react";

export default function ProjectImages({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!images || images.length === 0) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex gap-2 flex-wrap pt-2">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`project-screenshot-${index}`}
          className="w-32 h-20 object-cover rounded border border-gray-200 cursor-pointer hover:opacity-80"
          onClick={() => setSelectedIndex(index)}
        />
      ))}

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-[90%] max-h-[90%] flex items-center justify-center">
            <img
              src={images[selectedIndex]}
              alt="popup"
              className="rounded-lg object-contain max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-0 right-0 m-2 text-white text-2xl font-bold bg-black bg-opacity-40 px-3 py-1 rounded hover:bg-opacity-60"
            >
              &times;
            </button>
            {/* Prev */}
            {images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl font-bold px-3 py-1 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-l"
              >
                &#8249;
              </button>
            )}
            {/* Next */}
            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl font-bold px-3 py-1 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-r"
              >
                &#8250;
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

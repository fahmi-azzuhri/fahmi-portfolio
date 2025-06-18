import { useState } from "react";

export default function ProjectImages({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex gap-2 flex-wrap pt-2">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`project-screenshot-${index}`}
          className="w-32 h-20 object-cover rounded border border-gray-200 cursor-pointer hover:opacity-80"
          onClick={() => setSelectedImage(img)}
        />
      ))}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90%] max-h-[90%]">
            <img
              src={selectedImage}
              alt="popup"
              className="rounded-lg object-contain max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()} // biar klik gambar gak close modal
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 m-2 text-white text-2xl font-bold bg-black bg-opacity-40 px-3 py-1 rounded hover:bg-opacity-60"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

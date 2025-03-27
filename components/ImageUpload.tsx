import React, { useState } from "react";

const ImageUpload: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);

  // Handle image selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...selectedFiles]);
    }
  };

  // Remove an image
  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full p-4 border border-gray-300 rounded-md">
      <label
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Upload Images
        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>

      {/* Image Preview Section */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative border p-2 rounded-md">
            <img
              src={URL.createObjectURL(image)}
              alt={`Uploaded ${index}`}
              className="w-full h-32 object-cover rounded-md"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;

import React from "react";


const ImageLinkForm = () => {
  return (
    <div>
      <p className="text-center text-white text-2xl mb-4">
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className="flex justify-center">
        <div className="flex w-full max-w-md">
          <input className="w-full p-2 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" type="text" placeholder="Enter image URL" />
          <button className="px-4 rounded-r-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold border-t border-b border-r border-gray-200">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
export default ImageLinkForm;
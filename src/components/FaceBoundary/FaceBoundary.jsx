import React from "react";

const FaceBoundary = ({ children, faces }) => {
  return (
    <div className="flex flex-row justify-center items-center mt-6">
      <div className="relative inline-block">
        {children}

        {faces.map((face, index) => (
          <div
            key={index}
            className="absolute border-4 border-green-500 box-border"
            style={{
              left: `${face.x1}px`,
              top: `${face.y1}px`,
              width: `${face.x2 - face.x1}px`,
              height: `${face.y2 - face.y1}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceBoundary;

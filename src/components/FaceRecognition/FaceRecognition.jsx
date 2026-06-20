import React from "react"; 
const FaceRecognition = ({ imageUrl }) => {
  if (!imageUrl) return null;
  return (
    <div className=" mb-3">
      <img src={imageUrl} alt="Face Recognition" />
    </div>
  );
};

export default FaceRecognition;
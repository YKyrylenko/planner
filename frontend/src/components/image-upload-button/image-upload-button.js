import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./image-upload-button.css";

const ImageUploadButton = ({ uploadUserPhoto }) => {
  const [photo, setPhoto] = useState("");

  const handleUploadImage = (event) => {
    const photo = event.target.files[0];
    uploadUserPhoto(photo);
    setPhoto(URL.createObjectURL(photo));
  };

  return (
    <div id="image-upload">
      <label htmlFor="upload-button">
        <Avatar
          src={photo}
          style={{ width: "400px", height: "400px" }}
        ></Avatar>
      </label>
      <input
        id="upload-button"
        type="file"
        onChange={handleUploadImage}
      ></input>
    </div>
  );
};

export default ImageUploadButton;

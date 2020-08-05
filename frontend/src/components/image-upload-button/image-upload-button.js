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
    <React.Fragment>
      {/* <Fab className="upload-fab"> */}
      <label htmlFor="upload-button">
        <Avatar
          src={photo}
          style={{ width: "200px", height: "200px" }}
        ></Avatar>
      </label>
      {/* </Fab> */}
      <input
        id="upload-button"
        type="file"
        onChange={handleUploadImage}
      ></input>
    </React.Fragment>
  );
};

export default ImageUploadButton;

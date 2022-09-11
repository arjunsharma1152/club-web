import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase/firebase.js";
import { v4 } from "uuid";
import Photos from "../photos-component/photos";
import "./upload.scss";

function UploadImg() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });

    alert("file uploded");
  };

  useEffect(() => {
    {
      const actualBtn = document.getElementById("actual-btn");

      const fileChosen = document.getElementById("file-chosen");

      actualBtn.addEventListener("change", function () {
        fileChosen.textContent = this.files[0].name;
      });
    }
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="gallery-head">
        Best photo's will be featured on the official instagram page of CSIT
        Photopedia club
      </div>
      <div className="btn">
        <input
          type="file"
          id="actual-btn"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
          hidden
        />
        <label for="actual-btn">Choose File</label>
        <span id="file-chosen">No file chosen</span>
        <button className="button-64" onClick={uploadFile}>
          Upload Image
        </button>
      </div>

      {imageUrls.map((url) => (
        <Photos imageUrl={url} />
      ))}
    </div>
  );
}

export default UploadImg;

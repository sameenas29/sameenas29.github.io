import InputContainer from "./Input.js";
import Data from "./Data.js";

const Image = () => {
  return `
    <img id="myImage"
     src="${Data[0].previewImage}"
    />
 `;
};

const ImageContianer = document.createElement("div");
ImageContianer.innerHTML = Image();
ImageContianer.setAttribute('class', 'imageContainer');
ImageContianer.appendChild(InputContainer);

export default ImageContianer;

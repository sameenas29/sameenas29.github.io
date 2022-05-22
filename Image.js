import InputContainer from "./Input.js";

const Image = () => {
  return `
    <img class="myImage"
    src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    />
 `;
};

const ImageContianer = document.createElement("div");
ImageContianer.innerHTML = Image();
ImageContianer.setAttribute('class', 'imageContainer');
ImageContianer.appendChild(InputContainer);

export default ImageContianer;

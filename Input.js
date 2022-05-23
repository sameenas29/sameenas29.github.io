import Data from './Data.js';

const Input = () => {
  return `
   <div class="input">
    <input id="inputValue" type="text" value="${Data[0].title}"/>
   </div>
   `;
};

const InputContainer = document.createElement("div");
InputContainer.innerHTML = Input();

export default InputContainer;

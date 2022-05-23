import Data from './Data.js';

const Input = () => {
  return `
   <div class="input">
    <input id="inputValue" type="text" value="${Data[0].title}"/>
   </div>
   `;
};

const Div = document.createElement("div");
Div.innerHTML = Input();

export default Div;

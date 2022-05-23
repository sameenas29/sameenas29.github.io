const Input = () => {
  return `
   <div class="input">
    <input id="inputValue" type="text"/>
   </div> 
   `;
};

const Div = document.createElement("div");
Div.innerHTML = Input();

export default Div;

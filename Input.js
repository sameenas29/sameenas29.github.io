const Input = () => {
  return `
   <div id="input">
    <input type="text" id="input" value="Hey" />
   </div> 
   `;
};

const Div = document.createElement("div");
Div.innerHTML = Input();

export default Div;

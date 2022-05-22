const Input = () => {
  return `
   <div class="input">
    <input type="text" id="input" value="Hey" />
   </div> 
   `;
};

const Div = document.createElement("div");
Div.innerHTML = Input();

export default Div;

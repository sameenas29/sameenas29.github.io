const Image = () => {
  return `
   <div id="myImage">
    <img
    id="token"
    src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    onclick="myFunction()"/>
  </div>
 `;
};

const div2 = document.createElement("div2");
div2.innerHTML = Image();

export default div2;

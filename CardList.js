import Card from "./Card.js";
import Data from "./Data.js";

function returnHtml(item) {
  let x= item.title;
  let y= item.previewImage;

  return`
   <div id="container">
    <img
     id="token"
     src=${x}
    />
    <div id="name">
     <p>${y}</p>
    </div>
   </div>
  `;
};

const CardList = () => {

 let cards = Data.map(returnHtml);
 return cards;
 
};

const div3 = document.createElement("div");
div3.innerHTML = CardList();

export default div3;

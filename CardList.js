import Data from "./Data.js";

function returnCards(item, index) {

  let ImgSrc= item.previewImage;
  let ImgTitle= item.title;
  
  return`
    <div class="nameTag" data-index="${index}">
     <img
      class="nameTagPic"
      src=${ImgSrc}
     />
     <div class="nameTagTitle">
      <span> ${ImgTitle} </span>
     </div>
    </div>
  `;
};

const CardList = document.createElement("div");
CardList.innerHTML = Data.map(returnCards).join('');
CardList.setAttribute('class', 'cardList');

export default CardList;

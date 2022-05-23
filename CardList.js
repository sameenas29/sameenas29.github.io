import Data from "./Data.js";

function addDots(string)
{
  var dots = "....";
  if(string.length > 40)
  {
    string = string.substring(0,20) + dots + string.substring(string.length-15,string.length-1);
  }
 
    return string;
}


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
      <span> ${addDots(ImgTitle)} </span>
     </div>
    </div>
  `;
};

const CardList = document.createElement("div");
CardList.innerHTML = Data.map(returnCards).join('');
CardList.setAttribute('class', 'cardList');

export default CardList;

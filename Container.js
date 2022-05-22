import ImageContianer from "./Image.js";
import CardListContainer from "./CardList.js";

let App = document.getElementById("app");
let ListContainer = document.getElementById("listContainer");
ListContainer.appendChild(CardListContainer);
App.appendChild(ImageContianer);

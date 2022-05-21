import Card from "./Card.js";
import Data from "./Data.js";

const Container = () => {
  const newArr = Data.map(myFunction);
  function myFunction(num) {
    return num * 10;
  }
  return `
  <div id>
    <h3>${backpack.name}</h3>
    <ul>
      <li>Volume: ${backpack.volume}</li>
      <li>Color: ${backpack.color}</li>
      <li>Number of pockets: ${backpack.pocketNum}</li>
      <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
    backpack.strapLength.right
  } </li>
      <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
    </ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = Container();
document.body.appendChild(main);

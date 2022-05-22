const Card = () => {
  return `
   <p style="color:blue;font-size:4600px;">
    I'm a big, blue, <strong>strong</strong> paragraph
   </p>
`;
};

const div3 = document.createElement("div");
div3.innerHTML = Card();

export default div3;
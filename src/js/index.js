import courses from "./data.js";
let container = document.getElementById("container");

function creatElm(imgUrl, titleText, priceText) {
  let card = document.createElement("div"); //creaction d'un element div
  card.classList.add("swiper-slide", "card"); //ajout des classes swiper-slide et card a notre element card

  let content = document.createElement("div"); //creation d'element div qui va contenir l'image, le titre et le prix
  content.classList.add("card-content"); //ajout du class card-content a content

  let imgDiv = document.createElement("div"); //creaction d'element div qui va contenir l'imge
  imgDiv.classList.add("image"); //ajout du class image a imgDiv
  let img = document.createElement("img"); //creation d'element img
  img.src = imgUrl; //on ajoute le lien d'image a l'element img
  imgDiv.appendChild(img); //on ajoute l'image a sont div

  let para = document.createElement("div"); //creaction d'element div qui va contenir le titre et le prix
  para.classList.add("paragraphe"); // ajout du class paragraphe a para
  let titleSpan = document.createElement("span"); //creaction d'element span qui va contenir le titre
  titleSpan.classList.add("title"); // ajout du class title a titleSpan
  let title = document.createTextNode(`${titleText}`); //creation d'un text node qui contient le titre
  titleSpan.appendChild(title); // on ajoute le titre a l'element span
  let priceSpan = document.createElement("span"); //creaction d'element span qui va contenir le prix
  priceSpan.classList.add("price"); // ajout du class price a priceSpan
  let price = document.createTextNode(`${priceText} $`); //creation d'un text node qui contient le prix
  priceSpan.appendChild(price); // on ajoute le prix a sont l'element span

  para.appendChild(titleSpan); //ajout du span de titre a un div
  para.appendChild(priceSpan); //ajout du span de prix a un div

  content.appendChild(imgDiv); //ajout du div qui contient l'image a un div (content)
  content.appendChild(para); //ajout du div qui contient le titre et le prix a un div (content)
  card.appendChild(content); // ajout du div (content) a l'element div (card)
  container.appendChild(card); //ajout du div (card) a l'element qui contient tous les cours
}

let numExist = [];

for (var i = 0; i < 9; i++) {
  let num = Math.ceil(Math.random() * courses.length - 1);
  while (numExist.includes(num)) {
    num = Math.ceil(Math.random() * courses.length - 1);
  }
  numExist.push(num);
  creatElm(courses[num].image, courses[num].title, courses[num].price);
}

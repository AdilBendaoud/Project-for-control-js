import courses from "./data.js";
let container = document.getElementById("container");

for (var i = 0; i < 9; i++) {

  let num = Math.ceil(Math.random() * 20);

  let card = document.createElement("div");
  card.classList.add("swiper-slide");
  card.classList.add("card");
  let content = document.createElement("div");
  content.classList.add("card-content");
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("image");
  let img = document.createElement("img");
  img.src = courses[num].image;
  imgDiv.appendChild(img);
  let para = document.createElement("div");
  para.classList.add("paragraphe");
  let titleSpan = document.createElement("span");
  titleSpan.classList.add("title");
  let title = document.createTextNode(`${courses[num].title}`);
  titleSpan.appendChild(title);
  let priceSpan = document.createElement("span");
  priceSpan.classList.add("price");
  let price = document.createTextNode(`${courses[num].price} $`);
  priceSpan.appendChild(price);
  para.appendChild(titleSpan);
  para.appendChild(priceSpan)
  content.appendChild(imgDiv);
  content.appendChild(para);
  card.appendChild(content);
  container.appendChild(card);
}

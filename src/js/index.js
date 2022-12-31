import courses from "./data.js";
let container = document.getElementById("container");



function creatElm(imgUrl,titleText,priceText){
  let card = document.createElement("div");
  card.classList.add("swiper-slide");
  card.classList.add("card");
  let content = document.createElement("div");
  content.classList.add("card-content");
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("image");
  let img = document.createElement("img");
  img.src = imgUrl;
  imgDiv.appendChild(img);
  let para = document.createElement("div");
  para.classList.add("paragraphe");
  let titleSpan = document.createElement("span");
  titleSpan.classList.add("title");
  let title = document.createTextNode(`${titleText}`);
  titleSpan.appendChild(title);
  let priceSpan = document.createElement("span");
  priceSpan.classList.add("price");
  let price = document.createTextNode(`${priceText} $`);
  priceSpan.appendChild(price);
  para.appendChild(titleSpan);
  para.appendChild(priceSpan)
  content.appendChild(imgDiv);
  content.appendChild(para);
  card.appendChild(content);
  container.appendChild(card);
}

let numExist = [];

for (var i = 0; i < 9; i++) {

  let num = Math.ceil(Math.random() * courses.length-1);
  while(numExist.includes(num)){
    num = Math.ceil(Math.random() * courses.length-1);
  }
  console.log(num)
  numExist.push(num);
  creatElm(courses[num].image,courses[num].title,courses[num].price)
  
}

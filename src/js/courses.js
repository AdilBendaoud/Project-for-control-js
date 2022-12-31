 import courses from "./data.js";
let li = document.getElementsByClassName("category");
let searsh = document.getElementById("searsh");
let range = document.getElementById("range");
let div = document.querySelector(".box");
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
button.addEventListener('click', () => {menu.classList.toggle('hidden')});

var prix = Math.max(...courses.map((v) => v.price));
range.setAttribute("max", prix);

function creatDiv(imgUrl,titleText,priceText){
  
  let container = document.createElement("div");
  container.classList.add("exemple");
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("img");
  let img = document.createElement("img");
  img.src = imgUrl;
  imgDiv.appendChild(img);
  let detail = document.createElement("div");
  detail.classList.add("detail");
  let titleDiv = document.createElement("p");
  titleDiv.classList.add("title");
  let title = document.createTextNode(titleText);
  titleDiv.appendChild(title);
  let priceDiv = document.createElement("p");
  priceDiv.classList.add("price");
  let price = document.createTextNode(`${priceText} $`);
  priceDiv.appendChild(price);
  detail.appendChild(titleDiv);
  detail.appendChild(priceDiv);
  container.appendChild(imgDiv);
  container.appendChild(detail);
  div.appendChild(container);
}

for (let i = 0; i < courses.length; i++) {
  creatDiv(courses[i].image,courses[i].title,courses[i].price)
}

function showAllCourses(){
  for (var i = 0; i < courses.length; i++) {
    div.children[i].style.display = "block";
  }
}

let text = document.createTextNode("Sorry, No Courses Matcher Your Search");
let p = document.createElement("p");
p.classList.add("empty");
p.appendChild(text);

function displayedElements() {
  var num = 0;
  for (var i = 0; i < courses.length; i++) {
    if (div.children[i].style.display === "block") {
      num++;
    }
  }
  return num;
}

//ul

for (var i = 0; i < 5; i++) {
  li[i].addEventListener("click", (e) => {
    if (e.target.innerText !== "All") {
      showAllCourses();
      for (var i = 0; i < courses.length; i++) {
        let title = div.children[i].children[1].children[0].outerText;
        if (!(title.includes(e.target.innerText) || title.includes(e.target.innerText.toLowerCase()) || title.includes(e.target.innerText.toUpperCase()))) {
          div.children[i].style.display = "none";
        }
      }
    } else {
      showAllCourses();
    }
  });
}

//range

range.addEventListener("change", (e) => {
  showAllCourses();
  for (var i = 0; i < courses.length; i++) {
    let text = div.children[i].children[1].children[1].outerText;
    let priceNumber = text.slice(0,text.length-1)
    if (+priceNumber > e.target.value) {
      div.children[i].style.display = "none";
    }
  }
  range.nextElementSibling.innerHTML = `valeur : ${e.target.value}$`;
});

//searsh

searsh.addEventListener("input", (e) => {
  if (div.getElementsByClassName("empty").length > 0) {
    div.removeChild(p);
  }

  showAllCourses();
  
  for (var i = 0; i < courses.length; i++) {
    var text = e.target.value;
    if (!div.children[i].children[1].children[0].outerText.includes(text)) {
      div.children[i].style.display = "none";
    }
  }
  if (displayedElements() === 0) {
    div.appendChild(p);
  }
});


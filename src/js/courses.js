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
  
  let container = document.createElement("div"); //creation d'element div
  container.classList.add("exemple");// on ajoute la class exemple a l'element div
  let imgDiv = document.createElement("div");//creation d'element div qui va contenir l'image
  imgDiv.classList.add("img");//on ajoute la class img a ce dernier
  let img = document.createElement("img");// creation d'element img
  img.src = imgUrl;// ajout de lien d'image 
  imgDiv.appendChild(img);// ajout de l'image a sont div
  let detail = document.createElement("div");//creation d'element div qui va contenir le titre et le prix
  detail.classList.add("detail");// ajour du class detail a ce dernier
  let titleDiv = document.createElement("p");// creation d'element p
  titleDiv.classList.add("title");//on ajoute la class title a ce dernier
  let title = document.createTextNode(titleText);//creation du text node qui comporte le titre du cour
  titleDiv.appendChild(title);//ajout du text node a l'element div
  let priceDiv = document.createElement("p");// creation d'element p
  priceDiv.classList.add("price");//on ajoute la class price a ce dernier
  let price = document.createTextNode(`${priceText} $`);//creation du text node qui comporte le prix du cour
  priceDiv.appendChild(price);//ajout du text node a l'element p
 
  detail.append(titleDiv, priceDiv);//ajout de titre et prix a l'element div (detail)
  
  container.append(imgDiv, detail);//ajout de l'image et le div (detail) au container
  div.appendChild(container);//ajout du cour dans la page
}
for (let i = 0; i < courses.length; i++) {
  creatDiv(courses[i].image,courses[i].title,courses[i].price)
}





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
  //creation d'un event listener pour chaque element <li>
  li[i].addEventListener("click", (e) => {

    // on verifie si l'element cliquer est (All)
    if (e.target.innerText !== "All") {
      //afficher tous les cours avant d'effectuer le filtrage
      showAllCourses();
      //filtrage des cours
      for (var i = 0; i < courses.length; i++) {
        //recuperation du titre de chaque div qui contient les cours
        let title = div.children[i].children[1].children[0].outerText;
        // si le titre de l'element ne continet pas le mot voulue on le cache
        if (!(title.includes(e.target.innerText) || 
              title.includes(e.target.innerText.toLowerCase()) || 
              title.includes(e.target.innerText.toUpperCase()))) {

          div.children[i].style.display = "none";
        }
      }
    } else {
      //si l'element cliquer est (All) on affiche tous les cours
      showAllCourses();
    }
  });
}

function showAllCourses(){
  for (var i = 0; i < courses.length; i++) {
    div.children[i].style.display = "block";
  }
}

//range

range.addEventListener("change", (e) => {
  //afficher tous les cours avant d'effectuer le filtrage 
  showAllCourses();
  for (var i = 0; i < courses.length; i++) {
    //recuperation de prix de chaque div qui contient les cours
    let text = div.children[i].children[1].children[1].outerText;
    
    //suppression du signe $ avant le filtrage 
    let priceNumber = text.slice(0,text.length-1)

    //si le prix du cours est supérieur a la valeur du input on le cache
    if (+priceNumber > e.target.value) {
      div.children[i].style.display = "none";
    }
  }

  //mise à jour du span qui affiche la valeur du input
  range.nextElementSibling.innerHTML = `valeur : ${e.target.value}$`;
});

//searsh

searsh.addEventListener("input", (e) => {

  //creation du paragraphe qui va s'afficher si le cour rechercher n'existe pas
  let text = document.createTextNode("Sorry, No Courses Matcher Your Search");
  let p = document.createElement("p");
  p.classList.add("empty");
  p.appendChild(text);

  //verification s'il existe un cours 
  if (div.getElementsByClassName("empty").length > 0) {
    div.removeChild(p);
  }

  //afficher tous les cours avant d'effectuer le filtrage
  showAllCourses();

  //filtrage des cours
  for (var i = 0; i < courses.length; i++) {
    var inputValue = e.target.value;
    if (!div.children[i].children[1].children[0].outerText.includes(inputValue)) {
      div.children[i].style.display = "none";
    }
  }

  //affichage du paragraphe s'il n'y a pas de cour
  if (displayedElements() === 0) {
    div.appendChild(p);
  }
});


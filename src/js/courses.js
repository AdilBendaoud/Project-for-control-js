import courses from "./data.js"
let li = document.getElementsByTagName("li");
let searsh = document.getElementById("searsh");
let range = document.getElementById("range");
let div = document.querySelector(".container");

var prix = Math.max(...courses.map((v) => v.price));
range.setAttribute("max", prix);
for (let i = 0; i < courses.length; i++) {
  div.innerHTML += `
  <div class="exemple">
    <div class="img">
        <img src="${courses[i].image}" alt="">
    </div>
    <div class="detail">
        <p class="title">${courses[i].title}</p>
        <span >$</span>
        <p class="price">${courses[i].price}</p>
    </div>
</div>`;
}
//var numberOfChildren = div.getElementsByClassName('exemple').length;

//ul
for (var i = 0; i < 5; i++) {
  li[i].addEventListener("click", (e) => {
    //e.target.innerText
    if (e.target.innerText !== "All") {
      for (var i = 0; i < courses.length; i++) {
        div.children[i].style.display = "block";
      }
      for (var i = 0; i < courses.length; i++) {
        if (
          !div.children[i].children[1].children[0].outerText.includes(
            e.target.innerText
          )
        ) {
          div.children[i].style.display = "none";
        }
      }
    } else {
      for (var i = 0; i < courses.length; i++) {
        div.children[i].style.display = "block";
      }
    }
  });
}
range.addEventListener("change", (e) => {
  for (var i = 0; i < courses.length; i++) {
    div.children[i].style.display = "block";
  }
  for (var i = 0; i < 19; i++) {
    if (+div.children[i].children[1].children[2].outerText > e.target.value) {
      div.children[i].style.display = "none";
    }
  }
  range.nextElementSibling.innerHTML = `valeur : ${e.target.value}$`;
});
searsh.addEventListener("input", (e) => {
  for (var i = 0; i < courses.length; i++) {
    div.children[i].style.display = "block";
  }
  for (var i = 0; i < courses.length; i++) {
    if (
      !div.children[i].children[1].children[0].outerText.includes(
        e.target.value
      )
    ) {
      div.children[i].style.display = "none";
    }
  }
});

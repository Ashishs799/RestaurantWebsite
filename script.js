const breakbtn = document.getElementById("bfbtn");
const lunchbtn = document.getElementById("lbtn");
const dinbtn = document.getElementById("dinbtn");
const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");

breakbtn.addEventListener("click", () => {
  breakfast.style.display = "flex";
  lunch.style.display = "none";
  dinner.style.display = "none";
  breakbtn.style.border = "2px solid #7e642b";
  breakbtn.style.color = "#7e642b";
  lunchbtn.style.border = "2px solid #c5c5c5";
  lunchbtn.style.color = "#c5c5c5";
  dinbtn.style.border = "2px solid #c5c5c5";
  dinbtn.style.color = " #c5c5c5";
});
lunchbtn.addEventListener("click", () => {
  lunch.style.display = "flex";
  lunchbtn.style.border = "2px solid #7e642b";
  lunchbtn.style.color = "#7e642b";
  breakbtn.style.border = "2px solid #c5c5c5";
  breakbtn.style.color = "#c5c5c5";
  dinbtn.style.border = "2px solid #c5c5c5";
  dinbtn.style.color = "#c5c5c5";
  breakfast.style.display = "none";
  dinner.style.display = "none";
});
dinbtn.addEventListener("click", () => {
  dinner.style.display = "flex";
  dinbtn.style.border = "2px solid #7e642b";
  dinbtn.style.color = "#7e642b";
  breakbtn.style.border = "2px solid #c5c5c5";
  breakbtn.style.color = "#c5c5c5";
  lunchbtn.style.border = "2px solid #c5c5c5";
  lunchbtn.style.color = "#c5c5c5";
  breakfast.style.display = "none";
  lunch.style.display = "none";
});

window.addEventListener('scroll', ()=>{
  let firsth2 = document.getElementById("h2-1");
let secondh2 = document.getElementById("h2-2");
let thirdh2 = document.getElementById("h2-3");
let forthh2 = document.getElementById("h2-4");
let initialVal = 0;
let initialVal2 = 0;
let initialVal3 = 0;
let initialVal4 = 0;

let endVal = 12;
let endVal2 = 600;
let endVal3 = 1200;
let endVal4 = 2000;

const counter = () => {
  firsth2.innerHTML = ++initialVal + '+'
  if (initialVal === endVal) {
    clearInterval(timeOut)
  }
}

let timeOut = setInterval(counter, 800)

const counter2 = () => {
  secondh2.innerHTML = ++initialVal2 + '+' 
  if (initialVal2 === endVal2) {
    clearInterval(timeEnd)
  }
}

let timeEnd = setInterval(counter2, 1)

const counter3 = () => {
  thirdh2.innerHTML = ++initialVal3 + '+'
  if (initialVal3 === endVal3) {
    clearInterval(endTime)
  }
}

let endTime = setInterval(counter3, 1)

const counter4 = () => {
  forthh2.innerHTML = ++initialVal4 + '+'
  if (initialVal4 === endVal4) {
    clearInterval(endingTime)
  }
}

let endingTime = setInterval(counter4, 0.1)
})

let book = document.getElementById('book')
let popupbox = document.getElementById('popup')
let okbtn = document.getElementById('okbtn')

book.addEventListener('click', ()=>{
  popupbox.style.visibility = 'visible'
  popupbox.classList.add('popboxslide')
})
okbtn.addEventListener('click', ()=>{
  popupbox.style.visibility = 'hidden'
  popupbox.classList.remove('popboxslide')
})


let header = document.getElementById('header')

window.addEventListener('scroll', ()=>{
  if (scrollY > 0) {
    header.style.background = '#00000091'
  } else {
    header.style.background = 'transparent'
  }
})


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('section ul a');

document.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`section ul a[href="#${id}"]`).classList.add('active');
    }
  });
};


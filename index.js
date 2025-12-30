// To get and display current year in the footer section
const date = new Date().getFullYear();
console.log(date);
document.getElementById('year').innerText = date;

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const vex = document.querySelector("a");

navbarToggle.addEventListener('click',()=>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});
vex.addEventListener('click',()=>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});
// 
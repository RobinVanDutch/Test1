$(document).ready(function(){

    var show = $(".container").hide().fadeIn(1000, code());
    mig();
    function mig(){
        
        $(button).fadeTo(2000, 0.1).fadeTo(2000, 1);
        return mig();

}
    
 
});
function code(){
    //animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const butt = document.querySelector('button');

//move anim Event

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / -20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / -20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

//anime In
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none';
    //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) ";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
  

});
//anime out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//Popback
title.style.transform = "translateZ(0px)";
sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
description.style.transform = "translateZ(0px)";
sizes.style.transform = "translateZ(0px)";
purchase.style.transform = "translateZ(0px)";
butt.style.transform = "translateZ(0px)"

});

butt.addEventListener('mousemove', (e) => {
    butt.style.transform = "translateZ(125px)"



});
};


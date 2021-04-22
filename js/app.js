/*this function take the click event from the header .burguer btn and switch the display value of the .menu (from "none" to "grid")*/
var open = document.getElementById("burguer");
var close = document.getElementById("burguer__close");
var menu = document.getElementById("menu");
open.onclick = function() {
    menu.style.display = "grid";
}
close.onclick = function() {
    menu.style.display = "none";
}
var backToTop = document.getElementById("scroll__top");
/* When the user clicks on the button, scroll to the top of the document */
backToTop.onclick = function() {
    document.body.scrollTop = 0; /* For Safari */
    document.documentElement.scrollTop = 0; /* For Chrome, Firefox, IE and Opera*/
}
window.onscroll = function() { burguerScrollFunction() };
/* When the user scrolls down 70px from the top of the document, show the burguer button */
function burguerScrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        open.style.position = "fixed";
        backToTop.style.display = "block";
        backToTop.style.animation = "slide-in--btn .5s ease";
        open.style.background = "#ffffffcc";

    } else {
        open.style.position = "static";
        open.style.background = "none";
        backToTop.style.animation = "none";
        backToTop.style.display = "none";
    }
}
var play = document.getElementsByClassName("play__btn");
var pause = document.getElementsByClassName("pause__btn");
/* This function takes the click event on the play__btn/pause__btn and switch the li bg-color */
for (var i = 0; i < play.length; i++) {
    play[i].onclick = function() {
        this.parentElement.querySelector(".audio").play();
        this.style.color = "rgb(250,250,250)";
        this.style.background = "rgb(40,40,40)";
        this.parentElement.parentElement.style.background = "rgba(130,130,130, .4)";
        this.parentElement.parentElement.style.borderBottom = "rgb(200,225,0) 2px solid";
        this.parentElement.parentElement.querySelector(".song").style.color = "rgb(200,225,0)";
    }
}
for (var i = 0; i < pause.length; i++) {
    pause[i].onclick = function() {
        this.parentElement.querySelector(".audio").pause();
        this.parentElement.querySelector(".play__btn").style.color = "rgb(0,0,0)";
        this.parentElement.querySelector(".play__btn").style.background = "whitesmoke";
        this.parentElement.parentElement.style.background = "rgba(130,130,130, .0)";
        this.parentElement.parentElement.style.borderBottom = "gray 2px solid";
        this.parentElement.parentElement.querySelector(".song").style.color = "white";
    }
}
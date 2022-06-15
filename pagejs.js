let inputBox = document.getElementsByClassName("inputBox");
let input = document.getElementsByTagName("input");
let mailSvg = document.getElementById("mailSvg");
let lockSvg = document.getElementById("lockSvg");

function focus0() {
    inputBox[0].style.borderColor = "#ffc632";
    mailSvg.src ="images/mail-focus.svg"
}

function focus1() {
    inputBox[1].style.borderColor = "#ffc632";
    lockSvg.src ="images/lock-focus.svg"
}

function focus00() {
    inputBox[0].style.borderColor = "#afb6c2";
    mailSvg.src ="images/mail.svg"
}

function focus11() {
    inputBox[1].style.borderColor = "#afb6c2";
    lockSvg.src ="images/lock.svg"
}

input[0].addEventListener("focus", focus0)

input[1].addEventListener("focus", focus1)

input[0].addEventListener("blur", focus00)

input[1].addEventListener("blur", focus11)

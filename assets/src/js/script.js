window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;
var searchicn = document.getElementById("search-icon")
var search = document.getElementById("search-input");
var background = document.getElementById("search-bg");
var searchicn1 = document.getElementById("search-icon-1")
var search1 = document.getElementById("search-input-1");
var background1 = document.getElementById("search-bg-1");
const icnlist = searchicn.classList;
const list = search.classList;
const bglist = background.classList;
const icnlist1 = searchicn1.classList;
const list1 = search1.classList;
const bglist1 = background1.classList;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky","shadow");
    } else {
        header.classList.remove("sticky","shadow");
    }
    }

function openSearchbar(){
    icnlist.toggle("fa-xmark")
    list.toggle("d-inline-block")
    bglist.toggle("p-4")
    icnlist1.toggle("fa-xmark")
    list1.toggle("d-inline-block")
}

function positionAbs(){
    header.classList.add("position-absolute");
}
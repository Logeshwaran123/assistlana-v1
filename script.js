"use strict";

// DOM Elements
const nav = document.querySelector("nav");
const menuIco = document.querySelector(".menu-ico");
const closeIco = document.querySelector(".close-ico");

// Navigation Toggler
function toggler() {
  nav.classList.toggle("active");
  console.log("Event Triggered");
}

menuIco.addEventListener("click", toggler);
closeIco.addEventListener("click", toggler);

"use strict";

const navber = document.querySelector("#navber");
const navber_height = navber.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
	if (window.scrollY > navber_height / 2) {
		navber.classList.add("navber--dark");
	} else {
		navber.classList.remove("navber--dark");
	}
});

//
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
	const target = event.target;
	const link = target.dataset.link;
	if (link == null) {
		return;
	}
	navbarMenu.classList.remove("open");
	scrollIntoView(link);
});

const navberToggleBtn = document.querySelector(".navber_toggle-btn");
navberToggleBtn.addEventListener("click", () => {
	console.log("ddd");
	navbarMenu.classList.toggle("open");
});

const homecontect = document.querySelector(".home_contact");
homecontect.addEventListener("click", () => {
	scrollIntoView("#contact");
});

//
const home = document.querySelector(".home_container");
const home_height = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
	home.style.opacity = 1 - window.scrollY / home_height;
});

const arrow_up = document.querySelector(".arrow_up");
document.addEventListener("scroll", () => {
	if (window.scrollY > home_height / 2) {
		arrow_up.classList.add("visible");
	} else {
		arrow_up.classList.remove("visible");
	}
});

arrow_up.addEventListener("click", () => {
	scrollIntoView("#home");
});

const work__projects = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

work_btn.addEventListener("click", (e) => {
	const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if (filter == null) {
		return;
	}
	const active = document.querySelector(".category__btn.selected");
	active.classList.remove("selected");
	const target =
		e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
	target.classList.add("selected");

	work__projects.classList.add("anim-out");
	setTimeout(() => {
		projects.forEach((project) => {
			if (filter === "*" || filter === project.dataset.type) {
				project.classList.remove("invisible");
			} else {
				project.classList.add("invisible");
			}
		});
		work__projects.classList.remove("anim-out");
	}, 300);
});

function scrollIntoView(selector) {
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({ behavior: "smooth" });
}

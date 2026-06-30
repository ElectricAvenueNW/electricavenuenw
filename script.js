/*==================================================
ELECTRIC AVENUE NORTH WEST
VERSION 4
==================================================*/

/* ==========================================
Mobile Navigation
========================================== */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

/* Toggle menu */

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function (e) {

        e.stopPropagation();

        nav.classList.toggle("active");

        menuToggle.classList.toggle("active");

        menuToggle.innerHTML =
            nav.classList.contains("active") ? "✕" : "☰";

    });

}

/* Close menu when clicking a navigation link */

document.querySelectorAll("#main-nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});

/* Close menu when clicking outside */

document.addEventListener("click", function (e) {

    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {

        nav.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.innerHTML = "☰";

    }

});

/* ==========================================
Smooth Scrolling
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================================
Close Lightbox with ESC
========================================== */

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        const lightbox = document.getElementById("lightbox");

        if (lightbox) {

            lightbox.style.display = "none";

        }

    }

});

/* ==========================================
Header Shadow on Scroll
========================================== */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";

    }

});

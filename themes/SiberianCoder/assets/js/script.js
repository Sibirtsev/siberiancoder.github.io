document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
    const html = document.documentElement; // Меняем класс на <html>, а не <body>
    const chromaStyle = document.getElementById("chroma-style");

    if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
        chromaStyle.href = "/css/chroma-dark.css";
    } else {
        html.classList.remove("dark");
        chromaStyle.href = "/css/chroma-light.css";
    }

    toggle.addEventListener("click", function () {
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            chromaStyle.href = "/css/chroma-light.css";
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            chromaStyle.href = "/css/chroma-dark.css";
        }
    });
});

var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight',
    progress = document.querySelector('#progress'),
    scroll;
var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");

document.addEventListener('scroll', function() {

    /*Refresh scroll % width*/
    scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    progress.style.setProperty('--scroll', scroll + '%');

    /*Apply classes for slide in bar*/
    
    scrollpos = window.scrollY;

    var isDark = localStorage.getItem("theme") === "dark";

    if (scrollpos > 10) {
        header.classList.add("bg-white");
        header.classList.add("dark:bg-gray-800");
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.remove("dark:bg-gray-900");
        navcontent.classList.add("bg-white");
        navcontent.classList.add("dark:bg-gray-800");
    } else {
        header.classList.remove("bg-white");
        header.classList.remove("dark:bg-gray-800");
        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.remove("dark:bg-gray-800");
        navcontent.classList.add("bg-gray-100");
        navcontent.classList.add("dark:bg-gray-900");
    }
    
});


//Javascript to toggle the menu
document.getElementById("nav-toggle").onclick = function() {
    document.getElementById("nav-content").classList.toggle("hidden");
    document.getElementsByTagName("main")[0].classList.toggle("mt-20");
}
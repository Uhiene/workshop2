document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector(".site-header")

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled")
        } else {
            navbar.classList.remove("scrolled")
        }
    })
})

document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-list").classList.toggle("menu-open")
})
let mouseCursor = document.querySelector(".cursor")
let navLinks = document.querySelectorAll(".nav-links li a")
let introRoman = document.querySelectorAll(".intro-desc-roman")
let logoHover = document.querySelectorAll(".logo")

window.addEventListener("mousemove", cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
}

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow")
    })
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow")
    })
})

introRoman.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow")
    })
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow")
    })
})

logoHover.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow")
    })
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow")
    })
})
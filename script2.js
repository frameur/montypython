//mouve circle cursor
let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

//cursor growing
let navLinks = document.querySelectorAll(".nav-item li, h1, .lead");

navLinks.forEach(link => {

    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
//remove effect     
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
});
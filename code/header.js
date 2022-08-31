const header_nav = document.querySelector ("header nav")
const header_btn = document.querySelector ("header .btn")
const header = document.querySelector('header')

header_btn.addEventListener ("click", function (e) {
    header_nav.classList.toggle ("open")
})

// Update header when scroll
window.addEventListener ("scroll", function (e) {
    if (window.scrollY == 0) {
        header.classList.remove ("scroll")
    } else {
        header.classList.add ("scroll")
    }
})
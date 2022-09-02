
const header_btn = document.querySelector ("#header .btn.display")
const header = document.querySelector('#header')

header_btn.addEventListener ("click", function (e) {
    header.classList.toggle ("clossed")
    console.log ("click")
})

// Update header when scroll
window.addEventListener ("scroll", function (e) {
    if (window.scrollY == 0) {
        header.classList.remove ("scroll")
    } else {
        header.classList.add ("scroll")
    }
})


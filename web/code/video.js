export const wrapper_video = document.querySelector (".wrapper-video")
const logo_video = document.querySelector ("#logo-video")
const active_sound = document.querySelector ("#active-sound")

// Detect screen orientation
if (window.screen.height > window.screen.width) {
    logo_video.classList.add ("vertical")
}

active_sound.addEventListener("click", function (e) {

    // Activate sound in video
    logo_video.muted = !logo_video.muted

    // Update sound button image
    let img_tag = this.querySelector ("img")
    let img_url
    if (logo_video.muted) {
        img_url = "./imgs/sound-on.svg"
    } else {
        img_url = "./imgs/sound-off.svg"
    }
    img_tag.setAttribute("src", img_url)
})
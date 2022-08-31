import {wrapper_video} from './video.js'
import {set_gallery_height} from './gallery.js'

function sleep(s) {
    // Wait specific seconds
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

window.onload = async function () {
    // Update gallery height items
    set_gallery_height()
    
    // Hide video wrapper when animation is complete
    await sleep (8)
    wrapper_video.classList.add ("hide")

}

window.onresize = function() {
    // Update gallery height items
    set_gallery_height()
}
import {wrapper_video} from './video.js'
import {set_gallery_height} from './gallery.js'
import {show_alert} from './alerts.js'

function sleep(s) {
    // Wait specific seconds
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

window.onload = async function () {

    // Show alerts
    const thanks_altert = show_alert()

    // Update gallery height items
    set_gallery_height()
    
    // Hide video wrapper when animation is complete
    if (! thanks_altert) {
        await sleep (8)
    }
    wrapper_video.classList.add ("hide")

}

window.onresize = function() {
    // Update gallery height items
    set_gallery_height()
}
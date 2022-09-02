import {wrapper_video} from './video.js'
import {update_gallery} from './gallery.js'
import {show_alert} from './alerts.js'
import {update_testimonials} from './testimonials.js'

function sleep(s) {
    // Wait specific seconds
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

window.onload = async function () {

    // Show alerts
    const thanks_altert = show_alert()

    // Update sliders
    update_gallery()
    update_testimonials ()
    
    // Hide video wrapper when animation is complete
    if (! thanks_altert) {
        await sleep (8)
    }
    wrapper_video.classList.add ("hide")

}

window.onresize = function() {
    // Update sliders
    update_gallery()
    update_testimonials ()
}
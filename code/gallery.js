const gallery_items_selector = "section.gallery .splide__slide"
const sheet = window.document.styleSheets[0];
var is_mobile = false
var height

// Crate gallery sliders
var splide_gallery = new Splide( '#gallery' )
splide_gallery.mount ()

export function set_gallery_height () {

    let last_mobile_state = is_mobile

    // Detect mopbile version of gallery
    if (window.matchMedia("(max-width: 800px)").matches) {
        is_mobile = true
    } else {
        is_mobile = false
    }

    // Mount gallery
    console.log (is_mobile)
    if (is_mobile) {
        splide_gallery.options = {
            type   : 'loop',
            padding: '5rem',
            perPage: 1,
            perMove: 1, 
        }
    } else {
        splide_gallery.options = {
            type   : 'loop',
            padding: '0',
            perPage: 3,
            perMove: 1,            
        }
    }

    // Calculate height
    const width = window.innerWidth
    if (is_mobile) {
        height = `calc(${width}px - 10rem)`
    } else {
        height = `calc(${width}px / 3)`
    }
    
    // Update css
    const css_rule = `${gallery_items_selector} { height: ${height} }`
    sheet.insertRule(css_rule, sheet.cssRules.length)
}


const gallery_items_selector = "section.gallery .splide__slide"
const sheet = window.document.styleSheets[0];

window.onload = function() {set_gallery_height()}
window.onresize = function() {set_gallery_height()}

function set_gallery_height () {

    // Calculate height
    const width = window.innerWidth
    const height = width / 3
    
    // Update css
    css_rule = `${gallery_items_selector} { height: ${height}px }`
    console.log (css_rule)
    sheet.insertRule(css_rule, sheet.cssRules.length);
}
const gallery_items_selector = "section.gallery .splide__slide"
const sheet = window.document.styleSheets[0];

export function set_gallery_height () {

    // Calculate height
    const width = window.innerWidth
    const height = width / 3
    
    // Update css
    const css_rule = `${gallery_items_selector} { height: ${height}px }`
    sheet.insertRule(css_rule, sheet.cssRules.length)
}
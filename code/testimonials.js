
// Crate gallery sliders
var splide_testimonials = new Splide( '#testimonials' )
splide_testimonials.mount ()

export function update_testimonials () {

    // Detect mopbile version of gallery
    if (window.matchMedia("(max-width: 500px)").matches) {
        splide_testimonials.options = {
            type   : 'loop',
            perPage: 1,
            perMove: 1,            
        }
    } else if (window.matchMedia("(max-width: 870px)").matches) {
        splide_testimonials.options = {
            type   : 'loop',
            perPage: 2,
            perMove: 1, 
        }
    } else {
        splide_testimonials.options = {
            type   : 'loop',
            perPage: 3,
            perMove: 1, 
        }
    }

}


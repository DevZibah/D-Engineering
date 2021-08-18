// ==================================================
$(function () {
  var carouselContainer = $('.carousel')
  var slideInterval = 5000

  /*<!--  function toggleCaption() {
        $('.carousel-caption').hide();
        var caption = carouselContainer.find('.active').find('.carousel-caption');
        caption.delay(500).toggle("slide", {
            direction: 'right'
        });
    }

    carouselContainer.carousel({
        interval: slideInterval,
        cycle: true,
        pause: "hover"
    }).on('slid.bs.carousel', function () {
        toggleCaption();
    }); -->*/
})

/*==================== SCROLL REVEAL ANIMATION ====================*/

// we implement the plugin for the scroll on reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true,
})

// each html that has the class atribute of cc-scroll will therefore implement the scroll reveal method...
sr.reveal(`.cc-scroll`, {
  interval: 100,
})

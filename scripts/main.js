document.addEventListener('DOMContentLoaded', function(e) {
    var carousel = new ch.Carousel(ch('.demo-carousel')[0], {
        pagination: true,
        limitPerPage: 3,
        autoHeight: false
    });
});
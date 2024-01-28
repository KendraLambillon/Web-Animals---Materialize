//Navbar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'left'
    });
});

//Carousel
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true,
        fullWidth: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = docuemnt.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
})

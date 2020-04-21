/* ANIMATIONS ON SCROLL */
$('.js-wp-header').waypoint(function(direction) {
    $('.js-wp-header').addClass('animated fadeInDown');
}, {
    offset: '50%'
    
});

$('.js-wp-proj1').waypoint(function(direction) {
    $('.js-wp-proj1').addClass('animated fadeInRight');
}, {
    offset: '40%'
    
});

$('.js-wp-proj2').waypoint(function(direction) {
    $('.js-wp-proj2').addClass('animated fadeInLeft');
}, {
    offset: '40%'
    
});

$('.js-wp-proj3').waypoint(function(direction) {
    $('.js-wp-proj3').addClass('animated fadeInUp');
}, {
    offset: '70%'
    
});

$('.js-wp-about').waypoint(function(direction) {
    $('.js-wp-about').addClass('animated fadeIn');
    
}, {
    offset: '70%'
});

$('.js-wp-contact').waypoint(function(direction) {
    $('.js-wp-contact').addClass('animated fadeInLeft');
    
}, {
    offset: '70%'
});

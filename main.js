$(document).ready(function(){

$nav = $('nav');
$tgc = $('.tgc');

$tgc.click(function(){
    $nav.toggleClass('clpse');
})

AOS.init();

});
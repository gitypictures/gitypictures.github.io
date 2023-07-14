$(document).ready(function() {
    var divId;
    $('a#toc').click(function(){    
    divId = $(this).attr('href');
    // console.log('yes');
    $('html, body').animate({
        scrollTop: $(divId).offset().top - 60}, 100);
    });
})
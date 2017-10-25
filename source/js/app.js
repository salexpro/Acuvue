/* 
@codekit-prepend '../../bower_components/jquery/dist/jquery.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.core.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.box.min.js';
*/

// $(document).foundation();

var current = 1;

$('.switcher_button--prev').click(function(){
    if(current > 1){
        $('.slides').removeClass('slides--' + current);
        current--
    }
});

$('.switcher_button--next').click(function(){
    if(current >= 1){
        current++
        $('.slides').addClass('slides--' + current);
    }
});
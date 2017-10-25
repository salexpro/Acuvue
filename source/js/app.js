/* 
@codekit-prepend '../../bower_components/jquery/dist/jquery.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.core.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.box.min.js';
*/

// $(document).foundation();

var current = 1;

$('.switcher_button').click(function(){
    if($(this).data('action')=='prev'){
        $('.slides').removeClass('slides--' + current);
        current--;
    } else {
        current++;
        $('.slides').addClass('slides--' + current);
    };
    if(current > 1){
        $('.switcher_button--prev').prop('disabled', false);
    } else {
        $('.switcher_button--prev').prop('disabled', true);
    }
})
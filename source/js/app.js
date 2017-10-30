/* 
@codekit-prepend '../../bower_components/jquery/dist/jquery.min.js';
*/

// $(document).foundation();


var $el = $(".slides");
var elWidth = $el.outerWidth();
var elHeight = $el.outerHeight();

var $wrapper = $('.presentation');

$(window).resize(function(){
    var sizes = { 
      size: {
        width: $wrapper.width(),
        height: $wrapper.height()
      }
    }
    doResize(null, sizes)
})

function doResize(event, ui) {
  
  var scale, origin;
    
  scale = Math.min(
    ui.size.width / elWidth,
    ui.size.height / elHeight
  );
  
  $el.css({
        transform: "translate3d(-50%, -50%, 0) scale(" + scale + ")"
  });
  
}

var starterData = { 
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
doResize(null, starterData);

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
    } else{
        $('.switcher_button--prev').prop('disabled', true);
    }
    if(current < 46){
        $('.switcher_button--next').prop('disabled', false);
    } else {
        $('.switcher_button--next').prop('disabled', true);
    }
})

// Modal
$('[data-open="modal"]').click(function(){
    $('.group--1_modal').addClass('opened');
});
$('.group--1_modal_close').click(function(){
    $('.group--1_modal').removeClass('opened');
    $('.slides').removeClass('slides--40--1 slides--40--2');
})
$('[data-slide]').click(function(){
    $('.slides').addClass('slides--40--' + $(this).data('slide'));
    $('.group--1_modal').removeClass('opened');
});
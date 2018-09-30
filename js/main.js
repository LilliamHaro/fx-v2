$(function () {

  setTimeout(function () {
    $('.shade-loader .line div').addClass('width-100')
  }, 500)

  setTimeout(function () {
    $('.cube-left').removeClass('to-top')
    $('.cube-right').removeClass('to-bottom')
  }, 2800)

  setTimeout(function () {
    $('.rgba-loader').addClass('width-0');
  }, 3400)

  setTimeout(function () {
    $('.cube-left').addClass('to-bottom')
    $('.cube-right').addClass('to-top')
    $('.shade-loader .line').fadeOut();
    $('.shade-loader').fadeOut();
    $('.rgba-loader').fadeOut();
    $('.resume').fadeIn();
  }, 4000)

  // setTimeout(function () {
    $('.intro').addClass('go');
  // }, 3500)

 



})
$(document).ready(function($){

  $('#web-design-progressbar').circleProgress({
    value: .99,
    size: 200,
    fill: 'red',
    thickness: 2,
    emptyFill: '#fff'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(99 * progress) + '<i>%</i>');
  });

  $('#graphic-design-progressbar').circleProgress({
    value: .66,
    size: 200,
    fill: 'green',
    thickness: 2,
    emptyFill: '#fff'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(66 * progress) + '<i>%</i>');
  });

  $('#digital-marketing-progressbar').circleProgress({
    value: .33,
    size: 200,
    fill: 'blue',
    thickness: 2,
    emptyFill: '#fff'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(33 * progress) + '<i>%</i>');
  });


});
$(function(){
  $('.menu__responsive').on('click',  function(){
    $('.menu').toggleClass('active');
  });
  
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
 });
});
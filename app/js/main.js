$(function(){

  window.addEventListener ("scroll", function(){
    var header = this.document.querySelector("nav");
    header.classList.toggle("sticky", this.window.scrollY > 0);
  });

  const menu = document.querySelector('.menu');
  const responsive = document.querySelector('.menu__responsive');
  responsive.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
 });
});
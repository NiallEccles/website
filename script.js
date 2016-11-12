$(document).ready(function(){
   $(function() {
   $( "h1" ).hide().fadeIn();
   $('li').hide().fadeIn();
  });


  $('#icons h2 a i.fa').each(function(i){
  setTimeout(function(){
    $('#icons h2 a i.fa').eq(i).addClass('is-visible');
  }, 200 * i);
});





});

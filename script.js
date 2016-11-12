$(document).ready(function(){
   $(function() {
   $( "h1" ).hide().fadeIn();
   $('li').hide().fadeIn();
  });

  $("h1").hover(function(e)
      {
          var randomClass = getRandomClass();
          $(e.target).attr("class", randomClass);
      });
      function getRandomClass()
      {
          //Store available css classes
          var classes = new Array("pink", "blue", "yellow", "lime", "orange", "lilac", "pale_yellow");

          //Get a random number from 0 to 4
          var randomNumber = Math.floor(Math.random()*7);

          return classes[randomNumber];
      }





  $('#icons h2 a i.fa').each(function(i){
  setTimeout(function(){
    $('#icons h2 a i.fa').eq(i).addClass('is-visible');
  }, 200 * i);
});





});

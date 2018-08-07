$('#right-button').click(function() {
    event.preventDefault();
    $('#contentId').animate({
      scrollLeft: "+=749%"
    }, "slow");
 });
 
   $('#left-button').click(function() {
    event.preventDefault();
    $('#contentId').animate({
      scrollLeft: "-=749%"
    }, "slow");
 });
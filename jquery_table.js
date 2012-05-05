(function ($) {
  $(document).ready(function() {

   $('td.expand').click(function () { 
      //$('tr.child', $(this).parent()).slideToggle("fast");
      $(this).parents('tr.parent').nextUntil('tr.parent').slideToggle("fast");
   });
   
   $('td .expand').click(function () {
      $(this).parents('tr.parent').nextUntil('tr.parent').slideToggle("fast");
   });


})

})(jQuery);
(function ($) {
  $(document).ready(function() {

   $('td.expand').click(function () { 
      //$('tr.child', $(this).parent()).slideToggle("fast");
      $(this).parents('tr.parent').nextUntil('tr.parent').slideToggle("fast");
   });
   
   $('td .expand').click(function () {
      $(this).parents('tr.parent').nextUntil('tr.parent').slideToggle("fast");
   });

   $('tr').hover(function () {
      $(this).css('cursor', 'default');
    } ,function() {
      $(this).css('cursor', 'auto');
   });
  
   $('td.expand').hover(function () {
      $(this).css('cursor', 'pointer');
    } ,function() {
      $(this).css('cursor', 'auto');  
   });
   
   $('td .expand').hover(function () {
      $(this).css('cursor', 'pointer');
   } ,function() {
      $(this).css('cursor', 'auto');
   });
   
   

})

})(jQuery);
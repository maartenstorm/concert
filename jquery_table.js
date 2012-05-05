(function ($) {
  $(document).ready(function() {

   $('td .item-list').click(function () { 
      //$('tr.child', $(this).parent()).slideToggle("fast");
      $(this).parents('tr.parent').nextUntil('tr.parent').slideToggle("fast");
   });


})

})(jQuery);
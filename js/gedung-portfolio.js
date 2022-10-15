(function($) {
    'use strict';
   	$(document).ready(function() {
  		var $container = $('.portfolio-block-grid');
         // Infinite Scroll
         $container.infinitescroll({
                 loading: {
                     finishedMsg: 'Il n y a plus',
                     img: "img/loader.gif",
                     msgText: 'Chargement',
                     speed: 'normal'
                 },

                 state: {
                     isDone: false
                 },
                 navSelector: '#load-more-causes',
                 nextSelector: '#load-more-causes a',
                 itemSelector: '.element-item',

             },
             function(newElements) {
                 var $newElems = $(newElements).css({
                     opacity: 0
                 });
                 $newElems.imagesLoaded(function() {
                     $newElems.animate({
                         opacity: 1
                     });
                     $container.isotope('appended', $newElems, true);
                 });
                 $('.portfolio-block-grid').css('margin-bottom', 0);
             });

         $container.infinitescroll('unbind');
         $(".view-more-button").click(function() {
             $container.infinitescroll('retrieve');
             $('.element-item').css('margin-bottom', 120);
             return false;

         });

     });
})(jQuery);

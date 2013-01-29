// Can also be used with $(document).ready()
$('document').ready( function() {
  $('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    useCSS: false,
    start: function() {
      $( "#accordion" ).accordion({ 
          heightStyle: "content",
          active: false,
          collapsible: true
        });  
    }
  })

});

// Just Checking page size at start
$(document).ready(function(){
    // The Higher size for Mobile/Tablet display
    let mobileSize = 1000;

    function burgermenuDisplay() {
      if (window.innerWidth > mobileSize) {
          // Hiding burgermenu and open button
          $("#burgermenu-page").hide();
          $("#burgermenu-openbutton").hide();
          // Showing links list
          $(".header-linkslist").show();
      } else {
          $("#burgermenu-page").hide();
          $(".header-linkslist").hide();
          
          $("#burgermenu-openbutton").show();
      }
    }

    // Checking default page size & resize management
    burgermenuDisplay();

    window.addEventListener('resize', function(event) {
        burgermenuDisplay();
    }, true);

    // Burgermenu buttons interactions
    $("#burgermenu-openbutton").click(function() {
        $("#burgermenu-page").fadeIn({duration: 300});
    })

    $("#burgermenu-closebutton").click(function() {
        $("#burgermenu-page").fadeOut({duration: 300});
    })
});
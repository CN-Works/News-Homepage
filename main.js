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

    // Checking default page size
    burgermenuDisplay();

    window.addEventListener('resize', function(event) {
        burgermenuDisplay();
    }, true);
});
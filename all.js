$(document).ready(function () {
  $(".menu").click(function () {
    $(".close").fadeToggle();
  });
  //拖曳效果
  $(function () {
    function enableDraggable() {
      if (window.innerWidth <= 375) {
        $("#draggable-ul").draggable();
      } else {
        if ($("#draggable-ul").is(".ui-draggable")) {
          $("#draggable-ul").draggable("destroy");
        }
      }
    }
    // Initial check
    enableDraggable();
    // Re-check on window resize
    $(window).resize(function () {
      enableDraggable();
    });
  });
});

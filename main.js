document.addEventListener("DOMContentLoaded", function () {
  var popupOverlay = document.getElementById("popup-overlay");
  var closeBtn = document.getElementById("close-btn");

  // Show popup
  popupOverlay.style.display = "flex";

  // Close popup when close button is clicked
  closeBtn.addEventListener("click", function () {
    popupOverlay.style.display = "none";
  });
});

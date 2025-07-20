//PHOTOS POPUP
function Popup(id) {
  $(".popup-bg").addClass("front"); //Make the bg appear
  $(id).addClass("front"); //Make the inputted review pop up
}

//PHOTOS DISAPPEAR
function Vanish() {
  $(".front").removeClass("front");
}
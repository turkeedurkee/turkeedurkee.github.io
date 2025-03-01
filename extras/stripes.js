// window.transitionToPage = function (href) {
//   document.querySelector("E").style.width = "100%";
//   setTimeout(function () {
//     window.location.href = href;
//   }, 500);
// };

// // THIS IS FOR THE PAGES THAT YOU ARE LOADING TO
// document.addEventListener("DOMContentLoaded", function (event) {
//   document.querySelector("body").style.opacity = 1;
// });

$(document).ready(function () {
  $(".mainpage").addClass("loaded");
});

// E (WEBSURF)
function clickE(href) {
  //Stripe & Text Formatting
  $("#container, #E, #X, #T, #R, #A, #S").removeClass("unlocked"); //Locks stripes until next page loads
  $("#container").removeClass("X-focus T-focus R-focus A-focus S-focus"); //Removes any other page position classes
  $("#container").addClass("E-focus"); //Sets table size to be big enough for full page
  $("h1, h2, .mainpage").addClass("invis"); //Makes text invis mode (only important for the Extras homepage)
  $("#X, #T, #R, #A, #S").removeClass("main"); //Makes other stripes smaller for sides
  $("#X, #T, #R, #A, #S").addClass("side"); //Makes other stripes smaller for sides
  $("#E").removeClass("side"); //Makes this stripe the mainpage
  $("#E").addClass("main"); //Makes this stripe the mainpage

  // Link to Page
  setTimeout(function () {
    window.location.href = href;
  }, 1000);
}

//X (SOAPBOX/BLOG)
function clickX(href) {
  //Stripe & Text Formatting
  // $("#container, #X").removeClass("unlocked"); //For testing
  $("#container, #E, #X, #T, #R, #A, #S").removeClass("unlocked"); //Locks stripes until next page loads
  $("#container").removeClass("E-focus T-focus R-focus A-focus S-focus"); //Removes any other page position classes
  $("#container").addClass("X-focus"); //Sets table size to be big enough for full page
  $("h1, h2, .mainpage").addClass("invis"); //Makes text invis mode (only important for the Extras homepage)
  $("#E, #T, #R, #A, #S").removeClass("main"); //Makes other stripes smaller for sides
  $("#E, #T, #R, #A, #S").addClass("side"); //Makes other stripes smaller for sides
  $("#X").removeClass("side"); //Makes this stripe the mainpage
  $("#X").addClass("main"); //Makes this stripe the mainpage

  // Link to Page
  setTimeout(function () {
    window.location.href = href;
  }, 1000);
}

//T (GUEST BOOK)
function clickT(href) {
  //Stripe & Text Formatting
  // $("#container, #X").removeClass("unlocked"); //For testing
  $("#container, #E, #X, #T, #R, #A, #S").removeClass("unlocked"); //Locks stripes until next page loads
  $("#container").removeClass("E-focus X-focus R-focus A-focus S-focus"); //Removes any other page position classes
  $("#container").addClass("T-focus"); //Sets table size to be big enough for full page
  $("h1, h2, .mainpage").addClass("invis"); //Makes text invis mode (only important for the Extras homepage)
  $("#E, #X, #R, #A, #S").removeClass("main"); //Makes other stripes smaller for sides
  $("#E, #X, #R, #A, #S").addClass("side"); //Makes other stripes smaller for sides
  $("#T").removeClass("side"); //Makes this stripe the mainpage
  $("#T").addClass("main"); //Makes this stripe the mainpage

  // Link to Page
  setTimeout(function () {
    window.location.href = href;
  }, 1000);
}

//R (RECOMMENDATIONS)
function clickR(href) {
  //Stripe & Text Formatting
  // $("#container, #X").removeClass("unlocked"); //For testing
  $("#container, #E, #X, #T, #R, #A, #S").removeClass("unlocked"); //Locks stripes until next page loads
  $("#container").removeClass("E-focus X-focus T-focus A-focus S-focus"); //Removes any other page position classes
  $("#container").addClass("R-focus"); //Sets table size to be big enough for full page
  $("h1, h2, .mainpage").addClass("invis"); //Makes text invis mode (only important for the Extras homepage)
  $("#E, #X, #T, #A, #S").removeClass("main"); //Makes other stripes smaller for sides
  $("#E, #X, #T, #A, #S").addClass("side"); //Makes other stripes smaller for sides
  $("#R").removeClass("side"); //Makes this stripe the mainpage
  $("#R").addClass("main"); //Makes this stripe the mainpage

  // Link to Page
  setTimeout(function () {
    window.location.href = href;
  }, 1000);
}

//A (ARCHIVE)
function clickA(href) {
  //Stripe & Text Formatting
  // $("#container, #X").removeClass("unlocked"); //For testing
  $("#container, #E, #X, #T, #R, #A, #S").removeClass("unlocked"); //Locks stripes until next page loads
  $("#container").removeClass("E-focus X-focus T-focus R-focus S-focus"); //Removes any other page position classes
  $("#container").addClass("A-focus"); //Sets table size to be big enough for full page
  $("h1, h2, .mainpage").addClass("invis"); //Makes text invis mode (only important for the Extras homepage)
  $("#E, #X, #T, #R, #S").removeClass("main"); //Makes other stripes smaller for sides
  $("#E, #X, #T, #R, #S").addClass("side"); //Makes other stripes smaller for sides
  $("#A").removeClass("side"); //Makes this stripe the mainpage
  $("#A").addClass("main"); //Makes this stripe the mainpage

  // Link to Page
  setTimeout(function () {
    window.location.href = href;
  }, 1000);
}

//S (STUFF)
function clickS(href) {
  //Stripe & Text Formatting
  // $("#container, #X").removeClass("unlocked"); //For testing
  $("#container, #E, #X, #T, #R, #A, #S").removeClass("unlocked"); //Locks stripes until next page loads
  $("#container").removeClass("E-focus, X-focus, T-focus, R-focus, A-focus"); //Removes any other page position classes
  $("#container").addClass("S-focus"); //Sets table size to be big enough for full page
  $("h1, h2, .mainpage").addClass("invis"); //Makes text invis mode (only important for the Extras homepage)
  $("#E, #X, #T, #R, #A").removeClass("main"); //Makes other stripes smaller for sides
  $("#E, #X, #T, #R, #A").addClass("side"); //Makes other stripes smaller for sides
  $("#S").removeClass("side"); //Makes this stripe the mainpage
  $("#S").addClass("main"); //Makes this stripe the mainpage

  // Link to Page
  setTimeout(function () {
    window.location.href = href;
  }, 1000);
}

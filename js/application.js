$(document).ready(function() {
  $('td').hover(show, hide);
});

var show = function() {
  $(this.firstElementChild).removeClass("hidden");
  $(this.firstElementChild).addClass("dim-bkgnd");
};

var hide = function() {
  $(this.firstElementChild).addClass("hidden");
  $(this.firstElementChild).removeClass("dim-bkgnd");
};
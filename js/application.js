$(document).ready(function() {
  $('td').hover(show, hide);
  $('#sound-bar img').hover(showPress, hidePress);
});

var show = function() {
  $(this.firstElementChild).removeClass("hidden");
  $(this.firstElementChild).addClass("dim-bkgnd");
};

var hide = function() {
  $(this.firstElementChild).addClass("hidden");
  $(this.firstElementChild).removeClass("dim-bkgnd");
};

var showPress = function() {
  var id = this.dataset.id;
  var project = $('.project-info[data-id='+ id +']');
  $(this).addClass("dim-bkgnd");
  $('.logo').addClass("hidden");
  project.removeClass("hidden");
  // project.addClass("dim-bkgnd");
};

var hidePress = function() {
  var id = this.dataset.id;
  var project = $('.project-info[data-id='+ id +']');
  // project.removeClass("dim-bkgnd");
  project.addClass("hidden");
  $(this).removeClass("dim-bkgnd");
  $('.logo').removeClass("hidden");
};
$(document).ready(function() {
  $('#sound-bar img').hover(showSndPress, hideSndPress);
  $('#web-portfolio .project-info').hover(showWebDesc, hideWebDesc);
});

var showWebDesc = function() {
  $(this.lastElementChild).removeClass("hidden");
};

var hideWebDesc = function() {
  $(this.lastElementChild).addClass("hidden");
};

var showSndPress = function() {
  var id = this.dataset.id;
  var project = $('.project-info[data-id='+ id +']');

  $(this).addClass("dim-bkgnd");
  $('.logo').addClass("hidden");
  project.removeClass("hidden");
  // project.addClass("dim-bkgnd");
};

var hideSndPress = function() {
  var id = this.dataset.id;
  var project = $('.project-info[data-id='+ id +']');
  // project.removeClass("dim-bkgnd");
  project.addClass("hidden");
  $(this).removeClass("dim-bkgnd");
  $('.logo').removeClass("hidden");
};
$(document).ready(function () {

  smoothScroll(1000);
  workBelt();
  workLoad();
  clientBelt();

});
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workBelt() {

  $(".thumb-unit").click(function () {
    $(".work-belt").css("left", "-100%");
    $(".work-container").show();
  });

  $(".work-return").click(function () {
    $(".work-belt").css("left", "0%");
    $(".work-container").hide(350);
  });

}

function workLoad() {

  $.ajaxSetup ({ cache: true });

  $(".thumb-unit").click(function () {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newSite = $this.data("site"),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/assets/html/' + newSite;
    $(".projects").html(spinner).load(newHTML);
    $(".project-title").text(newTitle)
  });

}

function clientBelt() {

  $(".client-logo").click(function () {
    var $this = $(this),
        $siblings = $this.parent().children(),
        $position = $siblings.index($this);
    $(".client-unit").removeClass("active-client").eq($position).addClass("active-client");
    $(".client-logo").removeClass("active-client").eq($position).addClass("active-client");

  });
}

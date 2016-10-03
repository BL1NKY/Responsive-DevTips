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

  $(".client-logo, .clients-mobile span").click(function () {
    var $this = $(this),
        $siblings = $this.parent().children(),
        $position = $siblings.index($this);
    $(".client-unit").removeClass("active-client").eq($position).addClass("active-client");
    $(".client-logo").removeClass("active-client").eq($position).addClass("active-client");
    $(".clients-mobile span").removeClass("active-client").eq($position).addClass("active-client");
  });

  $(".client-controls-next, .client-controls-prev").click(function () {

    var $this = $(this),
        $curActive = $(".clients-belt").find(".active-client"),
        $position = $(".clients-belt").children().index($curActive),
        $clientLength = $(".client-unit").length;

        if($this.hasClass("client-controls-next")){
          if($position < $clientLength - 1){
            $(".active-client").removeClass("active-client").next().addClass("active-client");
          } else {
            $(".client-unit").removeClass("active-client").first().addClass("active-client");
            $(".client-logo").removeClass("active-client").first().addClass("active-client");
        }
      } else {

        if($position === 0){
          $(".client-unit").removeClass("active-client").last().addClass("active-client");
          $(".client-logo").removeClass("active-client").last().addClass("active-client");
        }else {
          $(".active-client").removeClass("active-client").prev().addClass("active-client");
        }
      }
  });
}

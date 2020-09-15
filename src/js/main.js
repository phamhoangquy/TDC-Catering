$(document).ready(function () {

	$('.menu-mobile-toggle').click(function(){
		$('.offcanvas-wrap').fadeIn().addClass('offcanvas-open')
	})

	$('.offcanvas-wrap').click(function(e){
		if(e.target !== e.currentTarget) return
		$('.offcanvas-wrap').fadeOut().removeClass('offcanvas-open')
	})

});

const mainMenuMobileMapping = new MappingListener({
  selector: ".menu-wrapper",
  mobileWrapper: ".mobile-menu",
  mobileMethod: "appendTo",
  desktopWrapper: ".right-header",
  desktopMethod: "appendTo",
  breakpoint: 1024.98,
}).watch();

const webNavMobileMapping = new MappingListener({
  selector: ".website-nav-wrap",
  mobileWrapper: ".mobile-menu",
  mobileMethod: "appendTo",
  desktopWrapper: ".right-top-header",
  desktopMethod: "prependTo",
  breakpoint: 1024.98,
}).watch();

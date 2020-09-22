$(document).ready(function() {

    $('.menu-mobile-toggle').click(function() {
        $('.offcanvas-wrap').fadeIn().addClass('offcanvas-open')
    })

    $('.offcanvas-wrap').click(function(e) {
        if (e.target !== e.currentTarget) return
        $('.offcanvas-wrap').fadeOut().removeClass('offcanvas-open')
    })
    swiperInit();
    showBackToTop();
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

function swiperInit() {
    var brandSwiper = new Swiper(".home_s-4 .home-slide-client", {
        // Optional parameters
        speed: 1000,

        autoplay: {
            delay: 2000
        },
        navigation: {
            nextEl: '.home_s-4 .nav-arrow-next',
            prevEl: '.home_s-4 .nav-arrow-prev',
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            400: {
                slidesPerView: 1,

            },
            480: {
                slidesPerView: 1,

            },
            768: {
                slidesPerView: 3,

            },
            1025: {
                slidesPerView: 4,

            },
            1440: {
                slidesPerView: 4,

            },
        },

    });
    var brandSwiper = new Swiper(".home_promotion_slide .slide-promotion", {
        // Optional parameters
        speed: 1000,

        autoplay: {
            delay: 2000
        },
        // navigation: {
        //     nextEl: '.home_s-4 .nav-arrow-next',
        //     prevEl: '.home_s-4 .nav-arrow-prev',
        // },
        pagination: {
            el: ".home_s-4-pagination",
            type: "bullets",
            clickable: "true",
        },
        breakpointsInverse: true,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            400: {
                slidesPerView: 1,

            },
            480: {
                slidesPerView: 1,

            },
            768: {
                slidesPerView: 3,

            },
            1025: {
                slidesPerView: 3,

            },
            1440: {
                slidesPerView: 3,

            },
        },

    });
    var brandSwiper = new Swiper(".block_service-detail-3 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_service-detail-3 .nav-arrow-next",
            prevEl: ".block_service-detail-3 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        },
    });
    var brandSwiper = new Swiper(".block_service-detail-4 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_service-detail-4 .nav-arrow-next",
            prevEl: ".block_service-detail-4 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        },
    });
    var brandSwiper = new Swiper(".block_service-detail-5 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_service-detail-5 .nav-arrow-next",
            prevEl: ".block_service-detail-5 .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        },
    });
    var brandSwiper = new Swiper(".block_history .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".block_history .nav-arrow-next",
            prevEl: ".block_history .nav-arrow-prev",
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        },
    });
    var suggestionsSwiper = new Swiper(".block_service-suggestions .slide-food-service-suggestions", {
        // Optional parameters
        speed: 1205,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".block_service-suggestions-pagination",
            type: "bullets",
            clickable: "true"
        }
    });
}

function showBackToTop() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#back-to-top').addClass('active');
        } else {
            $('#back-to-top').removeClass('active');
        }
    });

    $("#back-to-top").on("click", function(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        })
    })
}
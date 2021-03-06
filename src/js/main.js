$(document).ready(function() {

    $('.menu-mobile-toggle').click(function() {
        $('.offcanvas-wrap').fadeIn().addClass('offcanvas-open')
    })

    $('.offcanvas-wrap').click(function(e) {
        if (e.target !== e.currentTarget) return
        $('.offcanvas-wrap').fadeOut().removeClass('offcanvas-open')
    })
    swiperInit();
    wowBookInit();
    searchToggle();
    tabActive();
    tabActiveSmall();
    selectOption();
    showBackToTop();
    setTimeout(() => {
        $(".service-company-2 .head-menu-tab.active .menu-food-top li.active a").trigger("click");
    }, 300);
});

function searchToggle() {
    $('.search-icon').click(function() {
        $(this).toggleClass("click");
        $('.block_search').toggleClass("show");
    });
}

const selectOption = () => {
    let elements = $(".service-company-2").find("select");
    let getValue = $(".service-company-2 select option:selected").val();
    $(".service-company-2 select").val("tab-1").trigger("change");
    $("[data-type=tab-1]").addClass("active");
    var checkValue = function() {
        let getValue = $(".service-company-2 select option:selected").val();
        let getAttr = $(".head-menu-tab").attr("data-type");
        console.log(getValue);
        console.log(getAttr);
        $("[data-type=" + getValue + "]")
            .addClass("active")
            .siblings()
            .removeClass("active");
        if (getValue == "tab-1") {
            $("[data-type=pro-tab-463]").trigger("click");
        } else {
            $("[data-type=pro-tab-406]").trigger("click");
        }
    };
    elements.on("change keyup", checkValue);
};
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

function tabActive() {
    $(".tab-navigation li a").on("click", function() {
        $(this)
            .parents(".tab-navigation")
            .find("li")
            .removeClass("active");
        $(this)
            .parents("li")
            .addClass("active");

        var display = $(this).attr("data-type");
        $(".tab-item").removeClass("active");
        $("#" + display).addClass("active");

        let maxHeight = 400;
        let contentTab = $(".tab-wrapper .tab-item.active");
        // console.log(contentTab.height())
        if (contentTab.height() < maxHeight) {
            $(contentTab).find('.btn-view-more').hide()
        }
    });
}

function tabActiveSmall() {
    $(".tab-navigation-food li a").on("click", function() {
        $(this)
            .parents(".tab-navigation-food")
            .find("li")
            .removeClass("active");
        $(this)
            .parents("li")
            .addClass("active");

        var display = $(this).attr("data-type");
        $(".tab-item-food").removeClass("active");
        $("#" + display).addClass("active");

        let maxHeight = 400;
        let contentTab = $(".tab-wrapper-food .tab-item-food.active");
        // console.log(contentTab.height())
        if (contentTab.height() < maxHeight) {
            $(contentTab).find('.btn-view-more').hide()
        }
    });
}


function wowBookInit() {
    $("#wowbook").wowBook({
        width: 1240,
        height: 800,
        centeredWhenClosed: true,
        hardcovers: true,
        pageNumbers: false,
        mouseWheel: true,
        controls: {
            zoomIn: "#zoomin",
            zoomOut: "#zoomout",
            next: "#next",
            back: "#back",
            first: "#first",
            last: "#last"
        },
        scaleToFit: ".wowbook-wrapper"
    });
}

function swiperInit() {
    var homerSwiper = new Swiper(".home-banner .swiper-container", {
        // Optional parameters
        speed: 1205,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".home-banner-pagination",
            type: "bullets",
            clickable: "true"
        }
    });

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

    var aboutSwiper = new Swiper(".block_about-3 .slide-about-3", {
        // Optional parameters
        speed: 1205,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: '.block_about-3 .nav-arrow-next',
            prevEl: '.block_about-3 .nav-arrow-prev',
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

    var suggestionsSwiper = new Swiper(".service-company .slide-service-company", {
        // Optional parameters
        speed: 1205,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".service-company-pagination",
            type: "bullets",
            clickable: "true"
        }
    });

    var suggestionsSwiper = new Swiper(".service-events .slide-service-events", {
        // Optional parameters
        speed: 1205,
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".service-events-pagination",
            type: "bullets",
            clickable: "true"
        }
    });

    var brandSwiper = new Swiper(".service-events-2 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".service-events-2 .nav-arrow-next",
            prevEl: ".service-events-2 .nav-arrow-prev",
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

    var brandSwiper = new Swiper(".service-events-3 .swiper-container", {
        // Optional parameters
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".service-events-2 .nav-arrow-next",
            prevEl: ".service-events-3 .nav-arrow-prev",
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

    var MenuSwiper = new Swiper(".other_food .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.nav-arrow-next',
            prevEl: '.nav-arrow-prev',
        },
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
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 3,
            },
        },
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
// Cookie functions
function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';path=/' + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, '-1');
}

// Adjust the content top padding based on the height of the fixed header
function adjustContentTop() {
    if ( jQuery('.site-header').length && jQuery('.site > .container').length ) {
        const headerHeight = jQuery('.site-header').outerHeight();

        jQuery('.site > .container').css('padding-top', headerHeight);
    }
}

// Custom code for the tab pill animation
function resizePill( pillParent ) {
    if ( !pillParent.length ) {
        pillParent = jQuery('.tabs-horizontal .tab-list');
    }

    setTimeout(
        function() {
            const pill = pillParent.find('.pill-bg');
            const pillActive = pillParent.find('.ui-state-active')

            if ( pill.length && pillActive.length ) {
                let pillPosition = pillActive.position();

                pill.css( 'left', pillPosition.left + 'px' );
                pill.css( 'width', pillActive.width() + 'px' );
            }
        }
    , 100);
}

function getOffset() {
	let targetOffset = 0;

	if ( jQuery('.site-header').length ) {
		targetOffset += jQuery('.site-header').outerHeight();
	}

	if ( jQuery('#wpadminbar').length ) {
		targetOffset += 32;
	}

	return targetOffset;
}

function preventAnchorScroll() {
    var scrollToTop = function () {
        jQuery(window).scrollTop(0);
    };
    if (window.location.hash) {
        // handler is executed at most once
        jQuery(window).on('scroll', scrollToTop);
    }

    // make sure to release scroll 1 second after document readiness
    // to avoid negative UX
    jQuery(function () {
        setTimeout(
            function () {
                jQuery(window).off('scroll', scrollToTop);

				if (window.location.hash) {
					// Store hash
					let hash = window.location.hash;
					let hashOffset = getOffset();

					jQuery('html, body').animate({
					  scrollTop: jQuery(hash).offset().top - hashOffset
					}, 800);			
				}
            },
            1000
        );
    });
}

preventAnchorScroll();

var $ = jQuery.noConflict();
jQuery(document).ready( function() {

    // Readjust content top padding
    jQuery(window).on( 'load', adjustContentTop );
    jQuery(window).on( 'resize', adjustContentTop );

    // Identify when page is scrolled
    jQuery(window).on( 'load scroll', function() {
        if ( window.pageYOffset > 50 ) {
            jQuery( '.site-header' ).addClass( 'scrolled-header' );
        } else {
            jQuery( '.site-header' ).removeClass( 'scrolled-header' );
        }
    });



    // Testimonial Slider
    if ( jQuery( '.testimonial-slides' ).length ) {
        jQuery( '.testimonial-slides' ).slick({
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 3500,
            fade: true,
            dots: false,
            arrows: true,
        });
    }

    // Case Study Carousel
    if ( jQuery( '.case-carousel' ).length ) {
        jQuery( '.case-carousel' ).slick({
            adaptiveHeight: false,
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
              ]
        });
    }

    // Awards Carousel
    if ( jQuery( '.awards-carousel' ).length ) {
        jQuery( '.content-awards-carousel .awards-carousel' ).slick({
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 3500,
            dots: false,
            arrows: false,
            infinite: true,
            variableWidth: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
              ]
        });

        jQuery( '.content-awards-carousel-local .awards-carousel' ).slick({
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 3500,
            dots: false,
            arrows: false,
            infinite: true,
            variableWidth: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
              ]
        });
    }

    // Logo Carousels
    if ( jQuery('.carousels .carousel-slides').length ) {
        jQuery('.carousels .carousel-slides').slick({
            arrows: false,
            dots: false,
            infinite: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            speed: 5000,
            // centerMode: true,
            autoplay: true,
            variableWidth: true,
            touchMove: false,
            draggable: false,
            focusOnSelect: false,
            accessibility: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            swipe: false,
        });
    }

    // Integration Slides
    if ( jQuery('.integration-slides').length ) {
        jQuery('.integration-slides').slick({
            arrows: false,
            dots: false,
            infinite: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            speed: 5000,
            // centerMode: true,
            autoplay: true,
            variableWidth: true,
            touchMove: false,
            draggable: false,
            focusOnSelect: false,
            accessibility: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            swipe: false,
        });
    }

    // Tabs
    if ( jQuery('.tabs-horizontal').length ) {
        jQuery('.tabs-horizontal').tabs({
            show: 'fadeIn',
            hide: 'fadeOut',
            activate: resizePill,
            create: resizePill,
        });
    }
    jQuery(window).on( 'resize', resizePill );

    // Mobile Tabs
    if ( jQuery('.mtab-select').length ) {
        jQuery('.mtab-select').on( 'change', function(e) {
            e.preventDefault();

            const curVal = jQuery(this).val();
            const targetElem = jQuery('a[href="' + curVal + '"]');
            
            targetElem.trigger('click');
        });
    }

    // Use Case Tabs
    if ( jQuery('.usecase-tabs').length ) {
        const anchorTarget = jQuery('.content-group .pseudo-main');
        const anchorOffset = jQuery('.site-header').outerHeight();
        
        jQuery('.usecase-tabs').tabs({
            show: 'fadeIn',
            hide: 'fadeOut',
        });

        if ( jQuery('.content-group .toc-sticky a').length ) {
            jQuery('.content-group .toc-sticky a').on( 'click', function(e) {
                e.preventDefault();

                // Clear active class
                jQuery('.active-tab-link').removeClass('active-tab-link');

                // Add active class to current link
                jQuery(this).addClass('active-tab-link');
    
                const curHref = jQuery(this).attr('href');
                const targetTab = jQuery('.content-group .tab-list a[href="' + curHref + '"]');
    
                targetTab.trigger('click');

                jQuery('html,body').animate({
                    scrollTop: anchorTarget.offset().top - anchorOffset
                }, 900);
            });
        }

    }
    if ( jQuery('.sidebar-accordion').length ) {
        jQuery('.sidebar-accordion').accrdion({
            openFirstByDefault: true,
            displayStyle: 'any',
            toggleSpeed: 20,
            scrollToActive: false,
        });
    }

    // Webinar/Guides Mobile Tabs
    if ( jQuery('.sf-mtab-select').length ) {
        jQuery('.sf-mtab-select').on( 'change', function(e) {
            e.preventDefault();

            const selectTarget = jQuery(this).data('target');
            const targetElem = '#' + selectTarget + ' ' + jQuery(this).val() + ' input[type="radio"]';

            jQuery(targetElem).trigger('click');
        });
    }

    if ( jQuery('.close-btn').length  ) {
        jQuery('.close-btn').on('click', function(e){
            if ( jQuery(this).parent().hasClass('content-announcement-bar') ) {
                setCookie('annclosed', '1', 1);
                jQuery(this).parent('.content-section').fadeOut('fast', adjustContentTop);
            }
        });
    }

    // Toggle footer menus
    if ( jQuery('[class*="menu-column"] .footer-column-heading').length ) {
        jQuery(window).on( 'load resize', function(e) {
            jQuery('[class*="menu-column"] nav').each(function() {
                if ( jQuery(window).width() < 768 ) {
                    if ( !jQuery(this).hasClass('close-footer-menu') ) {
                        jQuery(this).addClass('close-footer-menu').stop().slideToggle('medium');
                    }
                } else {
                    if ( jQuery(this).hasClass('close-footer-menu') ) {
                        jQuery(this).removeClass('close-footer-menu').stop().slideDown();
                    }
                }
            });

            jQuery('[class*="menu-column"] .footer-column-heading').each(function() {
                if ( jQuery(window).width() < 768 ) {
                    if ( jQuery(this).hasClass('open-footer-menu') ) {
                        jQuery(this).removeClass('open-footer-menu');
                    }
                } else {
                    if ( !jQuery(this).hasClass('open-footer-menu') ) {
                        jQuery(this).addClass('open-footer-menu');
                    }
                }
            });
        });

        jQuery('[class*="menu-column"] .footer-column-heading').on( 'click', function(e) {
            if ( jQuery(window).width() < 768 ) {
                jQuery(this).toggleClass('open-footer-menu');
                jQuery(this).next('nav').toggleClass('close-footer-menu').stop().slideToggle('medium');
            }
        });
    }

    // Counter animation
    var section = document.querySelector('.content-statistics');
    var hasEntered = false;
    
    ['load', 'scroll'].forEach(function(e) {
        window.addEventListener(e, function() {
            if ( document.body.contains(section) ) {
                var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;
    
                if ( shouldAnimate && !hasEntered) {
                    hasEntered = true;
                
                    jQuery('.counter-whole').each(function () {
                        jQuery(this).prop('Counter',0).animate({
                            Counter: jQuery(this).text()
                        }, {
                            duration: 3000,
                            easing: 'swing',
                            step: function (now) {
                                jQuery(this).text(Math.ceil(now));
                            }
                        });
                    });
                }
            }
        });
    });

    // Back button
    if ( jQuery('.go-back').length ) {
        jQuery('.go-back').on( 'click', function(e) {
            e.preventDefault();

            window.history.back();
        });
    }

    // Popup Youtube videos
    // if ( jQuery('.popup-youtube').length ) {
    //     jQuery('.popup-youtube').magnificPopup({
    //         // disableOn: 700,
    //         type: 'iframe',
    //         mainClass: 'mfp-fade',
    //         removalDelay: 160,
    //         preloader: false,
    //         fixedContentPos: false
    //     });
    // }

    // if ( jQuery('.accordion-wrapper').length ) {
    //     jQuery('.accordion-wrapper').accrdion({
    //         openFirstByDefault: true,   // [true, false]
    //         displayStyle: 'single',     // ['single', 'any']
    //         scrollToActive: false,       // [true, false]
    //     });
    // }

    if ( jQuery('.popup-with-zoom-anim').length ) {
        jQuery('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,
            
            midClick: true,
            removalDelay: 300,
            mainClass: 'tdd-mfp-zoom-in'
        });
    }

    // Popup embed content
    if ( jQuery('.open-popup-link').length ) {
        jQuery('.open-popup-link').magnificPopup({
            type: 'inline',
            alignTop: false,
            showCloseBtn: true,
            closeBtnInside: true,
            midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        });
    }

    // Vertical Tabs
    if ( jQuery('.tabs-vertical').length ) {
        jQuery('.tabs-vertical').tabs().addClass('ui-tabs-vertical ui-helper-clearfix');
        jQuery('.tabs-vertical li.tab-control-key').removeClass('ui-corner-top').addClass('ui-corner-left');
    }

    // Tooltips
    if ( jQuery('.has-tooltip').length ) {
        jQuery('.has-tooltip').tipTop();
    }

    // Sticky Sidebar
    if ( jQuery('.search-filter-sidebar .fixed-wrapper').length ) {
        jQuery('.search-filter-sidebar .fixed-wrapper').hcSticky({
            stickTo: jQuery('.search-filter-sidebar'),
            top: 100,
            bottom: 40,
            responsive: {
                767: {
                    disable: true
                }
            },
        });
    }
    if ( jQuery('.pseudo-sidebar .toc-sticky').length ) {
        jQuery('.pseudo-sidebar .toc-sticky').hcSticky({
            stickTo: jQuery('.pseudo-sidebar'),
            top: 100,
            bottom: 40,
            followScroll: false,
            responsive: {
                767: {
                    disable: true
                }
            },
        });
    }

    // Navigation Tables
    if ( jQuery('.nav-table a').length ) {
        jQuery('.nav-table a').on( 'click', function (e) {
            e.preventDefault();
    
            const targetHref = jQuery(this).attr('href');
            const targetElem = jQuery(targetHref);
            const targetOffset = 150;
    
            jQuery('html,body').animate({
                scrollTop: targetElem.offset().top - targetOffset
            }, 1500);
        });
    }

    // Add smooth scroll with offset to the Easy TOC plugin output
    if ( jQuery('a.ez-toc-link').length ) {
        jQuery('a.ez-toc-link').on( 'click', function (e) {
            e.preventDefault();
    
            const targetHref = jQuery(this).attr('href');
            const targetElem = jQuery(targetHref);
            const targetOffset = 150;
    
            jQuery('html,body').animate({
                scrollTop: targetElem.offset().top - targetOffset
            }, 1000);

        });
    }

    // Identify when page is scrolled
    // jQuery(window).on( 'load', function(e) {
    //     // Trigger click on load
    //     if ( jQuery('.accrdion-entry .accrdion-header').length ) {
    //         e.preventDefault();

    //         var hash = window.location.hash;
    //         if ( hash == '' || hash == '#' || hash == undefined ) {
    //             // return false;
    //         } else {
    //             const targetElem = jQuery('.navi-links li a[href="' + hash + '"]');

    //             if (targetElem.length) {
    //                 targetElem.parent('.accrdion-content').prev('.accrdion-header').trigger('click');
    //                 targetElem.trigger('click');
    //             }
    //         }
    //     }
    // });

    // Trigger click on the first link when clicking on the accordion header
    if ( jQuery('.accrdion-entry .accrdion-header').length ) {
        jQuery('.accrdion-entry .accrdion-header').on( 'click', function (e) {    
            const targetElem = jQuery(this).next('.accrdion-content').find('.navi-links li:first-child a');

            // location.href = targetElem.attr('href');
            targetElem.trigger('click');
        });
    }

    // Back to Top button scripts
    if ( jQuery('a.ez-toc-link').length && jQuery('a.btn-to-top').length ) {
        const btnTop = jQuery('a.btn-to-top');
        // Toggle display of the Back to Top button
        jQuery(window).on( 'load scroll', function() {
            if ( window.pageYOffset > 300 ) {
                btnTop.addClass( 'show-btn' );
            } else {
                btnTop.removeClass( 'show-btn' );
            }
        });

        btnTop.on( 'click', function (e) {
            e.preventDefault();
    
            const targetHref = jQuery(this).attr('href');
            const targetElem = jQuery(targetHref);
    
            jQuery('html,body').animate({
                scrollTop: targetElem.offset().top
            }, 1000);
        });
    }

    //aaccordion
    var acc = document.getElementsByClassName("accrd");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {

            this.classList.toggle("active");

            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }



});
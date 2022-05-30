


$(document).ready(function () {
    $('.search-btn').click(function () {
        $('.floating-search').slideToggle();
    });
})

$(".btn-toggle").click(function () {
    $(".navbar").slideToggle();
});

$(".cross").click(function () {
    $(".navbar").slideToggle();
});

var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});





$(document).ready(function () {
    $('.owl-1').owlCarousel({
        loop: true,

        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2.

            },
            768: {
                items: 3.

            },
            1000: {
                items: 3,

            }
        }
    });

    $('.owl-2').owlCarousel({
        nav: true,
        loop: true,
        dots: false,

        responsive: {
            0: {
                margin: 0,
                items: 1,
            },
            600: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 4,
                nav: true,
            },
        },
    });

    $('.owl-3').owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    });
});


function openNav() {
    document.getElementById("bg-overlay").style.display = "block";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("bg-overlay").style.display = "none";
}



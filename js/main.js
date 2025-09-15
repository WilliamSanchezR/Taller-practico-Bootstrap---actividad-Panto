
    $(document).ready(function(){
    $('.slider-products').slick({
        slidesToShow: 4,   // muestras 4 columnas al mismo tiempo
        slidesToScroll: 1, // avanzas de a 1
        infinite: true,    // loop infinito
        arrows: true,      // flechas
        dots: false,        // bolitas de navegación
        autoplay: true,
        speed: 300,
        responsive: [
        {
            breakpoint: 992, // tablets y pantallas medianas
            settings: {
            slidesToShow: 2
            }
        },
        {
            breakpoint: 576, // móviles
            settings: {
            slidesToShow: 1
            }
        }
        ]
    });
    });


    $(document).ready(function(){
    $('.slider-reviews').slick({
        slidesToShow: 3,   // muestras 4 columnas al mismo tiempo
        slidesToScroll: 1, // avanzas de a 1
        infinite: true,    // loop infinito
        arrows: true,      // flechas
        dots: false,        // bolitas de navegación
        autoplay: true,
        speed: 300,
        responsive: [
        {
            breakpoint: 992, // tablets y pantallas medianas
            settings: {
            slidesToShow: 2
            }
        },
        {
            breakpoint: 576, // móviles
            settings: {
            slidesToShow: 1
            }
        }
        ]
    });
    });

    AOS.init();
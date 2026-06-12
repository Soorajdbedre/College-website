document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 800); // Small delay to let user see it
    }

    // 2. Auto-open Enroll Popup Modal
    // Using Bootstrap 5 Modal API
    const enrollModalEl = document.getElementById('enrollModal');
    if (enrollModalEl) {
        const enrollModal = new bootstrap.Modal(enrollModalEl);
        // Show after 2 seconds
        setTimeout(() => {
            enrollModal.show();
        }, 2000);
    }

    // 3. Sticky Header
    const header = document.querySelector('.header-main');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // 4. ScrollUp Button
    const scrollUpBtn = document.getElementById('scrollUp');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.classList.remove('show');
        }
    });

    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. Swiper Initializations

    // Hero Slider
    new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // Courses Slider
    new Swiper('.courses-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },
        pagination: {
            el: '.courses-pagination',
            clickable: true,
        }
    });

    // Testimonials Slider
    new Swiper('.testimonials-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: '.testimonials-pagination',
            clickable: true,
        }
    });

    // Achievements Slider (9 images)
    new Swiper('.achievements-slider', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.ach-next',
            prevEl: '.ach-prev',
        }
    });

    // Gallery Slider (23 images)
    new Swiper('.gallery-slider', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            }
        }
    });

});

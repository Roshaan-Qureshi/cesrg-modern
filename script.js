/* =========================================================
   CESRG WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.querySelector(".nav-menu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            const icon =
                menuToggle.querySelector("i");


            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });


        /* Close mobile menu after clicking */

        navMenu
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    navMenu.classList.remove("active");

                    const icon =
                        menuToggle.querySelector("i");

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                });

            });

    }



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section, " +
            ".research-card, " +
            ".person-card, " +
            ".publication, " +
            ".event, " +
            ".collaboration-card"
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("active");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("active");

        });

    }



    /* =====================================================
       NAVBAR SHADOW
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    function updateNavbar() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(7,17,31,0.08)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar
    );


    updateNavbar();



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


});

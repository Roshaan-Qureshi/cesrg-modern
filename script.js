/* =========================================================
   CESRG WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.querySelector(".nav-menu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

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


        navMenu.querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navMenu.classList.remove("active");

                    const icon =
                        menuToggle.querySelector("i");

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                });

            });

    }


    /* =====================================================
       NAVBAR SHADOW
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(7,17,31,.08)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });


    /* =====================================================
       EVENT GALLERY
    ===================================================== */

    const galleryModal =
        document.getElementById("galleryModal");

    const galleryGrid =
        document.getElementById("galleryGrid");

    const galleryTitle =
        document.getElementById("galleryTitle");

    const galleryClose =
        document.getElementById("galleryClose");


    const galleryNames = {

        "consensus-control":
            "Consensus Control of Networked Nonlinear Systems",

        "active-cell-balancing":
            "Active Cell Balancing Systems for EVs",

        "ev-range-extension":
            "EV Range Extension using Nonlinear MPC",

        "systems-biology":
            "Systems Biology — Systems Approach to Cancer & Epilepsy"

    };


    document.querySelectorAll(".event-arrow")
        .forEach(button => {

            button.addEventListener("click", () => {

                const gallery =
                    button.dataset.gallery;

                galleryTitle.textContent =
                    galleryNames[gallery] || "Event Photos";

                galleryGrid.innerHTML = "";


                /*
                   Add 10 possible images.

                   Missing images are automatically hidden.
                */

                for (let i = 1; i <= 10; i++) {

                    const image =
                        document.createElement("img");

                    image.src =
                        `assets/events/${gallery}-${i}.jpg`;

                    image.alt =
                        `${galleryNames[gallery]} - Photo ${i}`;


                    image.onerror = () => {

                        image.remove();

                    };


                    image.addEventListener("click", () => {

                        window.open(
                            image.src,
                            "_blank"
                        );

                    });


                    galleryGrid.appendChild(image);

                }


                galleryModal.classList.add("active");

                document.body.style.overflow = "hidden";

            });

        });


    /* =====================================================
       CLOSE GALLERY
    ===================================================== */

    function closeGallery() {

        galleryModal.classList.remove("active");

        document.body.style.overflow = "";

    }


    galleryClose.addEventListener(
        "click",
        closeGallery
    );


    galleryModal.addEventListener(
        "click",
        event => {

            if (event.target === galleryModal) {

                closeGallery();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeGallery();

            }

        }
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section, .research-card, .person-card, .publication, .event, .profile-detail"
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

    });


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .1
            }
        );


    revealElements.forEach(element => {

        observer.observe(element);

    });


});

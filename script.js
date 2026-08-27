/* =========================================================
   CESRG WEBSITE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- MOBILE MENU ---------- */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });


        /* Close menu after clicking a link */

        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* ---------- SCROLL REVEAL ---------- */

    const sections = document.querySelectorAll(
        ".section, .research-card, .person-card, .publication, .event"
    );

    sections.forEach(element => {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    sections.forEach(element => {
        observer.observe(element);
    });


    /* ---------- NAVBAR SHADOW ---------- */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(7, 17, 31, 0.08)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });


    /* ---------- CURRENT YEAR ---------- */

    const yearElement =
        document.querySelector(".footer-bottom span");

    if (yearElement) {

        yearElement.textContent =
            `© ${new Date().getFullYear()} CESRG · COMSATS University Islamabad`;

    }

});

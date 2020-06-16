const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-link-li");

    // Toggle Nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        // Animate Lines
        navLinks.forEach((link, index) => {
        
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation =  `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            // console.log(index/7);
        });

        // Burger Animation
        burger.classList.toggle("toggle");
    });

    
}

navSlide();


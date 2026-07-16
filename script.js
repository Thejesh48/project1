// =============================
// Counter Animation
// =============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 10);

        } else {

            counter.innerText = target.toLocaleString() + "+";

        }

    };

    updateCounter();

});

// =============================
// Sticky Navbar
// =============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("shadow");
        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.backdropFilter = "blur(15px)";

    } else {

        navbar.classList.remove("shadow");
        navbar.style.background = "transparent";

    }

});

// =============================
// Fade In Animation
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".fade-up").forEach((el) => {
    observer.observe(el);
});

// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =============================
// Floating Product Animation
// =============================

const product = document.querySelector(".product-img");

if (product) {

    let direction = 1;

    setInterval(() => {

        product.style.transform =
            `translateY(${direction * 10}px)`;

        direction *= -1;

    }, 1200);

    
}


// Animación al hacer scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(
    ".section, .card, .gallery-item, .arch-box"
);

hiddenElements.forEach((el) => observer.observe(el));


// Efecto de brillo dinámico en tarjetas

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(6,182,212,0.20),
        rgba(255,255,255,0.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,0.05)";

    });

});
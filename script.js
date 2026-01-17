document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const icon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });

    // Typing Effect
    const texts = ["Frontend Developer ", "Full Stack Developer ", "Web Developer "]; 
    let index = 0;
    let char = 0;
    let deleting = false;

    function type() {
        const element = document.querySelector(".typing-text");
        const current = texts[index];

        element.textContent = deleting
            ? current.substring(0, char--)
            : current.substring(0, char++);

        if (!deleting && char === current.length) {
            deleting = true;
            setTimeout(type, 1500);
        } else if (deleting && char === 0) {
            deleting = false;
            index = (index + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, deleting ? 60 : 100);
        }
    }

    type();
});
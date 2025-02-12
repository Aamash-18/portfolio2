function toggleNavbar() {
    const nav = document.querySelector('.navitems');
    nav.classList.toggle('active');
}
const words = ["Web Developer", "Coder", "Programmer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const speed = 150; // Typing speed
        const eraseSpeed = 100; // Erasing speed
        const delay = 1000; // Delay before deleting
        document.addEventListener("DOMContentLoaded", function () {
            const coderElement = document.querySelector(".coder p");
            const words = ["Web Developer", "Coder", "Programmer"];
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const typingSpeed = 150;
            const deletingSpeed = 80;
            const delayBetweenWords = 1000;

            // Set a minimum width to avoid layout shifting
            coderElement.style.display = "inline-block";
            coderElement.style.minWidth = "12ch"; // Adjust this based on the longest word

            function typeEffect() {
                const currentWord = words[wordIndex];
                if (!isDeleting) {
                    coderElement.textContent = currentWord.substring(0, charIndex + 1);
                    charIndex++;
                    if (charIndex === currentWord.length) {
                        isDeleting = true;
                        setTimeout(typeEffect, delayBetweenWords);
                        return;
                    }
                } else {
                    coderElement.textContent = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                    if (charIndex === 0) {
                        isDeleting = false;
                        wordIndex = (wordIndex + 1) % words.length;
                    }
                }
                setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
            }

            typeEffect();
        });
        window.addEventListener("scroll", function () {
            var navbar = document.getElementById("navbar");
            if (window.scrollY > 50) {  // If scrolled 50px down
                navbar.classList.add("shrink");
            } else {
                navbar.classList.remove("shrink");
            }
        });
        
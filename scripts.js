document.addEventListener("DOMContentLoaded", () => {
    // Read More/Less Functionality
    const readMoreLinks = document.querySelectorAll(".read-more");
    readMoreLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const moreText = link.previousElementSibling;
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "block";
                link.textContent = "Read less";
            } else {
                moreText.style.display = "none";
                link.textContent = "Read more";
            }
        });
    });

    // Carousel Functionality
    let currentSlide = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    function showSlide(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            if (i === index) {
                testimonial.classList.add("active");
            }
        });
    }

    prev.addEventListener("click", () => {
        currentSlide = (currentSlide === 0) ? testimonials.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    next.addEventListener("click", () => {
        currentSlide = (currentSlide === testimonials.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    // Back to Top Functionality
    document.querySelector(".back-to-top").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Function to load navigation and footer
document.addEventListener("DOMContentLoaded", function() {
    // Function to load the HTML content
    function loadHTML(url, id) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return; // or whatever error handling you want
            document.getElementById(id).innerHTML = this.responseText;
        };
        xhr.send();
    }

    loadHTML('/navigation.html', 'navigation-placeholder');
    loadHTML('/footer.html', 'footer-placeholder');
});
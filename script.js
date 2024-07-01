const initSlider = () => {
    const list = document.querySelector(".carousel .carousel-list");
    let currentIndex = 0;

    console.log(list); // Verify this is not null
    const slideButtons = document.querySelectorAll(".carousel .slide-button");
    console.log(slideButtons); // Verify this is a NodeList with length 2

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
};

window.addEventListener("load", initSlider);
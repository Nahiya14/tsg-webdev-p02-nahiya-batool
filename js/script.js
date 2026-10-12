const swapButton = document.querySelector(".sb-swap-btn");
const fromInput = document.querySelector("#from");
const toInput = document.querySelector("#to");

swapButton.addEventListener("click", function () {
    const fromValue = fromInput.value || fromInput.placeholder;
    const toValue = toInput.value || toInput.placeholder;

    fromInput.value = toValue;
    toInput.value = fromValue;
});
const tripTypeButtons = document.querySelectorAll(".sb-trip-type");
const returnInput = document.querySelector("#return");

tripTypeButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        tripTypeButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const tripType = button.dataset.trip;

        if (tripType === "oneway") {
            returnInput.value = "";
            returnInput.disabled = true;
        } else {
            returnInput.disabled = false;
        }
    });
});

const storySlides = document.querySelectorAll(".story-slide");
const storyDots = document.querySelectorAll(".story-dot");
const previousStoryButton = document.querySelector(".story-prev");
const nextStoryButton = document.querySelector(".story-next");

let currentStory = 0;

function showStory(index) {
    storySlides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    storyDots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    storySlides[index].classList.add("active");
    storyDots[index].classList.add("active");
}

nextStoryButton.addEventListener("click", function () {
    currentStory++;

    if (currentStory >= storySlides.length) {
        currentStory = 0;
    }

    showStory(currentStory);
});

previousStoryButton.addEventListener("click", function () {
    currentStory--;

    if (currentStory < 0) {
        currentStory = storySlides.length - 1;
    }

    showStory(currentStory);
});

storyDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        currentStory = index;
        showStory(currentStory);
    });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", function () {
        const isOpen = item.classList.contains("active");

        faqItems.forEach(function (faqItem) {
            faqItem.classList.remove("active");

            const faqQuestion = faqItem.querySelector(".faq-question");
            const faqIcon = faqItem.querySelector(".faq-icon");

            faqQuestion.setAttribute("aria-expanded", "false");
            faqIcon.textContent = "+";
        });

        if (!isOpen) {
            item.classList.add("active");

            question.setAttribute("aria-expanded", "true");
            icon.textContent = "−";
        }
    });
});

// Close mobile navigation when clicking outside

const mobileNavigation = document.getElementById("mainNavigation");
const navbar = document.querySelector(".skybloom-navbar");

document.addEventListener("click", function (event) {
    const menuIsOpen = mobileNavigation.classList.contains("show");

    if (
        menuIsOpen &&
        !navbar.contains(event.target)
    ) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(
            mobileNavigation,
            { toggle: false }
        );

        collapse.hide();
    }
});

document.querySelectorAll("#mainNavigation .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        if (window.innerWidth < 992) {
            const collapse = bootstrap.Collapse.getOrCreateInstance(
                mobileNavigation,
                { toggle: false }
            );

            collapse.hide();
        }
    });
});
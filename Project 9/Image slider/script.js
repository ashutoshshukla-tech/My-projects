const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const dots = document.querySelectorAll(".dot");


// Images
const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png"
];

let currentIndex = 0;


// Show image
function showImage(index) {

    sliderImage.src = images[index];

    // Update dots
    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    dots[index].classList.add("active");
}


// Next button
nextBtn.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);
});


// Previous button
prevBtn.addEventListener("click", function() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);
});


// Dot buttons
dots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {

        currentIndex = index;

        showImage(currentIndex);

    });

});


// Automatic slider
setInterval(function() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);

}, 3000);
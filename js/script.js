function togglemenu(){
      const navlinks =document.getElementById("navLinks");
      navLinks.classList.toggle("show");
}

// =============================
// FULL-SCREEN IMAGE VIEWER
// =============================

const galleryImages = [
    "images/cbc church.jpg",
    "images/church members.jpg",
    "images/sharing word of God.jpg",
];

let currentImage = 0;


// Open image viewer
function openViewer(index) {

    currentImage = index;

    const viewer = document.getElementById("imageViewer");
    const viewerImage = document.getElementById("viewerImage");

    viewerImage.src = galleryImages[currentImage];

    viewer.style.display = "flex";

    document.body.style.overflow = "hidden";
}


// Close image viewer
function closeViewer() {

    const viewer = document.getElementById("imageViewer");

    viewer.style.display = "none";

    document.body.style.overflow = "auto";
}


// Next image
function nextImage() {

    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    document.getElementById("viewerImage").src =
        galleryImages[currentImage];
}


// Previous image
function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    document.getElementById("viewerImage").src =
        galleryImages[currentImage];
}


// Keyboard controls
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeViewer();
    }

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

});

// =============================
// SERMON FUNCTIONS
// =============================

function playSermon(index) {

    const videos = document.querySelectorAll(".sermon-video video");

    if (videos[index]) {
        videos[index].play();
    }
}
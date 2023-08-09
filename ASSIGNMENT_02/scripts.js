document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const lightboxOverlay = document.querySelector(".lightbox-overlay");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = lightbox.querySelector("img");
    const closeBtn = document.querySelector(".close");
    const pageWrapper = document.querySelector("body");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            const imgSrc = this.querySelector("img").src;
            lightboxImage.src = imgSrc;
            lightboxOverlay.style.display = "flex";
            pageWrapper.style.overflow = "hidden"; // Hide scrollbars when lightbox is open
        });
    });

    closeBtn.addEventListener("click", function () {
        lightboxOverlay.style.display = "none";
        pageWrapper.style.overflow = "auto"; // Restore scrollbars
    });

    lightboxOverlay.addEventListener("click", function (event) {
        if (event.target === lightboxOverlay) {
            lightboxOverlay.style.display = "none";
            pageWrapper.style.overflow = "auto"; // Restore scrollbars
        }
    });
});

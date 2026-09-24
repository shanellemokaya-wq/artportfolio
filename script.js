const paintings = document.querySelectorAll(".painting");

const viewer = document.querySelector(".viewer");
const viewerImage = document.querySelector(".viewer-image");
const viewerTitle = document.querySelector(".viewer-title");
const viewerMedium = document.querySelector(".viewer-medium");
const viewerYear = document.querySelector(".viewer-year");
const closeButton = document.querySelector(".viewer-close");

const viewerImageContainer = document.querySelector(".viewer-image-container");
const magnifier = document.querySelector(".magnifier");
const viewWorkLink = document.querySelector(".view-work");
if (viewWorkLink) {
viewWorkLink.addEventListener("click", function (event) {

    event.preventDefault();

    document.body.classList.add("page-leaving");

    setTimeout(function () {
            window.location.href = "work.html";
    }, 500);

});
}

paintings.forEach(function (painting) {

    painting.addEventListener("click", function () {

        const image = painting.querySelector("img");
        const title = painting.querySelector("h3");
        const medium = painting.dataset.medium;
        const year = painting.dataset.year;

       const viewerSource = painting.dataset.viewer || image.src;

viewerImage.src = viewerSource;

magnifier.style.backgroundImage =
    `url("${viewerSource}")`;
        

        viewerTitle.textContent = title.textContent;
        viewerMedium.textContent = medium;
        viewerYear.textContent = year;

        viewer.classList.add("open");

    });

});

if (viewerImageContainer && magnifier) {

    viewerImageContainer.addEventListener("mousemove", function (event) {

        const rect = viewerImageContainer.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        magnifier.style.left = x + "px";
        magnifier.style.top = y + "px";

        const zoom = 2;

        magnifier.style.backgroundSize =
            viewerImageContainer.offsetWidth * zoom + "px " +
            viewerImageContainer.offsetHeight * zoom + "px";

        magnifier.style.backgroundPosition =
            (-x * zoom + magnifier.offsetWidth / 2) + "px " +
            (-y * zoom + magnifier.offsetHeight / 2) + "px";

    });

}
if (viewerImageContainer && magnifier) {

    function moveTouchMagnifier(event) {
        const touch = event.touches[0];

        if (!touch) return;

        const rect = viewerImageContainer.getBoundingClientRect();

        let x = touch.clientX - rect.left;
        let y = touch.clientY - rect.top;

        // Keep the lens inside the painting
        x = Math.max(0, Math.min(x, rect.width));
        y = Math.max(0, Math.min(y, rect.height));

        magnifier.classList.add("touch-active");

        magnifier.style.left = x + "px";
        magnifier.style.top = y + "px";

        const zoom = 2;

        magnifier.style.backgroundSize =
            rect.width * zoom + "px " +
            rect.height * zoom + "px";

        magnifier.style.backgroundPosition =
            (-x * zoom + magnifier.offsetWidth / 2) + "px " +
            (-y * zoom + magnifier.offsetHeight / 2) + "px";
    }

    viewerImageContainer.addEventListener("touchstart", function (event) {
        moveTouchMagnifier(event);
    }, { passive: true });

    viewerImageContainer.addEventListener("touchmove", function (event) {
        event.preventDefault();
        moveTouchMagnifier(event);
    }, { passive: false });

    viewerImageContainer.addEventListener("touchend", function () {
        magnifier.classList.remove("touch-active");
    });

}
 



if (closeButton && viewer) {

    closeButton.addEventListener("click", function () {
        viewer.classList.remove("open");
    });

}



window.addEventListener("scroll", function () {

    const scrollAmount = window.scrollY;


});
function arrangeGallery() {

    const gallery = document.querySelector(".gallery");

    if (!gallery) {
        return;
    }

    const paintings = gallery.querySelectorAll(".painting");

    const columns = 3;
    const gap = 40;

    const galleryWidth = gallery.clientWidth;
    const columnWidth =
        (galleryWidth - gap * (columns - 1)) / columns;
const columnHeights= [0, 0, 0];
paintings.forEach(function (painting) {
    console.log (galleryWidth);
    console.log (columnWidth);
    console.log("paintings found: ", paintings.length);

    if (painting.classList.contains("span-2")) {
        const leftPairHeight = Math.max(columnHeights[0], columnHeights[1]);
        const rightPairHeight = Math.max(columnHeights[1], columnHeights[2]);

            let startColumn; 
            if (leftPairHeight <= rightPairHeight) {
                startColumn = 0;
            } else {
                startColumn = 1;
            }
            const x = startColumn * (columnWidth + gap);
            const y = Math.max(columnHeights[startColumn], columnHeights[startColumn + 1]);
            const spanWidth = (columnWidth * 2) + gap;
            painting.style.position = "absolute"
            painting.style.width = spanWidth + "px";
            painting.style.left = x + "px";
            painting.style.top = y + "px";
            const paintingHeight = painting.offsetHeight;
    columnHeights[startColumn] = y + paintingHeight + gap;
    columnHeights[startColumn + 1] = y + paintingHeight + gap;
        
        return;}

    const shortestHeight = Math.min(...columnHeights);

    const shortestColumn = columnHeights.indexOf(shortestHeight);
    const x = shortestColumn * (columnWidth + gap);
    const y = shortestHeight;
    
    painting.style.position = "absolute";
    painting.style.width = columnWidth + "px";
    painting.style.left = x + "px";
    painting.style.top = y + "px";
    const paintingHeight = painting.offsetHeight;
    columnHeights[shortestColumn] = y + paintingHeight + gap;
        });
gallery.style.height=(Math.max(...columnHeights)-gap) + "px";
    }
window.addEventListener("load", arrangeGallery);
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navlinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");
    });

}

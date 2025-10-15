const container = document.querySelector("div");
const button = document.querySelector("button");
const containerWidth = 640;
let pixelsPerSide = 16;
let pixelSize = containerWidth / pixelsPerSide;
for (let i = 0; i < pixelsPerSide ** 2; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = `${pixelSize}px`;
    container.appendChild(pixel);

    pixel.addEventListener("mouseenter", () => {
        pixel.classList.toggle("pixel-hover");
    });
}
function changeGrid () {
    pixelsPerSide = prompt("Enter the number of squares per side (100 max):", "16");
    const pixelsToRemove= document.querySelectorAll(".pixel");
    pixelsToRemove.forEach(element => {
        element.remove();
    });
    pixelSize = containerWidth / pixelsPerSide;
    for (let i = 0; i < pixelsPerSide ** 2; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        container.appendChild(pixel);

        pixel.addEventListener("mouseenter", () => {
        pixel.classList.toggle("pixel-hover");
        });
    }
}
button.onclick = changeGrid;
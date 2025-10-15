const container = document.querySelector("div");
for (let i = 0; i < 256; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);

    pixel.addEventListener("mouseenter", () => {
        pixel.classList.toggle("pixel-hover");
    });
}
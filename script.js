const container = document.querySelector("div");
const button = document.querySelector("button");
const containerWidth = 640;
let gridSize = 16;

function createGrid(pixelsPerSide) {
    const pixelsToRemove= document.querySelectorAll(".pixel");
    pixelsToRemove.forEach(element => {
    element.remove();
    });
    const pixelSize = containerWidth / pixelsPerSide;

    for (let i = 0; i < pixelsPerSide ** 2; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        pixel.style.opacity = 0;
        container.appendChild(pixel);

        pixel.addEventListener("mouseenter", () => {
            const randomColor = getRandomColor();
            pixel.style.backgroundColor = randomColor;
            let currentOpacity = parseFloat(pixel.style.opacity);
            pixel.style.opacity = Math.min(currentOpacity + 0.1, 1);
        });
    }
}

function changeGrid () {
    let input = prompt("Enter the number of squares per side (1 - 100):", "16");
    let newSize = parseInt(input);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrid(newSize);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

createGrid(gridSize);
button.onclick = changeGrid;
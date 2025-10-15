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
        container.appendChild(pixel);

        pixel.addEventListener("mouseenter", () => {
            pixel.classList.toggle("pixel-hover");
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

createGrid(gridSize);
button.onclick = changeGrid;
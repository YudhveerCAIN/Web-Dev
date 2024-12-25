const car = document.getElementById('car');
let topPosition = 0;
let leftPosition = 0;
document.addEventListener('keydown', (event) => {
    const step = 10;

    switch (event.key) {
        case 'ArrowUp':
            topPosition -= step;
            break;
        case 'ArrowDown':
            topPosition += step;
            break;
        case 'ArrowLeft':
            leftPosition -= step;
            break;
        case 'ArrowRight':
            leftPosition += step;
            break;
        default:
            return;
    }
    car.style.transform = `translate(${leftPosition}px, ${topPosition}px)`;
});

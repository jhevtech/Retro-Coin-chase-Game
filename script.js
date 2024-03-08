//The beginning of the timer for the game
function startTimer(display) {
    let startTime = Date.now();
    let timerInterval = setInterval(function () {
        let elapsedTime = Date.now() - startTime;

        let minutes = parseInt((elapsedTime / (1000 * 60)) % 60, 10);
        let seconds = parseInt((elapsedTime / 1000) % 60, 10);
        let milliseconds = parseInt((elapsedTime % 1000) / 10, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

        display.textContent = minutes + ":" + seconds + ":" + milliseconds;
    }, 10);
}

window.onload = function () {
    let display = document.querySelector('#timer');
    startTimer(display);
};

//The end of the timer

//The start of the health bar
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const heartImage = new Image();

    heartImage.onload = () => {
        // Set the starting x position to draw the hearts in the top right corner
        const startX = canvas.width - heartImage.width * 3 - 10 * 2; // 10px space between hearts
        const startY = 10; // 10px from the top of the canvas

        // Draw 3 hearts
        for (let i = 0; i < 3; i++) {
            ctx.drawImage(heartImage, startX + (heartImage.width + 10) * i, startY);
        }
    };

    heartImage.onerror = () => {
        console.error('Error loading the heart image.');
    };

    // Set the source last to ensure the onload function is in place
    heartImage.src = 'Heart.png';  // Update the path to the location of your heart image
});






//jhevaughns section
console.log('test');
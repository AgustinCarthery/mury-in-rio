const NUM_HATS = 6; // Number of hats you want
const hatContainer = document.getElementById('floating-hats');
const hats = [];

function createHats() {
    for (let i = 0; i < NUM_HATS; i++) {
        const hat = document.createElement('img');
        hat.src = 'assets/hat.png';
        hat.className = 'floating-hat';
        hat.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
        hat.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
        hatContainer.appendChild(hat);
        hats.push(hat);
    }
}

function moveHats() {
    hats.forEach(hat => {
        const maxX = window.innerWidth - hat.width;
        const maxY = window.innerHeight - hat.height;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        hat.style.left = `${newX}px`;
        hat.style.top = `${newY}px`;
    });
}

window.onload = function() {
    createHats();
    setInterval(moveHats, 2000);
};
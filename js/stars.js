// Function to generate a random number within a range
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a star element
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3;
    star.style.left = `${randomInRange(0, 100)}%`;
    star.style.top = `${randomInRange(0, 100)}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${randomInRange(1, 5)}s`; // Random animation duration
    star.style.animationDelay = `${randomInRange(0, 10)}s`; // Random animation delay
    return star;
}

// Function to add stars to the container
function addStars(numStars) {
    const container = document.querySelector('.stargaze-container');
    for (let i = 0; i < numStars; i++) {
        container.appendChild(createStar());
    }
    // for(let j=0; j<500; j++){
    //     container.appendChild(createShootingStars());
    // }
}

function createShootingStars() {
    const star = document.createElement('div');
    star.classList.add('stark');
    const size = Math.random() * 3;
    star.style.left = `${randomInRange(0, 100)}%`;
    star.style.top = `${randomInRange(0, 100)}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    const angle = Math.random() * Math.PI / 2 - Math.PI / 4; // Random angle between -45 and 45 degrees
    const speed = Math.random() * 3 + 1; // Random speed between 1 and 4 pixels per frame

    // Set animation duration based on speed and screen width
    const animationDuration = screenWidth / speed + 's';

    // Set animation properties
    shootingStar.style.animation = `shootingStarAnimation ${animationDuration} linear infinite`;
    shootingStar.style.transform = `rotate(${angle}rad)`;

    // star.style.animationDuration = `${randomInRange(1, 5)}s`; // Random animation duration
    star.style.animationDelay = `${randomInRange(0, 10)}s`; // Random animation delay
    return star;
}
addStars(250);

// Function to create shooting stars
function createShootingStars() {
    const numShootingStars = 3; // Number of shooting stars
    const sky = document.querySelector('.stargaze');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    for (let i = 0; i < numShootingStars; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        // Random starting position on the left side of the screen
        shootingStar.style.left = -50 + 'px';

        // Random vertical position
        shootingStar.style.top = Math.random() * screenHeight + 'px';

        // Random angle for the shooting star trajectory
        const angle = Math.random() * Math.PI / 2 - Math.PI / 4; // Random angle between -45 and 45 degrees
        const speed = Math.random() * 3 + 1; // Random speed between 1 and 4 pixels per frame

        // Set animation properties
        shootingStar.style.animation = `shootingStarAnimation-${i} ${speed}s linear infinite`;
        shootingStar.style.transform = `rotate(${angle}rad)`;

        // Append shooting star to the sky
        sky.appendChild(shootingStar);
    }
}

// Invoke the function to create shooting stars
createShootingStars();



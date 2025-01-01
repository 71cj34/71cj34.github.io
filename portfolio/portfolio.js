const container = document.getElementById('dots-container');
const numDots = 700;
const maxSpeed = 0.35;
const biasExponent = 5;
const dampingFactor = 0.95; // Damping factor to slow down the dots
const leapDistanceThreshold = 35; // Distance threshold for leaping
const resetDistanceThreshold = 36; // Distance threshold to reset leaping flag

function createDots() {
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        const x = (Math.random() < 0.5 ? -1 : 1) * (1 - Math.pow(Math.random(), biasExponent));
        const y = (Math.random() < 0.5 ? -1 : 1) * (1 - Math.pow(Math.random(), biasExponent));
        dot.style.left = `${50 + x * 50}%`;
        dot.style.top = `${50 + y * 50}%`;
        dot.vx = (Math.random() - 0.5) * maxSpeed;
        dot.vy = (Math.random() - 0.5) * maxSpeed;
        dot.originalVx = dot.vx; // Store original speed
        dot.originalVy = dot.vy; // Store original speed
        dot.leaping = false;
        container.appendChild(dot);
    }
}

function moveDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        let x = parseFloat(dot.style.left);
        let y = parseFloat(dot.style.top);
        const dx = x - 50;
        const dy = y - 50;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < leapDistanceThreshold && !dot.leaping) {
            dot.vx *= dampingFactor;
            dot.vy *= dampingFactor;

            if (Math.abs(dot.vx) < 0.06 && Math.abs(dot.vy) < 0.06) {
                dot.leaping = true;

                const nearestCorner = getNearestCorner(x, y);

                const dirX = nearestCorner.x - x + (7*(1/Math.random()^2))*((Math.random() * 2) - 1); // add variance
                const dirY = nearestCorner.y - y + (11*(1/Math.random()^2))*((Math.random() * 2) - 1);
                const magnitude = Math.sqrt(dirX * dirX + dirY * dirY);

                // Rerandomize the speed to be less than maxSpeed
                const speed = Math.random() * maxSpeed * 0.95;

                dot.vx = (dirX / magnitude) * speed;
                dot.vy = (dirY / magnitude) * speed;
            }
        }

        if (distance > resetDistanceThreshold) {
            dot.leaping = false;
        }

        x += dot.vx;
        y += dot.vy;

        // Bounce
        if (x < 0 || x > 100) dot.vx *= -1;
        if (y < 0 || y > 100) dot.vy *= -1;

        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
    });
    requestAnimationFrame(moveDots);
}

function getNearestCorner(x, y) {
    const corners = [
        { x: 0, y: 0 },    // Top-left
        { x: 100, y: 0 },  // Top-right
        { x: 0, y: 100 },  // Bottom-left
        { x: 100, y: 100 } // Bottom-right
    ];

    let nearestCorner = corners[0];
    let minDistance = Infinity;

    corners.forEach(corner => {
        const dx = corner.x - x;
        const dy = corner.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
            minDistance = distance;
            nearestCorner = corner;
        }
    });

    return nearestCorner;
}

createDots();
moveDots();


/* WAIT STUFF */

const links = document.querySelectorAll('.wait');
const popup = document.getElementById('popup');

links.forEach(link => {
    link.addEventListener('click', () => {
        popup.classList.add('show');

        setTimeout(() => {
            popup.classList.remove('show');
        }, 1250); // 1.25s
    });
});

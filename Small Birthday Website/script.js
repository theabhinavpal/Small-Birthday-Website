// Confetti Animation
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Randomize confetti properties
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        
        document.body.appendChild(confetti);

        // Remove confetti element after animation ends
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}
createConfetti();  // Call the function to start the confetti effect

// Mouse-Following Stars
document.addEventListener('mousemove', function(e) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Position the star at the cursor location
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;
    
    document.body.appendChild(star);

    // Fade out and remove the star after a short delay
    setTimeout(() => {
        star.style.opacity = '0';
        setTimeout(() => {
            star.remove();
        }, 500); // Wait for opacity transition to complete before removal
    }, 100);
});

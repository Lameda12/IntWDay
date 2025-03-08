// Wait for DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the button
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', showPostcard);
    }
});

function showPostcard() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim() || 'Friend';
    
    // Hide input screen with fade out
    const inputScreen = document.getElementById('input-screen');
    if (inputScreen) {
        inputScreen.style.opacity = '0';
        inputScreen.style.transition = 'opacity 0.5s';
        
        setTimeout(() => {
            inputScreen.style.display = 'none';
            
            // Show and animate postcard
            const postcard = document.getElementById('postcard');
            if (postcard) {
                postcard.style.display = 'block';
                
                // Update greeting text
                const greetingText = document.getElementById('greeting-text');
                if (greetingText) {
                    greetingText.textContent = `Happy International Women's Day, ${name}!`;
                }
                
                // Create and animate particles
                createParticles();
            }
        }, 500);
    }
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const left = Math.random() * 100;
        const animationDuration = 3 + Math.random() * 2;
        const size = 5 + Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            left: ${left}%;
            top: -10px;
            width: ${size}px;
            height: ${size}px;
            background: ${Math.random() > 0.5 ? '#8B008B' : '#FF69B4'};
            border-radius: 50%;
            animation: fall ${animationDuration}s linear infinite;
            opacity: 0;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Add falling animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ... rest of existing code ... 
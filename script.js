const skills = [
    'Student',
    'Front-end Developer',
    'Flutter Enthusiast',
    'Open Source Contributor',
    'Coder',
    'Devloper',
    'AI Enthusiast',
];

const typewriterPrefix = document.querySelector('.typewriter-prefix');
const typewriterText = document.querySelector('.typewriter-text');

let index = 0;
let isTabVisible = true;
let typingInterval;

function typeSkill(skill) {
    typewriterPrefix.textContent = 'I am a '; // Reset prefix
    typewriterText.textContent = ''; // Clear existing text
    let i = 0;
    typingInterval = setInterval(() => {
        typewriterText.textContent += skill.charAt(i);
        i++;
        if (i === skill.length) {
            clearInterval(typingInterval);
            typewriterText.innerHTML += '<span>|</span>'; // Add cursor after typing
        }
    }, 100); // Adjust the typing speed (milliseconds per character)
}

function initTypewriter() {
    typeSkill(skills[index]); // Initial skill display without delay
    setInterval(() => {
        if (isTabVisible) {
            index = (index + 1) % skills.length;
            typeSkill(skills[index]);
        }
    }, 3000); // Change the interval time (in milliseconds) here
}

// Function to handle visibility change
function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
        clearInterval(typingInterval); // Pause typing when tab is not visible
        isTabVisible = false;
    } else {
        isTabVisible = true;
        // If tab is visible and no interval is running, resume typing
        if (!typingInterval) {
            typeSkill(skills[index]);
        }
    }
}

// Event listener for visibility change
document.addEventListener('visibilitychange', handleVisibilityChange);

// Start the typewriter immediately
initTypewriter();

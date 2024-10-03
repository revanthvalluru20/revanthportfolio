const roles = [" Web Developer ", " Mobile Developer ", " Data Analyst "];
let roleIndex = 0;
let charIndex = 0;
let currentRole = '';
let isDeleting = false;
const typedTextElement = document.getElementById('typed-text');

function type() {
    if (isDeleting) {
        currentRole = roles[roleIndex].substring(0, charIndex--);
    } else {
        currentRole = roles[roleIndex].substring(0, charIndex++);
    }

    typedTextElement.textContent = currentRole;

    if (!isDeleting && charIndex === roles[roleIndex].length) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500); // Pause before typing next role
    } else {
        setTimeout(type, isDeleting ? 50 : 150); // Adjust typing speed
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type(); // Start typing animation
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(function() {
            document.getElementById("form-status").innerText = "Your message has been sent successfully!";
            form.reset(); // Reset the form after sending
        }, function(error) {
            document.getElementById("form-status").innerText = "There was an error sending your message: " + JSON.stringify(error);
        });
});

const skills = [
    { name: 'Java', level: 80, logo: 'path/to/java-logo.svg' },
    { name: 'Python', level: 70, logo: 'path/to/python-logo.svg' },
    { name: 'R', level: 85, logo: 'path/to/r-logo.svg' },
    { name: 'JavaScript', level: 80, logo: 'path/to/javascript-logo.svg' },
    { name: 'HTML', level: 90, logo: 'path/to/html-logo.svg' },
    { name: 'CSS', level: 90, logo: 'path/to/css-logo.svg' },
    { name: 'Android Studio', level: 80, logo: 'path/to/android-logo.svg' },
    { name: 'Tableau', level: 80, logo: 'path/to/tableau-logo.svg' },
    { name: 'SQL', level: 85, logo: 'path/to/sql-logo.svg' },
    { name: 'MongoDB', level: 60, logo: 'path/to/mongodb-logo.svg' },
    { name: 'React', level: 80, logo: 'path/to/react-logo.svg' },
    { name: 'Express', level: 60, logo: 'path/to/express-logo.svg' },
    { name: 'Node', level: 70, logo: 'path/to/node-logo.svg' },
];

const skillsContainer = document.getElementById('skills-container');

skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.className = 'bg-indigo-600 transition duration-300 shadow-md rounded-lg mx-2 my-2 p-4 max-w-xs text-center w-48';

    skillCard.innerHTML = `
        <div class="text-4xl mb-4" style="color: rgb(0, 27, 94);">
            <img src="${skill.logo}" alt="${skill.name} logo" height="64" width="64" />
        </div>
        <h3 class="text-xl mb-2 font-bold" style="color: rgb(0, 27, 94);">${skill.name}</h3>
        <div class="mx-auto w-24 relative">
            <svg class="CircularProgressbar" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="lightgray" stroke-width="10" fill="none"/>
                <circle cx="50" cy="50" r="45" stroke="#4fd1ff" stroke-width="10" fill="none" stroke-dasharray="${skill.level}, 100"/>
            </svg>
            <text class="CircularProgressbar-text" x="50" y="50" style="fill: rgb(0, 27, 94);">${skill.level}%</text>
        </div>
    `;

    skillsContainer.appendChild(skillCard);
});

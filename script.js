document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.menu-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor jump

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            toggleMenu(); // Close menu after clicking
        });
    });
});



function showExperience(company) {
    const content = document.getElementById('experience-content');

    const experiences = {
        atos: `
            <h2>Atos Syntel</h2>
            <p><strong>Date:</strong> May 2023 - July 2023</p>
            <p><strong>Location:</strong> India</p>
            <p>
                Collaborated with the Data and AI team to design a Healthcare Data
                platform for digitizing patient records and enabling advanced
                wellness analytics. Developed an Azure-based framework to automate
                business processes from patient onboarding to discharge.
                Co-created an intelligent app using Python and Django for
                automated blood report extraction and processing,
                integrated with Azure Data Lake. Utilized Azure
                OpenAI to generate AI-driven diagnosis summaries,
                improving clinical workflows and doctor consultations.
            </p>
        `,
        fanden: `
            <h2>FanDen</h2>
            <p><strong>Date:</strong> August 2021 - August 2022</p>
            <p><strong>Location:</strong> India</p>
            <p>
                Drove transformative technological initiatives along with the technology
                team at FanDen, leading the successful development of a dynamic 
                screening event booking website. Utilized the MERN stack to craft a 
                seamless and responsive website, integrating secure payment gateways 
                for streamlined ticket issuance and payments. Engineered a comprehensive 
                CRM system, facilitating efficient backend processes. User-friendly admin 
                and coordinator login for CRM access. Pioneered a cutting-edge QR code 
                system for order confirmation, enhancing venue entry efficiency.
            </p>
        `,
        brandbuddiez: `
            <h2>BrandBuddiez</h2>
            <p><strong>Date:</strong> April 2021 - June 2021</p>
            <p><strong>Location:</strong> India</p>
            <p>
                For an E-Commerce Website, I worked with the CTO to design and develop 
                the following functionalities: Re-engineered and created UMLs for 
                the new and enhanced Supply Chain Process (From Order generation to 
                Customer Delivery). Automated the Order generation process using 
                Python. Conducted Multivariate Data Analysis using Python, and created 
                Sales KPIs and Visualizations using Power BI.
            </p>
        `,
    };

    content.innerHTML = experiences[company] || `<p>No details available for this company.</p>`;
}

// Call the function for "atos" when the page loads
window.onload = function () {
    showExperience('atos');
};

function scrollToProjects() {
    const projectsSection = document.getElementById('project');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}



const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.color-container');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 32;  // Considering the gap between slides
const totalSlides = slides.length / 3;  // Number of sets of 3 projects each

function moveSlide(direction) {
    if (direction === 1) {
        // Move forward, but don't exceed the last set
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        }
    } else {
        // Move backward, but don't go past the first set
        if (currentIndex > 0) {
            currentIndex--;
        }
    }

    track.style.transform = `translateX(-${currentIndex * slideWidth * 3}px)`;

    // Disable arrows if at the beginning or end
    updateArrowVisibility();
}

// Update the visibility of arrows
function updateArrowVisibility() {
    if (currentIndex === 0) {
        prevButton.style.display = 'none';  // Hide left button at first slide
    } else {
        prevButton.style.display = 'block';
    }

    if (currentIndex === totalSlides - 1) {
        nextButton.style.display = 'none';  // Hide right button at last slide
    } else {
        nextButton.style.display = 'block';
    }
}

// Add event listeners to navigation arrows
prevButton.addEventListener('click', () => moveSlide(-1));
nextButton.addEventListener('click', () => moveSlide(1));

// Automatically adjust slide width on window resize
window.addEventListener('resize', () => {
    track.style.transform = `translateX(-${currentIndex * slideWidth * 3}px)`;
});

// Initialize the arrow visibility
updateArrowVisibility();


/* Projects Page */

// Function to retrieve project number from URL query parameters
function getProjectFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("project");
}

// Function to update URL without reloading the page
function updateURL(projectNumber) {
    history.pushState(null, '', `?project=${projectNumber}`);
    showProjectInfo(projectNumber);  // Update project details dynamically
}

// Function to display project details dynamically
function showProjectInfo(projectNumber) {
    let projectInfo = document.getElementById("project-info");

    // Remove active class from all projects
    let allProjects = document.querySelectorAll(".project-item");
    allProjects.forEach(item => item.classList.remove("active"));

    // Add active class to clicked project
    document.getElementById(`project${projectNumber}`).classList.add("active");

    // Project details content
    let projectDetails = {
        1: `
            <h2>Automated Financial Data Processing</h2>
            <p>This project focuses on automating financial reports using AI-powered tools to enhance decision-making processes.</p>
            <img src="assets/project-1-details.png" alt="Project One Details" style="width:80%; border-radius:10px;">
        `,
        2: `
            <h2>Brain Alzheimer Detection</h2>
            <p>This project leverages machine learning algorithms to identify early symptoms of Alzheimer's disease.</p>
            <img src="assets/project-2-details.png" alt="Project Two Details" style="width:80%; border-radius:10px;">
        `,
        3: `
            <h2>Hand Gesture Recognition</h2>
            <p>An AI-based hand gesture recognition system that enables touchless interaction using computer vision techniques.</p>
            <img src="assets/project-3-details.png" alt="Project Three Details" style="width:80%; border-radius:10px;">
        `,
        4: `
            <h2>Covid-19 Analysis</h2>
            <p>This project provides an in-depth analysis of Covid-19 trends and patterns using data visualization.</p>
            <img src="assets/project-4-details.png" alt="Project Four Details" style="width:80%; border-radius:10px;">
        `,
        5: `
            <h2>Sales Dashboard</h2>
            <p>A dashboard to analyze and visualize sales performance over time for better decision-making.</p>
            <img src="assets/project-5-details.png" alt="Project Five Details" style="width:80%; border-radius:10px;">
        `,
        6: `
            <h2>Project Six</h2>
            <p>Details about the upcoming project which focuses on enhancing business insights.</p>
            <img src="assets/project-6-details.png" alt="Project Six Details" style="width:80%; border-radius:10px;">
        `
    };

    // Update content
    projectInfo.innerHTML = projectDetails[projectNumber] || `<p>Project details not found.</p>`;
}

// Event listener for project clicks in the carousel
document.querySelectorAll(".project-item").forEach((item, index) => {
    item.addEventListener("click", () => {
        updateURL(index + 1);  // Index starts from 0, so adding 1 to match project numbering
    });
});

// Load the project details when page loads based on the URL
window.onload = function () {
    const selectedProject = getProjectFromURL();
    if (selectedProject) {
        showProjectInfo(selectedProject);
    }
};



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
const slides = document.querySelectorAll('.details-container'); 
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 32; // Slide width including gap

function moveSlide(direction) {
    const maxIndex = slides.length - 3; // Displaying 3 projects at a time

    if (direction === 1) {
        // Move forward by 1 project but prevent going out of bounds
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop to the beginning
        }
    } else {
        // Move backward by 1 project but prevent going out of bounds
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex; // Loop to the end
        }
    }

    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listeners for navigation arrows
prevButton.addEventListener('click', () => moveSlide(-1));
nextButton.addEventListener('click', () => moveSlide(1));

// Adjust the slide position when the window resizes
window.addEventListener('resize', () => {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});




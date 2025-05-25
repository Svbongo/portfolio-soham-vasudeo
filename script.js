document.addEventListener("DOMContentLoaded", function () {
    // Fix typing animation overflow issue
    var typed = new Typed("#typed-text", {
        strings: ["Welcome to my portfolio"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        showCursor: false
    });

    // Prevent dropdown visibility issues on page load
    const projectTab = document.querySelector(".projects-tab");
    const dropdown = document.querySelector(".dropdown");

    projectTab.addEventListener("mouseenter", () => {
        dropdown.style.display = "block";
    });

    projectTab.addEventListener("mouseleave", () => {
        dropdown.style.display = "none";
    });
});


    // Particles.js configuration
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ff5400"
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.6,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ff5400",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
;



const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.color-container');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 24; // Considering the gap
const totalSlides = slides.length / 1; // Number of sets of 3 projects each

function moveSlide(direction) {
    if (direction === 1) {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        }
    } else {
        if (currentIndex > 0) {
            currentIndex--;
        }
    }

    track.style.transform = `translateX(-${currentIndex * slideWidth * 2}px)`;
    updateArrowVisibility();
}

function updateArrowVisibility() {
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex === totalSlides - 1 ? 'none' : 'block';
}

prevButton.addEventListener('click', () => moveSlide(-1));
nextButton.addEventListener('click', () => moveSlide(1));

window.addEventListener('resize', () => {
    track.style.transform = `translateX(-${currentIndex * slideWidth * 3}px)`;
});

updateArrowVisibility();




// Function to display project details dynamically
function showProjectInfo(projectNumber) {
    let projectInfo = document.getElementById("project-info");

    // Remove active class from all projects
    let allProjects = document.querySelectorAll(".project-item");
    allProjects.forEach(item => item.classList.remove("active"));

    // Add active class to clicked project
    document.getElementById(`project${projectNumber}`).classList.add("active");

    // Set project content dynamically
    let projectDetails = {
        1: `
            <h2>Automated Financial Data Processing</h2>
            <p>This project focuses on automating financial reports using AI-powered tools to enhance decision-making processes.</p>
            <img src="assets/project1-details.png" alt="Project One Details" style="width:80%; border-radius:10px;">
        `,
        2: `
            <h2>Brain Alzheimer Detection</h2>
            <p>This project leverages machine learning algorithms to identify early symptoms of Alzheimer's disease.</p>
            <img src="assets/project2-details.png" alt="Project Two Details" style="width:80%; border-radius:10px;">
        `,
        3: `
            <h2>Hand Gesture Recognition</h2>
            <p>An AI-based hand gesture recognition system that enables touchless interaction using computer vision techniques.</p>
            <img src="assets/project3-details.png" alt="Project Three Details" style="width:80%; border-radius:10px;">
        `,
        4: `<h2>Project Four</h2><p>Details for Project Four.</p>`,
        5: `<h2>Project Five</h2><p>Details for Project Five.</p>`,
        6: `<h2>Project Six</h2><p>Details for Project Six.</p>`
    };

    projectInfo.innerHTML = projectDetails[projectNumber];
}

window.onscroll = function() { updatescrollprogress() };

function updatescrollprogress() {
    const scrollprogress = document.getElementById("scrollprogress");
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    let degree = (scrollPercentage / 100) * 360;

    // Update the circular progress bar dynamically
    scrollprogress.style.background = `conic-gradient(
        #ff5733 ${degree}deg, 
        #d3d3d3 ${degree}deg
    )`;

    // Show or hide the button based on scroll position
    document.getElementById("scrolltopcontainer").style.display = scrollTop > 100 ? "flex" : "none";
}

// Smooth scrolling to top
function scrollTotop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


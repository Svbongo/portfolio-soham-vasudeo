// Function to retrieve project number from URL query parameters
function getProjectFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("project");
}

// Function to update the URL when clicking on a project
function loadProject(projectNumber) {
    history.pushState(null, '', `?project=${projectNumber}`);
    showProjectInfo(projectNumber);
}

// Function to display project details dynamically
function showProjectInfo(projectNumber) {
    let projectInfo = document.getElementById("project-info");

    // Remove active class from all projects
    let allProjects = document.querySelectorAll(".project-item");
    allProjects.forEach(item => item.classList.remove("active"));

    // Add active class to selected project
    let selectedProject = document.getElementById(`project${projectNumber}`);
    if (selectedProject) {
        selectedProject.classList.add("active");
    }

    // Set project content dynamically
    let projectDetails = {
        1: `
        <h2>Transforming Financial Planning and Analysis with Generative AI</h2>
        <p>
            This project leverages Generative AI and Robotic Process Automation (RPA) to revolutionize financial planning and analysis (FP&A),
            automating forecasting, anomaly detection, and financial reporting to enhance decision-making and operational efficiency.
        </p>
        
        <div style="text-align: center;">
            <img src="assets/project-1-details.png" alt="FP&A Dashboard Overview" style="width:80%; border-radius:10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        </div>
    
        <h3>📊 Overview</h3>
        <p>
            Conducted as part of a conceptual project at NMIMS, this initiative focuses on automating the FP&A process by integrating 
            advanced technologies such as RPA and Generative AI to streamline financial data collection, forecasting, and reporting.
        </p>
    
        <h3>🔍 Key Features</h3>
        <ul>
            <li>Automated financial data collection from multiple sources using RPA.</li>
            <li>Time-series forecasting using advanced machine learning models (LSTM, SARIMA).</li>
            <li>Anomaly detection to identify irregularities in financial statements.</li>
            <li>Dynamic "what-if" scenario analysis powered by Generative AI models.</li>
            <li>Interactive dashboards for real-time insights into financial health.</li>
        </ul>
    
        <h3>📈 Metrics Analyzed</h3>
        <ul>
            <li><strong>Cost Reduction:</strong> Achieved through automated financial reporting.</li>
            <li><strong>Forecast Accuracy:</strong> Improved by 15% using AI-based predictions.</li>
            <li><strong>Operational Efficiency:</strong> Enhanced by automating repetitive tasks.</li>
            <li><strong>Data Processing Time:</strong> Reduced from weeks to hours.</li>
        </ul>
    
        <h3>🛠 Tools & Technologies Used</h3>
        <ul>
            <li><strong>Python:</strong> Data processing and AI model implementation.</li>
            <li><strong>Power BI:</strong> Interactive dashboards for financial visualization.</li>
            <li><strong>RPA Tools:</strong> UiPath and Power Automate for data extraction.</li>
            <li><strong>Cloud Platforms:</strong> AWS and Azure for data storage and processing.</li>
            <li><strong>Generative AI:</strong> OpenAI API and LangChain for scenario analysis.</li>
        </ul>
    
        <h3>🏆 Achievements</h3>
        <p>
            Successfully implemented an AI-driven FP&A solution that automates financial reporting and forecasting, 
            reducing manual effort and enhancing business decision-making.
        </p>
    `,
    
        2: `
            <h2>Brain Alzheimer Detection</h2>
            <p>Developed a real-time Hand Gesture Recognition System using MediaPipe, OpenCV, and LSTM Neural Networks, enabling accurate classification of sign language gestures for improved human-computer interaction and accessibility for the hearing and speech impaired.</p>
            <img src="assets/project-2-details.png" alt="Project Two Details" style="width:80%; border-radius:10px;">
        `,
        3: `
        <h2>📊 Hand Gesture Recognition System</h2>
    <p>
        This project focuses on developing a real-time gesture-based communication system using MediaPipe, OpenCV, and LSTM Neural Networks.
        The system enhances human-computer interaction by accurately recognizing hand gestures, particularly benefiting speech-impaired individuals.
        By leveraging AI-driven methodologies, the project facilitates gesture-to-text translation, improving accessibility and real-time communication.
    </p>

    <h3>👥 Team Members</h3>
    <ul>
        <li>Soham Vasudeo</li>
        <li>Om Agrawal</li>
        <li>Vanshaj Ajmera</li>
        <li>Shardul Patki</li>
        <li>Ritika Shetty</li>
    </ul>
    <p><strong>Course:</strong> Machine Learning Project 2022-23 | <strong>Institution:</strong> NMIMS University</p>

    <h3>🎯 Objectives</h3>
    <ul>
        <li>✔ Enable gesture-based communication for speech-impaired individuals.</li>
        <li>✔ Implement a real-time detection system with high accuracy and low latency.</li>
        <li>✔ Develop a scalable and adaptable model to recognize additional gestures.</li>
        <li>✔ Enhance human-computer interaction through gesture-controlled systems.</li>
    </ul>

    <h3>🗂 Data Understanding</h3>
    <p>The project leverages gesture-based image data to train and optimize the model for accurate recognition.</p>

    <h4>📌 Dataset Components:</h4>
    <ul>
        <li>Hand Gesture Images: Captured using **MediaPipe Hands** for training.</li>
        <li>Keypoints Extraction: **21 hand landmarks** recorded for precise motion tracking.</li>
        <li>Predefined Gestures Recognized:
            <ul>
                <li>🖐 Hello</li>
                <li>🤟 I Love You</li>
                <li>✋ Thank You</li>
                <li>☝ One</li>
                <li>✌ Victory</li>
            </ul>
        </li>
    </ul>

    <h4>🚧 Challenges Addressed:</h4>
    <ul>
        <li>Variations in Lighting & Backgrounds – Improved model robustness.</li>
        <li>Real-Time Processing Constraints – Optimized inference time.</li>
        <li>Multi-Gesture Recognition – Supports dynamic learning of new gestures.</li>
    </ul>

    <h3>⚙️ Data Preparation</h3>
    <ul>
        <li>🔹 Removed noisy and distorted images.</li>
        <li>🔹 Standardized gesture images to a **consistent resolution**.</li>
        <li>🔹 Applied **image augmentation** (rotation, scaling) for better generalization.</li>
    </ul>

    <h3>🧠 Modeling</h3>
    <ul>
        <li>✅ **MediaPipe Hands:** Detects **21 keypoints** for each hand.</li>
        <li>✅ **OpenCV Preprocessing:** Converts images into feature arrays.</li>
    </ul>
    <h4>🤖 Deep Learning Models for Gesture Classification:</h4>
    <ul>
        <li>🤖 LSTM (Long Short-Term Memory): Captures sequential dependencies.</li>
        <li>🤖 CNN (Convolutional Neural Networks): Extracts spatial patterns.</li>
        <li>🤖 ANN (Artificial Neural Networks): Classifies gesture patterns efficiently.</li>
    </ul>

    <h3>📈 Model Evaluation</h3>
    <ul>
        <li>📌 **Accuracy:** 87.5% on the test dataset.</li>
        <li>📌 **Precision & Recall:** Ensures minimal false positives.</li>
        <li>📌 **F1-Score:** Balances precision and recall.</li>
        <li>⏳ **Processing Time:** ~3.81 ms per frame (real-time execution).</li>
    </ul>

    <h3>🚀 Deployment Strategy</h3>
    <ul>
        <li>☁ Supports **Raspberry Pi, AWS, Google Cloud**.</li>
        <li>🔄 **Automated Data Collection & Preprocessing** for scalability.</li>
        <li>✅ **Flask API / FastAPI:** Enables real-time communication.</li>
        <li>✅ **TFLite for Mobile Deployment:** Optimized for mobile devices.</li>
        <li>📊 **Feedback Loop:** Allows users to **add new gestures dynamically**.</li>
    </ul>

    <h3>📊 Key Insights and Results</h3>
    <ul>
        <li>📌 **High Recognition Accuracy:** 96.4% accuracy on test data.</li>
        <li>📌 **Fast Processing Speed:** Real-time recognition at **~3.81 ms per frame**.</li>
        <li>📌 **User-Friendly Interface:** Gesture-to-text translation for assistive communication.</li>
        <li>📌 **Expandable Gesture Set:** New gestures can be **added dynamically**.</li>
    </ul>

    <h3>🛠 Tools & Technologies Used</h3>
    <ul>
        <li>🖥 **Python, NumPy, OpenCV, TensorFlow, Keras**</li>
        <li>🧠 **LSTM, CNN, ANN**</li>
        <li>🖐 **MediaPipe Hands, OpenCV**</li>
        <li>📊 **Matplotlib, Seaborn, Power BI**</li>
        <li>🌍 **Flask, FastAPI, TensorFlow Lite (TFLite)**</li>
    </ul>

    <h3>🏆 Achievements</h3>
    <ul>
        <li>🏅 Developed a fully functional **real-time gesture recognition system**.</li>
        <li>🏅 Achieved **96.4% accuracy** using deep learning models.</li>
        <li>🏅 Successfully integrated **MediaPipe** for **precise hand tracking**.</li>
        <li>🏅 Enabled **real-time gesture classification** for assistive communication.</li>
    </ul>
        `,
        4: `
        <h2>Covid-19 Analysis and Forecasting</h2>
        <p>An in-depth analysis of COVID-19 trends, vaccination patterns, and forecasting using data visualization and predictive modeling techniques.</p>
        
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <img src="assets/project-4-details-1.png" alt="Covid-19 Dashboard Overview" style="width:48%; border-radius:10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <img src="assets/project-4-details-2.png" alt="Covid-19 Analysis Insights" style="width:48%; border-radius:10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        </div>
    
        <h3>📊 Overview</h3>
        <p>
            This project was conducted as part of a data science competition at NMIMS, where we analyzed COVID-19 data to track trends, mortality, and vaccination rates.
            Using Python and Power BI, the analysis aimed to generate actionable insights to help understand pandemic progression across Indian states.
        </p>
    
        <h3>🔍 Key Features</h3>
        <ul>
            <li>Interactive Power BI dashboards for real-time COVID-19 data visualization.</li>
            <li>Time-series forecasting using the SARIMA model to predict future case trends.</li>
            <li>Geospatial analysis to map case density across regions.</li>
            <li>Gender-wise and age-wise vaccination impact analysis.</li>
            <li>Mortality and recovery rate tracking over time.</li>
            <li>Insights derived to inform data-driven policy-making decisions.</li>
        </ul>
    
        <h3>📈 Metrics Analyzed</h3>
        <ul>
            <li><strong>Total Confirmed Cases:</strong> 4349M</li>
            <li><strong>Total Cured:</strong> 3974M</li>
            <li><strong>Total Deaths:</strong> 58.67M</li>
            <li><strong>Total Doses Administered:</strong> 20bn</li>
            <li><strong>Peak Recovery Rate:</strong> 97.22%</li>
            <li><strong>Peak Mortality Rate:</strong> 3.14%</li>
        </ul>
    
        <h3>🛠 Tools & Technologies Used</h3>
        <ul>
            <li><strong>Python:  </strong> Data cleaning, analysis, and modeling using Pandas, NumPy, and Statsmodels.</li>
            <li><strong>Power BI:  </strong> Interactive dashboards for COVID-19 case and vaccination tracking.</li>
            <li><strong>SARIMA Model:  </strong> Time-series forecasting for future trend predictions.</li>
            <li><strong>Geospatial Analysis:  </strong> Mapping case distribution across Indian states.</li>
        </ul>
    
        <h3>🏆 Achievements</h3>
        <p>
            Successfully built predictive models that provided insights into COVID-19 trends, aiding decision-makers in tracking pandemic progression.
            The Power BI dashboard visually presented complex data, making it easier for stakeholders to interpret.
        </p>
    `,
    
        5: `
            <h2>Sales Dashboard</h2>
            <img src="assets/project-5-details.png" alt="Sales Dashboard" style="width:50%; border-radius:10px;">
            <h3>📊 Overview</h3>
            <p>This interactive dashboard was created during a competition as part of my Bachelor's in Computer Science (Data Science) at NMIMS, Mumbai.</p>

            <h3>🔍 Key Features</h3>
            <ul>
                <li>Dynamic filters for regions and product categories.</li>
                <li>Sales breakdown by channels: Retail, Internet, and Catalog.</li>
                <li>Visual representation of total revenue, profit, and products sold.</li>
                <li>Geographical sales distribution using map visualizations.</li>
                <li>Pivot tables for in-depth analysis of product performance.</li>
            </ul>

            <h3>📈 Metrics Analyzed</h3>
            <ul>
                <li><strong>Total Revenue:</strong> $14,151</li>
                <li><strong>Profit:</strong> $7,550</li>
                <li><strong>Products Sold:</strong> 191</li>
                <li><strong>Top Performing State:</strong> New South Wales ($4,195)</li>
            </ul>

            <h3>🛠 Tools & Technologies Used</h3>
            <ul>
                <li>Microsoft Excel (Pivot Tables, Charts, Conditional Formatting)</li>
                <li>Data Analysis Techniques</li>
                <li>Visualization and KPI Reporting</li>
            </ul>

            <h3>🏆 Achievements</h3>
            <p>Successfully developed a user-friendly and visually engaging dashboard that provided stakeholders with valuable insights for business decisions.</p>
        `
    };

    // Update the info section based on the project number
    projectInfo.innerHTML = projectDetails[projectNumber] || `<p>Project details not found.</p>`;
}

// Automatically show the selected project based on the URL query
window.onload = function () {
    const selectedProject = getProjectFromURL();
    if (selectedProject) {
        showProjectInfo(selectedProject);
    }
};


// Scroll function to update progress
// Scroll function to update progress
window.onscroll = function() { updateScrollProgress() };

function updateScrollProgress() {
    const scrollProgress = document.getElementById("scrollProgress");
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    let degree = (scrollPercentage / 100) * 360;

    // Update the circular progress bar dynamically
    scrollProgress.style.background = `conic-gradient(
        #ff5733 ${degree}deg, 
        #d3d3d3 ${degree}deg
    )`;

    // Show or hide the button based on scroll position
    document.getElementById("scrollTopContainer").style.display = scrollTop > 100 ? "flex" : "none";
}

// Smooth scrolling to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


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
    
        3: `
     <h2>🧠 Detection and Classification of Brain Alzheimer’s Using CNN Model</h2>
    <p>
        This project applies <strong>Convolutional Neural Networks (CNNs)</strong> to detect and classify 
        <strong>Alzheimer’s Disease (AD)</strong> from <strong>MRI brain scans</strong>, enabling 
        <strong>early detection and improved diagnosis</strong>. The model categorizes MRI images into four classes:
        <strong>Non-Demented, Very Mild Demented, Mild Demented, and Moderate Demented</strong>.
    </p>

    <h3>👥 Team Members</h3>
    <ul>
        <li><strong>Soham Vasudeo</strong></li>
        <li><strong>Shardul Patki</strong></li>
    </ul>
    <p><strong>Course:</strong> Machine Learning Project 2022-23 | <strong>Institution:</strong> NMIMS University</p>

    <h3>🎯 Objectives</h3>
    <ul>
        <li>✔ Enhance <strong>early detection of Alzheimer’s</strong> using CNN models.</li>
        <li>✔ Train a deep learning model with <strong>SMOTE</strong> to balance class distribution.</li>
        <li>✔ Improve <strong>classification accuracy</strong> using <strong>data augmentation</strong>.</li>
        <li>✔ Automate <strong>MRI-based Alzheimer’s detection</strong> with high precision.</li>
    </ul>

    <h3>🗂 Data Understanding</h3>
    <p>The dataset consists of <strong>MRI brain scans</strong> categorized into four Alzheimer’s disease stages.</p>

    <h4>📌 Dataset Components:</h4>
    <ul>
        <li>📊 <strong>MRI Images:</strong> Collected from the <strong>OASIS Database</strong>.</li>
        <li>🧠 <strong>Class Labels:</strong>
            <ul>
                <li>Non-Demented: 3,210 images</li>
                <li>Very Mild Demented: 2,240 images</li>
                <li>Mild Demented: 896 images</li>
                <li>Moderate Demented: 64 images</li>
            </ul>
        </li>
    </ul>

    <h4>🚧 Challenges Addressed:</h4>
    <ul>
        <li>Class Imbalance – Used <strong>SMOTE</strong> for dataset balancing.</li>
        <li>Variability in MRI Scans – Applied <strong>data augmentation</strong> techniques.</li>
        <li>High Computational Load – Optimized <strong>CNN architecture</strong> for efficiency.</li>
    </ul>

    <h3>⚙️ Data Preparation</h3>
    <ul>
        <li> Applied <strong>data augmentation</strong> (zoom, brightness, flips) to enhance model generalization.</li>
        <li> Used <strong>SMOTE</strong> to generate synthetic samples for underrepresented classes.</li>
        <li> Standardized MRI scans to <strong>176x176x3 resolution</strong>.</li>
    </ul>

    <h3>🧠 Modeling</h3>
    <ul>
        <li> <strong>CNN Architecture:</strong> Conv2D layers for feature extraction.</li>
        <li> <strong>MaxPooling & Dropout:</strong> Reduce overfitting and improve model robustness.</li>
        <li> <strong>Fully Connected Dense Layers:</strong> Perform final classification into four AD stages.</li>
    </ul>

    <h3>📈 Model Evaluation</h3>
    <ul>
        <li> <strong>Accuracy:</strong> Achieved <strong>93.7% test accuracy</strong>.</li>
        <li> <strong>Precision & Recall:</strong> Ensured minimal false positives.</li>
        <li> <strong>F1-Score:</strong> Balanced assessment of classification performance.</li>
        <li> <strong>Processing Time:</strong> Optimized CNN reduces inference time per MRI scan.</li>
    </ul>

    <h3>🚀 Deployment Strategy</h3>
    <ul>
        <li> Supports <strong>Google Cloud / AWS</strong> for scalability.</li>
        <li> Flask API & TensorFlow Serving for <strong>real-time inference</strong>.</li>
        <li> Integrated with <strong>hospital EMR systems</strong> for <strong>clinical use</strong>.</li>
    </ul>

    <h3>📊 Key Insights and Results</h3>
    <ul>
        <li> <strong>High Classification Accuracy:</strong> 93.7% test accuracy.</li>
        <li> <strong>Balanced Dataset:</strong> SMOTE helped improve model reliability.</li>
        <li> <strong>Fast Inference Speed:</strong> Optimized CNN reduces MRI scan processing time.</li>
        <li> <strong>Clinical Relevance:</strong> Useful for early-stage Alzheimer’s detection.</li>
    </ul>

    <h3>🛠 Tools & Technologies Used</h3>
    <ul>
        <li> <strong>Python, TensorFlow, Keras, NumPy, Pandas</strong></li>
        <li> <strong>Convolutional Neural Networks (CNNs)</strong></li>
        <li> <strong>OpenCV, ImageDataGenerator, SMOTE</strong></li>
        <li> <strong>Flask API, TensorFlow Lite (TFLite), Google Cloud</strong></li>
    </ul>

    <h3>🏆 Achievements</h3>
    <ul>
        <li> Built a <strong>high-accuracy CNN model</strong> for Alzheimer’s detection.</li>
        <li> Achieved <strong>93.7% accuracy</strong>, outperforming traditional methods.</li>
        <li> Successfully <strong>classified MRI brain scans</strong> into four AD stages.</li>
        <li> Integrated <strong>SMOTE for class balancing</strong>, improving reliability.</li>
    </ul>
        `,
        4: `
      <h2>📊 Hand Gesture Recognition System</h2>
    <p>
        This project focuses on developing a real-time <strong>gesture-based communication system</strong> using 
        <strong>MediaPipe, OpenCV, and LSTM Neural Networks</strong>. The system enhances 
        <strong>human-computer interaction</strong> by accurately recognizing hand gestures, particularly benefiting 
        <strong>speech-impaired individuals</strong>. By leveraging <strong>AI-driven methodologies</strong>, the project facilitates 
        <strong>gesture-to-text translation</strong>, improving accessibility and real-time communication.
    </p>

    <h3>👥 Team Members</h3>
    <ul>
        <li><strong>Soham Vasudeo</strong></li>
        <li><strong>Om Agrawal</strong></li>
        <li><strong>Vanshaj Ajmera</strong></li>
        <li><strong>Shardul Patki</strong></li>
        <li><strong>Ritika Shetty</strong></li>
    </ul>
    <p><strong>Course:</strong> Machine Learning Project 2022-23 | <strong>Institution:</strong> NMIMS University</p>

    <h3>🎯 Objectives</h3>
    <ul>
        <li> Enable <strong>gesture-based communication</strong> for speech-impaired individuals.</li>
        <li> Implement a <strong>real-time detection system</strong> with high accuracy and low latency.</li>
        <li> Develop a <strong>scalable and adaptable model</strong> to recognize additional gestures.</li>
        <li> Enhance <strong>human-computer interaction</strong> through gesture-controlled systems.</li>
    </ul>

    <h3>🗂 Data Understanding</h3>
    <p>The project leverages <strong>gesture-based image data</strong> to train and optimize the model for accurate recognition.</p>

    <h4>📌 Dataset Components:</h4>
    <ul>
        <li><strong>Hand Gesture Images:</strong> Captured using <strong>MediaPipe Hands</strong> for training.</li>
        <li><strong>Keypoints Extraction:</strong> 21 hand landmarks recorded for precise motion tracking.</li>
        <li><strong>Predefined Gestures Recognized:</strong>
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
        <li>Variations in <strong>Lighting & Backgrounds</strong> – Improved model robustness.</li>
        <li>Real-Time Processing Constraints – Optimized inference time.</li>
        <li>Multi-Gesture Recognition – Supports dynamic learning of new gestures.</li>
    </ul>

    <h3>⚙️ Data Preparation</h3>
    <ul>
        <li> Removed noisy and distorted images.</li>
        <li> Standardized gesture images to a <strong>consistent resolution</strong>.</li>
        <li> Applied <strong>image augmentation</strong> (rotation, scaling) for better generalization.</li>
    </ul>

    <h3>🧠 Modeling</h3>
    <ul>
        <li> <strong>MediaPipe Hands:</strong> Detects <strong>21 keypoints</strong> for each hand.</li>
        <li> <strong>OpenCV Preprocessing:</strong> Converts images into feature arrays.</li>
    </ul>
    <h4>🤖 Deep Learning Models for Gesture Classification:</h4>
    <ul>
        <li> <strong>LSTM (Long Short-Term Memory):</strong> Captures sequential dependencies.</li>
        <li> <strong>CNN (Convolutional Neural Networks):</strong> Extracts spatial patterns.</li>
        <li> <strong>ANN (Artificial Neural Networks):</strong> Classifies gesture patterns efficiently.</li>
    </ul>

    <h3>📈 Model Evaluation</h3>
    <ul>
        <li> <strong>Accuracy:</strong> 87.5% on the test dataset.</li>
        <li> <strong>Precision & Recall:</strong> Ensures minimal false positives.</li>
        <li> <strong>F1-Score:</strong> Balances precision and recall.</li>
        <li> <strong>Processing Time:</strong> ~3.81 ms per frame (real-time execution).</li>
    </ul>

    <h3>🚀 Deployment Strategy</h3>
    <ul>
        <li> Supports <strong>Raspberry Pi, AWS, Google Cloud</strong>.</li>
        <li> <strong>Automated Data Collection & Preprocessing</strong> for scalability.</li>
        <li> <strong>Flask API / FastAPI:</strong> Enables real-time communication.</li>
        <li> <strong>TFLite for Mobile Deployment:</strong> Optimized for mobile devices.</li>
        <li> <strong>Feedback Loop:</strong> Allows users to <strong>add new gestures dynamically</strong>.</li>
    </ul>

    <h3>📊 Key Insights and Results</h3>
    <ul>
        <li> <strong>High Recognition Accuracy:</strong> 96.4% accuracy on test data.</li>
        <li> <strong>Fast Processing Speed:</strong> Real-time recognition at <strong>~3.81 ms per frame</strong>.</li>
        <li> <strong>User-Friendly Interface:</strong> Gesture-to-text translation for assistive communication.</li>
        <li> <strong>Expandable Gesture Set:</strong> New gestures can be <strong>added dynamically</strong>.</li>
    </ul
        `,
        5: `
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
    
        6: `
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


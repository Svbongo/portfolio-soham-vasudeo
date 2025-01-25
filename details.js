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

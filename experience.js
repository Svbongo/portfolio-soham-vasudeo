// Function to handle sidebar item selection
function showExperience(company) {
    // Get all sidebar items
    const sidebarItems = document.querySelectorAll(".sidebar ul li");

    // Remove active class from all items
    sidebarItems.forEach(item => {
        item.classList.remove("active");
    });

    // Find the correct item and add the active class
    const selectedItem = [...sidebarItems].find(item => 
        item.getAttribute("onclick").includes(company)
    );
    if (selectedItem) {
        selectedItem.classList.add("active");
    }

    // Content update logic
    const experiences = {
        atos: `
            <h2>Atos Syntel</h2>
            <div class="details">
                <p><strong>Date:</strong> May 2023 - July 2023</p>
                <p><strong>Location:</strong> India</p>
            </div>
            <div class="description">
                <ul>
                    <li>Developed a Healthcare Data Platform leveraging Azure, integrating Python and Django to modify patient workflows, enhance data access, and drive data-driven decision-making.</li><br>
                    <li>Engineered an automated blood report processing solution using Python and Django, ensuring seamless integration with Azure Data Lake for secure and efficient data handling.</li><br>
                    <li>Utilized Azure Open-AI services to deliver AI-driven diagnosis summaries and treatment recommendations, revamping clinical efficiency and supporting informed decision-making.</li>
                </ul>
            </div>
        `,
        fanden: `
            <h2>FanDen</h2>
            <div class="details">
                <p><strong>Date:</strong> August 2021 - August 2022</p>
                <p><strong>Location:</strong> India</p>
            </div>
            <div class="description">
                <ul>
                    <li>Directed a cross-functional team of five to revamp an event booking website using the MERN stack, boosting user experience and increasing platform engagement.</li><br>
                    <li>Led design and deployment of a CRM system with admin and coordinator access, optimizing backend operations and improving data-driven customer management.</li><br>
                    <li>Implemented an advanced QR code-based order confirmation system, reducing venue entry wait times by 25% and boosting operational efficiency.</li>
                </ul>
            </div>
        `,
        brandbuddiez: `
            <h2>BrandBuddiez</h2>
            <div class="details">
                <p><strong>Date:</strong> April 2021 - June 2021</p>
                <p><strong>Location:</strong> India</p>
            </div>
            <div class="description">
                <ul>
                    <li>Collaborated with the CTO to enhance company's digital presence by optimizing website and improving platforms used by major electronics clients.</li><br>
                    <li>Designed UML diagrams to document and revise supply chain workflows, driving process clarity from order generation to customer delivery.</li><br>
                    <li>Developed automated order generation using Python and Multivariate Data Analysis, providing actionable insights to aid in decision-making.</li><br>
                    <li>Created Power BI dashboards to track sales KPIs across 2 regions and several product categories, driving data-informed business strategies.</li>
                </ul>
            </div>
        `
    };

    // Update the content area with the selected experience
    document.getElementById("experience-content").innerHTML = experiences[company];
}

// Automatically load the first experience on window load
window.onload = function() {
    showExperience('atos');  // Load the first experience by default
};

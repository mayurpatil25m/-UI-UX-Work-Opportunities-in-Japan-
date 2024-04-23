// Dummy job data
const jobListings = [
    { title: 'Software Engineer', company: 'Tech Japan Inc.', location: 'Tokyo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'English Teacher', company: 'ABC English School', location: 'Osaka', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Marketing Manager', company: 'Global Marketing Solutions', location: 'Kyoto', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
];

// Function to display job listings
function displayJobListings() {
    const jobListingsContainer = document.getElementById('job-listings-container');
    jobListingsContainer.innerHTML = '';

    jobListings.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
        `;
        jobListingsContainer.appendChild(jobCard);
    });
}

// Function to filter job listings
function filterJobListings(searchTerm) {
    const filteredListings = jobListings.filter(job => {
        return job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
               job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
               job.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const jobListingsContainer = document.getElementById('job-listings-container');
    jobListingsContainer.innerHTML = '';

    if (filteredListings.length === 0) {
        jobListingsContainer.innerHTML = '<p>No job listings found.</p>';
    } else {
        filteredListings.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('job-card');
            jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p>${job.description}</p>
            `;
            jobListingsContainer.appendChild(jobCard);
        });
    }
}

// Display job listings on page load
window.addEventListener('load', displayJobListings);

// Filter job listings when search button is clicked
document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.trim();
    if (searchTerm !== '') {
        filterJobListings(searchTerm);
    } else {
        displayJobListings();
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const langSelector = document.querySelector("#lang-selector");
    const htmlElement = document.querySelector("html");

    langSelector.addEventListener("change", function() {
        const selectedLang = this.value;
        htmlElement.setAttribute("lang", selectedLang);

        // Update text content based on selected language
        updateTextContent(selectedLang);
    });

    function updateTextContent(lang) {
        const elements = document.querySelectorAll("[data-en], [data-jp]");
        elements.forEach(element => {
            if (lang === "en") {
                element.textContent = element.dataset.en;
            } else if (lang === "jp") {
                element.textContent = element.dataset.jp;
            }
        });
    }
});


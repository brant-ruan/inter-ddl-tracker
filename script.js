// Conference data (manually imported from JSON files)
const CONFERENCES = [
    {
        "acronym": "AEJMC",
        "full_name": "AEJMC 108th Annual Conference",
        "year": 2025,
        "location": "San Francisco, USA",
        "deadline": "2025-04-02T04:59:00Z",
        "website": "https://community.aejmc.org/conference/home",
        "submission_link": "https://community.aejmc.org/conference/paper-competition/papercall",
        "category": "Communication",
    },
    {
        "acronym": "AEJMC (Extended Abstracts)",
        "full_name": "AEJMC 108th Annual Conference",
        "year": 2025,
        "location": "San Francisco, USA",
        "deadline": "2025-04-02T04:59:00Z",
        "website": "https://community.aejmc.org/conference/home",
        "submission_link": "https://community.aejmc.org/conference/paper-competition/papercall",
        "category": "Communication",
    },
    {
        "acronym": "IAMCR",
        "full_name": "International Association for Media and Communication Research",
        "year": 2025,
        "location": "Singapore",
        "deadline": "2025-02-07T23:59:00Z",
        "website": "https://iamcr.org/singapore2025",
        "submission_link": "https://iamcr.org/singapore2025/cfp",
        "category": "Communication",
    },
    {
        "acronym": "ICA",
        "full_name": "76th Annual ICA Conference",
        "year": 2026,
        "location": "Cape Town, South Africa",
        "deadline": "2025-11-01T16:00:00Z",
        "website": "https://www.icahdq.org/mpage/ICA26",
        "submission_link": "https://centerforinterculturaldialogue.org/2025/07/04/cfp-ica-2026-communication-and-inequalities-in-context-south-africa/",
        "category": "Communication",
    },
    {
        "acronym": "NCA",
        "full_name": "NCA 111th Annual Convention",
        "year": 2025,
        "location": "Denver, USA",
        "deadline": "2025-04-01T06:59:00Z",
        "website": "https://www.natcom.org/111-annual-convention/",
        "submission_link": "https://www.natcom.org/call-for-submissions",
        "category": "Communication",
    },
    {
        "acronym": "FAccT",
        "full_name": "ACM Conference on Fairness, Accountability, and Transparency",
        "year": 2025,
        "location": "Athens, Greece",
        "abstract_deadline": "2025-01-15T23:59:00Z",
        "deadline": "2025-01-22T23:59:00Z",
        "website": "https://facctconference.org/",
        "submission_link": "https://facctconference.org/2025/cfp",
        "category": "N/A",
    },
    {
        "acronym": "ARES",
        "full_name": "20th International Conference on Availability, Reliability and Security",
        "year": 2025,
        "location": "Vienna, Austria",
        "deadline": "2025-03-11T23:59:00Z",
        "website": "https://2025.ares-conference.eu/",
        "submission_link": "https://2025.ares-conference.eu/call-for-papers/",
        "category": "N/A",
    },
    {
        "acronym": "NeurIPS",
        "full_name": "39th Annual Conference on Neural Information Processing Systems",
        "year": 2025,
        "location": "San Diego, USA",
        "abstract_deadline": "May 11, 2025 AoE",
        "deadline": "May 15, 2025 AoE",
        "website": "https://neurips.cc/",
        "submission_link": "https://neurips.cc/Conferences/2025/CallForPapers",
        "category": "AI",
    },
    {
        "acronym": "NeurIPS (Position)",
        "full_name": "39th Annual Conference on Neural Information Processing Systems",
        "year": 2025,
        "location": "San Diego, USA",
        "abstract_deadline": "May 8, 2025 AoE",
        "deadline": "May 22, 2025 AoE",
        "website": "https://neurips.cc/",
        "submission_link": "https://neurips.cc/Conferences/2025/CallForPositionPapers",
        "category": "N/A",
    },
    {
        "acronym": "ICML (Position)",
        "full_name": "42th Annual International Conference on Machine Learning",
        "year": 2025,
        "location": "Vancouver, Canada",
        "abstract_deadline": "Jan 23, 2025 AoE",
        "deadline": "Jan 30, 2025 AoE",
        "website": "https://icml.cc/",
        "submission_link": "https://icml.cc/Conferences/2025/CallForPositionPapers",
        "category": "N/A",
    },
    {
        "acronym": "ICLR",
        "full_name": "13th International Conference on Learning Representations",
        "year": 2025,
        "location": "Vancouver, Canada",
        "abstract_deadline": "Sep 27, 2024 AoE",
        "deadline": "Oct 1, 2024 AoE",
        "website": "https://iclr.cc/",
        "submission_link": "https://iclr.cc/Conferences/2025/CallForPapers",
        "category": "AI",
    },
    {
        "acronym": "AAAI",
        "full_name": "40th Annual AAAI Conference on Artificial Intelligence",
        "year": 2026,
        "location": "Singapore",
        "abstract_deadline": "Jul 25, 2025 AoE",
        "deadline": "Aug 1, 2025 AoE",
        "website": "https://aaai.org/conference/aaai/aaai-26/",
        "submission_link": "https://aaai.org/conference/aaai/aaai-26/main-technical-track-call/",
        "category": "AI",
    },
    {
        "acronym": "CHI",
        "full_name": "ACM CHI conference on Human Factors in Computing Systems",
        "year": 2026,
        "location": "Barcelona, Spain",
        "abstract_deadline": "Sep 04, 2025 AoE",
        "deadline": "Sep 11, 2025 AoE",
        "website": "https://chi2026.acm.org/",
        "submission_link": "https://chi2026.acm.org/authors/papers/",
        "category": "HCI",
    },
    // {
    //     "acronym": "AAAI (AI for Social Impact)",
    //     "full_name": "40th Annual AAAI Conference on Artificial Intelligence",
    //     "year": 2026,
    //     "location": "Singapore",
    //     "abstract_deadline": "Jul 25, 2025 AoE",
    //     "deadline": "Aug 1, 2025 AoE",
    //     "website": "https://aaai.org/conference/aaai/aaai-26/",
    //     "submission_link": "https://aaai.org/conference/aaai/aaai-26/aisi-call/",
    //     "category": "N/A",
    // },
    // {
    //     "acronym": "AAAI (AI Alignment)",
    //     "full_name": "40th Annual AAAI Conference on Artificial Intelligence",
    //     "year": 2026,
    //     "location": "Singapore",
    //     "abstract_deadline": "Jul 25, 2025 AoE",
    //     "deadline": "Aug 1, 2025 AoE",
    //     "website": "https://aaai.org/conference/aaai/aaai-26/",
    //     "submission_link": "https://aaai.org/conference/aaai/aaai-26/aia-call/",
    //     "category": "N/A",
    // },
];

// DOM Elements
const conferencesContainer = document.getElementById('conferences-container');

// Main function to load and display conferences
function loadConferences(showClosed = true, showAIOnly = false) {
    // Clear existing cards
    conferencesContainer.innerHTML = '';
    
    // Sort conferences by deadline (soonest first) using AoE-aware parser
    const sortedConferences = [...CONFERENCES].sort((a, b) => 
        parseDateWithAoE(a.deadline) - parseDateWithAoE(b.deadline));

    // Check if all conferences are closed
    const allClosed = sortedConferences.every(conf => 
        parseDateWithAoE(conf.deadline) < new Date());

    // Show empty state if all closed and not showing closed
    if (allClosed && !showClosed) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <p>Currently there are no conferences open for submission.</p>
            <p>Check back later or toggle "Show closed submissions" to view past deadlines.</p>
        `;
        conferencesContainer.appendChild(emptyState);
        return;
    }

    // Create and display conference cards
    sortedConferences.forEach(conference => {
        const isExpired = parseDateWithAoE(conference.deadline) < new Date();
        const isAI = conference.category === 'AI';
        
        if ((showClosed || !isExpired) && (showAIOnly || !isAI)) {
            const card = createConferenceCard(conference);
            conferencesContainer.appendChild(card);
        }
    });

    // Start countdown timers
    updateAllCountdowns();
    setInterval(updateAllCountdowns, 1000);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadConferences(false, false);
    
    // Add event listeners for checkboxes
    const showClosedCheckbox = document.getElementById('show-closed');
    const showAICheckbox = document.getElementById('show-ai');
    
    showClosedCheckbox.addEventListener('change', (e) => {
        loadConferences(e.target.checked, showAICheckbox.checked);
    });
    
    showAICheckbox.addEventListener('change', (e) => {
        loadConferences(showClosedCheckbox.checked, e.target.checked);
    });
});

// Parse date string with AoE (UTC-12) timezone support
function parseDateWithAoE(dateString) {
    if (dateString.includes('AoE')) {
        // Extract date parts from "May 11, 2025 AoE"
        const dateParts = dateString.split(' ');
        const month = new Date(`${dateParts[0]} 1, 2023`).getMonth();
        const day = parseInt(dateParts[1].replace(',', ''));
        const year = parseInt(dateParts[2]);
        
        // Create date in UTC-12 (AoE timezone)
        const aoeDate = new Date(Date.UTC(year, month, day, 23, 59, 0));
        // AoE is UTC-12, so add 12 hours to get UTC equivalent
        aoeDate.setHours(aoeDate.getHours() + 12);
        return aoeDate;
    }
    return new Date(dateString);
}

// Create HTML element for a conference
function createConferenceCard(conference) {
    const card = document.createElement('div');
    card.className = 'conference-card';

    const deadlineDate = parseDateWithAoE(conference.deadline);
    const formattedDate = deadlineDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });

    let abstractDeadlineHTML = '';
    if (conference.abstract_deadline) {
        const abstractDeadlineDate = parseDateWithAoE(conference.abstract_deadline);
        const formattedAbstractDate = abstractDeadlineDate.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });
        abstractDeadlineHTML = `<p class="abstract-deadline"><strong>Abstract Deadline:</strong> ${formattedAbstractDate}</p>`;
    }

    const isExpired = parseDateWithAoE(conference.deadline) < new Date();
    const closedText = '';
    
    card.innerHTML = `
        <div class="card-header">
            <h2 class="conference-name">
                ${conference.acronym} ${conference.year}${closedText}
            </h2>
            <span class="toggle-icon">-</span>
        </div>
        <div class="card-content">
            <div class="conference-details">
                <div class="conference-meta">
                    <p>${conference.full_name}</p>
                    <p><strong>Year:</strong> ${conference.year} | <strong>Location:</strong> ${conference.location}</p>
                    ${abstractDeadlineHTML}
                    <p><strong>Deadline:</strong> ${formattedDate}</p>
                </div>
                <div class="countdown" data-deadline="${conference.deadline}">
                    ${isExpired ? 'Submission Closed' : 'Calculating...'}
                </div>
            </div>
            <div class="links">
                <a href="${conference.website}" target="_blank">Conference Website</a>
                <a href="${conference.submission_link}" target="_blank">Submission Page</a>
            </div>
        </div>
    `;

    // Add click handler for toggling
    const header = card.querySelector('.card-header');
    header.addEventListener('click', () => {
        const content = card.querySelector('.card-content');
        const icon = card.querySelector('.toggle-icon');
        if (content.style.display === 'none') {
            content.style.display = 'block';
            icon.textContent = '-';
        } else {
            content.style.display = 'none';
            icon.textContent = '+';
        }
    });

    return card;
}

// Update all countdown timers on the page
function updateAllCountdowns() {
    const countdownElements = document.querySelectorAll('.countdown');
    const now = new Date();

    countdownElements.forEach(element => {
        const deadline = parseDateWithAoE(element.dataset.deadline);
        const timeRemaining = deadline - now;

        if (timeRemaining <= 0) {
            element.textContent = 'Submission Closed';
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        element.textContent = `${days} days ${hours}h ${minutes}m ${seconds}s`;
    });
}

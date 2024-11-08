let cardIndex = 0;

const descriptions = [
    {
        title: "John Doe",
        position: "Chief Marketing Officer",
        company: "Acme Corp",
        description: "Monotonectally synergize business communities rather than client-centric convergence...",
        image: "images/img1.jpg"
    },
    {
        title: "Jane Doe",
        position: "Chief Engagement Officer",
        company: "Acquia",
        description: "Assertively unleash cross-platform best practices rather than pandemic total linkage...",
        image: "images/img2.jpg"
    },
    {
        title: "Mike Smith",
        position: "Chief Technical Developer",
        company: "Pantheon",
        description: "Synergistically monetize parallel infomediaries whereas 2.0 mindshare...",
        image: "images/img3.jpg"
    },
    {
        title: "Sarah Lee",
        position: "Chief Marketing Officer",
        company: "Specbee",
        description: "Dramatically pursue real-time markets through e-business strategic theme areas...",
        image: "images/img4.jpg"
    }
];

function slideLeft() {
    const container = document.querySelector('.speakers__card-container');
    cardIndex = Math.max(cardIndex - 1, 0);
    container.style.transform = `translateX(-${cardIndex * 200}px)`;
}

function slideRight() {
    const container = document.querySelector('.speakers__card-container');
    cardIndex = Math.min(cardIndex + 1, descriptions.length - 1);
    container.style.transform = `translateX(-${cardIndex * 200}px)`;
}

function showDetails(index) {
    // Populate the speaker details section
    document.getElementById("details-name").textContent = descriptions[index].title;
    document.getElementById("details-position").textContent = descriptions[index].position;
    document.getElementById("details-company").textContent = descriptions[index].company;
    document.getElementById("details-description").textContent = descriptions[index].description;

    // Set the speaker image
    document.getElementById("details-image").src = descriptions[index].image;

    // Show the details section
    const detailsSection = document.getElementById("speaker-details");
    detailsSection.style.display = "block";
}

function closeDetails() {
    // Hide the details section
    const detailsSection = document.getElementById("speaker-details");
    detailsSection.style.display = 'none';
}


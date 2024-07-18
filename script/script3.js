// Array of objects representing card data
const cardsData = [
    {
        title: "Card 1",
        text: "Some content for Card 1.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        title: "Card 2",
        text: "Some content for Card 2.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        title: "Card 3",
        text: "Some content for Card 3.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        title: "Card 4",
        text: "Some content for Card 4.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        title: "Card 5",
        text: "Some content for Card 5.",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        title: "Card 6",
        text: "Some content for Card 6.",
        imageUrl: "https://via.placeholder.com/150"
    }
];

// Function to create a Bootstrap card based on data
function createCard(cardData) {
    // Create card elements
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.style.maxWidth = "540px";

    const cardContent = `
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${cardData.imageUrl}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${cardData.title}</h5>
            <p class="card-text">${cardData.text}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    `;

    card.innerHTML = cardContent;

    return card;
}

// Function to initialize and append cards on page load
window.onload = function () {
    const cardContainer = document.getElementById("cardContainer");
    const searchInput = document.getElementById("searchInput");

    // Function to filter cards based on search input
    function filterCards(searchTerm) {
        // Clear existing cards
        cardContainer.innerHTML = "";

        // Filter cardsData based on search term
        const filteredCards = cardsData.filter(function (cardData) {
            return cardData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                cardData.text.toLowerCase().includes(searchTerm.toLowerCase());
        });

        // Create and append filtered cards
        filteredCards.forEach(function (cardData) {
            const card = createCard(cardData);
            cardContainer.appendChild(card);
        });
    }

    // Initial load of cards
    filterCards("");

    // Event listener for input change
    searchInput.addEventListener("input", function () {
        filterCards(searchInput.value);
    });
};

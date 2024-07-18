document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            group: "web",
            iconClass: "fas fa-clock servicesIcon",
            title: "Website Development",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            group: "web",
            iconClass: "fas fa-layer-group servicesIcon",
            title: "Website Design",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            group: "web",
            iconClass: "far fa-check-circle servicesIcon",
            title: "Website Deployment",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            group: "mobile",
            iconClass: "fas fa-search servicesIcon",
            title: "SEO",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            group: "web",
            iconClass: "fas fa-shield-alt servicesIcon",
            title: "DevOps",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            group: "mobile",
            iconClass: "fas fa-wrench servicesIcon",
            title: "QA",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
    ];

    // Function to generate service cards
    function generateServices(services) {
        let servicesContainer = document.getElementById("services-container");
        let servicesHTML = "";

        services.forEach(service => {
            servicesHTML += `
              <div class="col-lg-4 mt-4 ${service.group}">
                <div class="card servicesText">
                  <div class="card-body">
                    <i class="${service.iconClass}"></i>
                    <h4 class="card-title mt-3">${service.title}</h4>
                    <p class="card-text mt-3">${service.description}</p>
                  </div>
                </div>
              </div>
            `;
        });

        servicesContainer.innerHTML = servicesHTML;
    }

    // Call the function to generate services on page load
    generateServices(services);

    // Function to filter services based on group
    function filterServices(group) {
        const serviceCards = document.querySelectorAll('.servicesText');
        serviceCards.forEach(card => {
            const cardGroup = card.parentElement.classList;
            if (group === 'all' || cardGroup.contains(group)) {
                card.parentElement.style.display = 'block';
            } else {
                card.parentElement.style.display = 'none';
            }
        });
    }

    // Add event listeners to filter buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const group = this.dataset.group;
            filterServices(group);
        });
    });

    // Show all services initially
    document.getElementById('showAll').addEventListener('click', function () {
        filterServices('all');
    });
});

// Sample data object for company price plan
const pricePlans = [
    { service: "Web Development", price: "$1000" },
    { service: "SEO Services", price: "$500" },
    { service: "Graphic Design", price: "$800" },
    { service: "Mobile App Development", price: "$1200" },
    { service: "Cloud Hosting", price: "$150" }
];

// Function to populate modal with price plans
function show_modal() {
    let modalBody = document.getElementById("pricePlansBody");

    // Clear previous content
    modalBody.innerHTML = "";

    // Iterate through pricePlans array and create rows for each entry
    pricePlans.forEach(plan => {
        modalBody.innerHTML += `
          <tr>
            <td>${plan.service}</td>
            <td>${plan.price}</td>
          </tr>
        `;
    });
}
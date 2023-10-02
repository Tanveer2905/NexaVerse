// static/script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");

    // Toggle the sidebar when the menu icon is clicked
    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target) && sidebar.classList.contains("active")) {
            sidebar.classList.remove("active");
        }
    });
});


// Get dialog box and restaurant info elements
const dialogBox = document.getElementById("dialog-box");
const dialogText = document.getElementById("dialog-text");
const teacherInfo = document.getElementById("vehicle-info");
const teacherName = document.getElementById("vehicle-name");
const teacherDescription = document.getElementById("vehicle-description");
const teacherRating = document.getElementById("vehicle-rating");

// Get all result items and add hover event listeners
const resultItems = document.querySelectorAll(".result-item");
resultItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        // Get the vehicle name from the hovered result item
        const vehicleNameText = item.getAttribute("data-vehicle-name");
        const vehicle = vehicle.find((t) => t.name === vehicleNameText);

        if (vehicle) {
            // Populate the restraunt information
            restrauntName.textContent = restraunt.name;
            restrauntDescription.textContent = restraunt.description;
            restrauntRating.textContent = `Rating: ${restraunt.rating}`;
            
            // Position the restraunt info near the result item
            const rect = item.getBoundingClientRect();
            vehicleInfo.style.top = rect.bottom + "px";
            vehicleInfo.style.left = rect.left + "px";
            vehicleInfo.style.display = "block"; // Show the restraunt info
        }
    });

    item.addEventListener("mouseout", () => {
        // Hide the r3estraunt info when the mouse leaves the result item
        vehicleInfo.style.display = "none";
    });
});
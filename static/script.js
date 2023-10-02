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

    // Get the search form and learning mode question elements
    const searchForm = document.getElementById("search-form");
    const learningModeQuestion = document.getElementById("learning-mode-question");
    const nextButton = document.getElementById("next-button");

    // Get result elements
    const result = document.getElementById("result");
    const topicHighlight = document.getElementById("topic-highlight");
    const learningModeHighlight = document.getElementById("learning-mode-highlight");
    const bestTeacher = document.getElementById("best-teacher");

    // Listen for the form submission event
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Hide the search form and show the learning mode question
        searchForm.style.display = "none";
        learningModeQuestion.style.display = "block";
    });

    // Handle the "Next" button click event
    nextButton.addEventListener("click", function () {
        // Get the selected learning mode
        const learningMode = document.getElementById("learning-mode").value;

        // Get the entered topic and convert it to lowercase
        const topic = document.getElementById("topic").value.toLowerCase();

        // Fetch the best teacher data based on topic and learning mode
        fetch(`/get_best_teacher?topic=${topic}&learning_mode=${learningMode}`)
            .then((response) => response.json())
            .then((data) => {
                const bestTeachers = data.best_teachers;

                if (Array.isArray(bestTeachers) && bestTeachers.length > 0) {
                    // Update the result display with the list of best teachers
                    topicHighlight.textContent = topic;
                    learningModeHighlight.textContent = learningMode;

                    const teacherList = document.createElement("ul"); // Create a <ul> element

                    bestTeachers.forEach((teacher) => {
                        const teacherItem = document.createElement("li"); // Create a <li> element for each teacher
                        teacherItem.textContent = teacher;
                        teacherList.appendChild(teacherItem); // Append the <li> to the <ul>
                    });

                    bestTeacher.innerHTML = ""; // Clear previous content
                    bestTeacher.appendChild(teacherList); // Append the <ul> to the result element

                    result.style.display = "block"; // Show the result
                } else {
                    // No teachers found
                    bestTeacher.textContent = "No teachers found for this topic and learning mode.";
                    result.style.display = "block"; // Show the result
                }
            })
            .catch((error) => {
                console.error("Error fetching teacher data:", error);
                // Handle the error as needed, e.g., display an error message
            });
    });

});



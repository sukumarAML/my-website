// Display current year automatically

document.getElementById("year").textContent =
    new Date().getFullYear();


// Project button

function showProject(projectName) {

    alert(
        "You selected: " +
        projectName +
        "\n\nProject details can be added here."
    );

}

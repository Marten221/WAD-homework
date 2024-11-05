// Function to toggle the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Close the dropdown if clicked outside of it
window.onclick = function(event) {
    if (!event.target.closest('.user-menu')) {
        document.getElementById("dropdown-menu").style.display = "none";
    }
};

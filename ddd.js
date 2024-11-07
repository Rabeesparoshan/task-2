// Toggle the dashboard menu visibility
document.getElementById('dashboard-toggle').addEventListener('click', function() {
    const menu = document.getElementById('dashboard-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
document.getElementById("dashboard-icon").addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents click from bubbling up
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close Dropdown if Clicked Outside
document.addEventListener("click", function(event) {
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    }
});
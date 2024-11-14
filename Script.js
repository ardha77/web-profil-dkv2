const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

sidebar.style.right = '-250px';

menuToggle.addEventListener('click', function(event) {

    if (sidebar.style.right === '-250px') {
        sidebar.style.right = '0';
    } else {
        sidebar.style.right = '-250px';
    }
});

document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.style.right = '-250px';
    }
});

toggleVisibility(passwordField1, toggleImage1);
toggleVisibility(passwordField2, toggleImage2);


function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay');

    // Menampilkan popup dan overlay
    popup.style.display = 'block';
    overlay.style.display = 'block';

    // Event listener pada overlay untuk menutup popup
    overlay.onclick = function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    };
}

// Fungsi untuk menutup semua popup saat overlay diklik
function closeAllPopups() {
    const popups = document.querySelectorAll('.bio-popup');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
    document.getElementById('overlay').style.display = 'none';
}

// Event listener untuk menutup semua popup saat overlay diklik
document.getElementById('overlay').addEventListener('click', closeAllPopups);


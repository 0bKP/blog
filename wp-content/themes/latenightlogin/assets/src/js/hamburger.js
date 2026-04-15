function toggleMenu() {
    var menu = document.getElementById("navbarMenu");
    var hamburger = document.getElementById("hamburger");
    var overlay = document.getElementById("menuOverlay");

    menu.classList.toggle("responsive");
    hamburger.classList.toggle("open");
    //overlay.classList.toggle("active");

    document.body.classList.toggle("no-scroll");
}

// Zamykanie po kliknięciu w link
document.querySelectorAll('#navbarMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navbarMenu").classList.remove("responsive");
        document.getElementById("hamburger").classList.remove("open");
        //document.getElementById("menuOverlay").classList.remove("active");

        document.body.classList.remove("no-scroll");
    });
});
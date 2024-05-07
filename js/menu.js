function header() {
    let mainNav = document.getElementById("mainNav");

    function toggleMenu() {
        if (mainNav.style.display === "none" || mainNav.style.display === "") {
            mainNav.style.display = "block";
        } else {
            mainNav.style.display = "none";
        }
    }

    document.getElementById("hb").onclick = toggleMenu;
}

window.addEventListener('load', header);

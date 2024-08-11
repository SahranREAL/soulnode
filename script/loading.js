window.onload = function() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit === today) {
        document.getElementById("loadingScreen").style.display = "none";
    } else {
        localStorage.setItem("lastVisit", today);
        setTimeout(function() {
            document.getElementById("loadingScreen").style.display = "none";
        }, 5000);
    }
};

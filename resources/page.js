
window.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= 90) {
            document.getElementById("page_header").classList.add("scroll-background");
        } else {
            document.getElementById("page_header").classList.remove("scroll-background");
        }
    });

});
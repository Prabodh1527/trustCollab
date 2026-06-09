window.logout = function(){

    if(confirm(
        "Are you sure you want to logout?"
    )){

        window.location.href = "/pages/auth/index.html";

    }

}
fetch("../../components/sidebar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("sidebar-container").innerHTML = data;

        const currentPage = window.location.pathname;

        const navButtons =
            document.querySelectorAll(".nav-btn");

        navButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        if(currentPage.includes("dashboard")){
            navButtons[0].classList.add("active");
        }
        else if(currentPage.includes("groups")){
            navButtons[1].classList.add("active");
        }
        else if(currentPage.includes("files")){
            navButtons[2].classList.add("active");
        }
        else if(currentPage.includes("ai")){
            navButtons[3].classList.add("active");
        }
        else if(currentPage.includes("security")){
            navButtons[4].classList.add("active");
        }
        else if(currentPage.includes("settings")){
            navButtons[5].classList.add("active");
        }

    });
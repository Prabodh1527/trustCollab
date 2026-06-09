fetch("../../components/settings-sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById(
            "settings-sidebar-container"
        ).innerHTML = data;
    });
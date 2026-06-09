function logoutAllDevices(){

    if(confirm("Sign out from all devices?")){
        alert("All sessions revoked successfully.");
    }

}

function transferOwnership(){

    alert(
        "Ownership transfer workflow will be connected to backend later."
    );

}

function deleteWorkspace(){

    const confirmDelete =
    confirm(
        "Are you sure you want to permanently delete this workspace?"
    );

    if(confirmDelete){

        alert(
            "Workspace deletion request submitted."
        );

    }

}

function deleteAccount(){

    const confirmDelete =
    confirm(
        "WARNING: This action cannot be undone.\n\nDelete account?"
    );

    if(confirmDelete){

        alert(
            "Account deletion request submitted."
        );

    }

}

document.addEventListener("DOMContentLoaded", () => {

    // CONNECT BUTTONS

    document.querySelectorAll(".primary-btn").forEach(button => {

        button.addEventListener("click", () => {

            const service =
                button.textContent.replace("Connect ", "");

            alert(
                `${service} integration will be connected to backend later.`
            );

        });

    });

    // DISCONNECT BUTTONS

    document.querySelectorAll(".danger-btn").forEach(button => {

        button.addEventListener("click", () => {

            const confirmDisconnect = confirm(
                "Are you sure you want to disconnect this account?"
            );

            if(confirmDisconnect){

                alert(
                    "Account disconnected successfully."
                );

            }

        });

    });

    // SYNC BUTTONS

    document.querySelectorAll(".secondary-btn").forEach(button => {

        button.addEventListener("click", () => {

            alert(
                "Synchronization completed successfully."
            );

        });

    });

    // SETTINGS MENU

    document.querySelectorAll(".settings-menu-item").forEach(item => {

        item.addEventListener("click", () => {

            document
                .querySelectorAll(".settings-menu-item")
                .forEach(btn => btn.classList.remove("active"));

            item.classList.add("active");

        });

    });

});
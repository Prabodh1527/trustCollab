function triggerAction(actionName){

    alert(
        `Interactive Routing Action:
Initializing the ${actionName} system wrapper...`
    );

}

function confirmLogout(){

    const result = confirm(
        "Are you sure you want to logout?"
    );

    if(result){

        window.location.href =
        "../auth/index.html";

    }

}
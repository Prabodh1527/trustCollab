function createGroup() {
    document.getElementById("createGroupModal").style.display = "flex";
}

function joinGroup() {
    document.getElementById("joinGroupModal").style.display = "flex";
}

function closeCreateModal() {
    document.getElementById("createGroupModal").style.display = "none";
}

function closeJoinModal() {
    document.getElementById("joinGroupModal").style.display = "none";
}

function generateGroupCode() {

    const code =
        "TC-" +
        Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();

    document.getElementById("generatedCode").innerText = code;

    document.getElementById("successModal").style.display = "flex";

    closeCreateModal();
}

function closeSuccessModal() {
    document.getElementById("successModal").style.display = "none";
}

function copyCode() {

    const code =
        document.getElementById("generatedCode").innerText;

    navigator.clipboard.writeText(code);

    alert("Group code copied.");
}

function joinGroupWithCode() {

    const code =
        document.getElementById("joinCode").value;

    if(code.trim() === ""){

        alert("Please enter a group code.");

        return;
    }

    alert(
        `Successfully joined group using code: ${code}`
    );

    closeJoinModal();
}

function openWorkspace(groupName){

    window.location.href =
    "workspace.html";

}
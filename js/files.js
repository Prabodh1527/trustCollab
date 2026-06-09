// UPLOAD MODAL

function openUploadModal() {
    document.getElementById("uploadModal").style.display = "flex";
}

function closeUploadModal() {
    document.getElementById("uploadModal").style.display = "none";
}

// FOLDER MODAL

function openFolderModal() {
    document.getElementById("folderModal").style.display = "flex";
}

function closeFolderModal() {
    document.getElementById("folderModal").style.display = "none";
}

// UPLOAD FILE

function uploadFile() {

    const file =
        document.getElementById("fileInput").files[0];

    if (!file) {
        alert("Please select a file.");
        return;
    }

    alert(file.name + " uploaded successfully.");

    closeUploadModal();
}

// CREATE FOLDER

function createFolder() {

    const folderName =
        document.getElementById("folderName").value;

    if (folderName.trim() === "") {
        alert("Please enter folder name.");
        return;
    }

    const folderGrid =
        document.querySelector(".folder-grid");

    const folder =
        document.createElement("div");

    folder.className = "folder-card";

    folder.innerHTML = "📁 " + folderName;

    folderGrid.appendChild(folder);

    document.getElementById("folderName").value = "";

    closeFolderModal();
}

// FILE ACTIONS

function downloadFile() {
    alert("Download functionality will connect to backend later.");
}

function shareFile() {
    alert("Share functionality will connect to backend later.");
}

function deleteFile() {

    const result =
        confirm("Delete this file?");

    if (result) {
        alert("File deleted successfully.");
    }
}

// AI ASSISTANT

function summarizeFile() {
    alert(
        "AI Summary Feature\n\nThis will summarize uploaded PDFs and documents using AI."
    );
}

function askFileAI() {

    const question =
        prompt("Ask AI about your files");

    if (!question) return;

    alert(
        "AI Response Placeholder\n\nQuestion: " +
        question
    );
}
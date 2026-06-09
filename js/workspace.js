const tabs = document.querySelectorAll(".workspace-tab");

const sections = {
    Chat: document.getElementById("chatSection"),
    Files: document.getElementById("filesSection"),
    Tasks: document.getElementById("tasksSection"),
    Announcements: document.getElementById("announcementsSection"),
    Members: document.getElementById("membersSection")
};

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn =>
            btn.classList.remove("active")
        );

        tab.classList.add("active");

        Object.values(sections).forEach(section => {
            section.style.display = "none";
        });

        const selectedTab =
        tab.textContent.trim();

        sections[selectedTab].style.display =
        "block";

    });

});

document
.getElementById("fileUpload")
?.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        alert(
            `${file.name} selected successfully`
        );

    }

});

function addTask(){

    const taskName = prompt(
        "Enter task name"
    );

    if(!taskName) return;

    const taskContainer =
    document.querySelector("#tasksSection .workspace-card");

    const taskDiv =
    document.createElement("div");

    taskDiv.className = "task-item";

    taskDiv.innerHTML =
    "🆕 " + taskName;

    taskContainer.appendChild(taskDiv);

}

function inviteMember(){

    const memberName = prompt(
        "Enter member name"
    );

    if(!memberName) return;

    const memberContainer =
    document.querySelector("#membersSection .workspace-card");

    const memberDiv =
    document.createElement("div");

    memberDiv.className = "member-item";

    memberDiv.innerHTML =
    "👤 " + memberName;

    memberContainer.appendChild(memberDiv);

}

function addAnnouncement(){

    const announcement = prompt(
        "Enter announcement"
    );

    if(!announcement) return;

    const announcementContainer =
    document.querySelector(
        "#announcementsSection .workspace-card"
    );

    const announcementDiv =
    document.createElement("div");

    announcementDiv.className =
    "announcement-item";

    announcementDiv.innerHTML =
    announcement;

    announcementContainer.appendChild(
        announcementDiv
    );

}

function copyWorkspaceCode(){

    const code =
    document.getElementById(
        "workspaceCode"
    ).innerText;

    navigator.clipboard.writeText(
        code
    );

    alert(
        "Group code copied successfully."
    );

}

function askAI(){

    const question = prompt(
        "Ask Workspace AI"
    );

    if(!question) return;

    alert(
        "AI Assistant:\n\n" +
        "This feature will be connected to Gemini/OpenAI backend later.\n\nQuestion: "
        + question
    );

}

function summarizeWorkspace(){

    alert(
        "Workspace Summary\n\n" +
        "• 4 Open Tasks\n" +
        "• 18 Files\n" +
        "• 5 Members\n" +
        "• Latest activity detected\n" +
        "• Trust Score: 92"
    );

}


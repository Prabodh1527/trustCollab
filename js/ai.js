function showSection(sectionName, selectedCard){

    document
        .querySelectorAll(".section-page")
        .forEach(section => {
            section.style.display = "none";
        });

    document
        .querySelectorAll(".ai-mode-card")
        .forEach(card => {
            card.classList.remove("active");
        });

    selectedCard.classList.add("active");

    if(sectionName === "chat"){
        document.getElementById("chatSection").style.display = "flex";
    }

    else if(sectionName === "pdf"){
        document.getElementById("pdfSection").style.display = "flex";
    }

    else if(sectionName === "qa"){
        document.getElementById("qaSection").style.display = "flex";
    }

    else if(sectionName === "summary"){
        document.getElementById("summarySection").style.display = "flex";
    }

    else if(sectionName === "search"){
        document.getElementById("searchSection").style.display = "flex";
    }

}

function sendMessage(){

    const input =
    document.getElementById("userInput");

    const message =
    input.value.trim();

    if(message === ""){
        return;
    }

    const chatBox =
    document.getElementById("chatBox");

    const userMessage =
    document.createElement("div");

    userMessage.className =
    "user-message";

    userMessage.innerHTML = `
        <div class="message-label">
            You
        </div>

        <div class="message-content">
            ${message}
        </div>
    `;

    chatBox.appendChild(userMessage);

    input.value = "";

    setTimeout(() => {

        const aiMessage =
        document.createElement("div");

        aiMessage.className =
        "ai-message";

        aiMessage.innerHTML = `
            <div class="message-label">
                TrustCollab AI
            </div>

            <div class="message-content">
                This is a frontend demo response.

                Later this will connect to Gemini or OpenAI APIs and provide intelligent answers based on files, chats, groups and tasks.
            </div>
        `;

        chatBox.appendChild(aiMessage);

        chatBox.scrollTop =
        chatBox.scrollHeight;

    }, 600);

}

function uploadPDF(){

    alert(
        "PDF Upload and AI Summarization will be connected to backend later."
    );

}

function clearChat(){

    const result =
    confirm("Clear chat history?");

    if(!result){
        return;
    }

    document.getElementById("chatBox").innerHTML = `
        <div class="ai-message">

            <div class="message-label">
                TrustCollab AI
            </div>

            <div class="message-content">
                Chat cleared successfully.
            </div>

        </div>
    `;
}
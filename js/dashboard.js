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
function startLiveDateTime() {
    const dateTimeElement = document.getElementById('live-datetime');
    
    // If the element doesn't exist on the current page, stop the function
    if (!dateTimeElement) return;

    function updateDateTime() {
        const now = new Date();
        
        // Format options: "Monday, 9 June 2026, 09:30:43 AM"
        const options = { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        
        // Convert to a clean string format
        const formattedDateTime = now.toLocaleString('en-US', options);
        
        // Replace the comma that automatically generates between date and time with a bullet point
        dateTimeElement.innerHTML = formattedDateTime.replace(',', ' •');
    }

    // Run immediately so there's no 1-second delay when the page loads
    updateDateTime(); 
    
    // Update it every single second (1000 milliseconds)
    setInterval(updateDateTime, 1000);
}

// Start the clock when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', startLiveDateTime);

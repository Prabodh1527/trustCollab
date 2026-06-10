document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('settings-sidebar-container');
    
    if (!container) {
        console.error("Could not find #settings-sidebar-container on this page.");
        return;
    }

    // Grab the current filename from the address bar
    const currentFile = window.location.pathname.split('/').pop() || 'profile.html';

    // Generates the navigation links using the exact '.settings-menu-item' class
    const menuHtml = `
        <nav class="settings-sidebar">
            <a href="profile.html" class="settings-menu-item ${currentFile === 'profile.html' ? 'active' : ''}">Profile</a>
            <a href="account-security.html" class="settings-menu-item ${currentFile === 'account-security.html' ? 'active' : ''}">Security</a>
            <a href="devices.html" class="settings-menu-item ${currentFile === 'devices.html' ? 'active' : ''}">Devices</a>
            <a href="notifications.html" class="settings-menu-item ${currentFile === 'notifications.html' ? 'active' : ''}">Notifications</a>
            <a href="privacy.html" class="settings-menu-item ${currentFile === 'privacy.html' ? 'active' : ''}">Privacy</a>
            <a href="appearance.html" class="settings-menu-item ${currentFile === 'appearance.html' ? 'active' : ''}">Appearance</a>
            <a href="connected-accounts.html" class="settings-menu-item ${currentFile === 'connected-accounts.html' ? 'active' : ''}">Connected Accounts</a>
            <a href="api-keys.html" class="settings-menu-item ${currentFile === 'api-keys.html' ? 'active' : ''}">API Keys</a>
            <a href="workspace-preferences.html" class="settings-menu-item ${currentFile === 'workspace-preferences.html' ? 'active' : ''}">Workspace Preferences</a>
            <a href="danger-zone.html" class="settings-menu-item danger ${currentFile === 'danger-zone.html' ? 'active' : ''}">Danger Zone</a>
        </nav>
    `;

    container.innerHTML = menuHtml;
});

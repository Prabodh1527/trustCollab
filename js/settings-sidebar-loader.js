// Inside js/settings-sidebar-loader.js
const menuHtml = `
    <nav class="settings-sidebar">
        <a href="profile.html" class="nav-item">Profile</a>
        <a href="account-security.html" class="nav-item">Security</a> <!-- Fixed target path -->
        <a href="devices.html" class="nav-item active">Devices</a>
        <a href="notifications.html" class="nav-item">Notifications</a>
        <a href="privacy.html" class="nav-item">Privacy</a>
        <a href="appearance.html" class="nav-item">Appearance</a>
        <a href="connected-accounts.html" class="nav-item">Connected Accounts</a>
        <a href="api-keys.html" class="nav-item">API Keys</a>
        <a href="workspace-preferences.html" class="nav-item">Workspace Preferences</a>
        <a href="danger-zone.html" class="nav-item danger">Danger Zone</a>
    </nav>
`;

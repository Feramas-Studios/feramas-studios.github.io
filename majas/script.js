// Reāllaika statusa atjaunināšana
async function updateStatus() {
    const response = await fetch('api/status.json');
    const data = await response.json();
    
    const statusHTML = data.services.map(service => `
        <div class="status-item">
            <h3>${service.name}</h3>
            <p>Statuss: <span class="status-${service.status}">${service.status}</span></p>
            <p>Atbildes laiks: ${service.responseTime}ms</p>
        </div>
    `).join('');
    
    document.getElementById('status-container').innerHTML = statusHTML;
}

// Projektu ielāde
async function loadProjects() {
    const response = await fetch('api/projects.json');
    const projects = await response.json();
    
    // Renderēt projektus
}

// Inicializācija
document.addEventListener('DOMContentLoaded', () => {
    updateStatus();
    loadProjects();
    
    // Atjaunināt statusu ik pēc 30 sekundēm
    setInterval(updateStatus, 30000);
});

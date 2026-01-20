document.addEventListener('DOMContentLoaded', async () => {
  const statusEl = document.getElementById('status');
  
  try {
    const response = await fetch('/api/health');
    const data = await response.json();
    statusEl.textContent = `Server Status: ${data.message}`;
    statusEl.className = 'success';
  } catch (error) {
    statusEl.textContent = 'Could not connect to server';
    statusEl.className = 'error';
  }
});

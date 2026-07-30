const dateEl = document.getElementById('sb-date');
if (dateEl) {
  dateEl.textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

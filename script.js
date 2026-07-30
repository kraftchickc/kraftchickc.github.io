document.getElementById('tb-date').textContent = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});

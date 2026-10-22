// Année courante dans le pied de page
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

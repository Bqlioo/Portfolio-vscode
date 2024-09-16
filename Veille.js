function filtrerArticles() {
    const query = document.getElementById('barre-recherche').value.toLowerCase();
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const titre = article.querySelector('.titre').textContent.toLowerCase();
        if (titre.includes(query)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

function trierArticles() {
    const critere = document.getElementById('critereTri').value;
    const articles = Array.from(document.querySelectorAll('.article'));

    articles.sort((a, b) => {
        const aValue = critere === 'note' ? a.dataset.note : a.querySelector('.titre').textContent.toLowerCase();
        const bValue = critere === 'note' ? b.dataset.note : b.querySelector('.titre').textContent.toLowerCase();

        if (critere === 'note') {
            return bValue - aValue; // Trier par note décroissante
        } else {
            return aValue.localeCompare(bValue); // Trier par nom alphabétique
        }
    });

    const container = document.querySelector('.liste-articles');
    articles.forEach(article => container.appendChild(article));
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('sources/read_data.php')
        .then(response => response.text())
        .then(data => {
            const displayData = document.getElementById('displayData');
            displayData.innerHTML = '';

            const entries = data.split('\n\n');
            entries.forEach(entry => {
                if (entry.trim()) {
                    const card = document.createElement('div');
                    card.className = 'card mb-3 mx-auto';
                    const cardBody = document.createElement('div');
                    cardBody.className = 'card-body text-center';

                    const lines = entry.split('\n');
                    lines.forEach(line => {
                        const p = document.createElement('p');
                        p.className = 'card-text';
                        p.textContent = line;
                        cardBody.appendChild(p);
                    });

                    card.appendChild(cardBody);
                    displayData.appendChild(card);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const displayData = document.getElementById('displayData');
            displayData.textContent = 'Error loading data';
        });
});

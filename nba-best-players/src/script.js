fetch('./data/players.json')
    .then(response => response.json())
    .then(players => {
        const anniversaryList = document.getElementById('anniversary-list');
        const currentList = document.getElementById('current-list');

        players.forEach(player => {
            const listItem = document.createElement('li');
            listItem.textContent = `${player.name} - ${player.team}`;

            if (player.is_current) {
                currentList.appendChild(listItem);
            } else {
                anniversaryList.appendChild(listItem);
            }
        });
    })
    .catch(error => console.error('Error loading players:', error));

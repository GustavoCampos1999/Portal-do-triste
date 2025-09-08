let loadBestiaryData;

document.addEventListener('DOMContentLoaded', () => {
    const db = firebase.firestore();
    const allMonstersData = window.allMonstersData || [];

    const bestiaryPage = document.getElementById('page-bestiary');
    if (!bestiaryPage) return;

    const bestiaryList = document.getElementById('bestiary-list');
    const searchInput = document.getElementById('bestiary-search');
    const filterRadios = document.querySelectorAll('input[name="bestiary-filter"]');
    
    let userBestiaryProgress = {}; 
    let currentUserId = null;

    loadBestiaryData = (uid) => {
        currentUserId = uid;
        const userDocRef = db.collection('users').doc(uid);

        userDocRef.get().then(doc => {
            if (doc.exists && doc.data().bestiary_progress) {
                userBestiaryProgress = doc.data().bestiary_progress;
            } else {
                userBestiaryProgress = {};
            }
            updateAndDisplay(); 
        }).catch(error => {
            console.error("Erro ao carregar dados do bestiário:", error);
            bestiaryList.innerHTML = '<p style="text-align: center; color: #e74c3c;">Ocorreu um erro ao carregar seus dados.</p>';
        });
    };

    function displayBestiary(monstersToDisplay) {
        bestiaryList.innerHTML = ''; 
        if (monstersToDisplay.length === 0) {
            bestiaryList.innerHTML = '<p style="text-align: center; padding: 20px 0;">Nenhum monstro encontrado com os filtros atuais.</p>';
            return;
        }

        monstersToDisplay.forEach(monster => {
            if (!monster.name || !monster.image_url) return; 
            const progress = userBestiaryProgress[monster.name] || { soulcore: false, completed: false };

            const itemDiv = document.createElement('div');
            itemDiv.className = 'bestiary-item';
            itemDiv.innerHTML = `
                <img src="${monster.image_url}" alt="${monster.name}">
                <span class="bestiary-item-name">${monster.name}</span>
                <div class="bestiary-item-options">
                    <label>
                        <input type="checkbox" data-monster="${monster.name}" data-type="soulcore" ${progress.soulcore ? 'checked' : ''}>
                        Soulcore
                    </label>
                    <label>
                        <input type="checkbox" data-monster="${monster.name}" data-type="completed" ${progress.completed ? 'checked' : ''}>
                        Completo
                    </label>
                </div>
            `;
            bestiaryList.appendChild(itemDiv);
        });
    }

    function updateAndDisplay() {
        if (!currentUserId) return; 

        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('input[name="bestiary-filter"]:checked').value;
        
        const filteredMonsters = allMonstersData.filter(monster => {
            if (!monster.name) return false;

            const progress = userBestiaryProgress[monster.name] || { soulcore: false, completed: false };
            const nameMatch = monster.name.toLowerCase().includes(searchTerm);

            if (!nameMatch) return false;

            switch (activeFilter) {
                case 'completed':
                    return progress.completed;
                case 'soulcore':
                    return progress.soulcore;
                case 'all':
                default:
                    return true;
            }
        });
        displayBestiary(filteredMonsters);
    }
    
    function saveProgress(monsterName, type, isChecked) {
        if (!currentUserId) return;

        if (!userBestiaryProgress[monsterName]) {
            userBestiaryProgress[monsterName] = { soulcore: false, completed: false };
        }
        userBestiaryProgress[monsterName][type] = isChecked;

        const userDocRef = db.collection('users').doc(currentUserId);
        userDocRef.set({
            bestiary_progress: userBestiaryProgress
        }, { merge: true }) 
        .then(() => console.log(`Progresso salvo para ${monsterName}`))
        .catch(error => console.error("Erro ao salvar:", error));
    }

    searchInput.addEventListener('input', updateAndDisplay);
    filterRadios.forEach(radio => radio.addEventListener('change', updateAndDisplay));

    bestiaryList.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const monsterName = e.target.dataset.monster;
            const type = e.target.dataset.type;
            const isChecked = e.target.checked;
            saveProgress(monsterName, type, isChecked);
        }
    });
});
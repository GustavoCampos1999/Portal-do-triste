// Arquivo: bestiary.js

// Deixamos a função de carregar dados acessível globalmente para que o auth.js possa chamá-la.
let loadBestiaryData;

document.addEventListener('DOMContentLoaded', () => {
    // Acessa o banco de dados do Firebase que foi inicializado no index.html
    const db = firebase.firestore();
    // Pega a lista de monstros do seu arquivo tibia-monsters-db.js
    const allMonstersData = window.allMonstersData || [];

    const bestiaryPage = document.getElementById('page-bestiary');
    if (!bestiaryPage) return;

    // Pega as referências dos elementos da página do bestiário
    const bestiaryList = document.getElementById('bestiary-list');
    const searchInput = document.getElementById('bestiary-search');
    const filterRadios = document.querySelectorAll('input[name="bestiary-filter"]');
    
    let userBestiaryProgress = {}; // Guarda o progresso do usuário logado
    let currentUserId = null;

    // Função que busca os dados do usuário no Firebase
    loadBestiaryData = (uid) => {
        currentUserId = uid;
        const userDocRef = db.collection('users').doc(uid);

        userDocRef.get().then(doc => {
            if (doc.exists && doc.data().bestiary_progress) {
                userBestiaryProgress = doc.data().bestiary_progress;
            } else {
                // Se for um novo usuário, o progresso começa vazio
                userBestiaryProgress = {};
            }
            updateAndDisplay(); // Exibe a lista de monstros na tela
        }).catch(error => {
            console.error("Erro ao carregar dados do bestiário:", error);
            bestiaryList.innerHTML = '<p style="text-align: center; color: #e74c3c;">Ocorreu um erro ao carregar seus dados.</p>';
        });
    };

    // Função que desenha a lista de monstros
    function displayBestiary(monstersToDisplay) {
        bestiaryList.innerHTML = ''; // Limpa a lista antes de desenhar
        if (monstersToDisplay.length === 0) {
            bestiaryList.innerHTML = '<p style="text-align: center; padding: 20px 0;">Nenhum monstro encontrado com os filtros atuais.</p>';
            return;
        }

        monstersToDisplay.forEach(monster => {
            if (!monster.name || !monster.image_url) return; // Pula monstros sem dados essenciais
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

    // Função que aplica a busca e os filtros
    function updateAndDisplay() {
        if (!currentUserId) return; // Não faz nada se não houver usuário logado

        const searchTerm = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('input[name="bestiary-filter"]:checked').value;
        
        const filteredMonsters = allMonstersData.filter(monster => {
            // Garante que apenas monstros com nome sejam processados
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
    
    // Função que salva o progresso quando um checkbox é clicado
    function saveProgress(monsterName, type, isChecked) {
        if (!currentUserId) return;

        // Garante que o objeto do monstro exista no progresso
        if (!userBestiaryProgress[monsterName]) {
            userBestiaryProgress[monsterName] = { soulcore: false, completed: false };
        }
        // Atualiza o estado
        userBestiaryProgress[monsterName][type] = isChecked;

        // Salva o objeto de progresso inteiro de volta no Firebase
        const userDocRef = db.collection('users').doc(currentUserId);
        userDocRef.set({
            bestiary_progress: userBestiaryProgress
        }, { merge: true }) // { merge: true } é importante para não apagar outros dados do usuário
        .then(() => console.log(`Progresso salvo para ${monsterName}`))
        .catch(error => console.error("Erro ao salvar:", error));
    }

    // Eventos que acionam a filtragem/busca
    searchInput.addEventListener('input', updateAndDisplay);
    filterRadios.forEach(radio => radio.addEventListener('change', updateAndDisplay));

    // Evento que aciona o salvamento (usando delegação de evento para performance)
    bestiaryList.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const monsterName = e.target.dataset.monster;
            const type = e.target.dataset.type;
            const isChecked = e.target.checked;
            saveProgress(monsterName, type, isChecked);
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const db = firebase.firestore();
    const auth = firebase.auth(); 
    const allMonstersData = window.allMonstersData || [];

    const bestiaryPage = document.getElementById('page-bestiary');
    if (!bestiaryPage) return;

    const bestiaryList = document.getElementById('bestiary-list');
    const searchInput = document.getElementById('bestiary-search');
    const filterRadios = document.querySelectorAll('input[name="bestiary-filter"]');
    const statsDiv = document.getElementById('bestiary-stats');
    const bestiaryToolbar = document.querySelector('.bestiary-toolbar');
    
    const loggedOutMessage = document.createElement('p');
    loggedOutMessage.className = 'auth-message';
    loggedOutMessage.textContent = 'Você precisa estar logado para ver seu bestiário.';

    let userBestiaryProgress = {};
    let currentUserId = null;

    function setPageState(isLoggedIn) {
        if (isLoggedIn) {
            bestiaryPage.classList.add('logged-in');
            bestiaryPage.classList.remove('logged-out');
            bestiaryToolbar.style.display = 'flex';
            statsDiv.style.display = 'flex';
        } else {
            bestiaryPage.classList.add('logged-out');
            bestiaryPage.classList.remove('logged-in');
            bestiaryToolbar.style.display = 'none';
            statsDiv.style.display = 'none';
            bestiaryList.innerHTML = '';
            bestiaryList.appendChild(loggedOutMessage);
        }
    }

    auth.onAuthStateChanged(user => {
        if (user) {
            currentUserId = user.uid;
            setPageState(true);
            loadBestiaryData(user.uid);
        } else {
            currentUserId = null;
            userBestiaryProgress = {};
            setPageState(false);
        }
    });

    function loadBestiaryData(uid) {
        const userDocRef = db.collection('users').doc(uid);
        userDocRef.get().then(doc => {
            if (doc.exists && doc.data().bestiary_progress) {
                userBestiaryProgress = doc.data().bestiary_progress;
            } else {
                userBestiaryProgress = {};
            }
            updateAndDisplay();
            updateStats();
        }).catch(error => {
            console.error("Erro ao carregar dados do bestiário:", error);
            bestiaryList.innerHTML = '<p class="auth-message error">Ocorreu um erro ao carregar seus dados.</p>';
        });
    };

function generateResistancesHtmlForCard(monster) {
    if (!monster || typeof window.getDamageMultiplier !== 'function') return '';
    const elementOrder = ['physical', 'holy', 'death', 'earth', 'fire', 'ice', 'energy'];
    const elementIcons = {
        physical: 'images/elementos/Fisico.png', holy: 'images/elementos/Dazzled_Icon.gif', death: 'images/elementos/Cursed_Icon.gif',
        earth: 'images/elementos/Poisoned_Icon.gif', fire: 'images/elementos/Burning_Icon.gif', ice: 'images/elementos/Freezing_Icon.gif', energy: 'images/elementos/Electrified_Icon.gif'
    };
    const colorMap = { green: '#27ae60', yellow: '#f1c40f', red: '#c0392b', white: '#a0937d' };
    let resistanceItemsHtml = '';

    elementOrder.forEach(element => {
        const multiplier = window.getDamageMultiplier(element, monster);
        const realPercentage = Math.round(multiplier * 100);
        const barPercentage = Math.min(realPercentage, 100); 
        let color = colorMap.white;
        
        if (realPercentage >= 101) color = colorMap.green;
        else if (realPercentage >= 70 && realPercentage <= 99) color = colorMap.yellow;
        else if (realPercentage <= 69) color = colorMap.red;
        
        const gradientStyle = `background: linear-gradient(to top, ${color} ${barPercentage}%, rgba(0,0,0,0.3) ${barPercentage}%);`;

        resistanceItemsHtml += `
            <div class="resistance-item">
                <div class="resistance-bar-container" style="${gradientStyle}">
                    <span>${realPercentage}%</span>
                </div>
                <img src="${elementIcons[element]}" title="${element}" alt="${element}">
            </div>`;
    });
    return `<div class="bestiary-resistance-grid">${resistanceItemsHtml}</div>`;
}

// Substitua a sua função displayBestiary por esta:
function displayBestiary(monstersToDisplay) {
    bestiaryList.innerHTML = '';
    if (monstersToDisplay.length === 0) {
        bestiaryList.innerHTML = '<p style="text-align: center; padding: 20px 0;">Nenhum monstro encontrado.</p>';
        return;
    }
    monstersToDisplay.forEach(monster => {
        if (!monster.name || !monster.image_url) return;
        const progress = userBestiaryProgress[monster.name] || { soulcore: false, completed: false };

        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'bestiary-card-wrapper';

        wrapperDiv.innerHTML = `
            <div class="bestiary-item" data-monster-name="${monster.name}">
                <div class="bestiary-item-content">
                    <img src="${monster.image_url}" alt="${monster.name}">
                    <span class="bestiary-item-name">${monster.name}</span>
                </div>
                <div class="bestiary-item-resistances"></div>
            </div>
            <div class="bestiary-item-options">
                <label>
                    <input type="checkbox" data-monster="${monster.name}" data-type="soulcore" ${progress.soulcore ? 'checked' : ''}> Soulcore
                </label>
                <label>
                    <input type="checkbox" data-monster="${monster.name}" data-type="completed" ${progress.completed ? 'checked' : ''}> Completo
                </label>
            </div>
        `;
        bestiaryList.appendChild(wrapperDiv);
    });
}

    function updateStats() {
        if (!userBestiaryProgress || !currentUserId) return;
        const totalMonsters = allMonstersData.length;
        let completedCount = 0;
        let soulcoreCount = 0;
        for (const monsterName in userBestiaryProgress) {
            const progress = userBestiaryProgress[monsterName];
            if (progress.completed) completedCount++;
            if (progress.soulcore) soulcoreCount++;
        }
        statsDiv.innerHTML = `
            <span>Bestiário completo: <strong>${completedCount} / ${totalMonsters}</strong></span>
            <span>Soulcore completo: <strong>${soulcoreCount} / ${totalMonsters}</strong></span>
        `;
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
                case 'completed': return progress.completed;
                case 'soulcore': return progress.soulcore;
                case 'all': default: return true;
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
        userDocRef.set({ bestiary_progress: userBestiaryProgress }, { merge: true })
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
        updateStats();
    }
});

    bestiaryList.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox' || e.target.tagName === 'LABEL') {
        return;
    }

    const clickedCard = e.target.closest('.bestiary-item');
    if (!clickedCard) return;

    const isAlreadyActive = clickedCard.classList.contains('is-active');

    bestiaryList.querySelectorAll('.bestiary-item.is-active').forEach(card => {
        card.classList.remove('is-active');
    });

    if (!isAlreadyActive) {
        clickedCard.classList.add('is-active');
        const monsterName = clickedCard.dataset.monsterName;
        const resistanceContainer = clickedCard.querySelector('.bestiary-item-resistances');

        if (resistanceContainer.innerHTML === '') {
            const monsterData = allMonstersData.find(m => m.name === monsterName);
            if (monsterData) {
                resistanceContainer.innerHTML = generateResistancesHtmlForCard(monsterData);
            }
        }
    }
});
bestiaryList.addEventListener('mouseenter', (e) => {
        const hoveredCard = e.target.closest('.bestiary-item');
        if (!hoveredCard) return;

        const resistanceContainer = hoveredCard.querySelector('.bestiary-item-resistances');
        if (resistanceContainer.innerHTML === '') {
            const monsterName = hoveredCard.dataset.monsterName;
            const monsterData = allMonstersData.find(m => m.name === monsterName);
            if (monsterData) {
                resistanceContainer.innerHTML = generateResistancesHtmlForCard(monsterData);
            }
        }
    }, true); 
});
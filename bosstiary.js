document.addEventListener('DOMContentLoaded', () => {
    const db = firebase.firestore();
    const auth = firebase.auth();
    const allBossesData = window.allBossesData || [];
    allBossesData.sort((a, b) => a.name.localeCompare(b.name));

    const bosstiaryPage = document.getElementById('page-bosstiary');
    if (!bosstiaryPage) return;

    const bosstiaryList = document.getElementById('bosstiary-list');
    const searchInput = document.getElementById('bosstiary-search');
    const filterRadios = document.querySelectorAll('input[name="bosstiary-filter"]');
    const categoryFiltersContainer = document.getElementById('bosstiary-category-filters');
    const categoryFilterIcons = document.querySelectorAll('.category-filter-icon');
    const statsDiv = document.getElementById('bosstiary-stats');

    let userBosstiaryProgress = {};
    let currentUserId = null;
    let activeCategoryFilter = 'all';

    const categoryIcons = {
        bane: 'images/bosstiary/Icon/Bosstiary_Bane.png',
        archfoe: 'images/bosstiary/Icon/Bosstiary_Archfoe.png',
        nemesis: 'images/bosstiary/Icon/Bosstiary_Nemesis.png'
    };
    
    window.handleBosstiaryLogin = (uid) => {
        currentUserId = uid;
        setPageState(true);
        loadBosstiaryData(uid);
    };

    window.handleBosstiaryLogout = () => {
        currentUserId = null;
        userBosstiaryProgress = {};
        setPageState(false);
        updateAndDisplay();
    };

    function setPageState(isLoggedIn) {
        const filters = bosstiaryPage.querySelector('.bestiary-filters');
        categoryFiltersContainer.classList.remove('hidden');
        
        if (isLoggedIn) {
            bosstiaryPage.classList.add('logged-in');
            bosstiaryPage.classList.remove('logged-out');
            if (filters) filters.style.display = 'flex';
        } else {
            bosstiaryPage.classList.add('logged-out');
            bosstiaryPage.classList.remove('logged-in');
            if (filters) filters.style.display = 'none';
            statsDiv.innerHTML = '<p class="auth-message">Você precisa estar logado para salvar seu progresso no bosstiário.</p>';
        }
    }
    
    function loadBosstiaryData(uid) {
        const userDocRef = db.collection('users').doc(uid);
        userDocRef.get().then(doc => {
            userBosstiaryProgress = (doc.exists && doc.data().bosstiary_progress) ? doc.data().bosstiary_progress : {};
            updateAndDisplay();
        }).catch(error => console.error("Erro ao carregar dados do bosstiário:", error));
    }

    function generateResistancesHtmlForCard(boss) {
        const elementOrder = ['physical', 'holy', 'death', 'earth', 'fire', 'ice', 'energy'];
        const elementIcons = {
            physical: 'images/elementos/Fisico.png', holy: 'images/elementos/Dazzled_Icon.gif', death: 'images/elementos/Cursed_Icon.gif',
            earth: 'images/elementos/Poisoned_Icon.gif', fire: 'images/elementos/Burning_Icon.gif', ice: 'images/elementos/Freezing_Icon.gif', energy: 'images/elementos/Electrified_Icon.gif'
        };
        const colorMap = { green: '#27ae60', yellow: '#f1c40f', red: '#c0392b', white: '#a0937d' };
        let resistanceItemsHtml = '';

        elementOrder.forEach(element => {
            const damageType = boss.damageTypes.find(dt => dt.type === element);
            const multiplier = damageType ? damageType.multiplier : 1.0;
            const realPercentage = Math.round(multiplier * 100);
            const barPercentage = Math.min(Math.abs(realPercentage), 100);
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

    function displayBosstiary(bossesToDisplay) {
        bosstiaryList.innerHTML = '';
        if (bossesToDisplay.length === 0) {
            bosstiaryList.innerHTML = '<p style="text-align: center; padding: 20px 0;">Nenhum boss encontrado.</p>';
            return;
        }
        bossesToDisplay.forEach(boss => {
            if (!boss.name || !boss.image_url) return;
            const progress = userBosstiaryProgress[boss.name] || { completed: false };
            const categoryIconSrc = categoryIcons[boss.category] || '';
            const wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'bestiary-card-wrapper';
            const optionsHtml = currentUserId ? `
                <div class="bestiary-item-options">
                    <label>
                        <input type="checkbox" data-monster="${boss.name}" data-type="completed" ${progress.completed ? 'checked' : ''}> Completo
                    </label>
                </div>` : '';
            wrapperDiv.innerHTML = `
                <div class="bestiary-item" data-monster-name="${boss.name}">
                    ${categoryIconSrc ? `<img src="${categoryIconSrc}" class="bosstiary-category-icon" alt="${boss.category}">` : ''}
                    <div class="bestiary-item-content">
                        <img src="${boss.image_url}" alt="${boss.name}">
                        <span class="bestiary-item-name">${boss.name}</span>
                    </div>
                    <div class="bestiary-item-resistances"></div>
                </div>
                ${optionsHtml}`;
            bosstiaryList.appendChild(wrapperDiv);
        });
        updateStats();
    }

    function updateStats() {
        if (!currentUserId) {
            statsDiv.innerHTML = '<p class="auth-message">Você precisa estar logado para salvar seu progresso no bosstiário.</p>';
            return;
        }
        const totalBosses = allBossesData.length;
        const completedCount = Object.values(userBosstiaryProgress).filter(p => p.completed).length;
        statsDiv.innerHTML = `<span>Bosstiário completo: <strong>${completedCount} / ${totalBosses}</strong></span>`;
    }

    function updateAndDisplay() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeProgressFilter = document.querySelector('input[name="bosstiary-filter"]:checked').value;
        
        const filteredBosses = allBossesData.filter(boss => {
            if (!boss.name) return false;
            const progress = userBosstiaryProgress[boss.name] || { completed: false };

            const nameMatch = boss.name.toLowerCase().includes(searchTerm);
            if (!nameMatch) return false;
            if (activeCategoryFilter !== 'all' && boss.category !== activeCategoryFilter) return false;
            if (currentUserId && activeProgressFilter === 'completed' && !progress.completed) return false;
            
            return true;
        });
        displayBosstiary(filteredBosses);
    }

    function saveProgress(bossName, type, isChecked) {
        if (!currentUserId) return;
        if (!userBosstiaryProgress[bossName]) userBosstiaryProgress[bossName] = { completed: false };
        userBosstiaryProgress[bossName][type] = isChecked;
        db.collection('users').doc(currentUserId).set({ bosstiary_progress: userBosstiaryProgress }, { merge: true })
          .catch(error => console.error("Erro ao salvar progresso:", error));
    }

    searchInput.addEventListener('input', updateAndDisplay);
    filterRadios.forEach(radio => radio.addEventListener('change', updateAndDisplay));

    categoryFilterIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const category = icon.dataset.category;
            if (icon.classList.contains('active')) {
                icon.classList.remove('active');
                activeCategoryFilter = 'all';
            } else {
                categoryFilterIcons.forEach(i => i.classList.remove('active'));
                icon.classList.add('active');
                activeCategoryFilter = category;
            }
            updateAndDisplay();
        });
    });

    bosstiaryList.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const bossName = e.target.dataset.monster;
            const type = e.target.dataset.type;
            const isChecked = e.target.checked;
            saveProgress(bossName, type, isChecked);
            updateStats();
        }
    });

    bosstiaryList.addEventListener('click', (e) => {
        if (e.target.matches('input[type="checkbox"], label')) return;
        const clickedCardItem = e.target.closest('.bestiary-item');
        if (!clickedCardItem) return;

        const clickedCardWrapper = clickedCardItem.closest('.bestiary-card-wrapper');
        const isActive = clickedCardItem.classList.toggle('is-active');
        if (clickedCardWrapper) clickedCardWrapper.classList.toggle('is-active');

        if (isActive) {
            const resistanceContainer = clickedCardItem.querySelector('.bestiary-item-resistances');
            if (resistanceContainer.innerHTML === '') {
                const bossName = clickedCardItem.dataset.monsterName;
                const bossData = allBossesData.find(b => b.name === bossName);
                if (bossData) resistanceContainer.innerHTML = generateResistancesHtmlForCard(bossData);
            }
        }
    });
    
    if (auth.currentUser) {
        handleBosstiaryLogin(auth.currentUser.uid);
    } else {
        handleBosstiaryLogout();
    }
});
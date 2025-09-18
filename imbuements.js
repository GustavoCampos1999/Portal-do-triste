document.addEventListener('DOMContentLoaded', () => {
    const page = document.getElementById('page-Imbuements');
    if (!page) return;
    const imbuementData = {
        head: [
            { name: 'Void (Mana Leech)', image: 'images/imbue/suporte/Void_(Roubo_de_Mana).gif', goldToken: true },
            { name: 'Epiphany (Magic Level)', image: 'images/imbue/skill/Epiphany_(Skillboost_de_Nivel_Magico).gif' },
            { name: 'Blockade (Shielding)', image: 'images/imbue/skill/Blockade_(Skillboost_de_Escudo).gif' },
            { name: 'Bash (Club)', image: 'images/imbue/skill/Bash_(Skillboost_de_Clava).gif' },
            { name: 'Chop (Axe)', image: 'images/imbue/skill/Chop_(Skillboost_de_Machado).gif' },
            { name: 'Precision (Distance)', image: 'images/imbue/skill/Precision_(Skillboost_de_Distancia).gif' },
            { name: 'Slash (Sword)', image: 'images/imbue/skill/Slash_(Skillboost_de_Espada).gif' },
            { name: 'Punch (Fist)', image: 'images/imbue/skill/Punch_(Skillboost_de_Punhos).gif' },
        ],
        armor: [
            { name: 'Vampirism (Life Leech)', image: 'images/imbue/suporte/Vampirism_(Roubo_de_Vida).gif', goldToken: true },
            { name: 'Cloud Fabric (Energy Protection)', image: 'images/imbue/protecao/Cloud_Fabric_(Protecao_de_Energia).gif' },
            { name: 'Dragon Hide (Fire Protection)', image: 'images/imbue/protecao/Dragon_Hide_(Protecao_de_Fogo).gif' },
            { name: 'Quara Scale (Ice Protection)', image: 'images/imbue/protecao/Quara_Scale_(Protecao_de_Gelo).gif' },
            { name: 'Demon Presence (Holy Protection)', image: 'images/imbue/protecao/Demon_Presence_(Protecao_de_Sagrado).gif' },
            { name: 'Lich Shroud (Death Protection)', image: 'images/imbue/protecao/Lich_Shroud_(Protecao_de_Morte).gif' },
            { name: 'Snake Skin (Earth Protection)', image: 'images/imbue/protecao/Snake_Skin_(Protecao_de_Terra).gif' },
        ],
        shield: [
            { name: 'Blockade (Shielding)', image: 'images/imbue/skill/Blockade_(Skillboost_de_Escudo).gif' },
            { name: 'Cloud Fabric (Energy Protection)', image: 'images/imbue/protecao/Cloud_Fabric_(Protecao_de_Energia).gif' },
            { name: 'Dragon Hide (Fire Protection)', image: 'images/imbue/protecao/Dragon_Hide_(Protecao_de_Fogo).gif' },
            { name: 'Quara Scale (Ice Protection)', image: 'images/imbue/protecao/Quara_Scale_(Protecao_de_Gelo).gif' },
            { name: 'Demon Presence (Holy Protection)', image: 'images/imbue/protecao/Demon_Presence_(Protecao_de_Sagrado).gif' },
            { name: 'Lich Shroud (Death Protection)', image: 'images/imbue/protecao/Lich_Shroud_(Protecao_de_Morte).gif' },
            { name: 'Snake Skin (Earth Protection)', image: 'images/imbue/protecao/Snake_Skin_(Protecao_de_Terra).gif' },
        ],
        boots: [
            { name: 'Swiftness (Speed)', image: 'images/imbue/suporte/Swiftness_(Skillboost_de_Velocidade).gif' },
            { name: 'Vibrancy (Paralyze Remove)', image: 'images/imbue/suporte/Vibrancy_(Remocao_de_Paralisia).gif' },
        ],
        bag: [
            { name: 'Featherweight (Increase Cap)', image: 'images/imbue/suporte/Featherweight_(Aumento_de_Capacidade).gif' },
        ],
        weapon: [
            { name: 'Void (Mana Leech)', image: 'images/imbue/suporte/Void_(Roubo_de_Mana).gif', goldToken: true },
            { name: 'Vampirism (Life Leech)', image: 'images/imbue/suporte/Vampirism_(Roubo_de_Vida).gif', goldToken: true },
            { name: 'Strike (Critical)', image: 'images/imbue/dano/Strike_(Dano_Critico).gif', goldToken: true },
            { name: 'Electrify (Energy Damage)', image: 'images/imbue/dano/Electrify_(Dano_de_Energia).gif' },
            { name: 'Frost (Ice Damage)', image: 'images/imbue/dano/Frost_(Dano_de_Gelo).gif' },
            { name: 'Scorch (Fire Damage)', image: 'images/imbue/dano/Scorch_(Dano_de_Fogo).gif' },
            { name: 'Reap (Death Damage)', image: 'images/imbue/dano/Reap_(Dano_de_Morte).gif' },
            { name: 'Venom (Earth Damage)', image: 'images/imbue/dano/Venom_(Dano_de_Terra).gif' },
            { name: 'Epiphany (Magic Level)', image: 'images/imbue/skill/Epiphany_(Skillboost_de_Nivel_Magico).gif' },
            { name: 'Bash (Club)', image: 'images/imbue/skill/Bash_(Skillboost_de_Clava).gif' },
            { name: 'Chop (Axe)', image: 'images/imbue/skill/Chop_(Skillboost_de_Machado).gif' },
            { name: 'Precision (Distance)', image: 'images/imbue/skill/Precision_(Skillboost_de_Distancia).gif' },
            { name: 'Slash (Sword)', image: 'images/imbue/skill/Slash_(Skillboost_de_Espada).gif' },
            { name: 'Punch (Fist)', image: 'images/imbue/skill/Punch_(Skillboost_de_Punhos).gif' },
        ]
    };

    const materialsData = {
        'Blockade (Shielding)': [{q:20, n:'Piece of Scarab Shell', i:'images/imbue/skill/Piece_of_Scarab_Shell.gif'},{q:25, n:'Brimstone Shell', i:'images/imbue/skill/Brimstone_Shell.gif'},{q:25, n:'Frazzle Skin', i:'images/imbue/skill/Frazzle_Skin.gif'}],
        'Chop (Axe)': [{q:20, n:'Orc Tooth', i:'images/imbue/skill/Orc_Tooth.gif'},{q:25, n:'Battle Stone', i:'images/imbue/skill/Battle_Stone.gif'},{q:20, n:'Moohtant Horn', i:'images/imbue/skill/Moohtant_Horn.gif'}],
        'Epiphany (Magic Level)': [{q:25, n:'Elvish Talisman', i:'images/imbue/skill/Elvish_Talisman.gif'},{q:15, n:'Broken Shamanic Staff', i:'images/imbue/skill/Broken_Shamanic_Staff.gif'},{q:15, n:'Strand of Medusa Hair', i:'images/imbue/skill/Strand_of_Medusa_Hair.gif'}],
        'Precision (Distance)': [{q:25, n:'Elven Scouting Glass', i:'images/imbue/skill/Elven_Scouting_Glass.gif'},{q:20, n:'Elven Hoof', i:'images/imbue/skill/Elven_Hoof.gif'},{q:10, n:'Metal Spike', i:'images/imbue/skill/Metal_Spike.gif'}],
        'Slash (Sword)': [{q:25, n:'Lion\'s Mane', i:'images/imbue/skill/Lion\'s_Mane.gif'},{q:25, n:'Mooh\'tah Shell', i:'images/imbue/skill/Mooh\'tah_Shell.gif'},{q:5, n:'War Crystal', i:'images/imbue/skill/War_Crystal.gif'}],
        'Bash (Club)': [{q:20, n:'Cyclops Toe', i:'images/imbue/skill/Cyclops_Toe.gif'},{q:15, n:'Ogre Nose Ring', i:'images/imbue/skill/Ogre_Nose_Ring.gif'},{q:10, n:'Warmaster\'s Wristguards', i:'images/imbue/skill/Warmaster\'s_Wristguards.gif'}],
        'Punch (Fist)': [{q:25, n:'Tarantula Egg', i:'images/imbue/skill/Tarantula_Egg.gif'},{q:20, n:'Mantassin Tail', i:'images/imbue/skill/Mantassin_Tail.gif'},{q:15, n:'Gold-Brocaded Cloth', i:'images/imbue/skill/Gold-Brocaded_Cloth.gif'}],
        'Reap (Death Damage)': [{q:25, n:'Pile of Grave Earth', i:'images/imbue/dano/Pile_of_Grave_Earth.gif'},{q:20, n:'Demonic Skeletal Hand', i:'images/imbue/dano/Demonic_Skeletal_Hand.gif'},{q:5, n:'Petrified Scream', i:'images/imbue/dano/Petrified_Scream.gif'}],
        'Electrify (Energy Damage)': [{q:25, n:'Rorc Feather', i:'images/imbue/dano/Rorc_Feather.gif'},{q:5, n:'Peacock Feather Fan', i:'images/imbue/dano/Peacock_Feather_Fan.gif'},{q:1, n:'Energy Vein', i:'images/imbue/dano/Energy_Vein.gif'}],
        'Venom (Earth Damage)': [{q:25, n:'Swamp Grass', i:'images/imbue/dano/Swamp_Grass.gif'},{q:20, n:'Poisonous Slime', i:'images/imbue/dano/Poisonous_Slime.gif'},{q:2, n:'Slime Heart', i:'images/imbue/dano/Slime_Heart.gif'}],
        'Frost (Ice Damage)': [{q:25, n:'Frosty Heart', i:'images/imbue/dano/Frosty_Heart.gif'},{q:10, n:'Seacrest Hair', i:'images/imbue/dano/Seacrest_Hair.gif'},{q:5, n:'Polar Bear Paw', i:'images/imbue/dano/Polar_Bear_Paw.gif'}],
        'Scorch (Fire Damage)': [{q:25, n:'Fiery Heart', i:'images/imbue/dano/Fiery_Heart.gif'},{q:5, n:'Green Dragon Scale', i:'images/imbue/dano/Green_Dragon_Scale.gif'},{q:5, n:'Demon Horn', i:'images/imbue/dano/Demon_Horn.gif'}],
        'Cloud Fabric (Energy Protection)': [{q:20, n:'Wyvern Talisman', i:'images/imbue/protecao/Wyvern_Talisman.gif'},{q:15, n:'Crawler Head Plating', i:'images/imbue/protecao/Crawler_Head_Plating.gif'},{q:10, n:'Wyrm Scale', i:'images/imbue/protecao/Wyrm_Scale.gif'}],
        'Demon Presence (Holy Protection)': [{q:25, n:'Cultish Robe', i:'images/imbue/protecao/Cultish_Robe.gif'},{q:25, n:'Cultish Mask', i:'images/imbue/protecao/Cultish_Mask.gif'},{q:20, n:'Hellspawn Tail', i:'images/imbue/protecao/Hellspawn_Tail.gif'}],
        'Dragon Hide (Fire Protection)': [{q:20, n:'Green Dragon Leather', i:'images/imbue/protecao/Green_Dragon_Leather.gif'},{q:10, n:'Blazing Bone', i:'images/imbue/protecao/Blazing_Bone.gif'},{q:5, n:'Draken Sulphur', i:'images/imbue/protecao/Draken_Sulphur.gif'}],
        'Lich Shroud (Death Protection)': [{q:25, n:'Flask of Embalming Fluid', i:'images/imbue/protecao/Flask_of_Embalming_Fluid.gif'},{q:20, n:'Gloom Wolf Fur', i:'images/imbue/protecao/Gloom_Wolf_Fur.gif'},{q:5, n:'Mystical Hourglass', i:'images/imbue/protecao/Mystical_Hourglass.gif'}],
        'Quara Scale (Ice Protection)': [{q:25, n:'Winter Wolf Fur', i:'images/imbue/protecao/Winter_Wolf_Fur.gif'},{q:15, n:'Thick Fur', i:'images/imbue/protecao/Thick_Fur.gif'},{q:10, n:'Deepling Warts', i:'images/imbue/protecao/Deepling_Warts.gif'}],
        'Snake Skin (Earth Protection)': [{q:25, n:'Piece of Swampling Wood', i:'images/imbue/protecao/Piece_of_Swampling_Wood.gif'},{q:20, n:'Snake Skin', i:'images/imbue/protecao/Snake_Skin.gif'},{q:10, n:'Brimstone Fangs', i:'images/imbue/protecao/Brimstone_Fangs.gif'}],
        'Featherweight (Increase Cap)': [{q:20, n:'Fairy Wings', i:'images/imbue/suporte/Fairy_Wings.gif'},{q:10, n:'Little Bowl of Myrrh', i:'images/imbue/suporte/Little_Bowl_of_Myrrh.gif'},{q:5, n:'Goosebump Leather', i:'images/imbue/suporte/Goosebump_Leather.gif'}],
        'Strike (Critical)': [{q:20, n:'Protective Charm', i:'images/imbue/dano/Protective_Charm.gif'},{q:25, n:'Sabretooth', i:'images/imbue/dano/Sabretooth_(Item).gif'},{q:5, n:'Vexclaw Talon', i:'images/imbue/dano/Vexclaw_Talon.gif'}],
        'Swiftness (Speed)': [{q:15, n:'Damselfly Wing', i:'images/imbue/suporte/Damselfly_Wing.gif'},{q:25, n:'Compass', i:'images/imbue/suporte/Compass.gif'},{q:20, n:'Waspoid Wing', i:'images/imbue/suporte/Waspoid_Wing.gif'}],
        'Vampirism (Life Leech)': [{q:25, n:'Vampire Teeth', i:'images/imbue/suporte/Vampire_Teeth.gif'},{q:15, n:'Bloody Pincers', i:'images/imbue/suporte/Bloody_Pincers.gif'},{q:5, n:'Piece of Dead Brain', i:'images/imbue/suporte/Piece_of_Dead_Brain.gif'}],
        'Vibrancy (Paralyze Remove)': [{q:20, n:'Wereboar Hooves', i:'images/imbue/suporte/Wereboar_Hooves.gif'},{q:15, n:'Crystallized Anger', i:'images/imbue/suporte/Crystallized_Anger.gif'},{q:5, n:'Quill', i:'images/imbue/suporte/Quill.gif'}],
        'Void (Mana Leech)': [{q:25, n:'Rope Belt', i:'images/imbue/suporte/Rope_Belt.gif'},{q:25, n:'Silencer Claws', i:'images/imbue/suporte/Silencer_Claws.gif'},{q:5, n:'Some Grimeleech Wings', i:'images/imbue/suporte/Some_Grimeleech_Wings.gif'}],
    };
    
    const slotNameMap = {
        head: 'Capacete',
        armor: 'Armadura',
        shield: 'Escudo',
        boots: 'Botas',
        bag: 'Mochila',
        weapon: 'Arma'
    };
    
    const inventoryGrid = page.querySelector('#imbuement-inventory-grid');
    const detailsContainer = page.querySelector('#imbuement-details-container');
    const slotTitle = page.querySelector('#imbuement-slot-title');
    const iconsGrid = page.querySelector('#imbuement-icons-grid');
    const materialsContainer = page.querySelector('#imbuement-materials-container');
    const materialsTitle = page.querySelector('#imbuement-materials-title');
    const materialsList = page.querySelector('#imbuement-materials-list');

    inventoryGrid.addEventListener('click', (e) => {
        const slotElement = e.target.closest('.inventory-slot:not(.empty)');
        if (!slotElement) return;
        const isAlreadyActive = slotElement.classList.contains('active');
        inventoryGrid.querySelectorAll('.inventory-slot').forEach(el => el.classList.remove('active'));
        detailsContainer.classList.add('hidden');
        materialsContainer.classList.add('hidden');
        if (!isAlreadyActive) {
            setTimeout(() => {
                slotElement.classList.add('active');
                const slotType = slotElement.dataset.slot;
                const imbuements = imbuementData[slotType];
                displayImbuements(slotType, imbuements);
                setTimeout(() => smoothScrollTo(detailsContainer, 800), 50);
            }, 200);
        }
    });

    function displayImbuements(slotType, imbuements) {
        slotTitle.textContent = `Imbuements para ${slotNameMap[slotType]}`;
        iconsGrid.innerHTML = '';
        imbuements.forEach(imbue => {
            const imbueElement = document.createElement('div');
            imbueElement.className = 'imbuement-icon';
            imbueElement.dataset.name = imbue.name;
            const nameHtml = imbue.name.replace(' (', '<br><span class="imbue-subname">(');
            const goldTokenHtml = imbue.goldToken ? `<img src="images/imbue/Gold_Token.gif" class="gold-token-icon" alt="Gold Token">` : '';
            
            imbueElement.innerHTML = `${goldTokenHtml}<img src="${imbue.image}" alt="${imbue.name}" class="main-imbue-icon"><span class="imbue-main-name">${nameHtml}</span>`;
            
            imbueElement.addEventListener('click', (e) => {
                e.stopPropagation();
                const currentlyActive = iconsGrid.querySelector('.imbuement-icon.active');
                if (currentlyActive && currentlyActive !== imbueElement) {
                    currentlyActive.classList.remove('active');
                }
                imbueElement.classList.toggle('active');
                if (imbueElement.classList.contains('active')) {
                    displayMaterials(imbue.name, materialsData[imbue.name]);
                } else {
                    materialsContainer.classList.add('hidden');
                }
            });
            iconsGrid.appendChild(imbueElement);
        });
        detailsContainer.classList.remove('hidden');
    }

    function displayMaterials(imbuementName, materials) {
        materialsTitle.innerHTML = `Materiais para: <span class="imbue-title-highlight">${imbuementName}</span>`;
        materialsList.innerHTML = ''; 

        if (!materials) {
            materialsList.innerHTML = '<p>Erro: Materiais não encontrados.</p>';
        } else {
            const ul = document.createElement('ul');
            const tierNames = ['Basic', 'Intricate', 'Powerful'];
            materials.forEach((material, index) => {
                const li = document.createElement('li');
                li.className = 'material-item';
                const tierLevel = index + 1;

                li.innerHTML = `
                    <img src="${material.i}" alt="${material.n}" class="material-icon">
                    <div class="material-info">
                        <span class="quantity">${material.q}x</span>
                        <span class="name">${material.n}</span>
                    </div>
                    <div class="tier-indicator tier-${tierLevel}">${tierNames[index]}</div>
                `;
                ul.appendChild(li);
            });
            materialsList.appendChild(ul);
        }
        
        materialsContainer.classList.remove('hidden');
        setTimeout(() => smoothScrollTo(materialsContainer, 800), 100);
    }
});
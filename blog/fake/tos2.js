document.addEventListener("DOMContentLoaded", () => {
    const roleMapping = {
        // Town
        "Coroner": "town", "Investigator": "town", "Lookout": "town", "Psychic": "town", "Seer": "town", 
        "Spy": "town", "Tracker": "town", "Bodyguard": "town", "Cleric": "town", "Crusader": "town", 
        "Oracle": "town", "Trapper": "town", "Deputy": "town", "Trickster": "town", "Veteran": "town", 
        "Vigilante": "town", "Admirer": "town", "Amnesiac": "town", "Retributionist": "town", 
        "Socialite": "town", "Tavern Keeper": "town", "Jailor": "town", "Marshal": "town", 
        "Mayor": "town", "Monarch": "town", "Prosecutor": "town", "Sheriff": "town",
        // Coven
        "Archmage": "coven", "Hex Master": "coven", "Witch": "coven", "Conjurer": "coven", 
        "Jinx": "coven", "Ritualist": "coven", "Dreamweaver": "coven", "Enchanter": "coven", 
        "Illusionist": "coven", "Medusa": "coven", "Necromancer": "coven", "Potion Master": "coven", 
        "Poisoner": "coven", "Voodoo Master": "coven", "Wildling": "coven",
        // Neutral
        "Doomsayer": "doomsayer", "Executioner": "executioner", "Jester": "jester", 
        "Pirate": "pirate", "Arsonist": "arsonist", "Serial Killer": "serial-killer", 
        "Shroud": "shroud", "Werewolf": "werewolf", "Vampire": "vampire", "Cursed Soul": "cursed-soul",

        // Apocalypse
        "Baker": "apocalypse", "Famine": "apocalypse", "Berserker": "apocalypse", "War": "apocalypse", 
        "Plaguebearer": "apocalypse", "Pestilence": "apocalypse", "Soul Collector": "apocalypse", "Death": "apocalypse",

        "Town": "town", "Coven": "coven", "Neutral": "neutral", "Neutral Apocalypse": "apocalypse", "Neutral Killing": "neutral", "Neutral Evil": "neutral",
        "Town Investigative": "town", "Town Protective": "town", "Town Support": "town", "Town Killing": "town", "Town Power": "town"
    };

    const content = document.querySelector('main'); // Change to your post container class
    if (!content) return;

    // Matches @RoleName, e.g., @Jailor
    const sortedRoles = Object.keys(roleMapping).sort((a, b) => b.length - a.length);
    const regex = new RegExp(`#(${(sortedRoles).join('|')})`, 'g');

    content.innerHTML = content.innerHTML.replace(regex, (match, roleName) => {
        const className = roleMapping[roleName];
        // Remove spaces for the filename: "Tavern Keeper" -> "TavernKeeper"
        const fileName = roleName.replace(/\s+/g, '');
        const iconPath = `./icons/RoleCard_${fileName}.png`;
        
        return `<a style="text-decoration: none" href="https://town-of-salem.fandom.com/wiki/${roleName.replace(/\s/g, "_")}"><span class="role-badge role-${className}">
                    <img src="${iconPath}" alt="${roleName}" onerror="this.style.display='none'">
                    ${roleName}
                </span></a>`;
    });


    const regex1 = /:([a-zA-Z0-9_\-\s]{1,30}):/g;
    content.innerHTML = content.innerHTML.replace(regex1, (match, keywordText) => {
        return `<span class="keyword">${keywordText}</span>`;
    });
});
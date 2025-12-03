// Zonas con nombres de parques
const zones = [
    "Hayarkon North", "Charles Park", "Gordon Beach", "Meir Garden",
    "Independence Park", "Yarkon South", "Rothschild Park", "Habima Square",
    "Tel Aviv Promenade", "Park HaMesila", "Jaffa Old Town", "Park Eshkol"
];

// Estado de cada mapa
let stateIndividual = {}, stateSmall = {}, stateLarge = {};
zones.forEach(z => {
    // Al iniciar, algunas zonas ya conquistadas por otros usuarios
    stateIndividual[z] = { owner: Math.random() > 0.6 ? "User" + (2 + Math.floor(Math.random() * 3)) : null, km: Math.random() * 5 + 1, status: null };
    stateSmall[z] = { ...stateIndividual[z] };
    stateLarge[z] = { ...stateIndividual[z] };
});

// Función para renderizar mapa
function updateMap(state, mapId) {
    const mapDiv = document.getElementById(mapId);
    mapDiv.innerHTML = "";
    zones.forEach(z => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if (state[z].status === "dispute") cell.classList.add("dispute");
        else if (state[z].owner === "User1") cell.classList.add("user");
        else if (state[z].owner) cell.classList.add("other");
        else cell.classList.add("free");

        let text = "";
        if (state[z].status === "dispute") text = "In Dispute";
        else if (state[z].owner === "User1") text = z + "\nYour Zone";
        else if (state[z].owner) text = z + "\nTaken by " + state[z].owner;
        else text = z + "\nFree";
        cell.textContent = text;
        mapDiv.appendChild(cell);
    });
}

// Inicializar mapas
updateMap(stateIndividual, "mapIndividual");
updateMap(stateSmall, "mapSmallGroup");
updateMap(stateLarge, "mapLargeGroup");

// Ranking inicial
let rankingIndividualData = [
    { user: "User1", zones: 0, km: 0 },
    { user: "User2", zones: 3, km: 6.4 },
    { user: "User3", zones: 2, km: 5.0 },
    { user: "User4", zones: 1, km: 3.2 },
];
let rankingSmallData = [
    { user: "Group1", zones: 3, km: 8.2 },
    { user: "Group2", zones: 2, km: 6.0 },
];
let rankingLargeData = [
    { user: "LargeGroup1", zones: 4, km: 12.3 },
    { user: "LargeGroup2", zones: 2, km: 7.0 },
];

// Mostrar ranking
function displayRanking(rankingData, winnerId, tableId) {
    rankingData.sort((a, b) => b.zones - a.zones || b.km - b.km);
    document.getElementById(winnerId).textContent = `Winner of the month: ${rankingData[0].user} - ${rankingData[0].zones} zones, ${rankingData[0].km.toFixed(1)} km`;
    let tableHTML = `<table><tr><th>User</th><th>Zones</th><th>Km</th></tr>`;
    rankingData.slice(0, 10).forEach(u => { tableHTML += `<tr><td>${u.user}</td><td>${u.zones}</td><td>${u.km.toFixed(1)}</td></tr>`; });
    tableHTML += "</table>";
    document.getElementById(tableId).innerHTML = tableHTML;
}

// Mostrar ranking inicial
displayRanking(rankingIndividualData, "winnerIndividual", "topUsersIndividual");
displayRanking(rankingSmallData, "winnerSmall", "topUsersSmall");
displayRanking(rankingLargeData, "winnerLarge", "topUsersLarge");

// Simular run
function simulateRun(state, mapId, rankingData, ownerName, maxKM) {
    const availableZones = zones.filter(z => !state[z].owner || state[z].owner !== ownerName);
    if (availableZones.length === 0) { alert("All zones already yours!"); return; }
    const z = availableZones[Math.floor(Math.random() * availableZones.length)];
    const km = Math.random() * maxKM;
    if (km >= 2) {
        state[z].owner = ownerName;
        state[z].km = km;
        state[z].status = null;
        alert(`${ownerName} conquered ${z}!`);
        // actualizar ranking
        const u = rankingData.find(u => u.user === ownerName);
        if (u) { u.zones += 1; u.km += km; }
        else rankingData.push({ user: ownerName, zones: 1, km: km });
    } else {
        alert(`${ownerName} ran ${km.toFixed(1)} km, not enough to conquer ${z}. Partial reward given.`);
    }
    updateMap(state, mapId);
    displayRanking(rankingData, "winnerIndividual", "topUsersIndividual");
}

// Disputa aleatoria
function disputeRandom(state, mapId) {
    const ownZones = zones.filter(z => state[z].owner && state[z].owner !== "User1" && !state[z].status);
    if (ownZones.length === 0) return;
    const z = ownZones[Math.floor(Math.random() * ownZones.length)];
    state[z].status = "dispute";
    updateMap(state, mapId);
    console.log(`Notification: ${z} is now in dispute!`);
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            state[z].owner = "RandomUser" + Math.floor(Math.random() * 10);
            state[z].km = 2 + Math.random() * 3;
            console.log(`${z} conquered by another user!`);
        }
        state[z].status = null;
        updateMap(state, mapId);
    }, 10000);
}

// Disputa periódica
setInterval(() => { disputeRandom(stateIndividual, "mapIndividual"); }, 30000);
setInterval(() => { disputeRandom(stateSmall, "mapSmallGroup"); }, 30000);
setInterval(() => { disputeRandom(stateLarge, "mapLargeGroup"); }, 30000);

// Botones
document.getElementById("finishIndividual").addEventListener("click", () => simulateRun(stateIndividual, "mapIndividual", rankingIndividualData, "User1", 4));
document.getElementById("finishSmallGroup").addEventListener("click", () => simulateRun(stateSmall, "mapSmallGroup", rankingSmallData, "Group1", 4));
document.getElementById("finishLargeGroup").addEventListener("click", () => simulateRun(stateLarge, "mapLargeGroup", rankingLargeData, "LargeGroup1", 6));

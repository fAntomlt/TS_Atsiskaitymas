/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas.
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
var TEAMS_ENDPOINT = 'teams.json';
var PLAYERS_ENDPOINT = 'players.json';
window.onload = function () {
    fetchTeams();
};
function fetchTeams() {
    fetch(TEAMS_ENDPOINT)
        .then(function (response) { return response.json(); })
        .then(function (data) { return renderTeams(data.teams); })
        .catch(function (error) { return console.error("Error:", error); });
}
function renderTeams(teams) {
    var output = document.querySelector("#output");
    if (!output)
        return;
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
    teams.forEach(function (team) {
        var teamCard = document.createElement("div");
        teamCard.className = "team-card";
        var teamTitle = document.createElement("h2");
        teamTitle.textContent = team.teamName;
        var teamInfo = document.createElement("p");
        teamInfo.textContent = "".concat(team.location, " - ").concat(team.simpleName, " (").concat(team.abbreviation, ")");
        var playersButton = document.createElement("button");
        playersButton.textContent = "Players";
        playersButton.addEventListener("click", function () { return fetchPlayers(team.id); });
        teamCard.appendChild(teamTitle);
        teamCard.appendChild(teamInfo);
        teamCard.appendChild(playersButton);
        output.appendChild(teamCard);
    });
}
function fetchPlayers(teamId) {
    fetch(PLAYERS_ENDPOINT)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var teamPlayers = data.players.filter(function (player) { return player.teamId === teamId; });
        showPlayersModal(teamPlayers);
    })
        .catch(function (error) { return console.error("Error:", error); });
}
function showPlayersModal(players) {
    var modal = document.querySelector("#modal");
    if (!modal) {
        modal = document.createElement("dialog");
        modal.id = "modal";
        modal.className = "modal";
        document.body.appendChild(modal);
    }
    while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
    }
    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    var closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", function () { return modal.close(); });
    var playerList = document.createElement("ul");
    players.forEach(function (player) {
        var listItem = document.createElement("li");
        listItem.textContent = "".concat(player.firstName, " ").concat(player.lastName);
        playerList.appendChild(listItem);
    });
    modalContent.appendChild(closeButton);
    modalContent.appendChild(playerList);
    modal.appendChild(modalContent);
    modal.showModal();
}

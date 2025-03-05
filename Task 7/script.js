/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus.
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
var ENDPOINT = 'NBA.json';
window.onload = function () {
    fetch(ENDPOINT)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        renderTeams(data.teams);
    })
        .catch(function (error) {
        console.error("Error:", error);
    });
};
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
        teamTitle.textContent = team.name;
        teamCard.appendChild(teamTitle);
        var playersContainer = document.createElement("div");
        playersContainer.className = "players-container";
        team.players.forEach(function (player) {
            var playerCard = document.createElement("div");
            playerCard.className = "player-card";
            var playerName = document.createElement("p");
            playerName.textContent = "".concat(player.firstName, " ").concat(player.lastName);
            var playerLink = document.createElement("a");
            playerLink.href = player.googleSearch;
            playerLink.textContent = "Additional Information";
            playerCard.appendChild(playerName);
            playerCard.appendChild(playerLink);
            playersContainer.appendChild(playerCard);
        });
        teamCard.appendChild(playersContainer);
        output.appendChild(teamCard);
    });
}

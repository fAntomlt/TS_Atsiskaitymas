/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'NBA.json';

window.onload = function () { //Naudojau window.onload, nes minejai, kad domcontentloaded pasenes labai
    fetch(ENDPOINT)
    .then(response => {
          return response.json()
        })
        .then(data => {
          renderTeams(data.teams)
        })
        .catch(error => {
          console.error("Error:", error)
        })
    };
  
  function renderTeams(teams){
    const output = document.querySelector("#output")
    if(!output) return;
    while(output.firstChild){
      output.removeChild(output.firstChild)
    }
  
    teams.forEach((team) => {
        const teamCard = document.createElement("div")
        teamCard.className = "team-card"
      
        const teamTitle = document.createElement("h2")
        teamTitle.textContent = team.name;
        teamCard.appendChild(teamTitle)
  
        const playersContainer = document.createElement("div")
        playersContainer.className = "players-container"
  
    team.players.forEach((player) => {
        const playerCard = document.createElement("div")
        playerCard.className = "player-card"
        
        const playerName = document.createElement("p")
        playerName.textContent = `${player.firstName} ${player.lastName}`
        
        const playerLink = document.createElement("a")
        playerLink.href = player.googleSearch;
        playerLink.textContent = "Additional Information";
        
        playerCard.appendChild(playerName)
        playerCard.appendChild(playerLink)
        playersContainer.appendChild(playerCard)
    });
        teamCard.appendChild(playersContainer)
        output.appendChild(teamCard)
    });
}
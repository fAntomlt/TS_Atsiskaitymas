/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const TEAMS_ENDPOINT = 'teams.json';
const PLAYERS_ENDPOINT = 'players.json';

type Team = {
    id: number;
    abbreviation: string;
    teamName: string;
    simpleName: string;
    location: string;
}
type Player = {
    firstName: string;
    lastName: string;
    id: number;
    teamId: number;
}

window.onload = function (): void {
    fetchTeams()
}

function fetchTeams(): void {
    fetch(TEAMS_ENDPOINT)
        .then((response: Response) => response.json())
        .then((data: {teams: Team[]}) => renderTeams(data.teams))
        .catch((error: Error) => console.error("Error:", error))
    }

function renderTeams(teams: Team[]): void {
    const output = document.querySelector("#output") as HTMLElement
    if (!output) return;
    while(output.firstChild){
        output.removeChild(output.firstChild);
    }

    teams.forEach((team: Team) => {
        const teamCard = document.createElement("div")
        teamCard.className = "team-card";
        
        const teamTitle = document.createElement("h2")
        teamTitle.textContent = team.teamName;
        
        const teamInfo = document.createElement("p")
        teamInfo.textContent = `${team.location} - ${team.simpleName} (${team.abbreviation})`;
        
        const playersButton = document.createElement("button")
        playersButton.textContent = "Players";
        playersButton.addEventListener("click", () => fetchPlayers(team.id))
        
        teamCard.appendChild(teamTitle)
        teamCard.appendChild(teamInfo)
        teamCard.appendChild(playersButton)
        output.appendChild(teamCard)
    });
  }
  
  function fetchPlayers(teamId: number): void{
    fetch(PLAYERS_ENDPOINT)
        .then((response: Response) => response.json())
        .then((data: {players: Player[]}) => {
        const teamPlayers = data.players.filter((player: Player) => player.teamId === teamId)
        showPlayersModal(teamPlayers)
        })
        .catch((error: Error) => console.error("Error:", error));
  }
  
  function showPlayersModal(players: Player[]): void{
    let modal = document.querySelector("#modal") as HTMLDialogElement
    if(!modal){
      modal = document.createElement("dialog")
      modal.id = "modal";
      modal.className = "modal";
      document.body.appendChild(modal)
    }
  
    while(modal.firstChild){
      modal.removeChild(modal.firstChild);
    }
  
    const modalContent = document.createElement("div")
    modalContent.className = "modal-content";
  
    const closeButton = document.createElement("button")
    closeButton.className = "close-button";
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => modal.close())
  
    const playerList = document.createElement("ul")
    players.forEach((player: Player) => {
      const listItem = document.createElement("li")
      listItem.textContent = `${player.firstName} ${player.lastName}`;
      playerList.appendChild(listItem)
    })
  
    modalContent.appendChild(closeButton)
    modalContent.appendChild(playerList)
    modal.appendChild(modalContent)
    modal.showModal()
  }
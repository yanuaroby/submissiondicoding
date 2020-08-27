import './player-item.js';
 
class FootballPlayer extends HTMLElement {
   set players(players) {
       this._players = players;
       this.render();
   }

    render() {
       this.innerHTML = "";
       this._players.forEach(player => {
           const playerItemElement = document.createElement("player-item");
           playerItemElement.player = player;
           this.appendChild(playerItemElement);
       })
    }
     renderError(message) {
       this.innerHTML = "";
       this.innerHTML += `
       <h2 class="placeholder">${message}</h2>`;
   
   }
}
 
customElements.define("football-player", FootballPlayer);
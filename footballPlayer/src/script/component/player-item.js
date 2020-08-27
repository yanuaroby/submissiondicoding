class PlayerItem extends HTMLElement {
    set player(player) {
        this._player = player;
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <img class="pict-player" src="${pictPlayer}" alt="Pict Player">
        <div class="player-info">
            <h2>${name}</h2>
            <p>${description}</p>
        </div>`;
    }
 }
  
 customElements.define("player-item", PlayerItem);
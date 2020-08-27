import players from './players.js'

class DataSource {
    static searchPlayer(keyword) {
        return new Promise((resolve, reject) => {
            const filteredPlayers = players.filter(player => player.name.toUpperCase().includes(keyword.toUpperCase()));

            if (filteredPlayers.length) {
                resolve(filteredPlayers);
            } else {
                reject(keyword + " is not found");
            }
        });
    }   
};

export default DataSource;
import "../component/football-player.js"
import '../component/search-bar.js';
import DataSource from '../data/data-source.js'

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const footballPlayerElement = document.querySelector("football-player");

    const onButtonSearchClicked = () => {
        DataSource.searchPlayer(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const renderResult = results => {
        footballPlayerElement.players = results;
    };

    const fallbackResult = message => {
        footballPlayerElement.renderError(message);

    searchElement.clickEvent = onButtonSearchClicked;
    }
};

export default main;
'use strict'

var Mapper = (function() {

var map = [
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

    function mapGenerator () {
        let mapcontainer = document.querySelector('.mapContainer');
        for (let row = 0; row < map.length; row++ ) {
            for (let tile = 0; tile < map[row].length; tile++ ) {
                let createdTile = document.createElement('div');
                mapcontainer.appendChild(createdTile);
                if (map[row][tile] == 0) {
                    createdTile.setAttribute('class', 'buildable');
                }
                if (map[row][tile] == 1) {
                    createdTile.setAttribute('class', 'road');
                    if (row == 0) {
                        createdTile.setAttribute('class', 'entry');
                    }
                    if (tile == 21) {
                        createdTile.setAttribute('class', 'exit');
                    }
                }
            }
        }
    }

    return {
        mapGenerator: mapGenerator
    }
})();
Mapper.mapGenerator();

var MassVectocid = (function() {

    function vectocidGenerator () {
        let mapcontainer = document.querySelector('.mapContainer');
        for (let row = 0; row < map.length; row++ ) {
            for (let tile = 0; tile < map[row].length; tile++ ) {
                let createdTile = document.createElement('div');
                mapcontainer.appendChild(createdTile);
                if (map[row][tile] == 0) {
                    createdTile.setAttribute('class', 'buildable');
                }
                if (map[row][tile] == 1) {
                    createdTile.setAttribute('class', 'road');
                    if (row == 0) {
                        createdTile.setAttribute('class', 'entry');
                    }
                    if (tile == 21) {
                        createdTile.setAttribute('class', 'exit');
                    }
                }
            }
        }
    }

    return {
        mapGenerator: mapGenerator
    }
})();
Mapper.mapGenerator();

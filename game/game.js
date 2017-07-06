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

    var waves = [
        ['blue', 550, 3], ['red', 660, 4], ['blue', 769, 5], ['green', 896, 6], ['grey', 1045, 7],
        ['yellow', 1185, 8], ['blue', 1422, 9], ['purple', 1658, 10], ['blue', 1934, 11], ['grey', 2256, 12],
        ['blue', 2631, 13], ['green', 3069, 14], ['blue', 3580, 15], ['yellow', 4177, 16], ['grey', 4873, 17],
        ['purple', 5684, 18], ['blue', 6631, 19], ['red', 7736, 20], ['blue', 9025, 21], ['grey', 10528, 22],
        ['blue', 12283, 23], ['yellow', 14330, 24], ['blue', 16719, 25], ['purple', 19504, 26], ['grey', 22755, 27],
        ['red', 26547, 28], ['blue', 30011, 29], ['green', 36133, 30], ['blue', 42154, 31], ['grey', 49179, 32],
        ['yellow', 57375, 33], ['blue', 66937, 34], ['purple', 78092, 35], ['blue', 91107, 36], ['grey', 106291, 37],
        ['purple', 124005, 38], ['blue', 144673, 39], ['red', 168784, 40], ['blue', 191445, 41], ['multicolor', 229734, 42]]

    var waveCounter = 0;
    var oneWave = [];
    var vectocidCounter = 0;

    function vectocidGenerator() {
        vectocidCounter++;
        let mapcontainer = document.querySelector('.mapContainer');

        let outerContainer = document.createElement('div');
        mapcontainer.appendChild(outerContainer);

        if (vectocidCounter % 2 == 1) {
            oneWave.push(waves[waveCounter]);
            outerContainer.setAttribute('class', 'outerContainer1');

            var mainContainer = document.createElement('div');
            outerContainer.appendChild(mainContainer);
            mainContainer.setAttribute('class', 'mainContainer');
        }

        if (vectocidCounter % 2 == 0) {
            oneWave.push(waves[waveCounter]);
            outerContainer.setAttribute('class', 'outerContainer2');

            var mainContainer = document.createElement('div');
            outerContainer.appendChild(mainContainer);
            mainContainer.setAttribute('class', 'mainContainer');

            if (vectocidCounter < 28) {
                MassVectocid.generatorStarter();
            }
        }

        if (waves[waveCounter][0] == 'blue') {
            let blueSquare = document.createElement('div');
            mainContainer.appendChild(blueSquare);
            blueSquare.setAttribute('class', 'blueSquare');
        }

        if (waves[waveCounter][0] == 'green') {
            let greenSquare = document.createElement('div');
            mainContainer.appendChild(greenSquare);
            greenSquare.setAttribute('class', 'greenSquare');
        }

        if (waves[waveCounter][0] == 'purple') {
            let purpleSquare = document.createElement('div');
            mainContainer.appendChild(purpleSquare);
            purpleSquare.setAttribute('class', 'purpleSquare');
        }

        if (waves[waveCounter][0] == 'grey') {
            let greySquare = document.createElement('div');
            mainContainer.appendChild(greySquare);
            greySquare.setAttribute('class', 'greySquare');
        }

        if (waves[waveCounter][0] == 'yellow') {
            let yellowSquare = document.createElement('div');
            mainContainer.appendChild(yellowSquare);
            yellowSquare.setAttribute('class', 'yellowSquare');
        }

        if (waves[waveCounter][0] == 'red') {
            let firstSquare = document.createElement('div');
            mainContainer.appendChild(firstSquare);
            firstSquare.setAttribute('class', 'firstSquare');

            let secondSquare = document.createElement('div');
            mainContainer.appendChild(secondSquare);
            secondSquare.setAttribute('class', 'secondSquare');

            let innerCircle = document.createElement('div');
            mainContainer.appendChild(innerCircle);
            innerCircle.setAttribute('class', 'innerCircle');

            let outerCircle = document.createElement('div');
            mainContainer.appendChild(outerCircle);
            outerCircle.setAttribute('class', 'outerCircle');

            let firstarm = document.createElement('div');
            mainContainer.appendChild(firstarm);
            firstarm.setAttribute('class', 'first arm');

            let secondarm = document.createElement('div');
            mainContainer.appendChild(secondarm);
            secondarm.setAttribute('class', 'second arm');

            let thirdarm = document.createElement('div');
            mainContainer.appendChild(thirdarm);
            thirdarm.setAttribute('class', 'third arm');

            let fourtharm = document.createElement('div');
            mainContainer.appendChild(fourtharm);
            fourtharm.setAttribute('class', 'fourth arm');

            let fiftharm = document.createElement('div');
            mainContainer.appendChild(fiftharm);
            fiftharm.setAttribute('class', 'fifth arm');

            let sixtharm = document.createElement('div');
            mainContainer.appendChild(sixtharm);
            sixtharm.setAttribute('class', 'sixth arm');

            let seventharm = document.createElement('div');
            mainContainer.appendChild(seventharm);
            seventharm.setAttribute('class', 'seventh arm');

            let eigtharm = document.createElement('div');
            mainContainer.appendChild(eigtharm);
            eigtharm.setAttribute('class', 'eigth arm');
        }
        console.log(vectocidCounter);

        if (vectocidCounter == 28) {
            vectocidCounter = 0;
            waveCounter++;
        }
    }

    function generatorStarter() {
        setTimeout(function(){ vectocidGenerator(); }, 500);
        setTimeout(function(){ vectocidGenerator(); }, 500);
    }

    function nextWave() {
        if (vectocidCounter == 0) {
            generatorStarter();
        }
    }

    return {
        nextWave: nextWave,
        generatorStarter: generatorStarter
    }
})();

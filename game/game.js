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
    var enemyList1 = [];
    var enemyList2 = [];
    var enemyList = [];

    function vectocidGenerator() {
        vectocidCounter++;
        let mapcontainer = document.querySelector('.mapContainer');
        let outerContainer = document.createElement('div');

        mapcontainer.appendChild(outerContainer);

        if (vectocidCounter % 2 == 1) {
            oneWave.push(waves[waveCounter]);
            outerContainer.setAttribute('class', 'outerContainer1');

            enemyList1.push(outerContainer);
            enemyList.push(outerContainer);

            var mainContainer = document.createElement('div');
            outerContainer.appendChild(mainContainer);
            mainContainer.setAttribute('class', 'mainContainer');
        }

        if (vectocidCounter % 2 == 0) {
            oneWave.push(waves[waveCounter]);
            outerContainer.setAttribute('class', 'outerContainer2');
            let outerContainer2 = document.querySelector('outerContainer2');
            enemyList2.push(outerContainer);
            enemyList.push(outerContainer);

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

        if (vectocidCounter == 28) {
            vectocidCounter = 0;
            waveCounter++;
        }
    }

    function generatorStarter() {
        setTimeout(function(){ vectocidGenerator(); }, 500);
        setTimeout(function(){ vectocidGenerator(); }, 500);
        setTimeout(function(){ targetPrepare(); }, 500);
    }

    function nextWave() {
        if (vectocidCounter == 0) {
            generatorStarter();
            // getPosition();
            targetPrepare();
            setInterval(function(){ Targeter.coordinateCalculator(); }, 100);
            setInterval(function(){ Targeter.coordinateUpdater(); }, 100);
        }
    }

    return {
        enemyList1: enemyList1,
        enemyList2: enemyList2,
        enemyList: enemyList,
        nextWave: nextWave,
        generatorStarter: generatorStarter
    }
})();


var TowerCreator = (function() {

    var towerList = [];

    function hoverTower (type) {
        let allowBuild = document.querySelectorAll('.buildable');
        let noBuild = document.querySelectorAll('.road');
        if (type == 'g1') {
            for (let i = 0; i < allowBuild.length; i++) {
                allowBuild[i].setAttribute('class', 'buildable g1');
                let coordinates = allowBuild[i].getBoundingClientRect();
                allowBuild[i].setAttribute('onclick', 'TowerCreator.noHover(event, "g1")');
            }
            for (let i = 0; i < noBuild.length; i++) {
                noBuild[i].setAttribute('class', 'road glno');
                noBuild[i].setAttribute('onclick', 'TowerCreator.noHover(event, "no")');
            }
        }
    }

    function noHover (e, type) {
        let allowBuild = document.querySelectorAll('.buildable.g1');
        let noBuild = document.querySelectorAll('.road.glno');
        for (let i = 0; i < allowBuild.length; i++) {
            allowBuild[i].setAttribute('class', 'buildable');
        }
        for (let i = 0; i < noBuild.length; i++) {
            noBuild[i].setAttribute('class', 'road');
        }
        if (type !== 'no') {
            towerBuilder(e, type);
        }
    }

    function towerBuilder (e, type) {
        let tower = e.target;
        tower.setAttribute('class', 'g1');

        let laserDrawer1 = document.createElement('div');
        tower.appendChild(laserDrawer1);
        laserDrawer1.setAttribute('class', 'innerLaser');

        let laserDrawer2 = document.createElement('div');
        tower.appendChild(laserDrawer2);
        laserDrawer2.setAttribute('class', 'innerLaserLine');
        // towerlist[color, attackspeed, cost, damage, range, x coordinate, y coordinate]
        TowerCreator.towerList.push(['green', '100ms', 50, 22, 70, e.clientX, e.clientY]);
    }

    return {
        hoverTower: hoverTower,
        noHover: noHover,
        towerList: towerList
    }
})();


var Targeter = (function() {

    var enemyList = [];
    var vectocidCoorinates = [];
    var towerRanges = [];

    function coordinateCalculator () {

        if (MassVectocid.enemyList.length > 0) {
            for (let i = 0; i < MassVectocid.enemyList.length; i++) {
                Targeter.vectocidCoorinates.push([MassVectocid.enemyList[i].getBoundingClientRect().left, MassVectocid.enemyList[i].getBoundingClientRect().top]);
            }
        }

        if (TowerCreator.towerList.length > 0) {
            for (let i = 0; i < TowerCreator.towerList.length; i++) {
                Targeter.towerRanger();
            }
        }
    }

    function coordinateUpdater () {
        for (let i = 0; i < MassVectocid.enemyList.length; i++) {
            Targeter.vectocidCoorinates[i][0] = MassVectocid.enemyList[i].getBoundingClientRect().left;
            Targeter.vectocidCoorinates[i][1] = MassVectocid.enemyList[i].getBoundingClientRect().top;
        }
    }


    function towerRanger () {
        for (let i = 0; i < TowerCreator.towerList.length; i++) {
            if (Targeter.towerRanges.length < TowerCreator.towerList.length) {
                Targeter.towerRanges.push(TowerCreator.towerList[i]);
                if (Targeter.towerRanges[i].length < 8) {
                    Targeter.towerRanges[i] = [];
                    Targeter.towerRanges[i].push(TowerCreator.towerList[i][0]);
                    Targeter.towerRanges[i].push(TowerCreator.towerList[i][1]);
                    Targeter.towerRanges[i].push(TowerCreator.towerList[i][2]);
                    Targeter.towerRanges[i].push(TowerCreator.towerList[i][3]);
                    Targeter.towerRanges[i].push(TowerCreator.towerList[i][4]);
                    Targeter.towerRanges[i].push(TowerCreator.towerList[i][5] - TowerCreator.towerList[i][4]);
                    Targeter.towerRanges[i].push(TowerCreator.towerList[i][5] + TowerCreator.towerList[i][4]);
                    Targeter.towerRanges[i].push(TowerCreator.towerList[i][6] - TowerCreator.towerList[i][4]);
                    Targeter.towerRanges[i].push(TowerCreator.towerList[i][6] + TowerCreator.towerList[i][4]);
                }
            }
        }
        Targeter.targetSystem();
    }

    function targetSystem () {
        if (Targeter.towerRanges[0][6]>= Targeter.vectocidCoorinates[0][0] && Targeter.towerRanges[0][5] <= Targeter.vectocidCoorinates[0][0]){
            if (Targeter.towerRanges[0][8] >= Targeter.vectocidCoorinates[0][1] && Targeter.towerRanges[0][7] <= Targeter.vectocidCoorinates[0][1]) {
                Targeter.fire()
            }
        }
    }
    // towerlist[color, attackspeed, cost, damage, range, x coordinate, y coordinate]

    function fire() {
        if (document.querySelector('.greenLaserCannon') !== null) {
            var child = document.querySelector('.greenLaserCannon');
            child.innerhtml = '';
        }

        var deltaX = Targeter.vectocidCoorinates[0][0] - TowerCreator.towerList[0][5];
        var deltaY = Targeter.vectocidCoorinates[0][1] - TowerCreator.towerList[0][6];

        var laserLength = Math.sqrt((Math.pow(deltaX, 2) + Math.pow(deltaY, 2)));
        var rotate = Math.atan(deltaY / deltaX) * (180 / Math.PI);

        var coordinateSystem = document.querySelector('#coordinates');
        var greenLaserCannon = document.createElement('div');
        coordinateSystem.appendChild(greenLaserCannon);
        greenLaserCannon.setAttribute('class', 'greenLaserCannon');
        greenLaserCannon.style.left = TowerCreator.towerList[0][5] + 'px';
        greenLaserCannon.style.height = '0px';
        if (deltaY < 0 && deltaX < 0) {
            greenLaserCannon.style.transform = 'rotate(' + rotate + 'deg) scaleX(-1) scaleY(-1)';
            greenLaserCannon.style.width = (laserLength + 5) + 'px';
            greenLaserCannon.style.top = (TowerCreator.towerList[0][6] - 5) + 'px';
        }
        if (deltaY < 0 && deltaX > 0) {
            greenLaserCannon.style.transform = 'rotate(' + rotate + 'deg) scaleY(-1)';
            greenLaserCannon.style.width = (laserLength + 5) + 'px';
            greenLaserCannon.style.top = (TowerCreator.towerList[0][6] - 5) + 'px';
        }
        if (deltaY > 0 && deltaX > 0) {
            greenLaserCannon.style.transform = 'rotate(' + rotate + 'deg) scaleY(-1)';
            greenLaserCannon.style.width = (laserLength - 5) + 'px';
            greenLaserCannon.style.top = (TowerCreator.towerList[0][6] + 5) + 'px';
        }
        if (deltaY > 0 && deltaX < 0) {
            greenLaserCannon.style.transform = 'rotate(' + rotate + 'deg) scaleX(-1)';
            greenLaserCannon.style.width = (laserLength - 5) + 'px';
            greenLaserCannon.style.top = (TowerCreator.towerList[0][6] + 5) + 'px';
        }
    }

    return {
        coordinateCalculator: coordinateCalculator,
        towerRanges: towerRanges,
        towerRanger: towerRanger,
        targetSystem: targetSystem,
        vectocidCoorinates: vectocidCoorinates,
        coordinateUpdater: coordinateUpdater,
        fire: fire
    }
})();

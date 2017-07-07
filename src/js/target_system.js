'use strict';

var targetPrepare = function() {
    // const oneElement = document.querySelectorAll('.outerContainer1');
    // console.log('oneELement: ', oneElement);
    let containerTower = []
    const oneTower = document.querySelectorAll('.buildable')[54];
    containerTower.push(oneTower);
    // console.log(document.querySelectorAll('.buildable')[57]);

    setTimeout(function(){ getPosition(containerTower) }, 100);
}

var getPosition = function(containerTower) {
    // console.log('containerTower: ', containerTower);
    for (let i = 0; i < MassVectocid.enemyList.length; i++) {
        var enemy1 = MassVectocid.enemyList[i];
        var enemyHp = MassVectocid.oneWave[i][1]
        var enemyPosition = enemy1.getBoundingClientRect();
    }

    for (let i = 0; i < containerTower.length; i++) {
        var towerPosition = containerTower[i].getBoundingClientRect();
    }
    var towerX = {
        left: towerPosition.left - towerPosition.width,
        right: towerPosition.right + towerPosition.width
    }
    var towerY = {
        top: towerPosition.top - (towerPosition.height * 2),
        bottom: towerPosition.bottom + (towerPosition.height * 2)
    }
    // console.log(enemyPosition);
    // var oneTowerPosition = oneTower.getBoundingClientRect();
    // var xOneTower = {
    //     left: oneTowerPosition.left - oneTowerPosition.width,
    //     right: oneTowerPosition.right + oneTowerPosition.width
    // }
    // var yOneTower = {
    //     top: oneTowerPosition.top - (oneTowerPosition.height * 2),
    //     bottom: oneTowerPosition.bottom + (oneTowerPosition.height * 2)
    // }
    // console.log(oneElement.childNodes[0], oneElement.childNodes[1]);
    targetSystem(enemyPosition, towerX, towerY, enemyHp);
}

var targetSystem = function(enemy, towerX, towerY) {
    // console.log('enemyPosition: ', enemy);
    // console.log('enemyList1: ', MassVectocid.enemyList1);
    // console.log('enemy: ', enemyY, enemyX, "\n", 'tower: ', towerX, towerY);

    // const oneElement = document.querySelectorAll('.mainContainer div');
    if (towerX.right >= enemy.left && towerX.left <= enemy.right){
        if (towerY.bottom >= enemy.top && towerY.top <= enemy.bottom) {
            // console.log(enemyX, enemyY);
            console.log('TOWER TARGETING!')
            // var nodes = document.querySelectorAll('.mainContainer div');
            // for(var i=0; i<nodes.length; i++) {
            //     nodes[i].style.borderColor = 'yellow';
            // }
        }
    }
    // else {
    //     var nodes = document.querySelectorAll('.mainContainer div');
    //     for(var i=0; i<nodes.length; i++) {
    //         nodes[i].style.borderColor = 'red';
    //     }
    // }
}

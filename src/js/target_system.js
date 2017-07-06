'use strict';

const oneElement = document.querySelector('.outerContainer1');
const oneTower = document.querySelectorAll('.buildable')[54];

console.log(document.querySelectorAll('.buildable')[57]);
console.log(oneTower);


var oneTowerPosition = oneTower.getBoundingClientRect();
console.log(oneTowerPosition);
// var xOneTower = {
//     left: oneTowerPosition.left - (oneTowerPosition.height * 5),
//     right: oneTowerPosition.right - (oneTowerPosition.height * 2)
// }
// var yOneTower = {
//     top: oneTowerPosition.top - (oneTowerPosition.height * 2),
//     bottom: oneTowerPosition.bottom + (oneTowerPosition.height * 2)
// }

// console.log('Tower X: ', xOneTower, '\n', 'Tower Y: ', yOneTower);

var getPosition = function() {

    var oneElementPosition = oneElement.getBoundingClientRect();
    var xOneElement = {
        left: oneElementPosition.left,
        right: oneElementPosition.right
    }
    var yOneElement = {
        top: oneElementPosition.top,
        bottom: oneElementPosition.bottom
    }
    console.log(oneElementPosition);

    var oneTowerPosition = oneTower.getBoundingClientRect();
    var xOneTower = {
        left: oneTowerPosition.left,
        right: oneTowerPosition.right
    }
    var yOneTower = {
        top: oneTowerPosition.top - (oneTowerPosition.height * 2),
        bottom: oneTowerPosition.bottom + (oneTowerPosition.height * 2)
    }
    // console.log(oneElement.childNodes[0], oneElement.childNodes[1]);
    targetSystem(xOneElement, yOneElement, xOneTower, yOneTower);
}

var targetSystem = function(enemyX, enemyY, towerX, towerY) {
    // const oneElement = document.querySelectorAll('.mainContainer div');
    if (towerX.right >= enemyX.left && towerX.left <= enemyX.right){
        if (towerY.bottom >= enemyY.top && towerY.top <= enemyY.bottom) {
            // console.log(enemyX, enemyY);
            console.log('TOWER TARGETING!')
            var nodes = document.querySelectorAll('.mainContainer div');
            for(var i=0; i<nodes.length; i++) {
                nodes[i].style.borderColor = 'yellow';
            }
        }
    } else {
        var nodes = document.querySelectorAll('.mainContainer div');
        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.borderColor = 'red';
        }
    }
}

setInterval(function(){ getPosition(); }, 1000);

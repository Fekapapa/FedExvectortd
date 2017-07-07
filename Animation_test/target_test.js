const oneElement = document.querySelector('.outerContainer1');
const oneElementOuterCircle = document.querySelector('.outerContainer1 .outerCircle');
const oneLaser = document.querySelector('.laser34');

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

    var oneLaserPosition = oneLaser.getBoundingClientRect();
    var xOneLaser = {
        left: 200,
        right: 802
        // left: oneLaserPosition.left,
        // right: oneLaserPosition.right
    }
    var yOneLaser = {
        top: 200,
        bottom: 502
        // top: oneLaserPosition.top,
        // bottom: oneLaserPosition.bottom
    }
    targetSystem(xOneElement, yOneElement, xOneLaser, yOneLaser);
}

var targetSystem = function(enemyX, enemyY, towerX, towerY) {
    if (towerX.right >= enemyX.left && towerX.left <= enemyX.right){
        if (towerY.bottom >= enemyY.top && towerY.top <= enemyY.bottom) {
            console.log('LASER TARGETING!')
            // oneElementOuterCircle.style.border-color = 'yellow';
            // console.log(oneElementOuterCircle.style.border-color);
        }
    }
}

setInterval(function(){ getPosition(); }, 1000);

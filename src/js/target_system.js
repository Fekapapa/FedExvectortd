const oneElement = document.querySelector('.outerContainer1');
const oneLaser = document.querySelector('.laser34');

var getPosition = function() {
    console.log('alma')
    console.log(oneElement);
        var oneElementPosition = oneElement.getBoundingClientRect();
        var xOneELement = {
            xLeft: oneElementPosition.left,
            xRight: oneElementPosition.right
        }
        var yOneElement = {
            yTop: oneElementPosition.top,
            yBottom: oneElementPosition.bottom
        }
        console.log('yOneElement: ', yOneElement);
        // console.log(oneElementPosition);
        // console.log('enemey position: ', '\n', 'top: ', oneElementPosition.top, '\n', 'left: ', oneElementPosition.left);
        var oneLaserPosition = oneLaser.getBoundingClientRect();
        var xOneLaser = {
            xLeft: oneLaserPosition.left,
            xRight: oneLaserPosition.right
        }
        var yOneLaser = {
            yTop: oneLaserPosition.top,
            yBottom: oneLaserPosition.bottom
        }
        console.log('yOneLaser: ', yOneLaser);
}

// var targetSystem = function(enemy, tower) {
//
// }

setInterval(function(){ getPosition(); }, 1000);


ClientRect {top: 418, right: -85.02961730957031, bottom: 418, left: -135.0296173095703, width: 50…}
bottom:418
height:0
left:-135.0296173095703
right:-85.02961730957031
top:418
width:50

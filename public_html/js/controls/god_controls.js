var prevTime = performance.now();
var velocity = new THREE.Vector3();

var limitZMax = 0;
var limitZMin = 0;
var limitXMax = 0;
var limitXMin = 0;

function setGodControls(_limitZMax, _limitZMin, _limitXMax, _limitXMin) {
  limitZMax = _limitZMax;
  limitZMin = _limitZMin;
  limitXMax = _limitXMax;
  limitXMin = _limitXMin;


}

function godControls(_currentX, _currentZ, _currentY, moveForward, moveBackward, moveLeft, moveRight) {
    var currentX = _currentX;
    var currentZ = _currentZ;
    var currentY = _currentY;

    var results = {
        translate: true,
        translateX: '',
        translateY: '',
        translateZ: '',
        X: '',
        Y: '',
        Z: '',
    }

    var time = performance.now();
    var delta = (time - prevTime) / 1000;

    velocity.x -= velocity.x * 10.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

    if (moveForward) velocity.z -= 2000.0 * delta;
    if (moveBackward) velocity.z += 2000.0 * delta;

    if (moveLeft) velocity.x -= 2000.0 * delta;
    if (moveRight) velocity.x += 2000.0 * delta;

    if (currentX > limitXMax) {
        velocity.x = Math.max(0, velocity.x);
        results.translate = false;
        results.X = limitXMax;
        //controls.getObject().position.x = limitXMax;
    }
    if (currentX < limitXMin) {
        velocity.x = Math.min(0, velocity.x);
        results.translate = false;
        results.X = limitXMin;
        //controls.getObject().position.x = limitXMin;
    }
    if (currentZ > limitZMax) {
        velocity.z = Math.max(0, velocity.z);
        results.translate = false;
        results.Z = limitZMax;
        //controls.getObject().position.z = limitZMax;
    }
    if (currentZ < limitZMin) {
        velocity.z = Math.min(0, velocity.z);
        results.translate = false;
        results.Z = limitZMin;
        //controls.getObject().position.z = limitZMin;
    }

    if (currentY <= 500) {

        velocity.y = 0;
        results.translate = false;
        results.Y = 500;

        //controls.getObject().position.y = 500;

        //canJump = true;

    }

//    if (results.translate) {
  //      results.translate = true;
        results.translateX = velocity.x * delta;
        results.translateY = velocity.y * delta;
        results.translateZ = velocity.z * delta;
        //controls.getObject().translateX(velocity.x * delta);
        //controls.getObject().translateY(velocity.y * delta);
        //controls.getObject().translateZ(velocity.z * delta);
    //}



    prevTime = time;

    return results;


}

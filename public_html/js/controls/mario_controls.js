var marioHeight = 1.7 * meter;


function changeHeight() {
    var _1stFloorHeight = 4.7 * meter;
    if (marioHeight == _1stFloorHeight) {
        marioHeight = 1.7 * meter;
    } else {
        marioHeight = _1stFloorHeight;
    }
    controls.getObject().position.y = marioHeight;
}

var prevTime = performance.now();
var velocity = new THREE.Vector3();
var raycaster = new THREE.Raycaster();
var objects = [];

var limitZMax = 0;
var limitZMin = 0;
var limitXMax = 0;
var limitXMin = 0;

function setMarioControls(_limitZMax, _limitZMin, _limitXMax, _limitXMin, _objects) {
    limitZMax = _limitZMax;
    limitZMin = _limitZMin;
    limitXMax = _limitXMax;
    limitXMin = _limitXMin;
    objects = _objects;
}

function marioControls(cntrls, moveForward, moveBackward, moveLeft, moveRight) {

    var currentX = cntrls.getObject().position.x;
    var currentZ = cntrls.getObject().position.z;
    var currentY = cntrls.getObject().position.y;


    var results = {
        translate: true,
        translateX: '',
        translateY: '',
        translateZ: '',
        X: '',
        Y: '',
        Z: '',
    }

    /*raycaster.ray.origin.copy(controls.getObject().position);
    raycaster.ray.origin.y -= 20 * meter;
    raycaster.setFromCamera(controls.getDirection(), camera);
    var intersections = raycaster.intersectObjects(objects);*/


    raycaster.ray.origin.copy(cntrls.getObject().position);

    var dir = cntrls.getDirection(new THREE.Vector3(0, 0, 0)).clone();

    raycaster.ray.direction.copy(dir);

    var intersections = raycaster.intersectObjects(objects);
    var collision = false;

    //Check infront of player
    for (var i = 0; i < intersections.length; i++) {
        if (intersections[i].object.name) {
            var name = intersections[i].object.name;
            //console.log('OBJECT! : ' + intersections[i].distance);
            if (intersections[i].distance < 25) {
                collision = true;
                results.X = (Math.sign(dir.x) * -5) + currentX;
                results.Z = (Math.sign(dir.z) * -5) + currentZ;
                //intersections[i].object.material.color.set(0xff0000);
            }
        }
    };
    //rotate dir
    var axis = new THREE.Vector3(0, 1, 0);
    var angle = Math.PI / 2;
    dir.applyAxisAngle(axis, angle);
    raycaster.ray.direction.copy(dir);
    intersections = raycaster.intersectObjects(objects);
    //Check infront of player
    for (var i = 0; i < intersections.length; i++) {
        if (intersections[i].object.name) {
            var name = intersections[i].object.name;
            //console.log('OBJECT! : ' + intersections[i].distance);
            if (intersections[i].distance < 5) {
                collision = true;
                results.X = (Math.sign(dir.x) * -5) + currentX;
                results.Z = (Math.sign(dir.z) * -5) + currentZ;
                //intersections[i].object.material.color.set(0xff0000);
            }
        }
    };
    //rotate dir
    var axis = new THREE.Vector3(0, 1, 0);
    var angle = -Math.PI;
    dir.applyAxisAngle(axis, angle);
    raycaster.ray.direction.copy(dir);
    intersections = raycaster.intersectObjects(objects);
    //Check infront of player
    for (var i = 0; i < intersections.length; i++) {
        if (intersections[i].object.name) {
            var name = intersections[i].object.name;
            //console.log('OBJECT! : ' + intersections[i].distance);
            if (intersections[i].distance < 5) {
                collision = true;
                results.X = (Math.sign(dir.x) * -5) + currentX;
                results.Z = (Math.sign(dir.z) * -5) + currentZ;
                //intersections[i].object.material.color.set(0xff0000);
            }
        }
    };


    var isOnObject = intersections.length > 0;

    var time = performance.now();
    var delta = (time - prevTime) / 1000;

    velocity.x -= velocity.x * 10.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

    if (!collision) {
        if (moveForward) velocity.z -= 400.0 * delta;
        if (moveBackward) velocity.z += 400.0 * delta;

        if (moveLeft) velocity.x -= 400.0 * delta;
        if (moveRight) velocity.x += 400.0 * delta;
    }

    /*if (isOnObject === true) {
      velocity.y = Math.max(0, velocity.y);

      canJump = true;
    }*/

    if (currentX > limitXMax) {
        velocity.x = Math.max(0, velocity.x);
        results.X = limitXMax;
    }
    if (currentX < limitXMin) {
        velocity.x = Math.min(0, velocity.x);
        results.X = limitXMin;
    }
    if (currentZ > limitZMax) {
        velocity.z = Math.max(0, velocity.z);
        results.Z = limitZMax;
    }
    if (currentZ < limitZMin) {
        velocity.z = Math.min(0, velocity.z);
        results.Z = limitZMin;
    }

    results.translateX = velocity.x * delta;
    results.translateY = velocity.y * delta;
    results.translateZ = velocity.z * delta;

    if (currentY < (marioHeight)) {

        velocity.y = 0;
        results.translate = false;
        results.Y = marioHeight;
    }

    prevTime = time;
    return results;
};

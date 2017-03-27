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


function marioControls(limitZMax, limitZMin, limitXMax, limitXMin) {

    var currentX = controls.getObject().position.x;
    var currentZ = controls.getObject().position.z;

    /*raycaster.ray.origin.copy(controls.getObject().position);
    raycaster.ray.origin.y -= 20 * meter;
    raycaster.setFromCamera(controls.getDirection(), camera);
    var intersections = raycaster.intersectObjects(objects);*/


    raycaster.ray.origin.copy(controls.getObject().position);

    var dir = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone();

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
                controls.getObject().position.x = (Math.sign(dir.x) * -5) + controls.getObject().position.x;
                controls.getObject().position.z = (Math.sign(dir.z) * -5) + controls.getObject().position.z;
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
                controls.getObject().position.x = (Math.sign(dir.x) * -5) + controls.getObject().position.x;
                controls.getObject().position.z = (Math.sign(dir.z) * -5) + controls.getObject().position.z;
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
                controls.getObject().position.x = (Math.sign(dir.x) * -5) + controls.getObject().position.x;
                controls.getObject().position.z = (Math.sign(dir.z) * -5) + controls.getObject().position.z;
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
        controls.getObject().position.x = limitXMax;
    }
    if (currentX < limitXMin) {
        velocity.x = Math.min(0, velocity.x);
        controls.getObject().position.x = limitXMin;
    }
    if (currentZ > limitZMax) {
        velocity.z = Math.max(0, velocity.z);
        controls.getObject().position.z = limitZMax;
    }
    if (currentZ < limitZMin) {
        velocity.z = Math.min(0, velocity.z);
        controls.getObject().position.z = limitZMin;
    }

    controls.getObject().translateX(velocity.x * delta);
    controls.getObject().translateY(velocity.y * delta);
    controls.getObject().translateZ(velocity.z * delta);

    if (controls.getObject().position.y < (marioHeight)) {

        velocity.y = 0;
        controls.getObject().position.y = (marioHeight);

        canJump = true;
    }

    prevTime = time;
};

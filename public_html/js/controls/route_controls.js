function processJSONRoute(_fileName, movementCallback) {
    var json = (function() {
        var json = null;
        $.ajax({
            'async': true,
            'global': false,
            'url': "json-routes/" + _fileName,
            'dataType': "json",
            'success': function(data) {
                var instructions = data;

                //go to start position
                movementCallback(false, instructions.route.start.x, instructions.route.start.y, instructions.route.start.z, '', '');

                sleep(1500);

                ///for each movement in the list of instructions
                var _loopNo = instructions.route.path.length;
                asyncLoop(_loopNo, function(loop) {
                        var i = loop.iteration();
                        var _x = instructions.route.path[i].movement.x * meter;
                        var _y = instructions.route.path[i].movement.y * meter;
                        var _z = instructions.route.path[i].movement.z * meter;
                        var _t = instructions.route.path[i].movement.t;
                        movementCallback(true, _x, _y, _z, _t, function(result) {
                            //console.log('x: ' + controls.getObject().position.x + '-- m: ' + controls.getObject().position.x / meter);
                            //  console.log('y: ' + controls.getObject().position.y + '-- m: ' + controls.getObject().position.y / meter);
                            //  console.log('z: ' + controls.getObject().position.z + '-- m: ' + controls.getObject().position.z / meter);
                            // log the iteration
                            console.log(loop.iteration());

                            // Okay, for cycle could continue
                            loop.next();
                        })
                    },
                    function() {
                        console.log('cycle ended');
                        //console.log('x: ' + controls.getObject().position.x + '-- m: ' + controls.getObject().position.x / meter);
                        //console.log('y: ' + controls.getObject().position.y + '-- m: ' + controls.getObject().position.y / meter);
                        //console.log('z: ' + controls.getObject().position.z + '-- m: ' + controls.getObject().position.z / meter);
                        // log the iteration
                    }
                );


            }
        });


    })();

}

var _allRoutes = [];

function loadAllRoutes() {

    _fileName = 'routeGetItems.json';
    var json = (function() {
        var json = null;
        $.ajax({
            'async': true,
            'global': false,
            'url': "json-routes/" + _fileName,
            'dataType': "json",
            'success': function(data) {

                var _thisRoute = {
                    name: _fileName,
                    route: data,
                    startTime: ''
                };
                _allRoutes.push(_thisRoute);

            }
        });


    })();
}

function startRoute(_route, movementCallback) {

    var _thisRoute;
    for (var i = 0; i < _allRoutes.length; i++) {
        if (_allRoutes[i].name === _route) {
            _thisRoute = _allRoutes[i];
            _allRoutes[i].startTime = new Date().getTime();
        }
    }

    //go to start position
    movementCallback(false, _thisRoute.route.route.start.x, _thisRoute.route.route.start.y, _thisRoute.route.route.start.z, '', '');


}


var prevTime = performance.now();


function moveRoute(_route, x, y, z) {

    var velocity = new THREE.Vector3();
    var timeWindowS = 0;
    var timeWindowE = 0;



    var currentX = x;
    var currentY = y;
    var currentZ = z;

    var results = {
        complete: false,
        translate: true,
        translateX: '',
        translateY: '',
        translateZ: '',
        X: '',
        Y: '',
        Z: '',
    }

    var timeNow = new Date().getTime();

    var _thisRoute;
    var _routeStart;

    for (var i = 0; i < _allRoutes.length; i++) {
        if (_allRoutes[i].name === _route) {
            _routeStart = _allRoutes[i].startTime;
            _thisRoute = _allRoutes[i].route;
        }
    }

    var timeElapsed = timeNow - _routeStart;


    var foundWindow = false;


    for (var i = 0; i < _thisRoute.route.path.length; i++) {

        timeWindowS = timeWindowE;
        timeWindowE = timeWindowE + parseInt(_thisRoute.route.path[i].movement.t);
        //console.log('Elapsed Time:' + timeElapsed);
        //console.log('Window:' + timeWindowS + ' - ' + timeWindowE);

        if (timeElapsed < timeWindowE && timeElapsed > timeWindowS) {
            //WE ARE HERE IN THE ROUTE
            console.log('In Window: ' + i);
            foundWindow = true;

            var time = performance.now();
            var delta = (time - prevTime) / 1000;
            var moveForward = false;
            var moveBackward = false;
            var moveLeft = false;
            var moveRight = false;
            var moveUp = false;
            var moveDown = false;



            var error = 0.5;

            var _smooth = 0.2;
            var _fast = 1;

            var _distanceLimit = 100;

            var _xMove = _smooth;
            var _yMove = _smooth;
            var _zMove = _smooth;

            // IF desired location is bigger / smaller than current
            if (_thisRoute.route.path[i].movement.x > (currentX + error)) {
                moveForward = true;
                if ((_thisRoute.route.path[i].movement.x - currentX) > _distanceLimit) _xMove = _fast;
                console.log('x+             from:' + currentX + ' to: ' + _thisRoute.route.path[i].movement.x + ' Speed:' + _xMove);
            }
            if (_thisRoute.route.path[i].movement.x < (currentX - error)) {
                moveBackward = true;
                if ((currentX - _thisRoute.route.path[i].movement.x) > _distanceLimit) _xMove = _fast;
                console.log('x-             from:' + currentX + ' to: ' + _thisRoute.route.path[i].movement.x + ' Speed:' + _xMove);
            }
            if (_thisRoute.route.path[i].movement.z > (currentZ + error)) {
                moveRight = true;
                if ((_thisRoute.route.path[i].movement.z - currentZ) > _distanceLimit) _zMove = _fast;
                console.log('z+             from:' + currentZ + ' to: ' + _thisRoute.route.path[i].movement.z + ' Speed:' + _zMove);
            }
            if (_thisRoute.route.path[i].movement.z < (currentZ - error)) {
                moveLeft = true;
                if ((currentZ - _thisRoute.route.path[i].movement.z) > _distanceLimit) _zMove = _fast;
                console.log('z-             from:' + currentZ + ' to: ' + _thisRoute.route.path[i].movement.z + ' Speed:' + _zMove);

            }
            if (_thisRoute.route.path[i].movement.y > (currentY + error)) {
                moveUp = true;
                console.log('y+             from:' + currentY + ' to: ' + _thisRoute.route.path[i].movement.y);
            }
            if (_thisRoute.route.path[i].movement.y < (currentY - error)) {
                moveDown = true;
                console.log('y-             from:' + currentY + ' to: ' + _thisRoute.route.path[i].movement.y);
            }



            if (moveBackward) results.X = currentX - _xMove;
            if (moveForward) results.X = currentX + _xMove;
            if (moveLeft) {
                results.Z = currentZ - _zMove;
                console.log(currentZ);
                console.log(results.Z);
            }
            if (moveRight) results.Z = currentZ + _zMove;
            if (moveUp) results.Y = currentY + _yMove;
            if (moveDown) results.Y = currentY - _yMove;

            if (!moveBackward && !moveForward && !moveLeft && !moveRight && !moveUp && !moveDown) {
                //console.log('Not Moving');
            } else {
                console.log('Moving');
            }
            break;
        }



    }
    if (foundWindow) {
        //results.X = currentX + (velocity.x * 10);
        //results.Y = currentY + (velocity.y * 10);
        //results.Z = currentZ + (velocity.z * 10);
        //results.translateX = velocity.x * delta;
        //results.translateY = velocity.y * delta;
        //  results.translateZ = velocity.z * delta;
    } else {
        results.complete = true;
    }
    prevTime = time;
    return results;

}

function getTDistance(newP, oldP) {

    var _newP = parseFloat(newP);
    var _oldP = parseFloat(oldP);

    var diff = Math.abs(_oldP - _newP);

    if (_oldP > _newP) diff = diff * -1;

    return diff;

}

function sleep(ms) {
    var start = new Date().getTime(),
        expire = start + ms;
    while (new Date().getTime() < expire) {}
    return;
}


function asyncLoop(iterations, func, callback) {
    var index = 0;
    var done = false;
    var loop = {
        next: function() {
            if (done) {
                return;
            }

            if (index < iterations) {
                index++;
                func(loop);

            } else {
                done = true;
                callback();
            }
        },

        iteration: function() {
            return index - 1;
        },

        break: function() {
            done = true;
            callback();
        }
    };
    loop.next();
    return loop;
}

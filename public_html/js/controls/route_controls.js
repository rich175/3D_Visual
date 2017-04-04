////////////////////////////////////////////////////////////////////
///
///  This holds all functionality for navigating routes within 3D S2S
///
////////////////////////////////////////////////////////////////////



//Add new files to this array!  These are loaded by the application during inital load
var _fileNames = [
    'routeGetItems.json',
    'routeComplete.json',
    'routeDataErasure.json',
    'routeFunctional.json',
    'routeItemsArrive.json',
    'routeLockedLoop.json',
    'routeProcessing.json',
    'routeSold.json',
    'routeValueEst.json'
];

//Loaded Routes will be added into this array
var _allRoutes = [];
//Initialise a performance time
var prevTime = performance.now();






//Loads all files in the "_fileNames" into "_allRoutes"
function loadAllRoutes() {

    for (var i = 0; i < _fileNames.length; i++) {
        _fileName = _fileNames[i];
        loadRoute(_fileName);

    }

}
// functionality for loading JSON file
function loadRoute(_fileName) {

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

// This function starts a route, i.e. sets the start time, it should also make the system move to start point
function startRoute(_route, movementCallback) {

    var _thisRoute;
    for (var i = 0; i < _allRoutes.length; i++) {
        if (_allRoutes[i].name === _route) {
            _thisRoute = _allRoutes[i];
            _allRoutes[i].startTime = new Date().getTime();
        }
    }
    //go to start position
    movementCallback(_thisRoute.route.route.start.x, _thisRoute.route.route.start.y, _thisRoute.route.route.start.z, _route);
}


//This is called by the main script when a route has been selected.
//The function finds the route required AND where it should be on the route
//based on the time the route was initially started ("startRoute")
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
        console.log('Window:' + timeWindowS + ' - ' + timeWindowE + '  Elapsed Time:' + timeElapsed);

        if (timeElapsed <= timeWindowE && timeElapsed >= timeWindowS) {
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

            //when close is close enough
            var error = 0.5;

            //distance moved, in meters, every time function is called (and movement is required)
            var _smooth = 0.2;
            var _fast = 0.5;

            //distance which requires fast movement
            var _distanceLimit = 100;

            //set intially to slow
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
            if (moveLeft) results.Z = currentZ - _zMove;
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

    } else {
        results.complete = true;
    }
    prevTime = time;
    return results;

}

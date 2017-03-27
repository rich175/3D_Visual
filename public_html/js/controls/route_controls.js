function processJSONRoute(_fileName) {
    controlsEnabled = false;
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
                goToPosition(instructions.route.start.x, instructions.route.start.y, instructions.route.start.z);

                sleep(1500);

                ///for each movement in the list of instructions
                var _loopNo = instructions.route.path.length;
                asyncLoop(_loopNo, function(loop) {
                        var i = loop.iteration();
                        var _x = instructions.route.path[i].movement.x * meter;
                        var _y = instructions.route.path[i].movement.y * meter;
                        var _z = instructions.route.path[i].movement.z * meter;
                        var _t = instructions.route.path[i].movement.t;
                        moveToPosition(_x, _y, _z, _t, function(result) {
                            console.log('x: ' + controls.getObject().position.x + '-- m: ' + controls.getObject().position.x / meter);
                            console.log('y: ' + controls.getObject().position.y + '-- m: ' + controls.getObject().position.y / meter);
                            console.log('z: ' + controls.getObject().position.z + '-- m: ' + controls.getObject().position.z / meter);
                            // log the iteration
                            console.log(loop.iteration());

                            // Okay, for cycle could continue
                            loop.next();
                        })
                    },
                    function() {
                        console.log('cycle ended');
                        console.log('x: ' + controls.getObject().position.x + '-- m: ' + controls.getObject().position.x / meter);
                        console.log('y: ' + controls.getObject().position.y + '-- m: ' + controls.getObject().position.y / meter);
                        console.log('z: ' + controls.getObject().position.z + '-- m: ' + controls.getObject().position.z / meter);
                        // log the iteration
                    }
                );


            }
        });


    })();

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



//DISTANCE IN PIXELS
function moveToPosition(_nx, _ny, _nz, timeMs, callback) {


    var _totalTimeMs = parseFloat(timeMs);

    //every '_interval' the character should move
    var _interval = 50;

    //speed
    var _speedMeters = 2;
    //pixels per milliseconds, 25 pixels = 1m
    var _speed = (2 * 25) / 1000;

    //New positions
    var _newX = _nx;
    var _newY = _ny;
    var _newZ = _nz;
    //Existing positions
    var _existX = controls.getObject().position.x;
    var _existY = controls.getObject().position.y;
    var _existZ = controls.getObject().position.z;
    //Is the position a change?
    var xChange = true;
    var yChange = true;
    var zChange = true;

    //Distance in pixels (converted before this function)
    var _distanceX = getTDistance(_newX, _existX);
    var _distanceY = getTDistance(_newY, _existY);
    var _distanceZ = getTDistance(_newZ, _existZ);

    //Time to travel @ _speed
    var _miliSOfMovmentX = Math.abs(_distanceX / _speed);
    var _miliSOfMovmentY = Math.abs(_distanceY / _speed);
    var _miliSOfMovmentZ = Math.abs(_distanceZ / _speed);

    //Number of steps (miliseconds / miliseconds)
    var _totalStepsX = parseFloat(_miliSOfMovmentX / _interval);
    var _totalStepsY = parseFloat(_miliSOfMovmentY / _interval);
    var _totalStepsZ = parseFloat(_miliSOfMovmentZ / _interval);

    var _stepX = parseFloat(_distanceX / _totalStepsX);
    var _stepY = parseFloat(_distanceY / _totalStepsY);
    var _stepZ = parseFloat(_distanceZ / _totalStepsZ);

    console.log(getTDistance(_newX, _existX) + '/' + _totalTimeMs + ' / ' + _interval);
    var startTime = new Date().getTime();
    var count = 0;
    var xStop = false;
    var yStop = false;
    var zStop = false;

    var _stepCountX = 0;
    var _stepCountY = 0;
    var _stepCountZ = 0;
    console.log('x:' + _totalStepsX + ' y: ' + _totalStepsY + ' z: ' + _totalStepsZ);
    console.log('xstep:' + _stepX + ' ystep: ' + _stepY + ' zstep: ' + _stepZ);
    //this function fill fire every '_interval' ms

    var timeXStopMoving = new Date().getTime() + _miliSOfMovmentX;
    var timeYStopMoving = new Date().getTime() + _miliSOfMovmentY;
    var timeZStopMoving = new Date().getTime() + _miliSOfMovmentZ;

    var _now = new Date().getTime();
    var _totalStop = new Date().getTime() + _totalTimeMs;


    var interval = setInterval(function() {

        var _now = new Date().getTime();

        if (xChange) {
            if (_stepCountX >= _totalStepsX) {
                xStop = true;
            } else {
                controls.getObject().position.x = parseFloat(controls.getObject().position.x) + parseFloat(_stepX);
                _stepCountX++;
            }
        }
        if (yChange) {
            if (_stepCountY >= _totalStepsY) {
                yStop = true;
            } else {
                controls.getObject().position.y = parseFloat(controls.getObject().position.y) + parseFloat(_stepY);
                _stepCountY++;
            }
        }
        if (zChange) {
            if (_stepCountZ >= _totalStepsZ) {
                zStop = true;
            } else {
                controls.getObject().position.z = parseFloat(controls.getObject().position.z) + parseFloat(_stepZ);
                _stepCountZ++
            }
        }
        if (xStop && yStop && zStop) {
            if (_now > _totalStop) {
                clearInterval(interval);
                callback({
                    status: 'complete'
                });
                return;
            }
        }
        count++

    }, _interval);

}

function goToPosition(_x, _y, _z) {

  controls.getObject().position.y = _y * meter;

  controls.getObject().position.x = _x * meter;

  controls.getObject().position.z = _z * meter;

  animate();

}

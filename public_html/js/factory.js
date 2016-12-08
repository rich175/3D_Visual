var meter = 25;

function returnFactory(on_complete) {



    var loader = new THREE.TextureLoader();
    //var texture = loader.load('/images/whiteBrickTexture.jpg');
    //var texture2 = loader.load('/images/shopfloorGrids2.jpg');




    material = new THREE.MeshLambertMaterial({
        //  map: texture
    });

    layout = new THREE.MeshLambertMaterial({
        //map: texture2
    });



    var AllWalls = [];

    var factoryWidth = 80 * meter;
    var factoryLength = 63 * meter;
    var wallHeight = 5 * meter;
    var obj = [];

    /*Floor*/
    geometry = new THREE.PlaneGeometry(factoryWidth, factoryLength, 100, 100);
    geometry.rotateX(-Math.PI / 2);
    geometry.rotateY(-Math.PI / 2);
    material = new THREE.MeshBasicMaterial({
        color: '#CCCCCC'
    });

    mesh = new THREE.Mesh(geometry, layout);
    mesh.position.y = -0.5;
    //obj.push(mesh);



    var factoryWalls = {
        originX: -factoryLength / 2,
        originY: 0,
        originZ: -factoryWidth / 2,
        walls: [{ //bottom left outer factory walls
            color: '#D6D4CD',
            x1: 0,
            x2: 36 * meter,
            z1: 0,
            z2: 0,
            y: wallHeight,
              texture: 'images/metal_wall.jpg'
        }, { //wall between bay 3 and 2
            color: '#D6D4CD',
            x1: 40 * meter,
            x2: 44 * meter,
            z1: 0,
            z2: 0,
            y: wallHeight,
              texture: 'images/metal_wall.jpg'
        }, { // wall between bay 2 and 1
            color: '#D6D4CD',
            x1: 48.5 * meter,
            x2: 52.5 * meter,
            z1: 0,
            z2: 0,
            y: wallHeight,
              texture: 'images/metal_wall.jpg'
        }, {
            color: '#D6D4CD',
            x1: 56.8 * meter,
            x2: 63 * meter,
            z1: 0,
            z2: 0,
            y: wallHeight,
              texture: 'images/metal_wall.jpg'

        }, {
            color: '#D6D4CD',
            x1: 0,
            x2: factoryLength,
            z1: factoryWidth,
            z2: factoryWidth,
            y: wallHeight,
              texture: 'images/metal_wall.jpg'
        }, {
            color: '#D6D4CD',
            x1: 0,
            x2: 0,
            z1: 0,
            z2: factoryWidth,
            y: wallHeight,
            texture: 'images/metal_wall.jpg'
        }, {
            color: '#D6D4CD',
            x1: factoryLength,
            x2: factoryLength,
            z1: 0,
            z2: factoryWidth,
            y: wallHeight,
              texture: 'images/metal_wall.jpg'
        }],
        floors: [{
                x1: 0 * meter,
                x2: factoryLength,
                z1: 0 * meter,
                z2: factoryWidth,
                y: -1,
                texture: '/images/concrete.jpg'
            }

        ],
        ceiling: []
    };

    AllWalls.push(factoryWalls);


    //bay 1 door and floor marking
    var bay1 = {
        originX: 21 * meter,
        originY: 0,
        originZ: -40 * meter,
        walls: [{
            color: '#3167B9',
            transparency: true,
            opacity: 0.5,
            x1: 0 * meter,
            x2: 4.2 * meter,
            z1: 0 * meter,
            z2: 0 * meter,
            y: 5 * meter
        }],
        floors: [{
            x1: 0 * meter,
            x2: 4.2 * meter,
            z1: 0 * meter,
            z2: 19.5 * meter,
            y: 0 * meter,
            texture: 'images/concreteBlue.jpg'
        }],
        ceiling: []
    };

    AllWalls.push(bay1);

    //bay 2 door and floor marking
    var bay2 = {
        originX: 12.5 * meter,
        originY: 0,
        originZ: -40 * meter,
        walls: [{
            color: '#3167B9',
            transparency: true,
            opacity: 0.5,
            x1: 0 * meter,
            x2: 4.5 * meter,
            z1: 0 * meter,
            z2: 0 * meter,
            y: 5 * meter
        }],
        floors: [{
            x1: 0 * meter,
            x2: 4.5 * meter,
            z1: 0 * meter,
            z2: 19.5 * meter,
            y: 0 * meter,
            texture: 'images/concreteBlue.jpg'
        }],
        ceiling: []
    };

    AllWalls.push(bay2);

    //bay 3 door and floor marking
    var bay3 = {
        originX: 4.5 * meter,
        originY: 0,
        originZ: -40 * meter,
        walls: [{
            color: '#3167B9',
            transparency: true,
            opacity: 0.5,
            x1: 0 * meter,
            x2: 4 * meter,
            z1: 0 * meter,
            z2: 0 * meter,
            y: 5 * meter
        }],
        floors: [{
            x1: 0 * meter,
            x2: 4 * meter,
            z1: 0 * meter,
            z2: 19.5 * meter,
            y: 0 * meter,
            texture: 'images/concreteBlue.jpg'
        }],
        ceiling: []
    };

    AllWalls.push(bay3);

    //receipt cage adjacent to processingArea
    var receiptCage = {
        originX: -31.5 * meter,
        originY: 0,
        originZ: -40 * meter,
        walls: [{ //left and bottom wall shared with outside,  this is the top lhs wall
            color: '#D6D4CD',
            transparency: true,
            opacity: 0.5,
            x1: 9.2 * meter,
            x2: 9.2 * meter,
            z1: 0 * meter,
            z2: 4.5 * meter,
            y: 2.5 * meter
        }, { //this is the top rhs of door wall
            color: '#D6D4CD',
            transparency: true,
            opacity: 0.5,
            x1: 9.2 * meter,
            x2: 9.2 * meter,
            z1: 5.5 * meter,
            z2: 34.5 * meter,
            y: 2.5 * meter
        }],
        floors: [{
            x1: 0 * meter,
            x2: 9.2 * meter,
            z1: 0 * meter,
            z2: 34.5 * meter,
            y: 0 * meter,
            texture: 'images/concreteBlue.jpg'
        }],
        ceiling: []
    };

    AllWalls.push(receiptCage);

    var refurbRoom = {
        originX: -31.5 * meter,
        originY: 0,
        originZ: -5.5 * meter,

        walls: //right side wall lower
            [{
                color: '#D6D4CD',
                transparency: false,
                opacity: 1,
                x1: 0 * meter,
                x2: 1.5 * meter,
                z1: 20 * meter,
                z2: 20 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, //wall right, top part
            {
                x1: 2.5 * meter,
                x2: 9.2 * meter,
                z1: 20 * meter,
                z2: 20 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'

            },

            {
                //wall left lower
                x1: 0 * meter,
                x2: 1.5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            },
            //wall left upper
            {
                x1: 2.5 * meter,
                x2: 9.2 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 2.5 * meter,
                texture: 'images/whiteBrick.jpg'

            }, {
                x1: 9.2 * meter,
                x2: 9.2 * meter,
                z1: 0 * meter,
                z2: 2 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 9.2 * meter,
                x2: 9.2 * meter,
                z1: 4 * meter,
                z2: 20 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.5 * meter,
                x2: 3.5 * meter,
                z1: 0 * meter,
                z2: 1 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.5 * meter,
                x2: 3.5 * meter,
                z1: 2 * meter,
                z2: 20 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }
        ],
        floors: [{
            x1: 0 * meter,
            x2: 3.5 * meter,
            z1: 0 * meter,
            z2: 20 * meter,
            y: 0 * meter,
            texture: 'images/greyCarpet.jpg'
        }, {
            x1: 4.5 * meter,
            x2: 8.2 * meter,
            z1: 1 * meter,
            z2: 19 * meter,
            y: 0 * meter,
            texture: 'images/redCarpet.jpg'
        }],
        ceiling: []
    };

    AllWalls.push(refurbRoom);


    var stores = {
        originX: -8 * meter,
        originY: 0,
        originZ: 31 * meter,

        walls: [
            // below code is the wall to the left //
            {
                x1: 0 * meter,
                x2: 5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'

            }, {
                x1: 6 * meter,
                x2: 20.5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, { //bottom wallleft of door//
                x1: 0 * meter,
                x2: 0 * meter,
                z1: 0 * meter,
                z2: 3.5 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, { //bottom wallright of door//
                x1: 0 * meter,
                x2: 0 * meter,
                z1: 5.5 * meter,
                z2: 9 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, { //top wall//
                x1: 20.5 * meter,
                x2: 20.5 * meter,
                z1: 0 * meter,
                z2: 9 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }

        ],
        floors: [{
            x1: 0 * meter,
            x2: 20.5 * meter,
            z1: 0 * meter,
            z2: 9 * meter,
            y: 0 * meter,
            texture: 'images/concreteBlue.jpg'
        }],
        ceiling: []
    };

    AllWalls.push(stores);

    //toilet Left of Entrance
    var toiletLeft = {
        originX: -31.5 * meter,
        originY: 0,
        originZ: 23.5 * meter,

        walls: [
            // below code is the wall to the left //
            {
                x1: 0 * meter,
                x2: 2.5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.5 * meter,
                x2: 3.8 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'

            }, {
                x1: 4.8 * meter,
                x2: 7.5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 7.5 * meter,
                x2: 7.5 * meter,
                z1: 0 * meter,
                z2: 5.5 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 0 * meter,
                x2: 7.5 * meter,
                z1: 5.5 * meter,
                z2: 5.5 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                //toilet divider
                x1: 3.65 * meter,
                x2: 3.65 * meter,
                z1: 0 * meter,
                z2: 5.5 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            },
            //cubicle walls
            {
                x1: 3.65 * meter,
                x2: 5.5 * meter,
                z1: 2.6 * meter,
                z2: 2.6 * meter,
                y: 1.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.65 * meter,
                x2: 5.5 * meter,
                z1: 3.6 * meter,
                z2: 3.6 * meter,
                y: 1.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.65 * meter,
                x2: 5.5 * meter,
                z1: 4.6 * meter,
                z2: 4.6 * meter,
                y: 1.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.65 * meter,
                x2: 1.8 * meter,
                z1: 2.6 * meter,
                z2: 2.6 * meter,
                y: 1.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.65 * meter,
                x2: 1.8 * meter,
                z1: 3.6 * meter,
                z2: 3.6 * meter,
                y: 1.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.65 * meter,
                x2: 1.8 * meter,
                z1: 4.6 * meter,
                z2: 4.6 * meter,
                y: 1.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            },
        ],
        floors: [{
            x1: 0 * meter,
            x2: 7.5 * meter,
            z1: 0 * meter,
            z2: 5.5 * meter,
            y: 0,
            texture: '/images/linoleumGrey.jpg'
        }],


        ceiling: []
    };

    AllWalls.push(toiletLeft);

    //entranceLobby

    var entranceLobby = {
        originX: -31.5 * meter,
        originY: 0,
        originZ: 29 * meter,

        walls: [{
                x1: 6.5 * meter,
                x2: 6.5 * meter,
                z1: 0 * meter,
                z2: 5.5 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 6.5 * meter,
                x2: 6.5 * meter,
                z1: 6.5 * meter,
                z2: 11 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 9.2 * meter,
                x2: 12.5 * meter,
                z1: 5.3 * meter,
                z2: 5.3 * meter,
                y: 2.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 7.8 * meter,
                x2: 12.5 * meter,
                z1: 7 * meter,
                z2: 7 * meter,
                y: 2.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet
                x1: 12.5 * meter,
                x2: 12.5 * meter,
                z1: 2 * meter,
                z2: 5.6 * meter,
                y: 2.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet
                x1: 6.5 * meter,
                x2: 12.5 * meter,
                z1: 2 * meter,
                z2: 2 * meter,
                y: 2.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet
                x1: 8 * meter,
                x2: 8 * meter,
                z1: 2 * meter,
                z2: 5.3 * meter,
                y: 2.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet cubicle
                x1: 9.3 * meter,
                x2: 9.3 * meter,
                z1: 3.6 * meter,
                z2: 5.3 * meter,
                y: 1.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet cubicle
                x1: 10.3 * meter,
                x2: 10.3 * meter,
                z1: 3.6 * meter,
                z2: 5.3 * meter,
                y: 1.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet cubicle
                x1: 11.3 * meter,
                x2: 11.3 * meter,
                z1: 3.6 * meter,
                z2: 5.3 * meter,
                y: 1.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //side room
                x1: 12.5 * meter,
                x2: 12.5 * meter,
                z1: 8.2 * meter,
                z2: 11 * meter,
                y: 2.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //male toilet
                x1: 11.2 * meter,
                x2: 11.2 * meter,
                z1: 8.2 * meter,
                z2: 11 * meter,
                y: 2.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //male toilet cubicle
                x1: 10.2 * meter,
                x2: 10.2 * meter,
                z1: 7 * meter,
                z2: 9 * meter,
                y: 2.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //male toilet cubicle
                x1: 9.2 * meter,
                x2: 9.2 * meter,
                z1: 7 * meter,
                z2: 9 * meter,
                y: 2.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //male toilet cubicle
                x1: 7.8 * meter,
                x2: 7.8 * meter,
                z1: 7 * meter,
                z2: 9 * meter,
                y: 2.5 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }

        ],
        //main lobby carpet
        floors: [{

            x1: 0 * meter,
            x2: 6.5 * meter,
            z1: 0 * meter,
            z2: 11 * meter,
            y: 0,
            texture: '/images/floorTile.jpg'
        },
      //lobby toilets flooring
        {
            x1: 6.5 * meter,
            x2: 12.5 * meter,
            z1: 2 * meter,
            z2:12 * meter,
            y: 0,
            texture: '/images/linoleumGrey.jpg'
        }],

        ceiling: []
    };

    AllWalls.push(entranceLobby);


    var secureCage = {
        originX: -16.5 * meter,
        originY: 0,
        originZ: 31 * meter,

        walls: [
            // below code is the wall to the left //
            {
                color: '#D6D4CD',
                transparency: true,
                opacity: 0.5,
                x1: 0 * meter,
                x2: 8.5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }, { //bottom wall//
                color: '#D6D4CD',
                transparency: true,
                opacity: 0.5,
                x1: 0 * meter,
                x2: 0 * meter,
                z1: 0 * meter,
                z2: 9 * meter,
                y: 2.5 * meter,
                texture: 'images/greybrick.jpg'
            }

        ],

        floors: [{
            ///the floor on the ground
            x1: 0 * meter,
            x2: 8.5 * meter,
            z1: 0 * meter,
            z2: 9 * meter,
            y: 0 * meter,
            texture: 'images/concreteDkBlue.jpg'
        }],
        ceiling: [
            //the ceiling

        ]
    };

    AllWalls.push(secureCage);

    var count = 0;
    for (var i = 0; i < AllWalls.length; i++) {
        createRoom(AllWalls[i], function(_newRoom) {
            for (var i = 0; i < _newRoom.length; i++) {
                obj.push(_newRoom[i]);
            }
            count++;
            if (count === AllWalls.length) {
                on_complete(obj);
            }
        });


    }


}



function createRoom_old(room) {

    var THREERoom = [];


    for (var i = 0; i < room.walls.length; i++) {

        var wall = room.walls[i];

        /*Calculates the length of wall in both directions */
        var wallLengthX = Math.sqrt(Math.pow((wall.x2 - wall.x1), 2));

        var wallLengthZ = Math.sqrt(Math.pow((wall.z2 - wall.z1), 2));

        /*is the wall at a wierd angle*/
        if (wallLengthX != 0 && wallLengthZ != 0) {


        } else {
            //Wall is completely in Z direction
            if (wallLengthX == 0) {

                geometry = new THREE.Mesh(new THREE.PlaneGeometry(wallLengthZ, wall.y, material));
                geometry.material.side = THREE.DoubleSide;
                geometry.rotateY(-Math.PI / 2);
                geometry.position.x = Math.floor(room.originX + wall.x1);
                geometry.position.z = Math.floor(room.originZ + wall.z1 + (wallLengthZ / 2));
                geometry.position.y = Math.floor(room.originY);

                THREERoom.push(geometry);
            }
            //Wall is completely in X direction
            else {

                geometry = new THREE.Mesh(new THREE.PlaneGeometry(wallLengthX, wall.y, material));
                geometry.material.side = THREE.DoubleSide;
                geometry.rotateY(-Math.PI);
                geometry.position.x = Math.floor(room.originX + wall.x1 + (wallLengthX / 2));
                geometry.position.z = Math.floor(room.originZ + wall.z1);
                geometry.position.y = Math.floor(room.originY);

                THREERoom.push(geometry);

            }


        }
    }
    return THREERoom;

};

///This function converts the room object into THREEJS components
function createRoom(room, on_load_complete) {

    var THREERoom = [];

    //Create THREEJS components of all the walls
    loadWalls(room, function(_threeRooms) {
        for (var i = 0; i < _threeRooms.length; i++) {
            THREERoom.push(_threeRooms[i]);
        }
        //Once walls are complete
        //Create THREEJS components of all the floors
        loadFloors(room, function(_threeFloors) {
            for (var i = 0; i < _threeFloors.length; i++) {
                THREERoom.push(_threeFloors[i]);
            }
            //Once floors are complete
            //Create THREEJS components of all the ceilings
            loadCeiling(room, function(_threeCelings) {
                for (var i = 0; i < _threeCelings.length; i++) {
                    THREERoom.push(_threeCelings[i]);
                }
                //Once ceilings are complete
                //Return the room as a list of THREEJS objects
                on_load_complete(THREERoom);
            });
        });

    });

}

//converts walls into THREEJS components
function loadWalls(room, on_load_complete) {
    var THREEWalls = [];
    //Below allows a sync For Loop, so each floor can be done, texture loaded,
    //and then returned.  Without this, the room is returned and drawn before
    //the texture files have been opened!
    asyncLoop(room.walls.length, function(loop) {
            processWall(room, loop.iteration(), function(result) {
                // log the iteration
                console.log(loop.iteration());
                THREEWalls.push(result);
                loop.next();
            })
        },
        function() {
            console.log('cycle ended');
            on_load_complete(THREEWalls);
        }
    );

};

//converts ceiligns into THREEJS components
function loadCeiling(room, on_load_complete) {

    var THREECeilings = [];
    //ceiling stuff
    for (var i = 0; i < room.ceiling.length; i++) {

        var geometry = new THREE.PlaneGeometry((room.ceiling[i].x2 - room.ceiling[i].x1), (room.ceiling[i].z2 - room.ceiling[i].z1), 100, 100);
        geometry.rotateX(-Math.PI / 2);
        // geometry.rotateY(-Math.PI / 2);
        material = new THREE.MeshBasicMaterial({
            color: room.ceiling[i].colour,


        });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = room.ceiling[i].x1 + room.originX + ((room.ceiling[i].x2 - room.ceiling[i].x1) / 2);
        mesh.position.z = room.ceiling[i].z1 + room.originZ + ((room.ceiling[i].z2 - room.ceiling[i].z1) / 2);
        mesh.position.y = room.ceiling[i].y;

        THREECeilings.push(mesh);


    }

    on_load_complete(THREECeilings);

};

function processWall(room, i, callback) {
    var THREEWalls;

    var wall = room.walls[i];
    if (!wall.color) {
        wall.color = '#D6D4CD';
    }
    if (!wall.transparency) {
        wall.transparency = false;
    }
    if (!wall.opacity) {

        wall.opacity = 1;
    }
    var thickness = 5;
    if (wall.thickness) {
        thickness = wall.thickness
    }


    /*Calculates the length of wall in both directions */
    var wallLengthX = Math.sqrt(Math.pow((wall.x2 - wall.x1), 2));

    var wallLengthZ = Math.sqrt(Math.pow((wall.z2 - wall.z1), 2));

    /*is the wall at a wierd angle*/
    if (wallLengthX != 0 && wallLengthZ != 0) {


    } else {



        if (!room.walls[i].texture) {
            var material = new THREE.MeshLambertMaterial({
                color: wall.color,
                transparent: wall.transparency,
                opacity: wall.opacity
            });

            //Wall is completely in Z direction
            if (wallLengthX == 0) {
                var geometry = new THREE.BoxGeometry(thickness,wall.y, wallLengthZ);
                var mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = room.originX + wall.x1;
                mesh.position.z = room.originZ + wall.z1 + ((wall.z2 - wall.z1) / 2);
                mesh.position.y = room.originY + wall.y / 2;

            }
            //Wall is completely in X direction
            else {
                  var geometry = new THREE.BoxGeometry(wallLengthX, wall.y, thickness);
                var mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = room.originX + wall.x1 + ((wall.x2 - wall.x1) / 2);
                mesh.position.z = room.originZ + wall.z1;
                mesh.position.y = room.originY + wall.y / 2;

            }
            THREEWalls = mesh;
            callback(THREEWalls);
        } else {
            var tLoader = new THREE.TextureLoader();
            tLoader.load(room.walls[i].texture, function(texture) {

                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;

                var t_width = texture.image.width / meter;
                var t_height = texture.image.height / meter;


                //Wall is completely in Z direction
                if (wallLengthX == 0) {
                    var f_width = Math.abs(room.walls[i].z2 - room.walls[i].z1);
                    var f_height = Math.abs(room.walls[i].y - room.originY);

                    texture.repeat.set((f_width / t_width), (f_height / t_height));
                    var material = new THREE.MeshBasicMaterial({
                        map: texture,
                        overdraw: 0.5
                    });
                    var geometry = new THREE.BoxGeometry(thickness,wall.y, wallLengthZ);
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.position.x = room.originX + wall.x1;
                    mesh.position.z = room.originZ + wall.z1 + ((wall.z2 - wall.z1) / 2);
                    mesh.position.y = room.originY + wall.y / 2;
                    //mesh.rotateX(Math.PI / 2);
                }
                //Wall is completely in X direction
                else {
                    var f_width = Math.abs(room.walls[i].x2 - room.walls[i].x1);
                    var f_height = Math.abs(room.walls[i].y - room.originY);

                    texture.repeat.set((f_width / t_width), (f_height / t_height));
                    var material = new THREE.MeshBasicMaterial({
                        map: texture,
                        overdraw: 0.5
                    });
                    var geometry = new THREE.BoxGeometry(wallLengthX, wall.y, thickness);
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.position.x = room.originX + wall.x1 + ((wall.x2 - wall.x1) / 2);
                    mesh.position.z = room.originZ + wall.z1;
                    mesh.position.y = room.originY + wall.y / 2;
                    //mesh.rotateX(Math.PI / 2);
                }
                THREEWalls = mesh;
                callback(THREEWalls);

            });
        }
    }

}

//processes floors, seperate function so it can async load any texture files (this will have to be done for similar functions)
function processFloors(room, i, callback) {
    var THREEFloors;
    //if no texture assign the colour
    if (!room.floors[i].texture) {
        var geometry = new THREE.PlaneGeometry((room.floors[i].x2 - room.floors[i].x1), (room.floors[i].z2 - room.floors[i].z1), 100, 100);
        geometry.rotateX(-Math.PI / 2);
        // geometry.rotateY(-Math.PI / 2);
        material = new THREE.MeshBasicMaterial({
            color: room.floors[i].colour,

        });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = room.floors[i].x1 + room.originX + ((room.floors[i].x2 - room.floors[i].x1) / 2);
        mesh.position.z = room.floors[i].z1 + room.originZ + ((room.floors[i].z2 - room.floors[i].z1) / 2);
        mesh.position.y = room.floors[i].y;

        THREEFloors = mesh;
        callback(THREEFloors);
    }
    //if there is a texture load the file
    else {
        // geometry.rotateY(-Math.PI / 2);
        var tLoader = new THREE.TextureLoader();
        tLoader.load(room.floors[i].texture, function(texture) {
            var geometry = new THREE.PlaneGeometry((room.floors[i].x2 - room.floors[i].x1), (room.floors[i].z2 - room.floors[i].z1), 100, 100);
            geometry.rotateX(-Math.PI / 2);
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;

            var t_width = texture.image.width / meter;
            var t_height = texture.image.height / meter;

            var f_width = Math.abs(room.floors[i].z2 - room.floors[i].z1);
            var f_height = Math.abs(room.floors[i].x2 - room.floors[i].x1);

            texture.repeat.set((f_height / t_height), (f_width / t_width));
            var material = new THREE.MeshBasicMaterial({
                map: texture,
                overdraw: 0.5
            });
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = room.floors[i].x1 + room.originX + ((room.floors[i].x2 - room.floors[i].x1) / 2);
            mesh.position.z = room.floors[i].z1 + room.originZ + ((room.floors[i].z2 - room.floors[i].z1) / 2);
            mesh.position.y = room.floors[i].y;
            THREEFloors = mesh;
            callback(THREEFloors);
        });
    }

}
//converts floors into THREEJS components
function loadFloors(room, on_load_complete) {
    var THREEFloors = [];
    //floor stuff
    //Below allows a sync For Loop, so each floor can be done, texture loaded,
    //and then returned.  Without this, the room is returned and drawn before
    //the texture files have been opened!
    asyncLoop(room.floors.length, function(loop) {
            processFloors(room, loop.iteration(), function(result) {
                // log the iteration
                console.log(loop.iteration());
                THREEFloors.push(result);
                loop.next();
            })
        },
        function() {
            console.log('cycle ended');
            on_load_complete(THREEFloors);
        }
    );
};
// a async for loop from a helpful online guy, this creates a for loop where in each loop
// an async function needs to be called.
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
};

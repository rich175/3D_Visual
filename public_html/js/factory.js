var meter = 25;
var factoryWidth = 80 * meter;
var factoryLength = 63 * meter;
var wallHeight = 5 * meter;

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
        name: '0_factoryWalls',
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
            y: 3.0 * meter
        }, { //this is the top rhs of door wall
            color: '#D6D4CD',
            transparency: true,
            opacity: 0.5,
            x1: 9.2 * meter,
            x2: 9.2 * meter,
            z1: 5.5 * meter,
            z2: 34.5 * meter,
            y: 3.0 * meter
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
      name: '0_refurbRoom',
        originX: -31.5 * meter,
        originY: 0,
        originZ: -5.5 * meter,

        walls: //right side wall lower
            [{
                x1: 0 * meter,
                x2: 1.5 * meter,
                z1: 20 * meter,
                z2: 20 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 1.5 * meter,
                x2: 2.5 * meter,
                z1: 20 * meter,
                z2: 20 * meter,
                y0: 2.0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 2.5 * meter,
                x2: 9.2 * meter,
                z1: 20 * meter,
                z2: 20 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'

            }, {
                //wall left lower
                x1: 0 * meter,
                x2: 5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'

            }, {
                //wall left lower
                x1: 5 * meter,
                x2: 7 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y0: 2.0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'

            },
            //wall left upper
            {
                x1: 7 * meter,
                x2: 9.2 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'

            }, {
                x1: 9.2 * meter,
                x2: 9.2 * meter,
                z1: 0 * meter,
                z2: 2 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 9.2 * meter,
                x2: 9.2 * meter,
                z1: 4 * meter,
                z2: 20 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 9.2 * meter,
                x2: 9.2 * meter,
                z1: 2 * meter,
                z2: 4 * meter,
                y0: 2.0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.5 * meter,
                x2: 3.5 * meter,
                z1: 0 * meter,
                z2: 1 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.5 * meter,
                x2: 3.5 * meter,
                z1: 1 * meter,
                z2: 2 * meter,
                y0: 2.0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.5 * meter,
                x2: 3.5 * meter,
                z1: 2 * meter,
                z2: 20 * meter,
                y: 3.0 * meter,
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
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'

            }, {
                x1: 5 * meter,
                x2: 6 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y0: 2.0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'

            }, {
                x1: 6 * meter,
                x2: 20.5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, { //bottom wallleft of door//
                x1: 0 * meter,
                x2: 0 * meter,
                z1: 0 * meter,
                z2: 3.5 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, { //bottom wallleft of door//
                x1: 0 * meter,
                x2: 0 * meter,
                z1: 3.5 * meter,
                z2: 5.5 * meter,
                y0: 2.0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, { //bottom wallright of door//
                x1: 0 * meter,
                x2: 0 * meter,
                z1: 5.5 * meter,
                z2: 9 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, { //top wall//
                x1: 20.5 * meter,
                x2: 20.5 * meter,
                z1: 0 * meter,
                z2: 9 * meter,
                y: 3.0 * meter,
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
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 2.5 * meter,
                x2: 3.5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y0: 2.0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.5 * meter,
                x2: 3.8 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 3.8 * meter,
                x2: 4.8 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y0: 2.0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 4.8 * meter,
                x2: 7.5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 7.5 * meter,
                x2: 7.5 * meter,
                z1: 0 * meter,
                z2: 5.5 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 0 * meter,
                x2: 7.5 * meter,
                z1: 5.5 * meter,
                z2: 5.5 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                //toilet divider
                x1: 3.65 * meter,
                x2: 3.65 * meter,
                z1: 0 * meter,
                z2: 5.5 * meter,
                y: 3.0 * meter,
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
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 6.5 * meter,
                x2: 6.5 * meter,
                z1: 5.5 * meter,
                z2: 6.5 * meter,
                y0: 2.0 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 6.5 * meter,
                x2: 6.5 * meter,
                z1: 6.5 * meter,
                z2: 11 * meter,
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 9.2 * meter,
                x2: 12.5 * meter,
                z1: 5.3 * meter,
                z2: 5.3 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                x1: 7.8 * meter,
                x2: 12.5 * meter,
                z1: 7 * meter,
                z2: 7 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet
                x1: 12.5 * meter,
                x2: 12.5 * meter,
                z1: 2 * meter,
                z2: 5.6 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet
                x1: 12.5 * meter,
                x2: 12.5 * meter,
                z1: 5.6 * meter,
                z2: 8.2 * meter,
                y0: 2.0 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet
                x1: 6.5 * meter,
                x2: 12.5 * meter,
                z1: 2 * meter,
                z2: 2 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet
                x1: 8 * meter,
                x2: 8 * meter,
                z1: 2 * meter,
                z2: 5.3 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //female toilet cubicle
                x1: 9.3 * meter,
                x2: 9.3 * meter,
                z1: 3.6 * meter,
                z2: 5.3 * meter,
                y: 3.0 * meter,
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
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //male toilet
                x1: 11.2 * meter,
                x2: 11.2 * meter,
                z1: 7 * meter,
                z2: 11 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //male toilet cubicle
                x1: 10.2 * meter,
                x2: 10.2 * meter,
                z1: 7 * meter,
                z2: 9 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //male toilet cubicle
                x1: 9.2 * meter,
                x2: 9.2 * meter,
                z1: 7 * meter,
                z2: 9 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {
                //male toilet cubicle
                x1: 7.8 * meter,
                x2: 7.8 * meter,
                z1: 7 * meter,
                z2: 9 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {

                x1: 6.5 * meter,
                x2: 7.8 * meter,
                z1: 7 * meter,
                z2: 7 * meter,
                  y0: 2.0 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {

                x1: 6.5 * meter,
                x2: 7.8 * meter,
                z1: 9 * meter,
                z2: 9 * meter,
                  y0: 2.0 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {

                x1: 8 * meter,
                x2: 9.3 * meter,
                z1: 5.3 * meter,
                z2: 5.3 * meter,
                  y0: 2.0 * meter,
                y: 3.0 * meter,
                thickness: 2,
                texture: 'images/greybrick.jpg'
            }, {

                x1: 8 * meter,
                x2: 9.3 * meter,
                z1: 3.6 * meter,
                z2: 3.6 * meter,
                  y0: 2.0 * meter,
                y: 3.0 * meter,
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
                z2: 12 * meter,
                y: 0,
                texture: '/images/linoleumGrey.jpg'
            }
        ],

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
                y: 3.0 * meter,
                texture: 'images/greybrick.jpg'
            }, { //bottom wall//
                color: '#D6D4CD',
                transparency: true,
                opacity: 0.5,
                x1: 0 * meter,
                x2: 0 * meter,
                z1: 0 * meter,
                z2: 9 * meter,
                y: 3.0 * meter,
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

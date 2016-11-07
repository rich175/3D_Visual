    var meter = 25;

    function returnFactory() {



      var loader = new THREE.TextureLoader();
      var texture = loader.load('/images/whiteBrickTexture.jpg');
      var texture2 = loader.load('/images/shopfloorGrids.jpg');



        material = new THREE.MeshLambertMaterial({
           map: texture
        });

        layout = new THREE.MeshLambertMaterial({
            map: texture2
       });

        var factoryWidth = 80 * meter;
        var factoryLength = 63 * meter;
        var wallHeight = 5 * meter;

        var obj = [];
        var factoryWalls = {
            originX: -factoryLength/2,
            originY: 0,
            originZ: -factoryWidth/2,
            walls: [{//bottom left outer factory walls
                color: '#D6D4CD',
                x1: 0,
                x2: 36 * meter,
                z1: 0,
                z2: 0,
                y: wallHeight
            },
            { //wall between bay 3 and 2
                color: '#D6D4CD',
                x1: 40 * meter,
                x2: 44 * meter,
                z1: 0,
                z2: 0,
                y: wallHeight
            },
            { // wall between bay 2 and 1
                color: '#D6D4CD',
                x1: 48.5 * meter,
                x2: 52.5* meter,
                z1: 0,
                z2: 0,
                y: wallHeight
            },
            {
                color: '#D6D4CD',
                x1: 56.8 * meter,
                x2: 63 * meter,
                z1: 0,
                z2: 0,
                y: wallHeight
            },
            {
                color: '#D6D4CD',
                x1: 0,
                x2: factoryLength,
                z1: factoryWidth,
                z2: factoryWidth,
                y: wallHeight
            },
            {
                color: '#D6D4CD',
                x1: 0,
                x2: 0,
                z1: 0,
                z2: factoryWidth,
                y: wallHeight
            },
            {
                color: '#D6D4CD',
                x1: factoryLength,
                x2: factoryLength,
                z1: 0,
                z2: factoryWidth,
                y: wallHeight
            }],
            floors: []
        };

        var _newRoom = createRoom(factoryWalls);
        for (var i = 0; i < _newRoom.length; i++) {
            obj.push(_newRoom[i]);
        }





        /*Floor*/
        geometry = new THREE.PlaneGeometry(factoryWidth, factoryLength, 100, 100);
        geometry.rotateX(-Math.PI / 2);
        geometry.rotateY(-Math.PI / 2);
        material = new THREE.MeshBasicMaterial({
            color: '#CCCCCC'
        });

        mesh = new THREE.Mesh(geometry, layout);
        mesh.position.y = -0.5;
        obj.push(mesh);

//bay 1 door and floor marking- NOTE the floor isnt drawing in correctly, is this to do with texture 2 (the map?)
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
        colour: '#859DAE'
    }]
};

var _newRoom = createRoom(bay1);
for (var i = 0; i < _newRoom.length; i++) {
    obj.push(_newRoom[i]);
}
//bay 2 door and floor marking - NOTE the floor isnt drawing in correctly, is this to do with texture 2 (the map?)
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
        y: 15 * meter,
        colour: '#859DAE'
    }]
};

var _newRoom = createRoom(bay2);
for (var i = 0; i < _newRoom.length; i++) {
    obj.push(_newRoom[i]);
}
//bay 3 door and floor marking - NOTE the floor isnt drawing in correctly, is this to do with texture 2 (the map?)
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
        colour: '#859DAE'
    }]
};

var _newRoom = createRoom(bay3);
for (var i = 0; i < _newRoom.length; i++) {
    obj.push(_newRoom[i]);
}
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
    },
  {//this is the top rhs of door wall
    color: '#D6D4CD',
    transparency: true,
    opacity: 0.5,
    x1: 9.2 * meter,
    x2: 9.2 * meter,
    z1: 5.5 * meter,
    z2: 34.5 * meter,
    y: 2.5 * meter
  }
],
    floors: [{
        x1: 0 * meter,
        x2: 9.2 * meter,
        z1: 0 * meter,
        z2: 34.5 * meter,
        y: 0 * meter,
        colour: '#ABB6BF'
    }]
};

var _newRoom = createRoom(receiptCage);
for (var i = 0; i < _newRoom.length; i++) {
    obj.push(_newRoom[i]);
}


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
                y: 2.5 * meter
            }, //wall right, top part
            {
              x1: 2.5 * meter,
              x2: 9.2 * meter,
              z1: 20 * meter,
              z2: 20 * meter,
              y: 2.5 * meter

            },

            {
//wall left lower
                x1: 0 * meter,
                x2: 1.5 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 2.5 * meter
            },
            //wall left upper
            {
              x1: 2.5 * meter,
              x2: 9.2 * meter,
              z1: 0 * meter,
              z2: 0 * meter,
              y: 2.5 * meter
            },{
                x1: 9.2 * meter,
                x2: 9.2 * meter,
                z1: 0 * meter,
                z2: 2 * meter,
                y: 2.5 * meter
            }, {
                x1: 9.2 * meter,
                x2: 9.2 * meter,
                z1: 4 * meter,
                z2: 20 * meter,
                y: 2.5 * meter
            }, {
                x1: 3.5 * meter,
                x2: 3.5 * meter,
                z1: 0 * meter,
                z2: 1 * meter,
                y: 2.5 * meter
            }, {
                x1: 3.5 * meter,
                x2: 3.5 * meter,
                z1: 2 * meter,
                z2: 20 * meter,
                y: 2.5 * meter
            }],
            floors: [{
                x1: 0 * meter,
                x2: 3.5 * meter,
                z1: 0 * meter,
                z2: 20 * meter,
                colour: '#6587BA' //blue carpet
            }, {
                x1: 3.5 * meter,
                x2: 9.2 * meter,
                z1: 0 * meter,
                z2: 20 * meter,
                colour: '#BF4044' //red carpet

            }]
        };

        var _newRoom = createRoom(refurbRoom);
        for (var i = 0; i < _newRoom.length; i++) {
            obj.push(_newRoom[i]);
        }




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
                    y: 2.5 * meter
                },
                {
                    x1: 6 * meter,
                    x2: 20.5 * meter,
                    z1: 0 * meter,
                    z2: 0 * meter,
                    y: 2.5 * meter
                },{ //bottom wallleft of door//
                    x1: 0 * meter,
                    x2: 0 * meter,
                    z1: 0 * meter,
                    z2: 3.5* meter,
                    y: 2.5 * meter
                }, { //bottom wallright of door//
                    x1: 0 * meter,
                    x2: 0 * meter,
                    z1: 5.5 * meter,
                    z2: 9 * meter,
                    y: 2.5 * meter
                }, { //top wall//
                    x1: 20.5 * meter,
                    x2: 20.5 * meter,
                    z1: 0 * meter,
                    z2: 9 * meter,
                    y: 2.5 * meter
                }

            ],
            floors: [{
                x1: 0 * meter,
                x2: 20.5 * meter,
                z1: 0 * meter,
                z2: 9 * meter,
                colour: '#ABB6BF' //grey floor
            }]        };

        var _newRoom = createRoom(stores);
        for (var i = 0; i < _newRoom.length; i++) {
            obj.push(_newRoom[i]);
        }

            //toilet Left of Entrance
            var toiletLeft = {
                originX: -31.5* meter,
                originY: 0,
                originZ: 24.5 * meter,

                walls: [
                    // below code is the wall to the left //
                    {
                        x1: 0 * meter,
                        x2: 2.5 * meter,
                        z1: 0 * meter,
                        z2: 0 * meter,
                        y: 2.5 * meter
                    },
                    {
                        x1: 5 * meter,
                        x2: 7.5 * meter,
                        z1: 0 * meter,
                        z2: 0 * meter,
                        y: 2.5 * meter
                    },
                    {
                        x1: 7.5 * meter,
                        x2: 7.5 * meter,
                        z1: 0 * meter,
                        z2: 7.2* meter,
                        y: 2.5 * meter
                    },
                    {
                        x1: 0 * meter,
                        x2: 7.5 * meter,
                        z1: 7.2 * meter,
                        z2: 7.2* meter,
                        y: 2.5 * meter
                    },
                    //cubicle walls
                ],
               floors: []
                     };

            var _newRoom = createRoom(toiletLeft);
            for (var i = 0; i < _newRoom.length; i++) {
                obj.push(_newRoom[i]);
            }

            //entranceLobby
            var entranceLobby = {
                originX: -31.5* meter,
                originY: 0,
                originZ: 32 * meter,

                walls: [
                    {
                        x1: 5 * meter,
                        x2: 7.5 * meter,
                        z1: 0 * meter,
                        z2: 0 * meter,
                        y: 2.5 * meter
                    }

                ],
               floors: []
                     };

            var _newRoom = createRoom(entranceLobby);
            for (var i = 0; i < _newRoom.length; i++) {
                obj.push(_newRoom[i]);
            }

        var secureCage = {
            originX: -16.5 * meter,
            originY: 0,
            originZ: 31 * meter,

            walls: [
                // below code is the wall to the left //
                {color: '#D6D4CD',
                transparency: true,
                opacity: 0.5,
                    x1: 0 * meter,
                    x2: 8.5 * meter,
                    z1: 0 * meter,
                    z2: 0 * meter,
                    y: 2.5 * meter
                }, { //bottom wall//
                  color: '#D6D4CD',
                  transparency: true,
                  opacity: 0.5,
                    x1: 0 * meter,
                    x2: 0 * meter,
                    z1: 0 * meter,
                    z2: 9 * meter,
                    y: 2.5 * meter
                }

            ],

            floors: [{
              ///the floor on the ground
                x1: 0 * meter,
                x2: 8.5 * meter,
                z1: 0 * meter,
                z2: 9 * meter,
                colour: '#ABB6BF' //grey floor
            },
          //the ceiling (indicating this is a cage not open) NOTE this doesnt draw?
          {
          x1: 0 * meter,
          x2: 8.5 * meter,
          z1: 0 * meter,
          z2: 9 * meter,
          y: 32.5* meter,
          colour: '#ABB6BF' //grey floor
          }
        ]
        };

        var _newRoom = createRoom(secureCage);
        for (var i = 0; i < _newRoom.length; i++) {
            obj.push(_newRoom[i]);
        }
        return obj;
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

    function createRoom(room) {

        var THREERoom = [];


        for (var i = 0; i < room.walls.length; i++) {

            var wall = room.walls[i];
            if (!wall.color)
            {
              wall.color= '#D6D4CD';
            }
            if (!wall.transparency){

              wall.transparency= false;

            }
            if (!wall.opacity){

              wall.opacity= 1;
            }


            /*Calculates the length of wall in both directions */
            var wallLengthX = Math.sqrt(Math.pow((wall.x2 - wall.x1), 2));

            var wallLengthZ = Math.sqrt(Math.pow((wall.z2 - wall.z1), 2));

            /*is the wall at a wierd angle*/
            if (wallLengthX != 0 && wallLengthZ != 0) {


            } else {
                //Wall is completely in Z direction
                if (wallLengthX == 0) {

                    var thickness = 5;

                    var geometry = new THREE.BoxGeometry(thickness, wallLengthZ, wall.y);
                    var material = new THREE.MeshLambertMaterial({
                        color: wall.color,
                        transparent: wall.transparency,
                        opacity: wall.opacity
                    });
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.position.x = room.originX + wall.x1;
                    mesh.position.z = room.originZ + wall.z1 + ((wall.z2 - wall.z1) / 2);
                    mesh.position.y = room.originY + wall.y / 2;
                    mesh.rotateX(Math.PI / 2);

                    THREERoom.push(mesh);

                }
                //Wall is completely in X direction
                else {

                    var thickness = 5;


                    var geometry = new THREE.BoxGeometry(wallLengthX, thickness, wall.y);
                    var material = new THREE.MeshBasicMaterial({
                        color: wall.color,
                        transparent: wall.transparency,
                        opacity: wall.opacity
                    });
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.position.x = room.originX + wall.x1 + ((wall.x2 - wall.x1) / 2);
                    mesh.position.z = room.originZ + wall.z1;
                    mesh.position.y = room.originY + wall.y / 2;
                    mesh.rotateX(Math.PI / 2);

                    THREERoom.push(mesh);

                }


            }
        }

        //floor stuff
        for (var i = 0; i < room.floors.length; i++) {

            var geometry = new THREE.PlaneGeometry((room.floors[i].x2 - room.floors[i].x1), (room.floors[i].z2 - room.floors[i].z1), 100, 100);
            geometry.rotateX(-Math.PI / 2);
            // geometry.rotateY(-Math.PI / 2);
            material = new THREE.MeshBasicMaterial({
                color: room.floors[i].colour,


            });
            mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = room.floors[i].x1 + room.originX + ((room.floors[i].x2 - room.floors[i].x1) / 2);
            mesh.position.z = room.floors[i].z1 + room.originZ + ((room.floors[i].z2 - room.floors[i].z1) / 2);

            THREERoom.push(mesh);


        }


        return THREERoom;

    }

    var meter = 25;

    function returnFactory() {

        var factoryWidth = 70 * meter;
        var factoryLength = 55.2 * meter;
        var wallHeight = 5 * meter;

        var texture = THREE.ImageUtils.loadTexture("/images/whiteBrickTexture.jpg");
        material = new THREE.MeshLambertMaterial({
            map: texture
        });

        var texture2 = THREE.ImageUtils.loadTexture("/images/shopFloor.jpg");
        layout = new THREE.MeshLambertMaterial({
            map: texture2
        });


        var obj = [];

        /*Wall 1*/
        geometry = new THREE.Mesh(new THREE.PlaneGeometry(factoryWidth, wallHeight), material);
        geometry.material.side = THREE.DoubleSide;
        geometry.rotateY(-Math.PI / 2);
        geometry.position.x = Math.floor(factoryLength / 2);
        geometry.position.y = Math.floor(wallHeight / 2);

        obj.push(geometry);

        /*Wall 2*/
        geometry = new THREE.Mesh(new THREE.PlaneGeometry(factoryWidth, wallHeight), material);
        geometry.material.side = THREE.DoubleSide;
        geometry.rotateY(-Math.PI / 2);
        geometry.position.x = Math.floor(-factoryLength / 2);
        geometry.position.y = Math.floor(wallHeight / 2);

        obj.push(geometry);

        /*Wall 3*/
        geometry = new THREE.Mesh(new THREE.PlaneGeometry(factoryLength, wallHeight), material);
        geometry.material.side = THREE.DoubleSide;
        geometry.rotateY(-Math.PI);
        geometry.position.z = Math.floor(-factoryWidth / 2);
        geometry.position.y = Math.floor(wallHeight / 2);

        obj.push(geometry);

        /*Wall 4*/
        geometry = new THREE.Mesh(new THREE.PlaneGeometry(factoryLength, wallHeight), material);
        geometry.material.side = THREE.DoubleSide;
        geometry.rotateY(-Math.PI);
        geometry.position.z = Math.floor(factoryWidth / 2);
        geometry.position.y = Math.floor(wallHeight / 2);

        obj.push(geometry);





        /*Floor*/
        geometry = new THREE.PlaneGeometry(factoryWidth, factoryLength, 100, 100);
        geometry.rotateX(-Math.PI / 2);
        geometry.rotateY(-Math.PI / 2);
        material = new THREE.MeshBasicMaterial({
            color: '#CCCCCC'
        });
        mesh = new THREE.Mesh(geometry, layout);
        obj.push(mesh);

        var refurbRoom = {
            originX: -27.6 * meter,
            originY: 0,
            originZ: -5 * meter,
            walls: [{
                x1: 0 * meter,
                x2: 8 * meter,
                z1: 18 * meter,
                z2: 18 * meter,
                y: 2.5 * meter
            }, {
                x1: 0 * meter,
                x2: 8 * meter,
                z1: 0 * meter,
                z2: 0 * meter,
                y: 2.5 * meter
            }, {
                x1: 8 * meter,
                x2: 8 * meter,
                z1: 0 * meter,
                z2: 2 * meter,
                y: 2.5 * meter
            },
            {
                x1: 8 * meter,
                x2: 8 * meter,
                z1: 4 * meter,
                z2: 18 * meter,
                y: 2.5 * meter
            }],
            floors: []
        };

        var _newRoom = createRoom(refurbRoom);
        for (var i = 0; i < _newRoom.length; i++) {
            obj.push(_newRoom[i]);
        }

        var phoneRoom = {
            originX: -27.6 * meter,
            originY: 0,
            originZ: -5 * meter,
            walls: [{
                x1: 3 * meter,
                x2: 3 * meter,
                z1: 0 * meter,
                z2: 1 * meter,
                y: 2.5 * meter
            },
            {
                x1: 3 * meter,
                x2: 3 * meter,
                z1: 2 * meter,
                z2: 18 * meter,
                y: 2.5 * meter
            }],
            floors: []
        };

        var _newRoom = createRoom(phoneRoom);
        for (var i = 0; i < _newRoom.length; i++) {
            obj.push(_newRoom[i]);
        }

        var _newRoom = createRoom(phoneRoom);
        for (var i = 0; i < _newRoom.length; i++) {
            obj.push(_newRoom[i]);
        }

        var receiptArea = {
            originX: -9.8 * meter,
            originY: 0,
            originZ: -38.8 * meter,

            walls: [{
              //the wall at right of receipt area box//
                x1: -6.89* meter,
                x2: 8 * meter,
                z1: 18 * meter,
                z2: 18 * meter,
                y: 2.5 * meter
            },
            // below code is the wall to the lhs text up//
            {
                x1: -6.89 * meter,
                x2: 8 * meter,
                z1: 12 * meter,
                z2: 12 * meter,
                y: 2.5 * meter
            },
            {//bottom wall//
                x1: -6.89 * meter,
                x2: -6.89 * meter,
                z1: 12 * meter,
                z2: 6* meter,
                y: 2.5 * meter
            },
            {//top wall//
                x1: 8 * meter,
                x2: 8 * meter,
                z1: 12 * meter,
                z2: 7.9 * meter,
                y: 2.5 * meter
            }],
            floors: []
        };

        var _newRoom = createRoom(receiptArea);
        for (var i = 0; i < _newRoom.length; i++) {
            obj.push(_newRoom[i]);
        }
        var processingArea = {
            originX: -9.8 * meter,
            originY: 0,
            originZ: -32.2* meter,

            walls: [{
              //the wall at right of processing area box//
                x1: -6.89* meter,
                x2: 8 * meter,
                z1: 26.65* meter,
                z2: 26.65* meter,
                y: 2.5 * meter
            },
            // below code is the wall to the left //
            {
                x1: -6.89* meter,
                x2: 8 * meter,
                z1: 12 * meter,
                z2: 12 * meter,
                y: 2.5 * meter
            },
            {//bottom wall//
                x1: -6.89 * meter,
                x2: -6.89 * meter,
                z1: 12 * meter,
                z2: -2* meter,
                y: 2.5 * meter
            },

            {//top wall//
                x1: 8 * meter,
                x2: 8 * meter,
                z1: 12* meter,
                z2: 2 * meter,
                y: 2.5 * meter
            },

          {//top wall right of door//
              x1: 8 * meter,
              x2: 8 * meter,
              z1: 25* meter,
              z2: 26.65* meter,
              y: 2.5 * meter



          }],


            floors: []
        };

        var _newRoom = createRoom(processingArea);
        for (var i = 0; i < _newRoom.length; i++) {
            obj.push(_newRoom[i]);
        }

        var stores = {
            originX: 0 * meter,
            originY: 0,
            originZ: 15.2* meter,

            walls: [
            // below code is the wall to the left //
            {
                x1: -6.89* meter,
                x2: 11 * meter,
                z1: 12 * meter,
                z2: 12 * meter,
                y: 2.5 * meter
            },
            {//bottom wallleft of door//
                x1: -6.89 * meter,
                x2: -6.89 * meter,
                z1: 12 * meter,
                z2: 9* meter,
                y: 2.5 * meter
            },
            {//bottom wallright of door//
                x1: -6.89 * meter,
                x2: -6.89 * meter,
                z1: 17 * meter,
                z2:  19.8* meter,
                y: 2.5 * meter
            },
            {//top wall//
                x1: 11 * meter,
                x2: 11 * meter,
                z1: 12* meter,
                z2: 19.8 * meter,
                y: 2.5 * meter
            }

          ],


            floors: []
        };

        var _newRoom = createRoom(stores);
        for (var i = 0; i < _newRoom.length; i++) {
            obj.push(_newRoom[i]);
        }

        return obj;






    }


    function createRoom(room) {

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

    }

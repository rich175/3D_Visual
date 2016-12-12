///This function converts the room object into THREEJS components
function createRoom(room, on_load_complete) {

    var THREERoom = [];
    //Add 1st Floor PlaneGeometry

    /*var loader = new THREE.TextureLoader();
    var firstFloor = loader.load('/images/shopFloorFirst2.jpg');
    var layoutFF = new THREE.MeshLambertMaterial({
        map: firstFloor
    });

    var geometryFF = new THREE.PlaneGeometry(factoryWidth, factoryLength, 100, 100);
    geometryFF.rotateX(-Math.PI / 2);
    geometryFF.rotateY(-Math.PI / 2);
    material = new THREE.MeshBasicMaterial({
        color: '#CCCCCC'
    });

    mesh = new THREE.Mesh(geometryFF, layoutFF);
    mesh.position.y = 2.5 * meter;
    THREERoom.push(mesh);*/

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
                //console.log(loop.iteration());
                result.name = room.name;
                THREEWalls.push(result);
                loop.next();
            })
        },
        function() {
            //console.log('cycle ended');
            on_load_complete(THREEWalls);
        }
    );

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

    var wall_start_y = room.originY;
    var wall_height = wall.y;
    if (wall.y0) {
        wall_start_y = wall.y0;
        wall_height = wall.y - wall.y0;
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
                var geometry = new THREE.BoxGeometry(thickness, wall_height, wallLengthZ);
                var mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = room.originX + wall.x1;
                mesh.position.z = room.originZ + wall.z1 + ((wall.z2 - wall.z1) / 2);
                mesh.position.y = wall_start_y + wall_height / 2;

            }
            //Wall is completely in X direction
            else {
                var geometry = new THREE.BoxGeometry(wallLengthX, wall_height, thickness);
                var mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = room.originX + wall.x1 + ((wall.x2 - wall.x1) / 2);
                mesh.position.z = room.originZ + wall.z1;
                mesh.position.y = wall_start_y + wall_height / 2;

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
                    var f_height = Math.abs(room.walls[i].y - wall_start_y);

                    texture.repeat.set((f_width / t_width), (f_height / t_height));
                    var material = new THREE.MeshBasicMaterial({
                        map: texture,
                        overdraw: 0.5
                    });
                    var geometry = new THREE.BoxGeometry(thickness, wall_height, wallLengthZ);
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.position.x = room.originX + wall.x1;
                    mesh.position.z = room.originZ + wall.z1 + ((wall.z2 - wall.z1) / 2);
                    mesh.position.y = wall_start_y + wall_height / 2;
                    //mesh.rotateX(Math.PI / 2);
                }
                //Wall is completely in X direction
                else {
                    var f_width = Math.abs(room.walls[i].x2 - room.walls[i].x1);
                    var f_height = Math.abs(room.walls[i].y - wall_start_y);

                    texture.repeat.set((f_width / t_width), (f_height / t_height));
                    var material = new THREE.MeshBasicMaterial({
                        map: texture,
                        overdraw: 0.5
                    });
                    var geometry = new THREE.BoxGeometry(wallLengthX, wall_height, thickness);
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.position.x = room.originX + wall.x1 + ((wall.x2 - wall.x1) / 2);
                    mesh.position.z = room.originZ + wall.z1;
                    mesh.position.y = wall_start_y + wall_height / 2;
                    //mesh.rotateX(Math.PI / 2);
                }
                THREEWalls = mesh;
                callback(THREEWalls);

            });
        }
    }

}

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
            side: THREE.DoubleSide,

        });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = room.floors[i].x1 + room.originX + ((room.floors[i].x2 - room.floors[i].x1) / 2);
        mesh.position.z = room.floors[i].z1 + room.originZ + ((room.floors[i].z2 - room.floors[i].z1) / 2);
        mesh.position.y = room.originY + room.floors[i].y;

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
                side: THREE.FrontSide
                    //overdraw: 0.5,
            });

            var material2 = new THREE.MeshBasicMaterial({
                color: '#ff0000',
                side: THREE.BackSide
                    //overdraw: 0.5,
            });

            var geometry2 = geometry;
            geometry.rotateY(Math.PI);

            /*var mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
            mesh.position.x = room.floors[i].x1 + room.originX + ((room.floors[i].x2 - room.floors[i].x1) / 2);
            mesh.position.z = room.floors[i].z1 + room.originZ + ((room.floors[i].z2 - room.floors[i].z1) / 2);
            mesh.position.y = room.originY + room.floors[i].y;*/

            // card
            card = new THREE.Object3D();
            //scene.add(card);

            // mesh
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = room.floors[i].x1 + room.originX + ((room.floors[i].x2 - room.floors[i].x1) / 2);
            mesh.position.z = room.floors[i].z1 + room.originZ + ((room.floors[i].z2 - room.floors[i].z1) / 2);
            mesh.position.y = room.originY + room.floors[i].y;
            card.add(mesh);

            var mesh2 = new THREE.Mesh(geometry2, material2);
            mesh2.position.x = room.floors[i].x1 + room.originX + ((room.floors[i].x2 - room.floors[i].x1) / 2);
            mesh2.position.z = room.floors[i].z1 + room.originZ + ((room.floors[i].z2 - room.floors[i].z1) / 2);
            mesh2.position.y = room.originY + room.floors[i].y;
            card.add(mesh2);

            THREEFloors = card;
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
                //console.log(loop.iteration());
                result.name = room.name;
                THREEFloors.push(result);
                loop.next();
            })
        },
        function() {
            //console.log('cycle ended');
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

function returnFirstFloorFactory(on_complete) {

    var AllWalls = [];
    var obj = [];

    var firstFloorY = 3.001 * meter;


    var room = {
        name: '1_officeA',
        originX: -31.5 * meter,
        originY: firstFloorY,
        originZ: 0 * meter,
        walls: [{
            x1: 0 * meter,
            x2: 9 * meter,
            z1: 0 * meter,
            z2: 0 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"
        }, {
            x1: 9 * meter,
            x2: 9 * meter,
            z1: 0 * meter,
            z2: 1.5 * meter,
            y: 3.0 * meter,
          //  thickness: 1.52,
          texture: "images/beigewalls.jpg"

        }, {
            color: '#D6D4CD',
            transparency: true,
            opacity: 0.5,
            x1: 9 * meter,
            x2: 9 * meter,
            z1: 1.5 * meter,
            z2: 3.7 * meter,
            y0: 1 * meter,
            y: 3.1 * meter,

        }, {

            x1: 9 * meter,
            x2: 9 * meter,
            z1: 1.5 * meter,
            z2: 3.7 * meter,
            y: 3.1 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 9 * meter,
            x2: 9 * meter,
            z1: 3.7 * meter,
            z2: 6 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
          color: '#D6D4CD',
          transparency: true,
          opacity: 0.5,
            x1: 9 * meter,
            x2: 9 * meter,
            z1: 6 * meter,
            z2: 7.5 * meter,
            y0: 1 * meter,
            y: 3.0 * meter

        }, {
            x1: 9 * meter,
            x2: 9 * meter,
            z1: 6 * meter,
            z2: 7.5 * meter,
            y: 1.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 9 * meter,
            x2: 9 * meter,
            z1: 7.5 * meter,
            z2: 29.5 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 8 * meter,
            x2: 9 * meter,
            z1: 29.5 * meter,
            z2: 29.5 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 6 * meter,
            x2: 0 * meter,
            z1: 29.5 * meter,
            z2: 29.5 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }],
        floors: [{
            x1: 0 * meter,
            x2: 9 * meter,
            z1: 0 * meter,
            z2: 29.5 * meter,
            y: -0.01 * meter,
            texture: 'images/floorTile.jpg'
        }],
        ceiling: []
    };

    AllWalls.push(room);

    var room = {
        name: '1_officeMD',
        originX: -27.5 * meter,
        originY: firstFloorY,
        originZ: 0 * meter,
        walls: [{
            x1: 0 * meter,
            x2: 0 * meter,
            z1: 0 * meter,
            z2: 3.8 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1:0 * meter,
            x2: 0 * meter,
            z1: 4.8 * meter,
            z2: 5 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 0 * meter,
            x2: 5 * meter,
            z1: 5 * meter,
            z2: 5 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }],
        floors: [],
        ceiling: []
    };

    AllWalls.push(room);

    var room = {
        name: '1_officeD',
        originX: -27.5 * meter,
        originY: firstFloorY,
        originZ: 5 * meter,
        walls: [{
            x1: 0 * meter,
            x2: 0 * meter,
            z1: 0 * meter,
            z2: 0.2 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1:0 * meter,
            x2: 0 * meter,
            z1: 1.2 * meter,
            z2: 5 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 0 * meter,
            x2: 2 * meter,
            z1: 5 * meter,
            z2: 5 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
          color: '#D6D4CD',
          transparency: true,
          opacity: 0.5,
            x1: 2 * meter,
            x2: 3.5 * meter,
            z1: 5 * meter,
            z2: 5 * meter,
            y0: 1 * meter,
            y: 3.0 * meter

        }, {

            x1: 2 * meter,
            x2: 3.5 * meter,
            z1: 5 * meter,
            z2: 5 * meter,
            y: 1.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 3.5 * meter,
            x2: 5 * meter,
            z1: 5 * meter,
            z2: 5 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }],
        floors: [],
        ceiling: []
    };

    AllWalls.push(room);

    var room = {
        name: '1_lobby',
        originX: -27.5 * meter,
        originY: firstFloorY,
        originZ: 29.5 * meter,
        walls: [{
            x1: 0 * meter,
            x2: 0 * meter,
            z1: 0 * meter,
            z2: 3 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1:0 * meter,
            x2: 0 * meter,
            z1: 3 * meter,
            z2: 6 * meter,
            y: 1.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 0 * meter,
            x2: 0.8 * meter,
            z1: 6 * meter,
            z2: 6 * meter,
            y: 1.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 2.8 * meter,
            x2: 5 * meter,
            z1: 6 * meter,
            z2: 6 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 5 * meter,
            x2: 5 * meter,
            z1: 4 * meter,
            z2: 6 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 5 * meter,
            x2: 4.8 * meter,
            z1: 4 * meter,
            z2: 4 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 2.0 * meter,
            x2: 3.8 * meter,
            z1: 4 * meter,
            z2: 4 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }, {
            x1: 2.0 * meter,
            x2: 2.0 * meter,
            z1: 0 * meter,
            z2: 4 * meter,
            y: 3.0 * meter,
            texture: "images/beigewalls.jpg"

        }],
        floors: [{
            x1: 0 * meter,
            x2: 5 * meter,
            z1: 0 * meter,
            z2: 6 * meter,
            y: 0 * meter,
            texture: 'images/floorTile.jpg'
        }],
        ceiling: []
    };

    AllWalls.push(room);

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

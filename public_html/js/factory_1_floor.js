function returnFirstFloorFactory(on_complete) {

    var AllWalls = [];
      var obj = [];

    var firstFloorY = 3 * meter;

    //receipt cage adjacent to processingArea
    var receiptCage = {
        originX: -31.5 * meter,
        originY: firstFloorY,
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

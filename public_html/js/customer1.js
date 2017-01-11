var meter = 25;
var cust1Width = 25 * meter;
var cust1Length = 35 * meter;
var wallHeight = 5 * meter;

function returnCust1(on_complete) {



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
    geometry = new THREE.PlaneGeometry(cust1Width, cust1Length, 100, 100);
    geometry.rotateX(-Math.PI / 2);
    geometry.rotateY(-Math.PI / 2);
    material = new THREE.MeshBasicMaterial({
        color: '#CCCCCC'
    });

    mesh = new THREE.Mesh(geometry, layout);
    mesh.position.y = -0.5;

    //obj.push(mesh);



    var cust1Walls = {
        name: '0_cust1Walls',
        originX: -90*meter,
        originY: 0,
        originZ: -90*meter,
        walls: [{ //bottom left outer cust1 walls
            color: '#D6D4CD',
            x1: 0,
            x2: 36 * meter,
            z1: 0,
            z2: 0,
            y: wallHeight,
            texture: 'images/metal_wall.jpg'
        }, {
            color: '#D6D4CD',
            x1: 0,
            x2: cust1Length,
            z1: cust1Width,
            z2: cust1Width,
            y: wallHeight,
            texture: 'images/metal_wall.jpg'
        }, {
            color: '#D6D4CD',
            x1: 0,
            x2: 0,
            z1: 0,
            z2: cust1Width,
            y: wallHeight,
            texture: 'images/metal_wall.jpg'
        }, {
            color: '#D6D4CD',
            x1: cust1Length,
            x2: cust1Length,
            z1: 0,
            z2: cust1Width,
            y: wallHeight,
            texture: 'images/metal_wall.jpg'
        }],
        floors: [{
                x1: 0 * meter,
                x2: cust1Length,
                z1: 0 * meter,
                z2: cust1Width,
                y: -1,
                texture: '/images/concrete.jpg'
            }

        ],
        ceiling: []
    };

    AllWalls.push(cust1Walls);

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

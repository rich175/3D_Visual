var shelfW = 5*25;
var shelfD = 10;
var shelfT = 1;




function createShelf(workstation, shelfName) {

    var _x = workstation.object.position.x + 10;
    var _y = workstation.object.position.y + 40;
    var _z = workstation.object.position.z + 1;


    var geometry = new THREE.BoxGeometry(shelfW, shelfT, shelfD);

    var material = new THREE.MeshLambertMaterial({
        color: 0x600300
    });
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = _x;
    mesh.position.y = _y;
    mesh.position.z = _z;


    var shelf = {
        id: shelfName,
        dimensions: {
            shelfWidth: shelfW,
            shelfDepth: shelfD,
            shelfThickness: shelfT
        },
        assoicatedWS: workstation.id,
        slots: [{
            id: 1,
            name: 'AT',
            centre: {
                x: 0,
                y: 0,
                z: 0
            }
        }, {
            id: 2,
            name: 'VI',
            centre: {
                x: 2,
                y: 0,
                z: 0
            }
        }, {
            id: 3,
            name: 'FT',
            centre: {
                x: 4,
                y: 0,
                z: 0
            }
        }, {
            id: 4,
            name: 'DE',
            centre: {
                x: 6,
                y: 0,
                z: 0
            }
        }, {
            id: 5,
            name: 'RP',
            centre: {
                x: 8,
                y: 0,
                z: 0
            }

        }],
        three_obj: mesh
    };







    //mesh.name = id;

    return shelf;
}

function addToShelf() {

    var geometry = new THREE.BoxGeometry(1, 1, 1);

    var material = new THREE.MeshLambertMaterial({
        color: 0xFF0000
    });
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = _x + 1;
    mesh.position.y = _y + 1;
    mesh.position.z = _z + 1;

    //mesh.name = id;

    return mesh;



}

function removeFromShelf() {






}

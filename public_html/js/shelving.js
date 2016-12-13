function createBlueShelving(x, y, z, rotation, id, callback) {
    var loader = new THREE.ObjectLoader();
    loader.load('images/blueshelves.json', function(obj) {
        obj.rotateY(rotation);
        obj.scale.set(10,10,10)

        obj.position.x = x;
        obj.position.y = y;
        obj.position.z = z;

        obj.name = id;

        var _thisWorkstation = {
            id: id,
            object: obj,
            cube: {
                cube_x: x,
                cube_y: y + 6,
                cube_z: z
            },
            work_in_progress: []

        }

        callback(_thisWorkstation);
    });
}

/*function addCube(id, colour) {

    var geometry = new THREE.BoxGeometry(1, 1, 1);

    var material = new THREE.MeshLambertMaterial({
        color: 0xFF0000
    });
    var mesh = new THREE.Mesh(geometry, material);


    mesh.name = id;

    return mesh;

}*/

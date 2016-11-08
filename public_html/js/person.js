function createPerson(x, y, z, id, callback) {
    var loader = new THREE.ObjectLoader();
    loader.load('images/tweediezPerson.json', function(obj) {
        obj.rotateY(-Math.PI / 2);
        obj.scale.set(10,10,10)

        obj.position.x = x;
        obj.position.y = y;
        obj.position.z = z;

        obj.name = id;

        var _thisPerson = {
            id: id,
            object: obj,
            cube: {
                cube_x: x,
                cube_y: y + 6,
                cube_z: z
            },
            work_in_progress: []

        }

        callback(_thisPerson);
    });
}

function createvanunload(x, y, z, rotation, id, callback) {
    var loader = new THREE.ObjectLoader();
    loader.load('images/vanunload.json', function(obj) {
      obj.rotateY(rotation);
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

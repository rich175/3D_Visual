function createToilet(x, y, z, rotation, id, callback) {
    var loader = new THREE.ObjectLoader();
    loader.load('images/toilet.json', function(obj) {
        obj.rotateY(rotation);
        obj.scale.set(10,10,10)

        obj.position.x = x;
        obj.position.y = y;
        obj.position.z = z;

        obj.name = id;

        var _thisToilet = {
            id: id,
            object: obj,
            cube: {
                cube_x: x,
                cube_y: y + 6,
                cube_z: z
              },
              work_in_progress: []


        }

        callback(_thisToilet);
    });
}

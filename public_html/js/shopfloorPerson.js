function createShopFloorPerson(x, y, z, rotation, id, callback) {
    var loader = new THREE.ObjectLoader();
    loader.load('images/Manblue.json', function(obj) {
      obj.rotateY(rotation);
        obj.scale.set(2,2,2)

        obj.position.x = x;
        obj.position.y = y;
        obj.position.z = z;
        obj.color = 0x75aff0;

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

function createShopfloorFem(x, y, z, rotation, id, callback) {
    var loader = new THREE.ObjectLoader();
    loader.load('images/ShopfloorFem.json', function(obj) {
      obj.rotateY(rotation);
        obj.scale.set(12,12,12)

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

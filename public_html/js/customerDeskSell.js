function createCustomerDesk(x, y, z, rotation, id, callback) {
    var loader = new THREE.ObjectLoader();
    loader.load('images/customerdeskOccupiedselling.json', function(obj) {
      obj.rotateY(rotation);
        obj.scale.set(8,8,8)

        obj.position.x = x;
        obj.position.y = y;
        obj.position.z = z;


        obj.name = id;

        var _thisCustomerDesk = {
            id: id,
            object: obj,
            cube: {
                cube_x: x,
                cube_y: y + 6,
                cube_z: z
            },
            CustomerDesks: []

        }

        callback(_thisCustomerDesk);
    });
}

function returnRoom() {

    var wallHeight = 20;
    var texture = THREE.ImageUtils.loadTexture("/images/whiteBrickTexture.jpg");
    material = new THREE.MeshLambertMaterial({
      map: texture
    });


    var obj = [];

    /*Wall 1*/
    geometry = new THREE.Mesh(new THREE.PlaneGeometry(100, wallHeight), material);
    geometry.material.side = THREE.DoubleSide;
    geometry.rotateY(-Math.PI / 2);
    geometry.position.x = Math.floor(50);
    geometry.position.y = Math.floor(wallHeight / 2);

    obj.push(geometry);

    /*Wall 2*/
    geometry = new THREE.Mesh(new THREE.PlaneGeometry(100, wallHeight), material);
    geometry.material.side = THREE.DoubleSide;
    geometry.rotateY(-Math.PI / 2);
    geometry.position.x = Math.floor(-50);
    geometry.position.y = Math.floor(wallHeight / 2);

    obj.push(geometry);

    /*Wall 3*/
    geometry = new THREE.Mesh(new THREE.PlaneGeometry(100, wallHeight), material);
    geometry.material.side = THREE.DoubleSide;
    geometry.rotateY(-Math.PI);
    geometry.position.z = Math.floor(-50);
    geometry.position.y = Math.floor(wallHeight / 2);

    obj.push(geometry);

    /*Wall 4*/
    geometry = new THREE.Mesh(new THREE.PlaneGeometry(100, wallHeight), material);
    geometry.material.side = THREE.DoubleSide;
    geometry.rotateY(-Math.PI);
    geometry.position.z = Math.floor(50);
    geometry.position.y = Math.floor(wallHeight / 2);

    obj.push(geometry);

    /*Floor*/
    geometry = new THREE.PlaneGeometry(100, 100, 100, 100);
    geometry.rotateX(-Math.PI / 2);
    material = new THREE.MeshBasicMaterial({
      color: '#CCCCCC'
    });
    mesh = new THREE.Mesh(geometry, material);
    obj.push(mesh);

    return obj;






}

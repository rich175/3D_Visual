function returnFactory() {


    var meter = 25;

    var factoryWidth = 70 * meter;
    var factoryLength = 55 * meter;

    var wallHeight = 5 * meter;
    var texture = THREE.ImageUtils.loadTexture("/images/whiteBrickTexture.jpg");
    material = new THREE.MeshLambertMaterial({
        map: texture
    });

    var texture2 = THREE.ImageUtils.loadTexture("/images/shopFloor.jpg");
    layout = new THREE.MeshLambertMaterial({
        map: texture2
    });


    var obj = [];

    /*Wall 1*/
    geometry = new THREE.Mesh(new THREE.PlaneGeometry(factoryWidth, wallHeight), material);
    geometry.material.side = THREE.DoubleSide;
    geometry.rotateY(-Math.PI / 2);
    geometry.position.x = Math.floor(factoryLength/2);
    geometry.position.y = Math.floor(wallHeight / 2);

    obj.push(geometry);

    /*Wall 2*/
    geometry = new THREE.Mesh(new THREE.PlaneGeometry(factoryWidth, wallHeight), material);
    geometry.material.side = THREE.DoubleSide;
    geometry.rotateY(-Math.PI / 2);
    geometry.position.x = Math.floor(-factoryLength/2);
    geometry.position.y = Math.floor(wallHeight / 2);

    obj.push(geometry);

    /*Wall 3*/
    geometry = new THREE.Mesh(new THREE.PlaneGeometry(factoryLength, wallHeight), material);
    geometry.material.side = THREE.DoubleSide;
    geometry.rotateY(-Math.PI);
    geometry.position.z = Math.floor(-factoryWidth/2);
    geometry.position.y = Math.floor(wallHeight / 2);

    obj.push(geometry);

    /*Wall 4*/
    geometry = new THREE.Mesh(new THREE.PlaneGeometry(factoryLength, wallHeight), material);
    geometry.material.side = THREE.DoubleSide;
    geometry.rotateY(-Math.PI);
    geometry.position.z = Math.floor(factoryWidth/2);
    geometry.position.y = Math.floor(wallHeight / 2);

    obj.push(geometry);

    /*Floor*/
    geometry = new THREE.PlaneGeometry(factoryWidth, factoryLength, 100, 100);
    geometry.rotateX(-Math.PI / 2);
    geometry.rotateY(-Math.PI / 2);
    material = new THREE.MeshBasicMaterial({
        color: '#CCCCCC'
    });
    mesh = new THREE.Mesh(geometry, layout);
    obj.push(mesh);

    return obj;






}

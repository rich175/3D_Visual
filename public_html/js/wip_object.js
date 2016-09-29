function createNewWIPObj(id) {

    /*Object Shape & Size & Colour*/
    var xDim = 1;
    var yDim = 1;
    var zDim = 1;

    var geometry = new THREE.BoxGeometry(1, 1, 1);

    var material = new THREE.MeshLambertMaterial({
        color: 0xFF0000
    });
    var mesh = new THREE.Mesh(geometry, material);

    var text = 'ID: ' + id;

    /* Text */
    var cv = document.createElement("canvas");
    var xc = cv.getContext("2d");
    cv.width = cv.height = 128;
    xc.shadowColor = "#000";
    xc.shadowBlur = 7;
    xc.fillStyle = "orange";
    xc.font = "14pt arial bold";
    xc.fillText(text, 10, 64);

    var xm = new THREE.MeshBasicMaterial({
        map: new THREE.Texture(cv),
        transparent: true
    });
    xm.map.needsUpdate = true;

    var objText = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), xm);
    objText.material.side = THREE.DoubleSide;
    objText.rotateY(-Math.PI);
    objText.position.x = mesh.position.x - 10;
    objText.position.y = mesh.position.y;
    objText.position.z = mesh.position.z;
    objText.doubleSided = true;


    var newObject = {
        id: id,
        three_obj: mesh,
        dimensions: {
            objWidth: xDim,
            objDepth: yDim,
            objThickness: zDim
        },
        text: objText
    };


    return newObject;

}

function moveWIPObj(x, y, z, wipObject) {
  //move cube
  wipObject.three_obj.position.x = x;
  wipObject.three_obj.position.y = y;
  wipObject.three_obj.position.z = z;

  //move text
  wipObject.text.position.x = x - 10;
  wipObject.text.position.y = y;
  wipObject.text.position.z = z;
}

var cubeParams = {
	rotateCube1 : true,
	rotateCube2 : true,
	rotateCube3 : true,
	rotateCube4 : true,
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

var cube1 = new THREE.Mesh(geometry, material);
cube1.position.x = -2
cube1.position.y = -2

var cube2 = new THREE.Mesh(geometry, material);
cube2.position.x = -2
cube2.position.y = 2

var cube3 = new THREE.Mesh(geometry, material);
cube3.position.x = 2
cube3.position.y = -2

var cube4 = new THREE.Mesh(geometry, material);
cube4.position.x = 2
cube4.position.y = 2

scene.add(cube1);
scene.add(cube2);
scene.add(cube3);
scene.add(cube4);

camera.position.z = 5;

var render = function () {
	requestAnimationFrame(render);

	if (cubeParams.rotateCube1) {
  	cube1.rotation.x += 0.1;
  	cube1.rotation.y += 0.1;
	}

	if (cubeParams.rotateCube2) {
  	cube2.rotation.x += 0.05;
  	cube2.rotation.y += 0.05;
	}

	if (cubeParams.rotateCube3) {
  	cube3.rotation.x += 0.01;
  	cube3.rotation.y += 0.01;
	}

	if (cubeParams.rotateCube4) {
  	cube4.rotation.x += 0.005;
  	cube4.rotation.y += 0.005;
	}

	renderer.render(scene, camera);
};

$(document).ready( function () {render();});

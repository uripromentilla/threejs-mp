
var scene, camera, renderer, cube;

function init() {
	scene = new THREE.Scene();

	aspect = window.innerWidth/window.innerHeight
	camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var geometry = new THREE.BoxGeometry(2,2,2);

	var material = new THREE.MeshBasicMaterial({color: 0x0000ff});
	// var texture = new THREE.TextureLoader().load('crate.gif');

	cube = new THREE.Mesh(geometry, material);

	// scene.add(cube);
	scene.add(cube);

	camera.position.z = 5;
}

function animate() {
	requestAnimationFrame(animate)
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);

}

function onWindowResize() {
	camera.aspect = aspect;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();







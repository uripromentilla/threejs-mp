
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 20;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#e5e5e5");
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();
});


// !!! why new THREE.SphereGeometry(5, 32, 32) doesn't work
// because the sphere is too big. the camera is most likely inside the sphere.
var geometry = new THREE.BoxGeometry(2, 2, 2);


var material = new THREE.MeshLambertMaterial({color: 0xffff00});
var cubemesh = new THREE.Mesh(geometry, material);

cubemesh.position.set(1,1,1);
cubemesh.rotation.set(10, 10, 10);
cubemesh.scale.set(1,2,3);

scene.add(cubemesh);

var light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);


function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

	cubemesh.rotation.x += 0.01;
	cubemesh.rotation.y += 0.01;
}


console.log(camera.position);
console.log(cubemesh.position);

animate();



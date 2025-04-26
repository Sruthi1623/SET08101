// final-mystery-level1-3d.js

let scene, camera, renderer, cube;

function init3D() {
  const canvas = document.getElementById('three-canvas');
  // 1) Renderer
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // 2) Scene
  scene = new THREE.Scene();

  // 3) Camera
  camera = new THREE.PerspectiveCamera(
    60, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1, 3);

  // 4) Lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 7.5);
  scene.add(dirLight);

  // 5) Geometry (a cube you can replace with loaded models)
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ 
    color: 0x00ffcc, 
    metalness: 0.3, 
    roughness: 0.7 
  });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // 6) Handle resize
  window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate3D() {
  requestAnimationFrame(animate3D);
  // simple rotation; tie this to game events for more interactivity
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// Kick everything off once the DOM is ready and your level logic has started
document.addEventListener("DOMContentLoaded", () => {
  init3D();
  animate3D();
});

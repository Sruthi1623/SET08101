// Script/three-animations.js

let scene, camera, renderer, mesh;

function init3D(canvasId) {
  // Renderer
  const canvas = document.getElementById(canvasId);
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Scene & Camera
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 3;

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  // Choose geometry based on canvas
  let geometry, material;
  if (canvasId === 'three-briefing-canvas') {
    geometry = new THREE.IcosahedronGeometry(1, 0);
    material = new THREE.MeshStandardMaterial({ color: 0xff4444, wireframe: true });
  } else if (canvasId === 'three-puzzle-canvas') {
    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshStandardMaterial({ color: 0x00ccff });
  } else if (canvasId === 'three-debrief-canvas') {
    geometry = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 32);
    material = new THREE.MeshStandardMaterial({ color: 0xffcc00 });
  }

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  window.addEventListener('resize', onResize.bind(null, canvasId));
}

function onResize(canvasId) {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate3D() {
  requestAnimationFrame(animate3D);
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// Kick off whichever canvas exists
document.addEventListener('DOMContentLoaded', () => {
  ['three-briefing-canvas','three-puzzle-canvas','three-debrief-canvas']
    .forEach(id => {
      if (document.getElementById(id)) {
        init3D(id);
        animate3D();
      }
    });
});

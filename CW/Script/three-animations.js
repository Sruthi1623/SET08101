// Script/three-animations.js

let scene, camera, renderer, mesh;

function init3D(canvasId) {
  const canvas = document.getElementById(canvasId);
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 3;

  // Simple directional light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  let geometry, material;

  if (canvasId === 'three-briefing-canvas') {
    // Level 1 briefing shape
    geometry = new THREE.IcosahedronGeometry(1, 0);
    material = new THREE.MeshStandardMaterial({ color: 0xff4444, wireframe: true });
  } else if (canvasId === 'three-debrief-canvas') {
    // Floating coin for debrief screens
    geometry = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 32);
    material = new THREE.MeshStandardMaterial({ color: 0xffcc00 });
  } else {
    return; // nothing to do if we don't recognize the canvas ID
  }

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  window.addEventListener('resize', onResize);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  // spin
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  // gentle up/down bob for the coin
  if (mesh.geometry.type === 'CylinderGeometry') {
    mesh.position.y = Math.sin(performance.now() * 0.002) * 0.3;
  }

  renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', () => {
  ['three-briefing-canvas', 'three-debrief-canvas'].forEach(id => {
    if (document.getElementById(id)) {
      init3D(id);
      animate();
    }
  });
});

// Izveido 3D Feramas Studios logo, kas griežas telpā
const scene = new THREE.Scene();
const logo = new THREE.Mesh(
  new THREE.TextGeometry("FERAMAS STUDIOS", { size: 1, height: 0.2 }),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
scene.add(logo);

// Lietotājs var vilkt peli, lai rotētu objektus
document.addEventListener('mousemove', (e) => {
  logo.rotation.x = e.clientY * 0.01;
  logo.rotation.y = e.clientX * 0.01;
});

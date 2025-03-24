// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Load Model
const loader = new GLTFLoader();
loader.load('models/table.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Adjust scale and position
    model.scale.set(0.5, 0.5, 0.5);
    model.position.set(0, 0, 0);
}, undefined, (error) => {
    console.error('Error loading model:', error);
});

// Camera Position
camera.position.z = 5;

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
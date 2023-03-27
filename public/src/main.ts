import './style.css';
import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { addStar } from './shapes';

const scene = new Three.Scene(), camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const render = new Three.WebGL1Renderer({
    canvas: document.querySelector('#bg') as Element
});

//Start
scene.background = new Three.TextureLoader().load('../img/home.png');
render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setY(10);

//Shapes
scene.add(...Array(300).fill().map(() => addStar()));
const geometry = new Three.TorusGeometry(10, 3, 16, 100), material = new Three.MeshStandardMaterial({ color: 0x330066, wireframe: false });
const torus = new Three.Mesh(geometry, material);
scene.add(torus);

//Lighting
const flashlight = new Three.PointLight(0xFF0000), ambientLight = new Three.AmbientLight(0x0000FF);
flashlight.position.set(0, 0, 0);
scene.add(flashlight, ambientLight);

//Helpers
scene.add(new Three.PointLightHelper(flashlight), new Three.GridHelper(150, 200));

//Controls
const controls = new OrbitControls(camera, render.domElement);

//Loop fuction
function run() {
    requestAnimationFrame(run);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    controls.update();
    render.render(scene, camera);
}
run();
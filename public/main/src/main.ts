import './style.css';
import * as Three from 'three';
import { addPlanet, addStar } from './shapes';

//Start
export const scene = new Three.Scene(), camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const render = new Three.WebGL1Renderer({
    canvas: document.querySelector('#bg') as Element,
    antialias: true,
    alpha: true
});
scene.background = new Three.TextureLoader().load(new URL('../img/background.png', import.meta.url).href);
camera.position.setZ(30);
camera.position.setY(5);

//Shapes
// new Three.VideoTexture();
const fly = new Three.TextureLoader().load(new URL('../img/fly.png', import.meta.url).href);
const planets = Array(10).fill(0).map(() => addPlanet());
const plane = new Three.Mesh(new Three.PlaneGeometry(30, 20), new Three.MeshBasicMaterial({ map: fly, transparent: true }));
plane.lookAt(camera.position);
scene.add(plane, ...Array(300).fill(0).map(() => addStar()), ...planets);

//Lighting
const flashlight = new Three.PointLight(0xFF0000), ambientLight = new Three.AmbientLight(0x0000FF);
flashlight.position.set(0, 0, 0);
scene.add(flashlight, ambientLight);

//Scrolling
function scroll(): void {
    const t = document.body.getBoundingClientRect().top;
    planets.forEach((planet, i) => {
        planet.rotation.x = t * -0.005 + i;
        planet.rotation.y = t * -0.001 + i;
    });
    plane.position.x = t * -0.05;
    plane.position.y = t * -0.05;
    camera.position.z = t * -0.01 + 30;
    plane.lookAt(camera.position);
    render.render(scene, camera);
}
document.body.onscroll = scroll;

//Loop fuction
function run() {
    requestAnimationFrame(run);
    render.setPixelRatio(window.devicePixelRatio);
    render.setSize(window.innerWidth, window.innerHeight);
    render.render(scene, camera);
}
run();
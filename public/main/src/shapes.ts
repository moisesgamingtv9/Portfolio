import * as Three from 'three';
import { MeshStandardMaterial, SphereGeometry } from 'three';

const starGeoMesh: [SphereGeometry, MeshStandardMaterial] = [new Three.SphereGeometry(0.25, 24, 24), new Three.MeshStandardMaterial({ color: 0xFFFFFF })]
export function addStar(): Three.Mesh<Three.SphereGeometry, Three.MeshStandardMaterial> {
    const star = new Three.Mesh(...starGeoMesh);
    star.position.set(Three.MathUtils.randFloatSpread(150), Three.MathUtils.randFloatSpread(100), Three.MathUtils.randFloatSpread(150));
    return star;
}


const material = new Three.MeshStandardMaterial({ color: 0x330066, wireframe: false });
const shapes = [
    new Three.TorusGeometry(10, 3, 16, 100),
    new Three.BoxGeometry(10, 10),
    new Three.ConeGeometry(10, 15)
];
export function addPlanet(): Three.Mesh {
    const planet = new Three.Mesh(shapes[~~(Math.random() * shapes.length)], material), xyz = [Three.MathUtils.randFloatSpread(150), Three.MathUtils.randFloatSpread(150), Three.MathUtils.randFloatSpread(150)];
    planet.position.set(~~(Math.random() * 1) ? -xyz[0] : xyz[0], ~~(Math.random() * 1) ? -xyz[1] : xyz[1], ~~(Math.random() * 1) ? -xyz[2] : xyz[2]);
    return planet;
}
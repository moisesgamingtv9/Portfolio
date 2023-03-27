import * as Three from 'three';

export function addStar(): Three.Mesh<Three.SphereGeometry, Three.MeshStandardMaterial> {//Vertex normals
    const star = new Three.Mesh(new Three.SphereGeometry(0.25, 24, 24), new Three.MeshStandardMaterial({ color: 0xFFFFFF }));
    star.position.set(Three.MathUtils.randFloatSpread(150), Three.MathUtils.randFloatSpread(100), Three.MathUtils.randFloatSpread(150));
    return star;
}
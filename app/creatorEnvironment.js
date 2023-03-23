import * as THREE from "three";

export class CreatorEnvironment {

    constructor(parentScene) {
        
        this.scene = parentScene;
        
        const globalLight = new THREE.DirectionalLight(0xffffff, 2);
        globalLight.translateX(1);
        globalLight.translateY(1);
        globalLight.translateZ(1);
        globalLight.castShadow = true;
        
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 10),
            new THREE.MeshStandardMaterial(0xc2c2c2)
        );

        floor.rotateX(Math.PI * -0.5);
        floor.receiveShadow = true;
        
        this.scene.add(
            new THREE.AxesHelper(1),
            globalLight,
            floor
        );

    }

}
import * as THREE from "three";
import { ProspectPal } from "./prospectPal.js";

export class PalModel {

    constructor(parentScene, parameters) {

        this.scene = parentScene;
        this.parameters = parameters;

        // TEMPORARY MESH

        this.characterModel = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 1, 0.5),
            new THREE.MeshStandardMaterial({color: 0x0000ff})
        );

        this.characterModel.translateY(0.51);
        this.characterModel.castShadow = true;
        
        this.scene.add(this.characterModel);

        this.parameters.on("updateName", this.updateName.bind(this));

    }

    updateName() {
        this.characterModel.material.color = new THREE.Color(this.parameters.name);
    }

}
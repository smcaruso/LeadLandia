import * as THREE from "three";
import { Sizes } from "./utils/sizes.js";
import { Time } from "./utils/time.js";
import { Loaders } from "./utils/loaders.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CreatorEnvironment } from "./creatorEnvironment.js";
import { PalModel } from "./palModel.js";
import { ProspectPal } from "./prospectPal.js";

import resourcePaths from "./resourcePaths.json";

export class Creator {
    
    constructor(pageElements) {

        // 3D Scene basics

        this.canvas = pageElements.canvas3Dview;
        this.sizes = new Sizes();
        this.time = new Time();
        this.loaders = new Loaders(resourcePaths);
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            15,
            this.sizes.width / this.sizes.height,
            0.1,
            120
        );

        this.controls = new OrbitControls(this.camera, this.canvas);

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            powerPreference: "high-performance",    
        });

        this.setRendererSettings();

        // EventEmitter callbacks

        this.sizes.on("resize", () => { this.resize(); });
        this.time.on("tick", () => { this.update(); });
        this.loaders.on("ready", () => { console.log("Loaders ready.") });

        // Scene setup

        this.palParameters = new ProspectPal();
        this.environment = new CreatorEnvironment(this.scene);
        this.characterModel = new PalModel(this.scene, this.palParameters);

        this.setCameraTransform();
        this.setUIBindings(pageElements);

    }

    // sets starting transform for the scene's camera

    setCameraTransform() {

        // this.camera.rotateX(Math.PI * .35);
        this.camera.translateX(5);
        this.camera.translateY(3);
        this.camera.translateZ(10);
        this.camera.lookAt(0,0,0);

        this.scene.add(this.camera);

    }

    // sets WebGLRenderer parameters

    setRendererSettings() {

        this.renderer.useLegacyLights = false;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 1.75;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowMap;
        this.renderer.shadowMap.autoUpdate = true;
        this.renderer.setClearColor('#ffffff');
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);

    }

    // assigns functions to interface elements in DOM

    setUIBindings(pageElements) {

        // using NAME parameter in ProspectPal to set COLOR on placeholder mesh

        pageElements.colorOptionButtons.forEach(

            (eachButton) => {
                eachButton.addEventListener("pointerup", setColor.bind(this));

                function setColor(event) {
                    let newColor = event.target.value;
                    this.palParameters.setName(newColor);
                }
            }

        );

        pageElements.colorCommitButton.addEventListener("pointerup", this.savePal.bind(this));

    }

    // Serializes ProspectPal parameters for saving on database

    savePal() {
        console.log(this.palParameters);
    }

    // responds to changes in window size or orientation

    resize() {

        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(1);

    }

    // called every tick/frame

    update() {

        this.renderer.render(this.scene, this.camera);
        this.controls.update();

    }

}
import * as THREE from "three";
import EventEmitter from "./utils/eventemitter";

export class ProspectPal extends EventEmitter{

    constructor() {

        super();

        this.name = "";
        this.email = "";
        this.phone = "";
        this.company = "";
        this.industry = "";
        this.job = "";
        this.tags = [""];

    }

    setName(newName) {

        this.name = newName;
        this.trigger("updateName");

    }

}
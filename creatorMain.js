import "./stylesheets/creator.css";
import { Creator } from "./app/creator.js";

// Collecting DOM elements

const pageElements = {
    canvas3Dview: document.getElementById("characterCreator3Dview"),
    colorOptionButtons: document.querySelectorAll(".creatorOptionButton.color"),
    colorCommitButton: document.querySelector(".creatorCommitButton.color")
};

// App logic

const characterCreator = new Creator(pageElements);
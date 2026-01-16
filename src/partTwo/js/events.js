import { changeStyles } from "./partTwo.js";

const btn = document.getElementById('button');

if (btn) {
    btn.addEventListener('click', changeStyles);
}
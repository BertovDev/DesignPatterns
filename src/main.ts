import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js";
import {Capsule} from "./Shapes/Capsule";
import { StateManager } from "./StateMachine/StateManager";
import { SearchState } from "./StateMachine/SearchState";
import { AttackState } from "./StateMachine/AttackState";
import { FoundState } from "./StateMachine/FoundState";

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.querySelector("canvas.webgl")!;

// camera.position.set(-0.01, 15, 0.13);
camera.position.set(4.1, 4.5, 14);

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

// const capsuleGeometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
// const capsuleMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00,wireframe: true });
// const capsule = new THREE.Mesh(capsuleGeometry, capsuleMaterial);

const capsule = new Capsule(1, new THREE.Object3D);
const capsuleGeometry = capsule.CreateGeometry();
scene.add(capsuleGeometry);
capsuleGeometry.position.set(0, 0, -2);


const squareGeometry = new THREE.BoxGeometry(1, 1);
const material = new THREE.MeshBasicMaterial({wireframe:true});
const box = new THREE.Mesh(squareGeometry, material);
scene.add(box);
box.position.set(6, 0, 8);

const circleGeometry = new THREE.SphereGeometry(1,32,16)
const circleMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const circle = new THREE.Mesh(circleGeometry, circleMaterial);
scene.add(circle);
circle.position.set(-1, 0, 5);

const clock = new THREE.Clock();

// State machine
const searchState = new SearchState(box.position);
const attackState = new AttackState();
const foundState = new FoundState();
const stateManager = new StateManager(searchState, attackState, capsule, circle, foundState);
stateManager.Init();


function animate() {
  requestAnimationFrame(animate);
  const elapsetime = clock.getElapsedTime() / 100;
  stateManager.Update(elapsetime);
  render();
  console.log(camera.position)
}



function render() { renderer.render(scene, camera) };

animate();

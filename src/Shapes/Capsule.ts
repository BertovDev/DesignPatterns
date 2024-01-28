import * as THREE from "three"

export class Capsule {
    radius: number;
    object: THREE.Object3D;
    constructor(radius: number, object: THREE.Object3D) {
        this.radius = radius;
        this.object = new THREE.Object3D || null;
    }

    GetFloat() : number {
        return this.radius;
    }

    SetObject(object: THREE.Object3D) {
        this.object = object;
    }

    CreateGeometry(): any {
        const geometry = new THREE.CapsuleGeometry(this.radius, 1, 4, 8);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const capsule = new THREE.Mesh(geometry, material);
        
        this.SetObject(capsule);
        return capsule;
    }

    Move(position: THREE.Vector3, time: number) {
        this.object.position.x = (this.Lerp(this.object.position.x, position.x, time));
        this.object.position.z = (this.Lerp(this.object.position.z, position.z, time));
    }    


    Lerp(a: number, b: number, t: number) { return a + (b - a) * t }
    
    GetPosition(): THREE.Vector3 {
        return this.object.position;
    }
}


   

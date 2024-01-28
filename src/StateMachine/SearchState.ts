import { BaseState } from "./BaseState";
import { StateManager } from "./StateManager";


export class SearchState extends BaseState {

    searchPosition: THREE.Vector3;

    constructor(position: THREE.Vector3) {
        super();
        this.searchPosition = position;
    }

    EnterState(state: StateManager): void {
        console.log("Seatching");       
            document.querySelector(".state")!.innerHTML = "State : " + "Searching!";
    }

    UpdateState(state: StateManager,time:number): void {
      
        const distance = state.capsule.GetPosition().distanceTo(state.circle.position);
        const distanceToSearch = state.capsule.GetPosition().distanceTo(this.searchPosition);


        if (Math.round(distance) > 5 ) {
            state.capsule.Move(this.searchPosition, time);
            if (Math.round(distanceToSearch) == 0) {
                state.SwitchState(state.foundState, "Searching");
            }
        } else {
            state.SwitchState(state.attackState, "Attacking");
        }
        // this.capsule.Move(this.searchPosition, this.time);
    }

}

import { BaseState } from "./BaseState";
import { StateManager } from "./StateManager";

export class AttackState extends BaseState {
    EnterState(state: StateManager): void {
        console.log("Entering AttackState");
    document.querySelector(".state")!.innerHTML = "State : " + "Attacking!";
    }   
    
    UpdateState(state: StateManager, time: number): void {
        
        const distance = state.capsule.GetPosition().distanceTo(state.circle.position);
            
        if (Math.round(distance) != 0) {
            state.capsule.Move(state.circle.position, time);    
        } else {
            state.circle.position.set(100, 100, 100);
            console.log("Circle Destroyed");
            state.SwitchState(state.searchState, "Searching back");
        }
    }
    
}

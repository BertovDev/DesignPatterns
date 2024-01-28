import { BaseState } from "./BaseState";
import { StateManager } from "./StateManager";

export class FoundState extends BaseState {
    EnterState(state: StateManager): void {
        console.log("Found!");
        document.querySelector(".state")!.innerHTML = "State : " + "Found!";
    }
}

import { Capsule } from "../Shapes/Capsule";
import { AttackState } from "./AttackState";
import { BaseState } from "./BaseState";
import { FoundState } from "./FoundState";
import { SearchState } from "./SearchState";

export class StateManager {
    currentState: BaseState | undefined
    searchState: SearchState
    attackState: AttackState
    foundState: FoundState
    capsule: Capsule
    circle: THREE.Mesh
    
    constructor(searchState: SearchState,attackState: AttackState,capsule: Capsule,circlePosition:THREE.Mesh,foundState: FoundState) { 
        this.searchState = searchState;
        this.attackState = attackState;
        this.capsule = capsule;
        this.circle = circlePosition;
        this.foundState = foundState;
    }
    
    Init() {
        this.currentState = this.searchState;
        this.currentState.EnterState(this);
    }

    Update(time: number) {
        this.currentState?.UpdateState(this,time);
    }

    GetCurrentState()  : BaseState | undefined{
        return this.currentState;
    }

    SwitchState( state: BaseState, stateName: string) {
        this.currentState = state;
        this.currentState.EnterState(this);
    }
}

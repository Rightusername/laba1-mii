
export class State{
    state;
    parent;
    direction;
    length = 0;

    constructor(state, direction,parent){
        this.state = state;
        this.direction = direction;
        this.parent = parent;
    }

}





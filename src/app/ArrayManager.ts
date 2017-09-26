import  * as _  from 'lodash';

export class ArrayManager{

    constructor(){
        
    }

    cloneAr(ar){
        let result = [];
        for (var i = 0; i < ar.length; i++) {
            if(_.isArray(ar[i])){
                let copy = [];
                for (var j = 0; j < ar[i].length; j++) {
                    copy.push(ar[i][j]);
                }
                result.push(copy);
            }
            
        }
        return result;
    }

    isEqualAr(ar1,ar2){
        for (var i = 0; i < ar1.length; i++) {
            for (var j = 0; j < ar1[i].length; j++) {
                if(ar1[i][j] != ar2[i][j]){
                    return false;
                }
            }
        }
        return true;
    }

    arContainItem(ar, item){
        for (var i = 0; i < ar.length; i++) {
            if(this.isEqualAr(ar[i].state, item.state))
                return true;
        }
        return false;

    }

    findZeroPosition(state){
        for (var i = 0; i < state.length; i++) {
            for (var j = 0; j < state[i].length; j++) {
                if(state[i][j]==0){
                    return {x:j,y:i};
                }
            }
        }
    }

    moveUp(ar){
        let x = this.findZeroPosition(ar)['x'], y = this.findZeroPosition(ar)['y'];

        if(y!=0){
            ar[y][x] = ar[y-1][x];
            ar[y-1][x] = 0;
        }

        return ar;
    }

    moveDown(ar){
        let x = this.findZeroPosition(ar)['x'], y = this.findZeroPosition(ar)['y'];

        if(y!=ar.length-1){
            ar[y][x] = ar[y+1][x];
            ar[y+1][x] = 0;
        }

        return ar;
    }

    moveLeft(ar){
        let x = this.findZeroPosition(ar)['x'], y = this.findZeroPosition(ar)['y'];

        if(x!=0){
            ar[y][x] = ar[y][x-1];
            ar[y][x-1] = 0;
        }

        return ar;
    }

    moveRight(ar){
        let x = this.findZeroPosition(ar)['x'], y = this.findZeroPosition(ar)['y'];

        if(x!=ar.length-1){
            ar[y][x] = ar[y][x+1];
            ar[y][x+1] = 0;
        }

        return ar;
    }
}
import { Component, HostListener } from '@angular/core';
import { State } from './State';
import { ArrayManager } from './ArrayManager';
import  * as _  from 'lodash';
import { FinishDialogComponent } from "./finishdialog/finishdialog.component";
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    length = 3;
    maxIterations = 57700;
    way;
    evTime;
    widthTime;
    isComplete = false;
    AM = new ArrayManager();

    A = new State([
        [1,3,4],
        [7,8,2],
        [6,0,5]
    ], null, null)

    B = new State([
        [1,2,3],
        [8,0,4],
        [7,6,5]
        
    ], null, null);


    // B = new State([
    //     [1,2,3],
    //     [8,0,4],
    //     [7,6,5]
    // ], null);


    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        let x = this.AM.findZeroPosition(this.A.state)['x'], y = this.AM.findZeroPosition(this.A.state)['y'];

        switch(event.keyCode){
            case 87:
            case 38:
                //console.log("up");
                if(y!=0){
                    this.A.state = this.AM.moveUp(this.A.state);
                    this.checkComplete();
                    if(this.way[this.way.length-1] == 'up'){
                        this.way.pop();
                    }else{
                        this.way = this.searchWidth();
                    }
                }
                break;
            case 83:
            case 40:
                //console.log("down");
                if(y!=this.length-1){
                    this.A.state = this.AM.moveDown(this.A.state);
                    this.checkComplete();
                    if(this.way[this.way.length-1] == 'down'){
                        this.way.pop();
                    }else{
                        this.way = this.searchWidth();
                    }
                }
                break;
            case 65:
            case 37:
                //console.log("left");
                if(x!=0){
                    this.A.state = this.AM.moveLeft(this.A.state);
                    this.checkComplete();
                    if(this.way[this.way.length-1] == 'left'){
                        this.way.pop();
                    }else{
                        this.way = this.searchWidth();
                    }
                }
                break;
            case 68:
            case 39:
                //console.log("right");
                if(x!=this.length-1){
                    this.A.state = this.AM.moveRight(this.A.state);
                    this.checkComplete();
                    if(this.way[this.way.length-1] == 'right'){
                        this.way.pop();
                    }else{
                        this.way = this.searchWidth();
                    }
                }
                break;
        }
    }

    generateSons(state){
        let x = this.AM.findZeroPosition(state.state)['x'], y = this.AM.findZeroPosition(state.state)['y'];
        let sons = [];

        //up
        if(y!=0){
            let copy = this.AM.moveUp( this.AM.cloneAr(state.state) );
            let son = new State(copy, 'up', state);
            son.length = this.translateWay(state).length;
            sons.push(son);
        }

        //down
        if(y!=this.length-1){
            let copy = this.AM.moveDown( this.AM.cloneAr(state.state) );
            let son = new State(copy, 'down', state);
            son.length = this.translateWay(state).length;
            sons.push(son);
        }

        //left
        if(x!=0){
            let copy = this.AM.moveLeft( this.AM.cloneAr(state.state) );
            let son = new State(copy, 'left', state);
            son.length = this.translateWay(state).length;
            sons.push(son);
        }

        //right
        if(x!=this.length-1){
            let copy = this.AM.moveRight( this.AM.cloneAr(state.state) );
            let son = new State(copy, 'right', state);
            son.length = this.translateWay(state).length;
            sons.push(son);
        }

        return sons;
    }

    restart(){
        this.A = new State([
            [1,3,4],
            [7,8,2],
            [0,6,5]
        ], null, null);
        this.way = this.searchWidth();
    }

    checkComplete(){
        if(this.AM.isEqualAr(this.A.state, this.B.state)){
            this.isComplete = true;
            let dialogRef = this.dialog.open(FinishDialogComponent, {
                width: '250px',
              });
        }
    }


    translateWay(X, ar = []){
        let w = [...ar];
        if(X.direction){
            w.push(X.direction)
            return this.translateWay(X.parent, w);
        }else{
            return w;
        }
    }

    searchWidth(){
        let CLOSED = [];
        let OPEN = [this.A];
        let i = 0;
        var time = performance.now();
    
        while(true){
            if(i==this.maxIterations || _.isEqual(OPEN, [])){
                console.log('searchWidth - Iterations all ended and solution not found');
                return;
            }

            let X = JSON.parse(JSON.stringify(OPEN[0]));

            if(this.AM.isEqualAr(X.state, this.B.state)){
                time = performance.now() - time;
                console.log('find way - SearchWidth, time: ' + time + ' ms');
                this.widthTime = time;
                console.log(this.translateWay(X))
                return this.translateWay(X);
            }

            OPEN.splice(0,1);
            let sons = this.generateSons(X);
            CLOSED.push(X);

            for (let k = 0; k < sons.length; k++) {
                if(this.AM.arContainItem(OPEN, sons[k])){
                    sons.splice(k,1);
                }  
            }
            
            for (let k = 0; k < sons.length; k++) {
                if(this.AM.arContainItem(CLOSED, sons[k])){
                    sons.splice(k,1);
                }
            }
            
            for (let j = 0; j < sons.length; j++) {
                OPEN.push(sons[j]);
            }

            i++;
        }
    }


    methodEvristic(){
        let CLOSED = [];
        let OPEN = [this.A];
        let i = 0;
        let time = performance.now();

        while(true){
            if(i==this.maxIterations || _.isEqual(OPEN, [])){
                console.log('methodEvristic - Iterations all ended and solution not found');
                break;
            }
            let X = JSON.parse(JSON.stringify(OPEN[0]));
            if(this.AM.isEqualAr(X.state, this.B.state)){
                time = performance.now() - time;
                console.log('find way - methodEvristic, time: ' + time + ' ms');
                this.evTime = time;
                console.log(this.translateWay(X))
                console.log(OPEN);
                break;
            }

            OPEN.splice(0,1);
            let sons = this.generateSons(X);
            let findSonClosed = false;
            let findSonOpen = false;

            for (let s = 0; s < sons.length; s++) {

                // for (let j = 0; j < OPEN.length; j++) {
                //     if(this.AM.isEqualAr(OPEN[j].state, sons[s].state)){
                //         findSonOpen = true;
                //     }  
                // }
                // for (let j = 0; j < CLOSED.length; j++) {
                //     if(this.AM.isEqualAr(CLOSED[j].state, sons[s].state)){
                //         findSonClosed = true;
                //     }
                // }

                findSonOpen = this.AM.arContainItem(OPEN, sons[s]);
                findSonClosed = this.AM.arContainItem(CLOSED, sons[s]);


                if(!findSonOpen || !findSonClosed){
                    OPEN.push(sons[s]);
                }

                if(findSonOpen){
                    for (let j = 0; j < OPEN.length; j++) {
                        if(this.AM.isEqualAr(OPEN[j].state, sons[s].state)){
                            if(OPEN[j].length > sons[s].length){
                                OPEN[j].parent = sons[s].parent;
                                OPEN[j].length = sons[s].length;
                            }
                        }  
                        
                    }
                }

                if(findSonClosed){
                    for (let j = 0; j < CLOSED.length; j++) {
                        if(this.AM.isEqualAr(CLOSED[j].state, sons[s].state)){
                            if(CLOSED[j].length > sons[s].length){
                                OPEN.push(CLOSED[j]);
                                CLOSED.splice(j, 1);
                            }
                        }
                    }
                }
            }
            
            OPEN.sort((a, b) =>{
                if (a.length < b.length) {
                  return -1;
                }
                if (a.length > b.length) {
                  return 1;
                }
                return 0;
            });

            CLOSED.push(X);


            i++;
        }
    }

    assemble(){
            for (let t=0,k = this.way.length-1; k >= 0; k--,t++) {
       
                setTimeout(()=>{
                    let x = this.AM.findZeroPosition(this.A.state)['x'], y = this.AM.findZeroPosition(this.A.state)['y'];

                    if(this.way[k] == 'up'){
                       // console.log("up");
                        if(y!=0){
                            this.A.state = this.AM.moveUp(this.A.state)
                            this.checkComplete();
                            if(this.way[k] == 'up'){
                               this.way.pop();
                            }
                        }
                    }

                    if(this.way[k] == 'down'){
                    console.log("down");
                        if(y!=this.length-1){
                            this.A.state = this.AM.moveDown(this.A.state)
                            this.checkComplete();
                            if(this.way[k] == 'down'){
                                  this.way.pop();
                            }
                        }
                    }

                    if(this.way[k] == 'left'){
                        console.log("left");
                        if(x!=0){
                            this.A.state = this.AM.moveLeft(this.A.state)
                            this.checkComplete();
                            if(this.way[k] == 'left'){
                                 this.way.pop();
                            }
                        }
                    }

                    if(this.way[k] == 'right'){
                        console.log("right");
                        if(x!=this.length-1){
                            this.A.state = this.AM.moveRight(this.A.state)
                            this.checkComplete();
                            if(this.way[k] == 'right'){
                                  this.way.pop();
                            }
                        }
                        
                    }
                
                },160*t);
            
        }
    }
    

    constructor(public dialog: MdDialog){
        this.way = this.searchWidth();
        this.methodEvristic();
    }

}

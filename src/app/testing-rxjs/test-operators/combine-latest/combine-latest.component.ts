import { Component, OnInit } from '@angular/core';
import { timer, combineLatest, toArray } from 'rxjs'

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {

  TimerOne: number= 0;
  TimerTwo: number= 0;
  TimerThree: number= 0;

  constructor() { }

  ngOnInit(): void {
     // timerOne emits first value at 1s, then once every 4s
     const timerOne$ = timer(1000, 4000);
     // timerTwo emits first value at 2s, then once every 4s
     const timerTwo$ = timer(2000, 4000);
     // timerThree emits first value at 3s, then once every 4s
     const timerThree$ = timer(3000, 4000);

     const subscription = combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(

       ([timerValOne, timerValTwo, timerValThree]) => {
         /*
           Example:
         timerThree first tick: 'Timer One Latest: 0, Timer Two Latest: 0, Timer Three Latest: 0
         timerOne second tick: 'Timer One Latest: 1, Timer Two Latest: 0, Timer Three Latest: 0
         timerTwo second tick: 'Timer One Latest: 1, Timer Two Latest: 1, Timer Three Latest: 0
       */
         console.log(
         `Timer One Latest: ${timerValOne},
          Timer Two Latest: ${timerValTwo},
          Timer Three Latest: ${timerValThree}`
         );
         this.TimerOne = timerValOne;
         this.TimerTwo = timerValTwo;
         this.TimerTwo = timerValThree;
       }
     );




     setTimeout(() => {
       subscription.unsubscribe();
     }, 10000)

   }
  }



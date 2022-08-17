import { Component, Inject, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { forkJoin, of, delay } from 'rxjs';

@Injectable()
export class MyService {
  makeRequest(value: string, delayDuration: number) {
    // simulate http request
    return of(`Complete: ${value}`).pipe(
      delay(delayDuration)
    );
  }
}

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})


export class ForkJoinComponent implements OnInit {

  public propOne: string = '';
  public propTwo: string = '';
  public propThree: string = '';

  constructor(private _myService: MyService) {

  }

  ngOnInit() {
    // simulate 3 requests with different delays
    forkJoin({
      requestOne: this._myService.makeRequest('Request One', 2000),
      requestTwo: this._myService.makeRequest('Request Two', 1000),
      requestThree: this._myService.makeRequest('Request Three', 3000)
    })
    .subscribe(({requestOne, requestTwo, requestThree}) => {
      this.propOne = requestOne;
      this.propTwo = requestTwo;
      this.propThree = requestThree;
    });
  }
}

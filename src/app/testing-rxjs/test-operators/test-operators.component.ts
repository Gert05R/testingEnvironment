import { Component, OnInit } from '@angular/core';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';


@Component({
  selector: 'app-test-operators',
  templateUrl: './test-operators.component.html',
  styleUrls: ['./test-operators.component.css']
})
export class TestOperatorsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {}
}

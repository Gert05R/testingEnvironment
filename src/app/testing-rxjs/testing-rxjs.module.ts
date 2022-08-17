import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestOperatorsComponent } from './test-operators/test-operators.component';
import { CombineLatestComponent } from './test-operators/combine-latest/combine-latest.component';
import { ForkJoinComponent } from './test-operators/fork-join/fork-join.component';


@NgModule({
  declarations: [TestOperatorsComponent, CombineLatestComponent, ForkJoinComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TestOperatorsComponent
  ]
})
export class TestingRXJSModule { }

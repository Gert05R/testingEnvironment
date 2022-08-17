import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOperatorsComponent } from './test-operators.component';

describe('TestOperatorsComponent', () => {
  let component: TestOperatorsComponent;
  let fixture: ComponentFixture<TestOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

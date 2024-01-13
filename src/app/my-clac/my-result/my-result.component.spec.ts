import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResultComponent } from './my-result.component';

describe('MyResultComponent', () => {
  let component: MyResultComponent;
  let fixture: ComponentFixture<MyResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyResultComponent]
    });
    fixture = TestBed.createComponent(MyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

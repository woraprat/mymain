import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarComponent } from './leftbar.component';

describe('LeftbarComponent', () => {
  let component: LeftbarComponent;
  let fixture: ComponentFixture<LeftbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should be created ngOnInit', () =>{
    expect(component.ngOnInit).toBeTruthy();
  })
});

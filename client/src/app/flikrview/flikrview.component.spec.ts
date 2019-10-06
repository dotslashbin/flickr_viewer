import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlikrviewComponent } from './flikrview.component';

describe('FlikrviewComponent', () => {
  let component: FlikrviewComponent;
  let fixture: ComponentFixture<FlikrviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlikrviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlikrviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

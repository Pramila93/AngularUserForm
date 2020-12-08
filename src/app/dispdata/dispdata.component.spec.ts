import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispdataComponent } from './dispdata.component';

describe('DispdataComponent', () => {
  let component: DispdataComponent;
  let fixture: ComponentFixture<DispdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

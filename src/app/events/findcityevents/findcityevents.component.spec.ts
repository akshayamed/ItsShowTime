import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcityeventsComponent } from './findcityevents.component';

describe('FindcityeventsComponent', () => {
  let component: FindcityeventsComponent;
  let fixture: ComponentFixture<FindcityeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindcityeventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindcityeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

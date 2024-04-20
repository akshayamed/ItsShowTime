import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcitymoviesComponent } from './findcitymovies.component';

describe('FindcitymoviesComponent', () => {
  let component: FindcitymoviesComponent;
  let fixture: ComponentFixture<FindcitymoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindcitymoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindcitymoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

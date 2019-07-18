import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRecentlyRentedComponent } from './movie-recently-rented.component';

describe('MovieRecentlyRentedComponent', () => {
  let component: MovieRecentlyRentedComponent;
  let fixture: ComponentFixture<MovieRecentlyRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRecentlyRentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRecentlyRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

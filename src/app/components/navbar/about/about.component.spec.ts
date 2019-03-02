import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAboutComponent } from './about.component';

describe('NavAboutComponent', () => {
  let component: NavBarAboutComponent;
  let fixture: ComponentFixture<NavBarAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

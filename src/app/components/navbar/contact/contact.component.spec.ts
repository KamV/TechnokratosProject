import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: NavBarContactComponent;
  let fixture: ComponentFixture<NavBarContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

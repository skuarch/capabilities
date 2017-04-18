import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapabilitiesComponent } from './list-capabilities.component';

describe('ListCapabilitiesComponent', () => {
  let component: ListCapabilitiesComponent;
  let fixture: ComponentFixture<ListCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatDrivenComponent } from './templat-driven.component';

describe('TemplatDrivenComponent', () => {
  let component: TemplatDrivenComponent;
  let fixture: ComponentFixture<TemplatDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

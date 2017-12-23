import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationsComponent } from './visualizations.component';

describe('VisualizationsComponent', () => {
  let component: VisualizationsComponent;
  let fixture: ComponentFixture<VisualizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
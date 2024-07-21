import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgModulesComponent } from './ag-modules.component';

describe('AgModulesComponent', () => {
  let component: AgModulesComponent;
  let fixture: ComponentFixture<AgModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

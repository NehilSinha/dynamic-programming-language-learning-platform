import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDistributingModulesComponent } from './ag-distributing-modules.component';

describe('AgDistributingModulesComponent', () => {
  let component: AgDistributingModulesComponent;
  let fixture: ComponentFixture<AgDistributingModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgDistributingModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgDistributingModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

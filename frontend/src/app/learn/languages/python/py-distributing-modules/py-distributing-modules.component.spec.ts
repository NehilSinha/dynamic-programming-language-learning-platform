import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyDistributingModulesComponent } from './py-distributing-modules.component';

describe('PyDistributingModulesComponent', () => {
  let component: PyDistributingModulesComponent;
  let fixture: ComponentFixture<PyDistributingModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyDistributingModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PyDistributingModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

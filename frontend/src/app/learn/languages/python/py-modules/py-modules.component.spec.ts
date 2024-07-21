import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyModulesComponent } from './py-modules.component';

describe('PyModulesComponent', () => {
  let component: PyModulesComponent;
  let fixture: ComponentFixture<PyModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

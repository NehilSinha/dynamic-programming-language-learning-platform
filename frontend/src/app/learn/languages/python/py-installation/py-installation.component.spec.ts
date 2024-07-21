import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyInstallationComponent } from './py-installation.component';

describe('PyInstallationComponent', () => {
  let component: PyInstallationComponent;
  let fixture: ComponentFixture<PyInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyInstallationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PyInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

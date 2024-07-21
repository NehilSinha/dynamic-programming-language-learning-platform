import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyStandardLibraryComponent } from './py-standard-library.component';

describe('PyStandardLibraryComponent', () => {
  let component: PyStandardLibraryComponent;
  let fixture: ComponentFixture<PyStandardLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyStandardLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PyStandardLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

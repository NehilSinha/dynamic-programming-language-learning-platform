import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyInfoComponent } from './py-info.component';

describe('PyInfoComponent', () => {
  let component: PyInfoComponent;
  let fixture: ComponentFixture<PyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

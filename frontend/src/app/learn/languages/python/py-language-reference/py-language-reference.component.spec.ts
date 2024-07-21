import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyLanguageReferenceComponent } from './py-language-reference.component';

describe('PyLanguageReferenceComponent', () => {
  let component: PyLanguageReferenceComponent;
  let fixture: ComponentFixture<PyLanguageReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyLanguageReferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PyLanguageReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

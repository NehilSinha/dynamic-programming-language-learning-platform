import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgLanguageReferenceComponent } from './ag-language-reference.component';

describe('AgLanguageReferenceComponent', () => {
  let component: AgLanguageReferenceComponent;
  let fixture: ComponentFixture<AgLanguageReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgLanguageReferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgLanguageReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

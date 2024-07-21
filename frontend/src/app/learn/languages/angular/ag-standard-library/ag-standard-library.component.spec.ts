import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgStandardLibraryComponent } from './ag-standard-library.component';

describe('AgStandardLibraryComponent', () => {
  let component: AgStandardLibraryComponent;
  let fixture: ComponentFixture<AgStandardLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgStandardLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgStandardLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

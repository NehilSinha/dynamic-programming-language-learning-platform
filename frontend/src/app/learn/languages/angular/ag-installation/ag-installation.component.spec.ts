import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgInstallationComponent } from './ag-installation.component';

describe('AgInstallationComponent', () => {
  let component: AgInstallationComponent;
  let fixture: ComponentFixture<AgInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgInstallationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

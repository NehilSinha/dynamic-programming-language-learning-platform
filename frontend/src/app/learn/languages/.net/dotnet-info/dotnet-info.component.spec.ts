import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetInfoComponent } from './dotnet-info.component';

describe('DotnetInfoComponent', () => {
  let component: DotnetInfoComponent;
  let fixture: ComponentFixture<DotnetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotnetInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DotnetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

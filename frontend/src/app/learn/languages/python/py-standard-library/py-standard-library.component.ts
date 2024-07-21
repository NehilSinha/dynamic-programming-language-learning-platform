import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../../../../services/apicall.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-py-standard-library',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './py-standard-library.component.html',
  styleUrl: './py-standard-library.component.css'
})
export class PyStandardLibraryComponent implements OnInit {
  pythonInfo: any;
  errorMessage: string | null = null;
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getInfo('python-info/library').subscribe(
      data => {
        this.pythonInfo = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
        this.pythonInfo = null;
      }
    );
  }
}
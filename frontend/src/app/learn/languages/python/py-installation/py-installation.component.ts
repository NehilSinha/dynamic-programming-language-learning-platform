import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../../../../services/apicall.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-py-installation',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './py-installation.component.html',
  styleUrl: './py-installation.component.css'
})
export class PyInstallationComponent implements OnInit {
  pythonInfo: any;
  errorMessage: string | null = null;
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getInfo('python-info/install').subscribe(
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
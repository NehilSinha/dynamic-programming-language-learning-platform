import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../../../../services/apicall.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-py-modules',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './py-modules.component.html',
  styleUrl: './py-modules.component.css'
})
export class PyModulesComponent implements OnInit {
  pythonInfo: any;
  errorMessage: string | null = null;
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getInfo('python-info/modules').subscribe(
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
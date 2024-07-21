import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApicallService } from '../../../../../services/apicall.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-py-info',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './py-info.component.html',
  styleUrl: './py-info.component.css'
})
export class PyInfoComponent implements OnInit {
  pythonInfo: any;
  errorMessage: string | null = null;
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getInfo('python-info').subscribe(
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

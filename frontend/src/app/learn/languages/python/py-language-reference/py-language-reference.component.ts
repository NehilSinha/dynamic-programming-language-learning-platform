import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../../../../services/apicall.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-py-language-reference',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './py-language-reference.component.html',
  styleUrl: './py-language-reference.component.css'
})
export class PyLanguageReferenceComponent implements OnInit {
  pythonInfo: any;
  errorMessage: string | null = null;
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getInfo('python-info/reference').subscribe(
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
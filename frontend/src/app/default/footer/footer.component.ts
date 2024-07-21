import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  // Base64 encoded copyright notice
  private encodedString: string = 'wqkgMjAyNCBDb2RlckZyZWRpLiBBbGwgcmlnaHRzIHJlc2VydmVkLg==';
  public copyrightNotice: string = '';

  constructor() { }

  ngOnInit(): void {
    this.decodeCopyrightNotice();
  }

  private decodeCopyrightNotice(): void {
    this.copyrightNotice = atob(this.encodedString);
  }
}
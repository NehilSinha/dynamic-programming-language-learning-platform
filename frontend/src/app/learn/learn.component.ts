import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../services/filter.pipe';

interface Language {
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
  link: string;
  visible: boolean;
  comingSoon: boolean;
}

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule, MatCardModule, FilterPipe, FormsModule],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent {
  constructor(public authService: AuthService) { }
  cardClicked() {
    console.log('Card clicked!');
  }
  searchQuery: string = '';
  showModal: boolean = false;
  languages = [
    { title: 'Python Programming', description: 'Dive into Python, a versatile and powerful programming language widely used in various fields.', link: '/learn/python', imgSrc: 'https://static-00.iconduck.com/assets.00/python-icon-256x256-892onvae.png', alt: 'Python Programming', visible: true, comingSoon: false },
    { title: 'C Programming', description: 'Learn the fundamentals of C programming language, the foundation of modern software development.', link: '/learn/c', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRucYPcBQiLv4Ln4VVbbprfVPpFnRU3fBNNQ&s', alt: 'C Programming', visible: true, comingSoon: false },
    { title: 'Angular Programming', description: 'Master Angular, a robust framework for building dynamic web applications and user interfaces.', link: '/learn/angular', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKO2JKpkkbsTm7NNPmmV-wkZADH6FYM2UkA&s', alt: 'Angular Programming', visible: true, comingSoon: false },
    { title: '.NET Programming', description: 'Explore .NET for scalable and robust application development.', link: '/learn/dotnet', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzemPW2zVigKv44mjIDfGwrf_Rgzcyu07m_A&s', alt: '.NET Programming', visible: true, comingSoon: false },
    // Add other languages here
    { title: 'MVC Programming', description: 'Coming Soon: Learn MVC architecture for building scalable web applications.', link: '', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4BIdNAnqt4ySMcT8jbl1cfZgvps0xUvR8A&s', alt: 'Coming Soon', visible: true, comingSoon: true },
    { title: 'Java Programming', description: 'Coming Soon: Explore Java, a powerful language for enterprise-grade applications.', link: '', imgSrc: 'https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png?f=webp&w=256', alt: 'Coming Soon', visible: true, comingSoon: true },
    { title: 'React Programming', description: 'Coming Soon: Dive into React for building interactive and responsive UIs.', link: '', imgSrc: 'https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256', alt: 'Coming Soon', visible: true, comingSoon: true },
    { title: 'Ruby Programming', description: 'Coming Soon: Learn Ruby for dynamic and object-oriented programming.', link: '', imgSrc: 'https://cdn.iconscout.com/icon/free/png-256/free-ruby-3521497-2944920.png', alt: 'Coming Soon', visible: true, comingSoon: true },
    { title: 'PHP Programming', description: 'Coming Soon: Explore PHP for server-side scripting and web development.', link: '', imgSrc: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038870-1720085.png', alt: 'Coming Soon', visible: true, comingSoon: true },
    { title: 'Swift Programming', description: 'Coming Soon: Dive into Swift for building powerful iOS and macOS applications.', link: '', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPoi0fALopQqvBEMq6A4-EETjJ_WjVhycJg&s', alt: 'Coming Soon', visible: true, comingSoon: true },
    { title: 'Kotlin Programming', description: 'Coming Soon: Master Kotlin for modern Android development.', link: '', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMqcPYrGB2mMauyg3pK8NMBVtzgQotqJe5w&s', alt: 'Coming Soon', visible: true, comingSoon: true },
    { title: 'Go Programming', description: 'Coming Soon: Learn Go for building fast and efficient software solutions.', link: '', imgSrc: 'https://cdn.iconscout.com/icon/free/png-256/free-go-21-1175270.png', alt: 'Coming Soon', visible: true, comingSoon: true }
  ];
  onLanguageClick(language: Language) {
    if (!this.authService.isLoggedIn()) {
      this.showModal = true;
    } else {
      window.location.href = language.link;
    }
  }
}
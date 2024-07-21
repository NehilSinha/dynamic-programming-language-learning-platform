export interface User {
    username: string;
    password: string;
    avatar: File | null;
    lastLogin?: Date;
    lastLogout?: Date;
  }
  
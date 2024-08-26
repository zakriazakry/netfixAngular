import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
   users = [
    {
      id: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
      name: "Zakria Zekri",
      email: "zakria@gmail.com",
      phone: "0944444442",
      plan: "Premium",
      ip: "192.168.1.1",
      last_login: "2024-08-25 14:32:00",
      created_at: "2023-05-12 09:15:00"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg",
      name: "Ali Mohammed",
      email: "ali@gmail.com",
      phone: "0944443442",
      plan: "Basic",
      ip: "192.168.1.2",
      last_login: "2024-08-26 10:45:00",
      created_at: "2023-06-21 11:22:00"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/474x/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f.jpg",
      name: "Ibrahim Elahras",
      email: "ibrahim@gmail.com",
      phone: "0944444242",
      plan: "Standard",
      ip: "192.168.1.3",
      last_login: "2024-08-24 08:55:00",
      created_at: "2023-07-13 13:44:00"
    },
    {
      id: 4,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png",
      name: "Aimen Mohammed",
      email: "aimen@gmail.com",
      phone: "0944444443",
      plan: "Premium",
      ip: "192.168.1.4",
      last_login: "2024-08-23 16:12:00",
      created_at: "2023-08-01 07:05:00"
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg",
      name: "Taha Zekri",
      email: "taha@gmail.com",
      phone: "0944444444",
      plan: "Basic",
      ip: "192.168.1.5",
      last_login: "2024-08-22 12:50:00",
      created_at: "2023-09-11 14:22:00"
    },
  ];

}

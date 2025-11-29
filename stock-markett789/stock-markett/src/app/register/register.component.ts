import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const user: User = { username: this.username, email: this.email, password: this.password };

    this.userService.register(user).subscribe(
      () => {
        this.successMessage = 'Đăng ký thành công! Hãy đăng nhập.';
        setTimeout(() => this.router.navigate(['/login']), 1000);
      },
      (error) => {
        if (error && error.error && error.error.message) {
          // Handle specific error messages from the server
          if (error.error.message.includes('username already exists')) {
            this.errorMessage = 'Tên người dùng đã tồn tại. Vui lòng chọn tên người dùng khác.';
          } else if(error.error.message.includes('email already exists')){
            this.errorMessage = 'Email đã tồn tại. Vui lòng chọn email khác.';
          } else {
            this.errorMessage = 'Đăng ký thất bại! ' + error.error.message; // Display other server-side errors
          }
        } else {
          this.errorMessage = 'Đăng ký thất bại! Vui lòng thử lại sau.'; // Default error message
        }
      }
    );
  }
}

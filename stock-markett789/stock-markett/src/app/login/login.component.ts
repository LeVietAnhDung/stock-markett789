import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    // Kiểm tra xem đã nhập tài khoản và mật khẩu chưa
    if (!this.username || !this.password) {
      this.errorMessage = 'Vui lòng nhập tài khoản và mật khẩu!';
      return;
    }

    const credentials = { username: this.username, password: this.password };

    this.userService.login(credentials).subscribe(
      (users) => {
        if (users.length > 0) {
          alert('Đăng nhập thành công!');
          this.router.navigate(['/stocks/list-2']);
        } else {
          this.errorMessage = 'Sai tài khoản hoặc mật khẩu!';
        }
      },
      () => {
        this.errorMessage = 'Lỗi khi đăng nhập!';
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthGuard } from '../../shared/auth.guard';

/** 「ログイン」画面 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /** ログインフォーム */
  public loginForm!: FormGroup;
  /** エラーメッセージ */
  public errorMessage: string = '';
  
  constructor(private formBuilder: FormBuilder, private router: Router, private authGuard: AuthGuard) { }
  
  /** 画面初期表示時の処理 */
  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.authGuard.logout();  // ログイン画面に遷移した時はログイン情報を削除しておく
  }
  
  /** 「Login」ボタン押下時の処理 */
  public async onLogin(): Promise<void> {
    this.errorMessage = '';
    try {
      await this.authGuard.login(this.loginForm.value.userName, this.loginForm.value.password);
      this.router.navigate(['/home']);
    }
    catch(error) {
      console.error('Login Component : On Login', error);
      this.errorMessage = 'Failed To Login';
    }
  }
}

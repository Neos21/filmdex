import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth.service';
import { AuthGuard } from '../../shared/auth.guard';

/** Login Component */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /** ログインフォーム */
  public loginForm!: FormGroup;
  /** フィードバックメッセージ */
  public message: string = '';
  
  /**
   * コンストラクタ
   * 
   * @param formBuilder FormBuilder
   * @param router Router
   * @param authService AuthService
   * @param authGuard AuthGuard
   */
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private authGuard: AuthGuard) { }
  
  /** 画面初期表示時の処理 */
  public async ngOnInit(): Promise<void> {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    
    // ログイン画面に遷移した時はログイン情報を削除しておく
    this.authGuard.isLogined = false;
    await this.authService.logout();
  }
  
  /** 「Login」ボタン押下時の処理 */
  public async onSubmit(): Promise<void> {
    console.log('Login Component : On Submit');
    this.message = '';
    
    try {
      await this.authService.login(this.loginForm.value.userName, this.loginForm.value.password);
      this.authGuard.isLogined = true;
      this.router.navigate(['/home']);
    }
    catch(error) {
      console.warn('Login Component : On Submit : Error', error);
      this.message = 'Failed To Login';
    }
  }
}

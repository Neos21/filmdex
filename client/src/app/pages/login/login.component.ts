import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { constants } from '../../shared/constants';
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
  
  constructor(private formBuilder: FormBuilder, private router: Router, private authGuard: AuthGuard) { }
  
  /** 画面初期表示時の処理 */
  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    
    // ログイン画面に遷移した時はログイン情報を削除しておく
    this.authGuard.logout();
  }
  
  /** 「Login」ボタン押下時の処理 */
  public async onLogin(): Promise<void> {
    this.message = '';
    
    try {
      await this.authGuard.login(this.loginForm.value.userName, this.loginForm.value.password);
      console.log('Login Component : On Login : Succeeded');
      this.router.navigate(['/home']);
    }
    catch(error) {
      console.warn('Login Component : On Login : Error', error);
      this.message = 'Failed To Login';
    }
  }
}

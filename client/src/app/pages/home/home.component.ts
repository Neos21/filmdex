import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { AuthGuard } from '../../shared/auth.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** プロフィール情報 */
  public profile: string = '';
  
  constructor(private httpClient: HttpClient, private authGuard: AuthGuard) { }
  
  /** プロフィールを取得する*/
  public async onFetchProfile(): Promise<void> {
    this.profile = '';
    
    try {
      const result = await this.httpClient.get(`${environment.apiUrl}/auth/profile`).toPromise();
      console.log('On Fetch Profile : Succeeded', result);
      this.profile = JSON.stringify(result);
    }
    catch(error) {
      console.error('On Fetch Profile : Error', error);
      if(error?.error.message === 'JWT Access Token Expired') {
        this.profile = 'JWT Access Token Expired. Please Re Login';
        window.alert('JWT Access Token Expired. Please Re Login');
        await this.authGuard.reLogin();  // トークンを再発行する
        await this.onFetchProfile();  // リトライ
      }
      else {
        this.profile = 'Failed To Fetch Profile';
      }
    }
  }
}

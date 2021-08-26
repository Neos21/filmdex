import { Component, OnInit } from '@angular/core';

import { Film } from '../../../../../server/src/entities/film';

import { ApiFilmsService } from './services/api-films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /** 映画情報一覧 */
  public films: Array<Film> = [];
  
  /** エラーメッセージ */
  public errorMessage: string = '';
  
  constructor(private apiFilmsService: ApiFilmsService) { }
  
  /** 画面初期表示時 */
  public async ngOnInit(): Promise<void> {
    this.setState();
    try {
      this.setState(undefined, await this.apiFilmsService.findAll());
    }
    catch(error) {
      console.error('Home Component : On Init', error);
      this.setState('Failed To Fetch Films');
    }
  }
  
  /** 子コンポーネントから伝搬されたイベント : 登録処理 */
  public async onCreated(film: Film): Promise<void> {
    await this.apiFilmsService.create(film);
    this.films.push(film);
  }
  
  /** 子コンポーネントから伝搬されたイベント : 更新処理 */
  public async onUpdated(film: Film): Promise<void> {
    await this.apiFilmsService.save(film);
  }
  
  /**
   * 画面の状態を更新する
   * 
   * @param errorMessage エラーメッセージ
   * @param films 映画情報一覧
   */
  private setState(errorMessage?: string, films?: Array<Film>): void {
    this.errorMessage = errorMessage ?? '';
    this.films = films ?? [];
  }
}

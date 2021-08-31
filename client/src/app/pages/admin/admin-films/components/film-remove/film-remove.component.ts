import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Film } from '../../../../../../../../server/src/entities/film';

import { AdminApiFilmsService } from '../../../services/admin-api-films.service';

/** 「映画情報削除確認」コンポーネント */
@Component({
  selector: 'app-film-remove',
  templateUrl: './film-remove.component.html',
  styleUrls: ['./film-remove.component.scss']
})
export class FilmRemoveComponent {
  /** 映画情報 */
  @Input() public film: Film;
  
  /** コンポーネントを閉じるイベント : true なら削除成功・親コンポーネントで再読込を求める */
  @Output() public onClosed: EventEmitter<boolean> = new EventEmitter();
  
  /** API 通信中か否か */
  public isSubmitting: boolean = false;
  
  /** エラーメッセージ */
  public errorMessage: string = '';
  
  constructor(private adminApiFilmsService: AdminApiFilmsService) { }
  
  /** 「Cancel」ボタン押下時 : モーダルを閉じる */
  public onCancel(): void {
    this.onClosed.emit(false);
  }
  
  /** 「Remove」ボタン押下時 : 映画情報を削除してモーダルを閉じる */
  public async onRemove(): Promise<void> {
    this.isSubmitting = true;
    this.errorMessage = '';
    try {
      await this.adminApiFilmsService.remove(this.film.id);
      this.onClosed.emit(true);  // 削除に成功したらモーダルを閉じる
    }
    catch(error) {
      console.error('Film Remove Component : On Remove', error);
      this.errorMessage = 'Failed To Remove';
    }
    finally {
      this.isSubmitting = false;
    }
  }
}

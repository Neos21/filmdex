import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Film } from '../../../../../../../server/src/entities/film';

/**
 * 映画情報1件を td 要素群で表示する
 * 
 * - 表示・更新時 : `<tr app-films-table-row *ngFor="let film of films" [film]="film" (onUpdated)="onUpdated($event)"></tr>`
 * - 登録フォーム : `<tr app-films-table-row [isNewForm]="true" (onCreated)="onCreated($event)"></tr>`
 */
@Component({
  selector: 'tr[app-films-table-row]',
  templateUrl: './films-table-row.component.html',
  styleUrls: ['./films-table-row.component.scss']
})
export class FilmsTableRowComponent {
  /** 登録フォーム行にする場合は true を指定する */
  @Input() public isNewForm: boolean = false;
  
  /** 映画情報 : 表示・兼・登録・更新フォーム */
  @Input() public film: Film = new Film({ });
  
  /** 親コンポーネントに伝搬するイベント : 登録 */
  @Output() public onCreated = new EventEmitter<Film>();
  
  /** 親コンポーネントに伝搬するイベント : 更新 */
  @Output() public onUpdated = new EventEmitter<Film>();
  
  /** 「登録」ボタン押下時 */
  public onCreate(): void {
    this.onCreated.emit(this.film);
    this.film = new Film({ });
  }
  
  /** 「更新」ボタン押下時 */
  public onUpdate(): void {
    this.onUpdated.emit(this.film);
  }
}

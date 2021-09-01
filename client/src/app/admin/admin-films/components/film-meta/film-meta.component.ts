import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Film } from '../../../../../../../server/src/entities/film';
import { Cast } from '../../../../../../../server/src/entities/cast';
import { Staff } from '../../../../../../../server/src/entities/staff';
import { Tag } from '../../../../../../../server/src/entities/tag';

import { AdminApiFilmsService } from '../../../services/admin-api-films.service';

/** 「映画メタ情報編集」コンポーネント */
@Component({
  selector: 'app-film-meta',
  templateUrl: './film-meta.component.html',
  styleUrls: ['./film-meta.component.scss']
})
export class FilmMetaComponent implements OnInit {
  /** 映画情報 */
  @Input() public film: Film;
  
  /** コンポーネントを閉じるイベント */
  @Output() public onClosed: EventEmitter<void> = new EventEmitter();
  
  /** 映画メタ情報フォーム */
  public filmMetaForm: FormGroup;
  
  /** 初回読込中か否か */
  public isLoading: boolean = true;
  
  /** API 通信中か否か */
  public isSubmitting: boolean = false;
  
  /** フォームの状態だけだと未編集状態に戻ってしまったりするので変数で管理する */
  public isEdited: boolean = false;
  
  /** 編集中に「Close」ボタンで閉じる場合の確認 */
  public isConfirmedToClose: boolean = false;
  
  /** エラーメッセージ */
  public errorMessage: string = '';
  
  constructor(private formBuilder: FormBuilder, private adminApiFilmsService: AdminApiFilmsService) { }
  
  /** コンポーネント初期表示時 */
  public async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = '';
    try {
      const film = await this.adminApiFilmsService.findById(this.film.id);
      
      this.film = film;  // API から取得した情報を正とする
      this.filmMetaForm = this.formBuilder.group({
        filmId: [film.id, [Validators.required]],
        casts : this.formBuilder.array(film.casts.map(cast => this.createCastFormGroup(cast))),
        staffs: this.formBuilder.array(film.staffs.map(staff => this.createStaffFormGroup(staff))),
        tags  : this.formBuilder.array(film.tags.map(tag => this.createTagFormGroup(tag))),
        newCast : this.createCastFormGroup(),
        newStaff: this.createStaffFormGroup(),
        newTag  : this.createTagFormGroup()
      });
    }
    catch(error) {
      console.error('Film Meta Component : On Init', error);
      this.errorMessage = 'Failed To Fetch Film Meta';
    }
    finally {
      this.isLoading = false;
    }
  }
  
  /** 「Close」ボタン押下時 */
  public onClose(): void {
    // フォーム未編集・もしくは確認済の場合は閉じる
    if((this.filmMetaForm.pristine && !this.isEdited) || this.isConfirmedToClose) {
      this.onClosed.emit();
      return;
    }
    
    this.isConfirmedToClose = true;  // 初回はフラグ変更のみ
  }
  
  /** 「更新」ボタン押下時 */
  public async onUpdate(): Promise<void> {
    if(this.isSubmitting) return;  // API 通信中は何もしない
    
    this.isSubmitting = true;
    this.errorMessage = '';
    this.isConfirmedToClose = false;
    try {
      // 値を詰める
      this.film.casts  = this.casts.value;
      this.film.staffs = this.staffs.value;
      this.film.tags   = this.tags.value;
      const savedFilm = await this.adminApiFilmsService.save(this.film);
      
      this.film = savedFilm;  // API 更新後の内容を正とする
      // 更新した値を利用してフォームを初期化する
      this.filmMetaForm = this.formBuilder.group({
        filmId: [this.film.id, [Validators.required]],
        casts : this.formBuilder.array(savedFilm.casts.map(cast => this.createCastFormGroup(cast))),
        staffs: this.formBuilder.array(savedFilm.staffs.map(staff => this.createStaffFormGroup(staff))),
        tags  : this.formBuilder.array(savedFilm.tags.map(tag => this.createTagFormGroup(tag))),
        newCast : this.createCastFormGroup(),
        newStaff: this.createStaffFormGroup(),
        newTag  : this.createTagFormGroup()
      });
      
      this.isEdited = false;
    }
    catch(error) {
      console.error('Film Meta Component : On Update', error);
      this.errorMessage = 'Failed To Update';
    }
    finally {
      this.isSubmitting = false;
    }
  }
  
  /** 「更新」ボタンを非活性にするか否か */
  public isDisabledUpdateButton(): boolean {
    if(this.isEdited) return false;  // 編集状態なら常に活性化する
    return (this.casts.pristine && this.staffs.pristine && this.tags.pristine) || (this.casts.invalid || this.staffs.invalid || this.tags.invalid);
  }
  
  /** Cast 「追加」ボタン押下時 */
  public onAddNewCast(): void {
    const newCastFormGroup: FormGroup = this.filmMetaForm.get('newCast') as FormGroup;
    const cast = new Cast(newCastFormGroup.value);
    cast.order = this.casts.length + 1;  // 最終行に追加する
    const createdCastFormGroup = this.createCastFormGroup(cast);
    this.casts.push(createdCastFormGroup);
    newCastFormGroup.reset({ filmId: this.film.id, order: -1 });  // 値をリセットする
    this.isConfirmedToClose = false;  // 「Close」ボタンを初期状態に戻す
    this.isEdited = true;  // 編集状態にする
  }
  
  /** Cast 「↑」ボタン押下時 */
  public onUpCast(index: number): void {
    this.swapFormArray(this.casts, index, index - 1);
  }
  
  /** Cast 「↓」ボタン押下時 */
  public onDownCast(index: number): void {
    this.swapFormArray(this.casts, index, index + 1);
  }
  
  /** Cast 「×」ボタン押下時 */
  public onRemoveCast(index: number): void {
    this.removeFormArray(this.casts, index);
  }
  
  /** Staff 「追加」ボタン押下時 */
  public onAddNewStaff(): void {
    const newStaffFormGroup: FormGroup = this.filmMetaForm.get('newStaff') as FormGroup;
    const staff = new Staff(newStaffFormGroup.value);
    staff.order = this.staffs.length + 1;  // 最終行に追加する
    const createdStaffFormGroup = this.createStaffFormGroup(staff);
    this.staffs.push(createdStaffFormGroup);
    newStaffFormGroup.reset({ filmId: this.film.id, order: -1 });  // 値をリセットする
    this.isConfirmedToClose = false;  // 「Close」ボタンを初期状態に戻す
    this.isEdited = true;  // 編集状態にする
  }
  
  /** Staff 「↑」ボタン押下時 */
  public onUpStaff(index: number): void {
    this.swapFormArray(this.staffs, index, index - 1);
  }
  
  /** Staff 「↓」ボタン押下時 */
  public onDownStaff(index: number): void {
    this.swapFormArray(this.staffs, index, index + 1);
  }
  
  /** Staff 「×」ボタン押下時 */
  public onRemoveStaff(index: number): void {
    this.removeFormArray(this.staffs, index);
  }
  
  /** Tag 「追加」ボタン押下時 */
  public onAddNewTag(): void {
    const newTagFormGroup: FormGroup = this.filmMetaForm.get('newTag') as FormGroup;
    const tag = new Tag(newTagFormGroup.value);
    tag.order = this.tags.length + 1;  // 最終行に追加する
    const createdTagFormGroup = this.createTagFormGroup(tag);
    this.tags.push(createdTagFormGroup);
    newTagFormGroup.reset({ filmId: this.film.id, order: -1 });  // 値をリセットする
    this.isConfirmedToClose = false;  // 「Close」ボタンを初期状態に戻す
    this.isEdited = true;  // 編集状態にする
  }
  
  /** Tag 「↑」ボタン押下時 */
  public onUpTag(index: number): void {
    this.swapFormArray(this.tags, index, index - 1);
  }
  
  /** Tag 「↓」ボタン押下時 */
  public onDownTag(index: number): void {
    this.swapFormArray(this.tags, index, index + 1);
  }
  
  /** Tag 「×」ボタン押下時 */
  public onRemoveTag(index: number): void {
    this.removeFormArray(this.tags, index);
  }
  
  /** formArrayName 属性解決のための Getter */
  public get casts(): FormArray {
    return this.filmMetaForm.get('casts') as FormArray;
  }
  
  /** formArrayName 属性解決のための Getter */
  public get staffs(): FormArray {
    return this.filmMetaForm.get('staffs') as FormArray;
  }
  
  /** formArrayName 属性解決のための Getter */
  public get tags(): FormArray {
    return this.filmMetaForm.get('tags') as FormArray;
  }
  
  /**
   * キャスト情報のオブジェクトから FormGroup を生成する
   * 
   * @param cast キャスト情報・未指定の場合は全項目を空で作る
   * @return FormGroup
   */
  private createCastFormGroup(cast?: Cast): FormGroup {
    return this.formBuilder.group({
      filmId: [this.film.id     , [Validators.required]],
      order : [cast?.order ?? -1, [Validators.required]],
      role  : [cast?.role  ?? '', [Validators.required]],
      name  : [cast?.name  ?? '', [Validators.required]]
    });
  }
  
  /**
   * スタッフ情報のオブジェクトから FormGroup を生成する
   * 
   * @param staff スタッフ情報・未指定の場合は全項目を空で作る
   * @return FormGroup
   */
  private createStaffFormGroup(staff?: Staff): FormGroup {
    return this.formBuilder.group({
      filmId: [this.film.id      , [Validators.required]],
      order : [staff?.order ?? -1, [Validators.required]],
      role  : [staff?.role  ?? '', [Validators.required]],
      name  : [staff?.name  ?? '', [Validators.required]]
    });
  }
  
  /**
   * タグ情報のオブジェクトから FormGroup を生成する
   * 
   * @param tag タグ情報・未指定の場合は全項目を空で作る
   * @return FormGroup
   */
  private createTagFormGroup(tag?: Tag): FormGroup {
    return this.formBuilder.group({
      filmId: [this.film.id    , [Validators.required]],
      order : [tag?.order ?? -1, [Validators.required]],
      name  : [tag?.name  ?? '', [Validators.required]]
    });
  }
  
  /**
   * FormArray の2つの要素を入れ替える
   * 
   * @param formArray FormArray
   * @param sourceIndex 入れ替える添字
   * @param destIndex 入れ替える添字
   */
  private swapFormArray(formArray: FormArray, sourceIndex: number, destIndex: number): void {
    const sourceFormGroup = formArray.at(sourceIndex) as FormGroup;
    const destFormGroup   = formArray.at(destIndex) as FormGroup;
    const newSourceValue = Object.assign({}, sourceFormGroup.value);
    const newDestValue   = Object.assign({}, destFormGroup.value);
    newSourceValue.order = destFormGroup.value.order;
    newDestValue.order   = sourceFormGroup.value.order;
    formArray.at(destIndex).setValue(newSourceValue);
    formArray.at(sourceIndex).setValue(newDestValue);
    this.isConfirmedToClose = false;  // 「Close」ボタンを初期状態に戻す
    this.isEdited = true;  // 編集状態にする
  }
  
  /**
   * FormArray から要素を1つ削除し order を再度採番する
   * 
   * @param formArray FormArray
   * @param index 削除する添字
   */
  private removeFormArray(formArray: FormArray, index: number): void {
    formArray.removeAt(index);
    formArray.controls.forEach((formGroup, formArrayIndex) => {
      (formGroup as FormGroup).controls.order.setValue(formArrayIndex + 1);
    });
    this.isConfirmedToClose = false;  // 「Close」ボタンを初期状態に戻す
    this.isEdited = true;  // 編集状態にする
  }
}

import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Cast } from './cast';
import { Staff } from './staff';
import { Tag } from './tag';

/** 映画情報 */
@Entity('films')
export class Film {
  /** ID */
  @PrimaryGeneratedColumn({ name: 'id' })
  public readonly id: number;
  
  /** 公開年 */
  @Column({ type: 'integer', name: 'published_year', nullable: true })
  public publishedYear: number;
  
  /** 原題 */
  @Column({ type: 'text', name: 'title' })
  public title: string;
  
  /** 邦題 */
  @Column({ type: 'text', name: 'japanese_title', nullable: true })
  public japaneseTitle: string;
  
  /** あらすじ */
  @Column({ type: 'text', name: 'scenario', nullable: true })
  public scenario: string;
  
  /** 感想 */
  @Column({ type: 'text', name: 'review', nullable: true })
  public review: string;
  
  /** キャスト情報 */
  @OneToMany((_type) => Cast, (cast) => cast.film)  // 子との関係を示す (カラムは作られない)
  public casts: Array<Cast>;
  
  /** スタッフ情報 */
  @OneToMany((_type) => Staff, (staff) => staff.film)
  public staffs: Array<Staff>;
  
  /** タグ情報 */
  @OneToMany((_type) => Tag, (tag) => tag.film)
  public tags: Array<Tag>;
  
  /** 新規登録日時 */
  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  public readonly createdAt: Date;
  
  /** 最終更新日時 */
  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  public readonly updatedAt: Date;
  
  constructor(initialPartial: Partial<Film>) {
    Object.assign(this, initialPartial);
  }
}

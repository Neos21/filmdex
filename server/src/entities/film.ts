import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/** 映画情報 */
@Entity()
export class Film {
  /** ID */
  @PrimaryGeneratedColumn()
  public id: number;
  
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
    
  /** 新規登録日時 */
  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  public readonly createdAt: Date;
  
  /** 最終更新日時 */
  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  public readonly updatedAt: Date;
  
  constructor(initialFilmPartial: Partial<Film>) {
    Object.assign(this, initialFilmPartial);
  }
}

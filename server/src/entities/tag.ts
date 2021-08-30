import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

/** タグ情報 (ジャンル・シリーズなど) */
@Entity()
export class Tag {
  /** 映画情報 ID */
  @PrimaryColumn({ type: 'integer', name: 'film_id' })
  public filmId: number;
  
  /** 並び順 */
  @PrimaryColumn({ type: 'integer', name: 'order' })
  public order: number;
  
  /** タグ名 */
  @Column({ type: 'text', name: 'name' })
  public name: string;
  
  /** 新規登録日時 */
  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  public readonly createdAt: Date;
  
  /** 最終更新日時 */
  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  public readonly updatedAt: Date;
  
  constructor(initialPartial: Partial<Tag>) {
    Object.assign(this, initialPartial);
  }
}

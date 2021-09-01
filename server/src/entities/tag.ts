import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';

import { Film } from './film';

/** タグ情報 */
@Entity('tags')
export class Tag {
  /** 映画情報 ID */
  @PrimaryColumn({ type: 'integer', name: 'film_id' })
  public readonly filmId: number;
  
  /** 並び順 */
  @PrimaryColumn({ type: 'integer', name: 'order' })
  public order: number;
  
  /** タグ名 */
  @Column({ type: 'text', name: 'name' })
  public name: string;
  
  /** 親となる映画情報 */
  @ManyToOne((_type) => Film, (film) => film.tags)
  @JoinColumn({ name: 'film_id', referencedColumnName: 'id' })
  public film: Film;
  
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

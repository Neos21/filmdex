import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';

import { Film } from './film';

/** キャスト情報 */
@Entity('casts')
export class Cast {
  /** 映画情報 ID */
  @PrimaryColumn({ type: 'integer', name: 'film_id' })
  public readonly filmId: number;
  
  /** 並び順 */
  @PrimaryColumn({ type: 'integer', name: 'order' })
  public order: number;
  
  /** 役名 */
  @Column({ type: 'text', name: 'role' })
  public role: string;
  
  /** 名前 */
  @Column({ type: 'text', name: 'name' })
  public name: string;
  
  /** 親となる映画情報 */
  @ManyToOne((_type) => Film, (film) => film.casts)  // 親との関係を示す (カラムは作られない)
  @JoinColumn({ name: 'film_id', referencedColumnName: 'id' })  // casts.film_id が films.id の Foreign Key であることを示す
  public film: Film;
  
  /** 新規登録日時 */
  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  public readonly createdAt: Date;
  
  /** 最終更新日時 */
  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  public readonly updatedAt: Date;
  
  constructor(initialPartial: Partial<Cast>) {
    Object.assign(this, initialPartial);
  }
}

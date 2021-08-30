import { Cast } from './cast';
import { Staff } from './staff';
import { Tag } from './tag';

/** 映画メタ情報 */
export class FilmMeta {
  constructor(
    /** 映画情報 ID */
    public filmId: number,
    
    /** キャスト情報 */
    public casts: Array<Cast>,
    
    /** スタッフ情報 */
    public staffs: Array<Staff>,
    
    /** タグ情報 */
    public tags: Array<Tag>
  ) { }
}

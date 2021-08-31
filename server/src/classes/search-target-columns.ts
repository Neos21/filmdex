/** 検索条件定義 */
export const searchTargetColumns = {
  /** 1年指定 */                        publishedYear: { key: 'published_year', name: '公開年'   },
  /** 10年区切りの年代 (00～09 年) */   publishedAge : { key: 'published_age' , name: '公開年代' },
  /** 原題・邦題の部分一致 */           title        : { key: 'title'         , name: 'タイトル' },
  /** キャスト役名・名前の部分一致 */   cast         : { key: 'cast'          , name: 'キャスト' },
  /** スタッフ役割名・名前の部分一致 */ staff        : { key: 'staff'         , name: 'スタッフ' },
  /** タグ名の部分一致 */               tag          : { key: 'tag'           , name: 'タグ'     }
};

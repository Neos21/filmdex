/** 検索条件定義 */
export const searchTargetColumns = {
  /** 1年指定 */                       publishedYear: { key: 'published_year', name: '公開年'   },
  /** 10年区切りの年代 (00～09 年) */  publishedAge : { key: 'published_age' , name: '公開年代' },
  /** 原題・邦題の部分一致 */          title        : { key: 'title'         , name: 'タイトル' },
  /** キャスト情報の部分一致 */        casts        : { key: 'casts'         , name: 'キャスト' },
  /** スタッフ情報の部分一致 */        staffs       : { key: 'staffs'        , name: 'スタッフ' },
  /** タグ情報の部分一致 */            tags         : { key: 'tags'          , name: 'タグ'     }
};

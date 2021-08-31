/** 検索条件定義 : 物理名と画面表示上の文言 */
export const searchTargetColumns = {
  published_year: { name: '公開年'   },  // 1年指定
  published_age : { name: '公開年代' },  // 10年区切りの年代 (00～09 年)
  title         : { name: 'タイトル' },  // 原題・邦題両方を対象に部分一致
  cast          : { name: 'キャスト' },  // キャスト名の完全一致
  staff         : { name: 'スタッフ' },  // スタッフ名の完全一致
  tag           : { name: 'タグ'     }   // タグ名の完全一致
};

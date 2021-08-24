/** 認証関連の定数 */
export const authConstants = {
  /** JWT アクセストークン発行に使用する秘密鍵・本来は環境変数で注入すべき https://zenn.dev/uttk/scraps/5169d2bb2e3d767533f3#comment-65d278330ab6d7a86627 */
  jwtSecretKey: 'MySecretKey',
  /** JWT アクセストークンの有効期限 https://github.com/vercel/ms */
  jwtTokenExpiresIn: '10s'  // '7 days'
};

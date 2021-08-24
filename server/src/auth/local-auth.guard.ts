import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/** Local Auth Guard : ガードを使用する際にクラス名を指定する方が分かりやすいのでラッパーを作っておく */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') { }

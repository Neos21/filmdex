(self.webpackChunkfilmdex=self.webpackChunkfilmdex||[]).push([[179],{255:Co=>{function En(Do){return Promise.resolve().then(()=>{var bn=new Error("Cannot find module '"+Do+"'");throw bn.code="MODULE_NOT_FOUND",bn})}En.keys=()=>[],En.resolve=En,En.id=255,Co.exports=En},116:(Co,En,Do)=>{"use strict";function bn(t){return"function"==typeof t}let Ba=!1;const At={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else Ba&&console.log("RxJS: Back to a better error behavior. Thank you. <3");Ba=t},get useDeprecatedSynchronousErrorHandling(){return Ba}};function gr(t){setTimeout(()=>{throw t},0)}const Vs={closed:!0,next(t){},error(t){if(At.useDeprecatedSynchronousErrorHandling)throw t;gr(t)},complete(){}},ja=Array.isArray||(t=>t&&"number"==typeof t.length);function Ha(t){return null!==t&&"object"==typeof t}const ks=(()=>{function t(e){return Error.call(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((n,r)=>`${r+1}) ${n.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e,this}return t.prototype=Object.create(Error.prototype),t})();class he{constructor(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}unsubscribe(){let e;if(this.closed)return;let{_parentOrParents:n,_ctorUnsubscribe:r,_unsubscribe:o,_subscriptions:s}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof he)n.remove(this);else if(null!==n)for(let i=0;i<n.length;++i)n[i].remove(this);if(bn(o)){r&&(this._unsubscribe=void 0);try{o.call(this)}catch(i){e=i instanceof ks?Ld(i.errors):[i]}}if(ja(s)){let i=-1,a=s.length;for(;++i<a;){const l=s[i];if(Ha(l))try{l.unsubscribe()}catch(u){e=e||[],u instanceof ks?e=e.concat(Ld(u.errors)):e.push(u)}}}if(e)throw new ks(e)}add(e){let n=e;if(!e)return he.EMPTY;switch(typeof e){case"function":n=new he(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof he)){const s=n;n=new he,n._subscriptions=[s]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof he){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n}remove(e){const n=this._subscriptions;if(n){const r=n.indexOf(e);-1!==r&&n.splice(r,1)}}}var t;function Ld(t){return t.reduce((e,n)=>e.concat(n instanceof ks?n.errors:n),[])}he.EMPTY=((t=new he).closed=!0,t);const Ls="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random();class Ze extends he{constructor(e,n,r){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=Vs;break;case 1:if(!e){this.destination=Vs;break}if("object"==typeof e){e instanceof Ze?(this.syncErrorThrowable=e.syncErrorThrowable,this.destination=e,e.add(this)):(this.syncErrorThrowable=!0,this.destination=new Bd(this,e));break}default:this.syncErrorThrowable=!0,this.destination=new Bd(this,e,n,r)}}[Ls](){return this}static create(e,n,r){const o=new Ze(e,n,r);return o.syncErrorThrowable=!1,o}next(e){this.isStopped||this._next(e)}error(e){this.isStopped||(this.isStopped=!0,this._error(e))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(e){this.destination.next(e)}_error(e){this.destination.error(e),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:e}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}class Bd extends Ze{constructor(e,n,r,o){super(),this._parentSubscriber=e;let s,i=this;bn(n)?s=n:n&&(s=n.next,r=n.error,o=n.complete,n!==Vs&&(i=Object.create(n),bn(i.unsubscribe)&&this.add(i.unsubscribe.bind(i)),i.unsubscribe=this.unsubscribe.bind(this))),this._context=i,this._next=s,this._error=r,this._complete=o}next(e){if(!this.isStopped&&this._next){const{_parentSubscriber:n}=this;At.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?this.__tryOrSetError(n,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}error(e){if(!this.isStopped){const{_parentSubscriber:n}=this,{useDeprecatedSynchronousErrorHandling:r}=At;if(this._error)r&&n.syncErrorThrowable?(this.__tryOrSetError(n,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(n.syncErrorThrowable)r?(n.syncErrorValue=e,n.syncErrorThrown=!0):gr(e),this.unsubscribe();else{if(this.unsubscribe(),r)throw e;gr(e)}}}complete(){if(!this.isStopped){const{_parentSubscriber:e}=this;if(this._complete){const n=()=>this._complete.call(this._context);At.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(e,n){try{e.call(this._context,n)}catch(r){if(this.unsubscribe(),At.useDeprecatedSynchronousErrorHandling)throw r;gr(r)}}__tryOrSetError(e,n,r){if(!At.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{n.call(this._context,r)}catch(o){return At.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=o,e.syncErrorThrown=!0,!0):(gr(o),!0)}return!1}_unsubscribe(){const{_parentSubscriber:e}=this;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}const Eo="function"==typeof Symbol&&Symbol.observable||"@@observable";function jd(t){return t}let Fe=(()=>{class t{constructor(n){this._isScalar=!1,n&&(this._subscribe=n)}lift(n){const r=new t;return r.source=this,r.operator=n,r}subscribe(n,r,o){const{operator:s}=this,i=function(t,e,n){if(t){if(t instanceof Ze)return t;if(t[Ls])return t[Ls]()}return t||e||n?new Ze(t,e,n):new Ze(Vs)}(n,r,o);if(i.add(s?s.call(i,this.source):this.source||At.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),At.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){At.useDeprecatedSynchronousErrorHandling&&(n.syncErrorThrown=!0,n.syncErrorValue=r),function(t){for(;t;){const{closed:e,destination:n,isStopped:r}=t;if(e||r)return!1;t=n&&n instanceof Ze?n:null}return!0}(n)?n.error(r):console.warn(r)}}forEach(n,r){return new(r=$d(r))((o,s)=>{let i;i=this.subscribe(a=>{try{n(a)}catch(l){s(l),i&&i.unsubscribe()}},s,o)})}_subscribe(n){const{source:r}=this;return r&&r.subscribe(n)}[Eo](){return this}pipe(...n){return 0===n.length?this:function(t){return 0===t.length?jd:1===t.length?t[0]:function(n){return t.reduce((r,o)=>o(r),n)}}(n)(this)}toPromise(n){return new(n=$d(n))((r,o)=>{let s;this.subscribe(i=>s=i,i=>o(i),()=>r(s))})}}return t.create=e=>new t(e),t})();function $d(t){if(t||(t=At.Promise||Promise),!t)throw new Error("no Promise impl found");return t}const bo=(()=>{function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t})();class PD extends he{constructor(e,n){super(),this.subject=e,this.subscriber=n,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const e=this.subject,n=e.observers;if(this.subject=null,!n||0===n.length||e.isStopped||e.closed)return;const r=n.indexOf(this.subscriber);-1!==r&&n.splice(r,1)}}class Ud extends Ze{constructor(e){super(e),this.destination=e}}let $a=(()=>{class t extends Fe{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[Ls](){return new Ud(this)}lift(n){const r=new Gd(this,this);return r.operator=n,r}next(n){if(this.closed)throw new bo;if(!this.isStopped){const{observers:r}=this,o=r.length,s=r.slice();for(let i=0;i<o;i++)s[i].next(n)}}error(n){if(this.closed)throw new bo;this.hasError=!0,this.thrownError=n,this.isStopped=!0;const{observers:r}=this,o=r.length,s=r.slice();for(let i=0;i<o;i++)s[i].error(n);this.observers.length=0}complete(){if(this.closed)throw new bo;this.isStopped=!0;const{observers:n}=this,r=n.length,o=n.slice();for(let s=0;s<r;s++)o[s].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(n){if(this.closed)throw new bo;return super._trySubscribe(n)}_subscribe(n){if(this.closed)throw new bo;return this.hasError?(n.error(this.thrownError),he.EMPTY):this.isStopped?(n.complete(),he.EMPTY):(this.observers.push(n),new PD(this,n))}asObservable(){const n=new Fe;return n.source=this,n}}return t.create=(e,n)=>new Gd(e,n),t})();class Gd extends $a{constructor(e,n){super(),this.destination=e,this.source=n}next(e){const{destination:n}=this;n&&n.next&&n.next(e)}error(e){const{destination:n}=this;n&&n.error&&this.destination.error(e)}complete(){const{destination:e}=this;e&&e.complete&&this.destination.complete()}_subscribe(e){const{source:n}=this;return n?this.source.subscribe(e):he.EMPTY}}function Wd(t){return t&&"function"==typeof t.schedule}function $n(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new RD(t,e))}}class RD{constructor(e,n){this.project=e,this.thisArg=n}call(e,n){return n.subscribe(new OD(e,this.project,this.thisArg))}}class OD extends Ze{constructor(e,n,r){super(e),this.project=n,this.count=0,this.thisArg=r||this}_next(e){let n;try{n=this.project.call(this.thisArg,e,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(n)}}const qd=t=>e=>{for(let n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()},Bs="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator",zd=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function Qd(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}const Kd=t=>{if(t&&"function"==typeof t[Eo])return(t=>e=>{const n=t[Eo]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(e)})(t);if(zd(t))return qd(t);if(Qd(t))return(t=>e=>(t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,gr),e))(t);if(t&&"function"==typeof t[Bs])return(t=>e=>{const n=t[Bs]();for(;;){let r;try{r=n.next()}catch(o){return e.error(o),e}if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof n.return&&e.add(()=>{n.return&&n.return()}),e})(t);{const n=`You provided ${Ha(t)?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;throw new TypeError(n)}};function Ua(t,e){return new Fe(n=>{const r=new he;let o=0;return r.add(e.schedule(function(){o!==t.length?(n.next(t[o++]),n.closed||r.add(this.schedule())):n.complete()})),r})}function Ga(t,e){return e?function(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[Eo]}(t))return function(t,e){return new Fe(n=>{const r=new he;return r.add(e.schedule(()=>{const o=t[Eo]();r.add(o.subscribe({next(s){r.add(e.schedule(()=>n.next(s)))},error(s){r.add(e.schedule(()=>n.error(s)))},complete(){r.add(e.schedule(()=>n.complete()))}}))})),r})}(t,e);if(Qd(t))return function(t,e){return new Fe(n=>{const r=new he;return r.add(e.schedule(()=>t.then(o=>{r.add(e.schedule(()=>{n.next(o),r.add(e.schedule(()=>n.complete()))}))},o=>{r.add(e.schedule(()=>n.error(o)))}))),r})}(t,e);if(zd(t))return Ua(t,e);if(function(t){return t&&"function"==typeof t[Bs]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new Fe(n=>{const r=new he;let o;return r.add(()=>{o&&"function"==typeof o.return&&o.return()}),r.add(e.schedule(()=>{o=t[Bs](),r.add(e.schedule(function(){if(n.closed)return;let s,i;try{const a=o.next();s=a.value,i=a.done}catch(a){return void n.error(a)}i?n.complete():(n.next(s),this.schedule())}))})),r})}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}(t,e):t instanceof Fe?t:new Fe(Kd(t))}class qD extends Ze{constructor(e){super(),this.parent=e}_next(e){this.parent.notifyNext(e)}_error(e){this.parent.notifyError(e),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class zD extends Ze{notifyNext(e){this.destination.next(e)}notifyError(e){this.destination.error(e)}notifyComplete(){this.destination.complete()}}function Wa(t,e,n=Number.POSITIVE_INFINITY){return"function"==typeof e?r=>r.pipe(Wa((o,s)=>Ga(t(o,s)).pipe($n((i,a)=>e(o,i,s,a))),n)):("number"==typeof e&&(n=e),r=>r.lift(new KD(t,n)))}class KD{constructor(e,n=Number.POSITIVE_INFINITY){this.project=e,this.concurrent=n}call(e,n){return n.subscribe(new YD(e,this.project,this.concurrent))}}class YD extends zD{constructor(e,n,r=Number.POSITIVE_INFINITY){super(e),this.project=n,this.concurrent=r,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)}_tryNext(e){let n;const r=this.index++;try{n=this.project(e,r)}catch(o){return void this.destination.error(o)}this.active++,this._innerSub(n)}_innerSub(e){const n=new qD(this),r=this.destination;r.add(n);const o=function(t,e){if(e.closed)return;if(t instanceof Fe)return t.subscribe(e);let n;try{n=Kd(t)(e)}catch(r){e.error(r)}return n}(e,n);o!==n&&r.add(o)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(e){this.destination.next(e)}notifyComplete(){const e=this.buffer;this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function Yd(t,e){return e?Ua(t,e):new Fe(qd(t))}function Jd(){return function(e){return e.lift(new XD(e))}}class XD{constructor(e){this.connectable=e}call(e,n){const{connectable:r}=this;r._refCount++;const o=new eE(e,r),s=n.subscribe(o);return o.closed||(o.connection=r.connect()),s}}class eE extends Ze{constructor(e,n){super(e),this.connectable=n}_unsubscribe(){const{connectable:e}=this;if(!e)return void(this.connection=null);this.connectable=null;const n=e._refCount;if(n<=0)return void(this.connection=null);if(e._refCount=n-1,n>1)return void(this.connection=null);const{connection:r}=this,o=e._connection;this.connection=null,o&&(!r||o===r)&&o.unsubscribe()}}class tE extends Fe{constructor(e,n){super(),this.source=e,this.subjectFactory=n,this._refCount=0,this._isComplete=!1}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}connect(){let e=this._connection;return e||(this._isComplete=!1,e=this._connection=new he,e.add(this.source.subscribe(new rE(this.getSubject(),this))),e.closed&&(this._connection=null,e=he.EMPTY)),e}refCount(){return Jd()(this)}}const nE=(()=>{const t=tE.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:t._subscribe},_isComplete:{value:t._isComplete,writable:!0},getSubject:{value:t.getSubject},connect:{value:t.connect},refCount:{value:t.refCount}}})();class rE extends Ud{constructor(e,n){super(e),this.connectable=n}_error(e){this._unsubscribe(),super._error(e)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const e=this.connectable;if(e){this.connectable=null;const n=e._connection;e._refCount=0,e._subject=null,e._connection=null,n&&n.unsubscribe()}}}function aE(){return new $a}
/**
       * @license Angular v12.2.2
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function z(t){for(let e in t)if(t[e]===z)return e;throw Error("Could not find renamed property on target object.")}function qa(t,e){for(const n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function j(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(j).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function za(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const uE=z({__forward_ref__:z});function ee(t){return t.__forward_ref__=ee,t.toString=function(){return j(this())},t}function w(t){return Zd(t)?t():t}function Zd(t){return"function"==typeof t&&t.hasOwnProperty(uE)&&t.__forward_ref__===ee}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Un extends Error{constructor(e,n){super(function(t,e){return`${t?`NG0${t}: `:""}${e}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,n)),this.code=e}}function k(t){return"string"==typeof t?t:null==t?"":String(t)}function $e(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():k(t)}function js(t,e){const n=e?` in ${e}`:"";throw new Un("201",`No provider for ${$e(t)} found${n}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function rt(t,e){null==t&&function(t,e,n,r){throw new Error(`ASSERTION ERROR: ${t}`+(null==r?"":` [Expected=> ${n} ${r} ${e} <=Actual]`))}(e,t,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function G(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ot(t){return{providers:t.providers||[],imports:t.imports||[]}}function un(t){return Xd(t,Hs)||Xd(t,tf)}function Xd(t,e){return t.hasOwnProperty(e)?t[e]:null}function ef(t){return t&&(t.hasOwnProperty(Ka)||t.hasOwnProperty(mE))?t[Ka]:null}const Hs=z({\u0275prov:z}),Ka=z({\u0275inj:z}),tf=z({ngInjectableDef:z}),mE=z({ngInjectorDef:z});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var A=(()=>((A=A||{})[A.Default=0]="Default",A[A.Host=1]="Host",A[A.Self=2]="Self",A[A.SkipSelf=4]="SkipSelf",A[A.Optional=8]="Optional",A))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ya;function vn(t){const e=Ya;return Ya=t,e}function nf(t,e,n){const r=un(t);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&A.Optional?null:void 0!==e?e:void js(j(t),"Injector")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wn(t){return{toString:t}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var ft=(()=>((ft=ft||{})[ft.OnPush=0]="OnPush",ft[ft.Default=1]="Default",ft))(),Ee=(()=>((Ee=Ee||{})[Ee.Emulated=0]="Emulated",Ee[Ee.None=2]="None",Ee[Ee.ShadowDom=3]="ShadowDom",Ee))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const _E="undefined"!=typeof globalThis&&globalThis,CE="undefined"!=typeof window&&window,DE="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,EE="undefined"!=typeof global&&global,K=_E||EE||CE||DE,mr={},J=[],$s=z({\u0275cmp:z}),Ja=z({\u0275dir:z}),Za=z({\u0275pipe:z}),rf=z({\u0275mod:z}),bE=z({\u0275loc:z}),cn=z({\u0275fac:z}),vo=z({__NG_ELEMENT_ID__:z});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let vE=0;function wo(t){return wn(()=>{const n={},r={type:t.type,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===ft.OnPush,directiveDefs:null,pipeDefs:null,selectors:t.selectors||J,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||Ee.Emulated,id:"c",styles:t.styles||J,_:null,setInput:null,schemas:t.schemas||null,tView:null},o=t.directives,s=t.features,i=t.pipes;return r.id+=vE++,r.inputs=lf(t.inputs,n),r.outputs=lf(t.outputs),s&&s.forEach(a=>a(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(of):null,r.pipeDefs=i?()=>("function"==typeof i?i():i).map(sf):null,r})}function of(t){return Ue(t)||function(t){return t[Ja]||null}(t)}function sf(t){return function(t){return t[Za]||null}(t)}const af={};function Tt(t){return wn(()=>{const e={type:t.type,bootstrap:t.bootstrap||J,declarations:t.declarations||J,imports:t.imports||J,exports:t.exports||J,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null};return null!=t.id&&(af[t.id]=t.type),e})}function lf(t,e){if(null==t)return mr;const n={};for(const r in t)if(t.hasOwnProperty(r)){let o=t[r],s=o;Array.isArray(o)&&(s=o[1],o=o[0]),n[o]=r,e&&(e[o]=s)}return n}const x=wo;function Ue(t){return t[$s]||null}function ht(t,e){const n=t[rf]||null;if(!n&&!0===e)throw new Error(`Type ${j(t)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const L=11;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function zt(t){return Array.isArray(t)&&"object"==typeof t[1]}function Nt(t){return Array.isArray(t)&&!0===t[1]}function tl(t){return 0!=(8&t.flags)}function qs(t){return 2==(2&t.flags)}function zs(t){return 1==(1&t.flags)}function xt(t){return null!==t.template}function NE(t){return 0!=(512&t[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Qn(t,e){return t.hasOwnProperty(cn)?t[cn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class cf{constructor(e,n,r){this.previousValue=e,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function it(){return df}function df(t){return t.type.prototype.ngOnChanges&&(t.setInput=RE),PE}function PE(){const t=hf(this),e=null==t?void 0:t.current;if(e){const n=t.previous;if(n===mr)t.previous=e;else for(let r in e)n[r]=e[r];t.current=null,this.ngOnChanges(e)}}function RE(t,e,n,r){const o=hf(t)||function(t,e){return t[ff]=e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,{previous:mr,current:null}),s=o.current||(o.current={}),i=o.previous,a=this.declaredInputs[n],l=i[a];s[a]=new cf(l&&l.currentValue,e,i===mr),t[r]=e}it.ngInherit=!0;const ff="__ngSimpleChanges__";function hf(t){return t[ff]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let ol;function ce(t){return!!t.listen}const mf={createRenderer:(t,e)=>void 0!==ol?ol:"undefined"!=typeof document?document:void 0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function me(t){for(;Array.isArray(t);)t=t[0];return t}function Qs(t,e){return me(e[t])}function mt(t,e){return me(e[t.index])}function il(t,e){return t.data[e]}function at(t,e){const n=e[t];return zt(n)?n:n[0]}function al(t){return 128==(128&t[2])}function In(t,e){return null==e?null:t[e]}function _f(t){t[18]=0}function ll(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const F={lFrame:Af(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Cf(){return F.bindingsEnabled}function C(){return F.lFrame.lView}function q(){return F.lFrame.tView}function be(){let t=Ef();for(;null!==t&&64===t.type;)t=t.parent;return t}function Ef(){return F.lFrame.currentTNode}function Qt(t,e){const n=F.lFrame;n.currentTNode=t,n.isParent=e}function ul(){return F.lFrame.isParent}function cl(){F.lFrame.isParent=!1}function Ks(){return F.isInCheckNoChangesMode}function Ys(t){F.isInCheckNoChangesMode=t}function br(){return F.lFrame.bindingIndex++}function KE(t,e){const n=F.lFrame;n.bindingIndex=n.bindingRootIndex=t,dl(e)}function dl(t){F.lFrame.currentDirectiveIndex=t}function hl(t){F.lFrame.currentQueryIndex=t}function JE(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function Mf(t,e,n){if(n&A.SkipSelf){let o=e,s=t;for(;!(o=o.parent,null!==o||n&A.Host||(o=JE(s),null===o||(s=s[15],10&o.type))););if(null===o)return!1;e=o,t=s}const r=F.lFrame=If();return r.currentTNode=e,r.lView=t,!0}function Js(t){const e=If(),n=t[1];F.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function If(){const t=F.lFrame,e=null===t?null:t.child;return null===e?Af(t):e}function Af(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function Tf(){const t=F.lFrame;return F.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const Sf=Tf;function Zs(){const t=Tf();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function We(){return F.lFrame.selectedIndex}function An(t){F.lFrame.selectedIndex=t}function Xs(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const s=t.data[n].type.prototype,{ngAfterContentInit:i,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:u,ngOnDestroy:c}=s;i&&(t.contentHooks||(t.contentHooks=[])).push(-n,i),a&&((t.contentHooks||(t.contentHooks=[])).push(n,a),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,a)),l&&(t.viewHooks||(t.viewHooks=[])).push(-n,l),u&&((t.viewHooks||(t.viewHooks=[])).push(n,u),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,u)),null!=c&&(t.destroyHooks||(t.destroyHooks=[])).push(n,c)}}function ei(t,e,n){Nf(t,e,3,n)}function ti(t,e,n,r){(3&t[2])===n&&Nf(t,e,n,r)}function pl(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function Nf(t,e,n,r){const s=null!=r?r:-1,i=e.length-1;let a=0;for(let l=void 0!==r?65535&t[18]:0;l<i;l++)if("number"==typeof e[l+1]){if(a=e[l],null!=r&&a>=r)break}else e[l]<0&&(t[18]+=65536),(a<s||-1==s)&&(ib(t,n,e,l),t[18]=(4294901760&t[18])+l+2),l++}function ib(t,e,n,r){const o=n[r]<0,s=n[r+1],a=t[o?-n[r]:n[r]];if(o){if(t[2]>>11<t[18]>>16&&(3&t[2])===e){t[2]+=2048;try{s.call(a)}finally{}}}else try{s.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class So{constructor(e,n,r){this.factory=e,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function ni(t,e,n){const r=ce(t);let o=0;for(;o<n.length;){const s=n[o];if("number"==typeof s){if(0!==s)break;o++;const i=n[o++],a=n[o++],l=n[o++];r?t.setAttribute(e,a,l,i):e.setAttributeNS(i,a,l)}else{const i=s,a=n[++o];ml(i)?r&&t.setProperty(e,i,a):r?t.setAttribute(e,i,a):e.setAttribute(i,a),o++}}return o}function xf(t){return 3===t||4===t||6===t}function ml(t){return 64===t.charCodeAt(0)}function ri(t,e){if(null!==e&&0!==e.length)if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const o=e[r];"number"==typeof o?n=o:0===n||Ff(t,n,o,null,-1===n||2===n?e[++r]:null)}}return t}function Ff(t,e,n,r,o){let s=0,i=t.length;if(-1===e)i=-1;else for(;s<t.length;){const a=t[s++];if("number"==typeof a){if(a===e){i=-1;break}if(a>e){i=s-1;break}}}for(;s<t.length;){const a=t[s];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(t[s+1]=o));if(r===t[s+1])return void(t[s+2]=o)}s++,null!==r&&s++,null!==o&&s++}-1!==i&&(t.splice(i,0,e),s=i+1),t.splice(s++,0,n),null!==r&&t.splice(s++,0,r),null!==o&&t.splice(s++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pf(t){return-1!==t}function vr(t){return 32767&t}function wr(t,e){let n=function(t){return t>>16}(t),r=e;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let yl=!0;function oi(t){const e=yl;return yl=t,e}let fb=0;function xo(t,e){const n=Cl(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,_l(r.data,t),_l(e,null),_l(r.blueprint,null));const o=si(t,e),s=t.injectorIndex;if(Pf(o)){const i=vr(o),a=wr(o,e),l=a[1].data;for(let u=0;u<8;u++)e[s+u]=a[i+u]|l[i+u]}return e[s+8]=o,s}function _l(t,e){t.push(0,0,0,0,0,0,0,0,e)}function Cl(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function si(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,o=e;for(;null!==o;){const s=o[1],i=s.type;if(r=2===i?s.declTNode:1===i?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function ii(t,e,n){!function(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(vo)&&(r=n[vo]),null==r&&(r=n[vo]=fb++);const o=255&r;e.data[t+(o>>5)]|=1<<o}(t,e,n)}function Vf(t,e,n){if(n&A.Optional)return t;js(e,"NodeInjector")}function kf(t,e,n,r){if(n&A.Optional&&void 0===r&&(r=null),0==(n&(A.Self|A.Host))){const o=t[9],s=vn(void 0);try{return o?o.get(e,r,n&A.Optional):nf(e,r,n&A.Optional)}finally{vn(s)}}return Vf(r,e,n)}function Lf(t,e,n,r=A.Default,o){if(null!==t){const s=function(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(vo)?t[vo]:void 0;return"number"==typeof e?e>=0?255&e:gb:e}(n);if("function"==typeof s){if(!Mf(e,t,r))return r&A.Host?Vf(o,n,r):kf(e,n,r,o);try{const i=s(r);if(null!=i||r&A.Optional)return i;js(n)}finally{Sf()}}else if("number"==typeof s){let i=null,a=Cl(t,e),l=-1,u=r&A.Host?e[16][6]:null;for((-1===a||r&A.SkipSelf)&&(l=-1===a?si(t,e):e[a+8],-1!==l&&Hf(r,!1)?(i=e[1],a=vr(l),e=wr(l,e)):a=-1);-1!==a;){const c=e[1];if(jf(s,a,c.data)){const d=mb(a,e,n,i,r,u);if(d!==Bf)return d}l=e[a+8],-1!==l&&Hf(r,e[1].data[a+8]===u)&&jf(s,a,e)?(i=c,a=vr(l),e=wr(l,e)):a=-1}}}return kf(e,n,r,o)}const Bf={};function gb(){return new Mr(be(),C())}function mb(t,e,n,r,o,s){const i=e[1],a=i.data[t+8],c=function(t,e,n,r,o){const s=t.providerIndexes,i=e.data,a=1048575&s,l=t.directiveStart,c=s>>20,f=o?a+c:t.directiveEnd;for(let h=r?a:a+c;h<f;h++){const p=i[h];if(h<l&&n===p||h>=l&&p.type===n)return h}if(o){const h=i[l];if(h&&xt(h)&&h.type===n)return l}return null}(a,i,n,null==r?qs(a)&&yl:r!=i&&0!=(3&a.type),o&A.Host&&s===a);return null!==c?Fo(e,i,c,a):Bf}function Fo(t,e,n,r){let o=t[n];const s=e.data;if(function(t){return t instanceof So}(o)){const i=o;i.resolving&&function(t,e){throw new Un("200",`Circular dependency in DI detected for ${t}`)}($e(s[n]));const a=oi(i.canSeeViewProviders);i.resolving=!0;const l=i.injectImpl?vn(i.injectImpl):null;Mf(t,r,A.Default);try{o=t[n]=i.factory(void 0,s,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(t,e,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:s}=e.type.prototype;if(r){const i=df(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,i)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,o),s&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,s))}(n,s[n],e)}finally{null!==l&&vn(l),oi(a),i.resolving=!1,Sf()}}return o}function jf(t,e,n){return!!(n[e+(t>>5)]&1<<t)}function Hf(t,e){return!(t&A.Self||t&A.Host&&e)}class Mr{constructor(e,n){this._tNode=e,this._lView=n}get(e,n){return Lf(this._tNode,this._lView,e,void 0,n)}}function yt(t){return wn(()=>{const e=t.prototype.constructor,n=e[cn]||Dl(e),r=Object.prototype;let o=Object.getPrototypeOf(t.prototype).constructor;for(;o&&o!==r;){const s=o[cn]||Dl(o);if(s&&s!==n)return s;o=Object.getPrototypeOf(o)}return s=>new s})}function Dl(t){return Zd(t)?()=>{const e=Dl(w(t));return e&&e()}:Qn(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ar="__parameters__";function Kn(t,e,n){return wn(()=>{const r=function(t){return function(...n){if(t){const r=t(...n);for(const o in r)this[o]=r[o]}}}(e);function o(...s){if(this instanceof o)return r.apply(this,s),this;const i=new o(...s);return a.annotation=i,a;function a(l,u,c){const d=l.hasOwnProperty(Ar)?l[Ar]:Object.defineProperty(l,Ar,{value:[]})[Ar];for(;d.length<=c;)d.push(null);return(d[c]=d[c]||[]).push(i),l}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=t,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class W{constructor(e,n){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=G({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yt(t,e){t.forEach(n=>Array.isArray(n)?Yt(n,e):e(n))}function ui(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function Yn(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function lt(t,e,n){let r=Sr(t,e);return r>=0?t[1|r]=n:(r=~r,function(t,e,n,r){let o=t.length;if(o==e)t.push(n,r);else if(1===o)t.push(r,t[0]),t[0]=n;else{for(o--,t.push(t[o-1],t[o]);o>e;)t[o]=t[o-2],o--;t[e]=n,t[e+1]=r}}(t,r,e,n)),r}function wl(t,e){const n=Sr(t,e);if(n>=0)return t[1|n]}function Sr(t,e){return function(t,e,n){let r=0,o=t.length>>n;for(;o!==r;){const s=r+(o-r>>1),i=t[s<<n];if(e===i)return s<<n;i>e?o=s:r=s+1}return~(o<<n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,e,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Vo={},Il="__NG_DI_FLAG__",Nr="ngTempTokenPath",Sb=/\n/gm,Al="__source",Tl=z({provide:String,useValue:z});let ko;function xr(t){const e=ko;return ko=t,e}function xb(t,e=A.Default){if(void 0===ko)throw new Error("inject() must be called from an injection context");return null===ko?nf(t,void 0,e):ko.get(t,e&A.Optional?null:void 0,e)}function R(t,e=A.Default){return(Ya||xb)(w(t),e)}function Jn(t){const e=[];for(let n=0;n<t.length;n++){const r=w(t[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let o,s=A.Default;for(let i=0;i<r.length;i++){const a=r[i],l=Fb(a);"number"==typeof l?-1===l?o=a.token:s|=l:o=a}e.push(R(o,s))}else e.push(R(r))}return e}function Lo(t,e){return t[Il]=e,t.prototype[Il]=e,t}function Fb(t){return t[Il]}function zf(t,e,n,r){const o=t[Nr];throw e[Al]&&o.unshift(e[Al]),t.message=function(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.substr(2):t;let o=j(e);if(Array.isArray(e))o=e.map(j).join(" -> ");else if("object"==typeof e){let s=[];for(let i in e)if(e.hasOwnProperty(i)){let a=e[i];s.push(i+":"+("string"==typeof a?JSON.stringify(a):j(a)))}o=`{${s.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${t.replace(Sb,"\n  ")}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */("\n"+t.message,o,n,r),t.ngTokenPath=o,t[Nr]=null,t}const Bo=Lo(Kn("Inject",t=>({token:t})),-1),Jt=Lo(Kn("Optional"),8),Zn=Lo(Kn("SkipSelf"),4);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const hh="__ngContext__";function Re(t,e){t[hh]=e}function kl(t){const e=function(t){return t[hh]||null}(t);return e?Array.isArray(e)?e:e.lView:null}function mi(t){return t.ngOriginalError}function Mv(t,...e){t.error(...e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class er{constructor(){this._console=console}handleError(e){const n=this._findOriginalError(e),r=this._findContext(e),o=function(t){return t&&t.ngErrorLogger||Mv}(e);o(this._console,"ERROR",e),n&&o(this._console,"ORIGINAL ERROR",n),r&&o(this._console,"ERROR CONTEXT",r)}_findContext(e){return e?function(t){return t.ngDebugContext}(e)||this._findContext(mi(e)):null}_findOriginalError(e){let n=e&&mi(e);for(;n&&mi(n);)n=mi(n);return n||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const bh=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(K))();function en(t){return t instanceof Function?t():t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var ct=(()=>((ct=ct||{})[ct.Important=1]="Important",ct[ct.DashCase=2]="DashCase",ct))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jl(t,e){return undefined(t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Wo(t){const e=t[3];return Nt(e)?e[3]:e}function Hl(t){return Ah(t[13])}function $l(t){return Ah(t[4])}function Ah(t){for(;null!==t&&!Nt(t);)t=t[4];return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Or(t,e,n,r,o){if(null!=r){let s,i=!1;Nt(r)?s=r:zt(r)&&(i=!0,r=r[0]);const a=me(r);0===t&&null!==n?null==o?Ph(e,n,a):tr(e,n,a,o||null,!0):1===t&&null!==n?tr(e,n,a,o||null,!0):2===t?function(t,e,n){const r=_i(t,e);r&&function(t,e,n,r){ce(t)?t.removeChild(e,n,r):e.removeChild(n)}(t,r,e,n)}(e,a,i):3===t&&e.destroyNode(a),null!=s&&function(t,e,n,r,o){const s=n[7];s!==me(n)&&Or(e,t,r,s,o);for(let a=10;a<n.length;a++){const l=n[a];qo(l[1],l,t,e,r,s)}}(e,t,s,n,o)}}function Gl(t,e,n){return ce(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function Sh(t,e){const n=t[9],r=n.indexOf(e),o=e[3];1024&e[2]&&(e[2]&=-1025,ll(o,-1)),n.splice(r,1)}function Wl(t,e){if(t.length<=10)return;const n=10+e,r=t[n];if(r){const o=r[17];null!==o&&o!==t&&Sh(o,r),e>0&&(t[n-1][4]=r[4]);const s=Yn(t,10+e);!function(t,e){qo(t,e,e[L],2,null,null),e[0]=null,e[6]=null}(r[1],r);const i=s[19];null!==i&&i.detachView(s[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function Nh(t,e){if(!(256&e[2])){const n=e[L];ce(n)&&n.destroyNode&&qo(t,e,n,3,null,null),function(t){let e=t[13];if(!e)return ql(t[1],t);for(;e;){let n=null;if(zt(e))n=e[13];else{const r=e[10];r&&(n=r)}if(!n){for(;e&&!e[4]&&e!==t;)zt(e)&&ql(e[1],e),e=e[3];null===e&&(e=t),zt(e)&&ql(e[1],e),n=e&&e[4]}e=n}}(e)}}function ql(t,e){if(!(256&e[2])){e[2]&=-129,e[2]|=256,function(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const o=e[n[r]];if(!(o instanceof So)){const s=n[r+1];if(Array.isArray(s))for(let i=0;i<s.length;i+=2){const a=o[s[i]],l=s[i+1];try{l.call(a)}finally{}}else try{s.call(o)}finally{}}}}(t,e),function(t,e){const n=t.cleanup,r=e[7];let o=-1;if(null!==n)for(let s=0;s<n.length-1;s+=2)if("string"==typeof n[s]){const i=n[s+1],a="function"==typeof i?i(e):me(e[i]),l=r[o=n[s+2]],u=n[s+3];"boolean"==typeof u?a.removeEventListener(n[s],l,u):u>=0?r[o=u]():r[o=-u].unsubscribe(),s+=2}else{const i=r[o=n[s+1]];n[s].call(i)}if(null!==r){for(let s=o+1;s<r.length;s++)r[s]();e[7]=null}}(t,e),1===e[1].type&&ce(e[L])&&e[L].destroy();const n=e[17];if(null!==n&&Nt(e[3])){n!==e[3]&&Sh(n,e);const r=e[19];null!==r&&r.detachView(t)}}}function xh(t,e,n){return function(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const o=t.data[r.directiveStart].encapsulation;if(o===Ee.None||o===Ee.Emulated)return null}return mt(r,n)}(t,e.parent,n)}function tr(t,e,n,r,o){ce(t)?t.insertBefore(e,n,r,o):e.insertBefore(n,r,o)}function Ph(t,e,n){ce(t)?t.appendChild(e,n):e.appendChild(n)}function Rh(t,e,n,r,o){null!==r?tr(t,e,n,r,o):Ph(t,e,n)}function _i(t,e){return ce(t)?t.parentNode(e):e.parentNode}let kh=function(t,e,n){return 40&t.type?mt(t,n):null};function Ci(t,e,n,r){const o=xh(t,r,e),s=e[L],a=function(t,e,n){return kh(t,e,n)}(r.parent||e[6],r,e);if(null!=o)if(Array.isArray(n))for(let l=0;l<n.length;l++)Rh(s,o,n[l],a,!1);else Rh(s,o,n,a,!1)}function Di(t,e){if(null!==e){const n=e.type;if(3&n)return mt(e,t);if(4&n)return Ql(-1,t[e.index]);if(8&n){const r=e.child;if(null!==r)return Di(t,r);{const o=t[e.index];return Nt(o)?Ql(-1,o):me(o)}}if(32&n)return jl(e,t)()||me(t[e.index]);{const r=Bh(t,e);return null!==r?Array.isArray(r)?r[0]:Di(Wo(t[16]),r):Di(t,e.next)}}return null}function Bh(t,e){return null!==e?t[16][6].projection[e.projection]:null}function Ql(t,e){const n=10+t+1;if(n<e.length){const r=e[n],o=r[1].firstChild;if(null!==o)return Di(r,o)}return e[7]}function Kl(t,e,n,r,o,s,i){for(;null!=n;){const a=r[n.index],l=n.type;if(i&&0===e&&(a&&Re(me(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)Kl(t,e,n.child,r,o,s,!1),Or(e,t,o,a,s);else if(32&l){const u=jl(n,r);let c;for(;c=u();)Or(e,t,o,c,s);Or(e,t,o,a,s)}else 16&l?Hh(t,e,r,n,o,s):Or(e,t,o,a,s);n=i?n.projectionNext:n.next}}function qo(t,e,n,r,o,s){Kl(n,r,t.firstChild,e,o,s,!1)}function Hh(t,e,n,r,o,s){const i=n[16],l=i[6].projection[r.projection];if(Array.isArray(l))for(let u=0;u<l.length;u++)Or(e,t,o,l[u],s);else Kl(t,e,l,i[3],o,s,!0)}function $h(t,e,n){ce(t)?t.setAttribute(e,"style",n):e.style.cssText=n}function Yl(t,e,n){ce(t)?""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n):e.className=n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Uh(t,e,n){let r=t.length;for(;;){const o=t.indexOf(e,n);if(-1===o)return o;if(0===o||t.charCodeAt(o-1)<=32){const s=e.length;if(o+s===r||t.charCodeAt(o+s)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Gh="ng-template";function Jv(t,e,n){let r=0;for(;r<t.length;){let o=t[r++];if(n&&"class"===o){if(o=t[r],-1!==Uh(o.toLowerCase(),e,0))return!0}else if(1===o){for(;r<t.length&&"string"==typeof(o=t[r++]);)if(o.toLowerCase()===e)return!0;return!1}}return!1}function Wh(t){return 4===t.type&&t.value!==Gh}function Zv(t,e,n){return e===(4!==t.type||n?t.value:Gh)}function Xv(t,e,n){let r=4;const o=t.attrs||[],s=function(t){for(let e=0;e<t.length;e++)if(xf(t[e]))return e;return t.length}(o);let i=!1;for(let a=0;a<e.length;a++){const l=e[a];if("number"!=typeof l){if(!i)if(4&r){if(r=2|1&r,""!==l&&!Zv(t,l,n)||""===l&&1===e.length){if(Ft(r))return!1;i=!0}}else{const u=8&r?l:e[++a];if(8&r&&null!==t.attrs){if(!Jv(t.attrs,u,n)){if(Ft(r))return!1;i=!0}continue}const d=ew(8&r?"class":l,o,Wh(t),n);if(-1===d){if(Ft(r))return!1;i=!0;continue}if(""!==u){let f;f=d>s?"":o[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==Uh(h,u,0)||2&r&&u!==f){if(Ft(r))return!1;i=!0}}}}else{if(!i&&!Ft(r)&&!Ft(l))return!1;if(i&&Ft(l))continue;i=!1,r=l|1&r}}return Ft(r)||i}function Ft(t){return 0==(1&t)}function ew(t,e,n,r){if(null===e)return-1;let o=0;if(r||!n){let s=!1;for(;o<e.length;){const i=e[o];if(i===t)return o;if(3===i||6===i)s=!0;else{if(1===i||2===i){let a=e[++o];for(;"string"==typeof a;)a=e[++o];continue}if(4===i)break;if(0===i){o+=4;continue}}o+=s?1:2}return-1}return function(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function qh(t,e,n=!1){for(let r=0;r<e.length;r++)if(Xv(t,e[r],n))return!0;return!1}function zh(t,e){return t?":not("+e.trim()+")":e}function sw(t){let e=t[0],n=1,r=2,o="",s=!1;for(;n<t.length;){let i=t[n];if("string"==typeof i)if(2&r){const a=t[++n];o+="["+i+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+i:4&r&&(o+=" "+i);else""!==o&&!Ft(i)&&(e+=zh(s,o),o=""),r=i,s=s||!Ft(r);n++}return""!==o&&(e+=zh(s,o)),e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const O={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ae(t){Qh(q(),C(),We()+t,Ks())}function Qh(t,e,n,r){if(!r)if(3==(3&e[2])){const s=t.preOrderCheckHooks;null!==s&&ei(e,s,n)}else{const s=t.preOrderHooks;null!==s&&ti(e,s,0,n)}An(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ei(t,e){return t<<17|e<<2}function Pt(t){return t>>17&32767}function Jl(t){return 2|t}function fn(t){return(131068&t)>>2}function Zl(t,e){return-131069&t|e<<2}function Xl(t){return 1|t}function op(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],s=n[r+1];if(-1!==s){const i=t.data[s];hl(o),i.contentQueries(2,e[s],s)}}}function zo(t,e,n,r,o,s,i,a,l,u){const c=e.blueprint.slice();return c[0]=o,c[2]=140|r,_f(c),c[3]=c[15]=t,c[8]=n,c[10]=i||t&&t[10],c[L]=a||t&&t[L],c[12]=l||t&&t[12]||null,c[9]=u||t&&t[9]||null,c[6]=s,c[16]=2==e.type?t[16]:c,c}function Vr(t,e,n,r,o){let s=t.data[e];if(null===s)s=function(t,e,n,r,o){const s=Ef(),i=ul(),l=t.data[e]=function(t,e,n,r,o,s){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:e?e.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,i?s:s&&s.parent,n,e,r,o);return null===t.firstChild&&(t.firstChild=l),null!==s&&(i?null==s.child&&null!==l.parent&&(s.child=l):null===s.next&&(s.next=l)),l}(t,e,n,r,o),F.lFrame.inI18n&&(s.flags|=64);else if(64&s.type){s.type=n,s.value=r,s.attrs=o;const i=function(){const t=F.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}();s.injectorIndex=null===i?-1:i.injectorIndex}return Qt(s,!0),s}function kr(t,e,n,r){if(0===n)return-1;const o=e.length;for(let s=0;s<n;s++)e.push(r),t.blueprint.push(r),t.data.push(null);return o}function Qo(t,e,n){Js(e);try{const r=t.viewQuery;null!==r&&gu(1,r,n);const o=t.template;null!==o&&sp(t,e,o,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&op(t,e),t.staticViewQueries&&gu(2,t.viewQuery,n);const s=t.components;null!==s&&function(t,e){for(let n=0;n<e.length;n++)Lw(t,e[n])}(e,s)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{e[2]&=-5,Zs()}}function Lr(t,e,n,r){const o=e[2];if(256==(256&o))return;Js(e);const s=Ks();try{_f(e),function(t){F.lFrame.bindingIndex=t}(t.bindingStartIndex),null!==n&&sp(t,e,n,2,r);const i=3==(3&o);if(!s)if(i){const u=t.preOrderCheckHooks;null!==u&&ei(e,u,null)}else{const u=t.preOrderHooks;null!==u&&ti(e,u,0,null),pl(e,0)}if(function(t){for(let e=Hl(t);null!==e;e=$l(e)){if(!e[2])continue;const n=e[9];for(let r=0;r<n.length;r++){const o=n[r],s=o[3];0==(1024&o[2])&&ll(s,1),o[2]|=1024}}}(e),function(t){for(let e=Hl(t);null!==e;e=$l(e))for(let n=10;n<e.length;n++){const r=e[n],o=r[1];al(r)&&Lr(o,r,o.template,r[8])}}(e),null!==t.contentQueries&&op(t,e),!s)if(i){const u=t.contentCheckHooks;null!==u&&ei(e,u)}else{const u=t.contentHooks;null!==u&&ti(e,u,1),pl(e,1)}!function(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)An(~o);else{const s=o,i=n[++r],a=n[++r];KE(i,s),a(2,e[s])}}}finally{An(-1)}}(t,e);const a=t.components;null!==a&&function(t,e){for(let n=0;n<e.length;n++)kw(t,e[n])}(e,a);const l=t.viewQuery;if(null!==l&&gu(2,l,r),!s)if(i){const u=t.viewCheckHooks;null!==u&&ei(e,u)}else{const u=t.viewHooks;null!==u&&ti(e,u,2),pl(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),s||(e[2]&=-73),1024&e[2]&&(e[2]&=-1025,ll(e[3],-1))}finally{Zs()}}function _w(t,e,n,r){const o=e[10],s=!Ks(),i=function(t){return 4==(4&t[2])}(e);try{s&&!i&&o.begin&&o.begin(),i&&Qo(t,e,r),Lr(t,e,n,r)}finally{s&&!i&&o.end&&o.end()}}function sp(t,e,n,r,o){const s=We(),i=2&r;try{An(-1),i&&e.length>20&&Qh(t,e,20,Ks()),n(r,o)}finally{An(s)}}function ip(t,e,n){if(tl(e)){const o=e.directiveEnd;for(let s=e.directiveStart;s<o;s++){const i=t.data[s];i.contentQueries&&i.contentQueries(1,n[s],s)}}}function au(t,e,n){!Cf()||(function(t,e,n,r){const o=n.directiveStart,s=n.directiveEnd;t.firstCreatePass||xo(n,e),Re(r,e);const i=n.initialInputs;for(let a=o;a<s;a++){const l=t.data[a],u=xt(l);u&&Fw(e,n,l);const c=Fo(e,t,a,n);Re(c,e),null!==i&&Pw(0,a-o,c,l,0,i),u&&(at(n.index,e)[8]=c)}}(t,e,n,mt(n,e)),128==(128&n.flags)&&function(t,e,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,a=F.lFrame.currentDirectiveIndex;try{An(i);for(let l=r;l<o;l++){const u=t.data[l],c=e[l];dl(l),(null!==u.hostBindings||0!==u.hostVars||null!==u.hostAttrs)&&pp(u,c)}}finally{An(-1),dl(a)}}(t,e,n))}function lu(t,e,n=mt){const r=e.localNames;if(null!==r){let o=e.index+1;for(let s=0;s<r.length;s+=2){const i=r[s+1],a=-1===i?n(e,t):t[i];t[o++]=a}}}function ap(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=wi(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function wi(t,e,n,r,o,s,i,a,l,u){const c=20+r,d=c+o,f=function(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:O);return n}(c,d),h="function"==typeof u?u():u;return f[1]={type:t,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,c),bindingStartIndex:c,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof s?s():s,pipeRegistry:"function"==typeof i?i():i,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1}}function dp(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){const o=t[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(e,o):n[r]=[e,o]}return n}function uu(t,e,n,r){let o=!1;if(Cf()){const s=function(t,e,n){const r=t.directiveRegistry;let o=null;if(r)for(let s=0;s<r.length;s++){const i=r[s];qh(n,i.selectors,!1)&&(o||(o=[]),ii(xo(n,e),t,i.type),xt(i)?(gp(t,n),o.unshift(i)):o.push(i))}return o}(t,e,n),i=null===r?null:{"":-1};if(null!==s){o=!0,mp(n,t.data.length,s.length);for(let c=0;c<s.length;c++){const d=s[c];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,u=kr(t,e,s.length,null);for(let c=0;c<s.length;c++){const d=s[c];n.mergedAttrs=ri(n.mergedAttrs,d.hostAttrs),yp(t,n,e,u,d),xw(u,d,i),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),a=!0),!l&&(f.ngOnChanges||f.ngDoCheck)&&((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),l=!0),u++}!function(t,e){const r=e.directiveEnd,o=t.data,s=e.attrs,i=[];let a=null,l=null;for(let u=e.directiveStart;u<r;u++){const c=o[u],d=c.inputs,f=null===s||Wh(e)?null:Rw(d,s);i.push(f),a=dp(d,u,a),l=dp(c.outputs,u,l)}null!==a&&(a.hasOwnProperty("class")&&(e.flags|=16),a.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=i,e.inputs=a,e.outputs=l}(t,n)}i&&function(t,e,n){if(e){const r=t.localNames=[];for(let o=0;o<e.length;o+=2){const s=n[e[o+1]];if(null==s)throw new Un("301",`Export of name '${e[o+1]}' not found!`);r.push(e[o],s)}}}(n,r,i)}return n.mergedAttrs=ri(n.mergedAttrs,n.attrs),o}function hp(t,e,n,r,o,s){const i=s.hostBindings;if(i){let a=t.hostBindingOpCodes;null===a&&(a=t.hostBindingOpCodes=[]);const l=~e.index;(function(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(a)!=l&&a.push(l),a.push(r,o,i)}}function pp(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function gp(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function xw(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;xt(e)&&(n[""]=t)}}function mp(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function yp(t,e,n,r,o){t.data[r]=o;const s=o.factory||(o.factory=Qn(o.type)),i=new So(s,xt(o),null);t.blueprint[r]=i,n[r]=i,hp(t,e,0,r,kr(t,n,o.hostVars,O),o)}function Fw(t,e,n){const r=mt(e,t),o=ap(n),s=t[10],i=Mi(t,zo(t,o,null,n.onPush?64:16,r,e,s,s.createRenderer(r,n),null,null));t[e.index]=i}function Pw(t,e,n,r,o,s){const i=s[e];if(null!==i){const a=r.setInput;for(let l=0;l<i.length;){const u=i[l++],c=i[l++],d=i[l++];null!==a?r.setInput(n,d,u,c):n[c]=d}}}function Rw(t,e){let n=null,r=0;for(;r<e.length;){const o=e[r];if(0!==o)if(5!==o){if("number"==typeof o)break;t.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,t[o],e[r+1])),r+=2}else r+=2;else r+=4}return n}function _p(t,e,n,r){return new Array(t,!0,!1,e,null,0,r,n,null,null)}function kw(t,e){const n=at(e,t);if(al(n)){const r=n[1];80&n[2]?Lr(r,n,r.template,n[8]):n[5]>0&&du(n)}}function du(t){for(let r=Hl(t);null!==r;r=$l(r))for(let o=10;o<r.length;o++){const s=r[o];if(1024&s[2]){const i=s[1];Lr(i,s,i.template,s[8])}else s[5]>0&&du(s)}const n=t[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=at(n[r],t);al(o)&&o[5]>0&&du(o)}}function Lw(t,e){const n=at(e,t),r=n[1];(function(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])})(r,n),Qo(r,n,n[8])}function Mi(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function fu(t){for(;t;){t[2]|=64;const e=Wo(t);if(NE(t)&&!e)return t;t=e}return null}function pu(t,e,n){const r=e[10];r.begin&&r.begin();try{Lr(t,e,t.template,n)}catch(o){throw vp(e,o),o}finally{r.end&&r.end()}}function Cp(t){!function(t){for(let e=0;e<t.components.length;e++){const n=t.components[e],r=kl(n),o=r[1];_w(o,r,o.template,n)}}(t[8])}function gu(t,e,n){hl(0),e(t,n)}const Uw=(()=>Promise.resolve(null))();function Dp(t){return t[7]||(t[7]=[])}function Ep(t){return t.cleanup||(t.cleanup=[])}function vp(t,e){const n=t[9],r=n?n.get(er,null):null;r&&r.handleError(e)}function wp(t,e,n,r,o){for(let s=0;s<n.length;){const i=n[s++],a=n[s++],l=e[i],u=t.data[i];null!==u.setInput?u.setInput(l,o,r,a):l[a]=o}}function pn(t,e,n){const r=Qs(e,t);!function(t,e,n){ce(t)?t.setValue(e,n):e.textContent=n}(t[L],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ii(t,e,n){let r=n?t.styles:null,o=n?t.classes:null,s=0;if(null!==e)for(let i=0;i<e.length;i++){const a=e[i];"number"==typeof a?s=a:1==s?o=za(o,a):2==s&&(r=za(r,a+": "+e[++i]+";"))}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=o:t.classesWithoutHost=o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Br=new W("INJECTOR",-1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Mp{get(e,n=Vo){if(n===Vo){const r=new Error(`NullInjectorError: No provider for ${j(e)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ko=new W("Set Injector scope."),Yo={},qw={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let mu;function Ip(){return void 0===mu&&(mu=new Mp),mu}function Ap(t,e=null,n=null,r){return new Qw(t,n,e||Ip(),r)}class Qw{constructor(e,n,r,o=null){this.parent=r,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const s=[];n&&Yt(n,a=>this.processProvider(a,e,n)),Yt([e],a=>this.processInjectorType(a,[],s)),this.records.set(Br,jr(void 0,this));const i=this.records.get(Ko);this.scope=null!=i?i.value:null,this.source=o||("object"==typeof e?null:j(e))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(e=>e.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(e,n=Vo,r=A.Default){this.assertNotDestroyed();const o=xr(this),s=vn(void 0);try{if(!(r&A.SkipSelf)){let a=this.records.get(e);if(void 0===a){const l=function(t){return"function"==typeof t||"object"==typeof t&&t instanceof W}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)&&un(e);a=l&&this.injectableDefInScope(l)?jr(yu(e),Yo):null,this.records.set(e,a)}if(null!=a)return this.hydrate(e,a)}return(r&A.Self?Ip():this.parent).get(e,n=r&A.Optional&&n===Vo?null:n)}catch(i){if("NullInjectorError"===i.name){if((i[Nr]=i[Nr]||[]).unshift(j(e)),o)throw i;return zf(i,e,"R3InjectorError",this.source)}throw i}finally{vn(s),xr(o)}}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(e=>this.get(e))}toString(){const e=[];return this.records.forEach((r,o)=>e.push(j(o))),`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(e,n,r){if(!(e=w(e)))return!1;let o=ef(e);const s=null==o&&e.ngModule||void 0,i=void 0===s?e:s,a=-1!==r.indexOf(i);if(void 0!==s&&(o=ef(s)),null==o)return!1;if(null!=o.imports&&!a){let c;r.push(i);try{Yt(o.imports,d=>{this.processInjectorType(d,n,r)&&(void 0===c&&(c=[]),c.push(d))})}finally{}if(void 0!==c)for(let d=0;d<c.length;d++){const{ngModule:f,providers:h}=c[d];Yt(h,p=>this.processProvider(p,f,h||J))}}this.injectorDefTypes.add(i);const l=Qn(i)||(()=>new i);this.records.set(i,jr(l,Yo));const u=o.providers;if(null!=u&&!a){const c=e;Yt(u,d=>this.processProvider(d,c,u))}return void 0!==s&&void 0!==e.providers}processProvider(e,n,r){let o=Hr(e=w(e))?e:w(e&&e.provide);const s=function(t,e,n){return Sp(t)?jr(void 0,t.useValue):jr(Tp(t),Yo)}(e);if(Hr(e)||!0!==e.multi)this.records.get(o);else{let i=this.records.get(o);i||(i=jr(void 0,Yo,!0),i.factory=()=>Jn(i.multi),this.records.set(o,i)),o=e,i.multi.push(e)}this.records.set(o,s)}hydrate(e,n){return n.value===Yo&&(n.value=qw,n.value=n.factory()),"object"==typeof n.value&&n.value&&function(t){return null!==t&&"object"==typeof t&&"function"==typeof t.ngOnDestroy}(n.value)&&this.onDestroy.add(n.value),n.value}injectableDefInScope(e){if(!e.providedIn)return!1;const n=w(e.providedIn);return"string"==typeof n?"any"===n||n===this.scope:this.injectorDefTypes.has(n)}}function yu(t){const e=un(t),n=null!==e?e.factory:Qn(t);if(null!==n)return n;if(t instanceof W)throw new Error(`Token ${j(t)} is missing a \u0275prov definition.`);if(t instanceof Function)return function(t){const e=t.length;if(e>0){const r=function(t,e){const n=[];for(let r=0;r<t;r++)n.push(e);return n}(e,"?");throw new Error(`Can't resolve all parameters for ${j(t)}: (${r.join(", ")}).`)}const n=function(t){const e=t&&(t[Hs]||t[tf]);if(e){const n=function(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new Error("unreachable")}function Tp(t,e,n){let r;if(Hr(t)){const o=w(t);return Qn(o)||yu(o)}if(Sp(t))r=()=>w(t.useValue);else if(function(t){return!(!t||!t.useFactory)}(t))r=()=>t.useFactory(...Jn(t.deps||[]));else if(function(t){return!(!t||!t.useExisting)}(t))r=()=>R(w(t.useExisting));else{const o=w(t&&(t.useClass||t.provide));if(!function(t){return!!t.deps}(t))return Qn(o)||yu(o);r=()=>new o(...Jn(t.deps))}return r}function jr(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function Sp(t){return null!==t&&"object"==typeof t&&Tl in t}function Hr(t){return"function"==typeof t}const Np=function(t,e,n){return function(t,e=null,n=null,r){const o=Ap(t,e,n,r);return o._resolveInjectorDefTypes(),o}({name:n},e,t,n)};class Q{static create(e,n){return Array.isArray(e)?Np(e,n,""):Np(e.providers,e.parent,e.name||"")}}function g0(t,e){Xs(kl(t)[1],be())}function oe(t){let e=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(t){return Object.getPrototypeOf(t.prototype).constructor}(t.type),n=!0;const r=[t];for(;e;){let o;if(xt(t))o=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new Error("Directives cannot inherit Components");o=e.\u0275dir}if(o){if(n){r.push(o);const i=t;i.inputs=vu(t.inputs),i.declaredInputs=vu(t.declaredInputs),i.outputs=vu(t.outputs);const a=o.hostBindings;a&&C0(t,a);const l=o.viewQuery,u=o.contentQueries;if(l&&y0(t,l),u&&_0(t,u),qa(t.inputs,o.inputs),qa(t.declaredInputs,o.declaredInputs),qa(t.outputs,o.outputs),xt(o)&&o.data.animation){const c=t.data;c.animation=(c.animation||[]).concat(o.data.animation)}}const s=o.features;if(s)for(let i=0;i<s.length;i++){const a=s[i];a&&a.ngInherit&&a(t),a===oe&&(n=!1)}}e=Object.getPrototypeOf(e)}!function(t){let e=0,n=null;for(let r=t.length-1;r>=0;r--){const o=t[r];o.hostVars=e+=o.hostVars,o.hostAttrs=ri(o.hostAttrs,n=ri(n,o.hostAttrs))}}(r)}function vu(t){return t===mr?{}:t===J?[]:t}function y0(t,e){const n=t.viewQuery;t.viewQuery=n?(r,o)=>{e(r,o),n(r,o)}:e}function _0(t,e){const n=t.contentQueries;t.contentQueries=n?(r,o,s)=>{e(r,o,s),n(r,o,s)}:e}function C0(t,e){const n=t.hostBindings;t.hostBindings=n?(r,o)=>{e(r,o),n(r,o)}:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Q.THROW_IF_NOT_FOUND=Vo,Q.NULL=new Mp,Q.\u0275prov=G({token:Q,providedIn:"any",factory:()=>R(Br)}),Q.__NG_ELEMENT_ID__=-1;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ai=null;function $r(){if(!Ai){const t=K.Symbol;if(t&&t.iterator)Ai=t.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<e.length;++n){const r=e[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Ai=r)}}}return Ai}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zo(t){return!!wu(t)&&(Array.isArray(t)||!(t instanceof Map)&&$r()in t)}function wu(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Oe(t,e,n){return!Object.is(t[e],n)&&(t[e]=n,!0)}function ze(t,e,n,r,o,s,i,a){const l=C(),u=q(),c=t+20,d=u.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(t,e,n,r,o,s,i,a,l){const u=e.consts,c=Vr(e,t,4,i||null,In(u,a));uu(e,n,c,In(u,l)),Xs(e,c);const d=c.tViews=wi(2,c,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,u);return null!==e.queries&&(e.queries.template(e,c),d.queries=e.queries.embeddedTView(c)),c}(c,u,l,e,n,r,o,s,i):u.data[c];Qt(d,!1);const f=l[L].createComment("");Ci(u,l,f,d),Re(f,l),Mi(l,l[c]=_p(f,l,f,d)),zs(d)&&au(u,l,d),null!=i&&lu(l,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Si(t){return function(t,e){return t[e]}(F.lFrame.contextLView,20+t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function D(t,e=A.Default){const n=C();return null===n?R(t,e):Lf(be(),n,w(t),e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ye(t,e,n){const r=C();return Oe(r,br(),e)&&function(t,e,n,r,o,s,i,a){const l=mt(e,n);let c,u=e.inputs;!a&&null!=u&&(c=u[r])?(wp(t,n,c,r,o),qs(e)&&function(t,e){const n=at(e,t);16&n[2]||(n[2]|=64)}(n,e.index)):3&e.type&&(r=function(t){return"class"===t?"className":"for"===t?"htmlFor":"formaction"===t?"formAction":"innerHtml"===t?"innerHTML":"readonly"===t?"readOnly":"tabindex"===t?"tabIndex":t}(r),o=null!=i?i(o,e.value||"",r):o,ce(s)?s.setProperty(l,r,o):ml(r)||(l.setProperty?l.setProperty(r,o):l[r]=o))}(q(),function(){const t=F.lFrame;return il(t.tView,t.selectedIndex)}(),r,t,e,r[L],n,!1),ye}function Su(t,e,n,r,o){const i=o?"class":"style";wp(t,n,e.inputs[i],i,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function S(t,e,n,r){const o=C(),s=q(),i=20+t,a=o[L],l=o[i]=Gl(a,e,F.lFrame.currentNamespace),u=s.firstCreatePass?function(t,e,n,r,o,s,i){const a=e.consts,u=Vr(e,t,2,o,In(a,s));return uu(e,n,u,In(a,i)),null!==u.attrs&&Ii(u,u.attrs,!1),null!==u.mergedAttrs&&Ii(u,u.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,u),u}(i,s,o,0,e,n,r):s.data[i];Qt(u,!0);const c=u.mergedAttrs;null!==c&&ni(a,l,c);const d=u.classes;null!==d&&Yl(a,l,d);const f=u.styles;null!==f&&$h(a,l,f),64!=(64&u.flags)&&Ci(s,o,l,u),0===F.lFrame.elementDepthCount&&Re(l,o),F.lFrame.elementDepthCount++,zs(u)&&(au(s,o,u),ip(s,u,o)),null!==r&&lu(o,u)}function N(){let t=be();ul()?cl():(t=t.parent,Qt(t,!1));const e=t;F.lFrame.elementDepthCount--;const n=q();n.firstCreatePass&&(Xs(n,t),tl(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function(t){return 0!=(16&t.flags)}(e)&&Su(n,e,C(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function(t){return 0!=(32&t.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)&&Su(n,e,C(),e.stylesWithoutHost,!1)}function Nu(t,e,n,r){S(t,e,n,r),N()}function rr(t,e,n){const r=C(),o=q(),s=t+20,i=o.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(t,e,n,r,o){const s=e.consts,i=In(s,r),a=Vr(e,t,8,"ng-container",i);return null!==i&&Ii(a,i,!0),uu(e,n,a,In(s,o)),null!==e.queries&&e.queries.elementStart(e,a),a}(s,o,r,e,n):o.data[s];Qt(i,!0);const a=r[s]=r[L].createComment("");Ci(o,r,a,i),Re(a,r),zs(i)&&(au(o,r,i),ip(o,i,r)),null!=n&&lu(r,i)}function or(){let t=be();const e=q();ul()?cl():(t=t.parent,Qt(t,!1)),e.firstCreatePass&&(Xs(e,t),tl(t)&&e.queries.elementEnd(t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function xi(t){return!!t&&"function"==typeof t.then}const xu=function(t){return!!t&&"function"==typeof t.subscribe};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ve(t,e,n,r){const o=C(),s=q(),i=be();return function(t,e,n,r,o,s,i,a){const l=zs(r),c=t.firstCreatePass&&Ep(t),d=e[8],f=Dp(e);let h=!0;if(3&r.type||a){const g=mt(r,e),_=a?a(g):g,y=f.length,v=a?M=>a(me(M[r.index])):r.index;if(ce(n)){let M=null;if(!a&&l&&(M=function(t,e,n,r){const o=t.cleanup;if(null!=o)for(let s=0;s<o.length-1;s+=2){const i=o[s];if(i===n&&o[s+1]===r){const a=e[7],l=o[s+2];return a.length>l?a[l]:null}"string"==typeof i&&(s+=2)}return null}(t,e,o,r.index)),null!==M)(M.__ngLastListenerFn__||M).__ngNextListenerFn__=s,M.__ngLastListenerFn__=s,h=!1;else{s=Fu(r,e,d,s,!1);const H=n.listen(_,o,s);f.push(s,H),c&&c.push(o,v,y,y+1)}}else s=Fu(r,e,d,s,!0),_.addEventListener(o,s,i),f.push(s),c&&c.push(o,v,y,i)}else s=Fu(r,e,d,s,!1);const p=r.outputs;let m;if(h&&null!==p&&(m=p[o])){const g=m.length;if(g)for(let _=0;_<g;_+=2){const Ie=e[m[_]][m[_+1]].subscribe(s),It=f.length;f.push(s,Ie),c&&c.push(o,r.index,It,-(It+1))}}}(s,o,o[L],i,t,e,!!n,r),Ve}function _g(t,e,n,r){try{return!1!==n(r)}catch(o){return vp(t,o),!1}}function Fu(t,e,n,r,o){return function s(i){if(i===Function)return r;const a=2&t.flags?at(t.index,e):e;0==(32&e[2])&&fu(a);let l=_g(e,0,r,i),u=s.__ngNextListenerFn__;for(;u;)l=_g(e,0,u,i)&&l,u=u.__ngNextListenerFn__;return o&&!1===l&&(i.preventDefault(),i.returnValue=!1),l}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Fn(t=1){return function(t){return(F.lFrame.contextLView=function(t,e){for(;t>0;)e=e[15],t--;return e}(t,F.lFrame.contextLView))[8]}(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Tg(t,e,n,r,o){const s=t[n+1],i=null===e;let a=r?Pt(s):fn(s),l=!1;for(;0!==a&&(!1===l||i);){const c=t[a+1];sM(t[a],e)&&(l=!0,t[a+1]=r?Xl(c):Jl(c)),a=r?Pt(c):fn(c)}l&&(t[n+1]=r?Jl(s):Xl(s))}function sM(t,e){return null===t||null==e||(Array.isArray(t)?t[1]:t)===e||!(!Array.isArray(t)||"string"!=typeof e)&&Sr(t,e)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Fi(t,e){return function(t,e,n,r){const o=C(),s=q(),i=function(t){const e=F.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}(2);s.firstUpdatePass&&function(t,e,n,r){const o=t.data;if(null===o[n+1]){const s=o[We()],i=function(t,e){return e>=t.expandoStartIndex}(t,n);(function(t,e){return 0!=(t.flags&(e?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(s,r)&&null===e&&!i&&(e=!1),e=function(t,e,n,r){const o=function(t){const e=F.lFrame.currentDirectiveIndex;return-1===e?null:t[e]}(t);let s=r?e.residualClasses:e.residualStyles;if(null===o)0===(r?e.classBindings:e.styleBindings)&&(n=es(n=Ru(null,t,e,n,r),e.attrs,r),s=null);else{const i=e.directiveStylingLast;if(-1===i||t[i]!==o)if(n=Ru(o,t,e,n,r),null===s){let l=function(t,e,n){const r=n?e.classBindings:e.styleBindings;if(0!==fn(r))return t[Pt(r)]}(t,e,r);void 0!==l&&Array.isArray(l)&&(l=Ru(null,t,e,l[1],r),l=es(l,e.attrs,r),function(t,e,n,r){t[Pt(n?e.classBindings:e.styleBindings)]=r}(t,e,r,l))}else s=function(t,e,n){let r;const o=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<o;s++)r=es(r,t[s].hostAttrs,n);return es(r,e.attrs,n)}(t,e,r)}return void 0!==s&&(r?e.residualClasses=s:e.residualStyles=s),n}(o,s,e,r),function(t,e,n,r,o,s){let i=s?e.classBindings:e.styleBindings,a=Pt(i),l=fn(i);t[r]=n;let c,u=!1;if(Array.isArray(n)){const d=n;c=d[1],(null===c||Sr(d,c)>0)&&(u=!0)}else c=n;if(o)if(0!==l){const f=Pt(t[a+1]);t[r+1]=Ei(f,a),0!==f&&(t[f+1]=Zl(t[f+1],r)),t[a+1]=function(t,e){return 131071&t|e<<17}(t[a+1],r)}else t[r+1]=Ei(a,0),0!==a&&(t[a+1]=Zl(t[a+1],r)),a=r;else t[r+1]=Ei(l,0),0===a?a=r:t[l+1]=Zl(t[l+1],r),l=r;u&&(t[r+1]=Jl(t[r+1])),Tg(t,c,r,!0),Tg(t,c,r,!1),function(t,e,n,r,o){const s=o?t.residualClasses:t.residualStyles;null!=s&&"string"==typeof e&&Sr(s,e)>=0&&(n[r+1]=Xl(n[r+1]))}(e,c,t,r,s),i=Ei(a,l),s?e.classBindings=i:e.styleBindings=i}(o,s,e,n,i,r)}}(s,t,i,r),e!==O&&Oe(o,i,e)&&function(t,e,n,r,o,s,i,a){if(!(3&e.type))return;const l=t.data,u=l[a+1];Pi(function(t){return 1==(1&t)}(u)?jg(l,e,n,o,fn(u),i):void 0)||(Pi(s)||function(t){return 2==(2&t)}(u)&&(s=jg(l,null,n,o,a,i)),function(t,e,n,r,o){const s=ce(t);if(e)o?s?t.addClass(n,r):n.classList.add(r):s?t.removeClass(n,r):n.classList.remove(r);else{let i=-1===r.indexOf("-")?void 0:ct.DashCase;if(null==o)s?t.removeStyle(n,r,i):n.style.removeProperty(r);else{const a="string"==typeof o&&o.endsWith("!important");a&&(o=o.slice(0,-10),i|=ct.Important),s?t.setStyle(n,r,o,i):n.style.setProperty(r,o,a?"important":"")}}}(r,i,Qs(We(),n),o,s))}(s,s.data[We()],o,o[L],t,o[i+1]=function(t,e){return null==t||("string"==typeof e?t+=e:"object"==typeof t&&(t=j(function(t){return t instanceof
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}?t.changingThisBreaksApplicationSecurity:t}(t)))),t}(e,n),r,i)}(t,e,null,!0),Fi}function Ru(t,e,n,r,o){let s=null;const i=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<i&&(s=e[a],r=es(r,s.hostAttrs,o),s!==t);)a++;return null!==t&&(n.directiveStylingLast=a),r}function es(t,e,n){const r=n?1:2;let o=-1;if(null!==e)for(let s=0;s<e.length;s++){const i=e[s];"number"==typeof i?o=i:o===r&&(Array.isArray(t)||(t=void 0===t?[]:["",t]),lt(t,i,!!n||e[++s]))}return void 0===t?null:t}function jg(t,e,n,r,o,s){const i=null===e;let a;for(;o>0;){const l=t[o],u=Array.isArray(l),c=u?l[1]:l,d=null===c;let f=n[o+1];f===O&&(f=d?J:void 0);let h=d?wl(f,r):c===r?f:void 0;if(u&&!Pi(h)&&(h=wl(l,r)),Pi(h)&&(a=h,i))return a;const p=t[o+1];o=i?Pt(p):fn(p)}if(null!==e){let l=s?e.residualClasses:e.residualStyles;null!=l&&(a=wl(l,r))}return a}function Pi(t){return void 0!==t}function X(t,e=""){const n=C(),r=q(),o=t+20,s=r.firstCreatePass?Vr(r,o,1,e,null):r.data[o],i=n[o]=function(t,e){return ce(t)?t.createText(e):t.createTextNode(e)}(n[L],e);Ci(r,n,i,s),Qt(s,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Lt(t){return Ri("",t,""),Lt}function Ri(t,e,n){const r=C(),o=function(t,e,n,r){return Oe(t,br(),n)?e+k(n)+r:O}(r,t,e,n);return o!==O&&pn(r,We(),o),Ri}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const sr=void 0;var jM=["en",[["a","p"],["AM","PM"],sr],[["AM","PM"],sr,sr],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],sr,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],sr,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",sr,"{1} 'at' {0}",sr],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(t){const e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return 1===e&&0===n?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let eo={};function lm(t){return t in eo||(eo[t]=K.ng&&K.ng.common&&K.ng.common.locales&&K.ng.common.locales[t]),eo[t]}var b=(()=>((b=b||{})[b.LocaleId=0]="LocaleId",b[b.DayPeriodsFormat=1]="DayPeriodsFormat",b[b.DayPeriodsStandalone=2]="DayPeriodsStandalone",b[b.DaysFormat=3]="DaysFormat",b[b.DaysStandalone=4]="DaysStandalone",b[b.MonthsFormat=5]="MonthsFormat",b[b.MonthsStandalone=6]="MonthsStandalone",b[b.Eras=7]="Eras",b[b.FirstDayOfWeek=8]="FirstDayOfWeek",b[b.WeekendRange=9]="WeekendRange",b[b.DateFormat=10]="DateFormat",b[b.TimeFormat=11]="TimeFormat",b[b.DateTimeFormat=12]="DateTimeFormat",b[b.NumberSymbols=13]="NumberSymbols",b[b.NumberFormats=14]="NumberFormats",b[b.CurrencyCode=15]="CurrencyCode",b[b.CurrencySymbol=16]="CurrencySymbol",b[b.CurrencyName=17]="CurrencyName",b[b.Currencies=18]="Currencies",b[b.Directionality=19]="Directionality",b[b.PluralCase=20]="PluralCase",b[b.ExtraData=21]="ExtraData",b))();const Oi="en-US";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let um=Oi;function Ou(t){rt(t,"Expected localeId to be defined"),"string"==typeof t&&(um=t.toLowerCase().replace(/_/g,"-"))}function Lu(t,e,n,r,o){if(t=w(t),Array.isArray(t))for(let s=0;s<t.length;s++)Lu(t[s],e,n,r,o);else{const s=q(),i=C();let a=Hr(t)?t:w(t.provide),l=Tp(t);const u=be(),c=1048575&u.providerIndexes,d=u.directiveStart,f=u.providerIndexes>>20;if(Hr(t)||!t.multi){const h=new So(l,o,D),p=ju(a,e,o?c:c+f,d);-1===p?(ii(xo(u,i),s,a),Bu(s,t,e.length),e.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(h),i.push(h)):(n[p]=h,i[p]=h)}else{const h=ju(a,e,c+f,d),p=ju(a,e,c,c+f),m=h>=0&&n[h],g=p>=0&&n[p];if(o&&!g||!o&&!m){ii(xo(u,i),s,a);const _=function(t,e,n,r,o){const s=new So(t,n,D);return s.multi=[],s.index=e,s.componentProviders=0,Pm(s,o,r&&!n),s}(o?kI:VI,n.length,o,r,l);!o&&g&&(n[p].providerFactory=_),Bu(s,t,e.length,0),e.push(a),u.directiveStart++,u.directiveEnd++,o&&(u.providerIndexes+=1048576),n.push(_),i.push(_)}else Bu(s,t,h>-1?h:p,Pm(n[o?p:h],l,!o&&r));!o&&r&&g&&n[p].componentProviders++}}}function Bu(t,e,n,r){const o=Hr(e);if(o||function(t){return!!t.useClass}(e)){const i=(e.useClass||e).prototype.ngOnDestroy;if(i){const a=t.destroyHooks||(t.destroyHooks=[]);if(!o&&e.multi){const l=a.indexOf(n);-1===l?a.push(n,[r,i]):a[l+1].push(r,i)}else a.push(n,i)}}}function Pm(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function ju(t,e,n,r){for(let o=n;o<r;o++)if(e[o]===t)return o;return-1}function VI(t,e,n,r){return Hu(this.multi,[])}function kI(t,e,n,r){const o=this.multi;let s;if(this.providerFactory){const i=this.providerFactory.componentProviders,a=Fo(n,n[1],this.providerFactory.index,r);s=a.slice(0,i),Hu(o,s);for(let l=i;l<a.length;l++)s.push(a[l])}else s=[],Hu(o,s);return s}function Hu(t,e){for(let n=0;n<t.length;n++)e.push((0,t[n])());return e}function ie(t,e=[]){return n=>{n.providersResolver=(r,o)=>
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(t,e,n){const r=q();if(r.firstCreatePass){const o=xt(t);Lu(n,r.data,r.blueprint,o,!0),Lu(e,r.data,r.blueprint,o,!1)}}(r,o?o(t):t,e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Rm{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Vm="ngComponent";class jI{resolveComponentFactory(e){throw function(t){const e=Error(`No component factory found for ${j(t)}. Did you add it to @NgModule.entryComponents?`);return e[Vm]=t,e}(e)}}class ir{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ji(...t){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function no(t,e){return new ke(mt(t,e))}ir.NULL=new jI;const UI=function(){return no(be(),C())};let ke=(()=>{class t{constructor(n){this.nativeElement=n}}return t.__NG_ELEMENT_ID__=UI,t})();class Hi{}let ar=(()=>{class t{}return t.__NG_ELEMENT_ID__=()=>WI(),t})();const WI=function(){const t=C(),n=at(be().index,t);return function(t){return t[L]}(zt(n)?n:t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */;let Uu=(()=>{class t{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return t.\u0275prov=G({token:t,providedIn:"root",factory:()=>null}),t})();class $i{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const Lm=new $i("12.2.2");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Bm{constructor(){}supports(e){return Zo(e)}create(e){return new KI(e)}}const QI=(t,e)=>e;class KI{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||QI}forEachItem(e){let n;for(n=this._itHead;null!==n;n=n._next)e(n)}forEachOperation(e){let n=this._itHead,r=this._removalsHead,o=0,s=null;for(;n||r;){const i=!r||n&&n.currentIndex<Hm(r,o,s)?n:r,a=Hm(i,o,s),l=i.currentIndex;if(i===r)o--,r=r._nextRemoved;else if(n=n._next,null==i.previousIndex)o++;else{s||(s=[]);const u=a-o,c=l-o;if(u!=c){for(let f=0;f<u;f++){const h=f<s.length?s[f]:s[f]=0,p=h+f;c<=p&&p<u&&(s[f]=h+1)}s[i.previousIndex]=c-u}}a!==l&&e(i,a,l)}}forEachPreviousItem(e){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)e(n)}forEachMovedItem(e){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)e(n)}forEachIdentityChange(e){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)e(n)}diff(e){if(null==e&&(e=[]),!Zo(e))throw new Error(`Error trying to diff '${j(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let o,s,i,n=this._itHead,r=!1;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],i=this._trackByFn(a,s),null!==n&&Object.is(n.trackById,i)?(r&&(n=this._verifyReinsertion(n,s,i,a)),Object.is(n.item,s)||this._addIdentityChange(n,s)):(n=this._mismatch(n,s,i,a),r=!0),n=n._next}else o=0,function(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[$r()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(e,a=>{i=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,i)?(r&&(n=this._verifyReinsertion(n,a,i,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,i,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,n,r,o){let s;return null===e?s=this._itTail:(s=e._prev,this._remove(e)),null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._reinsertAfter(e,s,o)):null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._moveAfter(e,s,o)):e=this._addAfter(new YI(n,r),s,o),e}_verifyReinsertion(e,n,r,o){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==s?e=this._reinsertAfter(s,e._prev,o):e.currentIndex!=o&&(e.currentIndex=o,this._addToMoves(e,o)),e}_truncate(e){for(;null!==e;){const n=e._next;this._addToRemovals(this._unlink(e)),e=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const o=e._prevRemoved,s=e._nextRemoved;return null===o?this._removalsHead=s:o._nextRemoved=s,null===s?this._removalsTail=o:s._prevRemoved=o,this._insertAfter(e,n,r),this._addToMoves(e,r),e}_moveAfter(e,n,r){return this._unlink(e),this._insertAfter(e,n,r),this._addToMoves(e,r),e}_addAfter(e,n,r){return this._insertAfter(e,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}_insertAfter(e,n,r){const o=null===n?this._itHead:n._next;return e._next=o,e._prev=n,null===o?this._itTail=e:o._prev=e,null===n?this._itHead=e:n._next=e,null===this._linkedRecords&&(this._linkedRecords=new jm),this._linkedRecords.put(e),e.currentIndex=r,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const n=e._prev,r=e._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,e}_addToMoves(e,n){return e.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new jm),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,n){return e.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}}class YI{constructor(e,n){this.item=e,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class JI{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,e))return r;return null}remove(e){const n=e._prevDup,r=e._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class jm{constructor(){this.map=new Map}put(e){const n=e.trackById;let r=this.map.get(n);r||(r=new JI,this.map.set(n,r)),r.add(e)}get(e,n){const o=this.map.get(e);return o?o.get(e,n):null}remove(e){const n=e.trackById;return this.map.get(n).remove(e)&&this.map.delete(n),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Hm(t,e,n){const r=t.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+e+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class $m{constructor(){}supports(e){return e instanceof Map||wu(e)}create(){return new ZI}}class ZI{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let n;for(n=this._mapHead;null!==n;n=n._next)e(n)}forEachPreviousItem(e){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)e(n)}forEachChangedItem(e){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)e(n)}diff(e){if(e){if(!(e instanceof Map||wu(e)))throw new Error(`Error trying to diff '${j(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(e,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const s=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,s)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,n){if(e){const r=e._prev;return n._next=e,n._prev=r,e._prev=n,r&&(r._next=n),e===this._mapHead&&(this._mapHead=n),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(e,n){if(this._records.has(e)){const o=this._records.get(e);this._maybeAddToChanges(o,n);const s=o._prev,i=o._next;return s&&(s._next=i),i&&(i._prev=s),o._next=null,o._prev=null,o}const r=new XI(e);return this._records.set(e,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,n){Object.is(n,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=n,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,n){e instanceof Map?e.forEach(n):Object.keys(e).forEach(r=>n(e[r],r))}}class XI{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Um(){return new ss([new Bm])}let ss=(()=>{class t{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new t(n)}static extend(n){return{provide:t,useFactory:r=>t.create(n,r||Um()),deps:[[t,new Zn,new Jt]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(t){return t.name||typeof t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'`)}}return t.\u0275prov=G({token:t,providedIn:"root",factory:Um}),t})();function Gm(){return new ro([new $m])}let ro=(()=>{class t{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new t(n)}static extend(n){return{provide:t,useFactory:r=>t.create(n,r||Gm()),deps:[[t,new Zn,new Jt]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Error(`Cannot find a differ supporting object '${n}'`)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return t.\u0275prov=G({token:t,providedIn:"root",factory:Gm}),t})();function Ui(t,e,n,r,o=!1){for(;null!==n;){const s=e[n.index];if(null!==s&&r.push(me(s)),Nt(s))for(let a=10;a<s.length;a++){const l=s[a],u=l[1].firstChild;null!==u&&Ui(l[1],l,u,r)}const i=n.type;if(8&i)Ui(t,e,n.child,r);else if(32&i){const a=jl(n,e);let l;for(;l=a();)r.push(l)}else if(16&i){const a=Bh(e,n);if(Array.isArray(a))r.push(...a);else{const l=Wo(e[16]);Ui(l[1],l,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class is{constructor(e,n){this._lView=e,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const e=this._lView,n=e[1];return Ui(n,e,n.firstChild,[])}get context(){return this._lView[8]}set context(e){this._lView[8]=e}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const e=this._lView[3];if(Nt(e)){const n=e[8],r=n?n.indexOf(this):-1;r>-1&&(Wl(e,r),Yn(n,r))}this._attachedToViewContainer=!1}Nh(this._lView[1],this._lView)}onDestroy(e){!function(t,e,n,r){const o=Dp(e);null===n?o.push(r):(o.push(n),t.firstCreatePass&&Ep(t).push(r,o.length-1))}(this._lView[1],this._lView,null,e)}markForCheck(){fu(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){pu(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(t,e,n){Ys(!0);try{pu(t,e,n)}finally{Ys(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function(t,e){qo(t,e,e[L],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}class tA extends is{constructor(e){super(e),this._view=e}detectChanges(){Cp(this._view)}checkNoChanges(){!function(t){Ys(!0);try{Cp(t)}finally{Ys(!1)}}(this._view)}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const aA=[new $m],uA=new ss([new Bm]),cA=new ro(aA),fA=function(){return Gi(be(),C())};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let yn=(()=>{class t{}return t.__NG_ELEMENT_ID__=fA,t})();const hA=yn,pA=class extends hA{constructor(e,n,r){super(),this._declarationLView=e,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(e){const n=this._declarationTContainer.tViews,r=zo(this._declarationLView,n,e,16,null,n.declTNode,null,null,null,null);r[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(r[19]=s.createEmbeddedView(n)),Qo(n,r,e),new is(r)}};function Gi(t,e){return 4&t.type?new pA(e,t,no(t,e)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class lr{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const _A=function(){return function(t,e){let n;const r=e[t.index];if(Nt(r))n=r;else{let o;if(8&t.type)o=me(r);else{const s=e[L];o=s.createComment("");const i=mt(t,e);tr(s,_i(s,i),o,function(t,e){return ce(t)?t.nextSibling(e):e.nextSibling}(s,i),!1)}e[t.index]=n=_p(r,e,o,t),Mi(e,n)}return new Wm(n,t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(be(),C())};let sn=(()=>{class t{}return t.__NG_ELEMENT_ID__=_A,t})();const DA=sn,Wm=class extends DA{constructor(e,n,r){super(),this._lContainer=e,this._hostTNode=n,this._hostLView=r}get element(){return no(this._hostTNode,this._hostLView)}get injector(){return new Mr(this._hostTNode,this._hostLView)}get parentInjector(){const e=si(this._hostTNode,this._hostLView);if(Pf(e)){const n=wr(e,this._hostLView),r=vr(e);return new Mr(n[1].data[r+8],n)}return new Mr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){const n=qm(this._lContainer);return null!==n&&n[e]||null}get length(){return this._lContainer.length-10}createEmbeddedView(e,n,r){const o=e.createEmbeddedView(n||{});return this.insert(o,r),o}createComponent(e,n,r,o,s){const i=r||this.parentInjector;if(!s&&null==e.ngModule&&i){const l=i.get(lr,null);l&&(s=l)}const a=e.create(i,o,void 0,s);return this.insert(a.hostView,n),a}insert(e,n){const r=e._lView,o=r[1];if(function(t){return Nt(t[3])}(r)){const c=this.indexOf(e);if(-1!==c)this.detach(c);else{const d=r[3],f=new Wm(d,d[6],d[3]);f.detach(f.indexOf(e))}}const s=this._adjustIndex(n),i=this._lContainer;!function(t,e,n,r){const o=10+r,s=n.length;r>0&&(n[o-1][4]=e),r<s-10?(e[4]=n[o],ui(n,10+r,e)):(n.push(e),e[4]=null),e[3]=n;const i=e[17];null!==i&&n!==i&&function(t,e){const n=t[9];e[16]!==e[3][3][16]&&(t[2]=!0),null===n?t[9]=[e]:n.push(e)}(i,e);const a=e[19];null!==a&&a.insertView(t),e[2]|=128}(o,r,i,s);const a=Ql(s,i),l=r[L],u=_i(l,i[7]);return null!==u&&function(t,e,n,r,o,s){r[0]=o,r[6]=e,qo(t,r,n,1,o,s)}(o,i[6],l,r,u,a),e.attachToViewContainerRef(),ui(Gu(i),s,e),e}move(e,n){return this.insert(e,n)}indexOf(e){const n=qm(this._lContainer);return null!==n?n.indexOf(e):-1}remove(e){const n=this._adjustIndex(e,-1),r=Wl(this._lContainer,n);r&&(Yn(Gu(this._lContainer),n),Nh(r[1],r))}detach(e){const n=this._adjustIndex(e,-1),r=Wl(this._lContainer,n);return r&&null!=Yn(Gu(this._lContainer),n)?new is(r):null}_adjustIndex(e,n=0){return null==e?this.length+n:e}};function qm(t){return t[8]}function Gu(t){return t[8]||(t[8]=[])}const ao={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class hy extends ir{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const n=Ue(e);return new gy(n,this.ngModule)}}function py(t){const e=[];for(let n in t)t.hasOwnProperty(n)&&e.push({propName:t[n],templateName:n});return e}const mT=new W("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>bh});class gy extends Rm{constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=function(t){return t.map(sw).join(",")}(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return py(this.componentDef.inputs)}get outputs(){return py(this.componentDef.outputs)}create(e,n,r,o){const s=(o=o||this.ngModule)?function(t,e){return{get:(n,r,o)=>{const s=t.get(n,ao,o);return s!==ao||r===ao?s:e.get(n,r,o)}}}(e,o.injector):e,i=s.get(Hi,mf),a=s.get(Uu,null),l=i.createRenderer(null,this.componentDef),u=this.componentDef.selectors[0][0]||"div",c=r?function(t,e,n){if(ce(t))return t.selectRootElement(e,n===Ee.ShadowDom);let r="string"==typeof e?t.querySelector(e):e;return r.textContent="",r}(l,r,this.componentDef.encapsulation):Gl(i.createRenderer(null,this.componentDef),u,function(t){const e=t.toLowerCase();return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/MathML/":null}(u)),d=this.componentDef.onPush?576:528,f=function(t,e){return{components:[],scheduler:t||bh,clean:Uw,playerHandler:e||null,flags:0}}(),h=wi(0,null,null,1,0,null,null,null,null,null),p=zo(null,h,f,d,null,null,i,l,a,s);let m,g;Js(p);try{const _=function(t,e,n,r,o,s){const i=n[1];n[20]=t;const l=Vr(i,20,2,"#host",null),u=l.mergedAttrs=e.hostAttrs;null!==u&&(Ii(l,u,!0),null!==t&&(ni(o,t,u),null!==l.classes&&Yl(o,t,l.classes),null!==l.styles&&$h(o,t,l.styles)));const c=r.createRenderer(t,e),d=zo(n,ap(e),null,e.onPush?64:16,n[20],l,r,c,s||null,null);return i.firstCreatePass&&(ii(xo(l,n),i,e.type),gp(i,l),mp(l,n.length,1)),Mi(n,d),n[20]=d}(c,this.componentDef,p,i,l);if(c)if(r)ni(l,c,["ng-version",Lm.full]);else{const{attrs:y,classes:v}=function(t){const e=[],n=[];let r=1,o=2;for(;r<t.length;){let s=t[r];if("string"==typeof s)2===o?""!==s&&e.push(s,t[++r]):8===o&&n.push(s);else{if(!Ft(o))break;o=s}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);y&&ni(l,c,y),v&&v.length>0&&Yl(l,c,v.join(" "))}if(g=il(h,20),void 0!==n){const y=g.projection=[];for(let v=0;v<this.ngContentSelectors.length;v++){const M=n[v];y.push(null!=M?Array.from(M):null)}}m=function(t,e,n,r,o){const s=n[1],i=function(t,e,n){const r=be();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),yp(t,r,e,kr(t,e,1,null),n));const o=Fo(e,t,r.directiveStart,r);Re(o,e);const s=mt(r,e);return s&&Re(s,e),o}(s,n,e);if(r.components.push(i),t[8]=i,o&&o.forEach(l=>l(i,e)),e.contentQueries){const l=be();e.contentQueries(1,i,l.directiveStart)}const a=be();return!s.firstCreatePass||null===e.hostBindings&&null===e.hostAttrs||(An(a.index),hp(n[1],a,0,a.directiveStart,a.directiveEnd,e),pp(e,i)),i}(_,this.componentDef,p,f,[g0]),Qo(h,p,null)}finally{Zs()}return new CT(this.componentType,m,no(g,p),p,g)}}class CT extends class{}{constructor(e,n,r,o,s){super(),this.location=r,this._rootLView=o,this._tNode=s,this.instance=n,this.hostView=this.changeDetectorRef=new tA(o),this.componentType=e}get injector(){return new Mr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const lo=new Map;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class bT extends lr{constructor(e,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new hy(this);const r=ht(e),o=function(t){return t[bE]||null}(e);o&&Ou(o),this._bootstrapComponents=en(r.bootstrap),this._r3Injector=Ap(e,n,[{provide:lr,useValue:this},{provide:ir,useValue:this.componentFactoryResolver}],j(e)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(e)}get(e,n=Q.THROW_IF_NOT_FOUND,r=A.Default){return e===Q||e===lr||e===Br?this:this._r3Injector.get(e,n,r)}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class rc extends class{}{constructor(e){super(),this.moduleType=e,null!==ht(e)&&function(t){const e=new Set;!function n(r){const o=ht(r,!0),s=o.id;null!==s&&(function(t,e,n){if(e&&e!==n)throw new Error(`Duplicate module registered for ${t} - ${j(e)} vs ${j(e.name)}`)}(s,lo.get(s),r),lo.set(s,r));const i=en(o.imports);for(const a of i)e.has(a)||(e.add(a),n(a))}(t)}(e)}create(e){return new bT(this.moduleType,e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _y(t,e,n,r){return function(t,e,n,r,o,s){const i=e+n;return Oe(t,i,o)?function(t,e,n){return t[e]=n}(t,i+1,s?r.call(s,o):r(o)):function(t,e){const n=t[e];return n===O?void 0:n}(t,i+1)}(C(),function(){const t=F.lFrame;let e=t.bindingRootIndex;return-1===e&&(e=t.bindingRootIndex=t.tView.bindingStartIndex),e}(),t,e,n,r)}function oc(t){return e=>{setTimeout(t,void 0,e)}}const Ne=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class extends $a{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,n,r){var o,s,i;let a=e,l=n||(()=>null),u=r;if(e&&"object"==typeof e){const d=e;a=null===(o=d.next)||void 0===o?void 0:o.bind(d),l=null===(s=d.error)||void 0===s?void 0:s.bind(d),u=null===(i=d.complete)||void 0===i?void 0:i.bind(d)}this.__isAsync&&(l=oc(l),a&&(a=oc(a)),u&&(u=oc(u)));const c=super.subscribe({next:a,error:l,complete:u});return e instanceof he&&e.add(c),c}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Yi(t,e){return Gi(t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Symbol;const Xi=new W("Application Initializer");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let co=(()=>{class t{constructor(n){this.appInits=n,this.resolve=ji,this.reject=ji,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const s=this.appInits[o]();if(xi(s))n.push(s);else if(xu(s)){const i=new Promise((a,l)=>{s.subscribe({complete:a,error:l})});n.push(i)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return t.\u0275fac=function(n){return new(n||t)(R(Xi,8))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const _s=new W("AppId"),MS={provide:_s,useFactory:function(){return`${gc()}${gc()}${gc()}`},deps:[]};function gc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const qy=new W("Platform Initializer"),ea=new W("Platform ID"),IS=new W("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let mc=(()=>{class t{log(n){console.log(n)}warn(n){console.warn(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Rn=new W("LocaleId"),zy=new W("DefaultCurrencyCode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class TS{constructor(e,n){this.ngModuleFactory=e,this.componentFactories=n}}const yc=function(t){return new rc(t)},SS=yc,NS=function(t){return Promise.resolve(yc(t))},Qy=function(t){const e=yc(t),r=en(ht(t).declarations).reduce((o,s)=>{const i=Ue(s);return i&&o.push(new gy(i)),o},[]);return new TS(e,r)},xS=Qy,FS=function(t){return Promise.resolve(Qy(t))};let na=(()=>{class t{constructor(){this.compileModuleSync=SS,this.compileModuleAsync=NS,this.compileModuleAndAllComponentsSync=xS,this.compileModuleAndAllComponentsAsync=FS}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const OS=(()=>Promise.resolve(0))();function _c(t){"undefined"==typeof Zone?OS.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class xe{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Ne(!1),this.onMicrotaskEmpty=new Ne(!1),this.onStable=new Ne(!1),this.onError=new Ne(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let t=K.requestAnimationFrame,e=K.cancelAnimationFrame;if("undefined"!=typeof Zone&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function(t){const e=()=>{!function(t){t.isCheckStableRunning||-1!==t.lastRequestAnimationFrameId||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(K,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,Dc(t),t.isCheckStableRunning=!0,Cc(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),Dc(t))}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,s,i,a)=>{try{return Ky(t),n.invokeTask(o,s,i,a)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===s.type||t.shouldCoalesceRunChangeDetection)&&e(),Yy(t)}},onInvoke:(n,r,o,s,i,a,l)=>{try{return Ky(t),n.invoke(o,s,i,a,l)}finally{t.shouldCoalesceRunChangeDetection&&e(),Yy(t)}},onHasTask:(n,r,o,s)=>{n.hasTask(o,s),r===o&&("microTask"==s.change?(t._hasPendingMicrotasks=s.microTask,Dc(t),Cc(t)):"macroTask"==s.change&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(n,r,o,s)=>(n.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!xe.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(xe.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,n,r){return this._inner.run(e,n,r)}runTask(e,n,r,o){const s=this._inner,i=s.scheduleEventTask("NgZoneEvent: "+o,e,kS,ji,ji);try{return s.runTask(i,n,r)}finally{s.cancelTask(i)}}runGuarded(e,n,r){return this._inner.runGuarded(e,n,r)}runOutsideAngular(e){return this._outer.run(e)}}const kS={};function Cc(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function Dc(t){t.hasPendingMicrotasks=!!(t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId)}function Ky(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Yy(t){t._nesting--,Cc(t)}class jS{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Ne,this.onMicrotaskEmpty=new Ne,this.onStable=new Ne,this.onError=new Ne}run(e,n,r){return e.apply(n,r)}runGuarded(e,n,r){return e.apply(n,r)}runOutsideAngular(e){return e()}runTask(e,n,r,o){return e.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ec=(()=>{class t{constructor(n){this._ngZone=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{xe.assertNotInAngularZone(),_c(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())_c(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let s=-1;r&&r>0&&(s=setTimeout(()=>{this._callbacks=this._callbacks.filter(i=>i.timeoutId!==s),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:s,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(n,r,o){return[]}}return t.\u0275fac=function(n){return new(n||t)(R(xe))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})(),Jy=(()=>{class t{constructor(){this._applications=new Map,bc.addToWindow(this)}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return bc.findTestabilityInTree(this,n,r)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();class HS{addToWindow(e){}findTestabilityInTree(e,n,r){return null}}let bc=new HS,Zy=!0,Xy=!1;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Ht;const t_=new W("AllowMultipleToken");function n_(t,e,n=[]){const r=`Platform: ${e}`,o=new W(r);return(s=[])=>{let i=r_();if(!i||i.injector.get(t_,!1))if(t)t(n.concat(s).concat({provide:o,useValue:!0}));else{const a=n.concat(s).concat({provide:o,useValue:!0},{provide:Ko,useValue:"platform"});!function(t){if(Ht&&!Ht.destroyed&&!Ht.injector.get(t_,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Ht=t.get(o_);const e=t.get(qy,null);e&&e.forEach(n=>n())}(Q.create({providers:a,name:r}))}return function(t){const e=r_();if(!e)throw new Error("No platform exists!");if(!e.injector.get(t,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return e}(o)}}function r_(){return Ht&&!Ht.destroyed?Ht:null}let o_=(()=>{class t{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const a=function(t,e){let n;return n="noop"===t?new jS:("zone.js"===t?void 0:t)||new xe({enableLongStackTrace:(Xy=!0,Zy),shouldCoalesceEventChangeDetection:!!(null==e?void 0:e.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==e?void 0:e.ngZoneRunCoalescing)}),n}(r?r.ngZone:void 0,{ngZoneEventCoalescing:r&&r.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:r&&r.ngZoneRunCoalescing||!1}),l=[{provide:xe,useValue:a}];return a.run(()=>{const u=Q.create({providers:l,parent:this.injector,name:n.moduleType.name}),c=n.create(u),d=c.injector.get(er,null);if(!d)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return a.runOutsideAngular(()=>{const f=a.onError.subscribe({next:h=>{d.handleError(h)}});c.onDestroy(()=>{vc(this._modules,c),f.unsubscribe()})}),function(t,e,n){try{const r=n();return xi(r)?r.catch(o=>{throw e.runOutsideAngular(()=>t.handleError(o)),o}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}(d,a,()=>{const f=c.injector.get(co);return f.runInitializers(),f.donePromise.then(()=>(Ou(c.injector.get(Rn,Oi)||Oi),this._moduleDoBootstrap(c),c))})})}bootstrapModule(n,r=[]){const o=s_({},r);return function(t,e,n){const r=new rc(n);return Promise.resolve(r)}(0,0,n).then(s=>this.bootstrapModuleFactory(s,o))}_moduleDoBootstrap(n){const r=n.injector.get(Cs);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new Error(`The module ${j(n.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._destroyed=!0}get destroyed(){return this._destroyed}}return t.\u0275fac=function(n){return new(n||t)(R(Q))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();function s_(t,e){return Array.isArray(e)?e.reduce(s_,t):Object.assign(Object.assign({},t),e)}let Cs=(()=>{class t{constructor(n,r,o,s,i){this._zone=n,this._injector=r,this._exceptionHandler=o,this._componentFactoryResolver=s,this._initStatus=i,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const a=new Fe(u=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{u.next(this._stable),u.complete()})}),l=new Fe(u=>{let c;this._zone.runOutsideAngular(()=>{c=this._zone.onStable.subscribe(()=>{xe.assertNotInAngularZone(),_c(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,u.next(!0))})})});const d=this._zone.onUnstable.subscribe(()=>{xe.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{u.next(!1)}))});return()=>{c.unsubscribe(),d.unsubscribe()}});this.isStable=function(...t){let e=Number.POSITIVE_INFINITY,n=null,r=t[t.length-1];return Wd(r)?(n=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(e=t.pop())):"number"==typeof r&&(e=t.pop()),null===n&&1===t.length&&t[0]instanceof Fe?t[0]:function(t=Number.POSITIVE_INFINITY){return Wa(jd,t)}(e)(Yd(t,n))}(a,l.pipe(t=>Jd()(function(t,e){return function(r){let o;o="function"==typeof t?t:function(){return t};const s=Object.create(r,nE);return s.source=r,s.subjectFactory=o,s}}(aE)(t))))}bootstrap(n,r){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let o;o=n instanceof Rm?n:this._componentFactoryResolver.resolveComponentFactory(n),this.componentTypes.push(o.componentType);const s=function(t){return t.isBoundToModule}(o)?void 0:this._injector.get(lr),a=o.create(Q.NULL,[],r||o.selector,s),l=a.location.nativeElement,u=a.injector.get(Ec,null),c=u&&a.injector.get(Jy);return u&&c&&c.registerApplication(l,u),a.onDestroy(()=>{this.detachView(a.hostView),vc(this.components,a),c&&c.unregisterApplication(l)}),this._loadComponent(a),a}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;vc(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(IS,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return t.\u0275fac=function(n){return new(n||t)(R(xe),R(Q),R(er),R(ir),R(co))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();function vc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const pN=n_(null,"core",[{provide:ea,useValue:"unknown"},{provide:o_,deps:[Q]},{provide:Jy,deps:[]},{provide:mc,deps:[]}]),CN=[{provide:Cs,useClass:Cs,deps:[xe,Q,er,ir,co]},{provide:mT,deps:[xe],useFactory:function(t){let e=[];return t.onStable.subscribe(()=>{for(;e.length;)e.pop()()}),function(n){e.push(n)}}},{provide:co,useClass:co,deps:[[new Jt,Xi]]},{provide:na,useClass:na,deps:[]},MS,{provide:ss,useFactory:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){return uA},deps:[]},{provide:ro,useFactory:function(){return cA},deps:[]},{provide:Rn,useFactory:function(t){return Ou(t=t||"undefined"!=typeof $localize&&$localize.locale||Oi),t},deps:[[new Bo(Rn),new Jt,new Zn]]},{provide:zy,useValue:"USD"}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let EN=(()=>{class t{constructor(n){}}return t.\u0275fac=function(n){return new(n||t)(R(Cs))},t.\u0275mod=Tt({type:t}),t.\u0275inj=ot({providers:CN}),t})(),fa=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hr(){return fa}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const je=new W("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var _e=(()=>((_e=_e||{})[_e.Zero=0]="Zero",_e[_e.One=1]="One",_e[_e.Two=2]="Two",_e[_e.Few=3]="Few",_e[_e.Many=4]="Many",_e[_e.Other=5]="Other",_e))();const Sx=function(t){return function(t){const e=function(t){return t.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let n=lm(e);if(n)return n;const r=e.split("-")[0];if(n=lm(r),n)return n;if("en"===r)return jM;throw new Error(`Missing locale data for the locale "${t}".`)}(t)[b.PluralCase]};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ba{}let o1=(()=>{class t extends ba{constructor(n){super(),this.locale=n}getPluralCategory(n,r){switch(Sx(r||this.locale)(n)){case _e.Zero:return"zero";case _e.One:return"one";case _e.Two:return"two";case _e.Few:return"few";case _e.Many:return"many";default:return"other"}}}return t.\u0275fac=function(n){return new(n||t)(R(Rn))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function U_(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const r=n.indexOf("="),[o,s]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===e)return decodeURIComponent(s)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let G_=(()=>{class t{constructor(n,r,o,s){this._iterableDiffers=n,this._keyValueDiffers=r,this._ngEl=o,this._renderer=s,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(n){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof n?n.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(n){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof n?n.split(/\s+/):n,this._rawClass&&(Zo(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const n=this._iterableDiffer.diff(this._rawClass);n&&this._applyIterableChanges(n)}else if(this._keyValueDiffer){const n=this._keyValueDiffer.diff(this._rawClass);n&&this._applyKeyValueChanges(n)}}_applyKeyValueChanges(n){n.forEachAddedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachChangedItem(r=>this._toggleClass(r.key,r.currentValue)),n.forEachRemovedItem(r=>{r.previousValue&&this._toggleClass(r.key,!1)})}_applyIterableChanges(n){n.forEachAddedItem(r=>{if("string"!=typeof r.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${j(r.item)}`);this._toggleClass(r.item,!0)}),n.forEachRemovedItem(r=>this._toggleClass(r.item,!1))}_applyClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!0)):Object.keys(n).forEach(r=>this._toggleClass(r,!!n[r])))}_removeClasses(n){n&&(Array.isArray(n)||n instanceof Set?n.forEach(r=>this._toggleClass(r,!1)):Object.keys(n).forEach(r=>this._toggleClass(r,!1)))}_toggleClass(n,r){(n=n.trim())&&n.split(/\s+/g).forEach(o=>{r?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}}return t.\u0275fac=function(n){return new(n||t)(D(ss),D(ro),D(ke),D(ar))},t.\u0275dir=x({type:t,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class i1{constructor(e,n,r,o){this.$implicit=e,this.ngForOf=n,this.index=r,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let qc=(()=>{class t{constructor(n,r,o){this._viewContainer=n,this._template=r,this._differs=o,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;if(!this._differ&&n)try{this._differ=this._differs.find(n).create(this.ngForTrackBy)}catch(r){throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(t){return t.name||typeof t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'. NgFor only supports binding to Iterables such as Arrays.`)}}if(this._differ){const n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){const r=[];n.forEachOperation((o,s,i)=>{if(null==o.previousIndex){const a=this._viewContainer.createEmbeddedView(this._template,new i1(null,this._ngForOf,-1,-1),null===i?void 0:i),l=new W_(o,a);r.push(l)}else if(null==i)this._viewContainer.remove(null===s?void 0:s);else if(null!==s){const a=this._viewContainer.get(s);this._viewContainer.move(a,i);const l=new W_(o,a);r.push(l)}});for(let o=0;o<r.length;o++)this._perViewChange(r[o].view,r[o].record);for(let o=0,s=this._viewContainer.length;o<s;o++){const i=this._viewContainer.get(o);i.context.index=o,i.context.count=s,i.context.ngForOf=this._ngForOf}n.forEachIdentityChange(o=>{this._viewContainer.get(o.currentIndex).context.$implicit=o.item})}_perViewChange(n,r){n.context.$implicit=r.item}static ngTemplateContextGuard(n,r){return!0}}return t.\u0275fac=function(n){return new(n||t)(D(sn),D(yn),D(ss))},t.\u0275dir=x({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),t})();class W_{constructor(e,n){this.record=e,this.view=n}}let zc=(()=>{class t{constructor(n,r){this._viewContainer=n,this._context=new l1,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){q_("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){q_("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}}return t.\u0275fac=function(n){return new(n||t)(D(sn),D(yn))},t.\u0275dir=x({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),t})();class l1{constructor(){this.$implicit=null,this.ngIf=null}}function q_(t,e){if(e&&!e.createEmbeddedView)throw new Error(`${t} must be a TemplateRef, but received '${j(e)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let K_=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Tt({type:t}),t.\u0275inj=ot({providers:[{provide:ba,useClass:o1}]}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Z_{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v12.2.2
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Zc extends class extends class{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function(t){fa||(fa=t)}(new Zc)}onAndCancel(e,n,r){return e.addEventListener(n,r,!1),()=>{e.removeEventListener(n,r,!1)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,n){return(n=n||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return"window"===n?window:"document"===n?e:"body"===n?e.body:null}getBaseHref(e){const n=(Is=Is||document.querySelector("base"),Is?Is.getAttribute("href"):null);return null==n?null:function(t){va=va||document.createElement("a"),va.setAttribute("href",t);const e=va.pathname;return"/"===e.charAt(0)?e:`/${e}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){Is=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return U_(document.cookie,e)}}let va,Is=null;const X_=new W("TRANSITION_ID"),$1=[{provide:Xi,useFactory:function(t,e,n){return()=>{n.get(co).donePromise.then(()=>{const r=hr(),o=e.querySelectorAll(`style[ng-transition="${t}"]`);for(let s=0;s<o.length;s++)r.remove(o[s])})}},deps:[X_,je,Q],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Xc{static init(){!function(t){bc=t}(new Xc)}addToWindow(e){K.getAngularTestability=(r,o=!0)=>{const s=e.findTestabilityInTree(r,o);if(null==s)throw new Error("Could not find testability for element.");return s},K.getAllAngularTestabilities=()=>e.getAllTestabilities(),K.getAllAngularRootElements=()=>e.getAllRootElements(),K.frameworkStabilizers||(K.frameworkStabilizers=[]),K.frameworkStabilizers.push(r=>{const o=K.getAllAngularTestabilities();let s=o.length,i=!1;const a=function(l){i=i||l,s--,0==s&&r(i)};o.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(e,n,r){if(null==n)return null;const o=e.getTestability(n);return null!=o?o:r?hr().isShadowRoot(n)?this.findTestabilityInTree(e,n.host,!0):this.findTestabilityInTree(e,n.parentElement,!0):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let U1=(()=>{class t{build(){return new XMLHttpRequest}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const As=new W("EventManagerPlugins");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ma=(()=>{class t{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>o.manager=this),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}addGlobalEventListener(n,r,o){return this._findPluginFor(r).addGlobalEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){const r=this._eventNameToPlugin.get(n);if(r)return r;const o=this._plugins;for(let s=0;s<o.length;s++){const i=o[s];if(i.supports(n))return this._eventNameToPlugin.set(n,i),i}throw new Error(`No event manager plugin found for event ${n}`)}}return t.\u0275fac=function(n){return new(n||t)(R(As),R(xe))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();class ed{constructor(e){this._doc=e}addGlobalEventListener(e,n,r){const o=hr().getGlobalEventTarget(this._doc,e);if(!o)throw new Error(`Unsupported event target ${o} for event ${n}`);return this.addEventListener(o,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let tC=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(n){const r=new Set;n.forEach(o=>{this._stylesSet.has(o)||(this._stylesSet.add(o),r.add(o))}),this.onStylesAdded(r)}onStylesAdded(n){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})(),Ts=(()=>{class t extends tC{constructor(n){super(),this._doc=n,this._hostNodes=new Map,this._hostNodes.set(n.head,[])}_addStylesToHost(n,r,o){n.forEach(s=>{const i=this._doc.createElement("style");i.textContent=s,o.push(r.appendChild(i))})}addHost(n){const r=[];this._addStylesToHost(this._stylesSet,n,r),this._hostNodes.set(n,r)}removeHost(n){const r=this._hostNodes.get(n);r&&r.forEach(nC),this._hostNodes.delete(n)}onStylesAdded(n){this._hostNodes.forEach((r,o)=>{this._addStylesToHost(n,o,r)})}ngOnDestroy(){this._hostNodes.forEach(n=>n.forEach(nC))}}return t.\u0275fac=function(n){return new(n||t)(R(je))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();function nC(t){hr().remove(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const td={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},nd=/%COMP%/g;function Ia(t,e,n){for(let r=0;r<e.length;r++){let o=e[r];Array.isArray(o)?Ia(t,o,n):(o=o.replace(nd,t),n.push(o))}return n}function sC(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}let rd=(()=>{class t{constructor(n,r,o){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.rendererByCompId=new Map,this.defaultRenderer=new od(n)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;switch(r.encapsulation){case Ee.Emulated:{let o=this.rendererByCompId.get(r.id);return o||(o=new oF(this.eventManager,this.sharedStylesHost,r,this.appId),this.rendererByCompId.set(r.id,o)),o.applyToHost(n),o}case 1:case Ee.ShadowDom:return new sF(this.eventManager,this.sharedStylesHost,n,r);default:if(!this.rendererByCompId.has(r.id)){const o=Ia(r.id,r.styles,[]);this.sharedStylesHost.addStyles(o),this.rendererByCompId.set(r.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(n){return new(n||t)(R(Ma),R(Ts),R(_s))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();class od{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,n){return n?document.createElementNS(td[n]||n,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,n){e.appendChild(n)}insertBefore(e,n,r){e&&e.insertBefore(n,r)}removeChild(e,n){e&&e.removeChild(n)}selectRootElement(e,n){let r="string"==typeof e?document.querySelector(e):e;if(!r)throw new Error(`The selector "${e}" did not match any elements`);return n||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,r,o){if(o){n=o+":"+n;const s=td[o];s?e.setAttributeNS(s,n,r):e.setAttribute(n,r)}else e.setAttribute(n,r)}removeAttribute(e,n,r){if(r){const o=td[r];o?e.removeAttributeNS(o,n):e.removeAttribute(`${r}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,r,o){o&(ct.DashCase|ct.Important)?e.style.setProperty(n,r,o&ct.Important?"important":""):e.style[n]=r}removeStyle(e,n,r){r&ct.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,r){e[n]=r}setValue(e,n){e.nodeValue=n}listen(e,n,r){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,n,sC(r)):this.eventManager.addEventListener(e,n,sC(r))}}class oF extends od{constructor(e,n,r,o){super(e),this.component=r;const s=Ia(o+"-"+r.id,r.styles,[]);n.addStyles(s),this.contentAttr=function(t){return"_ngcontent-%COMP%".replace(nd,t)}(o+"-"+r.id),this.hostAttr=function(t){return"_nghost-%COMP%".replace(nd,t)}(o+"-"+r.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,n){const r=super.createElement(e,n);return super.setAttribute(r,this.contentAttr,""),r}}class sF extends od{constructor(e,n,r,o){super(e),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=Ia(o.id,o.styles,[]);for(let i=0;i<s.length;i++){const a=document.createElement("style");a.textContent=s[i],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,r){return super.insertBefore(this.nodeOrShadowRoot(e),n,r)}removeChild(e,n){return super.removeChild(this.nodeOrShadowRoot(e),n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let iF=(()=>{class t extends ed{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}}return t.\u0275fac=function(n){return new(n||t)(R(je))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const lC=["alt","control","meta","shift"],hF={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},uC={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},pF={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};let gF=(()=>{class t extends ed{constructor(n){super(n)}supports(n){return null!=t.parseEventName(n)}addEventListener(n,r,o){const s=t.parseEventName(r),i=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>hr().onAndCancel(n,s.domEventName,i))}static parseEventName(n){const r=n.toLowerCase().split("."),o=r.shift();if(0===r.length||"keydown"!==o&&"keyup"!==o)return null;const s=t._normalizeKey(r.pop());let i="";if(lC.forEach(l=>{const u=r.indexOf(l);u>-1&&(r.splice(u,1),i+=l+".")}),i+=s,0!=r.length||0===s.length)return null;const a={};return a.domEventName=o,a.fullKey=i,a}static getEventFullKey(n){let r="",o=function(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&uC.hasOwnProperty(e)&&(e=uC[e]))}return hF[e]||e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n);return o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),lC.forEach(s=>{s!=o&&pF[s](n)&&(r+=s+".")}),r+=o,r}static eventCallback(n,r,o){return s=>{t.getEventFullKey(s)===n&&o.runGuarded(()=>r(s))}}static _normalizeKey(n){switch(n){case"esc":return"escape";default:return n}}}return t.\u0275fac=function(n){return new(n||t)(R(je))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();const vF=n_(pN,"browser",[{provide:ea,useValue:"browser"},{provide:qy,useValue:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){Zc.makeCurrent(),Xc.init()},multi:!0},{provide:je,useFactory:function(){return function(t){ol=t}(document),document},deps:[]}]),wF=[[],{provide:Ko,useValue:"root"},{provide:er,useFactory:function(){return new er},deps:[]},{provide:As,useClass:iF,multi:!0,deps:[je,xe,ea]},{provide:As,useClass:gF,multi:!0,deps:[je]},[],{provide:rd,useClass:rd,deps:[Ma,Ts,_s]},{provide:Hi,useExisting:rd},{provide:tC,useExisting:Ts},{provide:Ts,useClass:Ts,deps:[je]},{provide:Ec,useClass:Ec,deps:[xe]},{provide:Ma,useClass:Ma,deps:[As,xe]},{provide:Z_,useClass:U1,deps:[]},[]];let MF=(()=>{class t{constructor(n){if(n)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(n){return{ngModule:t,providers:[{provide:_s,useValue:n.appId},{provide:X_,useExisting:_s},$1]}}}return t.\u0275fac=function(n){return new(n||t)(R(t,12))},t.\u0275mod=Tt({type:t}),t.\u0275inj=ot({providers:wF,imports:[K_,EN]}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Aa(t,e){return new Fe(n=>{const r=t.length;if(0===r)return void n.complete();const o=new Array(r);let s=0,i=0;for(let a=0;a<r;a++){const l=Ga(t[a]);let u=!1;n.add(l.subscribe({next:c=>{u||(u=!0,i++),o[a]=c},error:c=>n.error(c),complete:()=>{s++,(s===r||!u)&&(i===r&&n.next(e?e.reduce((c,d,f)=>(c[d]=o[f],c),{}):o),n.complete())}}))}})}
/**
       * @license Angular v12.2.2
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */"undefined"!=typeof window&&window;let dC=(()=>{class t{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return t.\u0275fac=function(n){return new(n||t)(D(ar),D(ke))},t.\u0275dir=x({type:t}),t})(),pr=(()=>{class t extends dC{}return t.\u0275fac=function(){let e;return function(r){return(e||(e=yt(t)))(r||t)}}(),t.\u0275dir=x({type:t,features:[oe]}),t})();const an=new W("NgValueAccessor"),VF={provide:an,useExisting:ee(()=>Ta),multi:!0},LF=new W("CompositionEventMode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ta=(()=>{class t extends dC{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=hr()?hr().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(n){this.setProperty("value",null==n?"":n)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return t.\u0275fac=function(n){return new(n||t)(D(ar),D(ke),D(LF,8))},t.\u0275dir=x({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){1&n&&Ve("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[ie([VF]),oe]}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function kn(t){return null==t||0===t.length}function hC(t){return null!=t&&"number"==typeof t.length}const He=new W("NgValidators"),Ln=new W("NgAsyncValidators"),BF=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class jF{static min(e){return function(t){return e=>{if(kn(e.value)||kn(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}(e)}static max(e){return function(t){return e=>{if(kn(e.value)||kn(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}(e)}static required(e){return function(t){return kn(t.value)?{required:!0}:null}(e)}static requiredTrue(e){return function(t){return!0===t.value?null:{required:!0}}(e)}static email(e){return function(t){return kn(t.value)||BF.test(t.value)?null:{email:!0}}(e)}static minLength(e){return function(t){return e=>kn(e.value)||!hC(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}(e)}static maxLength(e){return function(t){return e=>hC(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}(e)}static pattern(e){return function(t){if(!t)return Bn;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),r=>{if(kn(r.value))return null;const o=r.value;return e.test(o)?null:{pattern:{requiredPattern:n,actualValue:o}}}}(e)}static nullValidator(e){return null}static compose(e){return AC(e)}static composeAsync(e){return TC(e)}}function Bn(t){return null}function bC(t){return null!=t}function vC(t){const e=xi(t)?Ga(t):t;return xu(e),e}function wC(t){let e={};return t.forEach(n=>{e=null!=n?Object.assign(Object.assign({},e),n):e}),0===Object.keys(e).length?null:e}function MC(t,e){return e.map(n=>n(t))}function IC(t){return t.map(e=>function(t){return!t.validate}(e)?e:n=>e.validate(n))}function AC(t){if(!t)return null;const e=t.filter(bC);return 0==e.length?null:function(n){return wC(MC(n,e))}}function ud(t){return null!=t?AC(IC(t)):null}function TC(t){if(!t)return null;const e=t.filter(bC);return 0==e.length?null:function(n){return function(...t){if(1===t.length){const e=t[0];if(ja(e))return Aa(e,null);if(Ha(e)&&Object.getPrototypeOf(e)===Object.prototype){const n=Object.keys(e);return Aa(n.map(r=>e[r]),n)}}if("function"==typeof t[t.length-1]){const e=t.pop();return Aa(t=1===t.length&&ja(t[0])?t[0]:t,null).pipe($n(n=>e(...n)))}return Aa(t,null)}(MC(n,e).map(vC)).pipe($n(wC))}}function cd(t){return null!=t?TC(IC(t)):null}function SC(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function NC(t){return t._rawValidators}function xC(t){return t._rawAsyncValidators}function dd(t){return t?Array.isArray(t)?t:[t]:[]}function Sa(t,e){return Array.isArray(t)?t.includes(e):t===e}function FC(t,e){const n=dd(e);return dd(t).forEach(o=>{Sa(n,o)||n.push(o)}),n}function PC(t,e){return dd(e).filter(n=>!Sa(t,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let RC=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ud(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=cd(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n){this.control&&this.control.reset(n)}hasError(n,r){return!!this.control&&this.control.hasError(n,r)}getError(n,r){return this.control?this.control.getError(n,r):null}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=x({type:t}),t})(),Je=(()=>{class t extends RC{get formDirective(){return null}get path(){return null}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return t.\u0275fac=function(){let e;return function(r){return(e||(e=yt(t)))(r||t)}}(),t.\u0275dir=x({type:t,features:[oe]}),t})();class jn extends RC{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class OC{constructor(e){this._cd=e}is(e){var n,r,o;return"submitted"===e?!!(null===(n=this._cd)||void 0===n?void 0:n.submitted):!!(null===(o=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===o?void 0:o[e])}}let VC=(()=>{class t extends OC{constructor(n){super(n)}}return t.\u0275fac=function(n){return new(n||t)(D(jn,2))},t.\u0275dir=x({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){2&n&&Fi("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[oe]}),t})(),kC=(()=>{class t extends OC{constructor(n){super(n)}}return t.\u0275fac=function(n){return new(n||t)(D(Je,10))},t.\u0275dir=x({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){2&n&&Fi("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[oe]}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ss(t,e){fd(t,e),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&LC(t,e)})}(t,e),function(t,e){const n=(r,o)=>{e.valueAccessor.writeValue(r),o&&e.viewToModelUpdate(r)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&LC(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=r=>{e.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function xa(t,e,n=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),Pa(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Fa(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function fd(t,e){const n=NC(t);null!==e.validator?t.setValidators(SC(n,e.validator)):"function"==typeof n&&t.setValidators([n]);const r=xC(t);null!==e.asyncValidator?t.setAsyncValidators(SC(r,e.asyncValidator)):"function"==typeof r&&t.setAsyncValidators([r]);const o=()=>t.updateValueAndValidity();Fa(e._rawValidators,o),Fa(e._rawAsyncValidators,o)}function Pa(t,e){let n=!1;if(null!==t){if(null!==e.validator){const o=NC(t);if(Array.isArray(o)&&o.length>0){const s=o.filter(i=>i!==e.validator);s.length!==o.length&&(n=!0,t.setValidators(s))}}if(null!==e.asyncValidator){const o=xC(t);if(Array.isArray(o)&&o.length>0){const s=o.filter(i=>i!==e.asyncValidator);s.length!==o.length&&(n=!0,t.setAsyncValidators(s))}}}const r=()=>{};return Fa(e._rawValidators,r),Fa(e._rawAsyncValidators,r),n}function LC(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ra(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ns="VALID",Oa="INVALID",po="PENDING",xs="DISABLED";function gd(t){return(yd(t)?t.validators:t)||null}function HC(t){return Array.isArray(t)?ud(t):t||null}function md(t,e){return(yd(e)?e.asyncValidators:t)||null}function $C(t){return Array.isArray(t)?cd(t):t||null}function yd(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class _d{constructor(e,n){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=n,this._composedValidatorFn=HC(this._rawValidators),this._composedAsyncValidatorFn=$C(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===Ns}get invalid(){return this.status===Oa}get pending(){return this.status==po}get disabled(){return this.status===xs}get enabled(){return this.status!==xs}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=HC(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=$C(e)}addValidators(e){this.setValidators(FC(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(FC(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(PC(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(PC(e,this._rawAsyncValidators))}hasValidator(e){return Sa(this._rawValidators,e)}hasAsyncValidator(e){return Sa(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=po,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const n=this._parentMarkedDirty(e.onlySelf);this.status=xs,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},e),{onlySelf:!0}))}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const n=this._parentMarkedDirty(e.onlySelf);this.status=Ns,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ns||this.status===po)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?xs:Ns}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=po,this._hasOwnPendingAsyncValidator=!0;const n=vC(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(!1!==n.emitEvent)}get(e){return function(t,e,n){if(null==e||(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length))return null;let r=t;return e.forEach(o=>{r=r instanceof Fs?r.controls.hasOwnProperty(o)?r.controls[o]:null:r instanceof Cd&&r.at(o)||null}),r}(this,e)}getError(e,n){const r=n?this.get(n):this;return r&&r.errors?r.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new Ne,this.statusChanges=new Ne}_calculateStatus(){return this._allControlsDisabled()?xs:this.errors?Oa:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(po)?po:this._anyControlsHaveStatus(Oa)?Oa:Ns}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_isBoxedValue(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){yd(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class go extends _d{constructor(e=null,n,r){super(gd(n),md(r,n)),this._onChange=[],this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==n.emitViewToModelChange)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=null,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ra(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ra(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){this._isBoxedValue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}}class Fs extends _d{constructor(e,n,r){super(gd(n),md(r,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,r={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){this._checkAllValuesPresent(e),Object.keys(e).forEach(r=>{this._throwIfControlMissing(r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){null!=e&&(Object.keys(e).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((r,o)=>{r.reset(e[o],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,r)=>(e[r]=n instanceof go?n.value:n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,r)=>!!r._syncPendingControls()||n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_throwIfControlMissing(e){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[e])throw new Error(`Cannot find form control with name: ${e}.`)}_forEachChild(e){Object.keys(this.controls).forEach(n=>{const r=this.controls[n];r&&e(r,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const n of Object.keys(this.controls)){const r=this.controls[n];if(this.contains(n)&&e(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(e,n){let r=e;return this._forEachChild((o,s)=>{r=n(r,o,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(e){this._forEachChild((n,r)=>{if(void 0===e[r])throw new Error(`Must supply a value for form control with name: '${r}'.`)})}}class Cd extends _d{constructor(e,n,r){super(gd(n),md(r,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[e]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,r={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),n&&(this.controls.splice(e,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){this._checkAllValuesPresent(e),e.forEach((r,o)=>{this._throwIfControlMissing(o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){null!=e&&(e.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((r,o)=>{r.reset(e[o],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e instanceof go?e.value:e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_syncPendingControls(){let e=this.controls.reduce((n,r)=>!!r._syncPendingControls()||n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_throwIfControlMissing(e){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(e))throw new Error(`Cannot find form control at index ${e}`)}_forEachChild(e){this.controls.forEach((n,r)=>{e(n,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_checkAllValuesPresent(e){this._forEachChild((n,r)=>{if(void 0===e[r])throw new Error(`Must supply a value for form control at index: ${r}.`)})}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let zC=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=x({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),KC=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Tt({type:t}),t.\u0275inj=ot({}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ed=new W("NgModelWithFormControlWarning"),sP={provide:Je,useExisting:ee(()=>Va)};let Va=(()=>{class t extends Je{constructor(n,r){super(),this.validators=n,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new Ne,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Pa(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){const r=this.form.get(n.path);return Ss(r,n),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),r}getControl(n){return this.form.get(n.path)}removeControl(n){xa(n.control||null,n,!1),Ra(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,r){this.form.get(n.path).setValue(r)}onSubmit(n){return this.submitted=!0,function(t,e){t._syncPendingControls(),e.forEach(n=>{const r=n.control;"submit"===r.updateOn&&r._pendingChange&&(n.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(n),!1}onReset(){this.resetForm()}resetForm(n){this.form.reset(n),this.submitted=!1}_updateDomValue(){this.directives.forEach(n=>{const r=n.control,o=this.form.get(n.path);r!==o&&(xa(r||null,n),o instanceof go&&(Ss(o,n),n.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){const r=this.form.get(n.path);(function(t,e){fd(t,e)})(r,n),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){const r=this.form.get(n.path);r&&function(t,e){return Pa(t,e)}(r,n)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){fd(this.form,this),this._oldForm&&Pa(this._oldForm,this)}_checkFormPresent(){}}return t.\u0275fac=function(n){return new(n||t)(D(He,10),D(Ln,10))},t.\u0275dir=x({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){1&n&&Ve("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[ie([sP]),oe,it]}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const lP={provide:jn,useExisting:ee(()=>wd)};let wd=(()=>{class t extends jn{constructor(n,r,o,s,i){super(),this._ngModelWarningConfig=i,this._added=!1,this.update=new Ne,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function(t,e){if(!e)return null;let n,r,o;return Array.isArray(e),e.forEach(s=>{s.constructor===Ta?n=s:function(t){return Object.getPrototypeOf(t.constructor)===pr}(s)?r=s:o=s}),o||r||n||null}(0,s)}set isDisabled(n){}ngOnChanges(n){this._added||this._setUpControl(),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return function(t,e){return[...e.path,t]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return t.\u0275fac=function(n){return new(n||t)(D(Je,13),D(He,10),D(Ln,10),D(an,10),D(Ed,8))},t.\u0275dir=x({type:t,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[ie([lP]),oe,it]}),t._ngModelWarningSentOnce=!1,t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const uP={provide:an,useExisting:ee(()=>ka),multi:!0};function eD(t,e){return null==t?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let ka=(()=>{class t extends pr{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(n){this._compareWith=n}writeValue(n){this.value=n;const r=this._getOptionId(n);null==r&&this.setProperty("selectedIndex",-1);const o=eD(r,n);this.setProperty("value",o)}registerOnChange(n){this.onChange=r=>{this.value=this._getOptionValue(r),n(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(n){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r),n))return r;return null}_getOptionValue(n){const r=function(t){return t.split(":")[0]}(n);return this._optionMap.has(r)?this._optionMap.get(r):n}}return t.\u0275fac=function(){let e;return function(r){return(e||(e=yt(t)))(r||t)}}(),t.\u0275dir=x({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,r){1&n&&Ve("change",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[ie([uP]),oe]}),t})(),tD=(()=>{class t{constructor(n,r,o){this._element=n,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(n){null!=this._select&&(this._select._optionMap.set(this.id,n),this._setElementValue(eD(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._setElementValue(n),this._select&&this._select.writeValue(this._select.value)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(n){return new(n||t)(D(ke),D(ar),D(ka,9))},t.\u0275dir=x({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const dP={provide:an,useExisting:ee(()=>Md),multi:!0};function nD(t,e){return null==t?`${e}`:("string"==typeof e&&(e=`'${e}'`),e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let Md=(()=>{class t extends pr{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(n){this._compareWith=n}writeValue(n){let r;if(this.value=n,Array.isArray(n)){const o=n.map(s=>this._getOptionId(s));r=(s,i)=>{s._setSelected(o.indexOf(i.toString())>-1)}}else r=(o,s)=>{o._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(n){this.onChange=r=>{const o=[];if(void 0!==r.selectedOptions){const s=r.selectedOptions;for(let i=0;i<s.length;i++){const a=s.item(i),l=this._getOptionValue(a.value);o.push(l)}}else{const s=r.options;for(let i=0;i<s.length;i++){const a=s.item(i);if(a.selected){const l=this._getOptionValue(a.value);o.push(l)}}}this.value=o,n(o)}}_registerOption(n){const r=(this._idCounter++).toString();return this._optionMap.set(r,n),r}_getOptionId(n){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r)._value,n))return r;return null}_getOptionValue(n){const r=function(t){return t.split(":")[0]}(n);return this._optionMap.has(r)?this._optionMap.get(r)._value:n}}return t.\u0275fac=function(){let e;return function(r){return(e||(e=yt(t)))(r||t)}}(),t.\u0275dir=x({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,r){1&n&&Ve("change",function(s){return r.onChange(s.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[ie([dP]),oe]}),t})(),rD=(()=>{class t{constructor(n,r,o){this._element=n,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(n){null!=this._select&&(this._value=n,this._setElementValue(nD(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._select?(this._value=n,this._setElementValue(nD(this.id,n)),this._select.writeValue(this._select.value)):this._setElementValue(n)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}_setSelected(n){this._renderer.setProperty(this._element.nativeElement,"selected",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(n){return new(n||t)(D(ke),D(ar),D(Md,9))},t.\u0275dir=x({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})(),hD=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Tt({type:t}),t.\u0275inj=ot({imports:[[KC]]}),t})(),EP=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Tt({type:t}),t.\u0275inj=ot({imports:[hD]}),t})(),pD=(()=>{class t{static withConfig(n){return{ngModule:t,providers:[{provide:Ed,useValue:n.warnOnNgModelWithFormControl}]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Tt({type:t}),t.\u0275inj=ot({imports:[hD]}),t})(),vP=(()=>{class t{group(n,r=null){const o=this._reduceControls(n);let a,s=null,i=null;return null!=r&&(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(r)?(s=null!=r.validators?r.validators:null,i=null!=r.asyncValidators?r.asyncValidators:null,a=null!=r.updateOn?r.updateOn:void 0):(s=null!=r.validator?r.validator:null,i=null!=r.asyncValidator?r.asyncValidator:null)),new Fs(o,{asyncValidators:i,updateOn:a,validators:s})}control(n,r,o){return new go(n,r,o)}array(n,r,o){const s=n.map(i=>this._createControl(i));return new Cd(s,r,o)}_reduceControls(n){const r={};return Object.keys(n).forEach(o=>{r[o]=this._createControl(n[o])}),r}_createControl(n){return n instanceof go||n instanceof Fs||n instanceof Cd?n:Array.isArray(n)?this.control(n[0],n.length>1?n[1]:null,n.length>2?n[2]:null):this.control(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=G({factory:function(){return new t},token:t,providedIn:pD}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class AP{constructor(e,n){this.predicate=e,this.thisArg=n}call(e,n){return n.subscribe(new TP(e,this.predicate,this.thisArg))}}class TP extends Ze{constructor(e,n,r){super(e),this.predicate=n,this.thisArg=r,this.count=0}_next(e){let n;try{n=this.predicate.call(this.thisArg,e,this.count++)}catch(r){return void this.destination.error(r)}n&&this.destination.next(e)}}
/**
       * @license Angular v12.2.2
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gD{}class mD{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Dn{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const o=n.slice(0,r),s=o.toLowerCase(),i=n.slice(r+1).trim();this.maybeSetNormalizedName(o,s),this.headers.has(s)?this.headers.get(s).push(i):this.headers.set(s,[i])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(n=>{let r=e[n];const o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(o,r),this.maybeSetNormalizedName(n,o))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof Dn?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(n=>{this.headers.set(n,e.headers.get(n)),this.normalizedNames.set(n,e.normalizedNames.get(n))})}clone(e){const n=new Dn;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof Dn?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){const n=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,n);const o=("a"===e.op?this.headers.get(n):void 0)||[];o.push(...r),this.headers.set(n,o);break;case"d":const s=e.value;if(s){let i=this.headers.get(n);if(!i)return;i=i.filter(a=>-1===s.indexOf(a)),0===i.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,i)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class SP{encodeKey(e){return yD(e)}encodeValue(e){return yD(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const xP=/%(\d[a-f0-9])/gi,FP={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function yD(t){return encodeURIComponent(t).replace(xP,(e,n)=>{var r;return null!==(r=FP[n])&&void 0!==r?r:e})}function _D(t){return`${t}`}class Hn{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new SP,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(t,e){const n=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{const s=o.indexOf("="),[i,a]=-1==s?[e.decodeKey(o),""]:[e.decodeKey(o.slice(0,s)),e.decodeValue(o.slice(s+1))],l=n.get(i)||[];l.push(a),n.set(i,l)}),n}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{const r=e.fromObject[n];this.map.set(n,Array.isArray(r)?r:[r])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){const n=[];return Object.keys(e).forEach(r=>{const o=e[r];Array.isArray(o)?o.forEach(s=>{n.push({param:r,value:s,op:"a"})}):n.push({param:r,value:o,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const n=this.encoder.encodeKey(e);return this.map.get(e).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const n=new Hn({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const n=("a"===e.op?this.map.get(e.param):void 0)||[];n.push(_D(e.value)),this.map.set(e.param,n);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const o=r.indexOf(_D(e.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class PP{constructor(){this.map=new Map}set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function CD(t){return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer}function DD(t){return"undefined"!=typeof Blob&&t instanceof Blob}function ED(t){return"undefined"!=typeof FormData&&t instanceof FormData}class Rs{constructor(e,n,r,o){let s;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,s=o):s=r,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params)),this.headers||(this.headers=new Dn),this.context||(this.context=new PP),this.params){const i=this.params.toString();if(0===i.length)this.urlWithParams=n;else{const a=n.indexOf("?");this.urlWithParams=n+(-1===a?"?":a<n.length-1?"&":"")+i}}else this.params=new Hn,this.urlWithParams=n}serializeBody(){return null===this.body?null:CD(this.body)||DD(this.body)||ED(this.body)||function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof Hn?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ED(this.body)?null:DD(this.body)?this.body.type||null:CD(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Hn?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){var n;const r=e.method||this.method,o=e.url||this.url,s=e.responseType||this.responseType,i=void 0!==e.body?e.body:this.body,a=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,l=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let u=e.headers||this.headers,c=e.params||this.params;const d=null!==(n=e.context)&&void 0!==n?n:this.context;return void 0!==e.setHeaders&&(u=Object.keys(e.setHeaders).reduce((f,h)=>f.set(h,e.setHeaders[h]),u)),e.setParams&&(c=Object.keys(e.setParams).reduce((f,h)=>f.set(h,e.setParams[h]),c)),new Rs(r,o,i,{params:c,headers:u,context:d,reportProgress:l,responseType:s,withCredentials:a})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var De=(()=>((De=De||{})[De.Sent=0]="Sent",De[De.UploadProgress=1]="UploadProgress",De[De.ResponseHeader=2]="ResponseHeader",De[De.DownloadProgress=3]="DownloadProgress",De[De.Response=4]="Response",De[De.User=5]="User",De))();class Ad{constructor(e,n=200,r="OK"){this.headers=e.headers||new Dn,this.status=void 0!==e.status?e.status:n,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class Td extends Ad{constructor(e={}){super(e),this.type=De.ResponseHeader}clone(e={}){return new Td({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class La extends Ad{constructor(e={}){super(e),this.type=De.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new La({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class bD extends Ad{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Sd(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}let vD=(()=>{class t{constructor(n){this.handler=n}request(n,r,o={}){let s;if(n instanceof Rs)s=n;else{let l,u;l=o.headers instanceof Dn?o.headers:new Dn(o.headers),o.params&&(u=o.params instanceof Hn?o.params:new Hn({fromObject:o.params})),s=new Rs(n,r,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const i=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(...t){let e=t[t.length-1];return Wd(e)?(t.pop(),Ua(t,e)):Yd(t)}(s).pipe(function(t,e){return Wa(t,void 0,1)}(l=>this.handler.handle(l)));if(n instanceof Rs||"events"===o.observe)return i;const a=i.pipe(function(t,e){return function(r){return r.lift(new AP(t,undefined))}}(l=>l instanceof La));switch(o.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe($n(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe($n(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe($n(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));case"json":default:return a.pipe($n(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new Hn).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,Sd(o,r))}post(n,r,o={}){return this.request("POST",n,Sd(o,r))}put(n,r,o={}){return this.request("PUT",n,Sd(o,r))}}return t.\u0275fac=function(n){return new(n||t)(R(gD))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class wD{constructor(e,n){this.next=e,this.interceptor=n}handle(e){return this.interceptor.intercept(e,this.next)}}const MD=new W("HTTP_INTERCEPTORS");let VP=(()=>{class t{intercept(n,r){return r.handle(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const kP=/^\)\]\}',?\n/;let ID=(()=>{class t{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new Fe(r=>{const o=this.xhrFactory.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((h,p)=>o.setRequestHeader(h,p.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const h=n.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(n.responseType){const h=n.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const s=n.serializeBody();let i=null;const a=()=>{if(null!==i)return i;const h=1223===o.status?204:o.status,p=o.statusText||"OK",m=new Dn(o.getAllResponseHeaders()),g=function(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}(o)||n.url;return i=new Td({headers:m,status:h,statusText:p,url:g}),i},l=()=>{let{headers:h,status:p,statusText:m,url:g}=a(),_=null;204!==p&&(_=void 0===o.response?o.responseText:o.response),0===p&&(p=_?200:0);let y=p>=200&&p<300;if("json"===n.responseType&&"string"==typeof _){const v=_;_=_.replace(kP,"");try{_=""!==_?JSON.parse(_):null}catch(M){_=v,y&&(y=!1,_={error:M,text:_})}}y?(r.next(new La({body:_,headers:h,status:p,statusText:m,url:g||void 0})),r.complete()):r.error(new bD({error:_,headers:h,status:p,statusText:m,url:g||void 0}))},u=h=>{const{url:p}=a(),m=new bD({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});r.error(m)};let c=!1;const d=h=>{c||(r.next(a()),c=!0);let p={type:De.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),"text"===n.responseType&&!!o.responseText&&(p.partialText=o.responseText),r.next(p)},f=h=>{let p={type:De.UploadProgress,loaded:h.loaded};h.lengthComputable&&(p.total=h.total),r.next(p)};return o.addEventListener("load",l),o.addEventListener("error",u),o.addEventListener("timeout",u),o.addEventListener("abort",u),n.reportProgress&&(o.addEventListener("progress",d),null!==s&&o.upload&&o.upload.addEventListener("progress",f)),o.send(s),r.next({type:De.Sent}),()=>{o.removeEventListener("error",u),o.removeEventListener("abort",u),o.removeEventListener("load",l),o.removeEventListener("timeout",u),n.reportProgress&&(o.removeEventListener("progress",d),null!==s&&o.upload&&o.upload.removeEventListener("progress",f)),o.readyState!==o.DONE&&o.abort()}})}}return t.\u0275fac=function(n){return new(n||t)(R(Z_))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Nd=new W("XSRF_COOKIE_NAME"),xd=new W("XSRF_HEADER_NAME");class AD{}let BP=(()=>{class t{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=U_(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return t.\u0275fac=function(n){return new(n||t)(R(je),R(ea),R(Nd))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})(),Fd=(()=>{class t{constructor(n,r){this.tokenService=n,this.headerName=r}intercept(n,r){const o=n.url.toLowerCase();if("GET"===n.method||"HEAD"===n.method||o.startsWith("http://")||o.startsWith("https://"))return r.handle(n);const s=this.tokenService.getToken();return null!==s&&!n.headers.has(this.headerName)&&(n=n.clone({headers:n.headers.set(this.headerName,s)})),r.handle(n)}}return t.\u0275fac=function(n){return new(n||t)(R(AD),R(xd))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})(),jP=(()=>{class t{constructor(n,r){this.backend=n,this.injector=r,this.chain=null}handle(n){if(null===this.chain){const r=this.injector.get(MD,[]);this.chain=r.reduceRight((o,s)=>new wD(o,s),this.backend)}return this.chain.handle(n)}}return t.\u0275fac=function(n){return new(n||t)(R(mD),R(Q))},t.\u0275prov=G({token:t,factory:t.\u0275fac}),t})(),HP=(()=>{class t{static disable(){return{ngModule:t,providers:[{provide:Fd,useClass:VP}]}}static withOptions(n={}){return{ngModule:t,providers:[n.cookieName?{provide:Nd,useValue:n.cookieName}:[],n.headerName?{provide:xd,useValue:n.headerName}:[]]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Tt({type:t}),t.\u0275inj=ot({providers:[Fd,{provide:MD,useExisting:Fd,multi:!0},{provide:AD,useClass:BP},{provide:Nd,useValue:"XSRF-TOKEN"},{provide:xd,useValue:"X-XSRF-TOKEN"}]}),t})(),$P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Tt({type:t}),t.\u0275inj=ot({providers:[vD,{provide:gD,useClass:jP},ID,{provide:mD,useExisting:ID}],imports:[[HP.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),t})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function TD(t,e,n,r,o,s,i){try{var a=t[s](i),l=a.value}catch(u){return void n(u)}a.done?e(l):Promise.resolve(l).then(r,o)}function SD(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var s=t.apply(e,n);function i(l){TD(s,r,o,i,a,"next",l)}function a(l){TD(s,r,o,i,a,"throw",l)}i(void 0)})}}const qt={publishedYear:{key:"published_year",name:"\u516c\u958b\u5e74"},publishedAge:{key:"published_age",name:"\u516c\u958b\u5e74\u4ee3"},title:{key:"title",name:"\u30bf\u30a4\u30c8\u30eb"},casts:{key:"casts",name:"\u30ad\u30e3\u30b9\u30c8"},staffs:{key:"staffs",name:"\u30b9\u30bf\u30c3\u30d5"},tags:{key:"tags",name:"\u30bf\u30b0"}};function UP(t,e){if(1&t&&(S(0,"option",9),X(1),N()),2&t){const n=e.$implicit;ye("ngValue",n.value),ae(1),Lt(n.name)}}const GP=function(t){return{invalid:t}};function WP(t,e){if(1&t&&Nu(0,"input",10),2&t){const n=Fn();ye("ngClass",_y(1,GP,n.isInvalidPublishedYear()))}}function qP(t,e){if(1&t&&(S(0,"option",9),X(1),N()),2&t){const n=e.$implicit;ye("ngValue",n.age),ae(1),Ri("",n.age," \u5e74\u4ee3")}}function zP(t,e){if(1&t){const n=C();S(0,"select",11),Ve("change",function(){return function(t){F.lFrame.contextLView=t}(n),Fn().onChangeSearchPublishedAge()}),ze(1,qP,2,2,"option",3),N()}if(2&t){const n=Fn();ae(1),ye("ngForOf",n.searchPublishedAges)}}let QP=(()=>{class t{constructor(n){this.formBuilder=n,this.isDisabled=!1,this.onSubmit=new Ne,this.searchTargetColumns=Object.entries(qt).map(r=>({name:r[1].name,value:r[1].key})),this.searchPublishedAges=this.createSearchPublishedAges()}ngOnInit(){this.searchForm=this.formBuilder.group({targetColumn:[qt.title.key,[jF.required]],searchText:[""],publishedAge:[""]})}onChangeSearchTargetColumn(){if(this.searchForm.value.targetColumn!==qt.publishedAge.key)return this.searchForm.controls.searchText.reset();const n=this.searchPublishedAges[this.searchPublishedAges.length-2].age;this.searchForm.controls.searchText.setValue(n),this.searchForm.controls.publishedAge.setValue(n)}onChangeSearchPublishedAge(){this.searchForm.controls.searchText.setValue(this.searchForm.value.publishedAge)}isInvalidPublishedYear(){if(this.searchForm.value.targetColumn!==qt.publishedYear.key)return!1;const n=this.trimValue(this.searchForm.value.searchText);if(!n)return!1;const r=Number(n);return!Number.isInteger(r)||r<1890||r>2100}onSearch(){const n=this.trimValue(this.searchForm.value.targetColumn),r=this.trimValue(this.searchForm.value.searchText);this.onSubmit.emit(r?{targetColumn:n,searchText:r}:void 0)}onReload(){this.searchForm.reset({targetColumn:qt.title.key}),this.onSubmit.emit()}createSearchPublishedAges(){const r=Number(`${(new Date).getFullYear()}`.substr(0,3)+"0")+10,o=[];let s=1890;for(;s<=r;)o.push({age:s}),s+=10;return o}trimValue(n){return null==n?"":String(n).trim()}}return t.\u0275fac=function(n){return new(n||t)(D(vP))},t.\u0275cmp=wo({type:t,selectors:[["app-search-form"]],inputs:{isDisabled:"isDisabled"},outputs:{onSubmit:"onSubmit"},decls:12,vars:6,consts:[[1,"grid-2-columns",3,"formGroup","submit"],[1,"input-controls"],["formControlName","targetColumn",3,"change"],[3,"ngValue",4,"ngFor","ngForOf"],["type","text","placeholder","\u691c\u7d22\u6587\u5b57\u5217","formControlName","searchText",3,"ngClass",4,"ngIf","ngIfElse"],["publishedAge",""],["type","submit",3,"disabled"],[1,"reload-container"],["type","button",3,"disabled","click"],[3,"ngValue"],["type","text","placeholder","\u691c\u7d22\u6587\u5b57\u5217","formControlName","searchText",3,"ngClass"],["formControlName","publishedAge",3,"change"]],template:function(n,r){if(1&n&&(S(0,"form",0),Ve("submit",function(){return r.onSearch()}),S(1,"div",1),S(2,"select",2),Ve("change",function(){return r.onChangeSearchTargetColumn()}),ze(3,UP,2,2,"option",3),N(),ze(4,WP,1,3,"input",4),ze(5,zP,2,1,"ng-template",null,5,Yi),S(7,"button",6),X(8,"\u691c\u7d22"),N(),N(),S(9,"div",7),S(10,"button",8),Ve("click",function(){return r.onReload()}),X(11,"Reload"),N(),N(),N()),2&n){const o=Si(6);ye("formGroup",r.searchForm),ae(3),ye("ngForOf",r.searchTargetColumns),ae(1),ye("ngIf","published_age"!==r.searchForm.controls.targetColumn.value)("ngIfElse",o),ae(3),ye("disabled",r.isDisabled||r.searchForm.invalid||r.isInvalidPublishedYear()),ae(3),ye("disabled",r.isDisabled)}},directives:[zC,kC,Va,ka,VC,wd,qc,zc,tD,rD,Ta,G_],styles:["form[_ngcontent-%COMP%]{grid-template-columns:auto 1fr;grid-column-gap:1rem;column-gap:1rem;overflow-x:auto;margin:0;white-space:nowrap}form[_ngcontent-%COMP%]   .input-controls[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,auto);grid-column-gap:1rem;column-gap:1rem}form[_ngcontent-%COMP%]   .reload-container[_ngcontent-%COMP%]{text-align:right}input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-size:16px;outline:0}input[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:hover, select[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:hover{border-color:var(--nn-colour-grey-600)}button[_ngcontent-%COMP%]:disabled{cursor:default}select[_ngcontent-%COMP%]{border:1px solid var(--nn-colour-grey-400);border-radius:var(--nn-border-radius-default);padding:calc(var(--nn-space-tiny) / var(--nn-ratio-2)) .5rem;background:transparent;cursor:pointer}input[type=text][_ngcontent-%COMP%]{min-width:10rem}input[type=text].invalid[_ngcontent-%COMP%]{border-color:var(--nn-colour-red)}"]}),t})();function KP(t,e){if(1&t&&(S(0,"div",14),X(1),N()),2&t){const n=Fn().$implicit;ae(1),Lt(n.japaneseTitle)}}function YP(t,e){if(1&t&&(S(0,"tr"),S(1,"td",2),X(2),N(),S(3,"td",3),S(4,"div",12),X(5),ze(6,KP,2,1,"div",13),N(),N(),S(7,"td",4),S(8,"div",12),X(9),N(),N(),S(10,"td",5),S(11,"div",12),X(12),N(),N(),S(13,"td",6),S(14,"div",12),X(15),N(),N(),S(16,"td",7),S(17,"div",12),X(18),N(),N(),S(19,"td",8),S(20,"div",12),X(21),N(),N(),N()),2&t){const n=e.$implicit;ae(2),Lt(n.publishedYear),ae(3),Lt(n.title),ae(1),ye("ngIf",n.japaneseTitle),ae(3),Lt(n.scenario),ae(3),Lt(n.review),ae(3),Lt(n.casts),ae(3),Lt(n.staffs),ae(3),Lt(n.tags)}}function JP(t,e){if(1&t&&(rr(0),ze(1,YP,22,8,"tr",11),or()),2&t){const n=Fn();ae(1),ye("ngForOf",n.films)}}function ZP(t,e){1&t&&(S(0,"strong"),X(1,"\u6620\u753b\u60c5\u5831\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f"),N())}function XP(t,e){1&t&&(rr(0),X(1,"\u8aad\u8fbc\u4e2d\u2026"),or())}function eR(t,e){1&t&&(rr(0),X(1,"1\u4ef6\u3082\u6620\u753b\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u305b\u3093"),or())}function tR(t,e){1&t&&(rr(0),X(1,"\u691c\u7d22\u4e2d\u2026"),or())}function nR(t,e){1&t&&(rr(0),X(1,"\u6761\u4ef6\u306b\u5408\u81f4\u3059\u308b\u6620\u753b\u306f\u3042\u308a\u307e\u305b\u3093"),or())}function rR(t,e){if(1&t&&(ze(0,XP,2,0,"ng-container",17),ze(1,eR,2,0,"ng-container",17),ze(2,tR,2,0,"ng-container",17),ze(3,nR,2,0,"ng-container",17)),2&t){const n=Fn(2);ye("ngIf","loading"===n.currentState),ae(1),ye("ngIf","loaded"===n.currentState),ae(1),ye("ngIf","searching"===n.currentState),ae(1),ye("ngIf","searched"===n.currentState)}}function oR(t,e){if(1&t&&(S(0,"tr"),S(1,"td",15),ze(2,ZP,2,0,"strong",9),ze(3,rR,4,4,"ng-template",null,16,Yi),N(),N()),2&t){const n=Si(4),r=Fn();ae(2),ye("ngIf",!1===r.isLoadedAllFilms)("ngIfElse",n)}}let sR=(()=>{class t{constructor(n){this.httpClient=n,this.films=[],this.isLoadedAllFilms=null,this.currentState="loading",this.allFilms=[]}ngOnInit(){var n=this;return SD(function*(){yield n.onSearch()})()}onSearch(n){var r=this;return SD(function*(){if(r.currentState=n?"searching":"loading",!r.isLoadedAllFilms)try{r.allFilms=yield r.httpClient.get("./assets/filmdex.json").toPromise(),r.isLoadedAllFilms=!0}catch(o){return console.error("Films Component : On Search : Load JSON",o),r.isLoadedAllFilms=!1,r.films=[],void(r.currentState=n?"searched":"loaded")}setTimeout(()=>{r.films=n?r.search(n.targetColumn,n.searchText):r.allFilms,r.currentState=n?"searched":"loaded"})})()}isDisabled(){return["loading","searching"].includes(this.currentState)}search(n,r){if(n===qt.publishedYear.key){const o=Number(r);return this.allFilms.filter(s=>s.publishedYear===o)}if(n===qt.publishedAge.key){const o=Number(r),s=o+9;return this.allFilms.filter(i=>i.publishedYear>=o&&i.publishedYear<=s)}if(n===qt.title.key){const o=r.toLowerCase();return this.allFilms.filter(s=>s.title.toLowerCase().includes(o)||s.japaneseTitle.toLowerCase().includes(o))}if([qt.casts.key,qt.staffs.key,qt.tags.key].includes(n)){const o=r.toLowerCase();return this.allFilms.filter(s=>s[n].toLowerCase().includes(o))}return console.warn("Films Component : Find : Unknown Parameters",{targetColumn:n,searchText:r}),this.allFilms}}return t.\u0275fac=function(n){return new(n||t)(D(vD))},t.\u0275cmp=wo({type:t,selectors:[["app-films"]],decls:23,vars:3,consts:[[3,"isDisabled","onSubmit"],[1,"table-wrapper"],[1,"column-published-year"],[1,"column-title"],[1,"column-scenario"],[1,"column-review"],[1,"column-casts"],[1,"column-staffs"],[1,"column-tags"],[4,"ngIf","ngIfElse"],["notFound",""],[4,"ngFor","ngForOf"],[1,"overflow"],["class","japanese-title",4,"ngIf"],[1,"japanese-title"],["colspan","6",1,"not-found"],["notFoundMessage",""],[4,"ngIf"]],template:function(n,r){if(1&n&&(S(0,"app-search-form",0),Ve("onSubmit",function(s){return r.onSearch(s)}),N(),S(1,"div",1),S(2,"table"),S(3,"thead"),S(4,"tr"),S(5,"th",2),X(6,"\u516c\u958b\u5e74"),N(),S(7,"th",3),X(8,"\u539f\u984c\u30fb\u90a6\u984c"),N(),S(9,"th",4),X(10,"\u3042\u3089\u3059\u3058"),N(),S(11,"th",5),X(12,"\u611f\u60f3"),N(),S(13,"th",6),X(14,"\u30ad\u30e3\u30b9\u30c8"),N(),S(15,"th",7),X(16,"\u30b9\u30bf\u30c3\u30d5"),N(),S(17,"th",8),X(18,"\u30bf\u30b0"),N(),N(),N(),S(19,"tbody"),ze(20,JP,2,1,"ng-container",9),ze(21,oR,5,2,"ng-template",null,10,Yi),N(),N(),N()),2&n){const o=Si(22);ye("isDisabled",r.isDisabled()),ae(20),ye("ngIf",r.films.length>0)("ngIfElse",o)}},directives:[QP,zc,qc],styles:[".table-wrapper[_ngcontent-%COMP%]{margin:2rem 0;overflow-x:auto}table[_ngcontent-%COMP%]{--line-height: 1.2;margin:0;width:100%}table[_ngcontent-%COMP%]   .column-published-year[_ngcontent-%COMP%]{max-width:4rem;width:1%;min-width:4rem;text-align:center;white-space:nowrap}table[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]{min-width:15rem;width:15%}table[_ngcontent-%COMP%]   .column-scenario[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .column-review[_ngcontent-%COMP%]{min-width:20rem;width:25%}table[_ngcontent-%COMP%]   .column-casts[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .column-staffs[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .column-tags[_ngcontent-%COMP%]{min-width:10rem;width:10%}th[_ngcontent-%COMP%]{white-space:nowrap;background:#f3fcff}td[_ngcontent-%COMP%]{padding:.2rem .25rem;font-size:.8rem;line-height:var(--line-height);word-break:break-all}td[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%]{max-height:calc(1em * 5 * var(--line-height) + 2px);overflow-y:auto}td.column-published-year[_ngcontent-%COMP%]{font-size:.95rem}td.column-title[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.3}td.column-title[_ngcontent-%COMP%]   .japanese-title[_ngcontent-%COMP%]{color:var(--nn-colour-grey-700);font-size:.85rem}.not-found[_ngcontent-%COMP%]{padding:1rem .5rem;color:var(--nn-colour-yellow);font-weight:bold;text-align:center}.not-found[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--nn-colour-red)}"]}),t})(),iR=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=wo({type:t,selectors:[["app-root"]],decls:9,vars:0,consts:[[1,"grid-2-columns","header"],["href","https://github.com/Neos21/filmdex","target","_blank","tabindex","-1"],[1,"header-link"],["href","https://neos21.net/","target","_blank","tabindex","-1"],[1,"main"]],template:function(n,r){1&n&&(S(0,"header",0),S(1,"h1"),S(2,"a",1),X(3,"FilmDeX"),N(),N(),S(4,"div",2),S(5,"a",3),X(6,"Neo's World"),N(),N(),N(),S(7,"main",4),Nu(8,"app-films"),N())},directives:[sR],styles:[".header[_ngcontent-%COMP%]{align-items:center;margin:0;padding:1rem;line-height:1;white-space:nowrap;background:var(--nn-colour-blue)}.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--nn-colour-white);text-decoration:none}.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0}.header[_ngcontent-%COMP%]   .header-link[_ngcontent-%COMP%]{font-size:.8rem}.header[_ngcontent-%COMP%]   .header-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--nn-colour-grey-200)}.main[_ngcontent-%COMP%]{margin:1rem 1rem 3rem}"]}),t})(),aR=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Tt({type:t,bootstrap:[iR]}),t.\u0275inj=ot({imports:[[MF,K_,EP,pD,$P]]}),t})();(function(){if(Xy)throw new Error("Cannot enable prod mode after platform setup.");Zy=!1})(),vF().bootstrapModule(aR).catch(t=>console.error(t))}},Co=>{Co(Co.s=116)}]);
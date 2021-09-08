(self.webpackChunkfilmdex_client=self.webpackChunkfilmdex_client||[]).push([[179],{8255:He=>{function ue(V){return Promise.resolve().then(()=>{var m=new Error("Cannot find module '"+V+"'");throw m.code="MODULE_NOT_FOUND",m})}ue.keys=()=>[],ue.resolve=ue,ue.id=8255,He.exports=ue},8583:(He,ue,V)=>{"use strict";V.d(ue,{mr:()=>Se,ez:()=>be,K0:()=>fe,Do:()=>ve,V_:()=>U,Ye:()=>Vt,S$:()=>Oe,sg:()=>je,O5:()=>qt,b0:()=>pe,lw:()=>he,EM:()=>v,JF:()=>Me,w_:()=>ie,bD:()=>Te,q:()=>ce,Mx:()=>mt,HT:()=>de});var m=V(639);
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
       */let h=null;function ce(){return h}function de(y){h||(h=y)}class ie{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const fe=new m.OlP("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let he=(()=>{class y{historyGo(C){throw new Error("Not implemented")}}return y.\u0275fac=function(C){return new(C||y)},y.\u0275prov=(0,m.Yz7)({factory:se,token:y,providedIn:"platform"}),y})();function se(){return(0,m.LFG)(W)}const U=new m.OlP("Location Initialized");let W=(()=>{class y extends he{constructor(C){super(),this._doc=C,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ce().getBaseHref(this._doc)}onPopState(C){const T=ce().getGlobalEventTarget(this._doc,"window");return T.addEventListener("popstate",C,!1),()=>T.removeEventListener("popstate",C)}onHashChange(C){const T=ce().getGlobalEventTarget(this._doc,"window");return T.addEventListener("hashchange",C,!1),()=>T.removeEventListener("hashchange",C)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(C){this.location.pathname=C}pushState(C,T,F){H()?this._history.pushState(C,T,F):this.location.hash=F}replaceState(C,T,F){H()?this._history.replaceState(C,T,F):this.location.hash=F}forward(){this._history.forward()}back(){this._history.back()}historyGo(C=0){this._history.go(C)}getState(){return this._history.state}}return y.\u0275fac=function(C){return new(C||y)(m.LFG(fe))},y.\u0275prov=(0,m.Yz7)({factory:Z,token:y,providedIn:"platform"}),y})();function H(){return!!window.history.pushState}function Z(){return new W((0,m.LFG)(fe))}
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
       */function te(y,b){if(0==y.length)return b;if(0==b.length)return y;let C=0;return y.endsWith("/")&&C++,b.startsWith("/")&&C++,2==C?y+b.substring(1):1==C?y+b:y+"/"+b}function ge(y){const b=y.match(/#|\?|$/),C=b&&b.index||y.length;return y.slice(0,C-("/"===y[C-1]?1:0))+y.slice(C)}function K(y){return y&&"?"!==y[0]?"?"+y:y}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Oe=(()=>{class y{historyGo(C){throw new Error("Not implemented")}}return y.\u0275fac=function(C){return new(C||y)},y.\u0275prov=(0,m.Yz7)({factory:et,token:y,providedIn:"root"}),y})();function et(y){const b=(0,m.LFG)(fe).location;return new pe((0,m.LFG)(he),b&&b.origin||"")}const Se=new m.OlP("appBaseHref");let pe=(()=>{class y extends Oe{constructor(C,T){if(super(),this._platformLocation=C,this._removeListenerFns=[],null==T&&(T=this._platformLocation.getBaseHrefFromDOM()),null==T)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=T}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(C){this._removeListenerFns.push(this._platformLocation.onPopState(C),this._platformLocation.onHashChange(C))}getBaseHref(){return this._baseHref}prepareExternalUrl(C){return te(this._baseHref,C)}path(C=!1){const T=this._platformLocation.pathname+K(this._platformLocation.search),F=this._platformLocation.hash;return F&&C?`${T}${F}`:T}pushState(C,T,F,Q){const re=this.prepareExternalUrl(F+K(Q));this._platformLocation.pushState(C,T,re)}replaceState(C,T,F,Q){const re=this.prepareExternalUrl(F+K(Q));this._platformLocation.replaceState(C,T,re)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(C=0){var T,F;null===(F=(T=this._platformLocation).historyGo)||void 0===F||F.call(T,C)}}return y.\u0275fac=function(C){return new(C||y)(m.LFG(he),m.LFG(Se,8))},y.\u0275prov=m.Yz7({token:y,factory:y.\u0275fac}),y})(),ve=(()=>{class y extends Oe{constructor(C,T){super(),this._platformLocation=C,this._baseHref="",this._removeListenerFns=[],null!=T&&(this._baseHref=T)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(C){this._removeListenerFns.push(this._platformLocation.onPopState(C),this._platformLocation.onHashChange(C))}getBaseHref(){return this._baseHref}path(C=!1){let T=this._platformLocation.hash;return null==T&&(T="#"),T.length>0?T.substring(1):T}prepareExternalUrl(C){const T=te(this._baseHref,C);return T.length>0?"#"+T:T}pushState(C,T,F,Q){let re=this.prepareExternalUrl(F+K(Q));0==re.length&&(re=this._platformLocation.pathname),this._platformLocation.pushState(C,T,re)}replaceState(C,T,F,Q){let re=this.prepareExternalUrl(F+K(Q));0==re.length&&(re=this._platformLocation.pathname),this._platformLocation.replaceState(C,T,re)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}historyGo(C=0){var T,F;null===(F=(T=this._platformLocation).historyGo)||void 0===F||F.call(T,C)}}return y.\u0275fac=function(C){return new(C||y)(m.LFG(he),m.LFG(Se,8))},y.\u0275prov=m.Yz7({token:y,factory:y.\u0275fac}),y})(),Vt=(()=>{class y{constructor(C,T){this._subject=new m.vpe,this._urlChangeListeners=[],this._platformStrategy=C;const F=this._platformStrategy.getBaseHref();this._platformLocation=T,this._baseHref=ge(ft(F)),this._platformStrategy.onPopState(Q=>{this._subject.emit({url:this.path(!0),pop:!0,state:Q.state,type:Q.type})})}path(C=!1){return this.normalize(this._platformStrategy.path(C))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(C,T=""){return this.path()==this.normalize(C+K(T))}normalize(C){return y.stripTrailingSlash(function(y,b){return y&&b.startsWith(y)?b.substring(y.length):b}(this._baseHref,ft(C)))}prepareExternalUrl(C){return C&&"/"!==C[0]&&(C="/"+C),this._platformStrategy.prepareExternalUrl(C)}go(C,T="",F=null){this._platformStrategy.pushState(F,"",C,T),this._notifyUrlChangeListeners(this.prepareExternalUrl(C+K(T)),F)}replaceState(C,T="",F=null){this._platformStrategy.replaceState(F,"",C,T),this._notifyUrlChangeListeners(this.prepareExternalUrl(C+K(T)),F)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}historyGo(C=0){var T,F;null===(F=(T=this._platformStrategy).historyGo)||void 0===F||F.call(T,C)}onUrlChange(C){this._urlChangeListeners.push(C),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(T=>{this._notifyUrlChangeListeners(T.url,T.state)}))}_notifyUrlChangeListeners(C="",T){this._urlChangeListeners.forEach(F=>F(C,T))}subscribe(C,T,F){return this._subject.subscribe({next:C,error:T,complete:F})}}return y.\u0275fac=function(C){return new(C||y)(m.LFG(Oe),m.LFG(he))},y.normalizeQueryParams=K,y.joinWithSlash=te,y.stripTrailingSlash=ge,y.\u0275prov=(0,m.Yz7)({factory:Ut,token:y,providedIn:"root"}),y})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ut(){return new Vt((0,m.LFG)(Oe),(0,m.LFG)(he))}function ft(y){return y.replace(/\/index.html$/,"")}
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
var ut=(()=>((ut=ut||{})[ut.Zero=0]="Zero",ut[ut.One=1]="One",ut[ut.Two=2]="Two",ut[ut.Few=3]="Few",ut[ut.Many=4]="Many",ut[ut.Other=5]="Other",ut))();const pt=m.kL8;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ft{}let It=(()=>{class y extends Ft{constructor(C){super(),this.locale=C}getPluralCategory(C,T){switch(pt(T||this.locale)(C)){case ut.Zero:return"zero";case ut.One:return"one";case ut.Two:return"two";case ut.Few:return"few";case ut.Many:return"many";default:return"other"}}}return y.\u0275fac=function(C){return new(C||y)(m.LFG(m.soG))},y.\u0275prov=m.Yz7({token:y,factory:y.\u0275fac}),y})();
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
function mt(y,b){b=encodeURIComponent(b);for(const C of y.split(";")){const T=C.indexOf("="),[F,Q]=-1==T?[C,""]:[C.slice(0,T),C.slice(T+1)];if(F.trim()===b)return decodeURIComponent(Q)}return null}
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
class Ne{constructor(b,C,T,F){this.$implicit=b,this.ngForOf=C,this.index=T,this.count=F}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let je=(()=>{class y{constructor(C,T,F){this._viewContainer=C,this._template=T,this._differs=F,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(C){this._ngForOf=C,this._ngForOfDirty=!0}set ngForTrackBy(C){this._trackByFn=C}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(C){C&&(this._template=C)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const C=this._ngForOf;if(!this._differ&&C)try{this._differ=this._differs.find(C).create(this.ngForTrackBy)}catch(T){throw new Error(`Cannot find a differ supporting object '${C}' of type '${function(y){return y.name||typeof y}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(C)}'. NgFor only supports binding to Iterables such as Arrays.`)}}if(this._differ){const C=this._differ.diff(this._ngForOf);C&&this._applyChanges(C)}}_applyChanges(C){const T=[];C.forEachOperation((F,Q,re)=>{if(null==F.previousIndex){const xe=this._viewContainer.createEmbeddedView(this._template,new Ne(null,this._ngForOf,-1,-1),null===re?void 0:re),Pe=new en(F,xe);T.push(Pe)}else if(null==re)this._viewContainer.remove(null===Q?void 0:Q);else if(null!==Q){const xe=this._viewContainer.get(Q);this._viewContainer.move(xe,re);const Pe=new en(F,xe);T.push(Pe)}});for(let F=0;F<T.length;F++)this._perViewChange(T[F].view,T[F].record);for(let F=0,Q=this._viewContainer.length;F<Q;F++){const re=this._viewContainer.get(F);re.context.index=F,re.context.count=Q,re.context.ngForOf=this._ngForOf}C.forEachIdentityChange(F=>{this._viewContainer.get(F.currentIndex).context.$implicit=F.item})}_perViewChange(C,T){C.context.$implicit=T.item}static ngTemplateContextGuard(C,T){return!0}}return y.\u0275fac=function(C){return new(C||y)(m.Y36(m.s_b),m.Y36(m.Rgc),m.Y36(m.ZZ4))},y.\u0275dir=m.lG2({type:y,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),y})();class en{constructor(b,C){this.record=b,this.view=C}}let qt=(()=>{class y{constructor(C,T){this._viewContainer=C,this._context=new Qt,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=T}set ngIf(C){this._context.$implicit=this._context.ngIf=C,this._updateView()}set ngIfThen(C){fn("ngIfThen",C),this._thenTemplateRef=C,this._thenViewRef=null,this._updateView()}set ngIfElse(C){fn("ngIfElse",C),this._elseTemplateRef=C,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(C,T){return!0}}return y.\u0275fac=function(C){return new(C||y)(m.Y36(m.s_b),m.Y36(m.Rgc))},y.\u0275dir=m.lG2({type:y,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),y})();class Qt{constructor(){this.$implicit=null,this.ngIf=null}}function fn(y,b){if(b&&!b.createEmbeddedView)throw new Error(`${y} must be a TemplateRef, but received '${(0,m.AaK)(b)}'.`)}
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
let be=(()=>{class y{}return y.\u0275fac=function(C){return new(C||y)},y.\u0275mod=m.oAB({type:y}),y.\u0275inj=m.cJS({providers:[{provide:Ft,useClass:It}]}),y})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Te="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let v=(()=>{class y{}return y.\u0275prov=(0,m.Yz7)({token:y,providedIn:"root",factory:()=>new _((0,m.LFG)(fe),window)}),y})();class _{constructor(b,C){this.document=b,this.window=C,this.offset=()=>[0,0]}setOffset(b){this.offset=Array.isArray(b)?()=>b:b}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(b){this.supportsScrolling()&&this.window.scrollTo(b[0],b[1])}scrollToAnchor(b){if(!this.supportsScrolling())return;const C=function(y,b){const C=y.getElementById(b)||y.getElementsByName(b)[0];if(C)return C;if("function"==typeof y.createTreeWalker&&y.body&&(y.body.createShadowRoot||y.body.attachShadow)){const T=y.createTreeWalker(y.body,NodeFilter.SHOW_ELEMENT);let F=T.currentNode;for(;F;){const Q=F.shadowRoot;if(Q){const re=Q.getElementById(b)||Q.querySelector(`[name="${b}"]`);if(re)return re}F=T.nextNode()}}return null}(this.document,b);C&&(this.scrollToElement(C),this.attemptFocus(C))}setHistoryScrollRestoration(b){if(this.supportScrollRestoration()){const C=this.window.history;C&&C.scrollRestoration&&(C.scrollRestoration=b)}}scrollToElement(b){const C=b.getBoundingClientRect(),T=C.left+this.window.pageXOffset,F=C.top+this.window.pageYOffset,Q=this.offset();this.window.scrollTo(T-Q[0],F-Q[1])}attemptFocus(b){return b.focus(),this.document.activeElement===b}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const b=f(this.window.history)||f(Object.getPrototypeOf(this.window.history));return!(!b||!b.writable&&!b.set)}catch(b){return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch(b){return!1}}}function f(y){return Object.getOwnPropertyDescriptor(y,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Me{}
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
       */},1841:(He,ue,V)=>{"use strict";V.d(ue,{TP:()=>Bn,eN:()=>me,JF:()=>Wt});var m=V(8583),h=V(639),ce=V(5917),we=V(7574),de=V(4612),ie=V(5435),fe=V(8002);
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
       */class he{}class se{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class U{constructor(k){this.normalizedNames=new Map,this.lazyUpdate=null,k?this.lazyInit="string"==typeof k?()=>{this.headers=new Map,k.split("\n").forEach(B=>{const ne=B.indexOf(":");if(ne>0){const G=B.slice(0,ne),De=G.toLowerCase(),ae=B.slice(ne+1).trim();this.maybeSetNormalizedName(G,De),this.headers.has(De)?this.headers.get(De).push(ae):this.headers.set(De,[ae])}})}:()=>{this.headers=new Map,Object.keys(k).forEach(B=>{let ne=k[B];const G=B.toLowerCase();"string"==typeof ne&&(ne=[ne]),ne.length>0&&(this.headers.set(G,ne),this.maybeSetNormalizedName(B,G))})}:this.headers=new Map}has(k){return this.init(),this.headers.has(k.toLowerCase())}get(k){this.init();const B=this.headers.get(k.toLowerCase());return B&&B.length>0?B[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(k){return this.init(),this.headers.get(k.toLowerCase())||null}append(k,B){return this.clone({name:k,value:B,op:"a"})}set(k,B){return this.clone({name:k,value:B,op:"s"})}delete(k,B){return this.clone({name:k,value:B,op:"d"})}maybeSetNormalizedName(k,B){this.normalizedNames.has(B)||this.normalizedNames.set(B,k)}init(){this.lazyInit&&(this.lazyInit instanceof U?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(k=>this.applyUpdate(k)),this.lazyUpdate=null))}copyFrom(k){k.init(),Array.from(k.headers.keys()).forEach(B=>{this.headers.set(B,k.headers.get(B)),this.normalizedNames.set(B,k.normalizedNames.get(B))})}clone(k){const B=new U;return B.lazyInit=this.lazyInit&&this.lazyInit instanceof U?this.lazyInit:this,B.lazyUpdate=(this.lazyUpdate||[]).concat([k]),B}applyUpdate(k){const B=k.name.toLowerCase();switch(k.op){case"a":case"s":let ne=k.value;if("string"==typeof ne&&(ne=[ne]),0===ne.length)return;this.maybeSetNormalizedName(k.name,B);const G=("a"===k.op?this.headers.get(B):void 0)||[];G.push(...ne),this.headers.set(B,G);break;case"d":const De=k.value;if(De){let ae=this.headers.get(B);if(!ae)return;ae=ae.filter(Ee=>-1===De.indexOf(Ee)),0===ae.length?(this.headers.delete(B),this.normalizedNames.delete(B)):this.headers.set(B,ae)}else this.headers.delete(B),this.normalizedNames.delete(B)}}forEach(k){this.init(),Array.from(this.normalizedNames.keys()).forEach(B=>k(this.normalizedNames.get(B),this.headers.get(B)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class W{encodeKey(k){return ge(k)}encodeValue(k){return ge(k)}decodeKey(k){return decodeURIComponent(k)}decodeValue(k){return decodeURIComponent(k)}}const Z=/%(\d[a-f0-9])/gi,te={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function ge(ee){return encodeURIComponent(ee).replace(Z,(k,B)=>{var ne;return null!==(ne=te[B])&&void 0!==ne?ne:k})}function K(ee){return`${ee}`}class Oe{constructor(k={}){if(this.updates=null,this.cloneFrom=null,this.encoder=k.encoder||new W,k.fromString){if(k.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(ee,k){const B=new Map;return ee.length>0&&ee.replace(/^\?/,"").split("&").forEach(G=>{const De=G.indexOf("="),[ae,Ee]=-1==De?[k.decodeKey(G),""]:[k.decodeKey(G.slice(0,De)),k.decodeValue(G.slice(De+1))],We=B.get(ae)||[];We.push(Ee),B.set(ae,We)}),B}(k.fromString,this.encoder)}else k.fromObject?(this.map=new Map,Object.keys(k.fromObject).forEach(B=>{const ne=k.fromObject[B];this.map.set(B,Array.isArray(ne)?ne:[ne])})):this.map=null}has(k){return this.init(),this.map.has(k)}get(k){this.init();const B=this.map.get(k);return B?B[0]:null}getAll(k){return this.init(),this.map.get(k)||null}keys(){return this.init(),Array.from(this.map.keys())}append(k,B){return this.clone({param:k,value:B,op:"a"})}appendAll(k){const B=[];return Object.keys(k).forEach(ne=>{const G=k[ne];Array.isArray(G)?G.forEach(De=>{B.push({param:ne,value:De,op:"a"})}):B.push({param:ne,value:G,op:"a"})}),this.clone(B)}set(k,B){return this.clone({param:k,value:B,op:"s"})}delete(k,B){return this.clone({param:k,value:B,op:"d"})}toString(){return this.init(),this.keys().map(k=>{const B=this.encoder.encodeKey(k);return this.map.get(k).map(ne=>B+"="+this.encoder.encodeValue(ne)).join("&")}).filter(k=>""!==k).join("&")}clone(k){const B=new Oe({encoder:this.encoder});return B.cloneFrom=this.cloneFrom||this,B.updates=(this.updates||[]).concat(k),B}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(k=>this.map.set(k,this.cloneFrom.map.get(k))),this.updates.forEach(k=>{switch(k.op){case"a":case"s":const B=("a"===k.op?this.map.get(k.param):void 0)||[];B.push(K(k.value)),this.map.set(k.param,B);break;case"d":if(void 0===k.value){this.map.delete(k.param);break}{let ne=this.map.get(k.param)||[];const G=ne.indexOf(K(k.value));-1!==G&&ne.splice(G,1),ne.length>0?this.map.set(k.param,ne):this.map.delete(k.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Se{constructor(){this.map=new Map}set(k,B){return this.map.set(k,B),this}get(k){return this.map.has(k)||this.map.set(k,k.defaultValue()),this.map.get(k)}delete(k){return this.map.delete(k),this}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ve(ee){return"undefined"!=typeof ArrayBuffer&&ee instanceof ArrayBuffer}function Vt(ee){return"undefined"!=typeof Blob&&ee instanceof Blob}function Ut(ee){return"undefined"!=typeof FormData&&ee instanceof FormData}class ft{constructor(k,B,ne,G){let De;if(this.url=B,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=k.toUpperCase(),function(ee){switch(ee){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||G?(this.body=void 0!==ne?ne:null,De=G):De=ne,De&&(this.reportProgress=!!De.reportProgress,this.withCredentials=!!De.withCredentials,De.responseType&&(this.responseType=De.responseType),De.headers&&(this.headers=De.headers),De.context&&(this.context=De.context),De.params&&(this.params=De.params)),this.headers||(this.headers=new U),this.context||(this.context=new Se),this.params){const ae=this.params.toString();if(0===ae.length)this.urlWithParams=B;else{const Ee=B.indexOf("?");this.urlWithParams=B+(-1===Ee?"?":Ee<B.length-1?"&":"")+ae}}else this.params=new Oe,this.urlWithParams=B}serializeBody(){return null===this.body?null:ve(this.body)||Vt(this.body)||Ut(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof Oe?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||Ut(this.body)?null:Vt(this.body)?this.body.type||null:ve(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Oe?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(k={}){var B;const ne=k.method||this.method,G=k.url||this.url,De=k.responseType||this.responseType,ae=void 0!==k.body?k.body:this.body,Ee=void 0!==k.withCredentials?k.withCredentials:this.withCredentials,We=void 0!==k.reportProgress?k.reportProgress:this.reportProgress;let Dt=k.headers||this.headers,gt=k.params||this.params;const At=null!==(B=k.context)&&void 0!==B?B:this.context;return void 0!==k.setHeaders&&(Dt=Object.keys(k.setHeaders).reduce((Rt,Qe)=>Rt.set(Qe,k.setHeaders[Qe]),Dt)),k.setParams&&(gt=Object.keys(k.setParams).reduce((Rt,Qe)=>Rt.set(Qe,k.setParams[Qe]),gt)),new ft(ne,G,ae,{params:gt,headers:Dt,context:At,reportProgress:We,responseType:De,withCredentials:Ee})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var _e=(()=>((_e=_e||{})[_e.Sent=0]="Sent",_e[_e.UploadProgress=1]="UploadProgress",_e[_e.ResponseHeader=2]="ResponseHeader",_e[_e.DownloadProgress=3]="DownloadProgress",_e[_e.Response=4]="Response",_e[_e.User=5]="User",_e))();class Ze{constructor(k,B=200,ne="OK"){this.headers=k.headers||new U,this.status=void 0!==k.status?k.status:B,this.statusText=k.statusText||ne,this.url=k.url||null,this.ok=this.status>=200&&this.status<300}}class ut extends Ze{constructor(k={}){super(k),this.type=_e.ResponseHeader}clone(k={}){return new ut({headers:k.headers||this.headers,status:void 0!==k.status?k.status:this.status,statusText:k.statusText||this.statusText,url:k.url||this.url||void 0})}}class Ke extends Ze{constructor(k={}){super(k),this.type=_e.Response,this.body=void 0!==k.body?k.body:null}clone(k={}){return new Ke({body:void 0!==k.body?k.body:this.body,headers:k.headers||this.headers,status:void 0!==k.status?k.status:this.status,statusText:k.statusText||this.statusText,url:k.url||this.url||void 0})}}class ke extends Ze{constructor(k){super(k,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${k.url||"(unknown url)"}`:`Http failure response for ${k.url||"(unknown url)"}: ${k.status} ${k.statusText}`,this.error=k.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ie(ee,k){return{body:k,headers:ee.headers,context:ee.context,observe:ee.observe,params:ee.params,reportProgress:ee.reportProgress,responseType:ee.responseType,withCredentials:ee.withCredentials}}let me=(()=>{class ee{constructor(B){this.handler=B}request(B,ne,G={}){let De;if(B instanceof ft)De=B;else{let We,Dt;We=G.headers instanceof U?G.headers:new U(G.headers),G.params&&(Dt=G.params instanceof Oe?G.params:new Oe({fromObject:G.params})),De=new ft(B,ne,void 0!==G.body?G.body:null,{headers:We,context:G.context,params:Dt,reportProgress:G.reportProgress,responseType:G.responseType||"json",withCredentials:G.withCredentials})}const ae=(0,ce.of)(De).pipe((0,de.b)(We=>this.handler.handle(We)));if(B instanceof ft||"events"===G.observe)return ae;const Ee=ae.pipe((0,ie.h)(We=>We instanceof Ke));switch(G.observe||"body"){case"body":switch(De.responseType){case"arraybuffer":return Ee.pipe((0,fe.U)(We=>{if(null!==We.body&&!(We.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return We.body}));case"blob":return Ee.pipe((0,fe.U)(We=>{if(null!==We.body&&!(We.body instanceof Blob))throw new Error("Response is not a Blob.");return We.body}));case"text":return Ee.pipe((0,fe.U)(We=>{if(null!==We.body&&"string"!=typeof We.body)throw new Error("Response is not a string.");return We.body}));case"json":default:return Ee.pipe((0,fe.U)(We=>We.body))}case"response":return Ee;default:throw new Error(`Unreachable: unhandled observe type ${G.observe}}`)}}delete(B,ne={}){return this.request("DELETE",B,ne)}get(B,ne={}){return this.request("GET",B,ne)}head(B,ne={}){return this.request("HEAD",B,ne)}jsonp(B,ne){return this.request("JSONP",B,{params:(new Oe).append(ne,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(B,ne={}){return this.request("OPTIONS",B,ne)}patch(B,ne,G={}){return this.request("PATCH",B,Ie(G,ne))}post(B,ne,G={}){return this.request("POST",B,Ie(G,ne))}put(B,ne,G={}){return this.request("PUT",B,Ie(G,ne))}}return ee.\u0275fac=function(B){return new(B||ee)(h.LFG(he))},ee.\u0275prov=h.Yz7({token:ee,factory:ee.\u0275fac}),ee})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Mt{constructor(k,B){this.next=k,this.interceptor=B}handle(k){return this.interceptor.intercept(k,this.next)}}const Bn=new h.OlP("HTTP_INTERCEPTORS");let sr=(()=>{class ee{intercept(B,ne){return ne.handle(B)}}return ee.\u0275fac=function(B){return new(B||ee)},ee.\u0275prov=h.Yz7({token:ee,factory:ee.\u0275fac}),ee})();
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
const un=/^\)\]\}',?\n/;let ht=(()=>{class ee{constructor(B){this.xhrFactory=B}handle(B){if("JSONP"===B.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new we.y(ne=>{const G=this.xhrFactory.build();if(G.open(B.method,B.urlWithParams),B.withCredentials&&(G.withCredentials=!0),B.headers.forEach((Qe,Ce)=>G.setRequestHeader(Qe,Ce.join(","))),B.headers.has("Accept")||G.setRequestHeader("Accept","application/json, text/plain, */*"),!B.headers.has("Content-Type")){const Qe=B.detectContentTypeHeader();null!==Qe&&G.setRequestHeader("Content-Type",Qe)}if(B.responseType){const Qe=B.responseType.toLowerCase();G.responseType="json"!==Qe?Qe:"text"}const De=B.serializeBody();let ae=null;const Ee=()=>{if(null!==ae)return ae;const Qe=1223===G.status?204:G.status,Ce=G.statusText||"OK",xn=new U(G.getAllResponseHeaders()),Ue=function(ee){return"responseURL"in ee&&ee.responseURL?ee.responseURL:/^X-Request-URL:/m.test(ee.getAllResponseHeaders())?ee.getResponseHeader("X-Request-URL"):null}(G)||B.url;return ae=new ut({headers:xn,status:Qe,statusText:Ce,url:Ue}),ae},We=()=>{let{headers:Qe,status:Ce,statusText:xn,url:Ue}=Ee(),Ot=null;204!==Ce&&(Ot=void 0===G.response?G.responseText:G.response),0===Ce&&(Ce=Ot?200:0);let Lt=Ce>=200&&Ce<300;if("json"===B.responseType&&"string"==typeof Ot){const ct=Ot;Ot=Ot.replace(un,"");try{Ot=""!==Ot?JSON.parse(Ot):null}catch(Jn){Ot=ct,Lt&&(Lt=!1,Ot={error:Jn,text:Ot})}}Lt?(ne.next(new Ke({body:Ot,headers:Qe,status:Ce,statusText:xn,url:Ue||void 0})),ne.complete()):ne.error(new ke({error:Ot,headers:Qe,status:Ce,statusText:xn,url:Ue||void 0}))},Dt=Qe=>{const{url:Ce}=Ee(),xn=new ke({error:Qe,status:G.status||0,statusText:G.statusText||"Unknown Error",url:Ce||void 0});ne.error(xn)};let gt=!1;const At=Qe=>{gt||(ne.next(Ee()),gt=!0);let Ce={type:_e.DownloadProgress,loaded:Qe.loaded};Qe.lengthComputable&&(Ce.total=Qe.total),"text"===B.responseType&&!!G.responseText&&(Ce.partialText=G.responseText),ne.next(Ce)},Rt=Qe=>{let Ce={type:_e.UploadProgress,loaded:Qe.loaded};Qe.lengthComputable&&(Ce.total=Qe.total),ne.next(Ce)};return G.addEventListener("load",We),G.addEventListener("error",Dt),G.addEventListener("timeout",Dt),G.addEventListener("abort",Dt),B.reportProgress&&(G.addEventListener("progress",At),null!==De&&G.upload&&G.upload.addEventListener("progress",Rt)),G.send(De),ne.next({type:_e.Sent}),()=>{G.removeEventListener("error",Dt),G.removeEventListener("abort",Dt),G.removeEventListener("load",We),G.removeEventListener("timeout",Dt),B.reportProgress&&(G.removeEventListener("progress",At),null!==De&&G.upload&&G.upload.removeEventListener("progress",Rt)),G.readyState!==G.DONE&&G.abort()}})}}return ee.\u0275fac=function(B){return new(B||ee)(h.LFG(m.JF))},ee.\u0275prov=h.Yz7({token:ee,factory:ee.\u0275fac}),ee})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Je=new h.OlP("XSRF_COOKIE_NAME"),Hn=new h.OlP("XSRF_HEADER_NAME");class Mn{}let ar=(()=>{class ee{constructor(B,ne,G){this.doc=B,this.platform=ne,this.cookieName=G,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const B=this.doc.cookie||"";return B!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,m.Mx)(B,this.cookieName),this.lastCookieString=B),this.lastToken}}return ee.\u0275fac=function(B){return new(B||ee)(h.LFG(m.K0),h.LFG(h.Lbi),h.LFG(Je))},ee.\u0275prov=h.Yz7({token:ee,factory:ee.\u0275fac}),ee})(),pt=(()=>{class ee{constructor(B,ne){this.tokenService=B,this.headerName=ne}intercept(B,ne){const G=B.url.toLowerCase();if("GET"===B.method||"HEAD"===B.method||G.startsWith("http://")||G.startsWith("https://"))return ne.handle(B);const De=this.tokenService.getToken();return null!==De&&!B.headers.has(this.headerName)&&(B=B.clone({headers:B.headers.set(this.headerName,De)})),ne.handle(B)}}return ee.\u0275fac=function(B){return new(B||ee)(h.LFG(Mn),h.LFG(Hn))},ee.\u0275prov=h.Yz7({token:ee,factory:ee.\u0275fac}),ee})(),br=(()=>{class ee{constructor(B,ne){this.backend=B,this.injector=ne,this.chain=null}handle(B){if(null===this.chain){const ne=this.injector.get(Bn,[]);this.chain=ne.reduceRight((G,De)=>new Mt(G,De),this.backend)}return this.chain.handle(B)}}return ee.\u0275fac=function(B){return new(B||ee)(h.LFG(se),h.LFG(h.zs3))},ee.\u0275prov=h.Yz7({token:ee,factory:ee.\u0275fac}),ee})(),wr=(()=>{class ee{static disable(){return{ngModule:ee,providers:[{provide:pt,useClass:sr}]}}static withOptions(B={}){return{ngModule:ee,providers:[B.cookieName?{provide:Je,useValue:B.cookieName}:[],B.headerName?{provide:Hn,useValue:B.headerName}:[]]}}}return ee.\u0275fac=function(B){return new(B||ee)},ee.\u0275mod=h.oAB({type:ee}),ee.\u0275inj=h.cJS({providers:[pt,{provide:Bn,useExisting:pt,multi:!0},{provide:Mn,useClass:ar},{provide:Je,useValue:"XSRF-TOKEN"},{provide:Hn,useValue:"X-XSRF-TOKEN"}]}),ee})(),Wt=(()=>{class ee{}return ee.\u0275fac=function(B){return new(B||ee)},ee.\u0275mod=h.oAB({type:ee}),ee.\u0275inj=h.cJS({providers:[me,{provide:he,useClass:br},ht,{provide:se,useExisting:ht}],imports:[[wr.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),ee})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */,639:(He,ue,V)=>{"use strict";V.d(ue,{deG:()=>J,tb:()=>Oy,AFp:()=>Sy,ip1:()=>Ld,CZH:()=>Ns,hGG:()=>vA,z2F:()=>Pa,sBO:()=>sw,Sil:()=>Na,_Vd:()=>Ri,EJc:()=>Py,SBq:()=>Io,qLn:()=>rs,vpe:()=>To,gxx:()=>us,tBr:()=>Xi,XFs:()=>G,OlP:()=>P,zs3:()=>wt,ZZ4:()=>zl,aQg:()=>Yl,soG:()=>ou,YKP:()=>bm,v3s:()=>XM,h0i:()=>Oi,PXZ:()=>YM,R0b:()=>Cr,FiY:()=>$o,Lbi:()=>Ry,g9A:()=>xy,Qsj:()=>Wb,FYo:()=>Wl,JOm:()=>Eo,Tiy:()=>fd,q3G:()=>Jt,tp0:()=>ii,EAV:()=>rA,Rgc:()=>Da,dDg:()=>Ly,DyG:()=>pl,GfV:()=>gm,s_b:()=>Zl,ifc:()=>Ce,eFA:()=>Gy,G48:()=>BM,Gpc:()=>Se,_c5:()=>hA,VLi:()=>jM,c2e:()=>Ny,zSh:()=>ua,wAp:()=>Ve,vHH:()=>Ut,EiD:()=>Vf,mCW:()=>ta,qzn:()=>ns,JVY:()=>Q_,pB0:()=>X_,eBb:()=>K_,L6k:()=>Z_,LAX:()=>J_,cg1:()=>rd,Tjo:()=>dA,kL8:()=>kg,yhl:()=>Tf,dqk:()=>ct,sIi:()=>fa,CqO:()=>qc,QGY:()=>Yc,F4k:()=>Wp,RDi:()=>Q,AaK:()=>K,z3N:()=>Go,qOj:()=>Nc,TTD:()=>Gr,_Bn:()=>cm,xp6:()=>vh,uIk:()=>Vc,ekj:()=>Jc,Suo:()=>sy,Xpm:()=>cr,lG2:()=>Xn,Yz7:()=>pt,cJS:()=>vt,oAB:()=>Gn,Yjl:()=>rn,Y36:()=>pa,_UZ:()=>$p,BQk:()=>zc,ynx:()=>Wc,qZA:()=>Gc,TgZ:()=>$c,EpF:()=>Gp,n5z:()=>fl,Ikx:()=>nd,LFG:()=>ln,$8M:()=>Qs,NdJ:()=>Qc,CRH:()=>ay,oxw:()=>Qp,Q6J:()=>Uc,VKq:()=>Km,iGM:()=>iy,MAs:()=>Rp,CHM:()=>fi,LSH:()=>Wu,kYT:()=>Ar,YNc:()=>xp,W1O:()=>dy,_uU:()=>Cg,Oqu:()=>ed,hij:()=>Ll,AsE:()=>td});var m=V(7574),h=V(4869),ce=V(3282),we=V(6693),ie=V(7709),fe=V(5319),he=V(2441);var W=V(1307);function H(){return new ie.xQ}
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
function te(e){for(let t in e)if(e[t]===te)return t;throw Error("Could not find renamed property on target object.")}function ge(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function K(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(K).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function Oe(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const et=te({__forward_ref__:te});function Se(e){return e.__forward_ref__=Se,e.toString=function(){return K(this())},e}function pe(e){return ve(e)?e():e}function ve(e){return"function"==typeof e&&e.hasOwnProperty(et)&&e.__forward_ref__===Se}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ut extends Error{constructor(t,n){super(function(e,t){return`${e?`NG0${e}: `:""}${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,n)),this.code=t}}function _e(e){return"string"==typeof e?e:null==e?"":String(e)}function Ze(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():_e(e)}function Ie(e,t){const n=t?` in ${t}`:"";throw new Ut("201",`No provider for ${Ze(e)} found${n}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ht(e,t){null==e&&function(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function pt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function vt(e){return{providers:e.providers||[],imports:e.imports||[]}}function kt(e){return wr(e,ee)||wr(e,B)}function wr(e,t){return e.hasOwnProperty(t)?e[t]:null}function Mr(e){return e&&(e.hasOwnProperty(k)||e.hasOwnProperty(ne))?e[k]:null}const ee=te({\u0275prov:te}),k=te({\u0275inj:te}),B=te({ngInjectableDef:te}),ne=te({ngInjectorDef:te});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var G=(()=>((G=G||{})[G.Default=0]="Default",G[G.Host=1]="Host",G[G.Self=2]="Self",G[G.SkipSelf=4]="SkipSelf",G[G.Optional=8]="Optional",G))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let De;function Ee(e){const t=De;return De=e,t}function We(e,t,n){const r=kt(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&G.Optional?null:void 0!==t?t:void Ie(K(e),"Injector")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function gt(e){return{toString:e}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var At=(()=>((At=At||{})[At.OnPush=0]="OnPush",At[At.Default=1]="Default",At))(),Ce=(()=>((Ce=Ce||{})[Ce.Emulated=0]="Emulated",Ce[Ce.None=2]="None",Ce[Ce.ShadowDom=3]="ShadowDom",Ce))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const xn="undefined"!=typeof globalThis&&globalThis,Ue="undefined"!=typeof window&&window,Ot="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Lt="undefined"!=typeof global&&global,ct=xn||Lt||Ue||Ot,yn={},rt=[],_n=te({\u0275cmp:te}),$n=te({\u0275dir:te}),An=te({\u0275pipe:te}),Rn=te({\u0275mod:te}),Ro=te({\u0275loc:te}),cn=te({\u0275fac:te}),ur=te({__NG_ELEMENT_ID__:te});
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
let Lr=0;function cr(e){return gt(()=>{const n={},r={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===At.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||rt,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Ce.Emulated,id:"c",styles:e.styles||rt,_:null,setInput:null,schemas:e.schemas||null,tView:null},o=e.directives,i=e.features,s=e.pipes;return r.id+=Lr++,r.inputs=Ir(e.inputs,n),r.outputs=Ir(e.outputs),i&&i.forEach(a=>a(r)),r.directiveDefs=o?()=>("function"==typeof o?o():o).map(dr):null,r.pipeDefs=s?()=>("function"==typeof s?s():s).map(yt):null,r})}function dr(e){return Nt(e)||function(e){return e[$n]||null}(e)}function yt(e){return function(e){return e[An]||null}(e)}const dn={};function Gn(e){return gt(()=>{const t={type:e.type,bootstrap:e.bootstrap||rt,declarations:e.declarations||rt,imports:e.imports||rt,exports:e.exports||rt,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(dn[e.id]=e.type),t})}function Ar(e,t){return gt(()=>{const n=on(e,!0);n.declarations=t.declarations||rt,n.imports=t.imports||rt,n.exports=t.exports||rt})}function Ir(e,t){if(null==e)return yn;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const Xn=cr;function rn(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function Nt(e){return e[_n]||null}function on(e,t){const n=e[Rn]||null;if(!n&&!0===t)throw new Error(`Type ${K(e)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Dn(e){return Array.isArray(e)&&"object"==typeof e[1]}function sn(e){return Array.isArray(e)&&!0===e[1]}function tr(e){return 0!=(8&e.flags)}function Br(e){return 2==(2&e.flags)}function nr(e){return 1==(1&e.flags)}function an(e){return null!==e.template}function fo(e){return 0!=(512&e[2])}
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
function pr(e,t){return e.hasOwnProperty(cn)?e[cn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ci{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Gr(){return po}function po(e){return e.type.prototype.ngOnChanges&&(e.setInput=_),v}function v(){const e=M(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===yn)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function _(e,t,n,r){const o=M(e)||function(e,t){return e[f]=t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,{previous:yn,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],c=s[a];i[a]=new ci(c&&c.currentValue,t,s===yn),e[r]=t}Gr.ngInherit=!0;const f="__ngSimpleChanges__";function M(e){return e[f]||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let F;function Q(e){F=e}function Pe(e){return!!e.listen}const Et={createRenderer:(e,t)=>void 0!==F?F:"undefined"!=typeof document?document:void 0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xe(e){for(;Array.isArray(e);)e=e[0];return e}function xr(e,t){return Xe(t[e])}function Tt(e,t){return Xe(t[e.index])}function Rr(e,t){return e.data[t]}function hn(e,t){const n=t[e];return Dn(n)?n:n[0]}function zr(e){return 4==(4&e[2])}function Fo(e){return 128==(128&e[2])}function Yr(e,t){return null==t?null:e[t]}function Ua(e){e[18]=0}function Bs(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const Le={lFrame:Qa(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function di(){return Le.bindingsEnabled}function oe(){return Le.lFrame.lView}function at(){return Le.lFrame.tView}function fi(e){return Le.lFrame.contextLView=e,e[8]}function Zt(){let e=Us();for(;null!==e&&64===e.type;)e=e.parent;return e}function Us(){return Le.lFrame.currentTNode}function mr(e,t){const n=Le.lFrame;n.currentTNode=e,n.isParent=t}function Jo(){return Le.lFrame.isParent}function Li(){Le.lFrame.isParent=!1}function ji(){return Le.isInCheckNoChangesMode}function Bi(e){Le.isInCheckNoChangesMode=e}function Vo(){return Le.lFrame.bindingIndex++}function or(e){const t=Le.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function Ui(e,t){const n=Le.lFrame;n.bindingIndex=n.bindingRootIndex=e,ko(t)}function ko(e){Le.lFrame.currentDirectiveIndex=e}function za(){return Le.lFrame.currentQueryIndex}function Lo(e){Le.lFrame.currentQueryIndex=e}function vu(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Ya(e,t,n){if(n&G.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&G.Host||(o=vu(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=Le.lFrame=qa();return r.currentTNode=t,r.lView=e,!0}function Hi(e){const t=qa(),n=e[1];Le.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function qa(){const e=Le.lFrame,t=null===e?null:e.child;return null===t?Qa(e):t}function Qa(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Za(){const e=Le.lFrame;return Le.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Ka=Za;function $i(){const e=Za();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Sn(){return Le.lFrame.selectedIndex}function go(e){Le.lFrame.selectedIndex=e}function $t(){const e=Le.lFrame;return Rr(e.tView,e.selectedIndex)}function hi(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:g,ngOnDestroy:E}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),a&&((e.contentHooks||(e.contentHooks=[])).push(n,a),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,a)),c&&(e.viewHooks||(e.viewHooks=[])).push(-n,c),g&&((e.viewHooks||(e.viewHooks=[])).push(n,g),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,g)),null!=E&&(e.destroyHooks||(e.destroyHooks=[])).push(n,E)}}function pi(e,t,n){nl(e,t,3,n)}function Gi(e,t,n,r){(3&e[2])===n&&nl(e,t,n,r)}function $s(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function nl(e,t,n,r){const i=null!=r?r:-1,s=t.length-1;let a=0;for(let c=void 0!==r?65535&e[18]:0;c<s;c++)if("number"==typeof t[c+1]){if(a=t[c],null!=r&&a>=r)break}else t[c]<0&&(e[18]+=65536),(a<i||-1==i)&&(wu(e,n,t,c),e[18]=(4294901760&e[18])+c+2),c++}function wu(e,t,n,r){const o=n[r]<0,i=n[r+1],a=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(a)}finally{}}}else try{i.call(a)}finally{}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class jo{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function Wi(e,t,n){const r=Pe(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],a=n[o++],c=n[o++];r?e.setAttribute(t,a,c,s):t.setAttributeNS(s,a,c)}else{const s=i,a=n[++o];Gs(s)?r&&e.setProperty(t,s,a):r?e.setAttribute(t,s,a):t.setAttribute(s,a),o++}}return o}function ol(e){return 3===e||4===e||6===e}function Gs(e){return 64===e.charCodeAt(0)}function _i(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||il(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function il(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const a=e[i++];if("number"==typeof a){if(a===t){s=-1;break}if(a>t){s=i-1;break}}}for(;i<e.length;){const a=e[i];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function sl(e){return-1!==e}function Kt(e){return 32767&e}function Qr(e,t){let n=function(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ci=!0;function Bo(e){const t=Ci;return Ci=e,t}let Ws=0;function Xo(e,t){const n=zi(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,zs(r.data,e),zs(t,null),zs(r.blueprint,null));const o=Di(e,t),i=e.injectorIndex;if(sl(o)){const s=Kt(o),a=Qr(o,t),c=a[1].data;for(let g=0;g<8;g++)t[i+g]=a[s+g]|c[s+g]}return t[i+8]=o,i}function zs(e,t){e.push(0,0,0,0,0,0,0,0,t)}function zi(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Di(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const i=o[1],s=i.type;if(r=2===s?i.declTNode:1===s?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function ei(e,t,n){!function(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(ur)&&(r=n[ur]),null==r&&(r=n[ur]=Ws++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function yo(e,t,n){if(n&G.Optional)return e;Ie(t,"NodeInjector")}function Ys(e,t,n,r){if(n&G.Optional&&void 0===r&&(r=null),0==(n&(G.Self|G.Host))){const o=e[9],i=Ee(void 0);try{return o?o.get(t,r,n&G.Optional):We(t,r,n&G.Optional)}finally{Ee(i)}}return yo(r,t,n)}function ul(e,t,n,r=G.Default,o){if(null!==e){const i=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(ur)?e[ur]:void 0;return"number"==typeof t?t>=0?255&t:xu:t}(n);if("function"==typeof i){if(!Ya(t,e,r))return r&G.Host?yo(o,n,r):Ys(t,n,r,o);try{const s=i(r);if(null!=s||r&G.Optional)return s;Ie(n)}finally{Ka()}}else if("number"==typeof i){let s=null,a=zi(e,t),c=-1,g=r&G.Host?t[16][6]:null;for((-1===a||r&G.SkipSelf)&&(c=-1===a?Di(e,t):t[a+8],-1!==c&&dl(r,!1)?(s=t[1],a=Kt(c),t=Qr(c,t)):a=-1);-1!==a;){const E=t[1];if(qs(i,a,E.data)){const I=Ru(a,t,n,s,r,g);if(I!==cl)return I}c=t[a+8],-1!==c&&dl(r,t[1].data[a+8]===g)&&qs(i,a,t)?(s=E,a=Kt(c),t=Qr(c,t)):a=-1}}}return Ys(t,n,r,o)}const cl={};function xu(){return new ti(Zt(),oe())}function Ru(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],E=Yi(a,s,n,null==r?Br(a)&&Ci:r!=s&&0!=(3&a.type),o&G.Host&&i===a);return null!==E?Ei(t,s,E,a):cl}function Yi(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,c=e.directiveStart,E=i>>20,S=o?a+E:e.directiveEnd;for(let N=r?a:a+E;N<S;N++){const j=s[N];if(N<c&&n===j||N>=c&&j.type===n)return N}if(o){const N=s[c];if(N&&an(N)&&N.type===n)return c}return null}function Ei(e,t,n,r){let o=e[n];const i=t.data;if(function(e){return e instanceof jo}(o)){const s=o;s.resolving&&function(e,t){throw new Ut("200",`Circular dependency in DI detected for ${e}`)}(Ze(i[n]));const a=Bo(s.canSeeViewProviders);s.resolving=!0;const c=s.injectImpl?Ee(s.injectImpl):null;Ya(e,r,G.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=po(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==c&&Ee(c),Bo(a),s.resolving=!1,Ka()}}return o}function qs(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function dl(e,t){return!(e&G.Self||e&G.Host&&t)}class ti{constructor(t,n){this._tNode=t,this._lView=n}get(t,n){return ul(this._tNode,this._lView,t,void 0,n)}}function fl(e){return gt(()=>{const t=e.prototype.constructor,n=t[cn]||bi(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[cn]||bi(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function bi(e){return ve(e)?()=>{const t=bi(pe(e));return t&&t()}:pr(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qs(e){return function(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(ol(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Zt(),e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Uo="__parameters__";function u(e,t,n){return gt(()=>{const r=function(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return a.annotation=s,a;function a(c,g,E){const I=c.hasOwnProperty(Uo)?c[Uo]:Object.defineProperty(c,Uo,{value:[]})[Uo];for(;I.length<=E;)I.push(null);return(I[E]=I[E]||[]).push(s),c}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class P{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=pt({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const J=new P("AnalyzeForEntryComponents"),pl=Function;function Or(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),Or(r,t)):t!==e&&t.push(r)}return t}function Co(e,t){e.forEach(n=>Array.isArray(n)?Co(n,t):t(n))}function ml(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Mi(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function yr(e,t,n){let r=Zi(e,t);return r>=0?e[1|r]=n:(r=~r,function(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Nu(e,t){const n=Zi(e,t);if(n>=0)return e[1|n]}function Zi(e,t){return function(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,t,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ks={},Fu="__NG_DI_FLAG__",Ki="ngTempTokenPath",x_=/\n/gm,Vu="__source",ku=te({provide:String,useValue:te});let Js;function Ji(e){const t=Js;return Js=e,t}function O_(e,t=G.Default){if(void 0===Js)throw new Error("inject() must be called from an injection context");return null===Js?We(e,void 0,t):Js.get(e,t&G.Optional?null:void 0,t)}function ln(e,t=G.Default){return(De||O_)(pe(e),t)}function Ai(e){const t=[];for(let n=0;n<e.length;n++){const r=pe(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let o,i=G.Default;for(let s=0;s<r.length;s++){const a=r[s],c=N_(a);"number"==typeof c?-1===c?o=a.token:i|=c:o=a}t.push(ln(o,i))}else t.push(ln(r))}return t}function Xs(e,t){return e[Fu]=t,e.prototype[Fu]=t,e}function N_(e){return e[Fu]}function vf(e,t,n,r){const o=e[Ki];throw t[Vu]&&o.unshift(t[Vu]),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=K(t);if(Array.isArray(t))o=t.map(K).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+("string"==typeof a?JSON.stringify(a):K(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(x_,"\n  ")}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */("\n"+e.message,o,n,r),e.ngTokenPath=o,e[Ki]=null,e}const Xi=Xs(u("Inject",e=>({token:e})),-1),$o=Xs(u("Optional"),8),ii=Xs(u("SkipSelf"),4);
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
let vl;function ts(e){var t;return(null===(t=function(){if(void 0===vl&&(vl=null,ct.trustedTypes))try{vl=ct.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch(e){}return vl}())||void 0===t?void 0:t.createHTML(e))||e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ii{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class G_ extends Ii{getTypeName(){return"HTML"}}class W_ extends Ii{getTypeName(){return"Style"}}class z_ extends Ii{getTypeName(){return"Script"}}class Y_ extends Ii{getTypeName(){return"URL"}}class q_ extends Ii{getTypeName(){return"ResourceURL"}}function Go(e){return e instanceof Ii?e.changingThisBreaksApplicationSecurity:e}function ns(e,t){const n=Tf(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}function Tf(e){return e instanceof Ii&&e.getTypeName()||null}function Q_(e){return new G_(e)}function Z_(e){return new W_(e)}function K_(e){return new z_(e)}function J_(e){return new Y_(e)}function X_(e){return new q_(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class eC{constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{const n=(new window.DOMParser).parseFromString(ts(t),"text/html").body;return null===n?this.inertDocumentHelper.getInertBodyElement(t):(n.removeChild(n.firstChild),n)}catch(n){return null}}}class tC{constructor(t){if(this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const n=this.inertDocument.createElement("html");this.inertDocument.appendChild(n);const r=this.inertDocument.createElement("body");n.appendChild(r)}}getInertBodyElement(t){const n=this.inertDocument.createElement("template");if("content"in n)return n.innerHTML=ts(t),n;const r=this.inertDocument.createElement("body");return r.innerHTML=ts(t),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(r),r}stripCustomNsAttrs(t){const n=t.attributes;for(let o=n.length-1;0<o;o--){const s=n.item(o).name;("xmlns:ns1"===s||0===s.indexOf("ns1:"))&&t.removeAttribute(s)}let r=t.firstChild;for(;r;)r.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(r),r=r.nextSibling}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const rC=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,oC=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function ta(e){return(e=String(e)).match(rC)||e.match(oC)?e:"unsafe:"+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function vo(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function na(...e){const t={};for(const n of e)for(const r in n)n.hasOwnProperty(r)&&(t[r]=!0);return t}const Rf=vo("area,br,col,hr,img,wbr"),Of=vo("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Nf=vo("rp,rt"),Uu=na(Rf,na(Of,vo("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),na(Nf,vo("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),na(Nf,Of)),Hu=vo("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),$u=vo("srcset"),Pf=na(Hu,$u,vo("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),vo("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),iC=vo("script,style,template");class sC{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(t){let n=t.firstChild,r=!0;for(;n;)if(n.nodeType===Node.ELEMENT_NODE?r=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,r&&n.firstChild)n=n.firstChild;else for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let o=this.checkClobberedElement(n,n.nextSibling);if(o){n=o;break}n=this.checkClobberedElement(n,n.parentNode)}return this.buf.join("")}startElement(t){const n=t.nodeName.toLowerCase();if(!Uu.hasOwnProperty(n))return this.sanitizedSomething=!0,!iC.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);const r=t.attributes;for(let o=0;o<r.length;o++){const i=r.item(o),s=i.name,a=s.toLowerCase();if(!Pf.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=i.value;Hu[a]&&(c=ta(c)),$u[a]&&(e=c,c=(e=String(e)).split(",").map(t=>ta(t.trim())).join(", ")),this.buf.push(" ",s,'="',Ff(c),'"')}var e;return this.buf.push(">"),!0}endElement(t){const n=t.nodeName.toLowerCase();Uu.hasOwnProperty(n)&&!Rf.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(t){this.buf.push(Ff(t))}checkClobberedElement(t,n){if(n&&(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);return n}}const aC=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,lC=/([^\#-~ |!])/g;function Ff(e){return e.replace(/&/g,"&amp;").replace(aC,function(t){return"&#"+(1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320)+65536)+";"}).replace(lC,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let El;function Vf(e,t){let n=null;try{El=El||function(e){const t=new tC(e);return function(){try{return!!(new window.DOMParser).parseFromString(ts(""),"text/html")}catch(e){return!1}}()?new eC(t):t}(e);let r=t?String(t):"";n=El.getInertBodyElement(r);let o=5,i=r;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=El.getInertBodyElement(r)}while(r!==i);return ts((new sC).sanitizeChildren(Gu(n)||n))}finally{if(n){const r=Gu(n)||n;for(;r.firstChild;)r.removeChild(r.firstChild)}}}function Gu(e){return"content"in e&&function(e){return e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.nodeName}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)?e.content:null}var Jt=(()=>((Jt=Jt||{})[Jt.NONE=0]="NONE",Jt[Jt.HTML=1]="HTML",Jt[Jt.STYLE=2]="STYLE",Jt[Jt.SCRIPT=3]="SCRIPT",Jt[Jt.URL=4]="URL",Jt[Jt.RESOURCE_URL=5]="RESOURCE_URL",Jt))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Wu(e){const t=function(){const e=oe();return e&&e[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();return t?t.sanitize(Jt.URL,e)||"":ns(e,"URL")?Go(e):ta(_e(e))}const jf="__ngContext__";function Vn(e,t){e[jf]=t}function Yu(e){const t=function(e){return e[jf]||null}(e);return t?Array.isArray(t)?t:t.lView:null}function bl(e){return e.ngOriginalError}function AC(e,...t){e.error(...t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rs{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t),r=this._findContext(t),o=(e=t)&&e.ngErrorLogger||AC;var e;o(this._console,"ERROR",t),n&&o(this._console,"ORIGINAL ERROR",n),r&&o(this._console,"ERROR CONTEXT",r)}_findContext(t){return t?t.ngDebugContext||this._findContext(bl(t)):null}_findOriginalError(t){let n=t&&bl(t);for(;n&&bl(n);)n=bl(n);return n||null}}
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
const qf=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(ct))();function Do(e){return e instanceof Function?e():e}
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
var Eo=(()=>((Eo=Eo||{})[Eo.Important=1]="Important",Eo[Eo.DashCase=2]="DashCase",Eo))();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Zu(e,t){return undefined(e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ia(e){const t=e[3];return sn(t)?t[3]:t}function Ku(e){return Xf(e[13])}function Ju(e){return Xf(e[4])}function Xf(e){for(;null!==e&&!sn(e);)e=e[4];return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function is(e,t,n,r,o){if(null!=r){let i,s=!1;sn(r)?i=r:Dn(r)&&(s=!0,r=r[0]);const a=Xe(r);0===e&&null!==n?null==o?ih(t,n,a):Ti(t,n,a,o||null,!0):1===e&&null!==n?Ti(t,n,a,o||null,!0):2===e?function(e,t,n){const r=Ml(e,t);r&&function(e,t,n,r){Pe(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function(e,t,n,r,o){const i=n[7];i!==Xe(n)&&is(t,e,r,i,o);for(let a=10;a<n.length;a++){const c=n[a];sa(c[1],c,e,t,r,i)}}(t,e,i,n,o)}}function ec(e,t,n){return Pe(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function th(e,t){const n=e[9],r=n.indexOf(t),o=t[3];1024&t[2]&&(t[2]&=-1025,Bs(o,-1)),n.splice(r,1)}function tc(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&th(o,r),t>0&&(e[n-1][4]=r[4]);const i=Mi(e,10+t);!function(e,t){sa(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function nh(e,t){if(!(256&t[2])){const n=t[11];Pe(n)&&n.destroyNode&&sa(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return nc(e[1],e);for(;t;){let n=null;if(Dn(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)Dn(t)&&nc(t[1],t),t=t[3];null===t&&(t=e),Dn(t)&&nc(t[1],t),n=t&&t[4]}t=n}}(t)}}function nc(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof jo)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=o[i[s]],c=i[s+1];try{c.call(a)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],a="function"==typeof s?s(t):Xe(t[s]),c=r[o=n[i+2]],g=n[i+3];"boolean"==typeof g?a.removeEventListener(n[i],c,g):g>=0?r[o=g]():r[o=-g].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&Pe(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&sn(t[3])){n!==t[3]&&th(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function rh(e,t,n){return function(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===Ce.None||o===Ce.Emulated)return null}return Tt(r,n)}(e,t.parent,n)}function Ti(e,t,n,r,o){Pe(e)?e.insertBefore(t,n,r,o):t.insertBefore(n,r,o)}function ih(e,t,n){Pe(e)?e.appendChild(t,n):t.appendChild(n)}function sh(e,t,n,r,o){null!==r?Ti(e,t,n,r,o):ih(e,t,n)}function Ml(e,t){return Pe(e)?e.parentNode(t):t.parentNode}let uh=function(e,t,n){return 40&e.type?Tt(e,n):null};function Al(e,t,n,r){const o=rh(e,r,t),i=t[11],a=function(e,t,n){return uh(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let c=0;c<n.length;c++)sh(i,o,n[c],a,!1);else sh(i,o,n,a,!1)}function Il(e,t){if(null!==t){const n=t.type;if(3&n)return Tt(t,e);if(4&n)return oc(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return Il(e,r);{const o=e[t.index];return sn(o)?oc(-1,o):Xe(o)}}if(32&n)return Zu(t,e)()||Xe(e[t.index]);{const r=dh(e,t);return null!==r?Array.isArray(r)?r[0]:Il(ia(e[16]),r):Il(e,t.next)}}return null}function dh(e,t){return null!==t?e[16][6].projection[t.projection]:null}function oc(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return Il(r,o)}return t[7]}function ic(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],c=n.type;if(s&&0===t&&(a&&Vn(Xe(a),r),n.flags|=4),64!=(64&n.flags))if(8&c)ic(e,t,n.child,r,o,i,!1),is(t,e,o,a,i);else if(32&c){const g=Zu(n,r);let E;for(;E=g();)is(t,e,o,E,i);is(t,e,o,a,i)}else 16&c?hh(e,t,r,n,o,i):is(t,e,o,a,i);n=s?n.projectionNext:n.next}}function sa(e,t,n,r,o,i){ic(n,r,e.firstChild,t,o,i,!1)}function hh(e,t,n,r,o,i){const s=n[16],c=s[6].projection[r.projection];if(Array.isArray(c))for(let g=0;g<c.length;g++)is(t,e,o,c[g],i);else ic(e,t,c,s[3],o,i,!0)}function ph(e,t,n){Pe(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function sc(e,t,n){Pe(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gh(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const mh="ng-template";function JC(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==gh(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function yh(e){return 4===e.type&&e.value!==mh}function XC(e,t,n){return t===(4!==e.type||n?e.value:mh)}function ev(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(ol(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const c=t[a];if("number"!=typeof c){if(!s)if(4&r){if(r=2|1&r,""!==c&&!XC(e,c,n)||""===c&&1===t.length){if(Kr(r))return!1;s=!0}}else{const g=8&r?c:t[++a];if(8&r&&null!==e.attrs){if(!JC(e.attrs,g,n)){if(Kr(r))return!1;s=!0}continue}const I=tv(8&r?"class":c,o,yh(e),n);if(-1===I){if(Kr(r))return!1;s=!0;continue}if(""!==g){let S;S=I>i?"":o[I+1].toLowerCase();const N=8&r?S:null;if(N&&-1!==gh(N,g,0)||2&r&&g!==S){if(Kr(r))return!1;s=!0}}}}else{if(!s&&!Kr(r)&&!Kr(c))return!1;if(s&&Kr(c))continue;s=!1,r=c|1&r}}return Kr(r)||s}function Kr(e){return 0==(1&e)}function tv(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let a=t[++o];for(;"string"==typeof a;)a=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function _h(e,t,n=!1){for(let r=0;r<t.length;r++)if(ev(e,t[r],n))return!0;return!1}function Ch(e,t){return e?":not("+t.trim()+")":t}function sv(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Kr(s)&&(t+=Ch(i,o),o=""),r=s,i=i||!Kr(r);n++}return""!==o&&(t+=Ch(i,o)),t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ye={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vh(e){Dh(at(),oe(),Sn()+e,ji())}function Dh(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&pi(t,i,n)}else{const i=e.preOrderHooks;null!==i&&Gi(t,i,0,n)}go(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Tl(e,t){return e<<17|t<<2}function Jr(e){return e>>17&32767}function ac(e){return 2|e}function Wo(e){return(131068&e)>>2}function lc(e,t){return-131069&e|t<<2}function uc(e){return 1|e}function Rh(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Lo(o),s.contentQueries(2,t[i],i)}}}function aa(e,t,n,r,o,i,s,a,c,g){const E=t.blueprint.slice();return E[0]=o,E[2]=140|r,Ua(E),E[3]=E[15]=e,E[8]=n,E[10]=s||e&&e[10],E[11]=a||e&&e[11],E[12]=c||e&&e[12]||null,E[9]=g||e&&e[9]||null,E[6]=i,E[16]=2==t.type?e[16]:E,E}function ss(e,t,n,r,o){let i=e.data[t];if(null===i)i=function(e,t,n,r,o){const i=Us(),s=Jo(),c=e.data[t]=function(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=c),null!==i&&(s?null==i.child&&null!==c.parent&&(i.child=c):null===i.next&&(i.next=c)),c}(e,t,n,r,o),Le.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function(){const e=Le.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return mr(i,!0),i}function as(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function la(e,t,n){Hi(t);try{const r=e.viewQuery;null!==r&&Mc(1,r,n);const o=e.template;null!==o&&Oh(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Rh(e,t),e.staticViewQueries&&Mc(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)jv(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,$i()}}function ls(e,t,n,r){const o=t[2];if(256==(256&o))return;Hi(t);const i=ji();try{Ua(t),function(e){Le.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Oh(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const g=e.preOrderCheckHooks;null!==g&&pi(t,g,null)}else{const g=e.preOrderHooks;null!==g&&Gi(t,g,0,null),$s(t,0)}if(function(e){for(let t=Ku(e);null!==t;t=Ju(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(1024&o[2])&&Bs(i,1),o[2]|=1024}}}(t),function(e){for(let t=Ku(e);null!==t;t=Ju(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];Fo(r)&&ls(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Rh(e,t),!i)if(s){const g=e.contentCheckHooks;null!==g&&pi(t,g)}else{const g=e.contentHooks;null!==g&&Gi(t,g,1),$s(t,1)}!function(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)go(~o);else{const i=o,s=n[++r],a=n[++r];Ui(s,i),a(2,t[i])}}}finally{go(-1)}}(e,t);const a=e.components;null!==a&&function(e,t){for(let n=0;n<t.length;n++)Lv(e,t[n])}(t,a);const c=e.viewQuery;if(null!==c&&Mc(2,c,r),!i)if(s){const g=e.viewCheckHooks;null!==g&&pi(t,g)}else{const g=e.viewHooks;null!==g&&Gi(t,g,2),$s(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,Bs(t[3],-1))}finally{$i()}}function Cv(e,t,n,r){const o=t[10],i=!ji(),s=zr(t);try{i&&!s&&o.begin&&o.begin(),s&&la(e,t,r),ls(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function Oh(e,t,n,r,o){const i=Sn(),s=2&r;try{go(-1),s&&t.length>20&&Dh(e,t,20,ji()),n(r,o)}finally{go(i)}}function Nh(e,t,n){if(tr(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}function yc(e,t,n){!di()||(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||Xo(n,t),Vn(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const c=e.data[a],g=an(c);g&&Nv(t,n,c);const E=Ei(t,e,a,n);Vn(E,t),null!==s&&Pv(0,a-o,E,c,0,s),g&&(hn(n.index,t)[8]=E)}}(e,t,n,Tt(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,s=n.index,a=Le.lFrame.currentDirectiveIndex;try{go(s);for(let c=r;c<o;c++){const g=e.data[c],E=t[c];ko(c),(null!==g.hostBindings||0!==g.hostVars||null!==g.hostAttrs)&&Uh(g,E)}}finally{go(-1),ko(a)}}(e,t,n))}function _c(e,t,n=Tt){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function Ph(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Rl(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Rl(e,t,n,r,o,i,s,a,c,g){const E=20+r,I=E+o,S=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Ye);return n}(E,I),N="function"==typeof g?g():g;return S[1]={type:e,blueprint:S,template:n,queries:null,viewQuery:a,declTNode:t,data:S.slice().fill(null,E),bindingStartIndex:E,expandoStartIndex:I,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:c,consts:N,incompleteFirstPass:!1}}function kh(e,t,n,r){const o=Yh(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&qh(e).push(r,o.length-1))}function Lh(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function _r(e,t,n,r,o,i,s,a){const c=Tt(t,n);let E,g=t.inputs;!a&&null!=g&&(E=g[r])?(Kh(e,n,E,r,o),Br(t)&&function(e,t){const n=hn(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3&t.type&&(r=function(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,Pe(i)?i.setProperty(c,r,o):Gs(r)||(c.setProperty?c.setProperty(r,o):c[r]=o))}function Cc(e,t,n,r){let o=!1;if(di()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];_h(n,s.selectors,!1)&&(o||(o=[]),ei(Xo(n,t),e,s.type),an(s)?(Hh(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,$h(n,e.data.length,i.length);for(let E=0;E<i.length;E++){const I=i[E];I.providersResolver&&I.providersResolver(I)}let a=!1,c=!1,g=as(e,t,i.length,null);for(let E=0;E<i.length;E++){const I=i[E];n.mergedAttrs=_i(n.mergedAttrs,I.hostAttrs),Gh(e,n,t,g,I),Ov(g,I,s),null!==I.contentQueries&&(n.flags|=8),(null!==I.hostBindings||null!==I.hostAttrs||0!==I.hostVars)&&(n.flags|=128);const S=I.type.prototype;!a&&(S.ngOnChanges||S.ngOnInit||S.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),a=!0),!c&&(S.ngOnChanges||S.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),c=!0),g++}!function(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let a=null,c=null;for(let g=t.directiveStart;g<r;g++){const E=o[g],I=E.inputs,S=null===i||yh(t)?null:Fv(I,i);s.push(S),a=Lh(I,g,a),c=Lh(E.outputs,g,c)}null!==a&&(a.hasOwnProperty("class")&&(t.flags|=16),a.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=a,t.outputs=c}(e,n)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new Ut("301",`Export of name '${t[o+1]}' not found!`);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=_i(n.mergedAttrs,n.attrs),o}function Bh(e,t,n,r,o,i){const s=i.hostBindings;if(s){let a=e.hostBindingOpCodes;null===a&&(a=e.hostBindingOpCodes=[]);const c=~t.index;(function(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(a)!=c&&a.push(c),a.push(r,o,s)}}function Uh(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Hh(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Ov(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;an(t)&&(n[""]=e)}}function $h(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Gh(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=pr(o.type)),s=new jo(i,an(o),null);e.blueprint[r]=s,n[r]=s,Bh(e,t,0,r,as(e,n,o.hostVars,Ye),o)}function Nv(e,t,n){const r=Tt(t,e),o=Ph(n),i=e[10],s=Ol(e,aa(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n),null,null));e[t.index]=s}function bo(e,t,n,r,o,i){const s=Tt(e,t);!function(e,t,n,r,o,i,s){if(null==i)Pe(e)?e.removeAttribute(t,o,n):t.removeAttribute(o);else{const a=null==s?_e(i):s(i,r||"",o);Pe(e)?e.setAttribute(t,o,a,n):n?t.setAttributeNS(n,o,a):t.setAttribute(o,a)}}(t[11],s,i,e.value,n,r,o)}function Pv(e,t,n,r,o,i){const s=i[t];if(null!==s){const a=r.setInput;for(let c=0;c<s.length;){const g=s[c++],E=s[c++],I=s[c++];null!==a?r.setInput(n,I,g,E):n[E]=I}}}function Fv(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Wh(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function Lv(e,t){const n=hn(t,e);if(Fo(n)){const r=n[1];80&n[2]?ls(r,n,r.template,n[8]):n[5]>0&&Dc(n)}}function Dc(e){for(let r=Ku(e);null!==r;r=Ju(r))for(let o=10;o<r.length;o++){const i=r[o];if(1024&i[2]){const s=i[1];ls(s,i,s.template,i[8])}else i[5]>0&&Dc(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=hn(n[r],e);Fo(o)&&o[5]>0&&Dc(o)}}function jv(e,t){const n=hn(t,e),r=n[1];(function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),la(r,n,n[8])}function Ol(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Ec(e){for(;e;){e[2]|=64;const t=ia(e);if(fo(e)&&!t)return e;e=t}return null}function wc(e,t,n){const r=t[10];r.begin&&r.begin();try{ls(e,t,e.template,n)}catch(o){throw Zh(t,o),o}finally{r.end&&r.end()}}function zh(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=Yu(n),o=r[1];Cv(o,r,o.template,n)}}(e[8])}function Mc(e,t,n){Lo(0),t(e,n)}const Gv=(()=>Promise.resolve(null))();function Yh(e){return e[7]||(e[7]=[])}function qh(e){return e.cleanup||(e.cleanup=[])}function Zh(e,t){const n=e[9],r=n?n.get(rs,null):null;r&&r.handleError(t)}function Kh(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],c=t[s],g=e.data[s];null!==g.setInput?g.setInput(c,o,r,a):c[a]=o}}function Yo(e,t,n){const r=xr(t,e);!function(e,t,n){Pe(e)?e.setValue(t,n):t.textContent=n}(e[11],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Nl(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const a=t[s];"number"==typeof a?i=a:1==i?o=Oe(o,a):2==i&&(r=Oe(r,a+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
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
const us=new P("INJECTOR",-1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Jh{get(t,n=Ks){if(n===Ks){const r=new Error(`NullInjectorError: No provider for ${K(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ua=new P("Set Injector scope."),ca={},Yv={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ac;function Xh(){return void 0===Ac&&(Ac=new Jh),Ac}function ep(e,t=null,n=null,r){return new Qv(e,n,t||Xh(),r)}class Qv{constructor(t,n,r,o=null){this.parent=r,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const i=[];n&&Co(n,a=>this.processProvider(a,t,n)),Co([t],a=>this.processInjectorType(a,[],i)),this.records.set(us,cs(void 0,this));const s=this.records.get(ua);this.scope=null!=s?s.value:null,this.source=o||("object"==typeof t?null:K(t))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(t=>t.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(t,n=Ks,r=G.Default){this.assertNotDestroyed();const o=Ji(this),i=Ee(void 0);try{if(!(r&G.SkipSelf)){let a=this.records.get(t);if(void 0===a){const c=("function"==typeof(e=t)||"object"==typeof e&&e instanceof P)&&kt(t);a=c&&this.injectableDefInScope(c)?cs(Ic(t),ca):null,this.records.set(t,a)}if(null!=a)return this.hydrate(t,a)}return(r&G.Self?Xh():this.parent).get(t,n=r&G.Optional&&n===Ks?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[Ki]=s[Ki]||[]).unshift(K(t)),o)throw s;return vf(s,t,"R3InjectorError",this.source)}throw s}finally{Ee(i),Ji(o)}var e;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(t=>this.get(t))}toString(){const t=[];return this.records.forEach((r,o)=>t.push(K(o))),`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(t,n,r){if(!(t=pe(t)))return!1;let o=Mr(t);const i=null==o&&t.ngModule||void 0,s=void 0===i?t:i,a=-1!==r.indexOf(s);if(void 0!==i&&(o=Mr(i)),null==o)return!1;if(null!=o.imports&&!a){let E;r.push(s);try{Co(o.imports,I=>{this.processInjectorType(I,n,r)&&(void 0===E&&(E=[]),E.push(I))})}finally{}if(void 0!==E)for(let I=0;I<E.length;I++){const{ngModule:S,providers:N}=E[I];Co(N,j=>this.processProvider(j,S,N||rt))}}this.injectorDefTypes.add(s);const c=pr(s)||(()=>new s);this.records.set(s,cs(c,ca));const g=o.providers;if(null!=g&&!a){const E=t;Co(g,I=>this.processProvider(I,E,g))}return void 0!==i&&void 0!==t.providers}processProvider(t,n,r){let o=ds(t=pe(t))?t:pe(t&&t.provide);const i=np(e=t)?cs(void 0,e.useValue):cs(tp(e),ca);var e;if(ds(t)||!0!==t.multi)this.records.get(o);else{let s=this.records.get(o);s||(s=cs(void 0,ca,!0),s.factory=()=>Ai(s.multi),this.records.set(o,s)),o=t,s.multi.push(t)}this.records.set(o,i)}hydrate(t,n){return n.value===ca&&(n.value=Yv,n.value=n.factory()),"object"==typeof n.value&&n.value&&null!==(e=n.value)&&"object"==typeof e&&"function"==typeof e.ngOnDestroy&&this.onDestroy.add(n.value),n.value;var e}injectableDefInScope(t){if(!t.providedIn)return!1;const n=pe(t.providedIn);return"string"==typeof n?"any"===n||n===this.scope:this.injectorDefTypes.has(n)}}function Ic(e){const t=kt(e),n=null!==t?t.factory:pr(e);if(null!==n)return n;if(e instanceof P)throw new Error(`Token ${K(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const r=function(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?");throw new Error(`Can't resolve all parameters for ${K(e)}: (${r.join(", ")}).`)}const n=function(e){const t=e&&(e[ee]||e[B]);if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function tp(e,t,n){let r;if(ds(e)){const o=pe(e);return pr(o)||Ic(o)}if(np(e))r=()=>pe(e.useValue);else if(function(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Ai(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>ln(pe(e.useExisting));else{const o=pe(e&&(e.useClass||e.provide));if(!function(e){return!!e.deps}(e))return pr(o)||Ic(o);r=()=>new o(...Ai(e.deps))}return r}function cs(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function np(e){return null!==e&&"object"==typeof e&&ku in e}function ds(e){return"function"==typeof e}const rp=function(e,t,n){return function(e,t=null,n=null,r){const o=ep(e,t,n,r);return o._resolveInjectorDefTypes(),o}({name:n},t,e,n)};class wt{static create(t,n){return Array.isArray(t)?rp(t,n,""):rp(t.providers,t.parent,t.name||"")}}function mD(e,t){hi(Yu(e)[1],Zt())}function Nc(e){let t=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(an(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new Error("Directives cannot inherit Components");o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=Pc(e.inputs),s.declaredInputs=Pc(e.declaredInputs),s.outputs=Pc(e.outputs);const a=o.hostBindings;a&&vD(e,a);const c=o.viewQuery,g=o.contentQueries;if(c&&_D(e,c),g&&CD(e,g),ge(e.inputs,o.inputs),ge(e.declaredInputs,o.declaredInputs),ge(e.outputs,o.outputs),an(o)&&o.data.animation){const E=e.data;E.animation=(E.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(e),a===Nc&&(n=!1)}}t=Object.getPrototypeOf(t)}!function(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=_i(o.hostAttrs,n=_i(n,o.hostAttrs))}}(r)}function Pc(e){return e===yn?{}:e===rt?[]:e}function _D(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function CD(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function vD(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */wt.THROW_IF_NOT_FOUND=Ks,wt.NULL=new Jh,wt.\u0275prov=pt({token:wt,providedIn:"any",factory:()=>ln(us)}),wt.__NG_ELEMENT_ID__=-1;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Pl=null;function fs(){if(!Pl){const e=ct.Symbol;if(e&&e.iterator)Pl=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Pl=r)}}}return Pl}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fa(e){return!!Fc(e)&&(Array.isArray(e)||!(e instanceof Map)&&fs()in e)}function Fc(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function kn(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Vc(e,t,n,r){const o=oe();return kn(o,Vo(),t)&&(at(),bo($t(),o,e,t,n,r)),Vc}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gs(e,t,n,r,o,i){const a=function(e,t,n,r){const o=kn(e,t,n);return kn(e,t+1,r)||o}(e,Le.lFrame.bindingIndex,n,o);return or(2),a?t+_e(n)+r+_e(o)+i:Ye}function xp(e,t,n,r,o,i,s,a){const c=oe(),g=at(),E=e+20,I=g.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n,r,o,i,s,a,c){const g=t.consts,E=ss(t,e,4,s||null,Yr(g,a));Cc(t,n,E,Yr(g,c)),hi(t,E);const I=E.tViews=Rl(2,E,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,g);return null!==t.queries&&(t.queries.template(t,E),I.queries=t.queries.embeddedTView(E)),E}(E,g,c,t,n,r,o,i,s):g.data[E];mr(I,!1);const S=c[11].createComment("");Al(g,c,S,I),Vn(S,c),Ol(c,c[E]=Wh(S,c,S,I)),nr(I)&&yc(g,c,I),null!=s&&_c(c,I,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Rp(e){return function(e,t){return e[t]}(Le.lFrame.contextLView,20+e)}
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
function pa(e,t=G.Default){const n=oe();return null===n?ln(e,t):ul(Zt(),n,pe(e),t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Uc(e,t,n){const r=oe();return kn(r,Vo(),t)&&_r(at(),$t(),r,e,t,r[11],n,!1),Uc}function Hc(e,t,n,r,o){const s=o?"class":"style";Kh(e,n,t.inputs[s],s,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $c(e,t,n,r){const o=oe(),i=at(),s=20+e,a=o[11],c=o[s]=ec(a,t,Le.lFrame.currentNamespace),g=i.firstCreatePass?function(e,t,n,r,o,i,s){const a=t.consts,g=ss(t,e,2,o,Yr(a,i));return Cc(t,n,g,Yr(a,s)),null!==g.attrs&&Nl(g,g.attrs,!1),null!==g.mergedAttrs&&Nl(g,g.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,g),g}(s,i,o,0,t,n,r):i.data[s];mr(g,!0);const E=g.mergedAttrs;null!==E&&Wi(a,c,E);const I=g.classes;null!==I&&sc(a,c,I);const S=g.styles;null!==S&&ph(a,c,S),64!=(64&g.flags)&&Al(i,o,c,g),0===Le.lFrame.elementDepthCount&&Vn(c,o),Le.lFrame.elementDepthCount++,nr(g)&&(yc(i,o,g),Nh(i,g,o)),null!==r&&_c(o,g)}function Gc(){let e=Zt();Jo()?Li():(e=e.parent,mr(e,!1));const t=e;Le.lFrame.elementDepthCount--;const n=at();n.firstCreatePass&&(hi(n,e),tr(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return 0!=(16&e.flags)}(t)&&Hc(n,t,oe(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return 0!=(32&e.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)&&Hc(n,t,oe(),t.stylesWithoutHost,!1)}function $p(e,t,n,r){$c(e,t,n,r),Gc()}function Wc(e,t,n){const r=oe(),o=at(),i=e+20,s=o.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(e,t,n,r,o){const i=t.consts,s=Yr(i,r),a=ss(t,e,8,"ng-container",s);return null!==s&&Nl(a,s,!0),Cc(t,n,a,Yr(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(i,o,r,t,n):o.data[i];mr(s,!0);const a=r[i]=r[11].createComment("");Al(o,r,a,s),Vn(a,r),nr(s)&&(yc(o,r,s),Nh(o,s,r)),null!=n&&_c(r,s)}function zc(){let e=Zt();const t=at();Jo()?Li():(e=e.parent,mr(e,!1)),t.firstCreatePass&&(hi(t,e),tr(e)&&t.queries.elementEnd(e))}function Gp(){return oe()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yc(e){return!!e&&"function"==typeof e.then}function Wp(e){return!!e&&"function"==typeof e.subscribe}const qc=Wp;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qc(e,t,n,r){const o=oe(),i=at(),s=Zt();return function(e,t,n,r,o,i,s,a){const c=nr(r),E=e.firstCreatePass&&qh(e),I=t[8],S=Yh(t);let N=!0;if(3&r.type||a){const $=Tt(r,t),le=a?a($):$,X=S.length,Re=a?Be=>a(Xe(Be[r.index])):r.index;if(Pe(n)){let Be=null;if(!a&&c&&(Be=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const a=t[7],c=o[i+2];return a.length>c?a[c]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==Be)(Be.__ngLastListenerFn__||Be).__ngNextListenerFn__=i,Be.__ngLastListenerFn__=i,N=!1;else{i=Zc(r,t,I,i,!1);const st=n.listen(le,o,i);S.push(i,st),E&&E.push(o,Re,X,X+1)}}else i=Zc(r,t,I,i,!0),le.addEventListener(o,i,s),S.push(i),E&&E.push(o,Re,X,s)}else i=Zc(r,t,I,i,!1);const j=r.outputs;let z;if(N&&null!==j&&(z=j[o])){const $=z.length;if($)for(let le=0;le<$;le+=2){const mn=t[z[le]][z[le+1]].subscribe(i),kr=S.length;S.push(i,mn),E&&E.push(o,r.index,kr,-(kr+1))}}}(i,o,o[11],s,e,t,!!n,r),Qc}function qp(e,t,n,r){try{return!1!==n(r)}catch(o){return Zh(e,o),!1}}function Zc(e,t,n,r,o){return function i(s){if(s===Function)return r;const a=2&e.flags?hn(e.index,t):t;0==(32&t[2])&&Ec(a);let c=qp(t,0,r,s),g=i.__ngNextListenerFn__;for(;g;)c=qp(t,0,g,s)&&c,g=g.__ngNextListenerFn__;return o&&!1===c&&(s.preventDefault(),s.returnValue=!1),c}}
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
       */function Qp(e=1){return function(e){return(Le.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,Le.lFrame.contextLView))[8]}(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ig(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?Jr(i):Wo(i),c=!1;for(;0!==a&&(!1===c||s);){const E=e[a+1];sE(e[a],t)&&(c=!0,e[a+1]=r?uc(E):ac(E)),a=r?Jr(E):Wo(E)}c&&(e[n+1]=r?ac(i):uc(i))}function sE(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Zi(e,t)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Jc(e,t){return function(e,t,n,r){const o=oe(),i=at(),s=or(2);i.firstUpdatePass&&function(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Sn()],s=function(e,t){return t>=e.expandoStartIndex}(e,n);(function(e,t){return 0!=(e.flags&(t?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */)(i,r)&&null===t&&!s&&(t=!1),t=function(e,t,n,r){const o=function(e){const t=Le.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=ga(n=Xc(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=Xc(o,e,t,n,r),null===i){let c=function(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==Wo(r))return e[Jr(r)]}(e,t,r);void 0!==c&&Array.isArray(c)&&(c=Xc(null,e,t,c[1],r),c=ga(c,t.attrs,r),function(e,t,n,r){e[Jr(n?t.classBindings:t.styleBindings)]=r}(e,t,r,c))}else i=function(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=ga(r,e[i].hostAttrs,n);return ga(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=Jr(s),c=Wo(s);e[r]=n;let E,g=!1;if(Array.isArray(n)){const I=n;E=I[1],(null===E||Zi(I,E)>0)&&(g=!0)}else E=n;if(o)if(0!==c){const S=Jr(e[a+1]);e[r+1]=Tl(S,a),0!==S&&(e[S+1]=lc(e[S+1],r)),e[a+1]=function(e,t){return 131071&e|t<<17}(e[a+1],r)}else e[r+1]=Tl(a,0),0!==a&&(e[a+1]=lc(e[a+1],r)),a=r;else e[r+1]=Tl(c,0),0===a?a=r:e[c+1]=lc(e[c+1],r),c=r;g&&(e[r+1]=ac(e[r+1])),ig(e,E,r,!0),ig(e,E,r,!1),function(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Zi(i,t)>=0&&(n[r+1]=uc(n[r+1]))}(t,E,e,r,i),s=Tl(a,c),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==Ye&&kn(o,s,t)&&function(e,t,n,r,o,i,s,a){if(!(3&t.type))return;const c=e.data,g=c[a+1];kl(function(e){return 1==(1&e)}(g)?yg(c,t,n,o,Wo(g),s):void 0)||(kl(i)||function(e){return 2==(2&e)}(g)&&(i=yg(c,null,n,o,a,s)),function(e,t,n,r,o){const i=Pe(e);if(t)o?i?e.addClass(n,r):n.classList.add(r):i?e.removeClass(n,r):n.classList.remove(r);else{let s=-1===r.indexOf("-")?void 0:Eo.DashCase;if(null==o)i?e.removeStyle(n,r,s):n.style.removeProperty(r);else{const a="string"==typeof o&&o.endsWith("!important");a&&(o=o.slice(0,-10),s|=Eo.Important),i?e.setStyle(n,r,o,s):n.style.setProperty(r,o,a?"important":"")}}}(r,s,xr(Sn(),n),o,i))}(i,i.data[Sn()],o,o[11],e,o[s+1]=function(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=K(Go(e)))),e}(t,n),r,s)}(e,t,null,!0),Jc}function Xc(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=ga(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function ga(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),yr(e,s,!!n||t[++i]))}return void 0===e?null:e}function yg(e,t,n,r,o,i){const s=null===t;let a;for(;o>0;){const c=e[o],g=Array.isArray(c),E=g?c[1]:c,I=null===E;let S=n[o+1];S===Ye&&(S=I?rt:void 0);let N=I?Nu(S,r):E===r?S:void 0;if(g&&!kl(N)&&(N=Nu(c,r)),kl(N)&&(a=N,s))return a;const j=e[o+1];o=s?Jr(j):Wo(j)}if(null!==t){let c=i?t.residualClasses:t.residualStyles;null!=c&&(a=Nu(c,r))}return a}function kl(e){return void 0!==e}function Cg(e,t=""){const n=oe(),r=at(),o=e+20,i=r.firstCreatePass?ss(r,o,1,t,null):r.data[o],s=n[o]=function(e,t){return Pe(e)?e.createText(t):e.createTextNode(t)}(n[11],t);Al(r,n,s,i),mr(i,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ed(e){return Ll("",e,""),ed}function Ll(e,t,n){const r=oe(),o=function(e,t,n,r){return kn(e,Vo(),n)?t+_e(n)+r:Ye}(r,e,t,n);return o!==Ye&&Yo(r,Sn(),o),Ll}function td(e,t,n,r,o){const i=oe(),s=gs(i,e,t,n,r,o);return s!==Ye&&Yo(i,Sn(),s),td}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function nd(e,t,n){const r=oe();return kn(r,Vo(),t)&&_r(at(),$t(),r,e,t,r[11],n,!0),nd}
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
const xi=void 0;var UE=["en",[["a","p"],["AM","PM"],xi],[["AM","PM"],xi,xi],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],xi,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],xi,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",xi,"{1} 'at' {0}",xi],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){const t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ws={};function rd(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e);let n=Lg(t);if(n)return n;const r=t.split("-")[0];if(n=Lg(r),n)return n;if("en"===r)return UE;throw new Error(`Missing locale data for the locale "${e}".`)}function kg(e){return rd(e)[Ve.PluralCase]}function Lg(e){return e in ws||(ws[e]=ct.ng&&ct.ng.common&&ct.ng.common.locales&&ct.ng.common.locales[e]),ws[e]}var Ve=(()=>((Ve=Ve||{})[Ve.LocaleId=0]="LocaleId",Ve[Ve.DayPeriodsFormat=1]="DayPeriodsFormat",Ve[Ve.DayPeriodsStandalone=2]="DayPeriodsStandalone",Ve[Ve.DaysFormat=3]="DaysFormat",Ve[Ve.DaysStandalone=4]="DaysStandalone",Ve[Ve.MonthsFormat=5]="MonthsFormat",Ve[Ve.MonthsStandalone=6]="MonthsStandalone",Ve[Ve.Eras=7]="Eras",Ve[Ve.FirstDayOfWeek=8]="FirstDayOfWeek",Ve[Ve.WeekendRange=9]="WeekendRange",Ve[Ve.DateFormat=10]="DateFormat",Ve[Ve.TimeFormat=11]="TimeFormat",Ve[Ve.DateTimeFormat=12]="DateTimeFormat",Ve[Ve.NumberSymbols=13]="NumberSymbols",Ve[Ve.NumberFormats=14]="NumberFormats",Ve[Ve.CurrencyCode=15]="CurrencyCode",Ve[Ve.CurrencySymbol=16]="CurrencySymbol",Ve[Ve.CurrencyName=17]="CurrencyName",Ve[Ve.Currencies=18]="Currencies",Ve[Ve.Directionality=19]="Directionality",Ve[Ve.PluralCase=20]="PluralCase",Ve[Ve.ExtraData=21]="ExtraData",Ve))();const jl="en-US";
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
let jg=jl;function od(e){ht(e,"Expected localeId to be defined"),"string"==typeof e&&(jg=e.toLowerCase().replace(/_/g,"-"))}function ad(e,t,n,r,o){if(e=pe(e),Array.isArray(e))for(let i=0;i<e.length;i++)ad(e[i],t,n,r,o);else{const i=at(),s=oe();let a=ds(e)?e:pe(e.provide),c=tp(e);const g=Zt(),E=1048575&g.providerIndexes,I=g.directiveStart,S=g.providerIndexes>>20;if(ds(e)||!e.multi){const N=new jo(c,o,pa),j=ud(a,t,o?E:E+S,I);-1===j?(ei(Xo(g,s),i,a),ld(i,e,t.length),t.push(a),g.directiveStart++,g.directiveEnd++,o&&(g.providerIndexes+=1048576),n.push(N),s.push(N)):(n[j]=N,s[j]=N)}else{const N=ud(a,t,E+S,I),j=ud(a,t,E,E+S),z=N>=0&&n[N],$=j>=0&&n[j];if(o&&!$||!o&&!z){ei(Xo(g,s),i,a);const le=function(e,t,n,r,o){const i=new jo(e,n,pa);return i.multi=[],i.index=t,i.componentProviders=0,um(i,o,r&&!n),i}(o?Lb:kb,n.length,o,r,c);!o&&$&&(n[j].providerFactory=le),ld(i,e,t.length,0),t.push(a),g.directiveStart++,g.directiveEnd++,o&&(g.providerIndexes+=1048576),n.push(le),s.push(le)}else ld(i,e,N>-1?N:j,um(n[o?j:N],c,!o&&r));!o&&r&&$&&n[j].componentProviders++}}}function ld(e,t,n,r){const o=ds(t);if(o||function(e){return!!e.useClass}(t)){const s=(t.useClass||t).prototype.ngOnDestroy;if(s){const a=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const c=a.indexOf(n);-1===c?a.push(n,[r,s]):a[c+1].push(r,s)}else a.push(n,s)}}}function um(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function ud(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function kb(e,t,n,r){return cd(this.multi,[])}function Lb(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const s=this.providerFactory.componentProviders,a=Ei(n,n[1],this.providerFactory.index,r);i=a.slice(0,s),cd(o,i);for(let c=s;c<a.length;c++)i.push(a[c])}else i=[],cd(o,i);return i}function cd(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function cm(e,t=[]){return n=>{n.providersResolver=(r,o)=>
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
function(e,t,n){const r=at();if(r.firstCreatePass){const o=an(e);ad(n,r.data,r.blueprint,o,!0),ad(t,r.data,r.blueprint,o,!1)}}(r,o?o(e):e,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class dm{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const hm="ngComponent";class Ub{resolveComponentFactory(t){throw function(e){const t=Error(`No component factory found for ${K(e)}. Did you add it to @NgModule.entryComponents?`);return t[hm]=e,t}(t)}}class Ri{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Gl(...e){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function As(e,t){return new Io(Tt(e,t))}Ri.NULL=new Ub;const Gb=function(){return As(Zt(),oe())};let Io=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=Gb,e})();function pm(e){return e instanceof Io?e.nativeElement:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Wl{}let Wb=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>Yb(),e})();const Yb=function(){const e=oe(),n=hn(Zt().index,e);return function(e){return e[11]}(Dn(n)?n:e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */;let fd=(()=>{class e{}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=pt({token:e,providedIn:"root",factory:()=>null}),e})();class gm{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const mm=new gm("12.2.2");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ym{constructor(){}supports(t){return fa(t)}create(t){return new Kb(t)}}const Zb=(e,t)=>t;class Kb{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||Zb}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Cm(r,o,i)?n:r,a=Cm(s,o,i),c=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const g=a-o,E=c-o;if(g!=E){for(let S=0;S<g;S++){const N=S<i.length?i[S]:i[S]=0,j=N+S;E<=j&&j<g&&(i[S]=N+1)}i[s.previousIndex]=E-g}}a!==c&&t(s,a,c)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!fa(t))throw new Error(`Error trying to diff '${K(t)}'. Only arrays and iterables are allowed`);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)i=t[a],s=this._trackByFn(a,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,a),r=!0),n=n._next}else o=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[fs()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,a=>{s=this._trackByFn(o,a),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,a,s,o)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new Jb(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new _m),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new _m),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class Jb{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Xb{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class _m{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new Xb,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Cm(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class vm{constructor(){}supports(t){return t instanceof Map||Fc(t)}create(){return new ew}}class ew{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||Fc(t)))throw new Error(`Error trying to diff '${K(t)}'. Only maps and objects are allowed`)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new tw(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class tw{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Dm(){return new zl([new ym])}let zl=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Dm()),deps:[[e,new ii,new $o]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new Error(`Cannot find a differ supporting object '${n}' of type '${function(e){return e.name||typeof e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}'`)}}return e.\u0275prov=pt({token:e,providedIn:"root",factory:Dm}),e})();function Em(){return new Yl([new vm])}let Yl=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Em()),deps:[[e,new ii,new $o]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new Error(`Cannot find a differ supporting object '${n}'`)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return e.\u0275prov=pt({token:e,providedIn:"root",factory:Em}),e})();function ql(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(Xe(i)),sn(i))for(let a=10;a<i.length;a++){const c=i[a],g=c[1].firstChild;null!==g&&ql(c[1],c,g,r)}const s=n.type;if(8&s)ql(e,t,n.child,r);else if(32&s){const a=Zu(n,t);let c;for(;c=a();)r.push(c)}else if(16&s){const a=dh(t,n);if(Array.isArray(a))r.push(...a);else{const c=ia(t[16]);ql(c[1],c,a,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class va{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return ql(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(sn(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(tc(t,r),Mi(n,r))}this._attachedToViewContainer=!1}nh(this._lView[1],this._lView)}onDestroy(t){kh(this._lView[1],this._lView,null,t)}markForCheck(){Ec(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){wc(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){Bi(!0);try{wc(e,t,n)}finally{Bi(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var t;this._appRef=null,sa(this._lView[1],t=this._lView,t[11],2,null,null)}attachToAppRef(t){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=t}}class rw extends va{constructor(t){super(t),this._view=t}detectChanges(){zh(this._view)}checkNoChanges(){!function(e){Bi(!0);try{zh(e)}finally{Bi(!1)}}(this._view)}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const iw=function(e){return function(e,t,n){if(Br(e)&&!n){const r=hn(e.index,t);return new va(r,r)}return 47&e.type?new va(t[16],t):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Zt(),oe(),16==(16&e))};let sw=(()=>{class e{}return e.__NG_ELEMENT_ID__=iw,e})();const uw=[new vm],dw=new zl([new ym]),fw=new Yl(uw),pw=function(){return Ql(Zt(),oe())};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Da=(()=>{class e{}return e.__NG_ELEMENT_ID__=pw,e})();const gw=Da,mw=class extends gw{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t){const n=this._declarationTContainer.tViews,r=aa(this._declarationLView,n,t,16,null,n.declTNode,null,null,null,null);r[17]=this._declarationLView[this._declarationTContainer.index];const i=this._declarationLView[19];return null!==i&&(r[19]=i.createEmbeddedView(n)),la(n,r,t),new va(r)}};function Ql(e,t){return 4&e.type?new mw(t,e,As(e,t)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Oi{}class bm{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Cw=function(){return Am(Zt(),oe())};let Zl=(()=>{class e{}return e.__NG_ELEMENT_ID__=Cw,e})();const Dw=Zl,wm=class extends Dw{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return As(this._hostTNode,this._hostLView)}get injector(){return new ti(this._hostTNode,this._hostLView)}get parentInjector(){const t=Di(this._hostTNode,this._hostLView);if(sl(t)){const n=Qr(t,this._hostLView),r=Kt(t);return new ti(n[1].data[r+8],n)}return new ti(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Mm(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){const o=t.createEmbeddedView(n||{});return this.insert(o,r),o}createComponent(t,n,r,o,i){const s=r||this.parentInjector;if(!i&&null==t.ngModule&&s){const c=s.get(Oi,null);c&&(i=c)}const a=t.create(s,o,void 0,i);return this.insert(a.hostView,n),a}insert(t,n){const r=t._lView,o=r[1];if(sn(r[3])){const E=this.indexOf(t);if(-1!==E)this.detach(E);else{const I=r[3],S=new wm(I,I[6],I[3]);S.detach(S.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],ml(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=128}(o,r,s,i);const a=oc(i,s),c=r[11],g=Ml(c,s[7]);return null!==g&&function(e,t,n,r,o,i){r[0]=o,r[6]=t,sa(e,r,n,1,o,i)}(o,s[6],c,r,g,a),t.attachToViewContainerRef(),ml(hd(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Mm(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=tc(this._lContainer,n);r&&(Mi(hd(this._lContainer),n),nh(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=tc(this._lContainer,n);return r&&null!=Mi(hd(this._lContainer),n)?new va(r):null}_adjustIndex(t,n=0){return null==t?this.length+n:t}};function Mm(e){return e[8]}function hd(e){return e[8]||(e[8]=[])}function Am(e,t){let n;const r=t[e.index];if(sn(r))n=r;else{let o;if(8&e.type)o=Xe(r);else{const i=t[11];o=i.createComment("");const s=Tt(e,t);Ti(i,Ml(i,s),o,function(e,t){return Pe(e)?e.nextSibling(t):t.nextSibling}(i,s),!1)}t[e.index]=n=Wh(r,t,o,e),Ol(t,n)}return new wm(n,e,t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const xs={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class zm extends Ri{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=Nt(t);return new qm(n,this.ngModule)}}function Ym(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const y0=new P("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>qf});class qm extends dm{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=t.selectors.map(sv).join(","),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Ym(this.componentDef.inputs)}get outputs(){return Ym(this.componentDef.outputs)}create(t,n,r,o){const i=(o=o||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,xs,o);return i!==xs||r===xs?i:t.get(n,r,o)}}}(t,o.injector):t,s=i.get(Wl,Et),a=i.get(fd,null),c=s.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",E=r?function(e,t,n){if(Pe(e))return e.selectRootElement(t,n===Ce.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(c,r,this.componentDef.encapsulation):ec(s.createRenderer(null,this.componentDef),g,function(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(g)),I=this.componentDef.onPush?576:528,S=function(e,t){return{components:[],scheduler:e||qf,clean:Gv,playerHandler:t||null,flags:0}}(),N=Rl(0,null,null,1,0,null,null,null,null,null),j=aa(null,N,S,I,null,null,s,c,a,i);let z,$;Hi(j);try{const le=function(e,t,n,r,o,i){const s=n[1];n[20]=e;const c=ss(s,20,2,"#host",null),g=c.mergedAttrs=t.hostAttrs;null!==g&&(Nl(c,g,!0),null!==e&&(Wi(o,e,g),null!==c.classes&&sc(o,e,c.classes),null!==c.styles&&ph(o,e,c.styles)));const E=r.createRenderer(e,t),I=aa(n,Ph(t),null,t.onPush?64:16,n[20],c,r,E,i||null,null);return s.firstCreatePass&&(ei(Xo(c,n),s,t.type),Hh(s,c),$h(c,n.length,1)),Ol(n,I),n[20]=I}(E,this.componentDef,j,s,c);if(E)if(r)Wi(c,E,["ng-version",mm.full]);else{const{attrs:X,classes:Re}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Kr(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);X&&Wi(c,E,X),Re&&Re.length>0&&sc(c,E,Re.join(" "))}if($=Rr(N,20),void 0!==n){const X=$.projection=[];for(let Re=0;Re<this.ngContentSelectors.length;Re++){const Be=n[Re];X.push(null!=Be?Array.from(Be):null)}}z=function(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=Zt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Gh(e,r,t,as(e,t,1,null),n));const o=Ei(t,e,r.directiveStart,r);Vn(o,t);const i=Tt(r,t);return i&&Vn(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,o&&o.forEach(c=>c(s,t)),t.contentQueries){const c=Zt();t.contentQueries(1,s,c.directiveStart)}const a=Zt();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(go(a.index),Bh(n[1],a,0,a.directiveStart,a.directiveEnd,t),Uh(t,s)),s}(le,this.componentDef,j,S,[mD]),la(N,j,null)}finally{$i()}return new v0(this.componentType,z,As($,j),j,$)}}class v0 extends class{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new rw(o),this.componentType=t}get injector(){return new ti(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
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
const Rs=new Map;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class b0 extends Oi{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new zm(this);const r=on(t),o=t[Ro]||null;o&&od(o),this._bootstrapComponents=Do(r.bootstrap),this._r3Injector=ep(t,n,[{provide:Oi,useValue:this},{provide:Ri,useValue:this.componentFactoryResolver}],K(t)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(t)}get(t,n=wt.THROW_IF_NOT_FOUND,r=G.Default){return t===wt||t===Oi||t===us?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Ad extends bm{constructor(t){super(),this.moduleType=t,null!==on(t)&&function(e){const t=new Set;!function n(r){const o=on(r,!0),i=o.id;null!==i&&(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${K(t)} vs ${K(t.name)}`)}(i,Rs.get(i),r),Rs.set(i,r));const s=Do(o.imports);for(const a of s)t.has(a)||(t.add(a),n(a))}(e)}(t)}create(t){return new b0(this.moduleType,t)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Km(e,t,n,r){return function(e,t,n,r,o,i){const s=t+n;return kn(e,s,o)?function(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function(e,t){const n=e[t];return n===Ye?void 0:n}(e,s+1)}(oe(),function(){const e=Le.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),e,t,n,r)}function Id(e){return t=>{setTimeout(e,void 0,t)}}const To=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class extends ie.xQ{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){var o,i,s;let a=t,c=n||(()=>null),g=r;if(t&&"object"==typeof t){const I=t;a=null===(o=I.next)||void 0===o?void 0:o.bind(I),c=null===(i=I.error)||void 0===i?void 0:i.bind(I),g=null===(s=I.complete)||void 0===s?void 0:s.bind(I)}this.__isAsync&&(c=Id(c),a&&(a=Id(a)),g&&(g=Id(g)));const E=super.subscribe({next:a,error:c,complete:g});return t instanceof fe.w&&t.add(E),E}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function U0(){return this._results[fs()]()}class tu{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=fs(),r=tu.prototype;r[n]||(r[n]=U0)}get changes(){return this._changes||(this._changes=new To)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=Or(t);(this._changesDetected=!function(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}Symbol;class Td{constructor(t){this.queryList=t,this.matches=null}clone(){return new Td(this.queryList)}setDirty(){this.queryList.setDirty()}}class Sd{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Sd(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==cy(t,n).matches&&this.queries[n].setDirty()}}class ry{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class xd{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new xd(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Rd{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Rd(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,G0(n,i)),this.matchTNodeWithReadOption(t,n,Yi(n,t,i,!1,!1))}else r===Da?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Yi(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===Io||o===Zl||o===Da&&4&n.type)this.addMatch(n.index,-2);else{const i=Yi(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function G0(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function z0(e,t,n,r){return-1===n?function(e,t){return 11&e.type?As(e,t):4&e.type?Ql(e,t):null}(t,e):-2===n?function(e,t,n){return n===Io?As(t,e):n===Da?Ql(t,e):n===Zl?Am(t,e):void 0}(e,t,r):Ei(e,e[1],n,t)}function oy(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,a=[];for(let c=0;c<s.length;c+=2){const g=s[c];a.push(g<0?null:z0(t,i[g],s[c+1],n.metadata.read))}o.matches=a}return o.matches}function Od(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=oy(e,t,o,n);for(let a=0;a<i.length;a+=2){const c=i[a];if(c>0)r.push(s[a/2]);else{const g=i[a+1],E=t[-c];for(let I=10;I<E.length;I++){const S=E[I];S[17]===S[3]&&Od(S[1],S,g,r)}if(null!==E[9]){const I=E[9];for(let S=0;S<I.length;S++){const N=I[S];Od(N[1],N,g,r)}}}}}return r}function iy(e){const t=oe(),n=at(),r=za();Lo(r+1);const o=cy(n,r);if(e.dirty&&zr(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Od(n,t,r,[]):oy(n,t,o,r);e.reset(i,pm),e.notifyOnChanges()}return!0}return!1}function sy(e,t,n,r){const o=at();if(o.firstCreatePass){const i=Zt();(function(e,t,n){null===e.queries&&(e.queries=new xd),e.queries.track(new Rd(t,n))})(o,new ry(t,n,r),i.index),function(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}!function(e,t,n){const r=new tu(4==(4&n));kh(e,t,r,r.destroy),null===t[19]&&(t[19]=new Sd),t[19].queries.push(new Td(r))}(o,oe(),n)}function ay(){return e=oe(),t=za(),e[19].queries[t].queryList;var e,t}function cy(e,t){return e.queries.getByIndex(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dy(e,t){return Ql(e,t)}
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
       */const Ld=new P("Application Initializer");
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
       */let Ns=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Gl,this.reject=Gl,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(Yc(i))n.push(i);else if(qc(i)){const s=new Promise((a,c)=>{i.subscribe({complete:a,error:c})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(ln(Ld,8))},e.\u0275prov=pt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Sy=new P("AppId"),bM={provide:Sy,useFactory:function(){return`${jd()}${jd()}${jd()}`},deps:[]};function jd(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const xy=new P("Platform Initializer"),Ry=new P("Platform ID"),Oy=new P("appBootstrapListener");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ny=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=pt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ou=new P("LocaleId"),Py=new P("DefaultCurrencyCode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class MM{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}const Bd=function(e){return new Ad(e)},AM=Bd,IM=function(e){return Promise.resolve(Bd(e))},Fy=function(e){const t=Bd(e),r=Do(on(e).declarations).reduce((o,i)=>{const s=Nt(i);return s&&o.push(new qm(s)),o},[]);return new MM(t,r)},TM=Fy,SM=function(e){return Promise.resolve(Fy(e))};let Na=(()=>{class e{constructor(){this.compileModuleSync=AM,this.compileModuleAsync=IM,this.compileModuleAndAllComponentsSync=TM,this.compileModuleAndAllComponentsAsync=SM}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=pt({token:e,factory:e.\u0275fac}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const OM=(()=>Promise.resolve(0))();function Ud(e){"undefined"==typeof Zone?OM.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class Cr{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new To(!1),this.onMicrotaskEmpty=new To(!1),this.onStable=new To(!1),this.onError=new To(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function(){let e=ct.requestAnimationFrame,t=ct.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=()=>{!function(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ct,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,$d(e),e.isCheckStableRunning=!0,Hd(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),$d(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return Vy(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),ky(e)}},onInvoke:(n,r,o,i,s,a,c)=>{try{return Vy(e),n.invoke(o,i,s,a,c)}finally{e.shouldCoalesceRunChangeDetection&&t(),ky(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,$d(e),Hd(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Cr.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Cr.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,PM,Gl,Gl);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const PM={};function Hd(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function $d(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function Vy(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function ky(e){e._nesting--,Hd(e)}class kM{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new To,this.onMicrotaskEmpty=new To,this.onStable=new To,this.onError=new To}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ly=(()=>{class e{constructor(n){this._ngZone=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Cr.assertNotInAngularZone(),Ud(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Ud(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(ln(Cr))},e.\u0275prov=pt({token:e,factory:e.\u0275fac}),e})(),jy=(()=>{class e{constructor(){this._applications=new Map,Gd.addToWindow(this)}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Gd.findTestabilityInTree(this,n,r)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=pt({token:e,factory:e.\u0275fac}),e})();class LM{addToWindow(t){}findTestabilityInTree(t,n,r){return null}}function jM(e){Gd=e}let Gd=new LM,By=!0,Uy=!1;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function BM(){if(Uy)throw new Error("Cannot enable prod mode after platform setup.");By=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let io;const $y=new P("AllowMultipleToken");class YM{constructor(t,n){this.name=t,this.token=n}}function Gy(e,t,n=[]){const r=`Platform: ${t}`,o=new P(r);return(i=[])=>{let s=Wy();if(!s||s.injector.get($y,!1))if(e)e(n.concat(i).concat({provide:o,useValue:!0}));else{const a=n.concat(i).concat({provide:o,useValue:!0},{provide:ua,useValue:"platform"});!function(e){if(io&&!io.destroyed&&!io.injector.get($y,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");io=e.get(zy);const t=e.get(xy,null);t&&t.forEach(n=>n())}(wt.create({providers:a,name:r}))}return function(e){const t=Wy();if(!t)throw new Error("No platform exists!");if(!t.injector.get(e,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return t}(o)}}function Wy(){return io&&!io.destroyed?io:null}let zy=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const a=function(e,t){let n;return n="noop"===e?new kM:("zone.js"===e?void 0:e)||new Cr({enableLongStackTrace:(Uy=!0,By),shouldCoalesceEventChangeDetection:!!(null==t?void 0:t.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==t?void 0:t.ngZoneRunCoalescing)}),n}(r?r.ngZone:void 0,{ngZoneEventCoalescing:r&&r.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:r&&r.ngZoneRunCoalescing||!1}),c=[{provide:Cr,useValue:a}];return a.run(()=>{const g=wt.create({providers:c,parent:this.injector,name:n.moduleType.name}),E=n.create(g),I=E.injector.get(rs,null);if(!I)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return a.runOutsideAngular(()=>{const S=a.onError.subscribe({next:N=>{I.handleError(N)}});E.onDestroy(()=>{Wd(this._modules,E),S.unsubscribe()})}),function(e,t,n){try{const r=n();return Yc(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(I,a,()=>{const S=E.injector.get(Ns);return S.runInitializers(),S.donePromise.then(()=>(od(E.injector.get(ou,jl)||jl),this._moduleDoBootstrap(E),E))})})}bootstrapModule(n,r=[]){const o=Yy({},r);return function(e,t,n){const r=new Ad(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(Pa);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new Error(`The module ${K(n.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(ln(wt))},e.\u0275prov=pt({token:e,factory:e.\u0275fac}),e})();function Yy(e,t){return Array.isArray(t)?t.reduce(Yy,e):Object.assign(Object.assign({},e),t)}let Pa=(()=>{class e{constructor(n,r,o,i,s){this._zone=n,this._injector=r,this._exceptionHandler=o,this._componentFactoryResolver=i,this._initStatus=s,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const a=new m.y(g=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{g.next(this._stable),g.complete()})}),c=new m.y(g=>{let E;this._zone.runOutsideAngular(()=>{E=this._zone.onStable.subscribe(()=>{Cr.assertNotInAngularZone(),Ud(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,g.next(!0))})})});const I=this._zone.onUnstable.subscribe(()=>{Cr.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{g.next(!1)}))});return()=>{E.unsubscribe(),I.unsubscribe()}});this.isStable=function(...e){let t=Number.POSITIVE_INFINITY,n=null,r=e[e.length-1];return(0,h.K)(r)?(n=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(t=e.pop())):"number"==typeof r&&(t=e.pop()),null===n&&1===e.length&&e[0]instanceof m.y?e[0]:(0,ce.J)(t)((0,we.n)(e,n))}(a,c.pipe(e=>(0,W.x)()(function(e,t){return function(r){let o;o="function"==typeof e?e:function(){return e};const i=Object.create(r,he.N);return i.source=r,i.subjectFactory=o,i}}(H)(e))))}bootstrap(n,r){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let o;o=n instanceof dm?n:this._componentFactoryResolver.resolveComponentFactory(n),this.componentTypes.push(o.componentType);const i=function(e){return e.isBoundToModule}(o)?void 0:this._injector.get(Oi),a=o.create(wt.NULL,[],r||o.selector,i),c=a.location.nativeElement,g=a.injector.get(Ly,null),E=g&&a.injector.get(jy);return g&&E&&E.registerApplication(c,g),a.onDestroy(()=>{this.detachView(a.hostView),Wd(this.components,a),E&&E.unregisterApplication(c)}),this._loadComponent(a),a}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Wd(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(Oy,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}return e.\u0275fac=function(n){return new(n||e)(ln(Cr),ln(wt),ln(rs),ln(Ri),ln(Ns))},e.\u0275prov=pt({token:e,factory:e.\u0275fac}),e})();function Wd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
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
class XM{}class tA{}const nA={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};let rA=(()=>{class e{constructor(n,r){this._compiler=n,this._config=r||nA}load(n){return this.loadAndCompile(n)}loadAndCompile(n){let[r,o]=n.split("#");return void 0===o&&(o="default"),V(8255)(r).then(i=>i[o]).then(i=>Ky(i,r,o)).then(i=>this._compiler.compileModuleAsync(i))}loadFactory(n){let[r,o]=n.split("#"),i="NgFactory";return void 0===o&&(o="default",i=""),V(8255)(this._config.factoryPathPrefix+r+this._config.factoryPathSuffix).then(s=>s[o+i]).then(s=>Ky(s,r,o))}}return e.\u0275fac=function(n){return new(n||e)(ln(Na),ln(tA,8))},e.\u0275prov=pt({token:e,factory:e.\u0275fac}),e})();function Ky(e,t,n){if(!e)throw new Error(`Cannot find '${n}' in '${t}'`);return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const dA=function(e){return null},hA=Gy(null,"core",[{provide:Ry,useValue:"unknown"},{provide:zy,deps:[wt]},{provide:jy,deps:[]},{provide:Ny,deps:[]}]),_A=[{provide:Pa,useClass:Pa,deps:[Cr,wt,rs,Ri,Ns]},{provide:y0,deps:[Cr],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(n){t.push(n)}}},{provide:Ns,useClass:Ns,deps:[[new $o,Ld]]},{provide:Na,useClass:Na,deps:[]},bM,{provide:zl,useFactory:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){return dw},deps:[]},{provide:Yl,useFactory:function(){return fw},deps:[]},{provide:ou,useFactory:function(e){return od(e=e||"undefined"!=typeof $localize&&$localize.locale||jl),e},deps:[[new Xi(ou),new $o,new ii]]},{provide:Py,useValue:"USD"}];let vA=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(ln(Pa))},e.\u0275mod=Gn({type:e}),e.\u0275inj=vt({providers:_A}),e})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
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
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */,665:(He,ue,V)=>{"use strict";V.d(ue,{Fj:()=>et,CE:()=>Nn,qu:()=>Gr,u:()=>fr,sg:()=>fn,x0:()=>Ht,u5:()=>js,nD:()=>L,wO:()=>R,JJ:()=>Mr,JL:()=>ee,YN:()=>co,c5:()=>be,UX:()=>pr,Q7:()=>Sr,EJ:()=>tt,kI:()=>vr,_Y:()=>lt,Kr:()=>an});var m=V(639),h=V(8583),ce=V(7574),we=V(9796),de=V(8002),ie=V(1555),fe=V(4402);function se(v,_){return new ce.y(f=>{const M=v.length;if(0===M)return void f.complete();const Y=new Array(M);let Me=0,y=0;for(let b=0;b<M;b++){const C=(0,fe.D)(v[b]);let T=!1;f.add(C.subscribe({next:F=>{T||(T=!0,y++),Y[b]=F},error:F=>f.error(F),complete:()=>{Me++,(Me===M||!T)&&(y===M&&f.next(_?_.reduce((F,Q,re)=>(F[Q]=Y[re],F),{}):Y),f.complete())}}))}})}
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
       */let U=(()=>{class v{constructor(f,M){this._renderer=f,this._elementRef=M,this.onChange=Y=>{},this.onTouched=()=>{}}setProperty(f,M){this._renderer.setProperty(this._elementRef.nativeElement,f,M)}registerOnTouched(f){this.onTouched=f}registerOnChange(f){this.onChange=f}setDisabledState(f){this.setProperty("disabled",f)}}return v.\u0275fac=function(f){return new(f||v)(m.Y36(m.Qsj),m.Y36(m.SBq))},v.\u0275dir=m.lG2({type:v}),v})(),W=(()=>{class v extends U{}return v.\u0275fac=function(){let _;return function(M){return(_||(_=m.n5z(v)))(M||v)}}(),v.\u0275dir=m.lG2({type:v,features:[m.qOj]}),v})();const H=new m.OlP("NgValueAccessor"),ge={provide:H,useExisting:(0,m.Gpc)(()=>et),multi:!0},Oe=new m.OlP("CompositionEventMode");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let et=(()=>{class v extends U{constructor(f,M,Y){super(f,M),this._compositionMode=Y,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const v=(0,h.q)()?(0,h.q)().getUserAgent():"";return/android (\d+)/.test(v.toLowerCase())}())}writeValue(f){this.setProperty("value",null==f?"":f)}_handleInput(f){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(f)}_compositionStart(){this._composing=!0}_compositionEnd(f){this._composing=!1,this._compositionMode&&this.onChange(f)}}return v.\u0275fac=function(f){return new(f||v)(m.Y36(m.Qsj),m.Y36(m.SBq),m.Y36(Oe,8))},v.\u0275dir=m.lG2({type:v,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(f,M){1&f&&m.NdJ("input",function(Me){return M._handleInput(Me.target.value)})("blur",function(){return M.onTouched()})("compositionstart",function(){return M._compositionStart()})("compositionend",function(Me){return M._compositionEnd(Me.target.value)})},features:[m._Bn([ge]),m.qOj]}),v})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Se(v){return null==v||0===v.length}function pe(v){return null!=v&&"number"==typeof v.length}const ve=new m.OlP("NgValidators"),Vt=new m.OlP("NgAsyncValidators"),Ut=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class vr{static min(_){return v=_,_=>{if(Se(_.value)||Se(v))return null;const f=parseFloat(_.value);return!isNaN(f)&&f<v?{min:{min:v,actual:_.value}}:null};var v}static max(_){return v=_,_=>{if(Se(_.value)||Se(v))return null;const f=parseFloat(_.value);return!isNaN(f)&&f>v?{max:{max:v,actual:_.value}}:null};var v}static required(_){return Ze(_)}static requiredTrue(_){return!0===_.value?null:{required:!0}}static email(_){return Se((v=_).value)||Ut.test(v.value)?null:{email:!0};var v}static minLength(_){return ke(_)}static maxLength(_){return Ie(_)}static pattern(_){return me(_)}static nullValidator(_){return null}static compose(_){return xo(_)}static composeAsync(_){return Kn(_)}}function Ze(v){return Se(v.value)?{required:!0}:null}function ke(v){return _=>Se(_.value)||!pe(_.value)?null:_.value.length<v?{minlength:{requiredLength:v,actualLength:_.value.length}}:null}function Ie(v){return _=>pe(_.value)&&_.value.length>v?{maxlength:{requiredLength:v,actualLength:_.value.length}}:null}function me(v){if(!v)return Mt;let _,f;return"string"==typeof v?(f="","^"!==v.charAt(0)&&(f+="^"),f+=v,"$"!==v.charAt(v.length-1)&&(f+="$"),_=new RegExp(f)):(f=v.toString(),_=v),M=>{if(Se(M.value))return null;const Y=M.value;return _.test(Y)?null:{pattern:{requiredPattern:f,actualValue:Y}}}}function Mt(v){return null}function Bn(v){return null!=v}function sr(v){const _=(0,m.QGY)(v)?(0,fe.D)(v):v;return(0,m.CqO)(_),_}function nn(v){let _={};return v.forEach(f=>{_=null!=f?Object.assign(Object.assign({},_),f):_}),0===Object.keys(_).length?null:_}function Dr(v,_){return _.map(f=>f(v))}function So(v){return v.map(_=>function(v){return!v.validate}(_)?_:f=>_.validate(f))}function xo(v){if(!v)return null;const _=v.filter(Bn);return 0==_.length?null:function(f){return nn(Dr(f,_))}}function Un(v){return null!=v?xo(So(v)):null}function Kn(v){if(!v)return null;const _=v.filter(Bn);return 0==_.length?null:function(f){return function(...v){if(1===v.length){const _=v[0];if((0,we.k)(_))return se(_,null);if((0,ie.K)(_)&&Object.getPrototypeOf(_)===Object.prototype){const f=Object.keys(_);return se(f.map(M=>_[M]),f)}}if("function"==typeof v[v.length-1]){const _=v.pop();return se(v=1===v.length&&(0,we.k)(v[0])?v[0]:v,null).pipe((0,de.U)(f=>_(...f)))}return se(v,null)}(Dr(f,_).map(sr)).pipe((0,de.U)(nn))}}function un(v){return null!=v?Kn(So(v)):null}function Gt(v,_){return null===v?[_]:Array.isArray(v)?[...v,_]:[v,_]}function ht(v){return v._rawValidators}function Je(v){return v._rawAsyncValidators}function Hn(v){return v?Array.isArray(v)?v:[v]:[]}function Mn(v,_){return Array.isArray(v)?v.includes(_):v===_}function ar(v,_){const f=Hn(_);return Hn(v).forEach(Y=>{Mn(f,Y)||f.push(Y)}),f}function pt(v,_){return Hn(_).filter(f=>!Mn(v,f))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let br=(()=>{class v{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(f){this._rawValidators=f||[],this._composedValidatorFn=Un(this._rawValidators)}_setAsyncValidators(f){this._rawAsyncValidators=f||[],this._composedAsyncValidatorFn=un(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(f){this._onDestroyCallbacks.push(f)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(f=>f()),this._onDestroyCallbacks=[]}reset(f){this.control&&this.control.reset(f)}hasError(f,M){return!!this.control&&this.control.hasError(f,M)}getError(f,M){return this.control?this.control.getError(f,M):null}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return v.\u0275fac=function(f){return new(f||v)},v.\u0275dir=m.lG2({type:v}),v})(),vt=(()=>{class v extends br{get formDirective(){return null}get path(){return null}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
return v.\u0275fac=function(){let _;return function(M){return(_||(_=m.n5z(v)))(M||v)}}(),v.\u0275dir=m.lG2({type:v,features:[m.qOj]}),v})();class kt extends br{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class wr{constructor(_){this._cd=_}is(_){var f,M,Y;return"submitted"===_?!!(null===(f=this._cd)||void 0===f?void 0:f.submitted):!!(null===(Y=null===(M=this._cd)||void 0===M?void 0:M.control)||void 0===Y?void 0:Y[_])}}let Mr=(()=>{class v extends wr{constructor(f){super(f)}}return v.\u0275fac=function(f){return new(f||v)(m.Y36(kt,2))},v.\u0275dir=m.lG2({type:v,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(f,M){2&f&&m.ekj("ng-untouched",M.is("untouched"))("ng-touched",M.is("touched"))("ng-pristine",M.is("pristine"))("ng-dirty",M.is("dirty"))("ng-valid",M.is("valid"))("ng-invalid",M.is("invalid"))("ng-pending",M.is("pending"))},features:[m.qOj]}),v})(),ee=(()=>{class v extends wr{constructor(f){super(f)}}return v.\u0275fac=function(f){return new(f||v)(m.Y36(vt,10))},v.\u0275dir=m.lG2({type:v,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(f,M){2&f&&m.ekj("ng-untouched",M.is("untouched"))("ng-touched",M.is("touched"))("ng-pristine",M.is("pristine"))("ng-dirty",M.is("dirty"))("ng-valid",M.is("valid"))("ng-invalid",M.is("invalid"))("ng-pending",M.is("pending"))("ng-submitted",M.is("submitted"))},features:[m.qOj]}),v})();
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
function ne(v,_){return[..._.path,v]}function G(v,_){We(v,_),_.valueAccessor.writeValue(v.value),function(v,_){_.valueAccessor.registerOnChange(f=>{v._pendingValue=f,v._pendingChange=!0,v._pendingDirty=!0,"change"===v.updateOn&&Rt(v,_)})}(v,_),function(v,_){const f=(M,Y)=>{_.valueAccessor.writeValue(M),Y&&_.viewToModelUpdate(M)};v.registerOnChange(f),_._registerOnDestroy(()=>{v._unregisterOnChange(f)})}(v,_),function(v,_){_.valueAccessor.registerOnTouched(()=>{v._pendingTouched=!0,"blur"===v.updateOn&&v._pendingChange&&Rt(v,_),"submit"!==v.updateOn&&v.markAsTouched()})}(v,_),function(v,_){if(_.valueAccessor.setDisabledState){const f=M=>{_.valueAccessor.setDisabledState(M)};v.registerOnDisabledChange(f),_._registerOnDestroy(()=>{v._unregisterOnDisabledChange(f)})}}(v,_)}function De(v,_,f=!0){const M=()=>{};_.valueAccessor&&(_.valueAccessor.registerOnChange(M),_.valueAccessor.registerOnTouched(M)),Dt(v,_),v&&(_._invokeOnDestroyCallbacks(),v._registerOnCollectionChange(()=>{}))}function ae(v,_){v.forEach(f=>{f.registerOnValidatorChange&&f.registerOnValidatorChange(_)})}function We(v,_){const f=ht(v);null!==_.validator?v.setValidators(Gt(f,_.validator)):"function"==typeof f&&v.setValidators([f]);const M=Je(v);null!==_.asyncValidator?v.setAsyncValidators(Gt(M,_.asyncValidator)):"function"==typeof M&&v.setAsyncValidators([M]);const Y=()=>v.updateValueAndValidity();ae(_._rawValidators,Y),ae(_._rawAsyncValidators,Y)}function Dt(v,_){let f=!1;if(null!==v){if(null!==_.validator){const Y=ht(v);if(Array.isArray(Y)&&Y.length>0){const Me=Y.filter(y=>y!==_.validator);Me.length!==Y.length&&(f=!0,v.setValidators(Me))}}if(null!==_.asyncValidator){const Y=Je(v);if(Array.isArray(Y)&&Y.length>0){const Me=Y.filter(y=>y!==_.asyncValidator);Me.length!==Y.length&&(f=!0,v.setAsyncValidators(Me))}}}const M=()=>{};return ae(_._rawValidators,M),ae(_._rawAsyncValidators,M),f}function Rt(v,_){v._pendingDirty&&v.markAsDirty(),v.setValue(v._pendingValue,{emitModelToViewChange:!1}),_.viewToModelUpdate(v._pendingValue),v._pendingChange=!1}function yn(v,_){const f=v.indexOf(_);f>-1&&v.splice(f,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const _n="VALID",$n="INVALID",An="PENDING",Rn="DISABLED";function cn(v){return($e(v)?v.validators:v)||null}function ur(v){return Array.isArray(v)?Un(v):v||null}function Lr(v,_){return($e(_)?_.asyncValidators:v)||null}function cr(v){return Array.isArray(v)?un(v):v||null}function $e(v){return null!=v&&!Array.isArray(v)&&"object"==typeof v}class dr{constructor(_,f){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=_,this._rawAsyncValidators=f,this._composedValidatorFn=ur(this._rawValidators),this._composedAsyncValidatorFn=cr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(_){this._rawValidators=this._composedValidatorFn=_}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(_){this._rawAsyncValidators=this._composedAsyncValidatorFn=_}get parent(){return this._parent}get valid(){return this.status===_n}get invalid(){return this.status===$n}get pending(){return this.status==An}get disabled(){return this.status===Rn}get enabled(){return this.status!==Rn}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(_){this._rawValidators=_,this._composedValidatorFn=ur(_)}setAsyncValidators(_){this._rawAsyncValidators=_,this._composedAsyncValidatorFn=cr(_)}addValidators(_){this.setValidators(ar(_,this._rawValidators))}addAsyncValidators(_){this.setAsyncValidators(ar(_,this._rawAsyncValidators))}removeValidators(_){this.setValidators(pt(_,this._rawValidators))}removeAsyncValidators(_){this.setAsyncValidators(pt(_,this._rawAsyncValidators))}hasValidator(_){return Mn(this._rawValidators,_)}hasAsyncValidator(_){return Mn(this._rawAsyncValidators,_)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(_={}){this.touched=!0,this._parent&&!_.onlySelf&&this._parent.markAsTouched(_)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(_=>_.markAllAsTouched())}markAsUntouched(_={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(f=>{f.markAsUntouched({onlySelf:!0})}),this._parent&&!_.onlySelf&&this._parent._updateTouched(_)}markAsDirty(_={}){this.pristine=!1,this._parent&&!_.onlySelf&&this._parent.markAsDirty(_)}markAsPristine(_={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(f=>{f.markAsPristine({onlySelf:!0})}),this._parent&&!_.onlySelf&&this._parent._updatePristine(_)}markAsPending(_={}){this.status=An,!1!==_.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!_.onlySelf&&this._parent.markAsPending(_)}disable(_={}){const f=this._parentMarkedDirty(_.onlySelf);this.status=Rn,this.errors=null,this._forEachChild(M=>{M.disable(Object.assign(Object.assign({},_),{onlySelf:!0}))}),this._updateValue(),!1!==_.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},_),{skipPristineCheck:f})),this._onDisabledChange.forEach(M=>M(!0))}enable(_={}){const f=this._parentMarkedDirty(_.onlySelf);this.status=_n,this._forEachChild(M=>{M.enable(Object.assign(Object.assign({},_),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:_.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},_),{skipPristineCheck:f})),this._onDisabledChange.forEach(M=>M(!1))}_updateAncestors(_){this._parent&&!_.onlySelf&&(this._parent.updateValueAndValidity(_),_.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(_){this._parent=_}updateValueAndValidity(_={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===_n||this.status===An)&&this._runAsyncValidator(_.emitEvent)),!1!==_.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!_.onlySelf&&this._parent.updateValueAndValidity(_)}_updateTreeValidity(_={emitEvent:!0}){this._forEachChild(f=>f._updateTreeValidity(_)),this.updateValueAndValidity({onlySelf:!0,emitEvent:_.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Rn:_n}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(_){if(this.asyncValidator){this.status=An,this._hasOwnPendingAsyncValidator=!0;const f=sr(this.asyncValidator(this));this._asyncValidationSubscription=f.subscribe(M=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(M,{emitEvent:_})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(_,f={}){this.errors=_,this._updateControlsErrors(!1!==f.emitEvent)}get(_){return function(v,_,f){if(null==_||(Array.isArray(_)||(_=_.split(".")),Array.isArray(_)&&0===_.length))return null;let M=v;return _.forEach(Y=>{M=M instanceof dn?M.controls.hasOwnProperty(Y)?M.controls[Y]:null:M instanceof Gn&&M.at(Y)||null}),M}(this,_)}getError(_,f){const M=f?this.get(f):this;return M&&M.errors?M.errors[_]:null}hasError(_,f){return!!this.getError(_,f)}get root(){let _=this;for(;_._parent;)_=_._parent;return _}_updateControlsErrors(_){this.status=this._calculateStatus(),_&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(_)}_initObservables(){this.valueChanges=new m.vpe,this.statusChanges=new m.vpe}_calculateStatus(){return this._allControlsDisabled()?Rn:this.errors?$n:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(An)?An:this._anyControlsHaveStatus($n)?$n:_n}_anyControlsHaveStatus(_){return this._anyControls(f=>f.status===_)}_anyControlsDirty(){return this._anyControls(_=>_.dirty)}_anyControlsTouched(){return this._anyControls(_=>_.touched)}_updatePristine(_={}){this.pristine=!this._anyControlsDirty(),this._parent&&!_.onlySelf&&this._parent._updatePristine(_)}_updateTouched(_={}){this.touched=this._anyControlsTouched(),this._parent&&!_.onlySelf&&this._parent._updateTouched(_)}_isBoxedValue(_){return"object"==typeof _&&null!==_&&2===Object.keys(_).length&&"value"in _&&"disabled"in _}_registerOnCollectionChange(_){this._onCollectionChange=_}_setUpdateStrategy(_){$e(_)&&null!=_.updateOn&&(this._updateOn=_.updateOn)}_parentMarkedDirty(_){return!_&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class yt extends dr{constructor(_=null,f,M){super(cn(f),Lr(M,f)),this._onChange=[],this._applyFormState(_),this._setUpdateStrategy(f),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(_,f={}){this.value=this._pendingValue=_,this._onChange.length&&!1!==f.emitModelToViewChange&&this._onChange.forEach(M=>M(this.value,!1!==f.emitViewToModelChange)),this.updateValueAndValidity(f)}patchValue(_,f={}){this.setValue(_,f)}reset(_=null,f={}){this._applyFormState(_),this.markAsPristine(f),this.markAsUntouched(f),this.setValue(this.value,f),this._pendingChange=!1}_updateValue(){}_anyControls(_){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(_){this._onChange.push(_)}_unregisterOnChange(_){yn(this._onChange,_)}registerOnDisabledChange(_){this._onDisabledChange.push(_)}_unregisterOnDisabledChange(_){yn(this._onDisabledChange,_)}_forEachChild(_){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(_){this._isBoxedValue(_)?(this.value=this._pendingValue=_.value,_.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=_}}class dn extends dr{constructor(_,f,M){super(cn(f),Lr(M,f)),this.controls=_,this._initObservables(),this._setUpdateStrategy(f),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(_,f){return this.controls[_]?this.controls[_]:(this.controls[_]=f,f.setParent(this),f._registerOnCollectionChange(this._onCollectionChange),f)}addControl(_,f,M={}){this.registerControl(_,f),this.updateValueAndValidity({emitEvent:M.emitEvent}),this._onCollectionChange()}removeControl(_,f={}){this.controls[_]&&this.controls[_]._registerOnCollectionChange(()=>{}),delete this.controls[_],this.updateValueAndValidity({emitEvent:f.emitEvent}),this._onCollectionChange()}setControl(_,f,M={}){this.controls[_]&&this.controls[_]._registerOnCollectionChange(()=>{}),delete this.controls[_],f&&this.registerControl(_,f),this.updateValueAndValidity({emitEvent:M.emitEvent}),this._onCollectionChange()}contains(_){return this.controls.hasOwnProperty(_)&&this.controls[_].enabled}setValue(_,f={}){this._checkAllValuesPresent(_),Object.keys(_).forEach(M=>{this._throwIfControlMissing(M),this.controls[M].setValue(_[M],{onlySelf:!0,emitEvent:f.emitEvent})}),this.updateValueAndValidity(f)}patchValue(_,f={}){null!=_&&(Object.keys(_).forEach(M=>{this.controls[M]&&this.controls[M].patchValue(_[M],{onlySelf:!0,emitEvent:f.emitEvent})}),this.updateValueAndValidity(f))}reset(_={},f={}){this._forEachChild((M,Y)=>{M.reset(_[Y],{onlySelf:!0,emitEvent:f.emitEvent})}),this._updatePristine(f),this._updateTouched(f),this.updateValueAndValidity(f)}getRawValue(){return this._reduceChildren({},(_,f,M)=>(_[M]=f instanceof yt?f.value:f.getRawValue(),_))}_syncPendingControls(){let _=this._reduceChildren(!1,(f,M)=>!!M._syncPendingControls()||f);return _&&this.updateValueAndValidity({onlySelf:!0}),_}_throwIfControlMissing(_){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[_])throw new Error(`Cannot find form control with name: ${_}.`)}_forEachChild(_){Object.keys(this.controls).forEach(f=>{const M=this.controls[f];M&&_(M,f)})}_setUpControls(){this._forEachChild(_=>{_.setParent(this),_._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(_){for(const f of Object.keys(this.controls)){const M=this.controls[f];if(this.contains(f)&&_(M))return!0}return!1}_reduceValue(){return this._reduceChildren({},(_,f,M)=>((f.enabled||this.disabled)&&(_[M]=f.value),_))}_reduceChildren(_,f){let M=_;return this._forEachChild((Y,Me)=>{M=f(M,Y,Me)}),M}_allControlsDisabled(){for(const _ of Object.keys(this.controls))if(this.controls[_].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(_){this._forEachChild((f,M)=>{if(void 0===_[M])throw new Error(`Must supply a value for form control with name: '${M}'.`)})}}class Gn extends dr{constructor(_,f,M){super(cn(f),Lr(M,f)),this.controls=_,this._initObservables(),this._setUpdateStrategy(f),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(_){return this.controls[_]}push(_,f={}){this.controls.push(_),this._registerControl(_),this.updateValueAndValidity({emitEvent:f.emitEvent}),this._onCollectionChange()}insert(_,f,M={}){this.controls.splice(_,0,f),this._registerControl(f),this.updateValueAndValidity({emitEvent:M.emitEvent})}removeAt(_,f={}){this.controls[_]&&this.controls[_]._registerOnCollectionChange(()=>{}),this.controls.splice(_,1),this.updateValueAndValidity({emitEvent:f.emitEvent})}setControl(_,f,M={}){this.controls[_]&&this.controls[_]._registerOnCollectionChange(()=>{}),this.controls.splice(_,1),f&&(this.controls.splice(_,0,f),this._registerControl(f)),this.updateValueAndValidity({emitEvent:M.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(_,f={}){this._checkAllValuesPresent(_),_.forEach((M,Y)=>{this._throwIfControlMissing(Y),this.at(Y).setValue(M,{onlySelf:!0,emitEvent:f.emitEvent})}),this.updateValueAndValidity(f)}patchValue(_,f={}){null!=_&&(_.forEach((M,Y)=>{this.at(Y)&&this.at(Y).patchValue(M,{onlySelf:!0,emitEvent:f.emitEvent})}),this.updateValueAndValidity(f))}reset(_=[],f={}){this._forEachChild((M,Y)=>{M.reset(_[Y],{onlySelf:!0,emitEvent:f.emitEvent})}),this._updatePristine(f),this._updateTouched(f),this.updateValueAndValidity(f)}getRawValue(){return this.controls.map(_=>_ instanceof yt?_.value:_.getRawValue())}clear(_={}){this.controls.length<1||(this._forEachChild(f=>f._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:_.emitEvent}))}_syncPendingControls(){let _=this.controls.reduce((f,M)=>!!M._syncPendingControls()||f,!1);return _&&this.updateValueAndValidity({onlySelf:!0}),_}_throwIfControlMissing(_){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(_))throw new Error(`Cannot find form control at index ${_}`)}_forEachChild(_){this.controls.forEach((f,M)=>{_(f,M)})}_updateValue(){this.value=this.controls.filter(_=>_.enabled||this.disabled).map(_=>_.value)}_anyControls(_){return this.controls.some(f=>f.enabled&&_(f))}_setUpControls(){this._forEachChild(_=>this._registerControl(_))}_checkAllValuesPresent(_){this._forEachChild((f,M)=>{if(void 0===_[M])throw new Error(`Must supply a value for form control at index: ${M}.`)})}_allControlsDisabled(){for(const _ of this.controls)if(_.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(_){_.setParent(this),_._registerOnCollectionChange(this._onCollectionChange)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Nt=(()=>{class v extends vt{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return ne(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}}return v.\u0275fac=function(){let _;return function(M){return(_||(_=m.n5z(v)))(M||v)}}(),v.\u0275dir=m.lG2({type:v,features:[m.qOj]}),v})(),lt=(()=>{class v{}return v.\u0275fac=function(f){return new(f||v)},v.\u0275dir=m.lG2({type:v,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),v})(),mt=(()=>{class v{}return v.\u0275fac=function(f){return new(f||v)},v.\u0275mod=m.oAB({type:v}),v.\u0275inj=m.cJS({}),v})();
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
const en=new m.OlP("NgModelWithFormControlWarning"),Qt={provide:vt,useExisting:(0,m.Gpc)(()=>fn)};let fn=(()=>{class v extends vt{constructor(f,M){super(),this.validators=f,this.asyncValidators=M,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new m.vpe,this._setValidators(f),this._setAsyncValidators(M)}ngOnChanges(f){this._checkFormPresent(),f.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Dt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(f){const M=this.form.get(f.path);return G(M,f),M.updateValueAndValidity({emitEvent:!1}),this.directives.push(f),M}getControl(f){return this.form.get(f.path)}removeControl(f){De(f.control||null,f,!1),yn(this.directives,f)}addFormGroup(f){this._setUpFormContainer(f)}removeFormGroup(f){this._cleanUpFormContainer(f)}getFormGroup(f){return this.form.get(f.path)}addFormArray(f){this._setUpFormContainer(f)}removeFormArray(f){this._cleanUpFormContainer(f)}getFormArray(f){return this.form.get(f.path)}updateModel(f,M){this.form.get(f.path).setValue(M)}onSubmit(f){return this.submitted=!0,function(v,_){v._syncPendingControls(),_.forEach(f=>{const M=f.control;"submit"===M.updateOn&&M._pendingChange&&(f.viewToModelUpdate(M._pendingValue),M._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(f),!1}onReset(){this.resetForm()}resetForm(f){this.form.reset(f),this.submitted=!1}_updateDomValue(){this.directives.forEach(f=>{const M=f.control,Y=this.form.get(f.path);M!==Y&&(De(M||null,f),Y instanceof yt&&(G(Y,f),f.control=Y))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(f){const M=this.form.get(f.path);(function(v,_){We(v,_)})(M,f),M.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(f){if(this.form){const M=this.form.get(f.path);M&&function(v,_){return Dt(v,_)}(M,f)&&M.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){We(this.form,this),this._oldForm&&Dt(this._oldForm,this)}_checkFormPresent(){}}return v.\u0275fac=function(f){return new(f||v)(m.Y36(ve,10),m.Y36(Vt,10))},v.\u0275dir=m.lG2({type:v,selectors:[["","formGroup",""]],hostBindings:function(f,M){1&f&&m.NdJ("submit",function(Me){return M.onSubmit(Me)})("reset",function(){return M.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[m._Bn([Qt]),m.qOj,m.TTD]}),v})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const In={provide:vt,useExisting:(0,m.Gpc)(()=>Ht)};let Ht=(()=>{class v extends Nt{constructor(f,M,Y){super(),this._parent=f,this._setValidators(M),this._setAsyncValidators(Y)}_checkParentType(){uo(this._parent)}}return v.\u0275fac=function(f){return new(f||v)(m.Y36(vt,13),m.Y36(ve,10),m.Y36(Vt,10))},v.\u0275dir=m.lG2({type:v,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[m._Bn([In]),m.qOj]}),v})();const ot={provide:vt,useExisting:(0,m.Gpc)(()=>Nn)};let Nn=(()=>{class v extends vt{constructor(f,M,Y){super(),this._parent=f,this._setValidators(M),this._setAsyncValidators(Y)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return ne(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){uo(this._parent)}}return v.\u0275fac=function(f){return new(f||v)(m.Y36(vt,13),m.Y36(ve,10),m.Y36(Vt,10))},v.\u0275dir=m.lG2({type:v,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[m._Bn([ot]),m.qOj]}),v})();function uo(v){return!(v instanceof Ht||v instanceof fn||v instanceof Nn)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Pn={provide:kt,useExisting:(0,m.Gpc)(()=>fr)};let fr=(()=>{class v extends kt{constructor(f,M,Y,Me,y){super(),this._ngModelWarningConfig=y,this._added=!1,this.update=new m.vpe,this._ngModelWarningSent=!1,this._parent=f,this._setValidators(M),this._setAsyncValidators(Y),this.valueAccessor=function(v,_){if(!_)return null;let f,M,Y;return Array.isArray(_),_.forEach(Me=>{Me.constructor===et?f=Me:function(v){return Object.getPrototypeOf(v.constructor)===W}(Me)?M=Me:Y=Me}),Y||M||f||null}(0,Me)}set isDisabled(f){}ngOnChanges(f){this._added||this._setUpControl(),function(v,_){if(!v.hasOwnProperty("model"))return!1;const f=v.model;return!!f.isFirstChange()||!Object.is(_,f.currentValue)}(f,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(f){this.viewModel=f,this.update.emit(f)}get path(){return ne(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return v.\u0275fac=function(f){return new(f||v)(m.Y36(vt,13),m.Y36(ve,10),m.Y36(Vt,10),m.Y36(H,10),m.Y36(en,8))},v.\u0275dir=m.lG2({type:v,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[m._Bn([Pn]),m.qOj,m.TTD]}),v._ngModelWarningSentOnce=!1,v})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const zn={provide:H,useExisting:(0,m.Gpc)(()=>tt),multi:!0};function Fn(v,_){return null==v?`${_}`:(_&&"object"==typeof _&&(_="Object"),`${v}: ${_}`.slice(0,50))}let tt=(()=>{class v extends W{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(f){this._compareWith=f}writeValue(f){this.value=f;const M=this._getOptionId(f);null==M&&this.setProperty("selectedIndex",-1);const Y=Fn(M,f);this.setProperty("value",Y)}registerOnChange(f){this.onChange=M=>{this.value=this._getOptionValue(M),f(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(f){for(const M of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(M),f))return M;return null}_getOptionValue(f){const M=function(v){return v.split(":")[0]}(f);return this._optionMap.has(M)?this._optionMap.get(M):f}}return v.\u0275fac=function(){let _;return function(M){return(_||(_=m.n5z(v)))(M||v)}}(),v.\u0275dir=m.lG2({type:v,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(f,M){1&f&&m.NdJ("change",function(Me){return M.onChange(Me.target.value)})("blur",function(){return M.onTouched()})},inputs:{compareWith:"compareWith"},features:[m._Bn([zn]),m.qOj]}),v})(),co=(()=>{class v{constructor(f,M,Y){this._element=f,this._renderer=M,this._select=Y,this._select&&(this.id=this._select._registerOption())}set ngValue(f){null!=this._select&&(this._select._optionMap.set(this.id,f),this._setElementValue(Fn(this.id,f)),this._select.writeValue(this._select.value))}set value(f){this._setElementValue(f),this._select&&this._select.writeValue(this._select.value)}_setElementValue(f){this._renderer.setProperty(this._element.nativeElement,"value",f)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return v.\u0275fac=function(f){return new(f||v)(m.Y36(m.SBq),m.Y36(m.Qsj),m.Y36(tt,9))},v.\u0275dir=m.lG2({type:v,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),v})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Dn={provide:H,useExisting:(0,m.Gpc)(()=>nr),multi:!0};function sn(v,_){return null==v?`${_}`:("string"==typeof _&&(_=`'${_}'`),_&&"object"==typeof _&&(_="Object"),`${v}: ${_}`.slice(0,50))}let nr=(()=>{class v extends W{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(f){this._compareWith=f}writeValue(f){let M;if(this.value=f,Array.isArray(f)){const Y=f.map(Me=>this._getOptionId(Me));M=(Me,y)=>{Me._setSelected(Y.indexOf(y.toString())>-1)}}else M=(Y,Me)=>{Y._setSelected(!1)};this._optionMap.forEach(M)}registerOnChange(f){this.onChange=M=>{const Y=[];if(void 0!==M.selectedOptions){const Me=M.selectedOptions;for(let y=0;y<Me.length;y++){const b=Me.item(y),C=this._getOptionValue(b.value);Y.push(C)}}else{const Me=M.options;for(let y=0;y<Me.length;y++){const b=Me.item(y);if(b.selected){const C=this._getOptionValue(b.value);Y.push(C)}}}this.value=Y,f(Y)}}_registerOption(f){const M=(this._idCounter++).toString();return this._optionMap.set(M,f),M}_getOptionId(f){for(const M of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(M)._value,f))return M;return null}_getOptionValue(f){const M=function(v){return v.split(":")[0]}(f);return this._optionMap.has(M)?this._optionMap.get(M)._value:f}}return v.\u0275fac=function(){let _;return function(M){return(_||(_=m.n5z(v)))(M||v)}}(),v.\u0275dir=m.lG2({type:v,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(f,M){1&f&&m.NdJ("change",function(Me){return M.onChange(Me.target)})("blur",function(){return M.onTouched()})},inputs:{compareWith:"compareWith"},features:[m._Bn([Dn]),m.qOj]}),v})(),an=(()=>{class v{constructor(f,M,Y){this._element=f,this._renderer=M,this._select=Y,this._select&&(this.id=this._select._registerOption(this))}set ngValue(f){null!=this._select&&(this._value=f,this._setElementValue(sn(this.id,f)),this._select.writeValue(this._select.value))}set value(f){this._select?(this._value=f,this._setElementValue(sn(this.id,f)),this._select.writeValue(this._select.value)):this._setElementValue(f)}_setElementValue(f){this._renderer.setProperty(this._element.nativeElement,"value",f)}_setSelected(f){this._renderer.setProperty(this._element.nativeElement,"selected",f)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return v.\u0275fac=function(f){return new(f||v)(m.Y36(m.SBq),m.Y36(m.Qsj),m.Y36(nr,9))},v.\u0275dir=m.lG2({type:v,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),v})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fo(v){return"number"==typeof v?v:parseInt(v,10)}const Tr={provide:ve,useExisting:(0,m.Gpc)(()=>Sr),multi:!0};let Sr=(()=>{class v{constructor(){this._required=!1}get required(){return this._required}set required(f){this._required=null!=f&&!1!==f&&"false"!=`${f}`,this._onChange&&this._onChange()}validate(f){return this.required?Ze(f):null}registerOnValidatorChange(f){this._onChange=f}}return v.\u0275fac=function(f){return new(f||v)},v.\u0275dir=m.lG2({type:v,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(f,M){2&f&&m.uIk("required",M.required?"":null)},inputs:{required:"required"},features:[m._Bn([Tr])]}),v})();const x={provide:ve,useExisting:(0,m.Gpc)(()=>R),multi:!0};let R=(()=>{class v{constructor(){this._validator=Mt}ngOnChanges(f){"minlength"in f&&(this._createValidator(),this._onChange&&this._onChange())}validate(f){return this.enabled()?this._validator(f):null}registerOnValidatorChange(f){this._onChange=f}_createValidator(){this._validator=this.enabled()?ke(fo(this.minlength)):Mt}enabled(){return null!=this.minlength}}return v.\u0275fac=function(f){return new(f||v)},v.\u0275dir=m.lG2({type:v,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(f,M){2&f&&m.uIk("minlength",M.enabled()?M.minlength:null)},inputs:{minlength:"minlength"},features:[m._Bn([x]),m.TTD]}),v})();const A={provide:ve,useExisting:(0,m.Gpc)(()=>L),multi:!0};let L=(()=>{class v{constructor(){this._validator=Mt}ngOnChanges(f){"maxlength"in f&&(this._createValidator(),this._onChange&&this._onChange())}validate(f){return this.enabled()?this._validator(f):null}registerOnValidatorChange(f){this._onChange=f}_createValidator(){this._validator=this.enabled()?Ie(fo(this.maxlength)):Mt}enabled(){return null!=this.maxlength}}return v.\u0275fac=function(f){return new(f||v)},v.\u0275dir=m.lG2({type:v,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(f,M){2&f&&m.uIk("maxlength",M.enabled()?M.maxlength:null)},inputs:{maxlength:"maxlength"},features:[m._Bn([A]),m.TTD]}),v})();const q={provide:ve,useExisting:(0,m.Gpc)(()=>be),multi:!0};let be=(()=>{class v{constructor(){this._validator=Mt}ngOnChanges(f){"pattern"in f&&(this._createValidator(),this._onChange&&this._onChange())}validate(f){return this._validator(f)}registerOnValidatorChange(f){this._onChange=f}_createValidator(){this._validator=me(this.pattern)}}return v.\u0275fac=function(f){return new(f||v)},v.\u0275dir=m.lG2({type:v,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(f,M){2&f&&m.uIk("pattern",M.pattern?M.pattern:null)},inputs:{pattern:"pattern"},features:[m._Bn([q]),m.TTD]}),v})(),$r=(()=>{class v{}return v.\u0275fac=function(f){return new(f||v)},v.\u0275mod=m.oAB({type:v}),v.\u0275inj=m.cJS({imports:[[mt]]}),v})(),js=(()=>{class v{}return v.\u0275fac=function(f){return new(f||v)},v.\u0275mod=m.oAB({type:v}),v.\u0275inj=m.cJS({imports:[$r]}),v})(),pr=(()=>{class v{static withConfig(f){return{ngModule:v,providers:[{provide:en,useValue:f.warnOnNgModelWithFormControl}]}}}return v.\u0275fac=function(f){return new(f||v)},v.\u0275mod=m.oAB({type:v}),v.\u0275inj=m.cJS({imports:[$r]}),v})(),Gr=(()=>{class v{group(f,M=null){const Y=this._reduceControls(f);let b,Me=null,y=null;return null!=M&&(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(v){return void 0!==v.asyncValidators||void 0!==v.validators||void 0!==v.updateOn}(M)?(Me=null!=M.validators?M.validators:null,y=null!=M.asyncValidators?M.asyncValidators:null,b=null!=M.updateOn?M.updateOn:void 0):(Me=null!=M.validator?M.validator:null,y=null!=M.asyncValidator?M.asyncValidator:null)),new dn(Y,{asyncValidators:y,updateOn:b,validators:Me})}control(f,M,Y){return new yt(f,M,Y)}array(f,M,Y){const Me=f.map(y=>this._createControl(y));return new Gn(Me,M,Y)}_reduceControls(f){const M={};return Object.keys(f).forEach(Y=>{M[Y]=this._createControl(f[Y])}),M}_createControl(f){return f instanceof yt||f instanceof dn||f instanceof Gn?f:Array.isArray(f)?this.control(f[0],f.length>1?f[1]:null,f.length>2?f[2]:null):this.control(f)}}return v.\u0275fac=function(f){return new(f||v)},v.\u0275prov=(0,m.Yz7)({factory:function(){return new v},token:v,providedIn:pr}),v})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}
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
       */,5855:(He,ue,V)=>{"use strict";V.d(ue,{m2:()=>Lt,F0:()=>Kt,yS:()=>Bo,Bz:()=>Ru,lC:()=>Ws});var m=V(8583),h=V(639),ce=V(7709),we=V(7971);class de extends ce.xQ{constructor(u){super(),this._value=u}get value(){return this.getValue()}_subscribe(u){const l=super._subscribe(u);return l&&!l.closed&&u.next(this._value),l}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new we.N;return this._value}next(u){super.next(this._value=u)}}var ie=V(4869),fe=V(9796),he=V(7393);class se extends he.L{notifyNext(u,l,p,D,w){this.destination.next(l)}notifyError(u,l){this.destination.error(u)}notifyComplete(u){this.destination.complete()}}class U extends he.L{constructor(u,l,p){super(),this.parent=u,this.outerValue=l,this.outerIndex=p,this.index=0}_next(u){this.parent.notifyNext(this.outerValue,u,this.outerIndex,this.index++,this)}_error(u){this.parent.notifyError(u,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}var W=V(7444),H=V(7574);function Z(d,u,l,p,D=new U(d,l,p)){if(!D.closed)return u instanceof H.y?u.subscribe(D):(0,W.s)(u)(D)}var te=V(6693);const ge={};class Oe{constructor(u){this.resultSelector=u}call(u,l){return l.subscribe(new et(u,this.resultSelector))}}class et extends se{constructor(u,l){super(u),this.resultSelector=l,this.active=0,this.values=[],this.observables=[]}_next(u){this.values.push(ge),this.observables.push(u)}_complete(){const u=this.observables,l=u.length;if(0===l)this.destination.complete();else{this.active=l,this.toRespond=l;for(let p=0;p<l;p++)this.add(Z(this,u[p],void 0,p))}}notifyComplete(u){0==(this.active-=1)&&this.destination.complete()}notifyNext(u,l,p){const D=this.values,O=this.toRespond?D[p]===ge?--this.toRespond:this.toRespond:0;D[p]=l,0===O&&(this.resultSelector?this._tryResultSelector(D):this.destination.next(D.slice()))}_tryResultSelector(u){let l;try{l=this.resultSelector.apply(this,u)}catch(p){return void this.destination.error(p)}this.destination.next(l)}}const pe=(()=>{function d(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return d.prototype=Object.create(Error.prototype),d})();var ve=V(5917),Vt=V(3282);function vr(...d){return(0,Vt.J)(1)((0,ve.of)(...d))}var ft=V(4402);const _e=new H.y(d=>d.complete());function Ze(d){return d?function(d){return new H.y(u=>d.schedule(()=>u.complete()))}(d):_e}function Ke(d){return new H.y(u=>{let l;try{l=d()}catch(D){return void u.error(D)}return(l?(0,ft.D)(l):Ze()).subscribe(u)})}var ke=V(2441),Ie=V(8002),me=V(5345);function Mt(d,u){return"function"==typeof u?l=>l.pipe(Mt((p,D)=>(0,ft.D)(d(p,D)).pipe((0,Ie.U)((w,O)=>u(p,w,D,O))))):l=>l.lift(new Bn(d))}class Bn{constructor(u){this.project=u}call(u,l){return l.subscribe(new sr(u,this.project))}}class sr extends me.Ds{constructor(u,l){super(u),this.project=l,this.index=0}_next(u){let l;const p=this.index++;try{l=this.project(u,p)}catch(D){return void this.destination.error(D)}this._innerSub(l)}_innerSub(u){const l=this.innerSubscription;l&&l.unsubscribe();const p=new me.IY(this),D=this.destination;D.add(p),this.innerSubscription=(0,me.ft)(u,p),this.innerSubscription!==p&&D.add(this.innerSubscription)}_complete(){const{innerSubscription:u}=this;(!u||u.closed)&&super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=void 0}notifyComplete(){this.innerSubscription=void 0,this.isStopped&&super._complete()}notifyNext(u){this.destination.next(u)}}const Dr=(()=>{function d(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return d.prototype=Object.create(Error.prototype),d})();function Er(d){return u=>0===d?Ze():u.lift(new So(d))}class So{constructor(u){if(this.total=u,this.total<0)throw new Dr}call(u,l){return l.subscribe(new xo(u,this.total))}}class xo extends he.L{constructor(u,l){super(u),this.total=l,this.count=0}_next(u){const l=this.total,p=++this.count;p<=l&&(this.destination.next(u),p===l&&(this.destination.complete(),this.unsubscribe()))}}function Kn(d,u){let l=!1;return arguments.length>=2&&(l=!0),function(D){return D.lift(new un(d,u,l))}}class un{constructor(u,l,p=!1){this.accumulator=u,this.seed=l,this.hasSeed=p}call(u,l){return l.subscribe(new Gt(u,this.accumulator,this.seed,this.hasSeed))}}class Gt extends he.L{constructor(u,l,p,D){super(u),this.accumulator=l,this._seed=p,this.hasSeed=D,this.index=0}get seed(){return this._seed}set seed(u){this.hasSeed=!0,this._seed=u}_next(u){if(this.hasSeed)return this._tryNext(u);this.seed=u,this.destination.next(u)}_tryNext(u){const l=this.index++;let p;try{p=this.accumulator(this.seed,u,l)}catch(D){this.destination.error(D)}this.seed=p,this.destination.next(p)}}function ht(d){return function(l){const p=new Je(d),D=l.lift(p);return p.caught=D}}class Je{constructor(u){this.selector=u}call(u,l){return l.subscribe(new Hn(u,this.selector,this.caught))}}class Hn extends me.Ds{constructor(u,l,p){super(u),this.selector=l,this.caught=p}error(u){if(!this.isStopped){let l;try{l=this.selector(u,this.caught)}catch(w){return void super.error(w)}this._unsubscribeAndRecycle();const p=new me.IY(this);this.add(p);const D=(0,me.ft)(l,p);D!==p&&this.add(D)}}}var Mn=V(5435);function ar(d){return function(l){return 0===d?Ze():l.lift(new pt(d))}}class pt{constructor(u){if(this.total=u,this.total<0)throw new Dr}call(u,l){return l.subscribe(new br(u,this.total))}}class br extends he.L{constructor(u,l){super(u),this.total=l,this.ring=new Array,this.count=0}_next(u){const l=this.ring,p=this.total,D=this.count++;l.length<p?l.push(u):l[D%p]=u}_complete(){const u=this.destination;let l=this.count;if(l>0){const p=this.count>=this.total?this.total:this.count,D=this.ring;for(let w=0;w<p;w++){const O=l++%p;u.next(D[O])}}u.complete()}}function vt(d=Wt){return u=>u.lift(new kt(d))}class kt{constructor(u){this.errorFactory=u}call(u,l){return l.subscribe(new wr(u,this.errorFactory))}}class wr extends he.L{constructor(u,l){super(u),this.errorFactory=l,this.hasValue=!1}_next(u){this.hasValue=!0,this.destination.next(u)}_complete(){if(this.hasValue)return this.destination.complete();{let u;try{u=this.errorFactory()}catch(l){u=l}this.destination.error(u)}}}function Wt(){return new pe}function lr(d=null){return u=>u.lift(new Mr(d))}class Mr{constructor(u){this.defaultValue=u}call(u,l){return l.subscribe(new ee(u,this.defaultValue))}}class ee extends he.L{constructor(u,l){super(u),this.defaultValue=l,this.isEmpty=!0}_next(u){this.isEmpty=!1,this.destination.next(u)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}var k=V(4487);function ne(d,u){const l=arguments.length>=2;return p=>p.pipe(d?(0,Mn.h)((D,w)=>d(D,w,p)):k.y,Er(1),l?lr(u):vt(()=>new pe))}function G(){}var De=V(9105);function ae(d,u,l){return function(D){return D.lift(new Ee(d,u,l))}}class Ee{constructor(u,l,p){this.nextOrObserver=u,this.error=l,this.complete=p}call(u,l){return l.subscribe(new We(u,this.nextOrObserver,this.error,this.complete))}}class We extends he.L{constructor(u,l,p,D){super(u),this._tapNext=G,this._tapError=G,this._tapComplete=G,this._tapError=p||G,this._tapComplete=D||G,(0,De.m)(l)?(this._context=this,this._tapNext=l):l&&(this._context=l,this._tapNext=l.next||G,this._tapError=l.error||G,this._tapComplete=l.complete||G)}_next(u){try{this._tapNext.call(this._context,u)}catch(l){return void this.destination.error(l)}this.destination.next(u)}_error(u){try{this._tapError.call(this._context,u)}catch(l){return void this.destination.error(l)}this.destination.error(u)}_complete(){try{this._tapComplete.call(this._context)}catch(u){return void this.destination.error(u)}return this.destination.complete()}}var Dt=V(5319);class At{constructor(u){this.callback=u}call(u,l){return l.subscribe(new Rt(u,this.callback))}}class Rt extends he.L{constructor(u,l){super(u),this.add(new Dt.w(l))}}var Qe=V(4612),Ce=V(9773),xn=V(1307);
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
       */class Ue{constructor(u,l){this.id=u,this.url=l}}class Ot extends Ue{constructor(u,l,p="imperative",D=null){super(u,l),this.navigationTrigger=p,this.restoredState=D}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Lt extends Ue{constructor(u,l,p){super(u,l),this.urlAfterRedirects=p}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class ct extends Ue{constructor(u,l,p){super(u,l),this.reason=p}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Jn extends Ue{constructor(u,l,p){super(u,l),this.error=p}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class lo extends Ue{constructor(u,l,p,D){super(u,l),this.urlAfterRedirects=p,this.state=D}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class yn extends Ue{constructor(u,l,p,D){super(u,l),this.urlAfterRedirects=p,this.state=D}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class rt extends Ue{constructor(u,l,p,D,w){super(u,l),this.urlAfterRedirects=p,this.state=D,this.shouldActivate=w}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class _n extends Ue{constructor(u,l,p,D){super(u,l),this.urlAfterRedirects=p,this.state=D}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class $n extends Ue{constructor(u,l,p,D){super(u,l),this.urlAfterRedirects=p,this.state=D}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class An{constructor(u){this.route=u}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Rn{constructor(u){this.route=u}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Ro{constructor(u){this.snapshot=u}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class cn{constructor(u){this.snapshot=u}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class ur{constructor(u){this.snapshot=u}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Lr{constructor(u){this.snapshot=u}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class cr{constructor(u,l,p){this.routerEvent=u,this.position=l,this.anchor=p}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const $e="primary";class dr{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const l=this.params[u];return Array.isArray(l)?l[0]:l}return null}getAll(u){if(this.has(u)){const l=this.params[u];return Array.isArray(l)?l:[l]}return[]}get keys(){return Object.keys(this.params)}}function yt(d){return new dr(d)}const dn="ngNavigationCancelingError";function Gn(d){const u=Error("NavigationCancelingError: "+d);return u[dn]=!0,u}function Ir(d,u,l){const p=l.path.split("/");if(p.length>d.length||"full"===l.pathMatch&&(u.hasChildren()||p.length<d.length))return null;const D={};for(let w=0;w<p.length;w++){const O=p[w],P=d[w];if(O.startsWith(":"))D[O.substring(1)]=P;else if(O!==P.path)return null}return{consumed:d.slice(0,p.length),posParams:D}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function rn(d,u){const l=d?Object.keys(d):void 0,p=u?Object.keys(u):void 0;if(!l||!p||l.length!=p.length)return!1;let D;for(let w=0;w<l.length;w++)if(D=l[w],!Nt(d[D],u[D]))return!1;return!0}function Nt(d,u){if(Array.isArray(d)&&Array.isArray(u)){if(d.length!==u.length)return!1;const l=[...d].sort(),p=[...u].sort();return l.every((D,w)=>p[w]===D)}return d===u}function On(d){return Array.prototype.concat.apply([],d)}function Wn(d){return d.length>0?d[d.length-1]:null}function Pt(d,u){for(const l in d)d.hasOwnProperty(l)&&u(d[l],l)}function St(d){return(0,h.CqO)(d)?d:(0,h.QGY)(d)?(0,ft.D)(Promise.resolve(d)):(0,ve.of)(d)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ge={exact:function It(d,u,l){if(!qt(d.segments,u.segments)||!vn(d.segments,u.segments,l)||d.numberOfChildren!==u.numberOfChildren)return!1;for(const p in u.children)if(!d.children[p]||!It(d.children[p],u.children[p],l))return!1;return!0},subset:mt},lt={exact:function(d,u){return rn(d,u)},subset:function(d,u){return Object.keys(u).length<=Object.keys(d).length&&Object.keys(u).every(l=>Nt(d[l],u[l]))},ignored:()=>!0};function Ft(d,u,l){return Ge[l.paths](d.root,u.root,l.matrixParams)&&lt[l.queryParams](d.queryParams,u.queryParams)&&!("exact"===l.fragment&&d.fragment!==u.fragment)}function mt(d,u,l){return er(d,u,u.segments,l)}function er(d,u,l,p){if(d.segments.length>l.length){const D=d.segments.slice(0,l.length);return!(!qt(D,l)||u.hasChildren()||!vn(D,l,p))}if(d.segments.length===l.length){if(!qt(d.segments,l)||!vn(d.segments,l,p))return!1;for(const D in u.children)if(!d.children[D]||!mt(d.children[D],u.children[D],p))return!1;return!0}{const D=l.slice(0,d.segments.length),w=l.slice(d.segments.length);return!!(qt(d.segments,D)&&vn(d.segments,D,p)&&d.children[$e])&&er(d.children[$e],u,w,p)}}function vn(d,u,l){return u.every((p,D)=>lt[l](d[D].parameters,p.parameters))}class Ne{constructor(u,l,p){this.root=u,this.queryParams=l,this.fragment=p}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=yt(this.queryParams)),this._queryParamMap}toString(){return Ht.serialize(this)}}class je{constructor(u,l){this.segments=u,this.children=l,this.parent=null,Pt(l,(p,D)=>p.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ot(this)}}class en{constructor(u,l){this.path=u,this.parameters=l}get parameterMap(){return this._parameterMap||(this._parameterMap=yt(this.parameters)),this._parameterMap}toString(){return tt(this)}}function qt(d,u){return d.length===u.length&&d.every((l,p)=>l.path===u[p].path)}class fn{}class In{parse(u){const l=new Zo(u);return new Ne(l.parseRootSegment(),l.parseQueryParams(),l.parseFragment())}serialize(u){var d;return`${`/${Nn(u.root,!0)}`}${function(d){const u=Object.keys(d).map(l=>{const p=d[l];return Array.isArray(p)?p.map(D=>`${Pn(l)}=${Pn(D)}`).join("&"):`${Pn(l)}=${Pn(p)}`}).filter(l=>!!l);return u.length?`?${u.join("&")}`:""}(u.queryParams)}${"string"==typeof u.fragment?`#${d=u.fragment,encodeURI(d)}`:""}`}}const Ht=new In;function ot(d){return d.segments.map(u=>tt(u)).join("/")}function Nn(d,u){if(!d.hasChildren())return ot(d);if(u){const l=d.children[$e]?Nn(d.children[$e],!1):"",p=[];return Pt(d.children,(D,w)=>{w!==$e&&p.push(`${w}:${Nn(D,!1)}`)}),p.length>0?`${l}(${p.join("//")})`:l}{const l=function(d,u){let l=[];return Pt(d.children,(p,D)=>{D===$e&&(l=l.concat(u(p,D)))}),Pt(d.children,(p,D)=>{D!==$e&&(l=l.concat(u(p,D)))}),l}(d,(p,D)=>D===$e?[Nn(d.children[$e],!1)]:[`${D}:${Nn(p,!1)}`]);return 1===Object.keys(d.children).length&&null!=d.children[$e]?`${ot(d)}/${l[0]}`:`${ot(d)}/(${l.join("//")})`}}function uo(d){return encodeURIComponent(d).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Pn(d){return uo(d).replace(/%3B/gi,";")}function zn(d){return uo(d).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Fn(d){return decodeURIComponent(d)}function Yn(d){return Fn(d.replace(/\+/g,"%20"))}function tt(d){return`${zn(d.path)}${function(d){return Object.keys(d).map(u=>`;${zn(u)}=${zn(d[u])}`).join("")}(d.parameters)}`}const sn=/^[^\/()?;=#]+/;function tr(d){const u=d.match(sn);return u?u[0]:""}const Br=/^[^=?&#]+/,an=/^[^?&#]+/;class Zo{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new je([],{}):new je([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let l={};this.peekStartsWith("/(")&&(this.capture("/"),l=this.parseParens(!0));let p={};return this.peekStartsWith("(")&&(p=this.parseParens(!1)),(u.length>0||Object.keys(l).length>0)&&(p[$e]=new je(u,l)),p}parseSegment(){const u=tr(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(u),new en(Fn(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const l=tr(this.remaining);if(!l)return;this.capture(l);let p="";if(this.consumeOptional("=")){const D=tr(this.remaining);D&&(p=D,this.capture(p))}u[Fn(l)]=Fn(p)}parseQueryParam(u){const l=function(d){const u=d.match(Br);return u?u[0]:""}(this.remaining);if(!l)return;this.capture(l);let p="";if(this.consumeOptional("=")){const O=function(d){const u=d.match(an);return u?u[0]:""}(this.remaining);O&&(p=O,this.capture(p))}const D=Yn(l),w=Yn(p);if(u.hasOwnProperty(D)){let O=u[D];Array.isArray(O)||(O=[O],u[D]=O),O.push(w)}else u[D]=w}parseParens(u){const l={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const p=tr(this.remaining),D=this.remaining[p.length];if("/"!==D&&")"!==D&&";"!==D)throw new Error(`Cannot parse url '${this.url}'`);let w;p.indexOf(":")>-1?(w=p.substr(0,p.indexOf(":")),this.capture(w),this.capture(":")):u&&(w=$e);const O=this.parseChildren();l[w]=1===Object.keys(O).length?O[$e]:new je([],O),this.consumeOptional("//")}return l}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new Error(`Expected "${u}".`)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Oo{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const l=this.pathFromRoot(u);return l.length>1?l[l.length-2]:null}children(u){const l=Ur(u,this._root);return l?l.children.map(p=>p.value):[]}firstChild(u){const l=Ur(u,this._root);return l&&l.children.length>0?l.children[0].value:null}siblings(u){const l=No(u,this._root);return l.length<2?[]:l[l.length-2].children.map(D=>D.value).filter(D=>D!==u)}pathFromRoot(u){return No(u,this._root).map(l=>l.value)}}function Ur(d,u){if(d===u.value)return u;for(const l of u.children){const p=Ur(d,l);if(p)return p}return null}function No(d,u){if(d===u.value)return[u];for(const l of u.children){const p=No(d,l);if(p.length)return p.unshift(u),p}return[]}class En{constructor(u,l){this.value=u,this.children=l}toString(){return`TreeNode(${this.value})`}}function Tr(d){const u={};return d&&d.children.forEach(l=>u[l.value.outlet]=l),u
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Po extends Oo{constructor(u,l){super(u),this.snapshot=l,L(this,u)}toString(){return this.snapshot.toString()}}function Sr(d,u){const l=function(d,u){const O=new R([],{},{},"",{},$e,u,null,d.root,-1,{});return new A("",new En(O,[]))}(d,u),p=new de([new en("",{})]),D=new de({}),w=new de({}),O=new de({}),P=new de(""),J=new hr(p,D,O,P,w,$e,u,l.root);return J.snapshot=l.root,new Po(new En(J,[]),l)}class hr{constructor(u,l,p,D,w,O,P,J){this.url=u,this.params=l,this.queryParams=p,this.fragment=D,this.data=w,this.outlet=O,this.component=P,this._futureSnapshot=J}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,Ie.U)(u=>yt(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,Ie.U)(u=>yt(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function ho(d,u="emptyOnly"){const l=d.pathFromRoot;let p=0;if("always"!==u)for(p=l.length-1;p>=1;){const D=l[p],w=l[p-1];if(D.routeConfig&&""===D.routeConfig.path)p--;else{if(w.component)break;p--}}return function(d){return d.reduce((u,l)=>({params:Object.assign(Object.assign({},u.params),l.params),data:Object.assign(Object.assign({},u.data),l.data),resolve:Object.assign(Object.assign({},u.resolve),l._resolvedData)}),{params:{},data:{},resolve:{}})}(l.slice(p))}class R{constructor(u,l,p,D,w,O,P,J,Ae,Fe,nt){this.url=u,this.params=l,this.queryParams=p,this.fragment=D,this.data=w,this.outlet=O,this.component=P,this.routeConfig=J,this._urlSegment=Ae,this._lastPathIndex=Fe,this._resolve=nt}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=yt(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=yt(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(p=>p.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class A extends Oo{constructor(u,l){super(l),this.url=u,L(this,l)}toString(){return q(this._root)}}function L(d,u){u.value._routerState=d,u.children.forEach(l=>L(d,l))}function q(d){const u=d.children.length>0?` { ${d.children.map(q).join(", ")} } `:"";return`${d.value}${u}`}function be(d){if(d.snapshot){const u=d.snapshot,l=d._futureSnapshot;d.snapshot=l,rn(u.queryParams,l.queryParams)||d.queryParams.next(l.queryParams),u.fragment!==l.fragment&&d.fragment.next(l.fragment),rn(u.params,l.params)||d.params.next(l.params),function(d,u){if(d.length!==u.length)return!1;for(let l=0;l<d.length;++l)if(!rn(d[l],u[l]))return!1;return!0}(u.url,l.url)||d.url.next(l.url),rn(u.data,l.data)||d.data.next(l.data)}else d.snapshot=d._futureSnapshot,d.data.next(d._futureSnapshot.data)}function Te(d,u){return rn(d.params,u.params)&&function(d,u){return qt(d,u)&&d.every((l,p)=>rn(l.parameters,u[p].parameters))}(d.url,u.url)&&!(!d.parent!=!u.parent)&&(!d.parent||Te(d.parent,u.parent))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function tn(d,u,l){if(l&&d.shouldReuseRoute(u.value,l.value.snapshot)){const p=l.value;p._futureSnapshot=u.value;const D=function(d,u,l){return u.children.map(p=>{for(const D of l.children)if(d.shouldReuseRoute(p.value,D.value.snapshot))return tn(d,p,D);return tn(d,p)})}(d,u,l);return new En(p,D)}{if(d.shouldAttach(u.value)){const w=d.retrieve(u.value);if(null!==w){const O=w.route;return $r(u,O),O}}const p=function(d){return new hr(new de(d.url),new de(d.params),new de(d.queryParams),new de(d.fragment),new de(d.data),d.outlet,d.component,d)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(u.value),D=u.children.map(w=>tn(d,w));return new En(p,D)}}function $r(d,u){if(d.value.routeConfig!==u.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(d.children.length!==u.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");u.value._futureSnapshot=d.value;for(let l=0;l<d.children.length;++l)$r(d.children[l],u.children[l])}function Gr(d){return"object"==typeof d&&null!=d&&!d.outlets&&!d.segmentPath}function po(d){return"object"==typeof d&&null!=d&&d.outlets}function v(d,u,l,p,D){let w={};return p&&Pt(p,(O,P)=>{w[P]=Array.isArray(O)?O.map(J=>`${J}`):`${O}`}),new Ne(l.root===d?u:_(l.root,d,u),w,D)}function _(d,u,l){const p={};return Pt(d.children,(D,w)=>{p[w]=D===u?l:_(D,u,l)}),new je(d.segments,p)}class f{constructor(u,l,p){if(this.isAbsolute=u,this.numberOfDoubleDots=l,this.commands=p,u&&p.length>0&&Gr(p[0]))throw new Error("Root segment cannot have matrix parameters");const D=p.find(po);if(D&&D!==Wn(p))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Y{constructor(u,l,p){this.segmentGroup=u,this.processChildren=l,this.index=p}}function C(d,u,l){if(d||(d=new je([],{})),0===d.segments.length&&d.hasChildren())return T(d,u,l);const p=function(d,u,l){let p=0,D=u;const w={match:!1,pathIndex:0,commandIndex:0};for(;D<d.segments.length;){if(p>=l.length)return w;const O=d.segments[D],P=l[p];if(po(P))break;const J=`${P}`,Ae=p<l.length-1?l[p+1]:null;if(D>0&&void 0===J)break;if(J&&Ae&&"object"==typeof Ae&&void 0===Ae.outlets){if(!Pe(J,Ae,O))return w;p+=2}else{if(!Pe(J,{},O))return w;p++}D++}return{match:!0,pathIndex:D,commandIndex:p}}(d,u,l),D=l.slice(p.commandIndex);if(p.match&&p.pathIndex<d.segments.length){const w=new je(d.segments.slice(0,p.pathIndex),{});return w.children[$e]=new je(d.segments.slice(p.pathIndex),d.children),T(w,0,D)}return p.match&&0===D.length?new je(d.segments,{}):p.match&&!d.hasChildren()?Q(d,u,l):p.match?T(d,0,D):Q(d,u,l)}function T(d,u,l){if(0===l.length)return new je(d.segments,{});{const p=function(d){return po(d[0])?d[0].outlets:{[$e]:d}}(l),D={};return Pt(p,(w,O)=>{"string"==typeof w&&(w=[w]),null!==w&&(D[O]=C(d.children[O],u,w))}),Pt(d.children,(w,O)=>{void 0===p[O]&&(D[O]=w)}),new je(d.segments,D)}}function Q(d,u,l){const p=d.segments.slice(0,u);let D=0;for(;D<l.length;){const w=l[D];if(po(w)){const J=re(w.outlets);return new je(p,J)}if(0===D&&Gr(l[0])){p.push(new en(d.segments[u].path,xe(l[0]))),D++;continue}const O=po(w)?w.outlets[$e]:`${w}`,P=D<l.length-1?l[D+1]:null;O&&P&&Gr(P)?(p.push(new en(O,xe(P))),D+=2):(p.push(new en(O,{})),D++)}return new je(p,{})}function re(d){const u={};return Pt(d,(l,p)=>{"string"==typeof l&&(l=[l]),null!==l&&(u[p]=Q(new je([],{}),0,l))}),u}function xe(d){const u={};return Pt(d,(l,p)=>u[p]=`${l}`),u}function Pe(d,u,l){return d==l.path&&rn(u,l.parameters)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Et{constructor(u,l,p,D){this.routeReuseStrategy=u,this.futureState=l,this.currState=p,this.forwardEvent=D}activate(u){const l=this.futureState._root,p=this.currState?this.currState._root:null;this.deactivateChildRoutes(l,p,u),be(this.futureState.root),this.activateChildRoutes(l,p,u)}deactivateChildRoutes(u,l,p){const D=Tr(l);u.children.forEach(w=>{const O=w.value.outlet;this.deactivateRoutes(w,D[O],p),delete D[O]}),Pt(D,(w,O)=>{this.deactivateRouteAndItsChildren(w,p)})}deactivateRoutes(u,l,p){const D=u.value,w=l?l.value:null;if(D===w)if(D.component){const O=p.getContext(D.outlet);O&&this.deactivateChildRoutes(u,l,O.children)}else this.deactivateChildRoutes(u,l,p);else w&&this.deactivateRouteAndItsChildren(l,p)}deactivateRouteAndItsChildren(u,l){this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,l):this.deactivateRouteAndOutlet(u,l)}detachAndStoreRouteSubtree(u,l){const p=l.getContext(u.value.outlet);if(p&&p.outlet){const D=p.outlet.detach(),w=p.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:D,route:u,contexts:w})}}deactivateRouteAndOutlet(u,l){const p=l.getContext(u.value.outlet),D=p&&u.value.component?p.children:l,w=Tr(u);for(const O of Object.keys(w))this.deactivateRouteAndItsChildren(w[O],D);p&&p.outlet&&(p.outlet.deactivate(),p.children.onOutletDeactivated(),p.attachRef=null,p.resolver=null,p.route=null)}activateChildRoutes(u,l,p){const D=Tr(l);u.children.forEach(w=>{this.activateRoutes(w,D[w.value.outlet],p),this.forwardEvent(new Lr(w.value.snapshot))}),u.children.length&&this.forwardEvent(new cn(u.value.snapshot))}activateRoutes(u,l,p){const D=u.value,w=l?l.value:null;if(be(D),D===w)if(D.component){const O=p.getOrCreateContext(D.outlet);this.activateChildRoutes(u,l,O.children)}else this.activateChildRoutes(u,l,p);else if(D.component){const O=p.getOrCreateContext(D.outlet);if(this.routeReuseStrategy.shouldAttach(D.snapshot)){const P=this.routeReuseStrategy.retrieve(D.snapshot);this.routeReuseStrategy.store(D.snapshot,null),O.children.onOutletReAttached(P.contexts),O.attachRef=P.componentRef,O.route=P.route.value,O.outlet&&O.outlet.attach(P.componentRef,P.route.value),it(P.route)}else{const P=function(d){for(let u=d.parent;u;u=u.parent){const l=u.routeConfig;if(l&&l._loadedConfig)return l._loadedConfig;if(l&&l.component)return null}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(D.snapshot),J=P?P.module.componentFactoryResolver:null;O.attachRef=null,O.route=D,O.resolver=J,O.outlet&&O.outlet.activateWith(D,J),this.activateChildRoutes(u,null,O.children)}}else this.activateChildRoutes(u,null,p)}}function it(d){be(d.value),d.children.forEach(it)}class bt{constructor(u,l){this.routes=u,this.module=l}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jt(d){return"function"==typeof d}function Tt(d){return d instanceof Ne}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const zr=Symbol("INITIAL_VALUE");function Fo(){return Mt(d=>function(...d){let u,l;return(0,ie.K)(d[d.length-1])&&(l=d.pop()),"function"==typeof d[d.length-1]&&(u=d.pop()),1===d.length&&(0,fe.k)(d[0])&&(d=d[0]),(0,te.n)(d,l).lift(new Oe(u))}(d.map(u=>u.pipe(Er(1),function(...d){const u=d[d.length-1];return(0,ie.K)(u)?(d.pop(),l=>vr(d,l,u)):l=>vr(d,l)}(zr)))).pipe(Kn((u,l)=>{let p=!1;return l.reduce((D,w,O)=>D!==zr?D:(w===zr&&(p=!0),p||!1!==w&&O!==l.length-1&&!Tt(w)?D:w),u)},zr),(0,Mn.h)(u=>u!==zr),(0,Ie.U)(u=>Tt(u)?u:!0===u),Er(1)))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Ba=(()=>{class d{}return d.\u0275fac=function(l){return new(l||d)},d.\u0275cmp=h.Xpm({type:d,selectors:[["ng-component"]],decls:1,vars:0,template:function(l,p){1&l&&h._UZ(0,"router-outlet")},directives:function(){return[Ws]},encapsulation:2}),d})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Yr(d,u=""){for(let l=0;l<d.length;l++){const p=d[l];Ua(p,Bs(u,p))}}function Ua(d,u){d.children&&Yr(d.children,u)}function Bs(d,u){return u?d||u.path?d&&!u.path?`${d}/`:!d&&u.path?u.path:`${d}/${u.path}`:"":d}function Le(d){const u=d.children&&d.children.map(Le),l=u?Object.assign(Object.assign({},d),{children:u}):Object.assign({},d);return!l.component&&(u||l.loadChildren)&&l.outlet&&l.outlet!==$e&&(l.component=Ba),l}function gr(d){return d.outlet||$e}function Ha(d,u){const l=d.filter(p=>gr(p)===u);return l.push(...d.filter(p=>gr(p)!==u)),l
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const $a={matched:!1,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};function ki(d,u,l){var p;if(""===u.path)return"full"===u.pathMatch&&(d.hasChildren()||l.length>0)?Object.assign({},$a):{matched:!0,consumedSegments:[],lastChild:0,parameters:{},positionalParamSegments:{}};const w=(u.matcher||Ir)(l,d,u);if(!w)return Object.assign({},$a);const O={};Pt(w.posParams,(J,Ae)=>{O[Ae]=J.path});const P=w.consumed.length>0?Object.assign(Object.assign({},O),w.consumed[w.consumed.length-1].parameters):O;return{matched:!0,consumedSegments:w.consumed,lastChild:w.consumed.length,parameters:P,positionalParamSegments:null!==(p=w.posParams)&&void 0!==p?p:{}}}function di(d,u,l,p,D="corrected"){if(l.length>0&&function(d,u,l){return l.some(p=>fi(d,u,p)&&gr(p)!==$e)}(d,l,p)){const O=new je(u,function(d,u,l,p){const D={};D[$e]=p,p._sourceSegment=d,p._segmentIndexShift=u.length;for(const w of l)if(""===w.path&&gr(w)!==$e){const O=new je([],{});O._sourceSegment=d,O._segmentIndexShift=u.length,D[gr(w)]=O}return D}(d,u,p,new je(l,d.children)));return O._sourceSegment=d,O._segmentIndexShift=u.length,{segmentGroup:O,slicedSegments:[]}}if(0===l.length&&function(d,u,l){return l.some(p=>fi(d,u,p))}(d,l,p)){const O=new je(d.segments,function(d,u,l,p,D,w){const O={};for(const P of p)if(fi(d,l,P)&&!D[gr(P)]){const J=new je([],{});J._sourceSegment=d,J._segmentIndexShift="legacy"===w?d.segments.length:u.length,O[gr(P)]=J}return Object.assign(Object.assign({},D),O)}(d,u,l,p,d.children,D));return O._sourceSegment=d,O._segmentIndexShift=u.length,{segmentGroup:O,slicedSegments:l}}const w=new je(d.segments,d.children);return w._sourceSegment=d,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:l}}function fi(d,u,l){return(!(d.hasChildren()||u.length>0)||"full"!==l.pathMatch)&&""===l.path}function Zt(d,u,l,p){return!!(gr(d)===p||p!==$e&&fi(u,l,d))&&("**"===d.path||ki(u,d,l).matched)}function Us(d,u,l){return 0===u.length&&!d.children[l]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class qr{constructor(u){this.segmentGroup=u||null}}class mr{constructor(u){this.urlTree=u}}function Jo(d){return new H.y(u=>u.error(new qr(d)))}function Li(d){return new H.y(u=>u.error(new mr(d)))}function ff(d){return new H.y(u=>u.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${d}'`)))}class Bi{constructor(u,l,p,D,w){this.configLoader=l,this.urlSerializer=p,this.urlTree=D,this.config=w,this.allowRedirects=!0,this.ngModule=u.get(h.h0i)}apply(){const u=di(this.urlTree.root,[],[],this.config).segmentGroup,l=new je(u.segments,u.children);return this.expandSegmentGroup(this.ngModule,this.config,l,$e).pipe((0,Ie.U)(w=>this.createUrlTree(rr(w),this.urlTree.queryParams,this.urlTree.fragment))).pipe(ht(w=>{if(w instanceof mr)return this.allowRedirects=!1,this.match(w.urlTree);throw w instanceof qr?this.noMatchError(w):w}))}match(u){return this.expandSegmentGroup(this.ngModule,this.config,u.root,$e).pipe((0,Ie.U)(D=>this.createUrlTree(rr(D),u.queryParams,u.fragment))).pipe(ht(D=>{throw D instanceof qr?this.noMatchError(D):D}))}noMatchError(u){return new Error(`Cannot match any routes. URL Segment: '${u.segmentGroup}'`)}createUrlTree(u,l,p){const D=u.segments.length>0?new je([],{[$e]:u}):u;return new Ne(D,l,p)}expandSegmentGroup(u,l,p,D){return 0===p.segments.length&&p.hasChildren()?this.expandChildren(u,l,p).pipe((0,Ie.U)(w=>new je([],w))):this.expandSegment(u,p,l,p.segments,D,!0)}expandChildren(u,l,p){const D=[];for(const w of Object.keys(p.children))"primary"===w?D.unshift(w):D.push(w);return(0,ft.D)(D).pipe((0,Qe.b)(w=>{const O=p.children[w],P=Ha(l,w);return this.expandSegmentGroup(u,P,O,w).pipe((0,Ie.U)(J=>({segment:J,outlet:w})))}),Kn((w,O)=>(w[O.outlet]=O.segment,w),{}),function(d,u){const l=arguments.length>=2;return p=>p.pipe(d?(0,Mn.h)((D,w)=>d(D,w,p)):k.y,ar(1),l?lr(u):vt(()=>new pe))}())}expandSegment(u,l,p,D,w,O){return(0,ft.D)(p).pipe((0,Qe.b)(P=>this.expandSegmentAgainstRoute(u,l,p,P,D,w,O).pipe(ht(Ae=>{if(Ae instanceof qr)return(0,ve.of)(null);throw Ae}))),ne(P=>!!P),ht((P,J)=>{if(P instanceof pe||"EmptyError"===P.name){if(Us(l,D,w))return(0,ve.of)(new je([],{}));throw new qr(l)}throw P}))}expandSegmentAgainstRoute(u,l,p,D,w,O,P){return Zt(D,l,w,O)?void 0===D.redirectTo?this.matchSegmentAgainstRoute(u,l,D,w,O):P&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,l,p,D,w,O):Jo(l):Jo(l)}expandSegmentAgainstRouteUsingRedirect(u,l,p,D,w,O){return"**"===D.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,p,D,O):this.expandRegularSegmentAgainstRouteUsingRedirect(u,l,p,D,w,O)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,l,p,D){const w=this.applyRedirectCommands([],p.redirectTo,{});return p.redirectTo.startsWith("/")?Li(w):this.lineralizeSegments(p,w).pipe((0,Ce.zg)(O=>{const P=new je(O,{});return this.expandSegment(u,P,l,O,D,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,l,p,D,w,O){const{matched:P,consumedSegments:J,lastChild:Ae,positionalParamSegments:Fe}=ki(l,D,w);if(!P)return Jo(l);const nt=this.applyRedirectCommands(J,D.redirectTo,Fe);return D.redirectTo.startsWith("/")?Li(nt):this.lineralizeSegments(D,nt).pipe((0,Ce.zg)(Bt=>this.expandSegment(u,l,p,Bt.concat(w.slice(Ae)),O,!1)))}matchSegmentAgainstRoute(u,l,p,D,w){if("**"===p.path)return p.loadChildren?(p._loadedConfig?(0,ve.of)(p._loadedConfig):this.configLoader.load(u.injector,p)).pipe((0,Ie.U)(Bt=>(p._loadedConfig=Bt,new je(D,{})))):(0,ve.of)(new je(D,{}));const{matched:O,consumedSegments:P,lastChild:J}=ki(l,p,D);if(!O)return Jo(l);const Ae=D.slice(J);return this.getChildConfig(u,p,D).pipe((0,Ce.zg)(nt=>{const Bt=nt.module,dt=nt.routes,{segmentGroup:Ho,slicedSegments:_o}=di(l,P,Ae,dt),Zr=new je(Ho.segments,Ho.children);if(0===_o.length&&Zr.hasChildren())return this.expandChildren(Bt,dt,Zr).pipe((0,Ie.U)(hl=>new je(P,hl)));if(0===dt.length&&0===_o.length)return(0,ve.of)(new je(P,{}));const Qi=gr(p)===w;return this.expandSegment(Bt,Zr,dt,_o,Qi?$e:w,!0).pipe((0,Ie.U)(ir=>new je(P.concat(ir.segments),ir.children)))}))}getChildConfig(u,l,p){return l.children?(0,ve.of)(new bt(l.children,u)):l.loadChildren?void 0!==l._loadedConfig?(0,ve.of)(l._loadedConfig):this.runCanLoadGuards(u.injector,l,p).pipe((0,Ce.zg)(D=>{return D?this.configLoader.load(u.injector,l).pipe((0,Ie.U)(w=>(l._loadedConfig=w,w))):(d=l,new H.y(u=>u.error(Gn(`Cannot load children because the guard of the route "path: '${d.path}'" returned false`))));var d})):(0,ve.of)(new bt([],u))}runCanLoadGuards(u,l,p){const D=l.canLoad;if(!D||0===D.length)return(0,ve.of)(!0);const w=D.map(O=>{const P=u.get(O);let J;if((d=P)&&jt(d.canLoad))J=P.canLoad(l,p);else{if(!jt(P))throw new Error("Invalid CanLoad guard");J=P(l,p)}var d;return St(J)});return(0,ve.of)(w).pipe(Fo(),ae(O=>{if(!Tt(O))return;const P=Gn(`Redirecting to "${this.urlSerializer.serialize(O)}"`);throw P.url=O,P}),(0,Ie.U)(O=>!0===O))}lineralizeSegments(u,l){let p=[],D=l.root;for(;;){if(p=p.concat(D.segments),0===D.numberOfChildren)return(0,ve.of)(p);if(D.numberOfChildren>1||!D.children[$e])return ff(u.redirectTo);D=D.children[$e]}}applyRedirectCommands(u,l,p){return this.applyRedirectCreatreUrlTree(l,this.urlSerializer.parse(l),u,p)}applyRedirectCreatreUrlTree(u,l,p,D){const w=this.createSegmentGroup(u,l.root,p,D);return new Ne(w,this.createQueryParams(l.queryParams,this.urlTree.queryParams),l.fragment)}createQueryParams(u,l){const p={};return Pt(u,(D,w)=>{if("string"==typeof D&&D.startsWith(":")){const P=D.substring(1);p[w]=l[P]}else p[w]=D}),p}createSegmentGroup(u,l,p,D){const w=this.createSegments(u,l.segments,p,D);let O={};return Pt(l.children,(P,J)=>{O[J]=this.createSegmentGroup(u,P,p,D)}),new je(w,O)}createSegments(u,l,p,D){return l.map(w=>w.path.startsWith(":")?this.findPosParam(u,w,D):this.findOrReturn(w,p))}findPosParam(u,l,p){const D=p[l.path.substring(1)];if(!D)throw new Error(`Cannot redirect to '${u}'. Cannot find '${l.path}'.`);return D}findOrReturn(u,l){let p=0;for(const D of l){if(D.path===u.path)return l.splice(p),D;p++}return u}}function rr(d){const u={};for(const p of Object.keys(d.children)){const w=rr(d.children[p]);(w.segments.length>0||w.hasChildren())&&(u[p]=w)}return function(d){if(1===d.numberOfChildren&&d.children[$e]){const u=d.children[$e];return new je(d.segments.concat(u.segments),u.children)}return d}(new je(d.segments,u))}
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
class Vo{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class or{constructor(u,l){this.component=u,this.route=l}}function _u(d,u,l){const p=d._root;return ko(p,u?u._root:null,l,[p.value])}function Ui(d,u,l){const p=function(d){if(!d)return null;for(let u=d.parent;u;u=u.parent){const l=u.routeConfig;if(l&&l._loadedConfig)return l._loadedConfig}return null}(u);return(p?p.module.injector:l).get(d)}function ko(d,u,l,p,D={canDeactivateChecks:[],canActivateChecks:[]}){const w=Tr(u);return d.children.forEach(O=>{(function(d,u,l,p,D={canDeactivateChecks:[],canActivateChecks:[]}){const w=d.value,O=u?u.value:null,P=l?l.getContext(d.value.outlet):null;if(O&&w.routeConfig===O.routeConfig){const J=function(d,u,l){if("function"==typeof l)return l(d,u);switch(l){case"pathParamsChange":return!qt(d.url,u.url);case"pathParamsOrQueryParamsChange":return!qt(d.url,u.url)||!rn(d.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Te(d,u)||!rn(d.queryParams,u.queryParams);case"paramsChange":default:return!Te(d,u)}}(O,w,w.routeConfig.runGuardsAndResolvers);J?D.canActivateChecks.push(new Vo(p)):(w.data=O.data,w._resolvedData=O._resolvedData),ko(d,u,w.component?P?P.children:null:l,p,D),J&&P&&P.outlet&&P.outlet.isActivated&&D.canDeactivateChecks.push(new or(P.outlet.component,O))}else O&&Lo(u,P,D),D.canActivateChecks.push(new Vo(p)),ko(d,null,w.component?P?P.children:null:l,p,D)})(O,w[O.value.outlet],l,p.concat([O.value]),D),delete w[O.value.outlet]}),Pt(w,(O,P)=>Lo(O,l.getContext(P),D)),D}function Lo(d,u,l){const p=Tr(d),D=d.value;Pt(p,(w,O)=>{Lo(w,D.component?u?u.children.getContext(O):null:u,l)}),l.canDeactivateChecks.push(new or(D.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,D))}
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
class Du{}function Ja(d){return new H.y(u=>u.error(d))}class go{constructor(u,l,p,D,w,O){this.rootComponentType=u,this.config=l,this.urlTree=p,this.url=D,this.paramsInheritanceStrategy=w,this.relativeLinkResolution=O}recognize(){const u=di(this.urlTree.root,[],[],this.config.filter(O=>void 0===O.redirectTo),this.relativeLinkResolution).segmentGroup,l=this.processSegmentGroup(this.config,u,$e);if(null===l)return null;const p=new R([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},$e,this.rootComponentType,null,this.urlTree.root,-1,{}),D=new En(p,l),w=new A(this.url,D);return this.inheritParamsAndData(w._root),w}inheritParamsAndData(u){const l=u.value,p=ho(l,this.paramsInheritanceStrategy);l.params=Object.freeze(p.params),l.data=Object.freeze(p.data),u.children.forEach(D=>this.inheritParamsAndData(D))}processSegmentGroup(u,l,p){return 0===l.segments.length&&l.hasChildren()?this.processChildren(u,l):this.processSegment(u,l,l.segments,p)}processChildren(u,l){const p=[];for(const w of Object.keys(l.children)){const O=l.children[w],P=Ha(u,w),J=this.processSegmentGroup(P,O,w);if(null===J)return null;p.push(...J)}const D=Xa(p);return D.sort((u,l)=>u.value.outlet===$e?-1:l.value.outlet===$e?1:u.value.outlet.localeCompare(l.value.outlet)),D}processSegment(u,l,p,D){for(const w of u){const O=this.processSegmentAgainstRoute(w,l,p,D);if(null!==O)return O}return Us(l,p,D)?[]:null}processSegmentAgainstRoute(u,l,p,D){if(u.redirectTo||!Zt(u,l,p,D))return null;let w,O=[],P=[];if("**"===u.path){const dt=p.length>0?Wn(p).parameters:{};w=new R(p,dt,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,hi(u),gr(u),u.component,u,el(l),tl(l)+p.length,pi(u))}else{const dt=ki(l,u,p);if(!dt.matched)return null;O=dt.consumedSegments,P=p.slice(dt.lastChild),w=new R(O,dt.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,hi(u),gr(u),u.component,u,el(l),tl(l)+O.length,pi(u))}const J=(d=u).children?d.children:d.loadChildren?d._loadedConfig.routes:[],{segmentGroup:Ae,slicedSegments:Fe}=di(l,O,P,J.filter(dt=>void 0===dt.redirectTo),this.relativeLinkResolution);var d;if(0===Fe.length&&Ae.hasChildren()){const dt=this.processChildren(J,Ae);return null===dt?null:[new En(w,dt)]}if(0===J.length&&0===Fe.length)return[new En(w,[])];const nt=gr(u)===D,Bt=this.processSegment(J,Ae,Fe,nt?$e:D);return null===Bt?null:[new En(w,Bt)]}}function bu(d){const u=d.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function Xa(d){const u=[],l=new Set;for(const p of d){if(!bu(p)){u.push(p);continue}const D=u.find(w=>p.value.routeConfig===w.value.routeConfig);void 0!==D?(D.children.push(...p.children),l.add(D)):u.push(p)}for(const p of l){const D=Xa(p.children);u.push(new En(p.value,D))}return u.filter(p=>!l.has(p))}function el(d){let u=d;for(;u._sourceSegment;)u=u._sourceSegment;return u}function tl(d){let u=d,l=u._segmentIndexShift?u._segmentIndexShift:0;for(;u._sourceSegment;)u=u._sourceSegment,l+=u._segmentIndexShift?u._segmentIndexShift:0;return l-1}function hi(d){return d.data||{}}function pi(d){return d.resolve||{}}
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
function jo(d){return Mt(u=>{const l=d(u);return l?(0,ft.D)(l).pipe((0,Ie.U)(()=>u)):(0,ve.of)(u)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class gi extends class{shouldDetach(u){return!1}store(u,l){}shouldAttach(u){return!1}retrieve(u){return null}shouldReuseRoute(u,l){return u.routeConfig===l.routeConfig}}{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const mi=new h.OlP("ROUTES");class rl{constructor(u,l,p,D){this.loader=u,this.compiler=l,this.onLoadStartListener=p,this.onLoadEndListener=D}load(u,l){if(l._loader$)return l._loader$;this.onLoadStartListener&&this.onLoadStartListener(l);const D=this.loadModuleFactory(l.loadChildren).pipe((0,Ie.U)(w=>{this.onLoadEndListener&&this.onLoadEndListener(l);const O=w.create(u);return new bt(On(O.injector.get(mi,void 0,h.XFs.Self|h.XFs.Optional)).map(Le),O)}),ht(w=>{throw l._loader$=void 0,w}));return l._loader$=new ke.c(D,()=>new ce.xQ).pipe((0,xn.x)()),l._loader$}loadModuleFactory(u){return"string"==typeof u?(0,ft.D)(this.loader.load(u)):St(u()).pipe((0,Ce.zg)(l=>l instanceof h.YKP?(0,ve.of)(l):(0,ft.D)(this.compiler.compileModuleAsync(l))))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Iu{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new yi,this.attachRef=null}}class yi{constructor(){this.contexts=new Map}onChildOutletCreated(u,l){const p=this.getOrCreateContext(u);p.outlet=l,this.contexts.set(u,p)}onChildOutletDestroyed(u){const l=this.getContext(u);l&&(l.outlet=null)}onOutletDeactivated(){const u=this.contexts;return this.contexts=new Map,u}onOutletReAttached(u){this.contexts=u}getOrCreateContext(u){let l=this.getContext(u);return l||(l=new Iu,this.contexts.set(u,l)),l}getContext(u){return this.contexts.get(u)||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Wi{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,l){return u}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ol(d){throw d}function Gs(d,u,l){return u.parse("/")}function _i(d,u){return(0,ve.of)(null)}const il={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},sl={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let Kt=(()=>{class d{constructor(l,p,D,w,O,P,J,Ae){this.rootComponentType=l,this.urlSerializer=p,this.rootContexts=D,this.location=w,this.config=Ae,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.lastLocationChangeInfo=null,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new ce.xQ,this.errorHandler=ol,this.malformedUriErrorHandler=Gs,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:_i,afterPreactivation:_i},this.urlHandlingStrategy=new Wi,this.routeReuseStrategy=new gi,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.ngModule=O.get(h.h0i),this.console=O.get(h.c2e);const Bt=O.get(h.R0b);this.isNgZoneEnabled=Bt instanceof h.R0b&&h.R0b.isInAngularZone(),this.resetConfig(Ae),this.currentUrlTree=new Ne(new je([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new rl(P,J,dt=>this.triggerEvent(new An(dt)),dt=>this.triggerEvent(new Rn(dt))),this.routerState=Sr(this.currentUrlTree,this.rootComponentType),this.transitions=new de({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){var l;return null===(l=this.location.getState())||void 0===l?void 0:l.\u0275routerPageId}setupNavigations(l){const p=this.events;return l.pipe((0,Mn.h)(D=>0!==D.id),(0,Ie.U)(D=>Object.assign(Object.assign({},D),{extractedUrl:this.urlHandlingStrategy.extract(D.rawUrl)})),Mt(D=>{let w=!1,O=!1;return(0,ve.of)(D).pipe(ae(P=>{this.currentNavigation={id:P.id,initialUrl:P.currentRawUrl,extractedUrl:P.extractedUrl,trigger:P.source,extras:P.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Mt(P=>{const J=!this.navigated||P.extractedUrl.toString()!==this.browserUrlTree.toString(),Ae=("reload"===this.onSameUrlNavigation||J)&&this.urlHandlingStrategy.shouldProcessUrl(P.rawUrl);if(Qr(P.source)&&(this.browserUrlTree=P.rawUrl),Ae)return(0,ve.of)(P).pipe(Mt(Fe=>{const nt=this.transitions.getValue();return p.next(new Ot(Fe.id,this.serializeUrl(Fe.extractedUrl),Fe.source,Fe.restoredState)),nt!==this.transitions.getValue()?_e:Promise.resolve(Fe)}),function(d,u,l,p){return Mt(D=>function(d,u,l,p,D){return new Bi(d,u,l,p,D).apply()}(d,u,l,D.extractedUrl,p).pipe((0,Ie.U)(w=>Object.assign(Object.assign({},D),{urlAfterRedirects:w}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),ae(Fe=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:Fe.urlAfterRedirects})}),function(d,u,l,p,D){return(0,Ce.zg)(w=>function(d,u,l,p,D="emptyOnly",w="legacy"){try{const O=new go(d,u,l,p,D,w).recognize();return null===O?Ja(new Du):(0,ve.of)(O)}catch(O){return Ja(O)}}(d,u,w.urlAfterRedirects,l(w.urlAfterRedirects),p,D).pipe((0,Ie.U)(O=>Object.assign(Object.assign({},w),{targetSnapshot:O}))))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this.rootComponentType,this.config,Fe=>this.serializeUrl(Fe),this.paramsInheritanceStrategy,this.relativeLinkResolution),ae(Fe=>{"eager"===this.urlUpdateStrategy&&(Fe.extras.skipLocationChange||this.setBrowserUrl(Fe.urlAfterRedirects,Fe),this.browserUrlTree=Fe.urlAfterRedirects);const nt=new lo(Fe.id,this.serializeUrl(Fe.extractedUrl),this.serializeUrl(Fe.urlAfterRedirects),Fe.targetSnapshot);p.next(nt)}));if(J&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:nt,extractedUrl:Bt,source:dt,restoredState:Ho,extras:_o}=P,Zr=new Ot(nt,this.serializeUrl(Bt),dt,Ho);p.next(Zr);const Qi=Sr(Bt,this.rootComponentType).snapshot;return(0,ve.of)(Object.assign(Object.assign({},P),{targetSnapshot:Qi,urlAfterRedirects:Bt,extras:Object.assign(Object.assign({},_o),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=P.rawUrl,this.browserUrlTree=P.urlAfterRedirects,P.resolve(null),_e}),jo(P=>{const{targetSnapshot:J,id:Ae,extractedUrl:Fe,rawUrl:nt,extras:{skipLocationChange:Bt,replaceUrl:dt}}=P;return this.hooks.beforePreactivation(J,{navigationId:Ae,appliedUrlTree:Fe,rawUrlTree:nt,skipLocationChange:!!Bt,replaceUrl:!!dt})}),ae(P=>{const J=new yn(P.id,this.serializeUrl(P.extractedUrl),this.serializeUrl(P.urlAfterRedirects),P.targetSnapshot);this.triggerEvent(J)}),(0,Ie.U)(P=>Object.assign(Object.assign({},P),{guards:_u(P.targetSnapshot,P.currentSnapshot,this.rootContexts)})),function(d,u){return(0,Ce.zg)(l=>{const{targetSnapshot:p,currentSnapshot:D,guards:{canActivateChecks:w,canDeactivateChecks:O}}=l;return 0===O.length&&0===w.length?(0,ve.of)(Object.assign(Object.assign({},l),{guardsResult:!0})):function(d,u,l,p){return(0,ft.D)(d).pipe((0,Ce.zg)(D=>function(d,u,l,p,D){const w=u&&u.routeConfig?u.routeConfig.canDeactivate:null;if(!w||0===w.length)return(0,ve.of)(!0);const O=w.map(P=>{const J=Ui(P,u,D);let Ae;if(function(d){return d&&jt(d.canDeactivate)}(J))Ae=St(J.canDeactivate(d,u,l,p));else{if(!jt(J))throw new Error("Invalid CanDeactivate guard");Ae=St(J(d,u,l,p))}return Ae.pipe(ne())});return(0,ve.of)(O).pipe(Fo())}(D.component,D.route,l,u,p)),ne(D=>!0!==D,!0))}(O,p,D,d).pipe((0,Ce.zg)(P=>P&&function(d){return"boolean"==typeof d}(P)?function(d,u,l,p){return(0,ft.D)(u).pipe((0,Qe.b)(D=>vr(function(d,u){return null!==d&&u&&u(new Ro(d)),(0,ve.of)(!0)}(D.route.parent,p),function(d,u){return null!==d&&u&&u(new ur(d)),(0,ve.of)(!0)}(D.route,p),function(d,u,l){const p=u[u.length-1],w=u.slice(0,u.length-1).reverse().map(O=>function(d){const u=d.routeConfig?d.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:d,guards:u}:null}(O)).filter(O=>null!==O).map(O=>Ke(()=>{const P=O.guards.map(J=>{const Ae=Ui(J,O.node,l);let Fe;if(function(d){return d&&jt(d.canActivateChild)}(Ae))Fe=St(Ae.canActivateChild(p,d));else{if(!jt(Ae))throw new Error("Invalid CanActivateChild guard");Fe=St(Ae(p,d))}return Fe.pipe(ne())});return(0,ve.of)(P).pipe(Fo())}));return(0,ve.of)(w).pipe(Fo())}(d,D.path,l),function(d,u,l){const p=u.routeConfig?u.routeConfig.canActivate:null;if(!p||0===p.length)return(0,ve.of)(!0);const D=p.map(w=>Ke(()=>{const O=Ui(w,u,l);let P;if(function(d){return d&&jt(d.canActivate)}(O))P=St(O.canActivate(u,d));else{if(!jt(O))throw new Error("Invalid CanActivate guard");P=St(O(u,d))}return P.pipe(ne())}));return(0,ve.of)(D).pipe(Fo())}(d,D.route,l))),ne(D=>!0!==D,!0))}(p,w,d,u):(0,ve.of)(P)),(0,Ie.U)(P=>Object.assign(Object.assign({},l),{guardsResult:P})))})}(this.ngModule.injector,P=>this.triggerEvent(P)),ae(P=>{if(Tt(P.guardsResult)){const Ae=Gn(`Redirecting to "${this.serializeUrl(P.guardsResult)}"`);throw Ae.url=P.guardsResult,Ae}const J=new rt(P.id,this.serializeUrl(P.extractedUrl),this.serializeUrl(P.urlAfterRedirects),P.targetSnapshot,!!P.guardsResult);this.triggerEvent(J)}),(0,Mn.h)(P=>!!P.guardsResult||(this.restoreHistory(P),this.cancelNavigationTransition(P,""),!1)),jo(P=>{if(P.guards.canActivateChecks.length)return(0,ve.of)(P).pipe(ae(J=>{const Ae=new _n(J.id,this.serializeUrl(J.extractedUrl),this.serializeUrl(J.urlAfterRedirects),J.targetSnapshot);this.triggerEvent(Ae)}),Mt(J=>{let Ae=!1;return(0,ve.of)(J).pipe(function(d,u){return(0,Ce.zg)(l=>{const{targetSnapshot:p,guards:{canActivateChecks:D}}=l;if(!D.length)return(0,ve.of)(l);let w=0;return(0,ft.D)(D).pipe((0,Qe.b)(O=>function(d,u,l,p){return function(d,u,l,p){const D=Object.keys(d);if(0===D.length)return(0,ve.of)({});const w={};return(0,ft.D)(D).pipe((0,Ce.zg)(O=>function(d,u,l,p){const D=Ui(d,u,p);return St(D.resolve?D.resolve(u,l):D(u,l))}(d[O],u,l,p).pipe(ae(P=>{w[O]=P}))),ar(1),(0,Ce.zg)(()=>Object.keys(w).length===D.length?(0,ve.of)(w):_e))}(d._resolve,d,u,p).pipe((0,Ie.U)(w=>(d._resolvedData=w,d.data=Object.assign(Object.assign({},d.data),ho(d,l).resolve),null)))}(O.route,p,d,u)),ae(()=>w++),ar(1),(0,Ce.zg)(O=>w===D.length?(0,ve.of)(l):_e))})}(this.paramsInheritanceStrategy,this.ngModule.injector),ae({next:()=>Ae=!0,complete:()=>{Ae||(this.restoreHistory(J),this.cancelNavigationTransition(J,"At least one route resolver didn't emit any value."))}}))}),ae(J=>{const Ae=new $n(J.id,this.serializeUrl(J.extractedUrl),this.serializeUrl(J.urlAfterRedirects),J.targetSnapshot);this.triggerEvent(Ae)}))}),jo(P=>{const{targetSnapshot:J,id:Ae,extractedUrl:Fe,rawUrl:nt,extras:{skipLocationChange:Bt,replaceUrl:dt}}=P;return this.hooks.afterPreactivation(J,{navigationId:Ae,appliedUrlTree:Fe,rawUrlTree:nt,skipLocationChange:!!Bt,replaceUrl:!!dt})}),(0,Ie.U)(P=>{const J=function(d,u,l){const p=tn(d,u._root,l?l._root:void 0);return new Po(p,u)}(this.routeReuseStrategy,P.targetSnapshot,P.currentRouterState);return Object.assign(Object.assign({},P),{targetRouterState:J})}),ae(P=>{this.currentUrlTree=P.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,P.rawUrl),this.routerState=P.targetRouterState,"deferred"===this.urlUpdateStrategy&&(P.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,P),this.browserUrlTree=P.urlAfterRedirects)}),((d,u,l)=>(0,Ie.U)(p=>(new Et(u,p.targetRouterState,p.currentRouterState,l).activate(d),p)))(this.rootContexts,this.routeReuseStrategy,P=>this.triggerEvent(P)),ae({next(){w=!0},complete(){w=!0}}),function(d){return u=>u.lift(new At(d))}(()=>{if(!w&&!O){const P=`Navigation ID ${D.id} is not equal to the current navigation id ${this.navigationId}`;"replace"===this.canceledNavigationResolution?(this.restoreHistory(D),this.cancelNavigationTransition(D,P)):this.cancelNavigationTransition(D,P)}this.currentNavigation=null}),ht(P=>{if(O=!0,function(d){return d&&d[dn]}(P)){const J=Tt(P.url);J||(this.navigated=!0,this.restoreHistory(D,!0));const Ae=new ct(D.id,this.serializeUrl(D.extractedUrl),P.message);p.next(Ae),J?setTimeout(()=>{const Fe=this.urlHandlingStrategy.merge(P.url,this.rawUrlTree),nt={skipLocationChange:D.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||Qr(D.source)};this.scheduleNavigation(Fe,"imperative",null,nt,{resolve:D.resolve,reject:D.reject,promise:D.promise})},0):D.resolve(!1)}else{this.restoreHistory(D,!0);const J=new Jn(D.id,this.serializeUrl(D.extractedUrl),P);p.next(J);try{D.resolve(this.errorHandler(P))}catch(Ae){D.reject(Ae)}}return _e}))}))}resetRootComponentType(l){this.rootComponentType=l,this.routerState.root.component=this.rootComponentType}getTransition(){const l=this.transitions.value;return l.urlAfterRedirects=this.browserUrlTree,l}setTransition(l){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),l))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(l=>{const p=this.extractLocationChangeInfoFromEvent(l);this.shouldScheduleNavigation(this.lastLocationChangeInfo,p)&&setTimeout(()=>{const{source:D,state:w,urlTree:O}=p,P={replaceUrl:!0};if(w){const J=Object.assign({},w);delete J.navigationId,delete J.\u0275routerPageId,0!==Object.keys(J).length&&(P.state=J)}this.scheduleNavigation(O,D,w,P)},0),this.lastLocationChangeInfo=p}))}extractLocationChangeInfoFromEvent(l){var p;return{source:"popstate"===l.type?"popstate":"hashchange",urlTree:this.parseUrl(l.url),state:(null===(p=l.state)||void 0===p?void 0:p.navigationId)?l.state:null,transitionId:this.getTransition().id}}shouldScheduleNavigation(l,p){if(!l)return!0;const D=p.urlTree.toString()===l.urlTree.toString();return p.transitionId!==l.transitionId||!D||!("hashchange"===p.source&&"popstate"===l.source||"popstate"===p.source&&"hashchange"===l.source)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(l){this.events.next(l)}resetConfig(l){Yr(l),this.config=l.map(Le),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(l,p={}){const{relativeTo:D,queryParams:w,fragment:O,queryParamsHandling:P,preserveFragment:J}=p,Ae=D||this.routerState.root,Fe=J?this.currentUrlTree.fragment:O;let nt=null;switch(P){case"merge":nt=Object.assign(Object.assign({},this.currentUrlTree.queryParams),w);break;case"preserve":nt=this.currentUrlTree.queryParams;break;default:nt=w||null}return null!==nt&&(nt=this.removeEmptyProps(nt)),function(d,u,l,p,D){if(0===l.length)return v(u.root,u.root,u,p,D);const w=function(d){if("string"==typeof d[0]&&1===d.length&&"/"===d[0])return new f(!0,0,d);let u=0,l=!1;const p=d.reduce((D,w,O)=>{if("object"==typeof w&&null!=w){if(w.outlets){const P={};return Pt(w.outlets,(J,Ae)=>{P[Ae]="string"==typeof J?J.split("/"):J}),[...D,{outlets:P}]}if(w.segmentPath)return[...D,w.segmentPath]}return"string"!=typeof w?[...D,w]:0===O?(w.split("/").forEach((P,J)=>{0==J&&"."===P||(0==J&&""===P?l=!0:".."===P?u++:""!=P&&D.push(P))}),D):[...D,w]},[]);return new f(l,u,p)}(l);if(w.toRoot())return v(u.root,new je([],{}),u,p,D);const O=function(d,u,l){if(d.isAbsolute)return new Y(u.root,!0,0);if(-1===l.snapshot._lastPathIndex){const w=l.snapshot._urlSegment;return new Y(w,w===u.root,0)}const p=Gr(d.commands[0])?0:1;return function(d,u,l){let p=d,D=u,w=l;for(;w>D;){if(w-=D,p=p.parent,!p)throw new Error("Invalid number of '../'");D=p.segments.length}return new Y(p,!1,D-w)}(l.snapshot._urlSegment,l.snapshot._lastPathIndex+p,d.numberOfDoubleDots)}(w,u,d),P=O.processChildren?T(O.segmentGroup,O.index,w.commands):C(O.segmentGroup,O.index,w.commands);return v(O.segmentGroup,P,u,p,D)}(Ae,this.currentUrlTree,l,nt,null!=Fe?Fe:null)}navigateByUrl(l,p={skipLocationChange:!1}){const D=Tt(l)?l:this.parseUrl(l),w=this.urlHandlingStrategy.merge(D,this.rawUrlTree);return this.scheduleNavigation(w,"imperative",null,p)}navigate(l,p={skipLocationChange:!1}){return function(d){for(let u=0;u<d.length;u++){const l=d[u];if(null==l)throw new Error(`The requested path contains ${l} segment at index ${u}`)}}(l),this.navigateByUrl(this.createUrlTree(l,p),p)}serializeUrl(l){return this.urlSerializer.serialize(l)}parseUrl(l){let p;try{p=this.urlSerializer.parse(l)}catch(D){p=this.malformedUriErrorHandler(D,this.urlSerializer,l)}return p}isActive(l,p){let D;if(D=!0===p?Object.assign({},il):!1===p?Object.assign({},sl):p,Tt(l))return Ft(this.currentUrlTree,l,D);const w=this.parseUrl(l);return Ft(this.currentUrlTree,w,D)}removeEmptyProps(l){return Object.keys(l).reduce((p,D)=>{const w=l[D];return null!=w&&(p[D]=w),p},{})}processNavigations(){this.navigations.subscribe(l=>{this.navigated=!0,this.lastSuccessfulId=l.id,this.currentPageId=l.targetPageId,this.events.next(new Lt(l.id,this.serializeUrl(l.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,l.resolve(!0)},l=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(l,p,D,w,O){var P,J;if(this.disposed)return Promise.resolve(!1);const Ae=this.getTransition(),Fe=Qr(p)&&Ae&&!Qr(Ae.source),dt=(this.lastSuccessfulId===Ae.id||this.currentNavigation?Ae.rawUrl:Ae.urlAfterRedirects).toString()===l.toString();if(Fe&&dt)return Promise.resolve(!0);let Ho,_o,Zr;O?(Ho=O.resolve,_o=O.reject,Zr=O.promise):Zr=new Promise((ir,hl)=>{Ho=ir,_o=hl});const Qi=++this.navigationId;let wi;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(D=this.location.getState()),wi=D&&D.\u0275routerPageId?D.\u0275routerPageId:w.replaceUrl||w.skipLocationChange?null!==(P=this.browserPageId)&&void 0!==P?P:0:(null!==(J=this.browserPageId)&&void 0!==J?J:0)+1):wi=0,this.setTransition({id:Qi,targetPageId:wi,source:p,restoredState:D,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:l,extras:w,resolve:Ho,reject:_o,promise:Zr,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),Zr.catch(ir=>Promise.reject(ir))}setBrowserUrl(l,p){const D=this.urlSerializer.serialize(l),w=Object.assign(Object.assign({},p.extras.state),this.generateNgRouterState(p.id,p.targetPageId));this.location.isCurrentPathEqualTo(D)||p.extras.replaceUrl?this.location.replaceState(D,"",w):this.location.go(D,"",w)}restoreHistory(l,p=!1){var D,w;if("computed"===this.canceledNavigationResolution){const O=this.currentPageId-l.targetPageId;"popstate"!==l.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==(null===(D=this.currentNavigation)||void 0===D?void 0:D.finalUrl)||0===O?this.currentUrlTree===(null===(w=this.currentNavigation)||void 0===w?void 0:w.finalUrl)&&0===O&&(this.resetState(l),this.browserUrlTree=l.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(O)}else"replace"===this.canceledNavigationResolution&&(p&&this.resetState(l),this.resetUrlToCurrentUrlTree())}resetState(l){this.routerState=l.currentRouterState,this.currentUrlTree=l.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,l.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(l,p){const D=new ct(l.id,this.serializeUrl(l.extractedUrl),p);this.triggerEvent(D),l.resolve(!1)}generateNgRouterState(l,p){return"computed"===this.canceledNavigationResolution?{navigationId:l,\u0275routerPageId:p}:{navigationId:l}}}return d.\u0275fac=function(l){return new(l||d)(h.LFG(h.DyG),h.LFG(fn),h.LFG(yi),h.LFG(m.Ye),h.LFG(h.zs3),h.LFG(h.v3s),h.LFG(h.Sil),h.LFG(void 0))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac}),d})();function Qr(d){return"imperative"!==d}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Bo=(()=>{class d{constructor(l,p,D){this.router=l,this.route=p,this.locationStrategy=D,this.commands=[],this.onChanges=new ce.xQ,this.subscription=l.events.subscribe(w=>{w instanceof Lt&&this.updateTargetUrlAndHref()})}set routerLink(l){this.commands=null!=l?Array.isArray(l)?l:[l]:[]}ngOnChanges(l){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(l,p,D,w,O){if(0!==l||p||D||w||O||"string"==typeof this.target&&"_self"!=this.target)return!0;const P={skipLocationChange:vi(this.skipLocationChange),replaceUrl:vi(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,P),!1}updateTargetUrlAndHref(){this.href=this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))}get urlTree(){return this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:vi(this.preserveFragment)})}}return d.\u0275fac=function(l){return new(l||d)(h.Y36(Kt),h.Y36(hr),h.Y36(m.S$))},d.\u0275dir=h.lG2({type:d,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(l,p){1&l&&h.NdJ("click",function(w){return p.onClick(w.button,w.ctrlKey,w.shiftKey,w.altKey,w.metaKey)}),2&l&&(h.Ikx("href",p.href,h.LSH),h.uIk("target",p.target))},inputs:{routerLink:"routerLink",target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo"},features:[h.TTD]}),d})();function vi(d){return""===d||!!d}
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
let Ws=(()=>{class d{constructor(l,p,D,w,O){this.parentContexts=l,this.location=p,this.resolver=D,this.changeDetector=O,this.activated=null,this._activatedRoute=null,this.activateEvents=new h.vpe,this.deactivateEvents=new h.vpe,this.name=w||$e,l.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const l=this.parentContexts.getContext(this.name);l&&l.route&&(l.attachRef?this.attach(l.attachRef,l.route):this.activateWith(l.route,l.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const l=this.activated;return this.activated=null,this._activatedRoute=null,l}attach(l,p){this.activated=l,this._activatedRoute=p,this.location.insert(l.hostView)}deactivate(){if(this.activated){const l=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(l)}}activateWith(l,p){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=l;const O=(p=p||this.resolver).resolveComponentFactory(l._futureSnapshot.routeConfig.component),P=this.parentContexts.getOrCreateContext(this.name).children,J=new Su(l,P,this.location.injector);this.activated=this.location.createComponent(O,this.location.length,J),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return d.\u0275fac=function(l){return new(l||d)(h.Y36(yi),h.Y36(h.s_b),h.Y36(h._Vd),h.$8M("name"),h.Y36(h.sBO))},d.\u0275dir=h.lG2({type:d,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),d})();class Su{constructor(u,l,p){this.route=u,this.childContexts=l,this.parent=p}get(u,l){return u===hr?this.route:u===yi?this.childContexts:this.parent.get(u,l)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Xo{}class zi{preload(u,l){return(0,ve.of)(null)}}let Di=(()=>{class d{constructor(l,p,D,w,O){this.router=l,this.injector=w,this.preloadingStrategy=O,this.loader=new rl(p,D,Ae=>l.triggerEvent(new An(Ae)),Ae=>l.triggerEvent(new Rn(Ae)))}setUpPreloading(){this.subscription=this.router.events.pipe((0,Mn.h)(l=>l instanceof Lt),(0,Qe.b)(()=>this.preload())).subscribe(()=>{})}preload(){const l=this.injector.get(h.h0i);return this.processRoutes(l,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(l,p){const D=[];for(const w of p)if(w.loadChildren&&!w.canLoad&&w._loadedConfig){const O=w._loadedConfig;D.push(this.processRoutes(O.module,O.routes))}else w.loadChildren&&!w.canLoad?D.push(this.preloadConfig(l,w)):w.children&&D.push(this.processRoutes(l,w.children));return(0,ft.D)(D).pipe((0,Vt.J)(),(0,Ie.U)(w=>{}))}preloadConfig(l,p){return this.preloadingStrategy.preload(p,()=>(p._loadedConfig?(0,ve.of)(p._loadedConfig):this.loader.load(l.injector,p)).pipe((0,Ce.zg)(w=>(p._loadedConfig=w,this.processRoutes(w.module,w.routes)))))}}return d.\u0275fac=function(l){return new(l||d)(h.LFG(Kt),h.LFG(h.v3s),h.LFG(h.Sil),h.LFG(h.zs3),h.LFG(Xo))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac}),d})(),ei=(()=>{class d{constructor(l,p,D={}){this.router=l,this.viewportScroller=p,this.options=D,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},D.scrollPositionRestoration=D.scrollPositionRestoration||"disabled",D.anchorScrolling=D.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(l=>{l instanceof Ot?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=l.navigationTrigger,this.restoredId=l.restoredState?l.restoredState.navigationId:0):l instanceof Lt&&(this.lastId=l.id,this.scheduleScrollEvent(l,this.router.parseUrl(l.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(l=>{l instanceof cr&&(l.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(l.position):l.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(l.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(l,p){this.router.triggerEvent(new cr(l,"popstate"===this.lastSource?this.store[this.restoredId]:null,p))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return d.\u0275fac=function(l){return new(l||d)(h.LFG(Kt),h.LFG(m.EM),h.LFG(void 0))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac}),d})();
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
const yo=new h.OlP("ROUTER_CONFIGURATION"),Ys=new h.OlP("ROUTER_FORROOT_GUARD"),cl=[m.Ye,{provide:fn,useClass:In},{provide:Kt,useFactory:function(d,u,l,p,D,w,O,P={},J,Ae){const Fe=new Kt(null,d,u,l,p,D,w,On(O));return J&&(Fe.urlHandlingStrategy=J),Ae&&(Fe.routeReuseStrategy=Ae),function(d,u){d.errorHandler&&(u.errorHandler=d.errorHandler),d.malformedUriErrorHandler&&(u.malformedUriErrorHandler=d.malformedUriErrorHandler),d.onSameUrlNavigation&&(u.onSameUrlNavigation=d.onSameUrlNavigation),d.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=d.paramsInheritanceStrategy),d.relativeLinkResolution&&(u.relativeLinkResolution=d.relativeLinkResolution),d.urlUpdateStrategy&&(u.urlUpdateStrategy=d.urlUpdateStrategy)}(P,Fe),P.enableTracing&&Fe.events.subscribe(nt=>{var Bt,dt;null===(Bt=console.group)||void 0===Bt||Bt.call(console,`Router Event: ${nt.constructor.name}`),console.log(nt.toString()),console.log(nt),null===(dt=console.groupEnd)||void 0===dt||dt.call(console)}),Fe},deps:[fn,yi,m.Ye,h.zs3,h.v3s,h.Sil,mi,yo,[class{},new h.FiY],[class{},new h.FiY]]},yi,{provide:hr,useFactory:function(d){return d.routerState.root},deps:[Kt]},{provide:h.v3s,useClass:h.EAV},Di,zi,class{preload(u,l){return l().pipe(ht(()=>(0,ve.of)(null)))}},{provide:yo,useValue:{enableTracing:!1}}];function xu(){return new h.PXZ("Router",Kt)}let Ru=(()=>{class d{constructor(l,p){}static forRoot(l,p){return{ngModule:d,providers:[cl,qs(l),{provide:Ys,useFactory:Ou,deps:[[Kt,new h.FiY,new h.tp0]]},{provide:yo,useValue:p||{}},{provide:m.S$,useFactory:Ei,deps:[m.lw,[new h.tBr(m.mr),new h.FiY],yo]},{provide:ei,useFactory:Yi,deps:[Kt,m.EM,yo]},{provide:Xo,useExisting:p&&p.preloadingStrategy?p.preloadingStrategy:zi},{provide:h.PXZ,multi:!0,useFactory:xu},[bi,{provide:h.ip1,multi:!0,useFactory:Qs,deps:[bi]},{provide:Uo,useFactory:ni,deps:[bi]},{provide:h.tb,multi:!0,useExisting:Uo}]]}}static forChild(l){return{ngModule:d,providers:[qs(l)]}}}return d.\u0275fac=function(l){return new(l||d)(h.LFG(Ys,8),h.LFG(Kt,8))},d.\u0275mod=h.oAB({type:d}),d.\u0275inj=h.cJS({}),d})();function Yi(d,u,l){return l.scrollOffset&&u.setOffset(l.scrollOffset),new ei(d,u,l)}function Ei(d,u,l={}){return l.useHash?new m.Do(d,u):new m.b0(d,u)}function Ou(d){return"guarded"}function qs(d){return[{provide:h.deG,multi:!0,useValue:d},{provide:mi,multi:!0,useValue:d}]}let bi=(()=>{class d{constructor(l){this.injector=l,this.initNavigation=!1,this.destroyed=!1,this.resultOfPreactivationDone=new ce.xQ}appInitializer(){return this.injector.get(m.V_,Promise.resolve(null)).then(()=>{if(this.destroyed)return Promise.resolve(!0);let p=null;const D=new Promise(P=>p=P),w=this.injector.get(Kt),O=this.injector.get(yo);return"disabled"===O.initialNavigation?(w.setUpLocationChangeListener(),p(!0)):"enabled"===O.initialNavigation||"enabledBlocking"===O.initialNavigation?(w.hooks.afterPreactivation=()=>this.initNavigation?(0,ve.of)(null):(this.initNavigation=!0,p(!0),this.resultOfPreactivationDone),w.initialNavigation()):p(!0),D})}bootstrapListener(l){const p=this.injector.get(yo),D=this.injector.get(Di),w=this.injector.get(ei),O=this.injector.get(Kt),P=this.injector.get(h.z2F);l===P.components[0]&&(("enabledNonBlocking"===p.initialNavigation||void 0===p.initialNavigation)&&O.initialNavigation(),D.setUpPreloading(),w.init(),O.resetRootComponentType(P.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}ngOnDestroy(){this.destroyed=!0}}return d.\u0275fac=function(l){return new(l||d)(h.LFG(h.zs3))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac}),d})();function Qs(d){return d.appInitializer.bind(d)}function ni(d){return d.bootstrapListener.bind(d)}const Uo=new h.OlP("Router Initializer")}
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
       */,7574:(He,ue,V)=>{"use strict";V.d(ue,{y:()=>W});var m=V(7393),ce=V(9181),we=V(6490),ie=V(6554),fe=V(4487);var U=V(2494);let W=(()=>{class Z{constructor(ge){this._isScalar=!1,ge&&(this._subscribe=ge)}lift(ge){const K=new Z;return K.source=this,K.operator=ge,K}subscribe(ge,K,Oe){const{operator:et}=this,Se=function(Z,te,ge){if(Z){if(Z instanceof m.L)return Z;if(Z[ce.b])return Z[ce.b]()}return Z||te||ge?new m.L(Z,te,ge):new m.L(we.c)}(ge,K,Oe);if(Se.add(et?et.call(Se,this.source):this.source||U.v.useDeprecatedSynchronousErrorHandling&&!Se.syncErrorThrowable?this._subscribe(Se):this._trySubscribe(Se)),U.v.useDeprecatedSynchronousErrorHandling&&Se.syncErrorThrowable&&(Se.syncErrorThrowable=!1,Se.syncErrorThrown))throw Se.syncErrorValue;return Se}_trySubscribe(ge){try{return this._subscribe(ge)}catch(K){U.v.useDeprecatedSynchronousErrorHandling&&(ge.syncErrorThrown=!0,ge.syncErrorValue=K),function(Z){for(;Z;){const{closed:te,destination:ge,isStopped:K}=Z;if(te||K)return!1;Z=ge&&ge instanceof m.L?ge:null}return!0}(ge)?ge.error(K):console.warn(K)}}forEach(ge,K){return new(K=H(K))((Oe,et)=>{let Se;Se=this.subscribe(pe=>{try{ge(pe)}catch(ve){et(ve),Se&&Se.unsubscribe()}},et,Oe)})}_subscribe(ge){const{source:K}=this;return K&&K.subscribe(ge)}[ie.L](){return this}pipe(...ge){return 0===ge.length?this:function(Z){return 0===Z.length?fe.y:1===Z.length?Z[0]:function(ge){return Z.reduce((K,Oe)=>Oe(K),ge)}}(ge)(this)}toPromise(ge){return new(ge=H(ge))((K,Oe)=>{let et;this.subscribe(Se=>et=Se,Se=>Oe(Se),()=>K(et))})}}return Z.create=te=>new Z(te),Z})();function H(Z){if(Z||(Z=U.v.Promise||Promise),!Z)throw new Error("no Promise impl found");return Z}},6490:(He,ue,V)=>{"use strict";V.d(ue,{c:()=>ce});var m=V(2494),h=V(4449);const ce={closed:!0,next(we){},error(we){if(m.v.useDeprecatedSynchronousErrorHandling)throw we;(0,h.z)(we)},complete(){}}},7709:(He,ue,V)=>{"use strict";V.d(ue,{xQ:()=>he,Yc:()=>fe});var m=V(7574),h=V(7393),ce=V(5319),we=V(7971);class de extends ce.w{constructor(W,H){super(),this.subject=W,this.subscriber=H,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const W=this.subject,H=W.observers;if(this.subject=null,!H||0===H.length||W.isStopped||W.closed)return;const Z=H.indexOf(this.subscriber);-1!==Z&&H.splice(Z,1)}}var ie=V(9181);class fe extends h.L{constructor(W){super(W),this.destination=W}}let he=(()=>{class U extends m.y{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[ie.b](){return new fe(this)}lift(H){const Z=new se(this,this);return Z.operator=H,Z}next(H){if(this.closed)throw new we.N;if(!this.isStopped){const{observers:Z}=this,te=Z.length,ge=Z.slice();for(let K=0;K<te;K++)ge[K].next(H)}}error(H){if(this.closed)throw new we.N;this.hasError=!0,this.thrownError=H,this.isStopped=!0;const{observers:Z}=this,te=Z.length,ge=Z.slice();for(let K=0;K<te;K++)ge[K].error(H);this.observers.length=0}complete(){if(this.closed)throw new we.N;this.isStopped=!0;const{observers:H}=this,Z=H.length,te=H.slice();for(let ge=0;ge<Z;ge++)te[ge].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(H){if(this.closed)throw new we.N;return super._trySubscribe(H)}_subscribe(H){if(this.closed)throw new we.N;return this.hasError?(H.error(this.thrownError),ce.w.EMPTY):this.isStopped?(H.complete(),ce.w.EMPTY):(this.observers.push(H),new de(this,H))}asObservable(){const H=new m.y;return H.source=this,H}}return U.create=(W,H)=>new se(W,H),U})();class se extends he{constructor(W,H){super(),this.destination=W,this.source=H}next(W){const{destination:H}=this;H&&H.next&&H.next(W)}error(W){const{destination:H}=this;H&&H.error&&this.destination.error(W)}complete(){const{destination:W}=this;W&&W.complete&&this.destination.complete()}_subscribe(W){const{source:H}=this;return H?this.source.subscribe(W):ce.w.EMPTY}}},7393:(He,ue,V)=>{"use strict";V.d(ue,{L:()=>fe});var m=V(9105),h=V(6490),ce=V(5319),we=V(9181),de=V(2494),ie=V(4449);class fe extends ce.w{constructor(U,W,H){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=h.c;break;case 1:if(!U){this.destination=h.c;break}if("object"==typeof U){U instanceof fe?(this.syncErrorThrowable=U.syncErrorThrowable,this.destination=U,U.add(this)):(this.syncErrorThrowable=!0,this.destination=new he(this,U));break}default:this.syncErrorThrowable=!0,this.destination=new he(this,U,W,H)}}[we.b](){return this}static create(U,W,H){const Z=new fe(U,W,H);return Z.syncErrorThrowable=!1,Z}next(U){this.isStopped||this._next(U)}error(U){this.isStopped||(this.isStopped=!0,this._error(U))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(U){this.destination.next(U)}_error(U){this.destination.error(U),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:U}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=U,this}}class he extends fe{constructor(U,W,H,Z){super(),this._parentSubscriber=U;let te,ge=this;(0,m.m)(W)?te=W:W&&(te=W.next,H=W.error,Z=W.complete,W!==h.c&&(ge=Object.create(W),(0,m.m)(ge.unsubscribe)&&this.add(ge.unsubscribe.bind(ge)),ge.unsubscribe=this.unsubscribe.bind(this))),this._context=ge,this._next=te,this._error=H,this._complete=Z}next(U){if(!this.isStopped&&this._next){const{_parentSubscriber:W}=this;de.v.useDeprecatedSynchronousErrorHandling&&W.syncErrorThrowable?this.__tryOrSetError(W,this._next,U)&&this.unsubscribe():this.__tryOrUnsub(this._next,U)}}error(U){if(!this.isStopped){const{_parentSubscriber:W}=this,{useDeprecatedSynchronousErrorHandling:H}=de.v;if(this._error)H&&W.syncErrorThrowable?(this.__tryOrSetError(W,this._error,U),this.unsubscribe()):(this.__tryOrUnsub(this._error,U),this.unsubscribe());else if(W.syncErrorThrowable)H?(W.syncErrorValue=U,W.syncErrorThrown=!0):(0,ie.z)(U),this.unsubscribe();else{if(this.unsubscribe(),H)throw U;(0,ie.z)(U)}}}complete(){if(!this.isStopped){const{_parentSubscriber:U}=this;if(this._complete){const W=()=>this._complete.call(this._context);de.v.useDeprecatedSynchronousErrorHandling&&U.syncErrorThrowable?(this.__tryOrSetError(U,W),this.unsubscribe()):(this.__tryOrUnsub(W),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(U,W){try{U.call(this._context,W)}catch(H){if(this.unsubscribe(),de.v.useDeprecatedSynchronousErrorHandling)throw H;(0,ie.z)(H)}}__tryOrSetError(U,W,H){if(!de.v.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{W.call(this._context,H)}catch(Z){return de.v.useDeprecatedSynchronousErrorHandling?(U.syncErrorValue=Z,U.syncErrorThrown=!0,!0):((0,ie.z)(Z),!0)}return!1}_unsubscribe(){const{_parentSubscriber:U}=this;this._context=null,this._parentSubscriber=null,U.unsubscribe()}}},5319:(He,ue,V)=>{"use strict";V.d(ue,{w:()=>ie});var m=V(9796),h=V(1555),ce=V(9105);const de=(()=>{function he(se){return Error.call(this),this.message=se?`${se.length} errors occurred during unsubscription:\n${se.map((U,W)=>`${W+1}) ${U.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=se,this}return he.prototype=Object.create(Error.prototype),he})();class ie{constructor(se){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,se&&(this._ctorUnsubscribe=!0,this._unsubscribe=se)}unsubscribe(){let se;if(this.closed)return;let{_parentOrParents:U,_ctorUnsubscribe:W,_unsubscribe:H,_subscriptions:Z}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,U instanceof ie)U.remove(this);else if(null!==U)for(let te=0;te<U.length;++te)U[te].remove(this);if((0,ce.m)(H)){W&&(this._unsubscribe=void 0);try{H.call(this)}catch(te){se=te instanceof de?fe(te.errors):[te]}}if((0,m.k)(Z)){let te=-1,ge=Z.length;for(;++te<ge;){const K=Z[te];if((0,h.K)(K))try{K.unsubscribe()}catch(Oe){se=se||[],Oe instanceof de?se=se.concat(fe(Oe.errors)):se.push(Oe)}}}if(se)throw new de(se)}add(se){let U=se;if(!se)return ie.EMPTY;switch(typeof se){case"function":U=new ie(se);case"object":if(U===this||U.closed||"function"!=typeof U.unsubscribe)return U;if(this.closed)return U.unsubscribe(),U;if(!(U instanceof ie)){const Z=U;U=new ie,U._subscriptions=[Z]}break;default:throw new Error("unrecognized teardown "+se+" added to Subscription.")}let{_parentOrParents:W}=U;if(null===W)U._parentOrParents=this;else if(W instanceof ie){if(W===this)return U;U._parentOrParents=[W,this]}else{if(-1!==W.indexOf(this))return U;W.push(this)}const H=this._subscriptions;return null===H?this._subscriptions=[U]:H.push(U),U}remove(se){const U=this._subscriptions;if(U){const W=U.indexOf(se);-1!==W&&U.splice(W,1)}}}var he;function fe(he){return he.reduce((se,U)=>se.concat(U instanceof de?U.errors:U),[])}ie.EMPTY=((he=new ie).closed=!0,he)},2494:(He,ue,V)=>{"use strict";V.d(ue,{v:()=>h});let m=!1;const h={Promise:void 0,set useDeprecatedSynchronousErrorHandling(ce){if(ce){const we=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+we.stack)}else m&&console.log("RxJS: Back to a better error behavior. Thank you. <3");m=ce},get useDeprecatedSynchronousErrorHandling(){return m}}},5345:(He,ue,V)=>{"use strict";V.d(ue,{IY:()=>we,Ds:()=>ie,ft:()=>he});var m=V(7393),h=V(7574),ce=V(7444);class we extends m.L{constructor(U){super(),this.parent=U}_next(U){this.parent.notifyNext(U)}_error(U){this.parent.notifyError(U),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class ie extends m.L{notifyNext(U){this.destination.next(U)}notifyError(U){this.destination.error(U)}notifyComplete(){this.destination.complete()}}function he(se,U){if(U.closed)return;if(se instanceof h.y)return se.subscribe(U);let W;try{W=(0,ce.s)(se)(U)}catch(H){U.error(H)}return W}},2441:(He,ue,V)=>{"use strict";V.d(ue,{c:()=>de,N:()=>ie});var m=V(7709),h=V(7574),ce=V(5319),we=V(1307);class de extends h.y{constructor(W,H){super(),this.source=W,this.subjectFactory=H,this._refCount=0,this._isComplete=!1}_subscribe(W){return this.getSubject().subscribe(W)}getSubject(){const W=this._subject;return(!W||W.isStopped)&&(this._subject=this.subjectFactory()),this._subject}connect(){let W=this._connection;return W||(this._isComplete=!1,W=this._connection=new ce.w,W.add(this.source.subscribe(new fe(this.getSubject(),this))),W.closed&&(this._connection=null,W=ce.w.EMPTY)),W}refCount(){return(0,we.x)()(this)}}const ie=(()=>{const U=de.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:U._subscribe},_isComplete:{value:U._isComplete,writable:!0},getSubject:{value:U.getSubject},connect:{value:U.connect},refCount:{value:U.refCount}}})();class fe extends m.Yc{constructor(W,H){super(W),this.connectable=H}_error(W){this._unsubscribe(),super._error(W)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const W=this.connectable;if(W){this.connectable=null;const H=W._connection;W._refCount=0,W._subject=null,W._connection=null,H&&H.unsubscribe()}}}},4402:(He,ue,V)=>{"use strict";V.d(ue,{D:()=>ge});var m=V(7574),h=V(7444),ce=V(5319),we=V(6554),fe=V(4087),he=V(377),W=V(4072),H=V(9489);function ge(K,Oe){return Oe?function(K,Oe){if(null!=K){if(function(K){return K&&"function"==typeof K[we.L]}(K))return function(K,Oe){return new m.y(et=>{const Se=new ce.w;return Se.add(Oe.schedule(()=>{const pe=K[we.L]();Se.add(pe.subscribe({next(ve){Se.add(Oe.schedule(()=>et.next(ve)))},error(ve){Se.add(Oe.schedule(()=>et.error(ve)))},complete(){Se.add(Oe.schedule(()=>et.complete()))}}))})),Se})}(K,Oe);if((0,W.t)(K))return function(K,Oe){return new m.y(et=>{const Se=new ce.w;return Se.add(Oe.schedule(()=>K.then(pe=>{Se.add(Oe.schedule(()=>{et.next(pe),Se.add(Oe.schedule(()=>et.complete()))}))},pe=>{Se.add(Oe.schedule(()=>et.error(pe)))}))),Se})}(K,Oe);if((0,H.z)(K))return(0,fe.r)(K,Oe);if(function(K){return K&&"function"==typeof K[he.hZ]}(K)||"string"==typeof K)return function(K,Oe){if(!K)throw new Error("Iterable cannot be null");return new m.y(et=>{const Se=new ce.w;let pe;return Se.add(()=>{pe&&"function"==typeof pe.return&&pe.return()}),Se.add(Oe.schedule(()=>{pe=K[he.hZ](),Se.add(Oe.schedule(function(){if(et.closed)return;let ve,Vt;try{const Ut=pe.next();ve=Ut.value,Vt=Ut.done}catch(Ut){return void et.error(Ut)}Vt?et.complete():(et.next(ve),this.schedule())}))})),Se})}(K,Oe)}throw new TypeError((null!==K&&typeof K||K)+" is not observable")}(K,Oe):K instanceof m.y?K:new m.y((0,h.s)(K))}},6693:(He,ue,V)=>{"use strict";V.d(ue,{n:()=>we});var m=V(7574),h=V(5015),ce=V(4087);function we(de,ie){return ie?(0,ce.r)(de,ie):new m.y((0,h.V)(de))}},5917:(He,ue,V)=>{"use strict";V.d(ue,{of:()=>we});var m=V(4869),h=V(6693),ce=V(4087);function we(...de){let ie=de[de.length-1];return(0,m.K)(ie)?(de.pop(),(0,ce.r)(de,ie)):(0,h.n)(de)}},4612:(He,ue,V)=>{"use strict";V.d(ue,{b:()=>h});var m=V(9773);function h(ce,we){return(0,m.zg)(ce,we,1)}},5435:(He,ue,V)=>{"use strict";V.d(ue,{h:()=>h});var m=V(7393);function h(de,ie){return function(he){return he.lift(new ce(de,ie))}}class ce{constructor(ie,fe){this.predicate=ie,this.thisArg=fe}call(ie,fe){return fe.subscribe(new we(ie,this.predicate,this.thisArg))}}class we extends m.L{constructor(ie,fe,he){super(ie),this.predicate=fe,this.thisArg=he,this.count=0}_next(ie){let fe;try{fe=this.predicate.call(this.thisArg,ie,this.count++)}catch(he){return void this.destination.error(he)}fe&&this.destination.next(ie)}}},8002:(He,ue,V)=>{"use strict";V.d(ue,{U:()=>h});var m=V(7393);function h(de,ie){return function(he){if("function"!=typeof de)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return he.lift(new ce(de,ie))}}class ce{constructor(ie,fe){this.project=ie,this.thisArg=fe}call(ie,fe){return fe.subscribe(new we(ie,this.project,this.thisArg))}}class we extends m.L{constructor(ie,fe,he){super(ie),this.project=fe,this.count=0,this.thisArg=he||this}_next(ie){let fe;try{fe=this.project.call(this.thisArg,ie,this.count++)}catch(he){return void this.destination.error(he)}this.destination.next(fe)}}},3282:(He,ue,V)=>{"use strict";V.d(ue,{J:()=>ce});var m=V(9773),h=V(4487);function ce(we=Number.POSITIVE_INFINITY){return(0,m.zg)(h.y,we)}},9773:(He,ue,V)=>{"use strict";V.d(ue,{zg:()=>we});var m=V(8002),h=V(4402),ce=V(5345);function we(he,se,U=Number.POSITIVE_INFINITY){return"function"==typeof se?W=>W.pipe(we((H,Z)=>(0,h.D)(he(H,Z)).pipe((0,m.U)((te,ge)=>se(H,te,Z,ge))),U)):("number"==typeof se&&(U=se),W=>W.lift(new de(he,U)))}class de{constructor(se,U=Number.POSITIVE_INFINITY){this.project=se,this.concurrent=U}call(se,U){return U.subscribe(new ie(se,this.project,this.concurrent))}}class ie extends ce.Ds{constructor(se,U,W=Number.POSITIVE_INFINITY){super(se),this.project=U,this.concurrent=W,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(se){this.active<this.concurrent?this._tryNext(se):this.buffer.push(se)}_tryNext(se){let U;const W=this.index++;try{U=this.project(se,W)}catch(H){return void this.destination.error(H)}this.active++,this._innerSub(U)}_innerSub(se){const U=new ce.IY(this),W=this.destination;W.add(U);const H=(0,ce.ft)(se,U);H!==U&&W.add(H)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(se){this.destination.next(se)}notifyComplete(){const se=this.buffer;this.active--,se.length>0?this._next(se.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}},1307:(He,ue,V)=>{"use strict";V.d(ue,{x:()=>h});var m=V(7393);function h(){return function(ie){return ie.lift(new ce(ie))}}class ce{constructor(ie){this.connectable=ie}call(ie,fe){const{connectable:he}=this;he._refCount++;const se=new we(ie,he),U=fe.subscribe(se);return se.closed||(se.connection=he.connect()),U}}class we extends m.L{constructor(ie,fe){super(ie),this.connectable=fe}_unsubscribe(){const{connectable:ie}=this;if(!ie)return void(this.connection=null);this.connectable=null;const fe=ie._refCount;if(fe<=0)return void(this.connection=null);if(ie._refCount=fe-1,fe>1)return void(this.connection=null);const{connection:he}=this,se=ie._connection;this.connection=null,se&&(!he||se===he)&&se.unsubscribe()}}},4087:(He,ue,V)=>{"use strict";V.d(ue,{r:()=>ce});var m=V(7574),h=V(5319);function ce(we,de){return new m.y(ie=>{const fe=new h.w;let he=0;return fe.add(de.schedule(function(){he!==we.length?(ie.next(we[he++]),ie.closed||fe.add(this.schedule())):ie.complete()})),fe})}},377:(He,ue,V)=>{"use strict";V.d(ue,{hZ:()=>h});const h="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"},6554:(He,ue,V)=>{"use strict";V.d(ue,{L:()=>m});const m="function"==typeof Symbol&&Symbol.observable||"@@observable"},9181:(He,ue,V)=>{"use strict";V.d(ue,{b:()=>m});const m="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()},7971:(He,ue,V)=>{"use strict";V.d(ue,{N:()=>h});const h=(()=>{function ce(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return ce.prototype=Object.create(Error.prototype),ce})()},4449:(He,ue,V)=>{"use strict";function m(h){setTimeout(()=>{throw h},0)}V.d(ue,{z:()=>m})},4487:(He,ue,V)=>{"use strict";function m(h){return h}V.d(ue,{y:()=>m})},9796:(He,ue,V)=>{"use strict";V.d(ue,{k:()=>m});const m=Array.isArray||(h=>h&&"number"==typeof h.length)},9489:(He,ue,V)=>{"use strict";V.d(ue,{z:()=>m});const m=h=>h&&"number"==typeof h.length&&"function"!=typeof h},9105:(He,ue,V)=>{"use strict";function m(h){return"function"==typeof h}V.d(ue,{m:()=>m})},1555:(He,ue,V)=>{"use strict";function m(h){return null!==h&&"object"==typeof h}V.d(ue,{K:()=>m})},4072:(He,ue,V)=>{"use strict";function m(h){return!!h&&"function"!=typeof h.subscribe&&"function"==typeof h.then}V.d(ue,{t:()=>m})},4869:(He,ue,V)=>{"use strict";function m(h){return h&&"function"==typeof h.schedule}V.d(ue,{K:()=>m})},7444:(He,ue,V)=>{"use strict";V.d(ue,{s:()=>W});var m=V(5015),h=V(4449),we=V(377),ie=V(6554),he=V(9489),se=V(4072),U=V(1555);const W=H=>{if(H&&"function"==typeof H[ie.L])return(H=>Z=>{const te=H[ie.L]();if("function"!=typeof te.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return te.subscribe(Z)})(H);if((0,he.z)(H))return(0,m.V)(H);if((0,se.t)(H))return(H=>Z=>(H.then(te=>{Z.closed||(Z.next(te),Z.complete())},te=>Z.error(te)).then(null,h.z),Z))(H);if(H&&"function"==typeof H[we.hZ])return(H=>Z=>{const te=H[we.hZ]();for(;;){let ge;try{ge=te.next()}catch(K){return Z.error(K),Z}if(ge.done){Z.complete();break}if(Z.next(ge.value),Z.closed)break}return"function"==typeof te.return&&Z.add(()=>{te.return&&te.return()}),Z})(H);{const te=`You provided ${(0,U.K)(H)?"an invalid object":`'${H}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;throw new TypeError(te)}}},5015:(He,ue,V)=>{"use strict";V.d(ue,{V:()=>m});const m=h=>ce=>{for(let we=0,de=h.length;we<de&&!ce.closed;we++)ce.next(h[we]);ce.complete()}},6227:(He,ue,V)=>{"use strict";V.d(ue,{o:()=>se});var m=V(639),h=V(665),ce=V(7544),we=V(8583);function de(U,W){if(1&U&&(m.TgZ(0,"option",8),m._uU(1),m.qZA()),2&U){const H=W.$implicit;m.Q6J("ngValue",H.value),m.xp6(1),m.Oqu(H.name)}}function ie(U,W){1&U&&m._UZ(0,"input",9)}function fe(U,W){if(1&U&&(m.TgZ(0,"option",8),m._uU(1),m.qZA()),2&U){const H=W.$implicit;m.Q6J("ngValue",H.age),m.xp6(1),m.hij("",H.age," \u5e74\u4ee3")}}function he(U,W){if(1&U){const H=m.EpF();m.TgZ(0,"select",10),m.NdJ("change",function(){return m.CHM(H),m.oxw().onChangeSearchPublishedAge()}),m.YNc(1,fe,2,2,"option",3),m.qZA()}if(2&U){const H=m.oxw();m.xp6(1),m.Q6J("ngForOf",H.searchPublishedAges)}}let se=(()=>{class U{constructor(H){this.formBuilder=H,this.isDisabled=!1,this.onSubmit=new m.vpe,this.searchTargetColumns=Object.entries(ce.q).map(Z=>({name:Z[1].name,value:Z[1].key})),this.startAge=1890}ngOnInit(){this.searchForm=this.formBuilder.group({targetColumn:[ce.q.title.key,[h.kI.required]],searchText:[""],publishedAge:[""]}),this.searchPublishedAges=this.createSearchPublishedAges()}onChangeSearchTargetColumn(){if(this.searchForm.value.targetColumn!==ce.q.publishedAge.key)return this.searchForm.controls.searchText.reset();const H=this.searchPublishedAges[this.searchPublishedAges.length-2].age;this.searchForm.controls.searchText.setValue(H),this.searchForm.controls.publishedAge.setValue(H)}onChangeSearchPublishedAge(){this.searchForm.controls.searchText.setValue(this.searchForm.value.publishedAge)}isInvalidPublishedYear(){if(this.searchForm.value.targetColumn!==ce.q.publishedYear.key)return!1;const H=this.trimValue(this.searchForm.value.searchText);if(!H)return!1;const Z=Number(H);return!Number.isInteger(Z)||Z<this.startAge||Z>2100}onSearch(){const H=this.trimValue(this.searchForm.value.targetColumn),Z=this.trimValue(this.searchForm.value.searchText);this.onSubmit.emit(Z?{targetColumn:H,searchText:Z}:void 0)}onReload(){this.searchForm.reset({targetColumn:ce.q.title.key}),this.onSubmit.emit()}createSearchPublishedAges(){const Z=Number(`${(new Date).getFullYear()}`.substr(0,3)+"0")+10,te=[];let ge=this.startAge;for(;ge<=Z;)te.push({age:ge}),ge+=10;return te}trimValue(H){return null==H?"":String(H).trim()}}return U.\u0275fac=function(H){return new(H||U)(m.Y36(h.qu))},U.\u0275cmp=m.Xpm({type:U,selectors:[["app-search-form"]],inputs:{isDisabled:"isDisabled"},outputs:{onSubmit:"onSubmit"},decls:12,vars:6,consts:[[1,"grid-2-columns",3,"formGroup","submit"],[1,"inputs-container"],["formControlName","targetColumn",3,"change"],[3,"ngValue",4,"ngFor","ngForOf"],["type","text","placeholder","\u691c\u7d22\u6587\u5b57\u5217","formControlName","searchText",4,"ngIf","ngIfElse"],["publishedAge",""],["type","submit",3,"disabled"],["type","button",3,"disabled","click"],[3,"ngValue"],["type","text","placeholder","\u691c\u7d22\u6587\u5b57\u5217","formControlName","searchText"],["formControlName","publishedAge",3,"change"]],template:function(H,Z){if(1&H&&(m.TgZ(0,"form",0),m.NdJ("submit",function(){return Z.onSearch()}),m.TgZ(1,"div",1),m.TgZ(2,"select",2),m.NdJ("change",function(){return Z.onChangeSearchTargetColumn()}),m.YNc(3,de,2,2,"option",3),m.qZA(),m.YNc(4,ie,1,0,"input",4),m.YNc(5,he,2,1,"ng-template",null,5,m.W1O),m.TgZ(7,"button",6),m._uU(8,"\u691c\u7d22"),m.qZA(),m.qZA(),m.TgZ(9,"div"),m.TgZ(10,"button",7),m.NdJ("click",function(){return Z.onReload()}),m._uU(11,"Reload"),m.qZA(),m.qZA(),m.qZA()),2&H){const te=m.MAs(6);m.Q6J("formGroup",Z.searchForm),m.xp6(3),m.Q6J("ngForOf",Z.searchTargetColumns),m.xp6(1),m.Q6J("ngIf","published_age"!==Z.searchForm.controls.targetColumn.value)("ngIfElse",te),m.xp6(3),m.Q6J("disabled",Z.isDisabled||Z.searchForm.invalid||Z.isInvalidPublishedYear()),m.xp6(3),m.Q6J("disabled",Z.isDisabled)}},directives:[h._Y,h.JL,h.sg,h.EJ,h.JJ,h.u,we.sg,we.O5,h.YN,h.Kr,h.Fj],styles:["form[_ngcontent-%COMP%]{grid-column-gap:1rem;column-gap:1rem;margin:0;white-space:nowrap}form[_ngcontent-%COMP%]   .inputs-container[_ngcontent-%COMP%]{overflow-x:auto}form[_ngcontent-%COMP%]   .inputs-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:.5rem}form[_ngcontent-%COMP%]   .inputs-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid var(--nn-colour-grey-400);border-radius:var(--nn-border-radius-default);padding:calc(var(--nn-space-tiny) / var(--nn-ratio-2)) var(--nn-space-tiny);background:transparent;cursor:pointer}form[_ngcontent-%COMP%]   .inputs-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{min-width:15rem}form[_ngcontent-%COMP%]   .inputs-container[_ngcontent-%COMP%]   input[type=text].ng-invalid.ng-dirty[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .inputs-container[_ngcontent-%COMP%]   input[type=text].ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:var(--nn-colour-red)}"]}),U})()},4466:(He,ue,V)=>{"use strict";V.d(ue,{m:()=>de});var m=V(8583),h=V(1841),ce=V(665),we=V(639);let de=(()=>{class ie{}return ie.\u0275fac=function(he){return new(he||ie)},ie.\u0275mod=we.oAB({type:ie}),ie.\u0275inj=we.cJS({imports:[[m.ez,ce.u5,ce.UX,h.JF],m.ez,ce.u5,ce.UX,h.JF]}),ie})()},2340:(He,ue,V)=>{"use strict";V.d(ue,{N:()=>m});const m={production:!0,apiUrl:"http://localhost:2323/api"}},220:(He,ue,V)=>{"use strict";var m=V(8583),h=V(639);
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
       */class ce extends m.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class we extends ce{static makeCurrent(){(0,m.HT)(new we)}onAndCancel(R,A,L){return R.addEventListener(A,L,!1),()=>{R.removeEventListener(A,L,!1)}}dispatchEvent(R,A){R.dispatchEvent(A)}remove(R){R.parentNode&&R.parentNode.removeChild(R)}createElement(R,A){return(A=A||this.getDefaultDocument()).createElement(R)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(R){return R.nodeType===Node.ELEMENT_NODE}isShadowRoot(R){return R instanceof DocumentFragment}getGlobalEventTarget(R,A){return"window"===A?window:"document"===A?R:"body"===A?R.body:null}getBaseHref(R){const A=(de=de||document.querySelector("base"),de?de.getAttribute("href"):null);return null==A?null:function(x){fe=fe||document.createElement("a"),fe.setAttribute("href",x);const R=fe.pathname;return"/"===R.charAt(0)?R:`/${R}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(A)}resetBaseElement(){de=null}getUserAgent(){return window.navigator.userAgent}getCookie(R){return(0,m.Mx)(document.cookie,R)}}let fe,de=null;const se=new h.OlP("TRANSITION_ID"),W=[{provide:h.ip1,useFactory:function(x,R,A){return()=>{A.get(h.CZH).donePromise.then(()=>{const L=(0,m.q)(),q=R.querySelectorAll(`style[ng-transition="${x}"]`);for(let be=0;be<q.length;be++)L.remove(q[be])})}},deps:[se,m.K0,h.zs3],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class H{static init(){(0,h.VLi)(new H)}addToWindow(R){h.dqk.getAngularTestability=(L,q=!0)=>{const be=R.findTestabilityInTree(L,q);if(null==be)throw new Error("Could not find testability for element.");return be},h.dqk.getAllAngularTestabilities=()=>R.getAllTestabilities(),h.dqk.getAllAngularRootElements=()=>R.getAllRootElements(),h.dqk.frameworkStabilizers||(h.dqk.frameworkStabilizers=[]),h.dqk.frameworkStabilizers.push(L=>{const q=h.dqk.getAllAngularTestabilities();let be=q.length,Te=!1;const _t=function(tn){Te=Te||tn,be--,0==be&&L(Te)};q.forEach(function(tn){tn.whenStable(_t)})})}findTestabilityInTree(R,A,L){if(null==A)return null;const q=R.getTestability(A);return null!=q?q:L?(0,m.q)().isShadowRoot(A)?this.findTestabilityInTree(R,A.host,!0):this.findTestabilityInTree(R,A.parentElement,!0):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Z=(()=>{class x{build(){return new XMLHttpRequest}}return x.\u0275fac=function(A){return new(A||x)},x.\u0275prov=h.Yz7({token:x,factory:x.\u0275fac}),x})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Ke=new h.OlP("EventManagerPlugins");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let ke=(()=>{class x{constructor(A,L){this._zone=L,this._eventNameToPlugin=new Map,A.forEach(q=>q.manager=this),this._plugins=A.slice().reverse()}addEventListener(A,L,q){return this._findPluginFor(L).addEventListener(A,L,q)}addGlobalEventListener(A,L,q){return this._findPluginFor(L).addGlobalEventListener(A,L,q)}getZone(){return this._zone}_findPluginFor(A){const L=this._eventNameToPlugin.get(A);if(L)return L;const q=this._plugins;for(let be=0;be<q.length;be++){const Te=q[be];if(Te.supports(A))return this._eventNameToPlugin.set(A,Te),Te}throw new Error(`No event manager plugin found for event ${A}`)}}return x.\u0275fac=function(A){return new(A||x)(h.LFG(Ke),h.LFG(h.R0b))},x.\u0275prov=h.Yz7({token:x,factory:x.\u0275fac}),x})();class Ie{constructor(R){this._doc=R}addGlobalEventListener(R,A,L){const q=(0,m.q)().getGlobalEventTarget(this._doc,R);if(!q)throw new Error(`Unsupported event target ${q} for event ${A}`);return this.addEventListener(q,A,L)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let me=(()=>{class x{constructor(){this._stylesSet=new Set}addStyles(A){const L=new Set;A.forEach(q=>{this._stylesSet.has(q)||(this._stylesSet.add(q),L.add(q))}),this.onStylesAdded(L)}onStylesAdded(A){}getAllStyles(){return Array.from(this._stylesSet)}}return x.\u0275fac=function(A){return new(A||x)},x.\u0275prov=h.Yz7({token:x,factory:x.\u0275fac}),x})(),Mt=(()=>{class x extends me{constructor(A){super(),this._doc=A,this._hostNodes=new Map,this._hostNodes.set(A.head,[])}_addStylesToHost(A,L,q){A.forEach(be=>{const Te=this._doc.createElement("style");Te.textContent=be,q.push(L.appendChild(Te))})}addHost(A){const L=[];this._addStylesToHost(this._stylesSet,A,L),this._hostNodes.set(A,L)}removeHost(A){const L=this._hostNodes.get(A);L&&L.forEach(Bn),this._hostNodes.delete(A)}onStylesAdded(A){this._hostNodes.forEach((L,q)=>{this._addStylesToHost(A,q,L)})}ngOnDestroy(){this._hostNodes.forEach(A=>A.forEach(Bn))}}return x.\u0275fac=function(A){return new(A||x)(h.LFG(m.K0))},x.\u0275prov=h.Yz7({token:x,factory:x.\u0275fac}),x})();function Bn(x){(0,m.q)().remove(x)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const sr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},nn=/%COMP%/g;function un(x,R,A){for(let L=0;L<R.length;L++){let q=R[L];Array.isArray(q)?un(x,q,A):(q=q.replace(nn,x),A.push(q))}return A}function Gt(x){return R=>{if("__ngUnwrap__"===R)return x;!1===x(R)&&(R.preventDefault(),R.returnValue=!1)}}let Je=(()=>{class x{constructor(A,L,q){this.eventManager=A,this.sharedStylesHost=L,this.appId=q,this.rendererByCompId=new Map,this.defaultRenderer=new Hn(A)}createRenderer(A,L){if(!A||!L)return this.defaultRenderer;switch(L.encapsulation){case h.ifc.Emulated:{let q=this.rendererByCompId.get(L.id);return q||(q=new br(this.eventManager,this.sharedStylesHost,L,this.appId),this.rendererByCompId.set(L.id,q)),q.applyToHost(A),q}case 1:case h.ifc.ShadowDom:return new vt(this.eventManager,this.sharedStylesHost,A,L);default:if(!this.rendererByCompId.has(L.id)){const q=un(L.id,L.styles,[]);this.sharedStylesHost.addStyles(q),this.rendererByCompId.set(L.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return x.\u0275fac=function(A){return new(A||x)(h.LFG(ke),h.LFG(Mt),h.LFG(h.AFp))},x.\u0275prov=h.Yz7({token:x,factory:x.\u0275fac}),x})();class Hn{constructor(R){this.eventManager=R,this.data=Object.create(null)}destroy(){}createElement(R,A){return A?document.createElementNS(sr[A]||A,R):document.createElement(R)}createComment(R){return document.createComment(R)}createText(R){return document.createTextNode(R)}appendChild(R,A){R.appendChild(A)}insertBefore(R,A,L){R&&R.insertBefore(A,L)}removeChild(R,A){R&&R.removeChild(A)}selectRootElement(R,A){let L="string"==typeof R?document.querySelector(R):R;if(!L)throw new Error(`The selector "${R}" did not match any elements`);return A||(L.textContent=""),L}parentNode(R){return R.parentNode}nextSibling(R){return R.nextSibling}setAttribute(R,A,L,q){if(q){A=q+":"+A;const be=sr[q];be?R.setAttributeNS(be,A,L):R.setAttribute(A,L)}else R.setAttribute(A,L)}removeAttribute(R,A,L){if(L){const q=sr[L];q?R.removeAttributeNS(q,A):R.removeAttribute(`${L}:${A}`)}else R.removeAttribute(A)}addClass(R,A){R.classList.add(A)}removeClass(R,A){R.classList.remove(A)}setStyle(R,A,L,q){q&(h.JOm.DashCase|h.JOm.Important)?R.style.setProperty(A,L,q&h.JOm.Important?"important":""):R.style[A]=L}removeStyle(R,A,L){L&h.JOm.DashCase?R.style.removeProperty(A):R.style[A]=""}setProperty(R,A,L){R[A]=L}setValue(R,A){R.nodeValue=A}listen(R,A,L){return"string"==typeof R?this.eventManager.addGlobalEventListener(R,A,Gt(L)):this.eventManager.addEventListener(R,A,Gt(L))}}class br extends Hn{constructor(R,A,L,q){super(R),this.component=L;const be=un(q+"-"+L.id,L.styles,[]);A.addStyles(be),this.contentAttr="_ngcontent-%COMP%".replace(nn,q+"-"+L.id),this.hostAttr="_nghost-%COMP%".replace(nn,q+"-"+L.id)}applyToHost(R){super.setAttribute(R,this.hostAttr,"")}createElement(R,A){const L=super.createElement(R,A);return super.setAttribute(L,this.contentAttr,""),L}}class vt extends Hn{constructor(R,A,L,q){super(R),this.sharedStylesHost=A,this.hostEl=L,this.shadowRoot=L.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const be=un(q.id,q.styles,[]);for(let Te=0;Te<be.length;Te++){const _t=document.createElement("style");_t.textContent=be[Te],this.shadowRoot.appendChild(_t)}}nodeOrShadowRoot(R){return R===this.hostEl?this.shadowRoot:R}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(R,A){return super.appendChild(this.nodeOrShadowRoot(R),A)}insertBefore(R,A,L){return super.insertBefore(this.nodeOrShadowRoot(R),A,L)}removeChild(R,A){return super.removeChild(this.nodeOrShadowRoot(R),A)}parentNode(R){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(R)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let kt=(()=>{class x extends Ie{constructor(A){super(A)}supports(A){return!0}addEventListener(A,L,q){return A.addEventListener(L,q,!1),()=>this.removeEventListener(A,L,q)}removeEventListener(A,L,q){return A.removeEventListener(L,q)}}return x.\u0275fac=function(A){return new(A||x)(h.LFG(m.K0))},x.\u0275prov=h.Yz7({token:x,factory:x.\u0275fac}),x})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const De=["alt","control","meta","shift"],Ee={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},We={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},Qe={alt:x=>x.altKey,control:x=>x.ctrlKey,meta:x=>x.metaKey,shift:x=>x.shiftKey};let Ce=(()=>{class x extends Ie{constructor(A){super(A)}supports(A){return null!=x.parseEventName(A)}addEventListener(A,L,q){const be=x.parseEventName(L),Te=x.eventCallback(be.fullKey,q,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,m.q)().onAndCancel(A,be.domEventName,Te))}static parseEventName(A){const L=A.toLowerCase().split("."),q=L.shift();if(0===L.length||"keydown"!==q&&"keyup"!==q)return null;const be=x._normalizeKey(L.pop());let Te="";if(De.forEach(tn=>{const $r=L.indexOf(tn);$r>-1&&(L.splice($r,1),Te+=tn+".")}),Te+=be,0!=L.length||0===be.length)return null;const _t={};return _t.domEventName=q,_t.fullKey=Te,_t}static getEventFullKey(A){let L="",q=function(x){let R=x.key;if(null==R){if(R=x.keyIdentifier,null==R)return"Unidentified";R.startsWith("U+")&&(R=String.fromCharCode(parseInt(R.substring(2),16)),3===x.location&&We.hasOwnProperty(R)&&(R=We[R]))}return Ee[R]||R}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(A);return q=q.toLowerCase()," "===q?q="space":"."===q&&(q="dot"),De.forEach(be=>{be!=q&&Qe[be](A)&&(L+=be+".")}),L+=q,L}static eventCallback(A,L,q){return be=>{x.getEventFullKey(be)===A&&q.runGuarded(()=>L(be))}}static _normalizeKey(A){switch(A){case"esc":return"escape";default:return A}}}return x.\u0275fac=function(A){return new(A||x)(h.LFG(m.K0))},x.\u0275prov=h.Yz7({token:x,factory:x.\u0275fac}),x})();const Rn=(0,h.eFA)(h._c5,"browser",[{provide:h.Lbi,useValue:m.bD},{provide:h.g9A,useValue:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function(){we.makeCurrent(),H.init()},multi:!0},{provide:m.K0,useFactory:function(){return(0,h.RDi)(document),document},deps:[]}]),Ro=[[],{provide:h.zSh,useValue:"root"},{provide:h.qLn,useFactory:function(){return new h.qLn},deps:[]},{provide:Ke,useClass:kt,multi:!0,deps:[m.K0,h.R0b,h.Lbi]},{provide:Ke,useClass:Ce,multi:!0,deps:[m.K0]},[],{provide:Je,useClass:Je,deps:[ke,Mt,h.AFp]},{provide:h.FYo,useExisting:Je},{provide:me,useExisting:Mt},{provide:Mt,useClass:Mt,deps:[m.K0]},{provide:h.dDg,useClass:h.dDg,deps:[h.R0b]},{provide:ke,useClass:ke,deps:[Ke,h.R0b]},{provide:m.JF,useClass:Z,deps:[]},[]];let cn=(()=>{class x{constructor(A){if(A)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(A){return{ngModule:x,providers:[{provide:h.AFp,useValue:A.appId},{provide:se,useExisting:h.AFp},W]}}}return x.\u0275fac=function(A){return new(A||x)(h.LFG(x,12))},x.\u0275mod=h.oAB({type:x}),x.\u0275inj=h.cJS({providers:Ro,imports:[m.ez,h.hGG]}),x})();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */"undefined"!=typeof window&&window;
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
var Ft=V(2340),Yt=V(5855),It=V(8239),Cn=V(7544),mt=V(1841),er=V(6227);function vn(x,R){1&x&&(h.TgZ(0,"p",14),h._uU(1,"\u8aad\u8fbc\u4e2d\u2026"),h.qZA())}function Ne(x,R){1&x&&(h.TgZ(0,"p",14),h._uU(1,"\u691c\u7d22\u4e2d\u2026"),h.qZA())}function je(x,R){1&x&&(h.TgZ(0,"p",15),h._uU(1,"Films"),h.qZA())}function en(x,R){if(1&x&&(h.TgZ(0,"p",16),h._uU(1),h.qZA()),2&x){const A=h.oxw();h.xp6(1),h.Oqu(A.errorMessage)}}function jr(x,R){if(1&x&&(h.TgZ(0,"span",26),h._UZ(1,"br"),h._uU(2),h.qZA()),2&x){const A=h.oxw().$implicit;h.xp6(2),h.Oqu(A.japaneseTitle)}}function qt(x,R){if(1&x&&(h.ynx(0),h._uU(1),h.BQk()),2&x){const A=h.oxw().$implicit;h.xp6(1),h.Oqu(A.scenario)}}function Qt(x,R){1&x&&h._uU(0,"-")}function fn(x,R){if(1&x&&(h.ynx(0),h._uU(1),h.BQk()),2&x){const A=h.oxw().$implicit;h.xp6(1),h.Oqu(A.review)}}function In(x,R){1&x&&h._uU(0,"-")}function Ht(x,R){1&x&&(h.ynx(0),h._uU(1,"\u3001"),h.BQk())}function ot(x,R){if(1&x&&(h.ynx(0),h._uU(1),h.TgZ(2,"span",27),h._uU(3),h.qZA(),h.YNc(4,Ht,2,0,"ng-container",28),h.BQk()),2&x){const A=R.$implicit,L=R.index,q=R.count;h.xp6(1),h.hij("",A.name," "),h.xp6(2),h.hij("(",A.role,")"),h.xp6(1),h.Q6J("ngIf",L!==q-1)}}function Nn(x,R){if(1&x&&(h.ynx(0),h.YNc(1,ot,5,3,"ng-container",17),h.BQk()),2&x){const A=h.oxw().$implicit;h.xp6(1),h.Q6J("ngForOf",A.casts)}}function uo(x,R){1&x&&h._uU(0,"-")}function Pn(x,R){1&x&&(h.ynx(0),h._uU(1,"\u3001"),h.BQk())}function fr(x,R){if(1&x&&(h.ynx(0),h._uU(1),h.TgZ(2,"span",27),h._uU(3),h.qZA(),h.YNc(4,Pn,2,0,"ng-container",28),h.BQk()),2&x){const A=R.$implicit,L=R.index,q=R.count;h.xp6(1),h.hij("",A.name," "),h.xp6(2),h.hij("(",A.role,")"),h.xp6(1),h.Q6J("ngIf",L!==q-1)}}function zn(x,R){if(1&x&&(h.ynx(0),h.YNc(1,fr,5,3,"ng-container",17),h.BQk()),2&x){const A=h.oxw().$implicit;h.xp6(1),h.Q6J("ngForOf",A.staffs)}}function Fn(x,R){1&x&&h._uU(0,"-")}function Yn(x,R){1&x&&(h.ynx(0),h._uU(1,"\u3001"),h.BQk())}function tt(x,R){if(1&x&&(h.ynx(0),h._uU(1),h.YNc(2,Yn,2,0,"ng-container",28),h.BQk()),2&x){const A=R.$implicit,L=R.index,q=R.count;h.xp6(1),h.Oqu(A.name),h.xp6(1),h.Q6J("ngIf",L!==q-1)}}function co(x,R){if(1&x&&(h.ynx(0),h.YNc(1,tt,3,2,"ng-container",17),h.BQk()),2&x){const A=h.oxw().$implicit;h.xp6(1),h.Q6J("ngForOf",A.tags)}}function Dn(x,R){1&x&&h._uU(0,"-")}function sn(x,R){if(1&x&&(h.TgZ(0,"tr"),h.TgZ(1,"td",5),h._uU(2),h.qZA(),h.TgZ(3,"td",6),h.TgZ(4,"div",18),h.TgZ(5,"span",19),h._uU(6),h.qZA(),h.YNc(7,jr,3,1,"span",20),h.qZA(),h.qZA(),h.TgZ(8,"td",7),h.TgZ(9,"div",18),h.YNc(10,qt,2,1,"ng-container",12),h.YNc(11,Qt,1,0,"ng-template",null,21,h.W1O),h.qZA(),h.qZA(),h.TgZ(13,"td",8),h.TgZ(14,"div",18),h.YNc(15,fn,2,1,"ng-container",12),h.YNc(16,In,1,0,"ng-template",null,22,h.W1O),h.qZA(),h.qZA(),h.TgZ(18,"td",9),h.TgZ(19,"div",18),h.YNc(20,Nn,2,1,"ng-container",12),h.YNc(21,uo,1,0,"ng-template",null,23,h.W1O),h.qZA(),h.qZA(),h.TgZ(23,"td",10),h.TgZ(24,"div",18),h.YNc(25,zn,2,1,"ng-container",12),h.YNc(26,Fn,1,0,"ng-template",null,24,h.W1O),h.qZA(),h.qZA(),h.TgZ(28,"td",11),h.TgZ(29,"div",18),h.YNc(30,co,2,1,"ng-container",12),h.YNc(31,Dn,1,0,"ng-template",null,25,h.W1O),h.qZA(),h.qZA(),h.qZA()),2&x){const A=R.$implicit,L=h.MAs(12),q=h.MAs(17),be=h.MAs(22),Te=h.MAs(27),_t=h.MAs(32);h.xp6(2),h.Oqu(A.publishedYear),h.xp6(4),h.Oqu(A.title),h.xp6(1),h.Q6J("ngIf",A.japaneseTitle),h.xp6(3),h.Q6J("ngIf",A.scenario)("ngIfElse",L),h.xp6(5),h.Q6J("ngIf",A.review)("ngIfElse",q),h.xp6(5),h.Q6J("ngIf",A.casts.length)("ngIfElse",be),h.xp6(5),h.Q6J("ngIf",A.staffs.length)("ngIfElse",Te),h.xp6(5),h.Q6J("ngIf",A.tags.length)("ngIfElse",_t)}}function tr(x,R){if(1&x&&(h.ynx(0),h.YNc(1,sn,33,13,"tr",17),h.BQk()),2&x){const A=h.oxw();h.xp6(1),h.Q6J("ngForOf",A.films)}}function Br(x,R){1&x&&(h.ynx(0),h._uU(1,"1\u4ef6\u3082\u6620\u753b\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u305b\u3093"),h.BQk())}function nr(x,R){1&x&&(h.ynx(0),h._uU(1,"\u6761\u4ef6\u306b\u5408\u81f4\u3059\u308b\u6620\u753b\u306f\u3042\u308a\u307e\u305b\u3093"),h.BQk())}function an(x,R){if(1&x&&(h.TgZ(0,"tr"),h.TgZ(1,"td",29),h.YNc(2,Br,2,0,"ng-container",28),h.YNc(3,nr,2,0,"ng-container",28),h.qZA(),h.qZA()),2&x){const A=h.oxw();h.xp6(2),h.Q6J("ngIf","loading"===A.currentState||"loaded"===A.currentState),h.xp6(1),h.Q6J("ngIf","searching"===A.currentState||"searched"===A.currentState)}}const En=[{path:"",component:(()=>{class x{constructor(A){this.httpClient=A,this.films=[],this.currentState="loading",this.errorMessage="",this.allFilms=[]}ngOnInit(){var A=this;return(0,It.Z)(function*(){yield A.loadJson(),yield A.onSearch()})()}onSearch(A){this.currentState=A?"searching":"loading",this.errorMessage="";try{this.films=A?this.find(A.targetColumn,A.searchText):this.allFilms}catch(L){console.error("Films Component : On Search",L),this.errorMessage="Failed To Search Films"}finally{this.currentState=A?"searched":"loaded"}}isDisabled(){return["loading","searching"].includes(this.currentState)}loadJson(){var A=this;return(0,It.Z)(function*(){try{A.allFilms=yield A.httpClient.get("/assets/filmdex.json").toPromise(),console.log("Films Component : Load JSON",A.allFilms)}catch(L){console.error("Films Component : Load JSON",L),A.errorMessage="Failed To Load JSON"}})()}find(A,L){if(A===Cn.q.publishedYear.key){const q=Number(L);return this.allFilms.filter(be=>be.publishedYear===q)}if(A===Cn.q.publishedAge.key){const q=Number(L),be=q+9;return this.allFilms.filter(Te=>Te.publishedYear>=q&&Te.publishedYear<=be)}if(A===Cn.q.title.key){const q=L.toLowerCase();return this.allFilms.filter(be=>be.title.toLowerCase().includes(q)||be.japaneseTitle.toLowerCase().includes(q))}if(A===Cn.q.cast.key){const q=L.toLowerCase();return this.allFilms.filter(be=>be.casts.some(Te=>Te.name.toLowerCase().includes(q)||Te.role.toLowerCase().includes(q)))}if(A===Cn.q.staff.key){const q=L.toLowerCase();return this.allFilms.filter(be=>be.staffs.some(Te=>Te.name.toLowerCase().includes(q)||Te.role.toLowerCase().includes(q)))}if(A===Cn.q.tag.key){const q=L.toLowerCase();return this.allFilms.filter(be=>be.tags.some(Te=>Te.name.toLowerCase().includes(q)))}return console.warn("Films Component : Find : Unknown Target Column, Returns All Films",{targetColumn:A,searchText:L}),this.allFilms}}return x.\u0275fac=function(A){return new(A||x)(h.Y36(mt.eN))},x.\u0275cmp=h.Xpm({type:x,selectors:[["app-films"]],decls:27,vars:8,consts:[[3,"hidden","isDisabled","onSubmit"],["class","text-info",4,"ngIf"],["class","text-bold",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"table-wrapper"],[1,"column-published-year"],[1,"column-title"],[1,"column-scenario"],[1,"column-review"],[1,"column-casts"],[1,"column-staffs"],[1,"column-tags"],[4,"ngIf","ngIfElse"],["notFound",""],[1,"text-info"],[1,"text-bold"],[1,"text-danger"],[4,"ngFor","ngForOf"],[1,"overflow"],[1,"film-title"],["class","japanese-title",4,"ngIf"],["noScenario",""],["noReview",""],["noCasts",""],["noStaffs",""],["noTags",""],[1,"japanese-title"],[1,"role"],[4,"ngIf"],["colspan","6",1,"text-warning","not-found"]],template:function(A,L){if(1&A&&(h.TgZ(0,"app-search-form",0),h.NdJ("onSubmit",function(be){return L.onSearch(be)}),h.qZA(),h.YNc(1,vn,2,0,"p",1),h.YNc(2,Ne,2,0,"p",1),h.YNc(3,je,2,0,"p",2),h.YNc(4,en,2,1,"p",3),h.TgZ(5,"div",4),h.TgZ(6,"table"),h.TgZ(7,"thead"),h.TgZ(8,"tr"),h.TgZ(9,"th",5),h._uU(10,"\u516c\u958b\u5e74"),h.qZA(),h.TgZ(11,"th",6),h._uU(12,"\u539f\u984c\u30fb\u90a6\u984c"),h.qZA(),h.TgZ(13,"th",7),h._uU(14,"\u3042\u3089\u3059\u3058"),h.qZA(),h.TgZ(15,"th",8),h._uU(16,"\u611f\u60f3"),h.qZA(),h.TgZ(17,"th",9),h._uU(18,"\u30ad\u30e3\u30b9\u30c8"),h.qZA(),h.TgZ(19,"th",10),h._uU(20,"\u30b9\u30bf\u30c3\u30d5"),h.qZA(),h.TgZ(21,"th",11),h._uU(22,"\u30bf\u30b0"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(23,"tbody"),h.YNc(24,tr,2,1,"ng-container",12),h.YNc(25,an,4,2,"ng-template",null,13,h.W1O),h.qZA(),h.qZA(),h.qZA()),2&A){const q=h.MAs(26);h.Q6J("hidden","modal"===L.currentState)("isDisabled",L.isDisabled()),h.xp6(1),h.Q6J("ngIf","loading"===L.currentState),h.xp6(1),h.Q6J("ngIf","searching"===L.currentState),h.xp6(1),h.Q6J("ngIf",""===L.currentState||"loaded"===L.currentState||"searched"===L.currentState),h.xp6(1),h.Q6J("ngIf",L.errorMessage),h.xp6(20),h.Q6J("ngIf",L.films.length>0)("ngIfElse",q)}},directives:[er.o,m.O5,m.sg],styles:["p[_ngcontent-%COMP%]{margin-top:1rem}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{white-space:nowrap}table[_ngcontent-%COMP%]   .column-published-year[_ngcontent-%COMP%]{min-width:4rem;width:1%;max-width:4rem;text-align:center;white-space:nowrap}table[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]{min-width:15rem;width:15%}table[_ngcontent-%COMP%]   .column-scenario[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .column-review[_ngcontent-%COMP%]{min-width:20rem;width:25%}table[_ngcontent-%COMP%]   .column-casts[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .column-staffs[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .column-tags[_ngcontent-%COMP%]{min-width:10rem;width:10%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{--line-height: 1.2;padding:.2rem .25rem;font-size:.8rem;line-height:var(--line-height);word-break:break-all}table[_ngcontent-%COMP%]   td.column-published-year[_ngcontent-%COMP%]{font-size:.95rem}table[_ngcontent-%COMP%]   td.column-title[_ngcontent-%COMP%]{line-height:1.3}table[_ngcontent-%COMP%]   td.column-title[_ngcontent-%COMP%]   .film-title[_ngcontent-%COMP%]{font-size:.95rem}table[_ngcontent-%COMP%]   td.column-title[_ngcontent-%COMP%]   .japanese-title[_ngcontent-%COMP%]{color:var(--nn-colour-grey-700);font-size:.85rem}table[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]{color:var(--nn-colour-grey-600)}table[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%]{padding:1rem .5rem;text-align:center}.overflow[_ngcontent-%COMP%]{max-height:calc(1em * 5 * var(--line-height));overflow-y:auto}"]}),x})(),pathMatch:"full"},{path:"**",redirectTo:"/"}];Ft.N.production||(console.log("FilmDex : Development Mode : Load AdminModule"),En.unshift({path:"admin",loadChildren:()=>V.e(266).then(V.bind(V,5266)).then(x=>x.AdminModule)}));let Tr=(()=>{class x{}return x.\u0275fac=function(A){return new(A||x)},x.\u0275mod=h.oAB({type:x}),x.\u0275inj=h.cJS({imports:[[Yt.Bz.forRoot(En)],Yt.Bz]}),x})();const Po=function(x){return[x]};let Sr=(()=>{class x{constructor(A){this.router=A,this.destPath="/"}ngOnInit(){this.router.config.find(A=>"admin"===A.path)&&(console.log("App Component : Admin Router Detected"),this.router.events.subscribe(A=>{A instanceof Yt.m2&&(this.destPath=A.urlAfterRedirects.includes("/admin")?"/":"/admin")}))}}return x.\u0275fac=function(A){return new(A||x)(h.Y36(Yt.F0))},x.\u0275cmp=h.Xpm({type:x,selectors:[["app-root"]],decls:9,vars:3,consts:[[1,"grid-2-columns","header"],["tabindex","-1",3,"routerLink"],["href","https://neos21.net/","target","_blank","tabindex","-1"],[1,"main"]],template:function(A,L){1&A&&(h.TgZ(0,"header",0),h.TgZ(1,"h1"),h.TgZ(2,"a",1),h._uU(3,"FilmDeX"),h.qZA(),h.qZA(),h.TgZ(4,"div"),h.TgZ(5,"a",2),h._uU(6,"Neo's World"),h.qZA(),h.qZA(),h.qZA(),h.TgZ(7,"main",3),h._UZ(8,"router-outlet"),h.qZA()),2&A&&(h.xp6(2),h.Q6J("routerLink",h.VKq(1,Po,L.destPath)))},directives:[Yt.yS,Yt.lC],styles:[".header[_ngcontent-%COMP%]{align-items:center;margin:0;padding:1rem;line-height:1;white-space:nowrap;background:var(--nn-colour-blue)}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0}.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:.9rem}.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--nn-colour-white);text-decoration:none}.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.main[_ngcontent-%COMP%]{margin:1rem}"]}),x})();var Hr=V(4466);let hr=(()=>{class x{}return x.\u0275fac=function(A){return new(A||x)},x.\u0275mod=h.oAB({type:x}),x.\u0275inj=h.cJS({imports:[[Hr.m]]}),x})(),ho=(()=>{class x{}return x.\u0275fac=function(A){return new(A||x)},x.\u0275mod=h.oAB({type:x,bootstrap:[Sr]}),x.\u0275inj=h.cJS({imports:[[cn,Tr,Hr.m,hr]]}),x})();Ft.N.production&&(console.log("FilmDeX Client"),(0,h.G48)()),Rn().bootstrapModule(ho).catch(x=>console.error(x))},7544:(He,ue,V)=>{"use strict";V.d(ue,{q:()=>m});const m={publishedYear:{key:"published_year",name:"\u516c\u958b\u5e74"},publishedAge:{key:"published_age",name:"\u516c\u958b\u5e74\u4ee3"},title:{key:"title",name:"\u30bf\u30a4\u30c8\u30eb"},cast:{key:"cast",name:"\u30ad\u30e3\u30b9\u30c8"},staff:{key:"staff",name:"\u30b9\u30bf\u30c3\u30d5"},tag:{key:"tag",name:"\u30bf\u30b0"}}},8239:(He,ue,V)=>{"use strict";function m(ce,we,de,ie,fe,he,se){try{var U=ce[he](se),W=U.value}catch(H){return void de(H)}U.done?we(W):Promise.resolve(W).then(ie,fe)}function h(ce){return function(){var we=this,de=arguments;return new Promise(function(ie,fe){var he=ce.apply(we,de);function se(W){m(he,ie,fe,se,U,"next",W)}function U(W){m(he,ie,fe,se,U,"throw",W)}se(void 0)})}}V.d(ue,{Z:()=>h})}},He=>{He(He.s=220)}]);
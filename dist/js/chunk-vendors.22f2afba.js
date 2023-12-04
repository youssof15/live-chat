"use strict";(self["webpackChunklive_chat"]=self["webpackChunklive_chat"]||[]).push([[998],{223:function(e,t,n){n.d(t,{BH:function(){return w},G6:function(){return A},L:function(){return c},LL:function(){return O},Pz:function(){return v},Sg:function(){return _},UG:function(){return E},ZB:function(){return l},ZR:function(){return D},aH:function(){return y},b$:function(){return k},eu:function(){return N},hl:function(){return x},jU:function(){return T},m9:function(){return W},ne:function(){return z},pd:function(){return q},r3:function(){return M},ru:function(){return S},tV:function(){return u},uI:function(){return I},vZ:function(){return U},w1:function(){return C},xO:function(){return j},xb:function(){return F},z$:function(){return b},zd:function(){return B}});n(3429),n(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>d().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return f()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},y=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function I(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function E(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){return"object"===typeof self&&self.self===self}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function k(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A(){return!E()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function N(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=R,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function P(e,t){return e.replace(L,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(V(n)&&V(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function V(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){const n=new $(e,t);return n.subscribe.bind(n)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=G(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=K),void 0===r.error&&(r.error=K),void 0===r.complete&&(r.complete=K);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function G(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){n.d(t,{Bj:function(){return s},Fl:function(){return Ue},IU:function(){return Ee},Jd:function(){return T},PG:function(){return we},SU:function(){return Pe},Um:function(){return ge},WL:function(){return Me},X$:function(){return A},X3:function(){return Ie},XI:function(){return Re},Xl:function(){return Te},dq:function(){return xe},iH:function(){return Ne},j:function(){return k},lk:function(){return S},nZ:function(){return a},qj:function(){return me},qq:function(){return _},yT:function(){return be}});n(560);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}function a(){return i}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30;let y;const v=Symbol(""),w=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=y,t=I;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,I=!0,m=1<<++p,p<=g?h(this):b(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,y=this.parent,I=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const E=[];function T(){E.push(I),I=!1}function S(){const e=E.pop();I=void 0===e||e}function k(e,t,n){if(I&&y){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const i=void 0;C(r,i)}}function C(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function A(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.yk)(n)&&n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(v)),(0,r._N)(e)&&u.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(u.push(a.get(v)),(0,r._N)(e)&&u.push(a.get(w)));break;case"set":(0,r._N)(e)&&u.push(a.get(v));break}if(1===u.length)u[0]&&x(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);x(c(e))}}function x(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&N(r,t);for(const r of n)r.computed||N(r,t)}function N(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),O=P();function P(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ee(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ee)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){T();const n=Ee(this)[t].apply(this,e);return S(),n}})),e}function L(e){const t=Ee(this);return k(t,"has",e),t.hasOwnProperty(e)}class M{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const i=this._isReadonly,s=this._shallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t&&n===(i?s?de:he:s?le:ue).get(e))return e;const o=(0,r.kJ)(e);if(!i){if(o&&(0,r.RI)(O,t))return Reflect.get(O,t,n);if("hasOwnProperty"===t)return L}const a=Reflect.get(e,t,n);return((0,r.yk)(t)?D.has(t):R(t))?a:(i||k(e,"get",t),s?a:xe(a)?o&&(0,r.S0)(t)?a:a.value:(0,r.Kn)(a)?i?ye(a):me(a):a)}}class F extends M{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(_e(s)&&xe(s)&&!xe(n))return!1;if(!this._shallow&&(be(n)||_e(n)||(s=Ee(s),n=Ee(n)),!(0,r.kJ)(e)&&xe(s)&&!xe(n)))return s.value=n,!0;const o=(0,r.kJ)(e)&&(0,r.S0)(t)?Number(t)<e.length:(0,r.RI)(e,t),a=Reflect.set(e,t,n,i);return e===Ee(i)&&(o?(0,r.aU)(n,s)&&A(e,"set",t,n,s):A(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&D.has(t)||k(e,"has",t),n}ownKeys(e){return k(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}}class U extends M{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const V=new F,j=new U,B=new F(!0),q=e=>e,z=e=>Reflect.getPrototypeOf(e);function $(e,t,n=!1,i=!1){e=e["__v_raw"];const s=Ee(e),o=Ee(t);n||((0,r.aU)(t,o)&&k(s,"get",t),k(s,"get",o));const{has:a}=z(s),c=i?q:n?ke:Se;return a.call(s,t)?c(e.get(t)):a.call(s,o)?c(e.get(o)):void(e!==s&&e.get(t))}function G(e,t=!1){const n=this["__v_raw"],i=Ee(n),s=Ee(e);return t||((0,r.aU)(e,s)&&k(i,"has",e),k(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function K(e,t=!1){return e=e["__v_raw"],!t&&k(Ee(e),"iterate",v),Reflect.get(e,"size",e)}function W(e){e=Ee(e);const t=Ee(this),n=z(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function H(e,t){t=Ee(t);const n=Ee(this),{has:i,get:s}=z(n);let o=i.call(n,e);o||(e=Ee(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function Q(e){const t=Ee(this),{has:n,get:r}=z(t);let i=n.call(t,e);i||(e=Ee(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function Y(){const e=Ee(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function J(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ee(s),a=t?q:e?ke:Se;return!e&&k(o,"iterate",v),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function X(e,t,n){return function(...i){const s=this["__v_raw"],o=Ee(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?q:t?ke:Se;return!t&&k(o,"iterate",u?w:v),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function Z(e){return function(...t){return"delete"!==e&&this}}function ee(){const e={get(e){return $(this,e)},get size(){return K(this)},has:G,add:W,set:H,delete:Q,clear:Y,forEach:J(!1,!1)},t={get(e){return $(this,e,!1,!0)},get size(){return K(this)},has:G,add:W,set:H,delete:Q,clear:Y,forEach:J(!1,!0)},n={get(e){return $(this,e,!0)},get size(){return K(this,!0)},has(e){return G.call(this,e,!0)},add:Z("add"),set:Z("set"),delete:Z("delete"),clear:Z("clear"),forEach:J(!0,!1)},r={get(e){return $(this,e,!0,!0)},get size(){return K(this,!0)},has(e){return G.call(this,e,!0)},add:Z("add"),set:Z("set"),delete:Z("delete"),clear:Z("clear"),forEach:J(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=X(i,!1,!1),n[i]=X(i,!0,!1),t[i]=X(i,!1,!0),r[i]=X(i,!0,!0)})),[e,n,t,r]}const[te,ne,re,ie]=ee();function se(e,t){const n=t?e?ie:re:e?ne:te;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const oe={get:se(!1,!1)},ae={get:se(!1,!0)},ce={get:se(!0,!1)};const ue=new WeakMap,le=new WeakMap,he=new WeakMap,de=new WeakMap;function fe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:fe((0,r.W7)(e))}function me(e){return _e(e)?e:ve(e,!1,V,oe,ue)}function ge(e){return ve(e,!1,B,ae,le)}function ye(e){return ve(e,!0,j,ce,he)}function ve(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=pe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function we(e){return _e(e)?we(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function _e(e){return!(!e||!e["__v_isReadonly"])}function be(e){return!(!e||!e["__v_isShallow"])}function Ie(e){return we(e)||_e(e)}function Ee(e){const t=e&&e["__v_raw"];return t?Ee(t):e}function Te(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Se=e=>(0,r.Kn)(e)?me(e):e,ke=e=>(0,r.Kn)(e)?ye(e):e;function Ce(e){I&&y&&(e=Ee(e),C(e.dep||(e.dep=c())))}function Ae(e,t){e=Ee(e);const n=e.dep;n&&x(n)}function xe(e){return!(!e||!0!==e.__v_isRef)}function Ne(e){return De(e,!1)}function Re(e){return De(e,!0)}function De(e,t){return xe(e)?e:new Oe(e,t)}class Oe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ee(e),this._value=t?e:Se(e)}get value(){return Ce(this),this._value}set value(e){const t=this.__v_isShallow||be(e)||_e(e);e=t?e:Ee(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Se(e),Ae(this,e))}}function Pe(e){return xe(e)?e.value:e}const Le={get:(e,t,n)=>Pe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Me(e){return we(e)?e:new Proxy(e,Le)}class Fe{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Ae(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ee(this);return Ce(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ue(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Fe(i,s,o||!s,n);return a}},3396:function(e,t,n){n.d(t,{$d:function(){return o},FN:function(){return vn},Fl:function(){return Fn},HY:function(){return Ft},JJ:function(){return ut},Ko:function(){return Ue},P$:function(){return ue},Q6:function(){return me},U2:function(){return he},Uk:function(){return an},Us:function(){return Nt},Wm:function(){return nn},Y3:function(){return v},Y8:function(){return se},YP:function(){return Y},_:function(){return tn},aZ:function(){return ge},bv:function(){return xe},f3:function(){return lt},h:function(){return Un},iD:function(){return Ht},ic:function(){return Re},kq:function(){return cn},nJ:function(){return ae},nK:function(){return pe},up:function(){return z},w5:function(){return L},wg:function(){return zt},wy:function(){return te}});n(560);var r=n(4870),i=n(7139);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(e){const t=y||g;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],s=k(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function _(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),b())}function b(){u||l||(l=!0,y=g.then(A))}function I(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),b()}function T(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function S(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const k=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){l=!1,u=!0,h.sort(C);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,S(e),u=!1,y=null,(h.length||f.length)&&A(e)}}function x(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function N(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=N(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function R(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let D=null,O=null;function P(e){const t=D;return D=e,O=e&&e.type.__scopeId||null,t}function L(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Kt(-1);const i=P(t);let s;try{s=e(...n)}finally{P(i),r._d&&Kt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function M(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const _=P(e);try{if(4&n.shapeFlag){const e=s||r;v=un(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,v=un(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:F(l)}}catch(I){Bt.length=0,a(I,e,1),v=nn(Vt)}let b=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(i.tR)&&(w=U(w,c)),b=on(b,w))}return n.dirs&&(b=on(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,P(_),v}const F=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},U=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function V(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||j(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?j(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!R(u,n))return!0}}return!1}function j(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!R(n,s))return!0}return!1}function B({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const q="components";function z(e,t){return G(q,e,!0,t)||e}const $=Symbol.for("v-ndc");function G(e,t,n=!0,r=!1){const s=D||yn;if(s){const n=s.type;if(e===q){const e=Ln(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=K(s[e]||n[e],t)||K(s.appContext[e],t);return!o&&r?n:o}}function K(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const W=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}const Q={};function Y(e,t,n){return J(e,t,n)}function J(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){var h;const d=(0,r.nZ)()===(null==(h=yn)?void 0:h.scope)?yn:null;let f,p,m=!1,g=!1;if((0,r.dq)(e)?(f=()=>e.value,m=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,a=!0):(0,i.kJ)(e)?(g=!0,m=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ee(e):(0,i.mf)(e)?s(e,d,2):void 0))):f=(0,i.mf)(e)?t?()=>s(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),o(e,d,3,[v])}:i.dG,t&&a){const e=f;f=()=>ee(e())}let y,v=e=>{p=E.onStop=()=>{s(e,d,4)}};if(Cn){if(v=i.dG,t?n&&o(t,d,3,[f(),g?[]:void 0,v]):f(),"sync"!==c)return i.dG;{const e=jn();y=e.__watcherHandles||(e.__watcherHandles=[])}}let w=g?new Array(e.length).fill(Q):Q;const b=()=>{if(E.active)if(t){const e=E.run();(a||m||(g?e.some(((e,t)=>(0,i.aU)(e,w[t]))):(0,i.aU)(e,w)))&&(p&&p(),o(t,d,3,[e,w===Q?void 0:g&&w[0]===Q?[]:w,v]),w=e)}else E.run()};let I;b.allowRecurse=!!t,"sync"===c?I=b:"post"===c?I=()=>xt(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),I=()=>_(b));const E=new r.qq(f,I);t?n?b():w=E.run():"post"===c?xt(E.run.bind(E),d&&d.suspense):E.run();const T=()=>{E.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,E)};return y&&y.push(T),T}function X(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?Z(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=yn;In(this);const c=J(s,o.bind(r),n);return a?In(a):En(),c}function Z(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ee(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ee(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ee(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ee(e,t)}));else if((0,i.PO)(e))for(const n in e)ee(e[n],t);return e}function te(e,t){const n=D;if(null===n)return e;const r=Pn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ee(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function ne(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const re=Symbol("_leaveCb"),ie=Symbol("_enterCb");function se(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xe((()=>{e.isMounted=!0})),De((()=>{e.isUnmounting=!0})),e}const oe=[Function,Array],ae={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:oe,onEnter:oe,onAfterEnter:oe,onEnterCancelled:oe,onBeforeLeave:oe,onLeave:oe,onAfterLeave:oe,onLeaveCancelled:oe,onBeforeAppear:oe,onAppear:oe,onAfterAppear:oe,onAppearCancelled:oe},ce={name:"BaseTransition",props:ae,setup(e,{slots:t}){const n=vn(),i=se();let s;return()=>{const o=t.default&&me(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Vt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return de(a);const l=fe(a);if(!l)return de(a);const h=he(l,c,i,n);pe(l,h);const d=n.subTree,f=d&&fe(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Vt&&(!Jt(l,f)||p)){const e=he(f,c,i,n);if(pe(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},de(a);"in-out"===u&&l.type!==Vt&&(e.delayLeave=(e,t,n)=>{const r=le(i,f);r[String(f.key)]=f,e[re]=()=>{t(),e[re]=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ue=ce;function le(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function he(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:_}=t,b=String(e.key),I=le(n,e),E=(e,t)=>{e&&o(e,r,9,t)},T=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=y||u}t[re]&&t[re](!0);const i=I[b];i&&Jt(e,i)&&i.el[re]&&i.el[re](),E(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=v||l,r=w||h,i=_||d}let o=!1;const a=e[ie]=t=>{o||(o=!0,E(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e[ie]=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[ie]&&t[ie](!0),n.isUnmounting)return r();E(f,[t]);let s=!1;const o=t[re]=n=>{s||(s=!0,r(),E(n?g:m,[t]),t[re]=void 0,I[i]===e&&delete I[i])};I[i]=e,p?T(p,[t,o]):o()},clone(e){return he(e,t,n,r)}};return S}function de(e){if(ve(e))return e=on(e),e.children=null,e}function fe(e){return ve(e)?e.children?e.children[0]:void 0:e}function pe(e,t){6&e.shapeFlag&&e.component?pe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function me(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ft?(128&o.patchFlag&&i++,r=r.concat(me(o.children,t,a))):(t||o.type!==Vt)&&r.push(null!=a?on(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function ge(e,t){return(0,i.mf)(e)?(()=>(0,i.l7)({name:e.name},t,{setup:e}))():e}const ye=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const ve=e=>e.type.__isKeepAlive;RegExp,RegExp;function we(e,t){return(0,i.kJ)(e)?e.some((e=>we(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function _e(e,t){Ie(e,"a",t)}function be(e,t){Ie(e,"da",t)}function Ie(e,t,n=yn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ke(t,r,n),n){let e=n.parent;while(e&&e.parent)ve(e.parent.vnode)&&Ee(r,t,n,e),e=e.parent}}function Ee(e,t,n,r){const s=ke(t,e,r,!0);Oe((()=>{(0,i.Od)(r[t],s)}),n)}function Te(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Se(e){return 128&e.shapeFlag?e.ssContent:e}function ke(e,t,n=yn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),In(n);const s=o(t,n,e,i);return En(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ce=e=>(t,n=yn)=>(!Cn||"sp"===e)&&ke(e,((...e)=>t(...e)),n),Ae=Ce("bm"),xe=Ce("m"),Ne=Ce("bu"),Re=Ce("u"),De=Ce("bum"),Oe=Ce("um"),Pe=Ce("sp"),Le=Ce("rtg"),Me=Ce("rtc");function Fe(e,t=yn){ke("ec",e,t)}function Ue(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Ve=e=>e?Tn(e)?Pn(e)||e.proxy:Ve(e.parent):null,je=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ve(e.parent),$root:e=>Ve(e.root),$emit:e=>e.emit,$options:e=>Qe(e),$forceUpdate:e=>e.f||(e.f=()=>_(e.update)),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>X.bind(e)}),Be=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),qe={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Be(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];$e&&(c[t]=0)}}const d=je[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Be(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Be(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(je,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ze(e){return(0,i.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let $e=!0;function Ge(e){const t=Qe(e),n=e.proxy,s=e.ctx;$e=!1,t.beforeCreate&&We(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:I,render:E,renderTracked:T,renderTriggered:S,errorCaptured:k,serverPrefetch:C,expose:A,inheritAttrs:x,components:N,directives:R,filters:D}=t,O=null;if(h&&Ke(h,s,O),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if($e=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Fn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)He(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{ut(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&We(d,e,"c"),P(Ae,f),P(xe,p),P(Ne,m),P(Re,g),P(_e,y),P(be,v),P(Fe,k),P(Me,T),P(Le,S),P(De,_),P(Oe,I),P(Pe,C),(0,i.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=x&&(e.inheritAttrs=x),N&&(e.components=N),R&&(e.directives=R)}function Ke(e,t,n=i.dG){(0,i.kJ)(e)&&(e=et(e));for(const s in e){const n=e[s];let o;o=(0,i.Kn)(n)?"default"in n?lt(n.from||s,n.default,!0):lt(n.from||s):lt(n),(0,r.dq)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function We(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function He(e,t,n,r){const s=r.includes(".")?Z(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Y(s,n)}else if((0,i.mf)(e))Y(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>He(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Y(s,r,e)}else 0}function Qe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>Ye(u,e,a,!0))),Ye(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function Ye(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Ye(e,s,n,!0),i&&i.forEach((t=>Ye(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Je[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Je={data:Xe,props:rt,emits:rt,methods:nt,computed:nt,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:nt,directives:nt,watch:it,provide:Xe,inject:Ze};function Xe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ze(e,t){return nt(et(e),et(t))}function et(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?(0,i.l7)(Object.create(null),e,t):t}function rt(e,t){return e?(0,i.kJ)(e)&&(0,i.kJ)(t)?[...new Set([...e,...t])]:(0,i.l7)(Object.create(null),ze(e),ze(null!=t?t:{})):t}function it(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function st(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ot=0;function at(e,t){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=st();const o=new WeakSet;let a=!1;const c=s.app={_uid:ot++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Bn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=nn(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Pn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){ct=c;try{return e()}finally{ct=null}}};return c}}let ct=null;function ut(e,t){if(yn){let n=yn.provides;const r=yn.parent&&yn.parent.provides;r===n&&(n=yn.provides=Object.create(r)),n[e]=t}else 0}function lt(e,t,n=!1){const r=yn||D;if(r||ct){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ct._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r&&r.proxy):t}else 0}function ht(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Xt,1),e.propsDefaults=Object.create(null),ft(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function dt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ft(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=pt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(R(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=pt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ft(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:R(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=pt(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function pt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(In(s),r=i[n]=e.call(null,t),En())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function mt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=mt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);gt(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(gt(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const e=wt(Boolean,r.type),n=wt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function gt(e){return"$"!==e[0]}function yt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function vt(e,t){return yt(e)===yt(t)}function wt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>vt(t,e))):(0,i.mf)(t)&&vt(t,e)?0:-1}const _t=e=>"_"===e[0]||"$stable"===e,bt=e=>(0,i.kJ)(e)?e.map(un):[un(e)],It=(e,t,n)=>{if(t._n)return t;const r=L(((...e)=>bt(t(...e))),n);return r._c=!1,r},Et=(e,t,n)=>{const r=e._ctx;for(const s in e){if(_t(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=It(s,n,r);else if(null!=n){0;const e=bt(n);t[s]=()=>e}}},Tt=(e,t)=>{const n=bt(t);e.slots.default=()=>n},St=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Et(t,e.slots={})}else e.slots={},t&&Tt(e,t);(0,i.Nj)(e.slots,Xt,1)},kt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Et(t,s)),a=t}else t&&(Tt(e,t),a={default:1});if(o)for(const i in s)_t(i)||null!=a[i]||delete s[i]};function Ct(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Ct(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(ye(o)&&!a)return;const c=4&o.shapeFlag?Pn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,xt(r,n)):r()}else 0}}function At(){}const xt=H;function Nt(e){return Rt(e)}function Rt(e,t){At();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Jt(e,t)&&(r=X(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Ut:v(e,t,n,r);break;case Vt:w(e,t,n,r);break;case jt:null==e&&b(t,n,r,o);break;case Ft:P(e,t,n,r,i,s,o,a,c);break;default:1&h?C(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,ee)}null!=l&&i&&Ct(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},C=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,c):R(e,t,i,s,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:w}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&y?d(f,e.children):16&y&&N(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),w&&ne(e,null,r,"created"),x(f,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,o,J);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&fn(p,r,e)}w&&ne(e,null,r,"beforeMount");const _=Ot(o,v);_&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||_||w)&&xt((()=>{p&&fn(p,r,e),_&&v.enter(f),w&&ne(e,null,r,"mounted")}),o)},x=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;x(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?ln(e[u]):un(e[u]);y(null,c,t,n,r,i,s,o,a)}},R=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&Dt(n,!1),(g=m.onVnodeBeforeUpdate)&&fn(g,n,t,e),f&&ne(t,e,n,"beforeUpdate"),n&&Dt(n,!0);const y=s&&"foreignObject"!==t.type;if(h?D(e.dynamicChildren,h,u,n,r,y,o):c||z(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)O(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,J)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||O(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&xt((()=>{g&&fn(g,n,t,e),f&&ne(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Ft||!Jt(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},O=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,J);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,J)}"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),N(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Pt(e,t,!0)):z(e,t,n,d,i,o,a,c,l)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):U(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=gn(e,r,i);if(ve(e)&&(a.ctx.renderer=ee),An(a),a.asyncDep){if(i&&i.registerDep(a,j),!e.el){const e=a.subTree=nn(Vt);w(null,e,t,n)}}else j(a,e,t,n,i,s,o)},U=(e,t,n)=>{const r=t.component=e.component;if(V(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void q(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},j=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,Dt(e,!1),n?(n.el=l.el,q(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&fn(t,u,n,l),Dt(e,!0);const d=M(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),X(p),e,o,a),n.el=d.el,null===h&&B(e,d.el),s&&xt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&xt((()=>fn(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=ye(t);if(Dt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&fn(r,d,t),Dt(e,!0),c&&re){const n=()=>{e.subTree=M(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=M(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&xt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;xt((()=>fn(r,d,e)),o)}(256&t.shapeFlag||d&&ye(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&xt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>_(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,Dt(e,!0),h()},q=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,dt(e,t.props,i,n),kt(e,t.children,n),(0,r.Jd)(),T(),(0,r.lk)()},z=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void G(u,h,n,r,i,s,o,a,c);if(256&f)return void $(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&J(u,i,s),h!==u&&d(n,h)):16&l?16&p?G(u,h,n,r,i,s,o,a,c):J(u,i,s,!0):(8&l&&d(n,""),16&p&&N(h,n,r,i,s,o,a,c))},$=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?ln(t[f]):un(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?J(e,s,o,!0,!1,d):N(t,n,r,s,o,a,c,u,d)},G=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?ln(t[l]):un(t[l]);if(!Jt(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?ln(t[f]):un(t[f]);if(!Jt(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?ln(t[l]):un(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)W(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?ln(t[l]):un(t[l]);null!=e.key&&g.set(e.key,l)}let v,w=0;const _=f-m+1;let b=!1,I=0;const E=new Array(_);for(l=0;l<_;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=_){W(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===E[v-m]&&Jt(r,t[v])){i=v;break}void 0===i?W(r,s,o,!0):(E[i-m]=l+1,i>=I?I=i:b=!0,y(r,t[i],n,null,s,o,a,c,u),w++)}const T=b?Lt(E):i.Z6;for(v=T.length-1,l=_-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?y(null,i,n,d,s,o,a,c,u):b&&(v<0||l!==T[v]?K(i,n,d,2):v--)}}},K=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void K(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===Ft){s(o,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===jt)return void E(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),xt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&Ct(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!ye(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&fn(m,t,e),6&l)Y(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&ne(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(s!==Ft||h>0&&64&h)?J(u,t,n,!1,!0):(s===Ft&&384&h||!i&&16&l)&&J(c,t,n),r&&H(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&xt((()=>{m&&fn(m,t,e),f&&ne(e,null,t,"unmounted")}),n)},H=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Ft)return void Q(n,r);if(t===jt)return void k(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),c&&xt(c,t),xt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),T(),S(),t._vnode=e},ee={p:y,um:W,m:K,r:H,mt:F,mc:N,pc:z,pbc:D,n:X,o:e};let te,re;return t&&([te,re]=t(ee)),{render:Z,hydrate:te,createApp:at(Z,te)}}function Dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ot(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Pt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=ln(s[i]),t.el=e.el),n||Pt(e,t)),t.type===Ut&&(t.el=e.el)}}function Lt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Mt=e=>e.__isTeleport;const Ft=Symbol.for("v-fgt"),Ut=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),jt=Symbol.for("v-stc"),Bt=[];let qt=null;function zt(e=!1){Bt.push(qt=e?null:[])}function $t(){Bt.pop(),qt=Bt[Bt.length-1]||null}let Gt=1;function Kt(e){Gt+=e}function Wt(e){return e.dynamicChildren=Gt>0?qt||i.Z6:null,$t(),Gt>0&&qt&&qt.push(e),e}function Ht(e,t,n,r,i,s){return Wt(tn(e,t,n,r,i,s,!0))}function Qt(e,t,n,r,i){return Wt(nn(e,t,n,r,i,!0))}function Yt(e){return!!e&&!0===e.__v_isVNode}function Jt(e,t){return e.type===t.type&&e.key===t.key}const Xt="__vInternal",Zt=({key:e})=>null!=e?e:null,en=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:D,r:e,k:t,f:!!n}:e:null);function tn(e,t=null,n=null,r=0,s=null,o=(e===Ft?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zt(t),ref:t&&en(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(hn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Gt>0&&!a&&qt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&qt.push(u),u}const nn=rn;function rn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==$||(e=Vt),Yt(e)){const r=on(e,t,!0);return n&&hn(r,n),Gt>0&&!a&&qt&&(6&r.shapeFlag?qt[qt.indexOf(e)]=r:qt.push(r)),r.patchFlag|=-2,r}if(Mn(e)&&(e=e.__vccOpts),t){t=sn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:W(e)?128:Mt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return tn(e,t,n,s,o,c,a,!0)}function sn(e){return e?(0,r.X3)(e)||Xt in e?(0,i.l7)({},e):e:null}function on(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?dn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Zt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(en(t)):[s,en(t)]:en(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ft?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&on(e.ssContent),ssFallback:e.ssFallback&&on(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function an(e=" ",t=0){return nn(Ut,null,e,t)}function cn(e="",t=!1){return t?(zt(),Qt(Vt,null,e)):nn(Vt,null,e)}function un(e){return null==e||"boolean"===typeof e?nn(Vt):(0,i.kJ)(e)?nn(Ft,null,e.slice()):"object"===typeof e?ln(e):nn(Ut,null,String(e))}function ln(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:on(e)}function hn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),hn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Xt in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.mf)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[an(t)]):n=8);e.children=t,e.shapeFlag|=n}function dn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function fn(e,t,n,r=null){o(e,t,7,[n,r])}const pn=st();let mn=0;function gn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||pn,a={uid:mn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mt(s,o),emitsOptions:N(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=x.bind(null,a),e.ce&&e.ce(a),a}let yn=null;const vn=()=>yn||D;let wn,_n,bn="__VUE_INSTANCE_SETTERS__";(_n=(0,i.E9)()[bn])||(_n=(0,i.E9)()[bn]=[]),_n.push((e=>yn=e)),wn=e=>{_n.length>1?_n.forEach((t=>t(e))):_n[0](e)};const In=e=>{wn(e),e.scope.on()},En=()=>{yn&&yn.scope.off(),wn(null)};function Tn(e){return 4&e.vnode.shapeFlag}let Sn,kn,Cn=!1;function An(e,t=!1){Cn=t;const{props:n,children:r}=e.vnode,i=Tn(e);ht(e,n,i,t),St(e,r);const s=i?xn(e,t):void 0;return Cn=!1,s}function xn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,qe));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?On(e):null;In(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),En(),(0,i.tI)(c)){if(c.then(En,En),t)return c.then((n=>{Nn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Nn(e,c,t)}else Rn(e,t)}function Nn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Rn(e,n)}function Rn(e,t,n){const s=e.type;if(!e.render){if(!t&&Sn&&!s.render){const t=s.template||Qe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Sn(t,c)}}e.render=s.render||i.dG,kn&&kn(e)}In(e),(0,r.Jd)();try{Ge(e)}finally{(0,r.lk)(),En()}}function Dn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}}))}function On(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return Dn(e)},slots:e.slots,emit:e.emit,expose:t}}function Pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in je?je[n](e):void 0},has(e,t){return t in e||t in je}}))}function Ln(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Mn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Fn=(e,t)=>(0,r.Fl)(e,t,Cn);function Un(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Yt(t)?nn(e,null,[t]):nn(e,t):nn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Yt(n)&&(n=[n]),nn(e,t,n))}const Vn=Symbol.for("v-scx"),jn=()=>{{const e=lt(Vn);return e}};const Bn="3.3.8"},9242:function(e,t,n){n.d(t,{D2:function(){return we},iM:function(){return ye},nr:function(){return pe},ri:function(){return Ee}});n(560);var r=n(3396),i=n(7139),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},l="transition",h="animation",d=Symbol("_vtc"),f=(e,{slots:t})=>(0,r.h)(r.P$,v(e),t);f.displayName="Transition";const p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=f.props=(0,i.l7)({},r.nJ,p),g=(e,t=[])=>{(0,i.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},y=e=>!!e&&((0,i.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function v(e){const t={};for(const i in e)i in p||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,v=w(s),_=v&&v[0],T=v&&v[1],{onBeforeEnter:k,onEnter:C,onEnterCancelled:A,onLeave:N,onLeaveCancelled:R,onBeforeAppear:D=k,onAppear:O=C,onAppearCancelled:P=A}=t,L=(e,t,n)=>{I(e,t?h:c),I(e,t?l:a),n&&n()},M=(e,t)=>{e._isLeaving=!1,I(e,d),I(e,m),I(e,f),t&&t()},F=e=>(t,n)=>{const i=e?O:C,s=()=>L(t,e,n);g(i,[t,s]),E((()=>{I(t,e?u:o),b(t,e?h:c),y(i)||S(t,r,_,s)}))};return(0,i.l7)(t,{onBeforeEnter(e){g(k,[e]),b(e,o),b(e,a)},onBeforeAppear(e){g(D,[e]),b(e,u),b(e,l)},onEnter:F(!1),onAppear:F(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>M(e,t);b(e,d),x(),b(e,f),E((()=>{e._isLeaving&&(I(e,d),b(e,m),y(N)||S(e,r,T,n))})),g(N,[e,n])},onEnterCancelled(e){L(e,!1),g(A,[e])},onAppearCancelled(e){L(e,!0),g(P,[e])},onLeaveCancelled(e){M(e),g(R,[e])}})}function w(e){if(null==e)return null;if((0,i.Kn)(e))return[_(e.enter),_(e.leave)];{const t=_(e);return[t,t]}}function _(e){const t=(0,i.He)(e);return t}function b(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[d]||(e[d]=new Set)).add(t)}function I(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[d];n&&(n.delete(t),n.size||(e[d]=void 0))}function E(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let T=0;function S(e,t,n,r){const i=e._endId=++T,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=k(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function k(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${l}Delay`),s=r(`${l}Duration`),o=C(i,s),a=r(`${h}Delay`),c=r(`${h}Duration`),u=C(a,c);let d=null,f=0,p=0;t===l?o>0&&(d=l,f=o,p=s.length):t===h?u>0&&(d=h,f=u,p=c.length):(f=Math.max(o,u),d=f>0?o>u?l:h:null,p=d?d===l?s.length:c.length:0);const m=d===l&&/\b(transform|all)(,|$)/.test(r(`${l}Property`).toString());return{type:d,timeout:f,propCount:p,hasTransform:m}}function C(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>A(t)+A(e[n]))))}function A(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function x(){return document.body.offsetHeight}function N(e,t,n){const r=e[d];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const R=Symbol("_vod");function D(e,t,n){const r=e.style,s=(0,i.HD)(n);if(n&&!s){if(t&&!(0,i.HD)(t))for(const e in t)null==n[e]&&P(r,e,"");for(const e in n)P(r,e,n[e])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),R in e&&(r.display=i)}}const O=/\s*!important$/;function P(e,t,n){if((0,i.kJ)(n))n.forEach((n=>P(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=F(e,t);O.test(n)?e.setProperty((0,i.rs)(r),n.replace(O,""),"important"):e[r]=n}}const L=["Webkit","Moz","ms"],M={};function F(e,t){const n=M[t];if(n)return n;let r=(0,i._A)(t);if("filter"!==r&&r in e)return M[t]=r;r=(0,i.kC)(r);for(let i=0;i<L.length;i++){const n=L[i]+r;if(n in e)return M[t]=n}return t}const U="http://www.w3.org/1999/xlink";function V(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(U,t.slice(6,t.length)):e.setAttributeNS(U,t,n);else{const r=(0,i.Pq)(t);null==n||r&&!(0,i.yA)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function j(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){e._value=n;const r="OPTION"===c?e.getAttribute("value"):e.value,i=null==n?"":n;return r!==i&&(e.value=i),void(null==n&&e.removeAttribute(t))}let u=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function B(e,t,n,r){e.addEventListener(t,n,r)}function q(e,t,n,r){e.removeEventListener(t,n,r)}const z=Symbol("_vei");function $(e,t,n,r,i=null){const s=e[z]||(e[z]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=K(t);if(r){const o=s[t]=Y(r,i);B(e,n,o,a)}else o&&(q(e,n,o,a),s[t]=void 0)}}const G=/(?:Once|Passive|Capture)$/;function K(e){let t;if(G.test(e)){let n;t={};while(n=e.match(G))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.rs)(e.slice(2));return[n,t]}let W=0;const H=Promise.resolve(),Q=()=>W||(H.then((()=>W=0)),W=Date.now());function Y(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.$d)(J(e,n.value),t,5,[e])};return n.value=e,n.attached=Q(),n}function J(e,t){if((0,i.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const X=/^on[a-z]/,Z=(e,t,n,r,s=!1,o,a,c,u)=>{"class"===t?N(e,r,s):"style"===t?D(e,n,r):(0,i.F7)(t)?(0,i.tR)(t)||$(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ee(e,t,r,s))?j(e,t,r,o,a,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),V(e,t,r,s))};function ee(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&X.test(t)&&(0,i.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!X.test(t)||!(0,i.HD)(n))&&t in e))))}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const te=new WeakMap,ne=new WeakMap,re=Symbol("_moveCb"),ie=Symbol("_enterCb"),se={name:"TransitionGroup",props:(0,i.l7)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ue(o[0].el,n.vnode.el,t))return;o.forEach(oe),o.forEach(ae);const r=o.filter(ce);x(),r.forEach((e=>{const n=e.el,r=n.style;b(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[re]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[re]=null,I(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),u=v(c);let l=c.tag||r.HY;o=a,a=t.default?(0,r.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.nK)(t,(0,r.U2)(t,u,i,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,r.nK)(t,(0,r.U2)(t,u,i,n)),te.set(t,t.el.getBoundingClientRect())}return(0,r.Wm)(l,null,a)}}};se.props;function oe(e){const t=e.el;t[re]&&t[re](),t[ie]&&t[ie]()}function ae(e){ne.set(e,e.el.getBoundingClientRect())}function ce(e){const t=te.get(e),n=ne.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ue(e,t,n){const r=e.cloneNode(),i=e[d];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=k(r);return s.removeChild(r),o}const le=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(t)?e=>(0,i.ir)(t,e):t};function he(e){e.target.composing=!0}function de(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const fe=Symbol("_assign"),pe={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[fe]=le(s);const o=r||s.props&&"number"===s.props.type;B(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.h5)(r)),e[fe](r)})),n&&B(e,"change",(()=>{e.value=e.value.trim()})),t||(B(e,"compositionstart",he),B(e,"compositionend",de),B(e,"change",de))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e[fe]=le(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,i.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const me=["ctrl","shift","alt","meta"],ge={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>me.some((n=>e[`${n}Key`]&&!t.includes(n)))},ye=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ge[t[e]];if(r&&r(n,t))return}return e(n,...r)},ve={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},we=(e,t)=>n=>{if(!("key"in n))return;const r=(0,i.rs)(n.key);return t.some((e=>e===r||ve[e]===r))?e(n):void 0},_e=(0,i.l7)({patchProp:Z},u);let be;function Ie(){return be||(be=(0,r.Us)(_e))}const Ee=(...e)=>{const t=Ie().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Te(e);if(!r)return;const s=t._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Te(e){if((0,i.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){n.d(t,{C_:function(){return X},DM:function(){return y},E9:function(){return $},F7:function(){return u},Gg:function(){return N},HD:function(){return b},He:function(){return q},Kj:function(){return w},Kn:function(){return E},NO:function(){return a},Nj:function(){return j},Od:function(){return d},PO:function(){return A},Pq:function(){return ee},RI:function(){return p},S0:function(){return x},W7:function(){return C},WV:function(){return re},Z6:function(){return s},_A:function(){return O},_N:function(){return g},aU:function(){return U},dG:function(){return o},fY:function(){return r},h5:function(){return B},hR:function(){return F},hq:function(){return ie},ir:function(){return V},j5:function(){return W},kC:function(){return M},kJ:function(){return m},kT:function(){return i},l7:function(){return h},mf:function(){return _},rs:function(){return L},tI:function(){return T},tR:function(){return l},yA:function(){return te},yk:function(){return I},yl:function(){return K},zw:function(){return se}});n(560);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i={},s=[],o=()=>{},a=()=>!1,c=/^on[^a-z]/,u=e=>c.test(e),l=e=>e.startsWith("onUpdate:"),h=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},f=Object.prototype.hasOwnProperty,p=(e,t)=>f.call(e,t),m=Array.isArray,g=e=>"[object Map]"===k(e),y=e=>"[object Set]"===k(e),v=e=>"[object Date]"===k(e),w=e=>"[object RegExp]"===k(e),_=e=>"function"===typeof e,b=e=>"string"===typeof e,I=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>(E(e)||_(e))&&_(e.then)&&_(e.catch),S=Object.prototype.toString,k=e=>S.call(e),C=e=>k(e).slice(8,-1),A=e=>"[object Object]"===k(e),x=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,N=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),R=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},D=/-(\w)/g,O=R((e=>e.replace(D,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,L=R((e=>e.replace(P,"-$1").toLowerCase())),M=R((e=>e.charAt(0).toUpperCase()+e.slice(1))),F=R((e=>{const t=e?`on${M(e)}`:"";return t})),U=(e,t)=>!Object.is(e,t),V=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},j=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},q=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let z;const $=()=>z||(z="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const G="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",K=r(G);function W(e){if(m(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?J(r):W(r);if(i)for(const e in i)t[e]=i[e]}return t}if(b(e)||E(e))return e}const H=/;(?![^(]*\))/g,Q=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function J(e){const t={};return e.replace(Y,"").split(H).forEach((e=>{if(e){const n=e.split(Q);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(b(e))t=e;else if(m(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=r(Z);function te(e){return!!e||""===e}function ne(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=re(e[r],t[r]);return n}function re(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=I(e),r=I(t),n||r)return e===t;if(n=m(e),r=m(t),n||r)return!(!n||!r)&&ne(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!re(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex((e=>re(e,t)))}const se=e=>b(e)?e:null==e?"":m(e)||E(e)&&(e.toString===S||!_(e.toString))?JSON.stringify(e,oe,2):String(e),oe=(e,t)=>t&&t.__v_isRef?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:y(t)?{[`Set(${t.size})`]:[...t.values()]}:!E(t)||m(t)||A(t)?t:String(t)},1581:function(e,t,n){n.d(t,{Z:function(){return ge}});var r={};function i(){return r}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){o(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===s(e)&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function c(e,t){o(2,arguments);var n=a(e),r=a(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function u(e,t){o(2,arguments);var n=a(e),r=a(t),i=n.getFullYear()-r.getFullYear(),s=n.getMonth()-r.getMonth();return 12*i+s}function l(e){o(1,arguments);var t=a(e);return t.setHours(23,59,59,999),t}function h(e){o(1,arguments);var t=a(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function d(e){o(1,arguments);var t=a(e);return l(t).getTime()===h(t).getTime()}function f(e,t){o(2,arguments);var n,r=a(e),i=a(t),s=c(r,i),l=Math.abs(u(r,i));if(l<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-s*l);var h=c(r,i)===-s;d(a(e))&&1===l&&1===c(e,i)&&(h=!1),n=s*(l-Number(h))}return 0===n?0:n}function p(e,t){return o(2,arguments),a(e).getTime()-a(t).getTime()}var m={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},g="trunc";function y(e){return e?m[e]:m[g]}function v(e,t,n){o(2,arguments);var r=p(e,t)/1e3;return y(null===n||void 0===n?void 0:n.roundingMethod)(r)}var w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},_=function(e,t,n){var r,i=w[e];return r="string"===typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},b=_;function I(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var E={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},T={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},S={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},k={date:I({formats:E,defaultWidth:"full"}),time:I({formats:T,defaultWidth:"full"}),dateTime:I({formats:S,defaultWidth:"full"})},C=k,A={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},x=function(e,t,n,r){return A[e]},N=x;function R(e){return function(t,n){var r,i=null!==n&&void 0!==n&&n.context?String(n.context):"standalone";if("formatting"===i&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,o=null!==n&&void 0!==n&&n.width?String(n.width):s;r=e.formattingValues[o]||e.formattingValues[s]}else{var a=e.defaultWidth,c=null!==n&&void 0!==n&&n.width?String(n.width):e.defaultWidth;r=e.values[c]||e.values[a]}var u=e.argumentCallback?e.argumentCallback(t):t;return r[u]}}var D={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},O={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},P={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},L={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},M={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},F={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},U=function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},V={ordinalNumber:U,era:R({values:D,defaultWidth:"wide"}),quarter:R({values:O,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:R({values:P,defaultWidth:"wide"}),day:R({values:L,defaultWidth:"wide"}),dayPeriod:R({values:M,defaultWidth:"wide",formattingValues:F,defaultFormattingWidth:"wide"})},j=V;function B(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(i);if(!s)return null;var o,a=s[0],c=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(c)?z(c,(function(e){return e.test(a)})):q(c,(function(e){return e.test(a)}));o=e.valueCallback?e.valueCallback(u):u,o=n.valueCallback?n.valueCallback(o):o;var l=t.slice(a.length);return{value:o,rest:l}}}function q(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function z(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function $(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var i=r[0],s=t.match(e.parsePattern);if(!s)return null;var o=e.valueCallback?e.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=t.slice(i.length);return{value:o,rest:a}}}var G=/^(\d+)(th|st|nd|rd)?/i,K=/\d+/i,W={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},H={any:[/^b/i,/^(a|c)/i]},Q={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Y={any:[/1/i,/2/i,/3/i,/4/i]},J={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},X={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Z={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ee={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},te={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ne={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},re={ordinalNumber:$({matchPattern:G,parsePattern:K,valueCallback:function(e){return parseInt(e,10)}}),era:B({matchPatterns:W,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),quarter:B({matchPatterns:Q,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:B({matchPatterns:J,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any"}),day:B({matchPatterns:Z,defaultMatchWidth:"wide",parsePatterns:ee,defaultParseWidth:"any"}),dayPeriod:B({matchPatterns:te,defaultMatchWidth:"any",parsePatterns:ne,defaultParseWidth:"any"})},ie=re,se={code:"en-US",formatDistance:b,formatLong:C,formatRelative:N,localize:j,match:ie,options:{weekStartsOn:0,firstWeekContainsDate:1}},oe=se,ae=oe;function ce(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function ue(e){return ce({},e)}function le(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var he=1440,de=2520,fe=43200,pe=86400;function me(e,t,n){var r,s;o(2,arguments);var u=i(),l=null!==(r=null!==(s=null===n||void 0===n?void 0:n.locale)&&void 0!==s?s:u.locale)&&void 0!==r?r:ae;if(!l.formatDistance)throw new RangeError("locale must contain formatDistance property");var h=c(e,t);if(isNaN(h))throw new RangeError("Invalid time value");var d,p,m=ce(ue(n),{addSuffix:Boolean(null===n||void 0===n?void 0:n.addSuffix),comparison:h});h>0?(d=a(t),p=a(e)):(d=a(e),p=a(t));var g,y=v(p,d),w=(le(p)-le(d))/1e3,_=Math.round((y-w)/60);if(_<2)return null!==n&&void 0!==n&&n.includeSeconds?y<5?l.formatDistance("lessThanXSeconds",5,m):y<10?l.formatDistance("lessThanXSeconds",10,m):y<20?l.formatDistance("lessThanXSeconds",20,m):y<40?l.formatDistance("halfAMinute",0,m):y<60?l.formatDistance("lessThanXMinutes",1,m):l.formatDistance("xMinutes",1,m):0===_?l.formatDistance("lessThanXMinutes",1,m):l.formatDistance("xMinutes",_,m);if(_<45)return l.formatDistance("xMinutes",_,m);if(_<90)return l.formatDistance("aboutXHours",1,m);if(_<he){var b=Math.round(_/60);return l.formatDistance("aboutXHours",b,m)}if(_<de)return l.formatDistance("xDays",1,m);if(_<fe){var I=Math.round(_/he);return l.formatDistance("xDays",I,m)}if(_<pe)return g=Math.round(_/fe),l.formatDistance("aboutXMonths",g,m);if(g=f(p,d),g<12){var E=Math.round(_/fe);return l.formatDistance("xMonths",E,m)}var T=g%12,S=Math.floor(g/12);return T<3?l.formatDistance("aboutXYears",S,m):T<9?l.formatDistance("overXYears",S,m):l.formatDistance("almostXYears",S+1,m)}function ge(e,t){return o(1,arguments),me(e,Date.now(),t)}},89:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},509:function(e,t,n){var r=n(9985),i=n(3691),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},3550:function(e,t,n){var r=n(9985),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw new s("Can't set "+i(e)+" as a prototype")}},767:function(e,t,n){var r=n(3622),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},5027:function(e,t,n){var r=n(8999),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},7075:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},4872:function(e,t,n){var r,i,s,o=n(7075),a=n(7697),c=n(9037),u=n(9985),l=n(8999),h=n(6812),d=n(926),f=n(3691),p=n(5773),m=n(1880),g=n(2148),y=n(3622),v=n(1868),w=n(9385),_=n(4201),b=n(4630),I=n(618),E=I.enforce,T=I.get,S=c.Int8Array,k=S&&S.prototype,C=c.Uint8ClampedArray,A=C&&C.prototype,x=S&&v(S),N=k&&v(k),R=Object.prototype,D=c.TypeError,O=_("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(U,t)||h(V,t)},B=function(e){var t=v(e);if(l(t)){var n=T(t);return n&&h(n,L)?n[L]:B(t)}},q=function(e){if(!l(e))return!1;var t=d(e);return h(U,t)||h(V,t)},z=function(e){if(q(e))return e;throw new D("Target is not a typed array")},$=function(e){if(u(e)&&(!w||y(x,e)))return e;throw new D(f(e)+" is not a typed array constructor")},G=function(e,t,n,r){if(a){if(n)for(var i in U){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}N[e]&&!n||m(N,e,n?t:M&&k[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in U)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(x[e]&&!n)return;try{return m(x,e,n?t:M&&x[e]||t)}catch(s){}}for(r in U)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in U)i=c[r],s=i&&i.prototype,s?E(s)[L]=i:M=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(E(s)[L]=i);if((!M||!u(x)||x===Function.prototype)&&(x=function(){throw new D("Incorrect invocation")},M))for(r in U)c[r]&&w(c[r],x);if((!M||!N||N===R)&&(N=x.prototype,M))for(r in U)c[r]&&w(c[r].prototype,N);if(M&&v(A)!==N&&w(A,N),a&&!h(N,O))for(r in F=!0,g(N,O,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),U)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:z,aTypedArrayConstructor:$,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:B,isView:j,isTypedArray:q,TypedArray:x,TypedArrayPrototype:N}},9976:function(e,t,n){var r=n(6310);e.exports=function(e,t){var n=0,i=r(t),s=new e(i);while(i>n)s[n]=t[n++];return s}},4328:function(e,t,n){var r=n(5290),i=n(7578),s=n(6310),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!==n){while(u>l)if(a=c[l++],a!==a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5649:function(e,t,n){var r=n(7697),i=n(2297),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},6166:function(e,t,n){var r=n(6310);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},6134:function(e,t,n){var r=n(6310),i=n(8700),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},6648:function(e,t,n){var r=n(8844),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},926:function(e,t,n){var r=n(3043),i=n(9985),s=n(6648),o=n(4201),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"===(r=s(t))&&i(t.callee)?"Arguments":r}},8758:function(e,t,n){var r=n(6812),i=n(9152),s=n(2474),o=n(2560);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},1748:function(e,t,n){var r=n(3689);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},5773:function(e,t,n){var r=n(7697),i=n(2560),s=n(5684);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5684:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2148:function(e,t,n){var r=n(8702),i=n(2560);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},1880:function(e,t,n){var r=n(9985),i=n(2560),s=n(8702),o=n(5014);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},5014:function(e,t,n){var r=n(9037),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},7697:function(e,t,n){var r=n(3689);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},6420:function(e,t,n){var r=n(9037),i=n(8999),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},5565:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},7136:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},71:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(e,t,n){var r,i,s=n(9037),o=n(71),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},2739:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6610:function(e,t,n){var r=n(8844),i=Error,s=r("".replace),o=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},9989:function(e,t,n){var r=n(9037),i=n(2474).f,s=n(5773),o=n(1880),a=n(5014),c=n(8758),u=n(5266);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},3689:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},7215:function(e,t,n){var r=n(3689);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},2615:function(e,t,n){var r=n(7215),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},1236:function(e,t,n){var r=n(7697),i=n(6812),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},2743:function(e,t,n){var r=n(8844),i=n(509);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},8844:function(e,t,n){var r=n(7215),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},6058:function(e,t,n){var r=n(9037),i=n(9985),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},4849:function(e,t,n){var r=n(509),i=n(981);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},9037:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},6812:function(e,t,n){var r=n(8844),i=n(690),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},7248:function(e){e.exports={}},8506:function(e,t,n){var r=n(7697),i=n(3689),s=n(6420);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},4413:function(e,t,n){var r=n(8844),i=n(3689),s=n(6648),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},3457:function(e,t,n){var r=n(9985),i=n(8999),s=n(9385);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},6738:function(e,t,n){var r=n(8844),i=n(9985),s=n(4091),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},618:function(e,t,n){var r,i,s,o=n(9834),a=n(9037),c=n(8999),u=n(5773),l=n(6812),h=n(4091),d=n(2713),f=n(7248),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw new m(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var _=d("state");f[_]=!0,r=function(e,t){if(l(e,_))throw new m(p);return t.facade=e,u(e,_,t),t},i=function(e){return l(e,_)?e[_]:{}},s=function(e){return l(e,_)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},2297:function(e,t,n){var r=n(6648);e.exports=Array.isArray||function(e){return"Array"===r(e)}},9401:function(e,t,n){var r=n(926);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},9985:function(e,t,n){var r=n(2659),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},5266:function(e,t,n){var r=n(3689),i=n(9985),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},981:function(e){e.exports=function(e){return null===e||void 0===e}},8999:function(e,t,n){var r=n(9985),i=n(2659),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},3931:function(e){e.exports=!1},734:function(e,t,n){var r=n(6058),i=n(9985),s=n(3622),o=n(9525),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6310:function(e,t,n){var r=n(3126);e.exports=function(e){return r(e.length)}},8702:function(e,t,n){var r=n(8844),i=n(3689),s=n(9985),o=n(6812),a=n(7697),c=n(1236).CONFIGURABLE,u=n(6738),l=n(618),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(w,"string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return s(this)&&d(this).source||u(this)}),"toString")},8828:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},3841:function(e,t,n){var r=n(4327);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2560:function(e,t,n){var r=n(7697),i=n(8506),s=n(5648),o=n(5027),a=n(8360),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},2474:function(e,t,n){var r=n(7697),i=n(2615),s=n(9556),o=n(5684),a=n(5290),c=n(8360),u=n(6812),l=n(8506),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},2741:function(e,t,n){var r=n(4948),i=n(2739),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},7518:function(e,t){t.f=Object.getOwnPropertySymbols},1868:function(e,t,n){var r=n(6812),i=n(9985),s=n(690),o=n(2713),a=n(1748),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},3622:function(e,t,n){var r=n(8844);e.exports=r({}.isPrototypeOf)},4948:function(e,t,n){var r=n(8844),i=n(6812),s=n(5290),o=n(4328).indexOf,a=n(7248),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},9556:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},9385:function(e,t,n){var r=n(2743),i=n(5027),s=n(3550);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},5899:function(e,t,n){var r=n(2615),i=n(9985),s=n(8999),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},9152:function(e,t,n){var r=n(6058),i=n(8844),s=n(2741),o=n(7518),a=n(5027),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4684:function(e,t,n){var r=n(981),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},2713:function(e,t,n){var r=n(3430),i=n(4630),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},4091:function(e,t,n){var r=n(9037),i=n(5014),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},3430:function(e,t,n){var r=n(3931),i=n(4091);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(e,t,n){var r=n(3615),i=n(3689),s=n(9037),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(e,t,n){var r=n(8700),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},1530:function(e,t,n){var r=n(8732),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},5290:function(e,t,n){var r=n(4413),i=n(4684);e.exports=function(e){return r(i(e))}},8700:function(e,t,n){var r=n(8828);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},3126:function(e,t,n){var r=n(8700),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},690:function(e,t,n){var r=n(4684),i=Object;e.exports=function(e){return i(r(e))}},8732:function(e,t,n){var r=n(2615),i=n(8999),s=n(734),o=n(4849),a=n(5899),c=n(4201),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},8360:function(e,t,n){var r=n(8732),i=n(734);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},3043:function(e,t,n){var r=n(4201),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},4327:function(e,t,n){var r=n(926),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},3691:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},4630:function(e,t,n){var r=n(8844),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9525:function(e,t,n){var r=n(146);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(e,t,n){var r=n(7697),i=n(3689);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1500:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},9834:function(e,t,n){var r=n(9037),i=n(9985),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},4201:function(e,t,n){var r=n(9037),i=n(3430),s=n(6812),o=n(4630),a=n(146),c=n(9525),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},560:function(e,t,n){var r=n(9989),i=n(690),s=n(6310),o=n(5649),a=n(5565),c=n(3689),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},4224:function(e,t,n){var r=n(6166),i=n(4872),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},1121:function(e,t,n){var r=n(4872),i=n(8844),s=n(509),o=n(9976),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},7133:function(e,t,n){var r=n(6134),i=n(4872),s=n(9401),o=n(8700),a=n(1530),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},3429:function(e,t,n){var r=n(9989),i=n(9037),s=n(6058),o=n(5684),a=n(2560).f,c=n(6812),u=n(767),l=n(3457),h=n(3841),d=n(7136),f=n(6610),p=n(7697),m=n(3931),g="DOMException",y=s("Error"),v=s(g),w=function(){u(this,_);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=new y(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},_=w.prototype=v.prototype,b="stack"in new y(g),I="stack"in new v(1,2),E=v&&p&&Object.getOwnPropertyDescriptor(i,g),T=!!E&&!(E.writable&&E.configurable),S=b&&!T&&!I;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?w:v});var k=s(g),C=k.prototype;if(C.constructor!==k)for(var A in m||a(C,"constructor",o(1,k)),d)if(c(d,A)){var x=d[A],N=x.s;c(k,N)||a(k,N,o(6,x.c))}},8858:function(e,t,n){var r=n(1880),i=n(8844),s=n(4327),o=n(1500),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),o(t,1);var i,a=s(e),c=s(n),f=0,p=0,m=!1,g=r.length;while(f<g)i=r[f++],m||i.key===a?(m=!0,l(this,i.key)):p++;while(p<g)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},1318:function(e,t,n){var r=n(1880),i=n(8844),s=n(4327),o=n(1500),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);o(t,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},3228:function(e,t,n){var r=n(7697),i=n(8844),s=n(2148),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},2661:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(223),i=n(7142),s=n(7077),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.23";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},7077:function(e,t,n){n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ve},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return _e},getApps:function(){return be},initializeApp:function(){return we},onLog:function(){return Te},registerVersion:function(){return Ee},setLogLevel:function(){return Se}});n(560);var r=n(7142),i=n(5168),s=n(223);n(3429);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function b(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}w((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",D="0.9.23",O=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",z="@firebase/functions",$="@firebase/functions-compat",G="@firebase/installations",K="@firebase/installations-compat",W="@firebase/messaging",H="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="10.6.0",se="[DEFAULT]",oe={[R]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[z]:"fire-fn",[$]:"fire-fn-compat",[G]:"fire-iid",[K]:"fire-iid-compat",[W]:"fire-fcm",[H]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new ye(n,i,c);return ae.set(o,u),u}function _e(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.aH)())return we();if(!t)throw ge.create("no-app",{appName:e});return t}function be(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ee(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void O.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Se(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-heartbeat-database",Ce=1,Ae="firebase-heartbeat-store";let xe=null;function Ne(){return xe||(xe=T(ke,Ce,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ae)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),xe}async function Re(e){try{const t=await Ne(),n=await t.transaction(Ae).objectStore(Ae).get(Oe(e));return n}catch(t){if(t instanceof s.ZR)O.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});O.warn(e.message)}}}async function De(e,t){try{const n=await Ne(),r=n.transaction(Ae,"readwrite"),i=r.objectStore(Ae);await i.put(t,Oe(e)),await r.done}catch(n){if(n instanceof s.ZR)O.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Le=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ve(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e;const t=this.container.getProvider("platform-logger").getImmediate(),n=t.getPlatformInfoString(),r=Fe();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Fe(),{heartbeatsToSend:n,unsentEntries:r}=Ue(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fe(){const e=new Date;return e.toISOString().substring(0,10)}function Ue(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),je(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),je(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ve{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Re(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function je(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){he(new r.wA("platform-logger",(e=>new x(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),Ee(R,D,e),Ee(R,D,"esm2017"),Ee("fire-js","")}Be("")},7142:function(e,t,n){n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});n(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},1509:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(2661),i="firebase",s="10.6.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},5362:function(e,t,n){n(560);var r=n(2661),i=(n(4224),n(1121),n(7133),n(8858),n(1318),n(3228),n(223)),s=n(7077),o=n(5168);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var c=n(7142);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend.",["unsupported-password-policy-schema-version"]:"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",["password-does-not-meet-requirements"]:"The password does not meet the requirements."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new i.LL("auth","Firebase",d()),g=new o.Yd("@firebase/auth");function y(e,...t){g.logLevel<=o["in"].WARN&&g.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}function v(e,...t){g.logLevel<=o["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,...t){throw E(e,...t)}function _(e,...t){return E(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function I(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&w(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function E(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function T(e,t,...n){if(!e)throw E(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function k(e,t){e||S(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function A(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},M=new D(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function U(e,t,n,r,s={}){return V(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(B(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function V(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},L),t);try{const t=new z(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw $(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw $(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);w(e,a)}}catch(s){if(s instanceof i.ZR)throw s;w(e,"network-request-failed",{message:String(s)})}}async function j(e,t,n,r,i={}){const s=await U(e,t,n,r,i);return"mfaPendingCredential"in s&&w(e,"multi-factor-auth-required",{_serverResponse:s}),s}function B(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}function q(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(_(this.auth,"network-request-failed"))),M.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){return void 0!==e&&void 0!==e.getResponse}function K(e){return void 0!==e&&void 0!==e.enterprise}class W{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return q(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e){return(await U(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Q(e,t){return U(e,"GET","/v2/recaptchaConfig",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t){return U(e,"POST","/v1/accounts:delete",t)}async function J(e,t){return U(e,"POST","/v1/accounts:update",t)}async function X(e,t){return U(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=ne(r);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:Z(te(s.auth_time)),issuedAtTime:Z(te(s.iat)),expirationTime:Z(te(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function te(e){return 1e3*Number(e)}function ne(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function re(e){const t=ne(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&se(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function se({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Z(this.lastLoginAt),this.creationTime=Z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ie(e,X(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?he(s.providerUserInfo):[],a=le(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ae(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ue(e){const t=(0,i.m9)(e);await ce(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function le(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function he(e){return e.map((e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(e,t){const n=await V(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=B(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fe(e,t){return U(e,"POST","/v2/accounts:revokeToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):re(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await de(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new pe;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pe,this.toJSON())}_performRefresh(){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ge{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ae(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ie(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ee(this,e)}reload(){return ue(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ge(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ce(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ie(this,Y(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:I}=t;T(v&&I,e,"internal-error");const E=pe.fromJSON(this.name,I);T("string"===typeof v,e,"internal-error"),me(l,e.name),me(h,e.name),T("boolean"===typeof w,e,"internal-error"),T("boolean"===typeof _,e,"internal-error"),me(d,e.name),me(f,e.name),me(p,e.name),me(m,e.name),me(g,e.name),me(y,e.name);const S=new ge({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(S.providerData=b.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new pe;r.updateFromServerResponse(t);const i=new ge({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ce(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Map;function ve(e){k(e instanceof Function,"Expected a class definition");let t=ye.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ye.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}we.type="NONE";const _e=we;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t,n){return`firebase:${e}:${t}:${n}`}class Ie{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=be(this.userKey,r.apiKey,i),this.fullPersistenceKey=be("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ge._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ie(ve(_e),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ve(_e);const s=be(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ge._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new Ie(i,e,n)):new Ie(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ce(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Te(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xe(t))return"Blackberry";if(Ne(t))return"Webos";if(Se(t))return"Safari";if((t.includes("chrome/")||ke(t))&&!t.includes("edge/"))return"Chrome";if(Ae(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Te(e=(0,i.z$)()){return/firefox\//i.test(e)}function Se(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ke(e=(0,i.z$)()){return/crios\//i.test(e)}function Ce(e=(0,i.z$)()){return/iemobile/i.test(e)}function Ae(e=(0,i.z$)()){return/android/i.test(e)}function xe(e=(0,i.z$)()){return/blackberry/i.test(e)}function Ne(e=(0,i.z$)()){return/webos/i.test(e)}function Re(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function De(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Oe(e=(0,i.z$)()){var t;return Re(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Pe(){return(0,i.w1)()&&10===document.documentMode}function Le(e=(0,i.z$)()){return Re(e)||Ae(e)||Ne(e)||xe(e)||/windows phone/i.test(e)||Ce(e)}function Me(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e,t=[]){let n;switch(e){case"Browser":n=Ee((0,i.z$)());break;case"Worker":n=`${Ee((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t={}){return U(e,"GET","/v2/passwordPolicy",F(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=6;class Be{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:je,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $e(this),this.idTokenSubscription=new $e(this),this.beforeStateQueue=new Ue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ve(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ie.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ce(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ve(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ve(this),t=new Be(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await fe(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ve(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await Ie.create(this,[ve(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(T(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&y(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function ze(e){return(0,i.m9)(e)}class $e{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Ke(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=_("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Ge().appendChild(r)}))}function We(e){return`__${e}${Math.floor(1e6*Math.random())}`}const He="https://www.google.com/recaptcha/enterprise.js?render=",Qe="recaptcha-enterprise",Ye="NO_RECAPTCHA";class Je{constructor(e){this.type=Qe,this.auth=ze(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Q(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new W(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;K(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ye)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&K(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Ke(He+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Xe(e,t,n,r=!1){const i=new Je(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ze(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Xe(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Xe(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}function et(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ve);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function tt(e,t,n){const r=ze(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=nt(t),{host:o,port:a}=rt(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||st()}function nt(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function rt(e){const t=nt(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:it(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:it(t)}}}function it(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function st(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(e,t){return U(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function ct(e,t){return U(e,"POST","/v1/accounts:update",t)}async function ut(e,t){return U(e,"POST","/v1/accounts:signUp",t)}async function lt(e,t){return U(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function dt(e,t){return U(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function ft(e,t){return dt(e,t)}async function pt(e,t){return dt(e,t)}async function mt(e,t){return dt(e,t)}async function gt(e,t){return dt(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function vt(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends ot{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new wt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new wt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ze(e,t,"signInWithPassword",ht);case"emailLink":return yt(e,{email:this._email,oobCode:this._password});default:w(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ze(e,n,"signUpPassword",ut);case"emailLink":return vt(e,{idToken:t,email:this._email,oobCode:this._password});default:w(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="http://localhost";class It extends ot{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new It(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):w("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new It(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return _t(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,_t(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_t(e,t)}buildRequest(){const e={requestUri:bt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e,t){return U(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function Tt(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function St(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}const kt={["USER_NOT_FOUND"]:"user-not-found"};async function Ct(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),kt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends ot{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new At({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new At({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return St(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ct(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new At({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Nt(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class Rt{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=xt(null!==(r=c["mode"])&&void 0!==r?r:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Nt(e);try{return new Rt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(){this.providerId=Dt.PROVIDER_ID}static credential(e,t){return wt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Rt.parseLink(t);return T(n,"argument-error"),wt._fromEmailAndCode(e,n.code,n.tenantId)}}Dt.PROVIDER_ID="password",Dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Ot{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Lt extends Pt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),It._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),It._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Lt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Lt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new Lt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Pt{constructor(){super("facebook.com")}static credential(e){return It._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch(t){return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Mt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft extends Pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return It._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ft.credential(t,n)}catch(r){return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com",Ft.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut extends Pt{constructor(){super("github.com")}static credential(e){return It._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch(t){return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com",Ut.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vt="http://localhost";class jt extends ot{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return _t(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,_t(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_t(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new jt(n,i):null}static _create(e,t){return new jt(e,t)}buildRequest(){return{requestUri:Vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="saml.";class qt extends Ot{constructor(e){T(e.startsWith(Bt),"argument-error"),super(e)}static credentialFromResult(e){return qt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return qt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=jt.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return jt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Pt{constructor(){super("twitter.com")}static credential(e,t){return It._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return zt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $t(e,t){return j(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.TWITTER_SIGN_IN_METHOD="twitter.com",zt.PROVIDER_ID="twitter.com";class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ge._fromIdTokenResponse(e,n,r),s=Kt(n),o=new Gt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Kt(n);return new Gt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Kt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(e){var t;const n=ze(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Gt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await $t(n,{returnSecureToken:!0}),i=await Gt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ht.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ht(e,t,n,r)}}function Qt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ht._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){const n=(0,i.m9)(e);await Zt(!0,n,t);const{providerUserInfo:r}=await J(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Yt(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Xt(e,t,n=!1){const r=await ie(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Gt._forOperation(e,"link",r)}async function Zt(e,t,n){await ce(t);const r=Yt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";T(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ie(e,Qt(r,i,t,e),n);T(s.idToken,r,"internal-error");const o=ne(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),Gt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&w(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e,t,n=!1){const r="signIn",i=await Qt(e,r,t),s=await Gt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function nn(e,t){return tn(ze(e),t)}async function rn(e,t){const n=(0,i.m9)(e);return await Zt(!1,n,t.providerId),Xt(n,t)}async function sn(e,t){return en((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e,t){return j(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(e,t){const n=ze(e),r=await on(n,{token:t,returnSecureToken:!0}),i=await Gt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?un._fromServerResponse(e,t):"totpInfo"in t?ln._fromServerResponse(e,t):w(e,"internal-error")}}class un extends cn{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new un(t)}}class ln extends cn{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new ln(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(e){const t=ze(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function fn(e,t,n){const r=ze(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&hn(r,i,n),await Ze(r,i,"getOobCode",pt)}async function pn(e,t,n){await at((0,i.m9)(e),{oobCode:t,newPassword:n}).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&dn(e),t}))}async function mn(e,t){await lt((0,i.m9)(e),{oobCode:t})}async function gn(e,t){const n=(0,i.m9)(e),r=await at(n,{oobCode:t}),s=r.requestType;switch(T(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,n,"internal-error");default:T(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=cn._fromServerResponse(ze(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function yn(e,t){const{data:n}=await gn((0,i.m9)(e),t);return n.email}async function vn(e,t,n){const r=ze(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},s=Ze(r,i,"signUpPassword",$t),o=await s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&dn(e),t})),a=await Gt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function wn(e,t,n){return nn((0,i.m9)(e),Dt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&dn(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t,n){const r=ze(e),i={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function s(e,t){T(t.handleCodeInApp,r,"argument-error"),t&&hn(r,e,t)}s(i,n),await Ze(r,i,"getOobCode",mt)}function bn(e,t){const n=Rt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function In(e,t,n){const r=(0,i.m9)(e),s=Dt.credentialWithLink(t,n||C());return T(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),nn(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(e,t){return U(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(e,t){const n=A()?C():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await En((0,i.m9)(e),r);return s||[]}async function Sn(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&hn(n.auth,s,t);const{email:o}=await ft(n.auth,s);o!==e.email&&await e.reload()}async function kn(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&hn(r.auth,o,n);const{email:a}=await gt(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t){return U(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ie(r,Cn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function xn(e,t){return Rn((0,i.m9)(e),t,null)}function Nn(e,t){return Rn((0,i.m9)(e),null,t)}async function Rn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ie(e,ct(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=ne(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new On(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new Ln(s,i);case"github.com":return new Mn(s,i);case"google.com":return new Fn(s,i);case"twitter.com":return new Un(s,i,e.screenName||null);case"custom":case"anonymous":return new On(s,null);default:return new On(s,r,i)}}class On{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Pn extends On{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Ln extends On{constructor(e,t){super(e,"facebook.com",t)}}class Mn extends Pn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class Fn extends On{constructor(e,t){super(e,"google.com",t)}}class Un extends Pn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Vn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Dn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jn{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new jn("enroll",e,t)}static _fromMfaPendingCredential(e){return new jn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return jn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return jn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=ze(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>cn._fromServerResponse(n,e)));T(r.mfaPendingCredential,n,"internal-error");const s=jn._fromMfaPendingCredential(r.mfaPendingCredential);return new Bn(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Gt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Gt._forOperation(t.user,t.operationType,o);default:w(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function qn(e,t){var n;const r=(0,i.m9)(e),s=t;return T(t.customData.operationType,r,"argument-error"),T(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),Bn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function $n(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Gn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Kn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Wn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class Hn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>cn._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Hn(e)}async getSession(){return jn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,r=await this.getSession(),i=await ie(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await ie(this.user,Wn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const Qn=new WeakMap;function Yn(e){const t=(0,i.m9)(e);return Qn.has(t)||Qn.set(t,Hn._fromUser(t)),Qn.get(t)}const Jn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jn,"1"),this.storage.removeItem(Jn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){const e=(0,i.z$)();return Se(e)||Re(e)}const er=1e3,tr=10;class nr extends Xn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zn()&&Me(),this.fallbackToPolling=Le(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Pe()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,tr):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),er)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nr.type="LOCAL";const rr=nr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Xn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ir.type="SESSION";const sr=ir;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ar(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await or(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cr(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar.receivers=[];class ur{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=cr("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){return window}function hr(e){lr().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return"undefined"!==typeof lr()["WorkerGlobalScope"]&&"function"===typeof lr()["importScripts"]}async function fr(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function pr(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function mr(){return dr()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="firebaseLocalStorageDb",yr=1,vr="firebaseLocalStorage",wr="fbase_key";class _r{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function br(e,t){return e.transaction([vr],t?"readwrite":"readonly").objectStore(vr)}function Ir(){const e=indexedDB.deleteDatabase(gr);return new _r(e).toPromise()}function Er(){const e=indexedDB.open(gr,yr);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(vr,{keyPath:wr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(vr)?t(n):(n.close(),await Ir(),t(await Er()))}))}))}async function Tr(e,t,n){const r=br(e,!0).put({[wr]:t,value:n});return new _r(r).toPromise()}async function Sr(e,t){const n=br(e,!1).get(t),r=await new _r(n).toPromise();return void 0===r?null:r.value}function kr(e,t){const n=br(e,!0).delete(t);return new _r(n).toPromise()}const Cr=800,Ar=3;class xr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Er()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Ar)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ar._getInstance(mr()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await fr(),!this.activeServiceWorker)return;this.sender=new ur(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&pr()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Er();return await Tr(e,Jn,"1"),await kr(e,Jn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Tr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Sr(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>kr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=br(e,!1).getAll();return new _r(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Cr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}xr.type="LOCAL";const Nr=xr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function Dr(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}function Or(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=500,Lr=6e4,Mr=1e12;class Fr{constructor(e){this.auth=e,this.counter=Mr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Ur(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Mr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Mr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Mr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Ur{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Vr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Lr)}),Pr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Vr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=We("rcb"),Br=new D(3e4,6e4),qr="https://www.google.com/recaptcha/api.js?";class zr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=lr().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return T($r(t),e,"argument-error"),this.shouldResolveImmediately(t)&&G(lr().grecaptcha)?Promise.resolve(lr().grecaptcha):new Promise(((n,r)=>{const s=lr().setTimeout((()=>{r(_(e,"network-request-failed"))}),Br.get());lr()[jr]=()=>{lr().clearTimeout(s),delete lr()[jr];const i=lr().grecaptcha;if(!i||!G(i))return void r(_(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${qr}?${(0,i.xO)({onload:jr,render:"explicit",hl:t})}`;Ke(o).catch((()=>{clearTimeout(s),r(_(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=lr().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function $r(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Gr{async load(e){return new Fr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="recaptcha",Wr={theme:"light",type:"image"};class Hr{constructor(e,t,n=Object.assign({},Wr)){this.parameters=n,this.type=Kr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ze(e),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof t?document.getElementById(t):t;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Gr:new zr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=lr()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(A()&&!dr(),this.auth,"internal-error"),await Qr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await H(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Qr(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=At._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Jr(e,t,n){const r=ze(e),s=await ei(r,t,(0,i.m9)(n));return new Yr(s,(e=>nn(r,e)))}async function Xr(e,t,n){const r=(0,i.m9)(e);await Zt(!1,r,"phone");const s=await ei(r.auth,t,(0,i.m9)(n));return new Yr(s,(e=>rn(r,e)))}async function Zr(e,t,n){const r=(0,i.m9)(e),s=await ei(r.auth,t,(0,i.m9)(n));return new Yr(s,(e=>sn(r,e)))}async function ei(e,t,n){var r;const i=await n.verify();try{let s;if(T("string"===typeof i,e,"argument-error"),T(n.type===Kr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await zn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const o=await Rr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Et(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function ti(e,t){await Xt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.providerId=ni.PROVIDER_ID,this.auth=ze(e)}verifyPhoneNumber(e,t){return ei(this.auth,e,(0,i.m9)(t))}static credential(e,t){return At._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ni.credentialFromTaggedObject(t)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?At._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ri(e,t){return t?ve(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni.PROVIDER_ID="phone",ni.PHONE_SIGN_IN_METHOD="phone";class ii extends ot{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _t(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _t(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _t(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function si(e){return tn(e.auth,new ii(e),e.bypassAuthState)}function oi(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),en(n,new ii(e),e.bypassAuthState)}async function ai(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Xt(n,new ii(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return si;case"linkViaPopup":case"linkViaRedirect":return ai;case"reauthViaPopup":case"reauthViaRedirect":return oi;default:w(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new D(2e3,1e4);async function li(e,t,n){const r=ze(e);I(e,t,Ot);const i=ri(r,n),s=new fi(r,"signInViaPopup",t,i);return s.executeNotNull()}async function hi(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,Ot);const s=ri(r.auth,n),o=new fi(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function di(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,Ot);const s=ri(r.auth,n),o=new fi(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class fi extends ci{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=cr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(_(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,ui.get())};e()}}fi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pi="pendingRedirect",mi=new Map;class gi extends ci{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=mi.get(this.auth._key());if(!e){try{const t=await yi(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}mi.set(this.auth._key(),e)}return this.bypassAuthState||mi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function yi(e,t){const n=Ii(t),r=bi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function vi(e,t){return bi(e)._set(Ii(t),"true")}function wi(){mi.clear()}function _i(e,t){mi.set(e._key(),t)}function bi(e){return ve(e._redirectPersistence)}function Ii(e){return be(pi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e,t,n){return Ti(e,t,n)}async function Ti(e,t,n){const r=ze(e);I(e,t,Ot),await r._initializationPromise;const i=ri(r,n);return await vi(i,r),i._openRedirect(r,t,"signInViaRedirect")}function Si(e,t,n){return ki(e,t,n)}async function ki(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,Ot),await r.auth._initializationPromise;const s=ri(r.auth,n);await vi(s,r.auth);const o=await Ri(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function Ci(e,t,n){return Ai(e,t,n)}async function Ai(e,t,n){const r=(0,i.m9)(e);I(r.auth,t,Ot),await r.auth._initializationPromise;const s=ri(r.auth,n);await Zt(!1,r,t.providerId),await vi(s,r.auth);const o=await Ri(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function xi(e,t){return await ze(e)._initializationPromise,Ni(e,t,!1)}async function Ni(e,t,n=!1){const r=ze(e),i=ri(r,t),s=new gi(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Ri(e){const t=cr(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=6e5;class Oi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Mi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Li(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(_(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Di&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pi(e))}saveEventToCache(e){this.cachedEventUids.add(Pi(e)),this.lastProcessedEventTime=Date.now()}}function Pi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Li({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Mi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Li(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(e,t={}){return U(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vi=/^https?/;async function ji(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Fi(e);for(const r of t)try{if(Bi(r))return}catch(n){}w(e,"unauthorized-domain")}function Bi(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Vi.test(n))return!1;if(Ui.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new D(3e4,6e4);function zi(){const e=lr().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function $i(e){return new Promise(((t,n)=>{var r,i,s;function o(){zi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zi(),n(_(e,"network-request-failed"))},timeout:qi.get()})}if(null===(i=null===(r=lr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=lr().gapi)||void 0===s?void 0:s.load)){const t=We("iframefcb");return lr()[t]=()=>{gapi.load?o():n(_(e,"network-request-failed"))},Ke(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Gi=null,e}))}let Gi=null;function Ki(e){return Gi=Gi||$i(e),Gi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new D(5e3,15e3),Hi="__/auth/iframe",Qi="emulator/auth/iframe",Yi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ji=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xi(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Qi):`https://${e.config.authDomain}/${Hi}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Ji.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Zi(e){const t=await Ki(e),n=lr().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:Xi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=_(e,"network-request-failed"),s=lr().setTimeout((()=>{r(i)}),Wi.get());function o(){lr().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ts=500,ns=600,rs="_blank",is="http://localhost";class ss{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function os(e,t,n,r=ts,s=ns){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},es),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=ke(l)?rs:n),Te(l)&&(t=t||is,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Oe(l)&&"_self"!==c)return as(t||"",c),new ss(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new ss(d)}function as(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="__/auth/handler",us="emulator/auth/handler",ls=encodeURIComponent("fac");async function hs(e,t,n,r,o,a){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof Ot){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Pt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];const l=await e._getAppCheckToken(),h=l?`#${ls}=${encodeURIComponent(l)}`:"";return`${ds(e)}?${(0,i.xO)(u).slice(1)}${h}`}function ds({config:e}){return e.emulator?O(e,us):`https://${e.authDomain}/${cs}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="webStorageSupport";class ps{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sr,this._completeRedirectFn=Ni,this._overrideRedirectResult=_i}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await hs(e,t,n,C(),r);return os(e,s,cr())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await hs(e,t,n,C(),r);return hr(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Zi(e),n=new Oi(e);return t.register("authEvent",(t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(fs,{type:fs},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[fs];void 0!==i&&t(!!i),w(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ji(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Le()||Se()||Re()}}const ms=ps;class gs{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S("unexpected MultiFactorSessionType")}}}class ys extends gs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ys(e)}_finalizeEnroll(e,t,n){return $n(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Dr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class vs{constructor(){}static assertion(e){return ys._fromCredential(e)}}vs.FACTOR_ID="phone";class ws{static assertionForEnrollment(e,t){return _s._fromSecret(e,t)}static assertionForSignIn(e,t){return _s._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;T("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Gn(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return bs._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}ws.FACTOR_ID="totp";class _s extends gs{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new _s(t,void 0,e)}static _fromEnrollmentId(e,t){return new _s(t,e)}async _finalizeEnroll(e,t,n){return T("undefined"!==typeof this.secret,e,"argument-error"),Kn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){T(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Or(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class bs{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new bs(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Is(e)||Is(t))&&(r=!0),r&&(Is(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Is(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Is(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Es="@firebase/auth",Ts="1.4.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cs(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fe(e)},u=new qe(r,i,s,c);return et(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=ze(e.getProvider("auth").getImmediate());return(e=>new Ss(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Es,Ts,ks(e)),(0,s.registerVersion)(Es,Ts,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=300;(0,i.Pz)("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xs(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cs("Browser");const Ns=2e3;async function Rs(e,t,n){var r;const{BuildInfo:i}=xs();k(t.sessionId,"AuthEvent did not contain a session ID");const s=await Ms(t.sessionId),o={};return Re()?o["ibi"]=i.packageName:Ae()?o["apn"]=i.packageName:w(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,hs(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function Ds(e){const{BuildInfo:t}=xs(),n={};Re()?n.iosBundleId=t.packageName:Ae()?n.androidPackageName=t.packageName:w(e,"operation-not-supported-in-this-environment"),await Fi(e,n)}function Os(e){const{cordova:t}=xs();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,De()?"_blank":"_system","location=yes"),n(i)}))}))}async function Ps(e,t,n){const{cordova:r}=xs();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(_(e,"redirect-cancelled-by-user"))}),Ns))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),Ae()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function Ls(e){var t,n,r,i,s,o,a,c,u,l;const h=xs();T("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Ms(e){const t=Fs(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function Fs(e){if(k(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=20;class Vs extends Oi{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function js(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:$s(),postBody:null,tenantId:e.tenantId,error:_(e,"no-auth-event")}}function Bs(e,t){return Gs()._set(Ks(e),t)}async function qs(e){const t=await Gs()._get(Ks(e));return t&&await Gs()._remove(Ks(e)),t}function zs(e,t){var n,r;const i=Hs(t);if(i.includes("/__/auth/callback")){const t=Qs(i),s=t["firebaseError"]?Ws(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?_(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function $s(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Us;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Gs(){return ve(rr)}function Ks(e){return be("authEvent",e.config.apiKey,e.name)}function Ws(e){try{return JSON.parse(e)}catch(t){return null}}function Hs(e){const t=Qs(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Qs(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Qs(i)["link"];return s||i||r||n||e}function Qs(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=500;class Js{constructor(){this._redirectPersistence=sr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ni,this._overrideRedirectResult=_i}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Vs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){w(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){Ls(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),wi(),await this._originValidation(e);const s=js(e,n,r);await Bs(e,s);const o=await Rs(e,s,t),a=await Os(o);return Ps(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ds(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=xs(),s=setTimeout((async()=>{await qs(e),t.onEvent(Zs())}),Ys),o=async n=>{clearTimeout(s);const r=await qs(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=zs(r,n["url"])),t.onEvent(i||Zs())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;xs().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Xs=Js;function Zs(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:_("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e,t){ze(e)._logFramework(t)}var to="@firebase/auth-compat",no="0.4.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ro=1e3;function io(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function so(){return"http:"===io()||"https:"===io()}function oo(e=(0,i.z$)()){return!("file:"!==io()&&"ionic:"!==io()&&"capacitor:"!==io()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function ao(){return(0,i.b$)()||(0,i.UG)()}function co(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function uo(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function lo(e=(0,i.z$)()){return co()||uo(e)}function ho(){try{const e=self.localStorage,t=cr();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!lo()||(0,i.hl)()}catch(e){return fo()&&(0,i.hl)()}return!1}function fo(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function po(){return(so()||(0,i.ru)()||oo())&&!ao()&&ho()&&!fo()}function mo(){return oo()&&"undefined"!==typeof document}async function go(){return!!mo()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),ro);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function yo(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={LOCAL:"local",NONE:"none",SESSION:"session"},wo=T,_o="persistence";function bo(e,t){wo(Object.values(vo).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?wo(t!==vo.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?wo(t===vo.NONE,e,"unsupported-persistence-type"):fo()?wo(t===vo.NONE||t===vo.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):wo(t===vo.NONE||ho(),e,"unsupported-persistence-type")}async function Io(e){await e._initializationPromise;const t=To(),n=be(_o,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Eo(e,t){const n=To();if(!n)return[];const r=be(_o,e,t),i=n.getItem(r);switch(i){case vo.NONE:return[_e];case vo.LOCAL:return[Nr,sr];case vo.SESSION:return[sr];default:return[]}}function To(){var e;try{return(null===(e=yo())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=T;class ko{constructor(){this.browserResolver=ve(ms),this.cordovaResolver=ve(Xs),this.underlyingResolver=null,this._redirectPersistence=sr,this._completeRedirectFn=Ni,this._overrideRedirectResult=_i}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return mo()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return So(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await go();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(e){return e.unwrap()}function Ao(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e){return Ro(e)}function No(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new Po(e,qn(e,t))}else if(r){const e=Ro(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function Ro(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return ni.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=Ft;break;case u.FACEBOOK:r=Mt;break;case u.GITHUB:r=Ut;break;case u.TWITTER:r=zt;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?jt._create(n,o):It._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new Lt(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function Do(e,t){return t.catch((t=>{throw t instanceof i.ZR&&No(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:xo(e),additionalUserInfo:Vn(e),user:Lo.getOrCreate(n)}}))}async function Oo(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>Do(e,n.confirm(t))}}class Po{constructor(e,t){this.resolver=t,this.auth=Ao(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Do(Co(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this._delegate=e,this.multiFactor=Yn(e)}static getOrCreate(e){return Lo.USER_MAP.has(e)||Lo.USER_MAP.set(e,new Lo(e)),Lo.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Do(this.auth,rn(this._delegate,e))}async linkWithPhoneNumber(e,t){return Oo(this.auth,Xr(this._delegate,e,t))}async linkWithPopup(e){return Do(this.auth,di(this._delegate,e,ko))}async linkWithRedirect(e){return await Io(ze(this.auth)),Ci(this._delegate,e,ko)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Do(this.auth,sn(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Oo(this.auth,Zr(this._delegate,e,t))}reauthenticateWithPopup(e){return Do(this.auth,hi(this._delegate,e,ko))}async reauthenticateWithRedirect(e){return await Io(ze(this.auth)),Si(this._delegate,e,ko)}sendEmailVerification(e){return Sn(this._delegate,e)}async unlink(e){return await Jt(this._delegate,e),this}updateEmail(e){return xn(this._delegate,e)}updatePassword(e){return Nn(this._delegate,e)}updatePhoneNumber(e){return ti(this._delegate,e)}updateProfile(e){return An(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return kn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Lo.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mo=T;class Fo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Mo(n,"invalid-api-key",{appName:e.name}),Mo(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?ko:void 0;this._delegate=t.initialize({options:{persistence:Vo(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Lo.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){tt(this._delegate,e,t)}applyActionCode(e){return mn(this._delegate,e)}checkActionCode(e){return gn(this._delegate,e)}confirmPasswordReset(e,t){return pn(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Do(this._delegate,vn(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Tn(this._delegate,e)}isSignInWithEmailLink(e){return bn(this._delegate,e)}async getRedirectResult(){Mo(po(),this._delegate,"operation-not-supported-in-this-environment");const e=await xi(this._delegate,ko);return e?Do(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){eo(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=Uo(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=Uo(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return _n(this._delegate,e,t)}sendPasswordResetEmail(e,t){return fn(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(bo(this._delegate,e),e){case vo.SESSION:t=sr;break;case vo.LOCAL:const e=await ve(Nr)._isAvailable();t=e?Nr:rr;break;case vo.NONE:t=_e;break;default:return w("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Do(this._delegate,Wt(this._delegate))}signInWithCredential(e){return Do(this._delegate,nn(this._delegate,e))}signInWithCustomToken(e){return Do(this._delegate,an(this._delegate,e))}signInWithEmailAndPassword(e,t){return Do(this._delegate,wn(this._delegate,e,t))}signInWithEmailLink(e,t){return Do(this._delegate,In(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Oo(this._delegate,Jr(this._delegate,e,t))}async signInWithPopup(e){return Mo(po(),this._delegate,"operation-not-supported-in-this-environment"),Do(this._delegate,li(this._delegate,e,ko))}async signInWithRedirect(e){return Mo(po(),this._delegate,"operation-not-supported-in-this-environment"),await Io(this._delegate),Ei(this._delegate,e,ko)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return yn(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function Uo(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&Lo.getOrCreate(e));return{next:s,error:t,complete:n}}function Vo(e,t){const n=Eo(e,t);if("undefined"===typeof self||n.includes(Nr)||n.push(Nr),"undefined"!==typeof window)for(const r of[rr,sr])n.includes(r)||n.push(r);return n.includes(_e)||n.push(_e),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fo.Persistence=vo;class jo{constructor(){this.providerId="phone",this._delegate=new ni(Co(r.Z.auth()))}static credential(e,t){return ni.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}jo.PHONE_SIGN_IN_METHOD=ni.PHONE_SIGN_IN_METHOD,jo.PROVIDER_ID=ni.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bo=T;class qo{constructor(e,t,n=r.Z.app()){var i;Bo(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Hr(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="auth-compat";function $o(e){e.INTERNAL.registerComponent(new c.wA(zo,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Fo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:Dt,FacebookAuthProvider:Mt,GithubAuthProvider:Ut,GoogleAuthProvider:Ft,OAuthProvider:Lt,SAMLAuthProvider:qt,PhoneAuthProvider:jo,PhoneMultiFactorGenerator:vs,RecaptchaVerifier:qo,TwitterAuthProvider:zt,Auth:Fo,AuthCredential:ot,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(to,no)}$o(r.Z)},476:function(e,t,n){n(4224),n(1121),n(7133);var r,i=n(2661),s=(n(560),n(3429),n(7077)),o=n(7142),a=n(5168),c=n(223),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,_.apply(null,arguments)}function b(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||m(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function k(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",(()=>{}),t),d.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}function R(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return-1!=R().indexOf(e)}function O(e){return O[" "](e),e}function P(e,t){var n=br;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}O[" "]=function(){};var L,M,F=D("Opera"),U=D("Trident")||D("MSIE"),V=D("Edge"),j=V||U,B=D("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),q=-1!=R().toLowerCase().indexOf("webkit")&&!D("Edge");function z(){var e=d.document;return e?e.documentMode:void 0}e:{var $="",G=function(){var e=R();return B?/rv:([^\);]+)(\)|;)/.exec(e):V?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):q?/WebKit\/(\S+)/.exec(e):F?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(G&&($=G?G[1]:""),U){var K=z();if(null!=K&&K>parseFloat($)){L=String(K);break e}}L=$}if(d.document&&U){var W=z();M=W||(parseInt(L,10)||void 0)}else M=void 0;var H=M;function Q(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{O(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Q.$.h.call(this)}}I(Q,A);var Y={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),X=0;function Z(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function ee(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function te(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ne(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function re(e){const t={};for(const n in e)t[n]=e[n];return t}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function se(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ie.length;t++)n=ie[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function oe(e){this.src=e,this.g={},this.h=0}function ae(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ee(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ce(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}oe.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ce(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Z(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ue="closure_lm_"+(1e6*Math.random()|0),le={};function he(e,t,n,r,i){if(r&&r.once)return pe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)he(e,t[s],n,r,i);return null}return n=be(n),e&&e[J]?e.O(t,n,p(r)?!!r.capture:!!r,i):de(e,t,n,!1,r,i)}function de(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=we(e);if(a||(e[ue]=a=new oe(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=fe(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)x||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ye(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function fe(){function e(n){return t.call(e.src,e.listener,n)}const t=ve;return e}function pe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=be(n),e&&e[J]?e.P(t,n,p(r)?!!r.capture:!!r,i):de(e,t,n,!0,r,i)}function me(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=be(n),e&&e[J]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ce(s,n,r,i),-1<n&&(ee(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=we(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ce(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[J])ae(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ye(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=we(t))?(ae(n,e),0==n.h&&(n.src=null,t[ue]=null)):ee(e)}}}function ye(e){return e in le?le[e]:le[e]="on"+e}function ve(e,t){if(e.fa)e=!0;else{t=new Q(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ge(e),e=n.call(r,t)}return e}function we(e){return e=e[ue],e instanceof oe?e:null}var _e="__closure_events_fn_"+(1e9*Math.random()>>>0);function be(e){return"function"===typeof e?e:(e[_e]||(e[_e]=function(t){return e.handleEvent(t)}),e[_e])}function Ie(){E.call(this),this.i=new oe(this),this.S=this,this.J=null}function Ee(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var i=t;t=new A(r,e),se(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Te(o,r,!0,t)&&i}if(o=t.g=e,i=Te(o,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Te(o,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ae(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(Ie,E),Ie.prototype[J]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){me(this,e,t,n,r)},Ie.prototype.N=function(){if(Ie.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ee(n[r]);delete t.g[e],t.h--}}this.J=null},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Se=d.JSON.stringify;class ke{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ce(){var e=Le;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ae{constructor(){this.h=this.g=null}add(e,t){const n=xe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var xe=new ke((()=>new Ne),(e=>e.reset()));class Ne{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Re(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function De(e){d.setTimeout((()=>{throw e}),0)}let Oe,Pe=!1,Le=new Ae,Me=()=>{const e=d.Promise.resolve(void 0);Oe=()=>{e.then(Fe)}};var Fe=()=>{for(var e;e=Ce();){try{e.h.call(e.g)}catch(n){De(n)}var t=xe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Pe=!1};function Ue(e,t){Ie.call(this),this.h=e||1,this.g=t||d,this.j=_(this.qb,this),this.l=Date.now()}function Ve(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function je(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Be(e){e.g=je((()=>{e.g=null,e.i&&(e.i=!1,Be(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(Ue,Ie),r=Ue.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ee(this,"tick"),this.ga&&(Ve(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ue.$.N.call(this),Ve(this),delete this.g};class qe extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){E.call(this),this.h=e,this.g={}}I(ze,E);var $e=[];function Ge(e,t,n,r){Array.isArray(n)||(n&&($e[0]=n.toString()),n=$e);for(var i=0;i<n.length;i++){var s=he(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ke(e){te(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function We(){this.g=!0}function He(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Qe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Xe(e,n)+(r?" "+r:"")}))}function Je(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Xe(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Se(n)}catch(a){return t}}ze.prototype.N=function(){ze.$.N.call(this),Ke(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},We.prototype.Ea=function(){this.g=!1},We.prototype.info=function(){};var Ze={},et=null;function tt(){return et=et||new Ie}function nt(e){A.call(this,Ze.Ta,e)}function rt(e){const t=tt();Ee(t,new nt(t))}function it(e,t){A.call(this,Ze.STAT_EVENT,e),this.stat=t}function st(e){const t=tt();Ee(t,new it(t,e))}function ot(e,t){A.call(this,Ze.Ua,e),this.size=t}function at(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}Ze.Ta="serverreachability",I(nt,A),Ze.STAT_EVENT="statevent",I(it,A),Ze.Ua="timingevent",I(ot,A);var ct={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ut={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lt(){}function ht(e){return e.h||(e.h=e.i())}function dt(){}lt.prototype.h=null;var ft,pt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mt(){A.call(this,"d")}function gt(){A.call(this,"c")}function yt(){}function vt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new ze(this),this.P=_t,e=j?125:void 0,this.V=new Ue(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}I(mt,A),I(gt,A),I(yt,lt),yt.prototype.g=function(){return new XMLHttpRequest},yt.prototype.i=function(){return{}},ft=new yt;var _t=45e3,bt={},It={};function Et(e,t,n){e.L=1,e.v=Gt(jt(t)),e.s=n,e.S=!0,Tt(e,null)}function Tt(e,t){e.G=Date.now(),At(e),e.A=jt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),sn(n.i,"t",r),e.C=0,n=e.l.J,e.h=new wt,e.g=lr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new qe(_(e.Pa,e,e.g),e.O)),Ge(e.U,e.g,"readystatechange",e.nb),t=e.I?re(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),rt(),He(e.j,e.u,e.A,e.m,e.W,e.s)}function St(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function kt(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Ct(e,n),r==It){4==t&&(e.o=4,st(14),i=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==bt){e.o=4,st(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ye(e.j,e.m,r,null),Ot(e,r)}St(e)&&r!=It&&r!=bt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,st(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nr(t),t.M=!0,st(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),Rt(e))}function Ct(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?It:(n=Number(t.substring(n,r)),isNaN(n)?bt:(r+=1,r+n>t.length?It:(t=t.slice(r,r+n),e.C=r+n,t)))}function At(e){e.Y=Date.now()+e.P,xt(e,e.P)}function xt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=at(_(e.lb,e),t)}function Nt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Rt(e){0==e.l.H||e.J||sr(e.l,e)}function Dt(e){Nt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ve(e.V),Ke(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ot(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||fn(n.i,e)))if(!e.K&&fn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;ir(n),Wn(n)}tr(n),st(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=at(_(n.ib,n),6e3));if(1>=dn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else ar(n,11)}else if((e.K||n.g==e)&&ir(n),!N(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(pn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,$t(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=ur(r,r.J?r.pa:null,r.Y),o.K){mn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Nt(a),At(a)),r.g=o}else er(r);0<n.j.length&&Qn(n)}else"stop"!=u[0]&&"close"!=u[0]||ar(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ar(n,7):Kn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}rt(4)}catch(u){}}function Pt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Lt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Mt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Lt(e),r=Pt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=vt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Vn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=Vn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(3!=l||j||this.g&&(this.h.h||this.g.ja()||jn(this.g)))){this.J||4!=l||7==t||rt(8==t||0>=h?3:2),Nt(this);var n=this.g.da();this.ca=n;t:if(St(this)){var r=jn(this.g);e="";var i=r.length,s=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Dt(this),Rt(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,st(12),Dt(this),Rt(this);break e}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ot(this,n)}this.S?(kt(this,l,o),j&&this.i&&3==l&&(Ge(this.U,this.V,"tick",this.mb),this.V.start())):(Ye(this.j,this.m,o,null),Ot(this,o)),4==l&&Dt(this),this.i&&!this.J&&(4==l?sr(this.l,this):(this.i=!1,At(this)))}else Bn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,st(12)):(this.o=0,st(13)),Dt(this),Rt(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=Vn(this.g),t=this.g.ja();this.C<t.length&&(Nt(this),kt(this,e,t),this.i&&4!=e&&At(this))}},r.cancel=function(){this.J=!0,Dt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Je(this.j,this.A),2!=this.L&&(rt(),st(17)),Dt(this),this.o=2,Rt(this)):xt(this,this.Y-e)};var Ft=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ut(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Vt){this.h=e.h,Bt(this,e.j),this.s=e.s,this.g=e.g,qt(this,e.m),this.l=e.l;var t=e.i,n=new en;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),zt(this,n),this.o=e.o}else e&&(t=String(e).match(Ft))?(this.h=!1,Bt(this,t[1]||"",!0),this.s=Kt(t[2]||""),this.g=Kt(t[3]||"",!0),qt(this,t[4]),this.l=Kt(t[5]||"",!0),zt(this,t[6]||"",!0),this.o=Kt(t[7]||"")):(this.h=!1,this.i=new en(null,this.h))}function jt(e){return new Vt(e)}function Bt(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zt(e,t,n){t instanceof en?(e.i=t,an(e.i,e.h)):(n||(t=Wt(t,Xt)),e.i=new en(t,e.h))}function $t(e,t,n){e.i.set(t,n)}function Gt(e){return $t(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Wt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Ht),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ht(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Vt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Wt(t,Qt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Wt(t,Qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Wt(n,"/"==n.charAt(0)?Jt:Yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Wt(n,Zt)),e.join("")};var Qt=/[#\/\?@]/g,Yt=/[#\?:]/g,Jt=/[#\?]/g,Xt=/[#\?@]/g,Zt=/#/g;function en(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tn(e){e.g||(e.g=new Map,e.h=0,e.i&&Ut(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function nn(e,t){tn(e),t=on(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rn(e,t){return tn(e),t=on(e,t),e.g.has(t)}function sn(e,t,n){nn(e,t),0<n.length&&(e.i=null,e.g.set(on(e,t),k(n)),e.h+=n.length)}function on(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function an(e,t){t&&!e.j&&(tn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(nn(this,t),sn(this,n,e))}),e)),e.j=t}r=en.prototype,r.add=function(e,t){tn(this),this.i=null,e=on(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){tn(this);let t=[];if("string"===typeof e)rn(this,e)&&(t=t.concat(this.g.get(on(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return tn(this),this.i=null,e=on(this,e),rn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var cn=class{constructor(e,t){this.g=e,this.map=t}};function un(e){this.l=e||ln,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ln=10;function hn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function dn(e){return e.h?1:e.g?e.g.size:0}function fn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function pn(e,t){e.g?e.g.add(t):e.h=t}function mn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return k(e.i)}un.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var yn=class{stringify(e){return d.JSON.stringify(e,void 0)}parse(e){return d.JSON.parse(e,void 0)}};function vn(){this.g=new yn}function wn(e,t,n){const r=n||"";try{Mt(e,(function(e,n){let i=e;p(e)&&(i=Se(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function _n(e,t){const n=new We;if(d.Image){const r=new Image;r.onload=b(bn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=b(bn,n,r,"TestLoadImage: error",!1,t),r.onabort=b(bn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=b(bn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function bn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function In(e){this.l=e.ec||null,this.j=e.ob||!1}function En(e,t){Ie.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}I(In,lt),In.prototype.g=function(){return new En(this.l,this.j)},In.prototype.i=function(e){return function(){return e}}({}),I(En,Ie);var Tn=0;function Sn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function kn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cn(e)}function Cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=En.prototype,r.open=function(e,t){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||d).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kn(this)),this.readyState=Tn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?kn(this):Cn(this),3==this.readyState&&Sn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,kn(this))},r.Ya=function(e){this.g&&(this.response=e,kn(this))},r.ka=function(){this.g&&kn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var An=d.JSON.parse;function xn(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nn,this.L=this.M=!1}I(xn,Ie);var Nn="",Rn=/^https?$/i,Dn=["POST","PUT"];function On(e){return U&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Pn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ln(e),Fn(e)}function Ln(e){e.F||(e.F=!0,Ee(e,"complete"),Ee(e,"error"))}function Mn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Vn(e)||2!=e.da()))if(e.v&&4==Vn(e))je(e.La,0,e);else if(Ee(e,"readystatechange"),4==Vn(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Ft)[1]||null;!i&&d.self&&d.self.location&&(i=d.self.location.protocol.slice(0,-1)),r=!Rn.test(i?i.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var s=2<Vn(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Ln(e)}}finally{Fn(e)}}}function Fn(e,t){if(e.g){Un(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ee(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Un(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Vn(e){return e.g?e.g.readyState:0}function jn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Nn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Jr){return null}}function Bn(e){const t={};e=(e.g&&2<=Vn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(N(e[r]))continue;var n=Re(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}ne(t,(function(e){return e.join(", ")}))}function qn(e){let t="";return te(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):$t(e,t,n))}function $n(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Gn(e){this.Ga=0,this.j=[],this.l=new We,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$n("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$n("baseRetryDelayMs",5e3,e),this.hb=$n("retryDelaySeedMs",1e4,e),this.eb=$n("forwardChannelMaxRetries",2,e),this.xa=$n("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new un(e&&e.concurrentRequestLimit),this.Ja=new vn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Kn(e){if(Hn(e),3==e.H){var t=e.W++,n=jt(e.I);if($t(n,"SID",e.K),$t(n,"RID",t),$t(n,"TYPE","terminate"),Xn(e,n),t=new vt(e,e.l,t),t.L=2,t.v=Gt(jt(n)),n=!1,d.navigator&&d.navigator.sendBeacon)try{n=d.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=lr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),At(t)}cr(e)}function Wn(e){e.g&&(nr(e),e.g.cancel(),e.g=null)}function Hn(e){Wn(e),e.u&&(d.clearTimeout(e.u),e.u=null),ir(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Qn(e){if(!hn(e.i)&&!e.m){e.m=!0;var t=e.Na;Oe||Me(),Pe||(Oe(),Pe=!0),Le.add(t,e),e.C=0}}function Yn(e,t){return!(dn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=at(_(e.Na,e,t),or(e,e.C)),e.C++,!0))}function Jn(e,t){var n;n=t?t.m:e.W++;const r=jt(e.I);$t(r,"SID",e.K),$t(r,"RID",n),$t(r,"AID",e.V),Xn(e,r),e.o&&e.s&&zn(r,e.o,e.s),n=new vt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Zn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),pn(e.i,n),Et(n,r,t)}function Xn(e,t){e.na&&te(e.na,(function(e,n){$t(t,n,e)})),e.h&&Mt({},(function(e,n){$t(t,n,e)}))}function Zn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?_(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{wn(a,e,"req"+n+"_")}catch(gs){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function er(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Oe||Me(),Pe||(Oe(),Pe=!0),Le.add(t,e),e.A=0}}function tr(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=at(_(e.Ma,e),or(e,e.A)),e.A++,!0)}function nr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function rr(e){e.g=new vt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=jt(e.wa);$t(t,"RID","rpc"),$t(t,"SID",e.K),$t(t,"AID",e.V),$t(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&$t(t,"TO",e.qa),$t(t,"TYPE","xmlhttp"),Xn(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Gt(jt(t)),n.s=null,n.S=!0,Tt(n,e)}function ir(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function sr(e,t){var n=null;if(e.g==t){ir(e),nr(e),e.g=null;var r=2}else{if(!fn(e.i,t))return;n=t.F,mn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=tt(),Ee(r,new ot(r,n)),Qn(e)}else er(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Yn(e,t)||2==r&&tr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ar(e,5);break;case 4:ar(e,10);break;case 3:ar(e,6);break;default:ar(e,2)}}function or(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ar(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=_(e.pb,e);n||(n=new Vt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Bt(n,"https"),Gt(n)),_n(n.toString(),r)}else st(2);e.H=0,e.h&&e.h.za(t),cr(e),Hn(e)}function cr(e){if(e.H=0,e.ma=[],e.h){const t=gn(e.i);0==t.length&&0==e.j.length||(C(e.ma,t),C(e.ma,e.j),e.i.i.length=0,k(e.j),e.j.length=0),e.h.ya()}}function ur(e,t,n){var r=n instanceof Vt?jt(n):new Vt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),qt(r,r.m);else{var i=d.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Vt(null);r&&Bt(s,r),t&&(s.g=t),i&&qt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&$t(r,n,t),$t(r,"VER",e.ra),Xn(e,r),r}function lr(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new xn(new In({ob:!0})):new xn(e.va),t.Oa(e.J),t}function hr(){}function dr(){if(U&&!(10<=Number(H)))throw Error("Environmental error: no available transport.")}function fr(e,t){Ie.call(this),this.g=new Gn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gr(this)}function pr(e){mt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mr(){gt.call(this),this.status=1}function gr(e){this.g=e}function yr(){this.blockSize=-1}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function wr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function _r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=xn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ft.g(),this.C=this.u?ht(this.u):ht(ft),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Pn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=d.FormData&&e instanceof d.FormData,!(0<=S(Dn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Un(this),0<this.B&&((this.L=On(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=je(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Pn(this,s)}},r.ua=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),Fn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),xn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Mn(this):this.kb())},r.kb=function(){Mn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),An(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Gn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new vt(this,this.l,e);let s=this.s;if(this.U&&(s?(s=re(s),se(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zn(this,i,t),n=jt(this.I),$t(n,"RID",e),$t(n,"CVER",22),this.F&&$t(n,"X-HTTP-Session-Id",this.F),Xn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(qn(s)))+"&"+t:this.o&&zn(n,this.o,s)),pn(this.i,i),this.bb&&$t(n,"TYPE","init"),this.P?($t(n,"$req",t),$t(n,"SID","null"),i.aa=!0,Et(i,n,null)):Et(i,n,t),this.H=2}}else 3==this.H&&(e?Jn(this,e):0==this.j.length||hn(this.i)||Jn(this))},r.Ma=function(){if(this.u=null,rr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=at(_(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,st(10),Wn(this),rr(this))},r.ib=function(){null!=this.v&&(this.v=null,Wn(this),tr(this),st(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),st(2)):(this.l.info("Failed to ping google.com"),st(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=hr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},dr.prototype.g=function(e,t){return new fr(e,t)},I(fr,Ie),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;st(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ur(e,null,e.Y),Qn(e)},fr.prototype.close=function(){Kn(this.g)},fr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Se(e),e=n);t.j.push(new cn(t.fb++,e)),3==t.H&&Qn(t)},fr.prototype.N=function(){this.g.h=null,delete this.j,Kn(this.g),delete this.g,fr.$.N.call(this)},I(pr,mt),I(mr,gt),I(gr,hr),gr.prototype.Ba=function(){Ee(this.g,"a")},gr.prototype.Aa=function(e){Ee(this.g,new pr(e))},gr.prototype.za=function(e){Ee(this.g,new mr)},gr.prototype.ya=function(){Ee(this.g,"b")},I(vr,yr),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)wr(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){wr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){wr(this,r),i=0;break}}this.h=i,this.i+=t},vr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var br={};function Ir(e){return-128<=e&&128>e?P(e,(function(e){return new _r([0|e],0>e?-1:0)})):new _r([0|e],0>e?-1:0)}function Er(e){if(isNaN(e)||!isFinite(e))return kr;if(0>e)return Rr(Er(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Sr;return new _r(t,0)}function Tr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Rr(Tr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(t,8)),r=kr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Er(Math.pow(t,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Sr=4294967296,kr=Ir(0),Cr=Ir(1),Ar=Ir(16777216);function xr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Nr(e){return-1==e.h}function Rr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new _r(n,~e.h).add(Cr)}function Dr(e,t){return e.add(Rr(t))}function Or(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Pr(e,t){this.g=e,this.h=t}function Lr(e,t){if(xr(t))throw Error("division by zero");if(xr(e))return new Pr(kr,kr);if(Nr(e))return t=Lr(Rr(e),t),new Pr(Rr(t.g),Rr(t.h));if(Nr(t))return t=Lr(e,Rr(t)),new Pr(Rr(t.g),t.h);if(30<e.g.length){if(Nr(e)||Nr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=t;0>=r.X(e);)n=Mr(n),r=Mr(r);var i=Fr(n,1),s=Fr(r,1);for(r=Fr(r,2),n=Fr(n,2);!xr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Fr(r,1),n=Fr(n,1)}return t=Dr(e,i.R(t)),new Pr(i,t)}for(i=kr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(t);Nr(o)||0<o.X(e);)n-=r,s=Er(n),o=s.R(t);xr(s)&&(s=Cr),i=i.add(s),e=Dr(e,o)}return new Pr(i,e)}function Mr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new _r(n,e.h)}function Fr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new _r(i,e.h)}r=_r.prototype,r.ea=function(){if(Nr(this))return-Rr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Sr+r)*t,t*=Sr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(xr(this))return"0";if(Nr(this))return"-"+Rr(this).toString(e);for(var t=Er(Math.pow(e,6)),n=this,r="";;){var i=Lr(n,t).g;n=Dr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,xr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Dr(this,e),Nr(e)?-1:xr(e)?0:1},r.abs=function(){return Nr(this)?Rr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _r(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(xr(this)||xr(e))return kr;if(Nr(this))return Nr(e)?Rr(this).R(Rr(e)):Rr(Rr(this).R(e));if(Nr(e))return Rr(this.R(Rr(e)));if(0>this.X(Ar)&&0>e.X(Ar))return Er(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Or(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Or(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Or(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Or(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new _r(n,0)},r.gb=function(e){return Lr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new _r(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new _r(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new _r(n,this.h^e.h)},dr.prototype.createWebChannel=dr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,ut.COMPLETE="complete",dt.EventType=pt,pt.OPEN="a",pt.CLOSE="b",pt.ERROR="c",pt.MESSAGE="d",Ie.prototype.listen=Ie.prototype.O,xn.prototype.listenOnce=xn.prototype.P,xn.prototype.getLastError=xn.prototype.Sa,xn.prototype.getLastErrorCode=xn.prototype.Ia,xn.prototype.getStatus=xn.prototype.da,xn.prototype.getResponseJson=xn.prototype.Wa,xn.prototype.getResponseText=xn.prototype.ja,xn.prototype.send=xn.prototype.ha,xn.prototype.setWithCredentials=xn.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,_r.prototype.add=_r.prototype.add,_r.prototype.multiply=_r.prototype.R,_r.prototype.modulo=_r.prototype.gb,_r.prototype.compare=_r.prototype.X,_r.prototype.toNumber=_r.prototype.ea,_r.prototype.toString=_r.prototype.toString,_r.prototype.getBits=_r.prototype.D,_r.fromNumber=Er,_r.fromString=Tr;var Ur=l.createWebChannelTransport=function(){return new dr},Vr=l.getStatEventTarget=function(){return tt()},jr=l.ErrorCode=ct,Br=l.EventType=ut,qr=l.Event=Ze,zr=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$r=l.FetchXmlHttpFactory=In,Gr=l.WebChannel=dt,Kr=l.XhrIo=xn,Wr=l.Md5=vr,Hr=l.Integer=_r;const Qr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yr.UNAUTHENTICATED=new Yr(null),Yr.GOOGLE_CREDENTIALS=new Yr("google-credentials-uid"),Yr.FIRST_PARTY=new Yr("first-party-uid"),Yr.MOCK_USER=new Yr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Jr="10.5.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new a.Yd("@firebase/firestore");function Zr(){return Xr.logLevel}function ei(e){Xr.setLogLevel(e)}function ti(e,...t){if(Xr.logLevel<=a["in"].DEBUG){const n=t.map(ii);Xr.debug(`Firestore (${Jr}): ${e}`,...n)}}function ni(e,...t){if(Xr.logLevel<=a["in"].ERROR){const n=t.map(ii);Xr.error(`Firestore (${Jr}): ${e}`,...n)}}function ri(e,...t){if(Xr.logLevel<=a["in"].WARN){const n=t.map(ii);Xr.warn(`Firestore (${Jr}): ${e}`,...n)}}function ii(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e="Unexpected state"){const t=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+e;throw ni(t),new Error(t)}function oi(e,t){e||si()}function ai(e,t){e||si()}function ci(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class li extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Yr.UNAUTHENTICATED)))}shutdown(){}}class pi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class mi{constructor(e){this.t=e,this.currentUser=Yr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hi,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ti("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ti("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hi)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ti("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(oi("string"==typeof t.accessToken),new di(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oi(null===e||"string"==typeof e),new Yr(e)}}class gi{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Yr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yi{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new gi(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Yr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wi{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&ti("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,ti("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{ti("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):ti("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(oi("string"==typeof e.token),this.R=e.token,new vi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _i(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=_i(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ii(e,t){return e<t?-1:e>t?1:0}function Ei(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function Ti(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new li(ui.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new li(ui.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new li(ui.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new li(ui.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Si.fromMillis(Date.now())}static fromDate(e){return Si.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Si(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ii(this.nanoseconds,e.nanoseconds):Ii(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ki(e)}static min(){return new ki(new Si(0,0))}static max(){return new ki(new Si(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,n){void 0===t?t=0:t>e.length&&si(),void 0===n?n=e.length-t:n>e.length-t&&si(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ci.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ai extends Ci{construct(e,t,n){return new Ai(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new li(ui.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ai(t)}static emptyPath(){return new Ai([])}}const xi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ni extends Ci{construct(e,t,n){return new Ni(e,t,n)}static isValidIdentifier(e){return xi.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ni.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ni(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new li(ui.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new li(ui.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new li(ui.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new li(ui.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ni(t)}static emptyPath(){return new Ni([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.path=e}static fromPath(e){return new Ri(Ai.fromString(e))}static fromName(e){return new Ri(Ai.fromString(e).popFirst(5))}static empty(){return new Ri(Ai.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ai.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ai.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ri(new Ai(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Oi(e){return e.fields.find((e=>2===e.kind))}function Pi(e){return e.fields.filter((e=>2!==e.kind))}Di.UNKNOWN_ID=-1;class Li{constructor(e,t){this.fieldPath=e,this.kind=t}}class Mi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Mi(0,Vi.min())}}function Fi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ki.fromTimestamp(1e9===r?new Si(n+1,0):new Si(n,r));return new Vi(i,Ri.empty(),t)}function Ui(e){return new Vi(e.readTime,e.key,-1)}class Vi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Vi(ki.min(),Ri.empty(),-1)}static max(){return new Vi(ki.max(),Ri.empty(),-1)}}function ji(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ri.comparator(e.documentKey,t.documentKey),0!==n?n:Ii(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(e){if(e.code!==ui.FAILED_PRECONDITION||e.message!==Bi)throw e;ti("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&si(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $i(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $i?t:$i.resolve(t)}catch(e){return $i.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$i.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$i.reject(t)}static resolve(e){return new $i(((t,n)=>{t(e)}))}static reject(e){return new $i(((t,n)=>{n(e)}))}static waitFor(e){return new $i(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=$i.resolve(!1);for(const n of e)t=t.next((e=>e?$i.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new $i(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new $i(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new hi,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Hi(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const n=Zi(t.target.error);this.V.reject(new Hi(e,n))}}static open(e,t,n,r){try{return new Gi(t,e.transaction(r,n))}catch(e){throw new Hi(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(ti("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Yi(t)}}class Ki{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===Ki.S((0,c.z$)())&&ni("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return ti("SimpleDb","Removing database:",e),Ji(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,c.hl)())return!1;if(Ki.C())return!0;const e=(0,c.z$)(),t=Ki.S(e),n=0<t&&t<10,r=Ki.v(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(ti("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Hi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new li(ui.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new li(ui.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Hi(e,r))},r.onupgradeneeded=e=>{ti("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next((()=>{ti("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.O(e);const t=Gi.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.g(),e))).catch((e=>(t.abort(e),$i.reject(e)))).toPromise();return s.catch((()=>{})),await t.m,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(ti("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Wi{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ji(this.k.delete())}}class Hi extends li{constructor(e,t){super(ui.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Qi(e){return"IndexedDbTransactionError"===e.name}class Yi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(ti("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(ti("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ji(n)}add(e){return ti("SimpleDb","ADD",this.store.name,e,e),Ji(this.store.add(e))}get(e){return Ji(this.store.get(e)).next((t=>(void 0===t&&(t=null),ti("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return ti("SimpleDb","DELETE",this.store.name,e),Ji(this.store.delete(e))}count(){return ti("SimpleDb","COUNT",this.store.name),Ji(this.store.count())}W(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new $i(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new $i(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}H(e,t){ti("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.J=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}Y(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Z(e){const t=this.cursor({});return new $i(((n,r)=>{t.onerror=e=>{const t=Zi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new $i(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Wi(i),o=t(i.primaryKey,i.value,s);if(o instanceof $i){const e=o.catch((e=>(s.done(),$i.reject(e))));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}})).next((()=>$i.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ji(e){return new $i(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Zi(e.target.error);n(t)}}))}let Xi=!1;function Zi(e){const t=Ki.S((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new li("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xi||(Xi=!0,setTimeout((()=>{throw e}),0)),e}}return e}class es{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}ee(e){ti("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{ti("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(e){Qi(e)?ti("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await zi(e)}await this.ee(6e4)}))}}class ts{constructor(e,t){this.localStore=e,this.persistence=t}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.ne(t,e)))}ne(e,t){const n=new Set;let r=t,i=!0;return $i.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return ti("IndexBackiller",`Processing collection: ${t}`),this.re(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}re(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.ie(r,n))).next((n=>(ti("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}ie(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Ui(t);ji(r,n)>0&&(n=r)})),new Vi(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function rs(e){return null==e}function is(e){return 0===e&&1/e==-1/0}function ss(e){return"number"==typeof e&&Number.isInteger(e)&&!is(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=cs(t)),t=as(e.get(n),t);return cs(t)}function as(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function cs(e){return e+""}function us(e){const t=e.length;if(oi(t>=2),2===t)return oi(""===e.charAt(0)&&""===e.charAt(1)),Ai.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&si(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:si()}s=t+2}return new Ai(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ns._e=-1;const ls=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e,t){return[e,os(t)]}function ds(e,t,n){return[e,os(t),n]}const fs={},ps=["prefixPath","collectionGroup","readTime","documentId"],ms=["prefixPath","collectionGroup","documentId"],gs=["collectionGroup","readTime","prefixPath","documentId"],ys=["canonicalId","targetId"],vs=["targetId","path"],ws=["path","targetId"],_s=["collectionId","parent"],bs=["indexId","uid"],Is=["uid","sequenceNumber"],Es=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ts=["indexId","uid","orderedDocumentKey"],Ss=["userId","collectionPath","documentId"],ks=["userId","collectionPath","largestBatchId"],Cs=["userId","collectionGroup","largestBatchId"],As=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xs=[...As,"documentOverlays"],Ns=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Rs=Ns,Ds=[...Rs,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends qi{constructor(e,t){super(),this.ae=e,this.currentSequenceNumber=t}}function Ps(e,t){const n=ci(e);return Ki.M(n.ae,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ms(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Fs(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this.comparator=e,this.root=t||js.EMPTY}insert(e,t){return new Us(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,js.BLACK,null,null))}remove(e){return new Us(this.comparator,this.root.remove(e,this.comparator).copy(null,null,js.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vs(this.root,e,this.comparator,!0)}}class Vs{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class js{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:js.RED,this.left=null!=r?r:js.EMPTY,this.right=null!=i?i:js.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new js(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return js.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return js.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,js.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,js.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw si();if(this.right.isRed())throw si();const e=this.left.check();if(e!==this.right.check())throw si();return e+(this.isRed()?0:1)}}js.EMPTY=null,js.RED=!0,js.BLACK=!1,js.EMPTY=new class{constructor(){this.size=0}get key(){throw si()}get value(){throw si()}get color(){throw si()}get left(){throw si()}get right(){throw si()}copy(e,t,n,r,i){return this}insert(e,t,n){return new js(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs{constructor(e){this.comparator=e,this.data=new Us(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qs(this.data.getIterator())}getIteratorFrom(e){return new qs(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Bs))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Bs(this.comparator);return t.data=e,t}}class qs{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function zs(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.fields=e,e.sort(Ni.comparator)}static empty(){return new $s([])}unionWith(e){let t=new Bs(Ni.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new $s(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Gs("Invalid base64 string: "+e):e}}(e);return new Ws(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ws(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ii(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ws.EMPTY_BYTE_STRING=new Ws("");const Hs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qs(e){if(oi(!!e),"string"==typeof e){let t=0;const n=Hs.exec(e);if(oi(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ys(e.seconds),nanos:Ys(e.nanos)}}function Ys(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Js(e){return"string"==typeof e?Ws.fromBase64String(e):Ws.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Zs(e){const t=e.mapValue.fields.__previous_value__;return Xs(t)?Zs(t):t}function eo(e){const t=Qs(e.mapValue.fields.__local_write_time__.timestampValue);return new Si(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class no{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new no("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},io={nullValue:"NULL_VALUE"};function so(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Xs(e)?4:_o(e)?9007199254740991:10:si()}function oo(e,t){if(e===t)return!0;const n=so(e);if(n!==so(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eo(e).isEqual(eo(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Qs(e.timestampValue),r=Qs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Js(e.bytesValue).isEqual(Js(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ys(e.geoPointValue.latitude)===Ys(t.geoPointValue.latitude)&&Ys(e.geoPointValue.longitude)===Ys(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ys(e.integerValue)===Ys(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ys(e.doubleValue),r=Ys(t.doubleValue);return n===r?is(n)===is(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ei(e.arrayValue.values||[],t.arrayValue.values||[],oo);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ls(n)!==Ls(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!oo(n[i],r[i])))return!1;return!0}(e,t);default:return si()}}function ao(e,t){return void 0!==(e.values||[]).find((e=>oo(e,t)))}function co(e,t){if(e===t)return 0;const n=so(e),r=so(t);if(n!==r)return Ii(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ii(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ys(e.integerValue||e.doubleValue),r=Ys(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return uo(e.timestampValue,t.timestampValue);case 4:return uo(eo(e),eo(t));case 5:return Ii(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Js(e),r=Js(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Ii(n[i],r[i]);if(0!==e)return e}return Ii(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ii(Ys(e.latitude),Ys(t.latitude));return 0!==n?n:Ii(Ys(e.longitude),Ys(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=co(n[i],r[i]);if(e)return e}return Ii(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ro.mapValue&&t===ro.mapValue)return 0;if(e===ro.mapValue)return 1;if(t===ro.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Ii(r[o],s[o]);if(0!==e)return e;const t=co(n[r[o]],i[s[o]]);if(0!==t)return t}return Ii(r.length,s.length)}(e.mapValue,t.mapValue);default:throw si()}}function uo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ii(e,t);const n=Qs(e),r=Qs(t),i=Ii(n.seconds,r.seconds);return 0!==i?i:Ii(n.nanos,r.nanos)}function lo(e){return ho(e)}function ho(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Qs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Js(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Ri.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ho(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ho(e.fields[i])}`;return n+"}"}(e.mapValue):si()}function fo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function po(e){return!!e&&"integerValue"in e}function mo(e){return!!e&&"arrayValue"in e}function go(e){return!!e&&"nullValue"in e}function yo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function vo(e){return!!e&&"mapValue"in e}function wo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ms(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=wo(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=wo(e.arrayValue.values[n]);return t}return Object.assign({},e)}function _o(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function bo(e){return"nullValue"in e?io:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?fo(no.empty(),Ri.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:si()}function Io(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?fo(no.empty(),Ri.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?ro:si()}function Eo(e,t){const n=co(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function To(e,t){const n=co(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.value=e}static empty(){return new So({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!vo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(t)}setAll(e){let t=Ni.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=wo(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());vo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return oo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];vo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ms(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new So(wo(this.value))}}function ko(e){const t=[];return Ms(e.fields,((e,n)=>{const r=new Ni([e]);if(vo(n)){const e=ko(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new $s(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Co{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Co(e,0,ki.min(),ki.min(),ki.min(),So.empty(),0)}static newFoundDocument(e,t,n,r){return new Co(e,1,t,ki.min(),n,r,0)}static newNoDocument(e,t){return new Co(e,2,t,ki.min(),ki.min(),So.empty(),0)}static newUnknownDocument(e,t){return new Co(e,3,t,ki.min(),ki.min(),So.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ki.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=So.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=So.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ki.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Co&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Co(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this.position=e,this.inclusive=t}}function xo(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ri.comparator(Ri.fromName(o.referenceValue),n.key):co(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function No(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!oo(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t="asc"){this.field=e,this.dir=t}}function Do(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{}class Po extends Oo{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new $o(e,t,n):"array-contains"===t?new Ho(e,n):"in"===t?new Qo(e,n):"not-in"===t?new Yo(e,n):"array-contains-any"===t?new Jo(e,n):new Po(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Go(e,n):new Ko(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(co(t,this.value)):null!==t&&so(this.value)===so(t)&&this.matchesComparison(co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return si()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lo extends Oo{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new Lo(e,t)}matches(e){return Mo(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Mo(e){return"and"===e.op}function Fo(e){return"or"===e.op}function Uo(e){return Vo(e)&&Mo(e)}function Vo(e){for(const t of e.filters)if(t instanceof Lo)return!1;return!0}function jo(e){if(e instanceof Po)return e.field.canonicalString()+e.op.toString()+lo(e.value);if(Uo(e))return e.filters.map((e=>jo(e))).join(",");{const t=e.filters.map((e=>jo(e))).join(",");return`${e.op}(${t})`}}function Bo(e,t){return e instanceof Po?function(e,t){return t instanceof Po&&e.op===t.op&&e.field.isEqual(t.field)&&oo(e.value,t.value)}(e,t):e instanceof Lo?function(e,t){return t instanceof Lo&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Bo(n,t.filters[r])),!0)}(e,t):void si()}function qo(e,t){const n=e.filters.concat(t);return Lo.create(n,e.op)}function zo(e){return e instanceof Po?function(e){return`${e.field.canonicalString()} ${e.op} ${lo(e.value)}`}(e):e instanceof Lo?function(e){return e.op.toString()+" {"+e.getFilters().map(zo).join(" ,")+"}"}(e):"Filter"}class $o extends Po{constructor(e,t,n){super(e,t,n),this.key=Ri.fromName(n.referenceValue)}matches(e){const t=Ri.comparator(e.key,this.key);return this.matchesComparison(t)}}class Go extends Po{constructor(e,t){super(e,"in",t),this.keys=Wo("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ko extends Po{constructor(e,t){super(e,"not-in",t),this.keys=Wo("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wo(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ri.fromName(e.referenceValue)))}class Ho extends Po{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mo(t)&&ao(t.arrayValue,this.value)}}class Qo extends Po{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ao(this.value.arrayValue,t)}}class Yo extends Po{constructor(e,t){super(e,"not-in",t)}matches(e){if(ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ao(this.value.arrayValue,t)}}class Jo extends Po{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ao(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function Zo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Xo(e,t,n,r,i,s,o)}function ea(e){const t=ci(e);if(null===t.ce){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>jo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),rs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>lo(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>lo(e))).join(",")),t.ce=e}return t.ce}function ta(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Do(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Bo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!No(e.startAt,t.startAt)&&No(e.endAt,t.endAt)}function na(e){return Ri.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ra(e,t){return e.filters.filter((e=>e instanceof Po&&e.field.isEqual(t)))}function ia(e,t,n){let r=io,i=!0;for(const s of ra(e,t)){let e=io,t=!0;switch(s.op){case"<":case"<=":e=bo(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=io}Eo({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Eo({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function sa(e,t,n){let r=ro,i=!0;for(const s of ra(e,t)){let e=ro,t=!0;switch(s.op){case">=":case">":e=Io(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=ro}To({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];To({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function aa(e,t,n,r,i,s,o,a){return new oa(e,t,n,r,i,s,o,a)}function ca(e){return new oa(e)}function ua(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function la(e){return null!==e.collectionGroup}function ha(e){const t=ci(e);if(null===t.le){t.le=[];const e=new Set;for(const i of t.explicitOrderBy)t.le.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Bs(Ni.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.le.push(new Ro(r,n))})),e.has(Ni.keyField().canonicalString())||t.le.push(new Ro(Ni.keyField(),n))}return t.le}function da(e){const t=ci(e);return t.he||(t.he=fa(t,ha(e))),t.he}function fa(e,t){if("F"===e.limitType)return Zo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Ro(e.field,t)}));const n=e.endAt?new Ao(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ao(e.startAt.position,e.startAt.inclusive):null;return Zo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function pa(e,t){const n=e.filters.concat([t]);return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ma(e,t,n){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ga(e,t){return ta(da(e),da(t))&&e.limitType===t.limitType}function ya(e){return`${ea(da(e))}|lt:${e.limitType}`}function va(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>zo(e))).join(", ")}]`),rs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>lo(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>lo(e))).join(",")),`Target(${t})`}(da(e))}; limitType=${e.limitType})`}function wa(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ri.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of ha(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,ha(e),t))&&!(e.endAt&&!function(e,t,n){const r=xo(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,ha(e),t))}(e,t)}function _a(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ba(e){return(t,n)=>{let r=!1;for(const i of ha(e)){const e=Ia(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ia(e,t,n){const r=e.field.isKeyField()?Ri.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?co(r,i):si()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return si()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Fs(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Us(Ri.comparator);function Sa(){return Ta}const ka=new Us(Ri.comparator);function Ca(...e){let t=ka;for(const n of e)t=t.insert(n.key,n);return t}function Aa(e){let t=ka;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function xa(){return Ra()}function Na(){return Ra()}function Ra(){return new Ea((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Da=new Us(Ri.comparator),Oa=new Bs(Ri.comparator);function Pa(...e){let t=Oa;for(const n of e)t=t.add(n);return t}const La=new Bs(Ii);function Ma(){return La}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(t)?"-0":t}}function Ua(e){return{integerValue:""+e}}function Va(e,t){return ss(t)?Ua(t):Fa(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this._=void 0}}function Ba(e,t,n){return e instanceof $a?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Xs(t)&&(t=Zs(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ga?Ka(e,t):e instanceof Wa?Ha(e,t):function(e,t){const n=za(e,t),r=Ya(n)+Ya(e.Ie);return po(n)&&po(e.Ie)?Ua(r):Fa(e.serializer,r)}(e,t)}function qa(e,t,n){return e instanceof Ga?Ka(e,t):e instanceof Wa?Ha(e,t):n}function za(e,t){return e instanceof Qa?function(e){return po(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class $a extends ja{}class Ga extends ja{constructor(e){super(),this.elements=e}}function Ka(e,t){const n=Ja(t);for(const r of e.elements)n.some((e=>oo(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Wa extends ja{constructor(e){super(),this.elements=e}}function Ha(e,t){let n=Ja(t);for(const r of e.elements)n=n.filter((e=>!oo(e,r)));return{arrayValue:{values:n}}}class Qa extends ja{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ya(e){return Ys(e.integerValue||e.doubleValue)}function Ja(e){return mo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.field=e,this.transform=t}}function Za(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ga&&t instanceof Ga||e instanceof Wa&&t instanceof Wa?Ei(e.elements,t.elements,oo):e instanceof Qa&&t instanceof Qa?oo(e.Ie,t.Ie):e instanceof $a&&t instanceof $a}(e.transform,t.transform)}class ec{constructor(e,t){this.version=e,this.transformResults=t}}class tc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tc}static exists(e){return new tc(void 0,e)}static updateTime(e){return new tc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class rc{}function ic(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new pc(e.key,tc.none()):new uc(e.key,e.data,tc.none());{const n=e.data,r=So.empty();let i=new Bs(Ni.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new lc(e.key,r,new $s(i.toArray()),tc.none())}}function sc(e,t,n){e instanceof uc?function(e,t,n){const r=e.value.clone(),i=dc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof lc?function(e,t,n){if(!nc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=dc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(hc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function oc(e,t,n,r){return e instanceof uc?function(e,t,n,r){if(!nc(e.precondition,t))return n;const i=e.value.clone(),s=fc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof lc?function(e,t,n,r){if(!nc(e.precondition,t))return n;const i=fc(e.fieldTransforms,r,t),s=t.data;return s.setAll(hc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return nc(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ac(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=za(r.transform,e||null);null!=i&&(null===n&&(n=So.empty()),n.set(r.field,i))}return n||null}function cc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Ei(e,t,((e,t)=>Za(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class uc extends rc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class lc extends rc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function hc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function dc(e,t,n){const r=new Map;oi(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,qa(o,a,n[i]))}return r}function fc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ba(e,s,t))}return r}class pc extends rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mc extends rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&sc(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=oc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=oc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Na();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=ic(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ki.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pa())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,((e,t)=>cc(e,t)))&&Ei(this.baseMutations,e.baseMutations,((e,t)=>cc(e,t)))}}class yc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){oi(e.mutations.length===n.length);let r=function(){return Da}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new yc(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wc{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _c,bc;function Ic(e){switch(e){default:return si();case ui.CANCELLED:case ui.UNKNOWN:case ui.DEADLINE_EXCEEDED:case ui.RESOURCE_EXHAUSTED:case ui.INTERNAL:case ui.UNAVAILABLE:case ui.UNAUTHENTICATED:return!1;case ui.INVALID_ARGUMENT:case ui.NOT_FOUND:case ui.ALREADY_EXISTS:case ui.PERMISSION_DENIED:case ui.FAILED_PRECONDITION:case ui.ABORTED:case ui.OUT_OF_RANGE:case ui.UNIMPLEMENTED:case ui.DATA_LOSS:return!0}}function Ec(e){if(void 0===e)return ni("GRPC error has no .code"),ui.UNKNOWN;switch(e){case _c.OK:return ui.OK;case _c.CANCELLED:return ui.CANCELLED;case _c.UNKNOWN:return ui.UNKNOWN;case _c.DEADLINE_EXCEEDED:return ui.DEADLINE_EXCEEDED;case _c.RESOURCE_EXHAUSTED:return ui.RESOURCE_EXHAUSTED;case _c.INTERNAL:return ui.INTERNAL;case _c.UNAVAILABLE:return ui.UNAVAILABLE;case _c.UNAUTHENTICATED:return ui.UNAUTHENTICATED;case _c.INVALID_ARGUMENT:return ui.INVALID_ARGUMENT;case _c.NOT_FOUND:return ui.NOT_FOUND;case _c.ALREADY_EXISTS:return ui.ALREADY_EXISTS;case _c.PERMISSION_DENIED:return ui.PERMISSION_DENIED;case _c.FAILED_PRECONDITION:return ui.FAILED_PRECONDITION;case _c.ABORTED:return ui.ABORTED;case _c.OUT_OF_RANGE:return ui.OUT_OF_RANGE;case _c.UNIMPLEMENTED:return ui.UNIMPLEMENTED;case _c.DATA_LOSS:return ui.DATA_LOSS;default:return si()}}(bc=_c||(_c={}))[bc.OK=0]="OK",bc[bc.CANCELLED=1]="CANCELLED",bc[bc.UNKNOWN=2]="UNKNOWN",bc[bc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",bc[bc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",bc[bc.NOT_FOUND=5]="NOT_FOUND",bc[bc.ALREADY_EXISTS=6]="ALREADY_EXISTS",bc[bc.PERMISSION_DENIED=7]="PERMISSION_DENIED",bc[bc.UNAUTHENTICATED=16]="UNAUTHENTICATED",bc[bc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",bc[bc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",bc[bc.ABORTED=10]="ABORTED",bc[bc.OUT_OF_RANGE=11]="OUT_OF_RANGE",bc[bc.UNIMPLEMENTED=12]="UNIMPLEMENTED",bc[bc.INTERNAL=13]="INTERNAL",bc[bc.UNAVAILABLE=14]="UNAVAILABLE",bc[bc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Tc=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new Hr([4294967295,4294967295],0);function Cc(e){const t=Sc().encode(e),n=new Wr;return n.update(t),new Uint8Array(n.digest())}function Ac(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class xc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Nc(`Invalid padding: ${t}`);if(n<0)throw new Nc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Nc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Nc(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Hr.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(Hr.fromNumber(n)));return 1===r.compare(kc)&&(r=new Hr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=Cc(e),[n,r]=Ac(t);for(let i=0;i<this.hashCount;i++){const e=this.de(n,r,i);if(!this.Ae(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new xc(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Te)return;const t=Cc(e),[n,r]=Ac(t);for(let i=0;i<this.hashCount;i++){const e=this.de(n,r,i);this.Re(e)}}Re(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Nc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Dc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Rc(ki.min(),r,new Us(Ii),Sa(),Pa())}}class Dc{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Dc(n,t,Pa(),Pa(),Pa())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class Pc{constructor(e,t){this.targetId=e,this.fe=t}}class Lc{constructor(e,t,n=Ws.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Mc{constructor(){this.ge=0,this.pe=Vc(),this.ye=Ws.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Pa(),t=Pa(),n=Pa();return this.pe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:si()}})),new Dc(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=Vc()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Fc{constructor(e){this.Le=e,this.ke=new Map,this.qe=Sa(),this.Qe=Uc(),this.Ke=new Us(Ii)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,(t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:si()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach(((e,n)=>{this.je(n)&&t(n)}))}Je(e){const t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){const i=r.target;if(na(i))if(0===n){const e=new Ri(i.path);this.We(t,e,Co.newNoDocument(e,ki.min()))}else oi(1===n);else{const r=this.Ze(t);if(r!==n){const n=this.Xe(e),i=n?this.et(n,e,r):1;if(0!==i){this.He(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}null==Tc||Tc.tt(function(e,t,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.fe,this.Le.nt(),n,i))}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=Js(n).toUint8Array()}catch(e){if(e instanceof Gs)return ri("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new xc(s,r,i)}catch(e){return ri(e instanceof Nc?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Te?null:o}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)})),r}it(e){const t=new Map;this.ke.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&na(i.target)){const t=new Ri(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,Co.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}}));let n=Pa();this.Qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.qe.forEach(((t,n)=>n.setReadTime(e)));const r=new Rc(e,t,this.Ke,this.qe,n);return this.qe=Sa(),this.Qe=Uc(),this.Ke=new Us(Ii),r}Ue(e,t){if(!this.je(e))return;const n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Mc,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new Bs(Ii),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||ti("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Mc),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Uc(){return new Us(Ri.comparator)}function Vc(){return new Us(Ri.comparator)}const jc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Bc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),qc=(()=>{const e={and:"AND",or:"OR"};return e})();class zc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $c(e,t){return e.useProto3Json||rs(t)?t:{value:t}}function Gc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Kc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Wc(e,t){return Gc(e,t.toTimestamp())}function Hc(e){return oi(!!e),ki.fromTimestamp(function(e){const t=Qs(e);return new Si(t.seconds,t.nanos)}(e))}function Qc(e,t){return function(e){return new Ai(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Yc(e){const t=Ai.fromString(e);return oi(Iu(t)),t}function Jc(e,t){return Qc(e.databaseId,t.path)}function Xc(e,t){const n=Yc(t);if(n.get(1)!==e.databaseId.projectId)throw new li(ui.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new li(ui.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ri(nu(n))}function Zc(e,t){return Qc(e.databaseId,t)}function eu(e){const t=Yc(e);return 4===t.length?Ai.emptyPath():nu(t)}function tu(e){return new Ai(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nu(e){return oi(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ru(e,t,n){return{name:Jc(e,t),fields:n.value.mapValue.fields}}function iu(e,t,n){const r=Xc(e,t.name),i=Hc(t.updateTime),s=t.createTime?Hc(t.createTime):ki.min(),o=new So({mapValue:{fields:t.fields}}),a=Co.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function su(e,t){return"found"in t?function(e,t){oi(!!t.found),t.found.name,t.found.updateTime;const n=Xc(e,t.found.name),r=Hc(t.found.updateTime),i=t.found.createTime?Hc(t.found.createTime):ki.min(),s=new So({mapValue:{fields:t.found.fields}});return Co.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){oi(!!t.missing),oi(!!t.readTime);const n=Xc(e,t.missing),r=Hc(t.readTime);return Co.newNoDocument(n,r)}(e,t):si()}function ou(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:si()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(oi(void 0===t||"string"==typeof t),Ws.fromBase64String(t||"")):(oi(void 0===t||t instanceof Uint8Array),Ws.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ui.UNKNOWN:Ec(e.code);return new li(t,e.message||"")}(o);n=new Lc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xc(e,r.document.name),s=Hc(r.document.updateTime),o=r.document.createTime?Hc(r.document.createTime):ki.min(),a=new So({mapValue:{fields:r.document.fields}}),c=Co.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Oc(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Xc(e,r.document),s=r.readTime?Hc(r.readTime):ki.min(),o=Co.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Oc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Xc(e,r.document),s=r.removedTargetIds||[];n=new Oc([],s,i,null)}else{if(!("filter"in t))return si();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new wc(r,i),o=e.targetId;n=new Pc(o,s)}}return n}function au(e,t){let n;if(t instanceof uc)n={update:ru(e,t.key,t.value)};else if(t instanceof pc)n={delete:Jc(e,t.key)};else if(t instanceof lc)n={update:ru(e,t.key,t.data),updateMask:bu(t.fieldMask)};else{if(!(t instanceof mc))return si();n={verify:Jc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof $a)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ga)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Wa)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Qa)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw si()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Wc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:si()}(e,t.precondition)),n}function cu(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?tc.updateTime(Hc(e.updateTime)):void 0!==e.exists?tc.exists(e.exists):tc.none()}(t.currentDocument):tc.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)oi("REQUEST_TIME"===t.setToServerValue),n=new $a;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Ga(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Wa(e)}else"increment"in t?n=new Qa(e,t.increment):si();const r=Ni.fromServerFormat(t.fieldPath);return new Xa(r,n)}(e,t))):[];if(t.update){t.update.name;const i=Xc(e,t.update.name),s=new So({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new $s(t.map((e=>Ni.fromServerFormat(e))))}(t.updateMask);return new lc(i,s,e,n,r)}return new uc(i,s,n,r)}if(t.delete){const r=Xc(e,t.delete);return new pc(r,n)}if(t.verify){const r=Xc(e,t.verify);return new mc(r,n)}return si()}function uu(e,t){return e&&e.length>0?(oi(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Hc(e.updateTime):Hc(t);return n.isEqual(ki.min())&&(n=Hc(t)),new ec(n,e.transformResults||[])}(e,t)))):[]}function lu(e,t){return{documents:[Zc(e,t.path)]}}function hu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Zc(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Zc(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return _u(Lo.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:vu(e.field),direction:mu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=$c(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function du(e){let t=eu(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oi(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=pu(e);return t instanceof Lo&&Uo(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new Ro(wu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,rs(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ao(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ao(n,t)}(n.endAt)),aa(t,i,o,s,a,"F",c,u)}function fu(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return si()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function pu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=wu(e.unaryFilter.field);return Po.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=wu(e.unaryFilter.field);return Po.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=wu(e.unaryFilter.field);return Po.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=wu(e.unaryFilter.field);return Po.create(i,"!=",{nullValue:"NULL_VALUE"});default:return si()}}(e):void 0!==e.fieldFilter?function(e){return Po.create(wu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return si()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Lo.create(e.compositeFilter.filters.map((e=>pu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return si()}}(e.compositeFilter.op))}(e):si()}function mu(e){return jc[e]}function gu(e){return Bc[e]}function yu(e){return qc[e]}function vu(e){return{fieldPath:e.canonicalString()}}function wu(e){return Ni.fromServerFormat(e.fieldPath)}function _u(e){return e instanceof Po?function(e){if("=="===e.op){if(yo(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NAN"}};if(go(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(yo(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NOT_NAN"}};if(go(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vu(e.field),op:gu(e.op),value:e.value}}}(e):e instanceof Lo?function(e){const t=e.getFilters().map((e=>_u(e)));return 1===t.length?t[0]:{compositeFilter:{op:yu(e.op),filters:t}}}(e):si()}function bu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Iu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,t,n,r,i=ki.min(),s=ki.min(),o=Ws.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Eu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Eu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Eu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Eu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.ut=e}}function Su(e,t){let n;if(t.document)n=iu(e.ut,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Ri.fromSegments(t.noDocument.path),r=xu(t.noDocument.readTime);n=Co.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return si();{const e=Ri.fromSegments(t.unknownDocument.path),r=xu(t.unknownDocument.version);n=Co.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Si(e[0],e[1]);return ki.fromTimestamp(t)}(t.readTime)),n}function ku(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Cu(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Jc(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Gc(e,t.version.toTimestamp()),createTime:Gc(e,t.createTime.toTimestamp())}}(e.ut,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Au(t.version)};else{if(!t.isUnknownDocument())return si();r.unknownDocument={path:n.path.toArray(),version:Au(t.version)}}return r}function Cu(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Au(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function xu(e){const t=new Si(e.seconds,e.nanoseconds);return ki.fromTimestamp(t)}function Nu(e,t){const n=(t.baseMutations||[]).map((t=>cu(e.ut,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>cu(e.ut,t))),i=Si.fromMillis(t.localWriteTimeMs);return new gc(t.batchId,i,n,r)}function Ru(e){const t=xu(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?xu(e.lastLimboFreeSnapshotVersion):ki.min();let r;return r=function(e){return void 0!==e.documents}(e.query)?function(e){return oi(1===e.documents.length),da(ca(eu(e.documents[0])))}(e.query):function(e){return da(du(e))}(e.query),new Eu(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Ws.fromBase64String(e.resumeToken))}function Du(e,t){const n=Au(t.snapshotVersion),r=Au(t.lastLimboFreeSnapshotVersion);let i;i=na(t.target)?lu(e.ut,t.target):hu(e.ut,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ea(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ou(e){const t=du({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ma(t,t.limit,"L"):t}function Pu(e,t){return new vc(t.largestBatchId,cu(e.ut,t.overlayMutation))}function Lu(e,t){const n=t.path.lastSegment();return[e,os(t.path.popLast()),n]}function Mu(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Au(r.readTime),documentKey:os(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{getBundleMetadata(e,t){return Uu(e).get(t).next((e=>{if(e)return function(e){return{id:e.bundleId,createTime:xu(e.createTime),version:e.version}}(e)}))}saveBundleMetadata(e,t){return Uu(e).put(function(e){return{bundleId:e.id,createTime:Au(Hc(e.createTime)),version:e.version}}(t))}getNamedQuery(e,t){return Vu(e).get(t).next((e=>{if(e)return function(e){return{name:e.name,query:Ou(e.bundledQuery),readTime:xu(e.readTime)}}(e)}))}saveNamedQuery(e,t){return Vu(e).put(function(e){return{name:e.name,readTime:Au(Hc(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Uu(e){return Ps(e,"bundles")}function Vu(e){return Ps(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.serializer=e,this.userId=t}static ct(e,t){const n=t.uid||"";return new ju(e,n)}getOverlay(e,t){return Bu(e).get(Lu(this.userId,t)).next((e=>e?Pu(this.serializer,e):null))}getOverlays(e,t){const n=xa();return $i.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new vc(t,i);r.push(this.lt(e,s))})),$i.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(os(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Bu(e).H("collectionPathOverlayIndex",r))})),$i.waitFor(i)}getOverlaysForCollection(e,t,n){const r=xa(),i=os(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Bu(e).W("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Pu(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=xa();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Bu(e).Y({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Pu(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}lt(e,t){return Bu(e).put(function(e,t,n){const[r,i,s]=Lu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:au(e.ut,n.mutation)}}(this.serializer,this.userId,t))}}function Bu(e){return Ps(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(Ys(e.integerValue));else if("doubleValue"in e){const n=Ys(e.doubleValue);isNaN(n)?this.Tt(t,13):(this.Tt(t,15),is(n)?t.Et(0):t.Et(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Tt(t,20),"string"==typeof n?t.dt(n):(t.dt(`${n.seconds||""}`),t.Et(n.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(Js(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Tt(t,45),t.Et(n.latitude||0),t.Et(n.longitude||0)}else"mapValue"in e?_o(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):si()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){const n=e.fields||{};this.Tt(t,55);for(const r of Object.keys(n))this.At(r,t),this.Pt(n[r],t)}yt(e,t){const n=e.values||[];this.Tt(t,50);for(const r of n)this.Pt(r,t)}ft(e,t){this.Tt(t,37),Ri.fromName(e).path.forEach((e=>{this.Tt(t,60),this.wt(e,t)}))}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}function zu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function $u(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=zu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}qu.St=new qu;class Gu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Dt(n.value),n=t.next();this.Ct()}vt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Dt(e);else if(e<2048)this.Dt(960|e>>>6),this.Dt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Dt(480|e>>>12),this.Dt(128|63&e>>>6),this.Dt(128|63&e);else{const e=t.codePointAt(0);this.Dt(240|e>>>18),this.Dt(128|63&e>>>12),this.Dt(128|63&e>>>6),this.Dt(128|63&e)}}this.Ct()}Ot(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ft(e);else if(e<2048)this.Ft(960|e>>>6),this.Ft(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ft(480|e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e);else{const e=t.codePointAt(0);this.Ft(240|e>>>18),this.Ft(128|63&e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e)}}this.Mt()}Nt(e){const t=this.Bt(e),n=$u(t);this.Lt(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}kt(e){const t=this.Bt(e),n=$u(t);this.Lt(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Dt(e){const t=255&e;0===t?(this.Qt(0),this.Qt(255)):255===t?(this.Qt(255),this.Qt(0)):this.Qt(t)}Ft(e){const t=255&e;0===t?(this.$t(0),this.$t(255)):255===t?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Ku{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class Wu{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class Hu{constructor(){this.Wt=new Gu,this.Gt=new Ku(this.Wt),this.zt=new Wu(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return 0===e?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ht(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Qu(this.indexId,this.documentKey,this.arrayValue,n)}}function Yu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Ju(e.arrayValue,t.arrayValue),0!==n?n:(n=Ju(e.directionalValue,t.directionalValue),0!==n?n:Ri.comparator(e.documentKey,t.documentKey)))}function Ju(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){this.Jt=new Bs(((e,t)=>Ni.comparator(e.field,t.field))),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const e=t;e.isInequality()?this.Jt=this.Jt.add(e):this.Zt.push(e)}}get Xt(){return this.Jt.size>1}en(e){if(oi(e.collectionGroup===this.collectionId),this.Xt)return!1;const t=Oi(e);if(void 0!==t&&!this.tn(t))return!1;const n=Pi(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.tn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Jt.size>0){const e=this.Jt.getIterator().getNext();if(!r.has(e.field.canonicalString())){const t=n[i];if(!this.nn(e,t)||!this.rn(this.Yt[s++],t))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.Yt.length||!this.rn(this.Yt[s++],e))return!1}return!0}sn(){if(this.Xt)return null;let e=new Bs(Ni.comparator);const t=[];for(const n of this.Zt)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new Li(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Li(n.field,0))}for(const n of this.Yt)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Li(n.field,"asc"===n.dir?0:1)));return new Di(Di.UNKNOWN_ID,this.collectionId,t,Mi.empty())}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(e){var t,n;if(oi(e instanceof Po||e instanceof Lo),e instanceof Po){if(e instanceof Qo){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>Po.create(e.field,"==",t))))||[];return Lo.create(r,"or")}return e}const r=e.filters.map((e=>Zu(e)));return Lo.create(r,e.op)}function el(e){if(0===e.getFilters().length)return[];const t=il(Zu(e));return oi(rl(t)),tl(t)||nl(t)?[t]:t.getFilters()}function tl(e){return e instanceof Po}function nl(e){return e instanceof Lo&&Uo(e)}function rl(e){return tl(e)||nl(e)||function(e){if(e instanceof Lo&&Fo(e)){for(const t of e.getFilters())if(!tl(t)&&!nl(t))return!1;return!0}return!1}(e)}function il(e){if(oi(e instanceof Po||e instanceof Lo),e instanceof Po)return e;if(1===e.filters.length)return il(e.filters[0]);const t=e.filters.map((e=>il(e)));let n=Lo.create(t,e.op);return n=al(n),rl(n)?n:(oi(n instanceof Lo),oi(Mo(n)),oi(n.filters.length>1),n.filters.reduce(((e,t)=>sl(e,t))))}function sl(e,t){let n;return oi(e instanceof Po||e instanceof Lo),oi(t instanceof Po||t instanceof Lo),n=e instanceof Po?t instanceof Po?function(e,t){return Lo.create([e,t],"and")}(e,t):ol(e,t):t instanceof Po?ol(t,e):function(e,t){if(oi(e.filters.length>0&&t.filters.length>0),Mo(e)&&Mo(t))return qo(e,t.getFilters());const n=Fo(e)?e:t,r=Fo(e)?t:e,i=n.filters.map((e=>sl(e,r)));return Lo.create(i,"or")}(e,t),al(n)}function ol(e,t){if(Mo(t))return qo(t,e.getFilters());{const n=t.filters.map((t=>sl(e,t)));return Lo.create(n,"or")}}function al(e){if(oi(e instanceof Po||e instanceof Lo),e instanceof Po)return e;const t=e.getFilters();if(1===t.length)return al(t[0]);if(Vo(e))return e;const n=t.map((e=>al(e))),r=[];return n.forEach((t=>{t instanceof Po?r.push(t):t instanceof Lo&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Lo.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class cl{constructor(){this.on=new ul}addToCollectionParentIndex(e,t){return this.on.add(t),$i.resolve()}getCollectionParents(e,t){return $i.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return $i.resolve()}deleteFieldIndex(e,t){return $i.resolve()}deleteAllFieldIndexes(e){return $i.resolve()}createTargetIndexes(e,t){return $i.resolve()}getDocumentsMatchingTarget(e,t){return $i.resolve(null)}getIndexType(e,t){return $i.resolve(0)}getFieldIndexes(e,t){return $i.resolve([])}getNextCollectionGroupToUpdate(e){return $i.resolve(null)}getMinOffset(e,t){return $i.resolve(Vi.min())}getMinOffsetFromCollectionGroup(e,t){return $i.resolve(Vi.min())}updateCollectionGroup(e,t,n){return $i.resolve()}updateIndexEntries(e,t){return $i.resolve()}}class ul{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Bs(Ai.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Bs(Ai.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new Uint8Array(0);class hl{constructor(e,t){this.user=e,this.databaseId=t,this._n=new ul,this.an=new Ea((e=>ea(e)),((e,t)=>ta(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this._n.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this._n.add(t)}));const i={collectionId:n,parent:os(r)};return dl(e).put(i)}return $i.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Ti(t),""],!1,!0);return dl(e).W(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(us(r.parent))}return n}))}addFieldIndex(e,t){const n=pl(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=ml(e);return i.next((e=>{n.put(Mu(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=pl(e),r=ml(e),i=fl(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=pl(e),n=fl(e),r=ml(e);return t.H().next((()=>n.H())).next((()=>r.H()))}createTargetIndexes(e,t){return $i.forEach(this.un(t),(t=>this.getIndexType(e,t).next((n=>{if(0===n||1===n){const n=new Xu(t).sn();if(null!=n)return this.addFieldIndex(e,n)}}))))}getDocumentsMatchingTarget(e,t){const n=fl(e);let r=!0;const i=new Map;return $i.forEach(this.un(t),(t=>this.cn(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Pa();const r=[];return $i.forEach(i,((i,s)=>{ti("IndexedDbIndexManager",`Using index ${function(e){return`id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`}(i)} to execute ${ea(t)}`);const o=function(e,t){const n=Oi(t);if(void 0===n)return null;for(const r of ra(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),a=function(e,t){const n=new Map;for(const r of Pi(t))for(const t of ra(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),c=function(e,t){const n=[];let r=!0;for(const i of Pi(t)){const t=0===i.kind?ia(e,i.fieldPath,e.startAt):sa(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Ao(n,r)}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Pi(t)){const t=0===i.kind?sa(e,i.fieldPath,e.endAt):ia(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Ao(n,r)}(s,i),l=this.ln(i,s,c),h=this.ln(i,s,u),d=this.hn(i,s,a),f=this.Pn(i.indexId,o,l,c.inclusive,h,u.inclusive,d);return $i.forEach(f,(i=>n.j(i,t.limit).next((t=>{t.forEach((t=>{const n=Ri.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return $i.resolve(null)}))}un(e){let t=this.an.get(e);return t||(t=0===e.filters.length?[e]:el(Lo.create(e.filters,"and")).map((t=>Zo(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.an.set(e,t),t)}Pn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.In(t[l/c]):ll,h=this.Tn(e,a,n[l%c],r),d=this.En(e,a,i[l%c],s),f=o.map((t=>this.Tn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}Tn(e,t,n,r){const i=new Qu(e,Ri.empty(),t,n);return r?i:i.Ht()}En(e,t,n,r){const i=new Qu(e,Ri.empty(),t,n);return r?i.Ht():i}cn(e,t){const n=new Xu(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.en(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.un(t);return $i.forEach(r,(t=>this.cn(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Bs(Ni.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}dn(e,t){const n=new Hu;for(const r of Pi(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.jt(r.kind);qu.St.ht(e,i)}return n.Ut()}In(e){const t=new Hu;return qu.St.ht(e,t.jt(0)),t.Ut()}An(e,t){const n=new Hu;return qu.St.ht(fo(this.databaseId,t),n.jt(function(e){const t=Pi(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Ut()}hn(e,t,n){if(null===n)return[];let r=[];r.push(new Hu);let i=0;for(const s of Pi(e)){const e=n[i++];for(const n of r)if(this.Rn(t,s.fieldPath)&&mo(e))r=this.Vn(r,s,e);else{const t=n.jt(s.kind);qu.St.ht(e,t)}}return this.mn(r)}ln(e,t,n){return this.hn(e,t,n.position)}mn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Ut();return t}Vn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Hu;n.seed(e.Ut()),qu.St.ht(s,n.jt(t.kind)),i.push(n)}return i}Rn(e,t){return!!e.filters.find((e=>e instanceof Po&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=pl(e),r=ml(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next((e=>{const t=[];return $i.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Mi(t.sequenceNumber,new Vi(xu(t.readTime),new Ri(us(t.documentKey)),t.largestBatchId)):Mi.empty(),r=e.fields.map((([e,t])=>new Li(Ni.fromServerFormat(e),t)));return new Di(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Ii(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=pl(e),i=ml(e);return this.fn(e).next((e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>$i.forEach(t,(t=>i.put(Mu(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return $i.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?$i.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),$i.forEach(i,(n=>this.gn(e,t,n).next((t=>{const i=this.pn(r,n);return t.isEqual(i)?$i.resolve():this.yn(e,r,n,t,i)})))))))}))}wn(e,t,n,r){return fl(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.An(n,t.key),documentKey:t.key.path.toArray()})}Sn(e,t,n,r){return fl(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.An(n,t.key),t.key.path.toArray()])}gn(e,t,n){const r=fl(e);let i=new Bs(Yu);return r.Y({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.An(n,t)])},((e,r)=>{i=i.add(new Qu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}pn(e,t){let n=new Bs(Yu);const r=this.dn(t,e);if(null==r)return n;const i=Oi(t);if(null!=i){const s=e.data.field(i.fieldPath);if(mo(s))for(const i of s.arrayValue.values||[])n=n.add(new Qu(t.indexId,e.key,this.In(i),r))}else n=n.add(new Qu(t.indexId,e.key,ll,r));return n}yn(e,t,n,r,i){ti("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=zs(s),c=zs(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=zs(o)):t?(i(a),a=zs(s)):(a=zs(s),c=zs(o))}}(r,i,Yu,(r=>{s.push(this.wn(e,t,n,r))}),(r=>{s.push(this.Sn(e,t,n,r))})),$i.waitFor(s)}fn(e){let t=1;return ml(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Yu(e,t))).filter(((e,t,n)=>!t||0!==Yu(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Yu(s,e),i=Yu(s,t);if(0===n)r[0]=e.Ht();else if(n>0&&i<0)r.push(s),r.push(s.Ht());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.bn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,ll,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,ll,[]];i.push(IDBKeyRange.bound(e,t))}return i}bn(e,t){return Yu(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(gl)}getMinOffset(e,t){return $i.mapArray(this.un(t),(t=>this.cn(e,t).next((e=>e||si())))).next(gl)}}function dl(e){return Ps(e,"collectionParents")}function fl(e){return Ps(e,"indexEntries")}function pl(e){return Ps(e,"indexConfiguration")}function ml(e){return Ps(e,"indexState")}function gl(e){oi(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;ji(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Vi(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vl{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new vl(e,vl.DEFAULT_COLLECTION_PERCENTILE,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Y({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{oi(1===a)})));const u=[];for(const l of n.mutations){const e=ds(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return $i.waitFor(s).next((()=>u))}function _l(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw si();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vl.DEFAULT_COLLECTION_PERCENTILE=10,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vl.DEFAULT=new vl(41943040,vl.DEFAULT_COLLECTION_PERCENTILE,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vl.DISABLED=new vl(-1,0,0);class bl{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Dn={}}static ct(e,t,n,r){oi(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new bl(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return El(e).Y({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Tl(e),s=El(e);return s.add({}).next((o=>{oi("number"==typeof o);const a=new gc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>au(e.ut,t))),i=n.mutations.map((t=>au(e.ut,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new Bs(((e,t)=>Ii(e.canonicalString(),t.canonicalString())));for(const e of r){const t=ds(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,fs))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Dn[o]=a.keys()})),$i.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return El(e).get(t).next((e=>e?(oi(e.userId===this.userId),Nu(this.serializer,e)):null))}Cn(e,t){return this.Dn[t]?$i.resolve(this.Dn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Dn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return El(e).Y({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(oi(t.batchId>=n),i=Nu(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return El(e).Y({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return El(e).W("userMutationsIndex",t).next((e=>e.map((e=>Nu(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=hs(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Tl(e).Y({range:r},((n,r,s)=>{const[o,a,c]=n,u=us(a);if(o===this.userId&&t.path.isEqual(u))return El(e).get(c).next((e=>{if(!e)throw si();oi(e.userId===this.userId),i.push(Nu(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Bs(Ii);const r=[];return t.forEach((t=>{const i=hs(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Tl(e).Y({range:s},((e,r,i)=>{const[s,o,a]=e,c=us(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),$i.waitFor(r).next((()=>this.vn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=hs(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Bs(Ii);return Tl(e).Y({range:s},((e,t,i)=>{const[s,a,c]=e,u=us(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.vn(e,o)))}vn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(El(e).get(t).next((e=>{if(null===e)throw si();oi(e.userId===this.userId),n.push(Nu(this.serializer,e))})))})),$i.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return wl(e.ae,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Fn(t.batchId)})),$i.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return $i.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[];return Tl(e).Y({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=us(e[1]);r.push(t)}else n.done()})).next((()=>{oi(0===r.length)}))}))}containsKey(e,t){return Il(e,this.userId,t)}Mn(e){return Sl(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Il(e,t,n){const r=hs(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Tl(e).Y({range:s,J:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function El(e){return Ps(e,"mutations")}function Tl(e){return Ps(e,"documentMutations")}function Sl(e){return Ps(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new kl(0)}static Nn(){return new kl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next((t=>{const n=new kl(t.highestTargetId);return t.highestTargetId=n.next(),this.Ln(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Bn(e).next((e=>ki.fromTimestamp(new Si(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Bn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Bn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Ln(e,r))))}addTargetData(e,t){return this.kn(e,t).next((()=>this.Bn(e).next((n=>(n.targetCount+=1,this.qn(t,n),this.Ln(e,n))))))}updateTargetData(e,t){return this.kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Al(e).delete(t.targetId))).next((()=>this.Bn(e))).next((t=>(oi(t.targetCount>0),t.targetCount-=1,this.Ln(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Al(e).Y(((s,o)=>{const a=Ru(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>$i.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Al(e).Y(((e,n)=>{const r=Ru(n);t(r)}))}Bn(e){return xl(e).get("targetGlobalKey").next((e=>(oi(null!==e),e)))}Ln(e,t){return xl(e).put("targetGlobalKey",t)}kn(e,t){return Al(e).put(Du(this.serializer,t))}qn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Bn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ea(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Al(e).Y({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Ru(n);ta(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Nl(e);return t.forEach((t=>{const s=os(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),$i.waitFor(r)}removeMatchingKeys(e,t,n){const r=Nl(e);return $i.forEach(t,(t=>{const i=os(t.path);return $i.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Nl(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Nl(e);let i=Pa();return r.Y({range:n,J:!0},((e,t,n)=>{const r=us(e[1]),s=new Ri(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=os(t.path),r=IDBKeyRange.bound([n],[Ti(n)],!1,!0);let i=0;return Nl(e).Y({index:"documentTargetsIndex",J:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}_t(e,t){return Al(e).get(t).next((e=>e?Ru(e):null))}}function Al(e){return Ps(e,"targets")}function xl(e){return Ps(e,"targetGlobal")}function Nl(e){return Ps(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl([e,t],[n,r]){const i=Ii(e,n);return 0===i?Ii(t,r):i}class Dl{constructor(e){this.Qn=e,this.buffer=new Bs(Rl),this.Kn=0}$n(){return++this.Kn}Un(e){const t=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Rl(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ol{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Wn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return null!==this.Wn}Gn(e){ti("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Qi(e)?ti("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await zi(e)}await this.Gn(3e5)}))}}class Pl{constructor(e,t){this.zn=e,this.params=t}calculateTargetCount(e,t){return this.zn.jn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return $i.resolve(ns._e);const n=new Dl(t);return this.zn.forEachTarget(e,(e=>n.Un(e.sequenceNumber))).next((()=>this.zn.Hn(e,(e=>n.Un(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.zn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ti("LruGarbageCollector","Garbage collection skipped; disabled"),$i.resolve(yl)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(ti("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yl):this.Jn(e,t)))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,t){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(ti("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),Zr()<=a["in"].DEBUG&&ti("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),$i.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}function Ll(e,t){return new Pl(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t){this.db=e,this.garbageCollector=Ll(this,t)}jn(e){const t=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Yn(e){let t=0;return this.Hn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Hn(e,t){return this.Zn(e,((e,n)=>t(n)))}addReference(e,t,n){return Fl(e,n)}removeReference(e,t,n){return Fl(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Fl(e,t)}Xn(e,t){return function(e,t){let n=!1;return Sl(e).Z((r=>Il(e,r,t).next((e=>(e&&(n=!0),$i.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Zn(e,((s,o)=>{if(o<=t){const t=this.Xn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,ki.min()),Nl(e).delete(function(e){return[0,os(e.path)]}(s)))))}));r.push(t)}})).next((()=>$i.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Fl(e,t)}Zn(e,t){const n=Nl(e);let r,i=ns._e;return n.Y({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==ns._e&&t(new Ri(us(r)),i),i=o,r=s):i=ns._e})).next((()=>{i!==ns._e&&t(new Ri(us(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Fl(e,t){return Nl(e).put(function(e,t){return{targetId:0,path:os(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.changes=new Ea((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Co.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?$i.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return zl(e).put(n)}removeEntry(e,t,n){return zl(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Cu(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.er(e,n))))}getEntry(e,t){let n=Co.newInvalidDocument(t);return zl(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only($l(t))},((e,r)=>{n=this.tr(t,r)})).next((()=>n))}nr(e,t){let n={size:0,document:Co.newInvalidDocument(t)};return zl(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only($l(t))},((e,r)=>{n={document:this.tr(t,r),size:_l(r)}})).next((()=>n))}getEntries(e,t){let n=Sa();return this.rr(e,t,((e,t)=>{const r=this.tr(e,t);n=n.insert(e,r)})).next((()=>n))}ir(e,t){let n=Sa(),r=new Us(Ri.comparator);return this.rr(e,t,((e,t)=>{const i=this.tr(e,t);n=n.insert(e,i),r=r.insert(e,_l(t))})).next((()=>({documents:n,sr:r})))}rr(e,t,n){if(t.isEmpty())return $i.resolve();let r=new Bs(Kl);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound($l(r.first()),$l(r.last())),s=r.getIterator();let o=s.getNext();return zl(e).Y({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=Ri.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Kl(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.U($l(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Cu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return zl(e).W(IDBKeyRange.bound(o,a,!0)).next((e=>{null==i||i.incrementDocumentReadCount(e.length);let n=Sa();for(const i of e){const e=this.tr(Ri.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(wa(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=Sa();const s=Gl(t,n),o=Gl(t,Vi.max());return zl(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.tr(Ri.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new Bl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return ql(e).get("remoteDocumentGlobalKey").next((e=>(oi(!!e),e)))}er(e,t){return ql(e).put("remoteDocumentGlobalKey",t)}tr(e,t){if(t){const e=Su(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(ki.min()))return e}return Co.newInvalidDocument(e)}}function jl(e){return new Vl(e)}class Bl extends Ul{constructor(e,t){super(),this._r=e,this.trackRemovals=t,this.ar=new Ea((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Bs(((e,t)=>Ii(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.ar.get(i);if(t.push(this._r.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=ku(this._r.serializer,s);r=r.add(i.path.popLast());const c=_l(a);n+=c-o.size,t.push(this._r.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=ku(this._r.serializer,s.convertToNoDocument(ki.min()));t.push(this._r.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this._r.indexManager.addToCollectionParentIndex(e,n))})),t.push(this._r.updateMetadata(e,n)),$i.waitFor(t)}getFromCache(e,t){return this._r.nr(e,t).next((e=>(this.ar.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this._r.ir(e,t).next((({documents:e,sr:t})=>(t.forEach(((t,n)=>{this.ar.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function ql(e){return Ps(e,"remoteDocumentGlobal")}function zl(e){return Ps(e,"remoteDocumentsV14")}function $l(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Gl(e,t){const n=t.documentKey.path.toArray();return[e,Cu(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Kl(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Ii(n[s],r[s]),i)return i;return i=Ii(n.length,r.length),i||(i=Ii(n[n.length-2],r[r.length-2]),i||Ii(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Wl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&oc(n.mutation,e,$s.empty(),Si.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Pa()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Pa()){const r=xa();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ca();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=xa();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Pa())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Sa();const s=Ra(),o=function(){return Ra()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof lc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),oc(o.mutation,t,o.mutation.getFieldMask(),Si.now())):s.set(t.key,$s.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Wl(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ra();let r=new Us(((e,t)=>e-t)),i=Pa();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||$s.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Pa()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Na();c.forEach((e=>{if(!i.has(e)){const r=ic(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return $i.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return Ri.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):la(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):$i.resolve(xa());let o=-1,a=i;return s.next((t=>$i.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?$i.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Pa()))).next((e=>({batchId:o,changes:Aa(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ri(t)).next((e=>{let t=Ca();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Ca();return this.indexManager.getCollectionParents(e,i).next((o=>$i.forEach(o,(o=>{const a=function(e,t){return new oa(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Co.newInvalidDocument(r)))}));let n=Ca();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&oc(s.mutation,r,$s.empty(),Si.now()),wa(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return $i.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Hc(e.createTime)}}(t)),$i.resolve()}getNamedQuery(e,t){return $i.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(e){return{name:e.name,query:Ou(e.bundledQuery),readTime:Hc(e.readTime)}}(t)),$i.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.overlays=new Us(Ri.comparator),this.lr=new Map}getOverlay(e,t){return $i.resolve(this.overlays.get(t))}getOverlays(e,t){const n=xa();return $i.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.lt(e,t,r)})),$i.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.lr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.lr.delete(n)),$i.resolve()}getOverlaysForCollection(e,t,n){const r=xa(),i=t.length+1,s=new Ri(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return $i.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Us(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=xa(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=xa(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return $i.resolve(o)}lt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new vc(t,n));let i=this.lr.get(t);void 0===i&&(i=Pa(),this.lr.set(t,i)),this.lr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.hr=new Bs(Xl.Pr),this.Ir=new Bs(Xl.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const n=new Xl(e,t);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.dr(new Xl(e,t))}Ar(e,t){e.forEach((e=>this.removeReference(e,t)))}Rr(e){const t=new Ri(new Ai([])),n=new Xl(t,e),r=new Xl(t,e+1),i=[];return this.Ir.forEachInRange([n,r],(e=>{this.dr(e),i.push(e.key)})),i}Vr(){this.hr.forEach((e=>this.dr(e)))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new Ri(new Ai([])),n=new Xl(t,e),r=new Xl(t,e+1);let i=Pa();return this.Ir.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Xl(e,0),n=this.hr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Xl{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return Ri.comparator(e.key,t.key)||Ii(e.gr,t.gr)}static Tr(e,t){return Ii(e.gr,t.gr)||Ri.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new Bs(Xl.Pr)}checkEmpty(e){return $i.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new gc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.yr=this.yr.add(new Xl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return $i.resolve(s)}lookupMutationBatch(e,t){return $i.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Sr(n),i=r<0?0:r;return $i.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $i.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return $i.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Xl(t,0),r=new Xl(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([n,r],(e=>{const t=this.wr(e.gr);i.push(t)})),$i.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Bs(Ii);return t.forEach((e=>{const t=new Xl(e,0),r=new Xl(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,r],(e=>{n=n.add(e.gr)}))})),$i.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ri.isDocumentKey(i)||(i=i.child(""));const s=new Xl(new Ri(i),0);let o=new Bs(Ii);return this.yr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.gr)),!0)}),s),$i.resolve(this.br(o))}br(e){const t=[];return e.forEach((e=>{const n=this.wr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){oi(0===this.Dr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return $i.forEach(t.mutations,(r=>{const i=new Xl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.yr=n}))}Fn(e){}containsKey(e,t){const n=new Xl(t,0),r=this.yr.firstAfterOrEqual(n);return $i.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,$i.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.Cr=e,this.docs=function(){return new Us(Ri.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return $i.resolve(n?n.document.mutableCopy():Co.newInvalidDocument(t))}getEntries(e,t){let n=Sa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Co.newInvalidDocument(e))})),$i.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Sa();const s=t.path,o=new Ri(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||ji(Ui(o),n)<=0||(r.has(o.key)||wa(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return $i.resolve(i)}getAllFromCollectionGroup(e,t,n,r){si()}vr(e,t){return $i.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new th(this)}getSize(e){return $i.resolve(this.size)}}class th extends Ul{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this._r.addEntry(e,r)):this._r.removeEntry(n)})),$i.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.persistence=e,this.Fr=new Ea((e=>ea(e)),ta),this.lastRemoteSnapshotVersion=ki.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Jl,this.targetCount=0,this.Nr=kl.On()}forEachTarget(e,t){return this.Fr.forEach(((e,n)=>t(n))),$i.resolve()}getLastRemoteSnapshotVersion(e){return $i.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $i.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),$i.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Mr&&(this.Mr=t),$i.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new kl(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,$i.resolve()}updateTargetData(e,t){return this.kn(t),$i.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,$i.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),$i.waitFor(i).next((()=>r))}getTargetCount(e){return $i.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fr.get(t)||null;return $i.resolve(n)}addMatchingKeys(e,t,n){return this.Or.Er(t,n),$i.resolve()}removeMatchingKeys(e,t,n){this.Or.Ar(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),$i.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),$i.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Or.mr(t);return $i.resolve(n)}containsKey(e,t){return $i.resolve(this.Or.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.Br={},this.overlays={},this.Lr=new ns(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new nh(this),this.indexManager=new cl,this.remoteDocumentCache=function(e){return new eh(e)}((e=>this.referenceDelegate.Qr(e))),this.serializer=new Tu(t),this.Kr=new Ql(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new Zl(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,n){ti("MemoryPersistence","Starting transaction:",e);const r=new ih(this.Lr.next());return this.referenceDelegate.$r(),n(r).next((e=>this.referenceDelegate.Ur(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Wr(e,t){return $i.or(Object.values(this.Br).map((n=>()=>n.containsKey(e,t))))}}class ih extends qi{constructor(e){super(),this.currentSequenceNumber=e}}class sh{constructor(e){this.persistence=e,this.Gr=new Jl,this.zr=null}static jr(e){return new sh(e)}get Hr(){if(this.zr)return this.zr;throw si()}addReference(e,t,n){return this.Gr.addReference(n,t),this.Hr.delete(n.toString()),$i.resolve()}removeReference(e,t,n){return this.Gr.removeReference(n,t),this.Hr.add(n.toString()),$i.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),$i.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach((e=>this.Hr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Hr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $i.forEach(this.Hr,(n=>{const r=Ri.fromPath(n);return this.Jr(e,r).next((e=>{e||t.removeEntry(r,ki.min())}))})).next((()=>(this.zr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Jr(e,t).next((e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())}))}Qr(e){return 0}Jr(e,t){return $i.or([()=>$i.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.serializer=e}N(e,t,n,r){const i=new Gi("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ls,{unique:!0}),e.createObjectStore("documentMutations")}(e),ah(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=$i.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),ah(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ki.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").W().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ls,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return $i.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Zr(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(i))))),n<7&&r>=7&&(s=s.next((()=>this.ei(i)))),n<8&&r>=8&&(s=s.next((()=>this.ti(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.ni(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Ss});t.createIndex("collectionPathOverlayIndex",ks,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Cs,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:ps});t.createIndex("documentKeyIndex",ms),t.createIndex("collectionGroupIndex",gs)}(e))).next((()=>this.ri(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.ii(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:bs}).createIndex("sequenceNumberIndex",Is,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Es}).createIndex("documentKeyIndex",Ts,{unique:!1})}(e)))),s}Xr(e){let t=0;return e.store("remoteDocuments").Y(((e,n)=>{t+=_l(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Zr(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next((t=>$i.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next((n=>$i.forEach(n,(n=>{oi(n.userId===t.userId);const r=Nu(this.serializer,n);return wl(e,t.userId,r).next((()=>{}))}))))}))))}ei(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Y(((n,i)=>{const s=new Ai(n),o=function(e){return[0,os(e)]}(s);r.push(t.get(o).next((n=>n?$i.resolve():(n=>t.put({targetId:0,path:os(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>$i.waitFor(r)))}))}ti(e,t){e.createObjectStore("collectionParents",{keyPath:_s});const n=t.store("collectionParents"),r=new ul,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:os(r)})}};return t.store("remoteDocuments").Y({J:!0},((e,t)=>{const n=new Ai(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Y({J:!0},(([e,t,n],r)=>{const s=us(t);return i(s.popLast())}))))}ni(e){const t=e.store("targets");return t.Y(((e,n)=>{const r=Ru(n),i=Du(this.serializer,r);return t.put(i)}))}ri(e,t){const n=t.store("remoteDocuments"),r=[];return n.Y(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=function(e){return e.document?new Ri(Ai.fromString(e.document.name).popFirst(5)):e.noDocument?Ri.fromSegments(e.noDocument.path):e.unknownDocument?Ri.fromSegments(e.unknownDocument.path):si()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n).path.toArray(),o={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(o))})).next((()=>$i.waitFor(r)))}ii(e,t){const n=t.store("mutations"),r=jl(this.serializer),i=new rh(sh.jr,this.serializer.ut);return n.W().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Pa();Nu(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),$i.forEach(n,((e,n)=>{const s=new Yr(n),o=ju.ct(this.serializer,s),a=i.getIndexManager(s),c=bl.ct(s,this.serializer,a,i.referenceDelegate);return new Hl(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Os(t,ns._e),e).next()}))}))}}function ah(e){e.createObjectStore("targetDocuments",{keyPath:vs}).createIndex("documentTargetsIndex",ws,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ys,{unique:!0}),e.createObjectStore("targetGlobal")}const ch="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class uh{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.si=i,this.window=s,this.document=o,this.oi=c,this._i=u,this.ai=l,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=e=>Promise.resolve(),!uh.D())throw new li(ui.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ml(this,r),this.Ii=t+"main",this.serializer=new Tu(a),this.Ti=new Ki(this.Ii,this.ai,new oh(this.serializer)),this.qr=new Cl(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jl(this.serializer),this.Kr=new Fu,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,!1===u&&ni("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new li(ui.FAILED_PRECONDITION,ch);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.qr.getHighestSequenceNumber(e)))})).then((e=>{this.Lr=new ns(e,this.oi)})).then((()=>{this.kr=!0})).catch((e=>(this.Ti&&this.Ti.close(),Promise.reject(e))))}mi(e){return this.Pi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget((async()=>{this.started&&await this.di()})))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>hh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.fi(e).next((e=>{e||(this.isPrimary=!1,this.si.enqueueRetryable((()=>this.Pi(!1))))}))})).next((()=>this.gi(e))).next((t=>this.isPrimary&&!t?this.pi(e).next((()=>!1)):!!t&&this.yi(e).next((()=>!0)))))).catch((e=>{if(Qi(e))return ti("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ti("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.si.enqueueRetryable((()=>this.Pi(e))),this.isPrimary=e}))}fi(e){return lh(e).get("owner").next((e=>$i.resolve(this.wi(e))))}Si(e){return hh(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ps(e,"clientMetadata");return t.W().next((e=>{const n=this.Ci(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return $i.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Ei)for(const t of e)this.Ei.removeItem(this.vi(t.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.di().then((()=>this.bi())).then((()=>this.Vi()))))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?$i.resolve(!0):lh(e).get("owner").next((t=>{if(null!==t&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)){if(this.wi(t)&&this.networkEnabled)return!0;if(!this.wi(t)){if(!t.allowTabSynchronization)throw new li(ui.FAILED_PRECONDITION,ch);return!1}}return!(!this.networkEnabled||!this.inForeground)||hh(e).W().next((e=>void 0===this.Ci(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&ti("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Os(e,ns._e);return this.pi(t).next((()=>this.Si(t)))})),this.Ti.close(),this.Ni()}Ci(e,t){return e.filter((e=>this.Di(e.updateTimeMs,t)&&!this.Fi(e.clientId)))}Bi(){return this.runTransaction("getActiveClients","readonly",(e=>hh(e).W().next((e=>this.Ci(e,18e5).map((e=>e.clientId))))))}get started(){return this.kr}getMutationQueue(e,t){return bl.ct(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new hl(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return ju.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,t,n){ti("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=function(e){return 15===e?Ds:14===e?Rs:13===e?Ns:12===e?xs:11===e?As:void si()}(this.ai);let s;return this.Ti.runTransaction(e,r,i,(r=>(s=new Os(r,this.Lr?this.Lr.next():ns._e),"readwrite-primary"===t?this.fi(s).next((e=>!!e||this.gi(s))).next((t=>{if(!t)throw ni(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable((()=>this.Pi(!1))),new li(ui.FAILED_PRECONDITION,Bi);return n(s)})).next((e=>this.yi(s).next((()=>e)))):this.Li(s).next((()=>n(s)))))).then((e=>(s.raiseOnCommittedEvent(),e)))}Li(e){return lh(e).get("owner").next((e=>{if(null!==e&&this.Di(e.leaseTimestampMs,5e3)&&!this.Fi(e.ownerId)&&!this.wi(e)&&!(this._i||this.allowTabSynchronization&&e.allowTabSynchronization))throw new li(ui.FAILED_PRECONDITION,ch)}))}yi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return lh(e).put("owner",t)}static D(){return Ki.D()}pi(e){const t=lh(e);return t.get("owner").next((e=>this.wi(e)?(ti("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):$i.resolve()))}Di(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ni(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ai(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ci=()=>{this.si.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.di())))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground="visible"===this.document.visibilityState)}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ui=()=>{this.Mi();const e=/(?:Version|Mobile)\/1[456]/;(0,c.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var t;try{const n=null!==(null===(t=this.Ei)||void 0===t?void 0:t.getItem(this.vi(e)));return ti("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return ni("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){ni("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch(e){}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function lh(e){return Ps(e,"owner")}function hh(e){return Ps(e,"clientMetadata")}function dh(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class fh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.ki=n,this.qi=r}static Qi(e,t){let n=Pa(),r=Pa();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new fh(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.zi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.ji(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new ph;return this.Hi(e,t,n).next((r=>{if(i.result=r,this.$i)return this.Ji(e,t,n,r.size)}))})).next((()=>i.result))}Ji(e,t,n,r){return n.documentReadCount<this.Ui?(Zr()<=a["in"].DEBUG&&ti("QueryEngine","SDK will not create cache indexes for query:",va(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),$i.resolve()):(Zr()<=a["in"].DEBUG&&ti("QueryEngine","Query:",va(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(Zr()<=a["in"].DEBUG&&ti("QueryEngine","The SDK decides to create cache indexes for query:",va(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,da(t))):$i.resolve())}zi(e,t){if(ua(t))return $i.resolve(null);let n=da(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ma(t,null,"F"),n=da(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Pa(...r);return this.Gi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Yi(t,r);return this.Zi(t,s,i,n.readTime)?this.zi(e,ma(t,null,"F")):this.Xi(e,s,t,n)}))))})))))}ji(e,t,n,r){return ua(t)||r.isEqual(ki.min())?$i.resolve(null):this.Gi.getDocuments(e,n).next((i=>{const s=this.Yi(t,i);return this.Zi(t,s,n,r)?$i.resolve(null):(Zr()<=a["in"].DEBUG&&ti("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),va(t)),this.Xi(e,s,t,Fi(r,-1)).next((e=>e)))}))}Yi(e,t){let n=new Bs(ba(e));return t.forEach(((t,r)=>{wa(e,r)&&(n=n.add(r))})),n}Zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,t,n){return Zr()<=a["in"].DEBUG&&ti("QueryEngine","Using full collection scan to execute query:",va(t)),this.Gi.getDocumentsMatchingQuery(e,t,Vi.min(),n)}Xi(e,t,n,r){return this.Gi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,t,n,r){this.persistence=e,this.es=t,this.serializer=r,this.ts=new Us(Ii),this.ns=new Ea((e=>ea(e)),ta),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(n)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hl(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ts)))}}function yh(e,t,n,r){return new gh(e,t,n,r)}async function vh(e,t){const n=ci(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.os(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Pa();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({_s:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function wh(e,t){const n=ci(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=$i.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);oi(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Pa();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function _h(e){const t=ci(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.qr.getLastRemoteSnapshotVersion(e)))}function bh(e,t){const n=ci(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.qr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Ws.EMPTY_BYTE_STRING,ki.min()).withLastLimboFreeSnapshotVersion(ki.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.qr.updateTargetData(e,u))}));let a=Sa(),c=Pa();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Ih(e,s,t.documentUpdates).next((e=>{a=e.us,c=e.cs}))),!r.isEqual(ki.min())){const t=n.qr.getLastRemoteSnapshotVersion(e).next((t=>n.qr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return $i.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ts=i,e)))}function Ih(e,t,n){let r=Pa(),i=Pa();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Sa();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ki.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):ti("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{us:r,cs:i}}))}function Eh(e,t){const n=ci(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Th(e,t){const n=ci(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.qr.getTargetData(e,t).next((i=>i?(r=i,$i.resolve(r)):n.qr.allocateTargetId(e).next((i=>(r=new Eu(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.qr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ts.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(e.targetId,e),n.ns.set(t,e.targetId)),e}))}async function Sh(e,t,n){const r=ci(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Qi(e))throw e;ti("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function kh(e,t,n){const r=ci(e);let i=ki.min(),s=Pa();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=ci(e),i=r.ns.get(n);return void 0!==i?$i.resolve(r.ts.get(i)):r.qr.getTargetData(t,n)}(r,e,da(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.es.getDocumentsMatchingQuery(e,t,n?i:ki.min(),n?s:Pa()))).next((e=>(xh(r,_a(t),e),{documents:e,ls:s})))))}function Ch(e,t){const n=ci(e),r=ci(n.qr),i=n.ts.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r._t(e,t).next((e=>e?e.target:null))))}function Ah(e,t){const n=ci(e),r=n.rs.get(t)||ki.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.ss.getAllFromCollectionGroup(e,t,Fi(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(xh(n,t,e),e)))}function xh(e,t,n){let r=e.rs.get(t)||ki.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.rs.set(t,r)}async function Nh(e,t,n,r){const i=ci(e);let s=Pa(),o=Sa();for(const u of n){const e=t.hs(u.metadata.name);u.document&&(s=s.add(e));const n=t.Ps(u);n.setReadTime(t.Is(u.metadata.readTime)),o=o.insert(e,n)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),c=await Th(i,function(e){return da(ca(Ai.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Ih(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.qr.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.qr.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.us,t.cs))).next((()=>t.us))))))}async function Rh(e,t,n=Pa()){const r=await Th(e,da(Ou(t.bundledQuery))),i=ci(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Hc(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Kr.saveNamedQuery(e,t);const o=r.withResumeToken(Ws.EMPTY_BYTE_STRING,s);return i.ts=i.ts.insert(o.targetId,o),i.qr.updateTargetData(e,o).next((()=>i.qr.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.qr.addMatchingKeys(e,n,r.targetId))).next((()=>i.Kr.saveNamedQuery(e,t)))}))}function Dh(e,t){return`firestore_clients_${e}_${t}`}function Oh(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Ph(e,t){return`firestore_targets_${e}_${t}`}class Lh{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ts(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new li(r.error.code,r.error.message))),s?new Lh(e,t,r.state,i):(ni("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Mh{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ts(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new li(n.error.code,n.error.message))),i?new Mh(e,n.state,r):(ni("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ts(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Ma();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ss(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Fh(e,i):(ni("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Uh{constructor(e,t){this.clientId=e,this.onlineState=t}static Ts(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Uh(t.clientId,t.onlineState):(ni("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Vh{constructor(){this.activeTargetIds=Ma()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jh{constructor(e,t,n,r,i){this.window=e,this.si=t,this.persistenceKey=n,this.Rs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new Us(Ii),this.started=!1,this.ps=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ys=Dh(this.persistenceKey,this.Rs),this.ws=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new Vh),this.Ss=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Cs=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.vs=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const n of e){if(n===this.Rs)continue;const e=this.getItem(Dh(this.persistenceKey,n));if(e){const t=Fh.Ts(n,e);t&&(this.gs=this.gs.insert(t.clientId,t))}}this.Fs();const t=this.storage.getItem(this.Cs);if(t){const e=this.Ms(t);e&&this.xs(e)}for(const n of this.ps)this.fs(n);this.ps=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let t=!1;return this.gs.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,t,n){this.Ns(e,t,n),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Ph(this.persistenceKey,e));if(n){const r=Mh.Ts(e,n);r&&(t=r.state)}}return this.Ls.ds(e),this.Fs(),t}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ph(this.persistenceKey,e))}updateQueryState(e,t,n){this.ks(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Bs(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ti("SharedClientState","READ",e,t),t}setItem(e,t){ti("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){ti("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const t=e;if(t.storageArea===this.storage){if(ti("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ys)return void ni("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Ss.test(t.key)){if(null==t.newValue){const e=this.Ks(t.key);return this.$s(e,null)}{const e=this.Us(t.key,t.newValue);if(e)return this.$s(e.clientId,e)}}else if(this.bs.test(t.key)){if(null!==t.newValue){const e=this.Ws(t.key,t.newValue);if(e)return this.Gs(e)}}else if(this.Ds.test(t.key)){if(null!==t.newValue){const e=this.zs(t.key,t.newValue);if(e)return this.js(e)}}else if(t.key===this.Cs){if(null!==t.newValue){const e=this.Ms(t.newValue);if(e)return this.xs(e)}}else if(t.key===this.ws){const e=function(e){let t=ns._e;if(null!=e)try{const n=JSON.parse(e);oi("number"==typeof n),t=n}catch(e){ni("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ns._e&&this.sequenceNumberHandler(e)}else if(t.key===this.vs){const e=this.Hs(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Js(e))))}}else this.ps.push(t)}))}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,t,n){const r=new Lh(this.currentUser,e,t,n),i=Oh(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Es())}Bs(e){const t=Oh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}qs(e){const t={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(t))}ks(e,t,n){const r=Ph(this.persistenceKey,e),i=new Mh(e,t,n);this.setItem(r,i.Es())}Qs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.vs,t)}Ks(e){const t=this.Ss.exec(e);return t?t[1]:null}Us(e,t){const n=this.Ks(e);return Fh.Ts(n,t)}Ws(e,t){const n=this.bs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Lh.Ts(new Yr(i),r,t)}zs(e,t){const n=this.Ds.exec(e),r=Number(n[1]);return Mh.Ts(r,t)}Ms(e){return Uh.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);ti("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,t){const n=t?this.gs.insert(e,t):this.gs.remove(e),r=this.Os(this.gs),i=this.Os(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Xs(s,o).then((()=>{this.gs=n}))}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let t=Ma();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Bh{constructor(){this.eo=new Vh,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,n){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Vh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{ro(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){ti("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){ti("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $h=null;function Gh(){return null===$h?$h=function(){return 268435456+Math.round(2147483648*Math.random())}():$h++,"0x"+$h.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Kh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="WebChannelConnection";class Qh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=t+"://"+e.host,this.fo=`projects/${n}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get yo(){return!1}wo(e,t,n,r,i){const s=Gh(),o=this.So(e,t);ti("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,r,i),this.Do(e,o,a,n).then((t=>(ti("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ri("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Co(e,t,n,r,i,s){return this.wo(e,t,n,r,i)}bo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}So(e,t){const n=Kh[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,n,r){const i=Gh();return new Promise(((s,o)=>{const a=new Kr;a.setWithCredentials(!0),a.listenOnce(Br.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case jr.NO_ERROR:const t=a.getResponseJson();ti(Hh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case jr.TIMEOUT:ti(Hh,`RPC '${e}' ${i} timed out`),o(new li(ui.DEADLINE_EXCEEDED,"Request time out"));break;case jr.HTTP_ERROR:const n=a.getStatus();if(ti(Hh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ui).indexOf(t)>=0?t:ui.UNKNOWN}(t.status);o(new li(e,t.message))}else o(new li(ui.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new li(ui.UNAVAILABLE,"Connection failed."));break;default:si()}}finally{ti(Hh,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);ti(Hh,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}vo(e,t,n){const r=Gh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Ur(),o=Vr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new $r({})),this.bo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");ti(Hh,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Wh({co:t=>{d?ti(Hh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(ti(Hh,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),ti(Hh,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},lo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,Gr.EventType.OPEN,(()=>{d||ti(Hh,`RPC '${e}' stream ${r} transport opened.`)})),p(l,Gr.EventType.CLOSE,(()=>{d||(d=!0,ti(Hh,`RPC '${e}' stream ${r} transport closed`),f.Ro())})),p(l,Gr.EventType.ERROR,(t=>{d||(d=!0,ri(Hh,`RPC '${e}' stream ${r} transport errored:`,t),f.Ro(new li(ui.UNAVAILABLE,"The operation could not be completed")))})),p(l,Gr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];oi(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ti(Hh,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=_c[e];if(void 0!==t)return Ec(t)}(t),i=o.message;void 0===n&&(n=ui.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Ro(new li(n,i)),l.close()}else ti(Hh,`RPC '${e}' stream ${r} received:`,i),f.Vo(i)}})),p(o,qr.STAT_EVENT,(t=>{t.stat===zr.PROXY?ti(Hh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===zr.NOPROXY&&ti(Hh,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Ao()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(){return"undefined"!=typeof window?window:null}function Jh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(e){return new zc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.si=e,this.timerId=t,this.Fo=n,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,t-n);r>0&&ti("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Bo=Date.now(),e()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,n,r,i,s,o,a){this.si=e,this.Ko=n,this.$o=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Zh(e,t)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==e?this.zo.reset():t&&t.code===ui.RESOURCE_EXHAUSTED?(ni(t.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===ui.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Uo===t&&this.s_(e,n)}),(t=>{e((()=>{const e=new li(ui.UNKNOWN,"Fetching auth token failed: "+t.message);return this.o_(e)}))}))}s_(e,t){const n=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((e=>{n((()=>this.o_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(e){return ti("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget((()=>this.Uo===e?t():(ti("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class td extends ed{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=ou(this.serializer,e),n=function(e){if(!("targetChange"in e))return ki.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ki.min():t.readTime?Hc(t.readTime):ki.min()}(e);return this.listener.a_(t,n)}u_(e){const t={};t.database=tu(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=na(r)?{documents:lu(e,r)}:{query:hu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Kc(e,t.resumeToken);const r=$c(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ki.min())>0){n.readTime=Gc(e,t.snapshotVersion.toTimestamp());const r=$c(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=fu(this.serializer,e);n&&(t.labels=n),this.e_(t)}c_(e){const t={};t.database=tu(this.serializer),t.removeTarget=e,this.e_(t)}}class nd extends ed{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(oi(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=uu(e.writeResults,e.commitTime),n=Hc(e.commitTime);return this.listener.I_(n,t)}return oi(!e.writeResults||0===e.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=tu(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>au(this.serializer,e)))};this.e_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new li(ui.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.wo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ui.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new li(ui.UNKNOWN,e.toString())}))}Co(e,t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Co(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ui.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new li(ui.UNKNOWN,e.toString())}))}terminate(){this.d_=!0}}class id{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(e){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,"Online"===e&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(ni(t),this.f_=!1):ti("OnlineStateTracker",t)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro((e=>{n.enqueueAndForget((async()=>{pd(this)&&(ti("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ci(e);t.C_.add(4),await ad(t),t.M_.set("Unknown"),t.C_.delete(4),await od(t)}(this))}))})),this.M_=new id(n,r)}}async function od(e){if(pd(e))for(const t of e.v_)await t(!0)}async function ad(e){for(const t of e.v_)await t(!1)}function cd(e,t){const n=ci(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),fd(n)?dd(n):Dd(n).Ho()&&ld(n,t))}function ud(e,t){const n=ci(e),r=Dd(n);n.D_.delete(t),r.Ho()&&hd(n,t),0===n.D_.size&&(r.Ho()?r.Zo():pd(n)&&n.M_.set("Unknown"))}function ld(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ki.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Dd(e).u_(t)}function hd(e,t){e.x_.Oe(t),Dd(e).c_(t)}function dd(e){e.x_=new Fc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Dd(e).start(),e.M_.g_()}function fd(e){return pd(e)&&!Dd(e).jo()&&e.D_.size>0}function pd(e){return 0===ci(e).C_.size}function md(e){e.x_=void 0}async function gd(e){e.D_.forEach(((t,n)=>{ld(e,t)}))}async function yd(e,t){md(e),fd(e)?(e.M_.w_(t),dd(e)):e.M_.set("Unknown")}async function vd(e,t,n){if(e.M_.set("Online"),t instanceof Lc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.D_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.D_.delete(r),e.x_.removeTarget(r))}(e,t)}catch(n){ti("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await wd(e,n)}else if(t instanceof Oc?e.x_.$e(t):t instanceof Pc?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(ki.min()))try{const t=await _h(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.x_.it(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.D_.get(r);i&&e.D_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.D_.get(t);if(!r)return;e.D_.set(t,r.withResumeToken(Ws.EMPTY_BYTE_STRING,r.snapshotVersion)),hd(e,t);const i=new Eu(r.target,t,n,r.sequenceNumber);ld(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ti("RemoteStore","Failed to raise snapshot:",t),await wd(e,t)}}async function wd(e,t,n){if(!Qi(t))throw t;e.C_.add(1),await ad(e),e.M_.set("Offline"),n||(n=()=>_h(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ti("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await od(e)}))}function _d(e,t){return t().catch((n=>wd(e,n,t)))}async function bd(e){const t=ci(e),n=Od(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;Id(t);)try{const e=await Eh(t.localStore,r);if(null===e){0===t.b_.length&&n.Zo();break}r=e.batchId,Ed(t,e)}catch(e){await wd(t,e)}Td(t)&&Sd(t)}function Id(e){return pd(e)&&e.b_.length<10}function Ed(e,t){e.b_.push(t);const n=Od(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function Td(e){return pd(e)&&!Od(e).jo()&&e.b_.length>0}function Sd(e){Od(e).start()}async function kd(e){Od(e).E_()}async function Cd(e){const t=Od(e);for(const n of e.b_)t.P_(n.mutations)}async function Ad(e,t,n){const r=e.b_.shift(),i=yc.from(r,t,n);await _d(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await bd(e)}async function xd(e,t){t&&Od(e).h_&&await async function(e,t){if(function(e){return Ic(e)&&e!==ui.ABORTED}(t.code)){const n=e.b_.shift();Od(e).Yo(),await _d(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await bd(e)}}(e,t),Td(e)&&Sd(e)}async function Nd(e,t){const n=ci(e);n.asyncQueue.verifyOperationInProgress(),ti("RemoteStore","RemoteStore received new credentials");const r=pd(n);n.C_.add(3),await ad(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await od(n)}async function Rd(e,t){const n=ci(e);t?(n.C_.delete(2),await od(n)):t||(n.C_.add(2),await ad(n),n.M_.set("Unknown"))}function Dd(e){return e.O_||(e.O_=function(e,t,n){const r=ci(e);return r.A_(),new td(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{ho:gd.bind(null,e),Io:yd.bind(null,e),a_:vd.bind(null,e)}),e.v_.push((async t=>{t?(e.O_.Yo(),fd(e)?dd(e):e.M_.set("Unknown")):(await e.O_.stop(),md(e))}))),e.O_}function Od(e){return e.N_||(e.N_=function(e,t,n){const r=ci(e);return r.A_(),new nd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{ho:kd.bind(null,e),Io:xd.bind(null,e),T_:Cd.bind(null,e),I_:Ad.bind(null,e)}),e.v_.push((async t=>{t?(e.N_.Yo(),await bd(e)):(await e.N_.stop(),e.b_.length>0&&(ti("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))}))),e.N_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Pd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Pd(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new li(ui.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ld(e,t){if(ni("AsyncQueue",`${t}: ${e}`),Qi(e))return new li(ui.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ri.comparator(t.key,n.key):(e,t)=>Ri.comparator(e.key,t.key),this.keyedMap=Ca(),this.sortedSet=new Us(this.comparator)}static emptySet(e){return new Md(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Md))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Md;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.B_=new Us(Ri.comparator)}track(e){const t=e.doc.key,n=this.B_.get(t);n?0!==e.type&&3===n.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.B_=this.B_.remove(t):1===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):si():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ud{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Ud(e,t,Md.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.k_=void 0,this.listeners=[]}}class jd{constructor(){this.queries=new Ea((e=>ya(e)),ga),this.onlineState="Unknown",this.q_=new Set}}async function Bd(e,t){const n=ci(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Vd),i)try{s.k_=await n.onListen(r)}catch(e){const n=Ld(e,`Initialization of query '${va(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Q_(n.onlineState),s.k_&&t.K_(s.k_)&&Gd(n)}async function qd(e,t){const n=ci(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zd(e,t){const n=ci(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.K_(i)&&(r=!0);t.k_=i}}r&&Gd(n)}function $d(e,t,n){const r=ci(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Gd(e){e.q_.forEach((e=>{e.next()}))}class Kd{constructor(e,t,n){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ud(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.J_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}H_(e){e=Ud.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.Y_=e,this.byteLength=t}Z_(){return"metadata"in this.Y_}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.serializer=e}hs(e){return Xc(this.serializer,e)}Ps(e){return e.metadata.exists?iu(this.serializer,e.document,!1):Co.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return Hc(e)}}class Qd{constructor(e,t,n){this.X_=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Yd(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++t;const n=Ai.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ta(e){const t=new Map,n=new Hd(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.hs(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Pa()).add(e);t.set(n,r)}}return t}async complete(){const e=await Nh(this.localStore,new Hd(this.serializer),this.documents,this.X_.id),t=this.ta(this.documents);for(const n of this.queries)await Rh(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function Yd(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.key=e}}class Xd{constructor(e){this.key=e}}class Zd{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Pa(),this.mutatedKeys=Pa(),this._a=ba(e),this.aa=new Md(this._a)}get ua(){return this.ia}ca(e,t){const n=t?t.la:new Fd,r=t?t.aa:this.aa;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=wa(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ha(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this._a(l,a)>0||c&&this._a(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{aa:s,la:n,Zi:o,mutatedKeys:i}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const i=e.la.L_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return si()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this._a(e.doc,t.doc))),this.Pa(n);const s=t?this.Ia():[],o=0===this.oa.size&&this.current?1:0,a=o!==this.sa;return this.sa=o,0!==i.length||a?{snapshot:new Ud(this.query,e.aa,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:s}:{Ta:s}}Q_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({aa:this.aa,la:new Fd,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach((e=>this.ia=this.ia.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.ia=this.ia.delete(e))),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Pa(),this.aa.forEach((e=>{this.Ea(e.key)&&(this.oa=this.oa.add(e.key))}));const t=[];return e.forEach((e=>{this.oa.has(e)||t.push(new Xd(e))})),this.oa.forEach((n=>{e.has(n)||t.push(new Jd(n))})),t}da(e){this.ia=e.ls,this.oa=Pa();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return Ud.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class ef{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class tf{constructor(e){this.key=e,this.Ra=!1}}class nf{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new Ea((e=>ya(e)),ga),this.fa=new Map,this.ga=new Set,this.pa=new Us(Ri.comparator),this.ya=new Map,this.wa=new Jl,this.Sa={},this.ba=new Map,this.Da=kl.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function rf(e,t){const n=Of(e);let r,i;const s=n.ma.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const e=await Th(n.localStore,da(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await sf(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&cd(n.remoteStore,e)}return i}async function sf(e,t,n,r,i){e.va=(t,n,r)=>async function(e,t,n,r){let i=t.view.ca(n);i.Zi&&(i=await kh(e.localStore,t.query,!1).then((({documents:e})=>t.view.ca(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return vf(e,t.targetId,o.Ta),o.snapshot}(e,t,n,r);const s=await kh(e.localStore,t,!0),o=new Zd(t,s.ls),a=o.ca(s.documents),c=Dc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);vf(e,n,u.Ta);const l=new ef(t,n,o);return e.ma.set(t,l),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}async function of(e,t){const n=ci(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter((e=>!ga(e,t)))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ud(n.remoteStore,r.targetId),gf(n,r.targetId)})).catch(zi)):(gf(n,r.targetId),await Sh(n.localStore,r.targetId,!0))}async function af(e,t,n){const r=Pf(e);try{const e=await function(e,t){const n=ci(e),r=Si.now(),i=t.reduce(((e,t)=>e.add(t.key)),Pa());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Sa(),c=Pa();return n.ss.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=ac(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new lc(e.key,t,ko(t.value.mapValue),tc.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Aa(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Sa[e.currentUser.toKey()];r||(r=new Us(Ii)),r=r.insert(t,n),e.Sa[e.currentUser.toKey()]=r}(r,e.batchId,n),await bf(r,e.changes),await bd(r.remoteStore)}catch(e){const t=Ld(e,"Failed to persist write");n.reject(t)}}async function cf(e,t){const n=ci(e);try{const e=await bh(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ya.get(t);r&&(oi(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Ra=!0:e.modifiedDocuments.size>0?oi(r.Ra):e.removedDocuments.size>0&&(oi(r.Ra),r.Ra=!1))})),await bf(n,e,t)}catch(e){await zi(e)}}function uf(e,t,n){const r=ci(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ma.forEach(((n,r)=>{const i=r.view.Q_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ci(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Q_(t)&&(r=!0)})),r&&Gd(n)}(r.eventManager,t),e.length&&r.Va.a_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function lf(e,t,n){const r=ci(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),s=i&&i.key;if(s){let e=new Us(Ri.comparator);e=e.insert(s,Co.newNoDocument(s,ki.min()));const n=Pa().add(s),i=new Rc(ki.min(),new Map,new Us(Ii),e,n);await cf(r,i),r.pa=r.pa.remove(s),r.ya.delete(t),_f(r)}else await Sh(r.localStore,t,!1).then((()=>gf(r,t,n))).catch(zi)}async function hf(e,t){const n=ci(e),r=t.batch.batchId;try{const e=await wh(n.localStore,t);mf(n,r,null),pf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bf(n,e)}catch(e){await zi(e)}}async function df(e,t,n){const r=ci(e);try{const e=await function(e,t){const n=ci(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(oi(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);mf(r,t,n),pf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await bf(r,e)}catch(n){await zi(n)}}async function ff(e,t){const n=ci(e);pd(n.remoteStore)||ti("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=ci(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.ba.get(e)||[];r.push(t),n.ba.set(e,r)}catch(e){const n=Ld(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function pf(e,t){(e.ba.get(t)||[]).forEach((e=>{e.resolve()})),e.ba.delete(t)}function mf(e,t,n){const r=ci(e);let i=r.Sa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function gf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach((t=>{e.wa.containsKey(t)||yf(e,t)}))}function yf(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);null!==n&&(ud(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),_f(e))}function vf(e,t,n){for(const r of n)r instanceof Jd?(e.wa.addReference(r.key,t),wf(e,r)):r instanceof Xd?(ti("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||yf(e,r.key)):si()}function wf(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(ti("SyncEngine","New document in limbo: "+n),e.ga.add(r),_f(e))}function _f(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new Ri(Ai.fromString(t)),r=e.Da.next();e.ya.set(r,new tf(n)),e.pa=e.pa.insert(n,r),cd(e.remoteStore,new Eu(da(ca(n.path)),r,"TargetPurposeLimboResolution",ns._e))}}async function bf(e,t,n){const r=ci(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach(((e,a)=>{o.push(r.va(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=fh.Qi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Va.a_(i),await async function(e,t){const n=ci(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>$i.forEach(t,(t=>$i.forEach(t.ki,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>$i.forEach(t.qi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Qi(e))throw e;ti("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ts.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ts=n.ts.insert(e,i)}}}(r.localStore,s))}async function If(e,t){const n=ci(e);if(!n.currentUser.isEqual(t)){ti("SyncEngine","User change. New user:",t.toKey());const e=await vh(n.localStore,t);n.currentUser=t,function(e,t){e.ba.forEach((e=>{e.forEach((e=>{e.reject(new li(ui.CANCELLED,t))}))})),e.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await bf(n,e._s)}}function Ef(e,t){const n=ci(e),r=n.ya.get(t);if(r&&r.Ra)return Pa().add(r.key);{let e=Pa();const r=n.fa.get(t);if(!r)return e;for(const t of r){const r=n.ma.get(t);e=e.unionWith(r.view.ua)}return e}}async function Tf(e,t){const n=ci(e),r=await kh(n.localStore,t.query,!0),i=t.view.da(r);return n.isPrimaryClient&&vf(n,t.targetId,i.Ta),i}async function Sf(e,t){const n=ci(e);return Ah(n.localStore,t).then((e=>bf(n,e)))}async function kf(e,t,n,r){const i=ci(e),s=await function(e,t){const n=ci(e),r=ci(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Cn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):$i.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await bd(i.remoteStore):"acknowledged"===n||"rejected"===n?(mf(i,t,r||null),pf(i,t),function(e,t){ci(ci(e).mutationQueue).Fn(t)}(i.localStore,t)):si(),await bf(i,s)):ti("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Cf(e,t){const n=ci(e);if(Of(n),Pf(n),!0===t&&!0!==n.Ca){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Af(n,e.toArray());n.Ca=!0,await Rd(n.remoteStore,!0);for(const r of t)cd(n.remoteStore,r)}else if(!1===t&&!1!==n.Ca){const e=[];let t=Promise.resolve();n.fa.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(gf(n,i),Sh(n.localStore,i,!0)))),ud(n.remoteStore,i)})),await t,await Af(n,e),function(e){const t=ci(e);t.ya.forEach(((e,n)=>{ud(t.remoteStore,n)})),t.wa.Vr(),t.ya=new Map,t.pa=new Us(Ri.comparator)}(n),n.Ca=!1,await Rd(n.remoteStore,!1)}}async function Af(e,t,n){const r=ci(e),i=[],s=[];for(const o of t){let e;const t=r.fa.get(o);if(t&&0!==t.length){e=await Th(r.localStore,da(t[0]));for(const e of t){const t=r.ma.get(e),n=await Tf(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Ch(r.localStore,o);e=await Th(r.localStore,t),await sf(r,xf(t),o,!1,e.resumeToken)}i.push(e)}return r.Va.a_(s),i}function xf(e){return aa(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Nf(e){return function(e){return ci(ci(e).persistence).Bi()}(ci(e).localStore)}async function Rf(e,t,n,r){const i=ci(e);if(i.Ca)return void ti("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Ah(i.localStore,_a(s[0])),r=Rc.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Ws.EMPTY_BYTE_STRING);await bf(i,e,r);break}case"rejected":await Sh(i.localStore,t,!0),gf(i,t,r);break;default:si()}}async function Df(e,t,n){const r=Of(e);if(r.Ca){for(const e of t){if(r.fa.has(e)){ti("SyncEngine","Adding an already active target "+e);continue}const t=await Ch(r.localStore,e),n=await Th(r.localStore,t);await sf(r,xf(t),n.targetId,!1,n.resumeToken),cd(r.remoteStore,n)}for(const e of n)r.fa.has(e)&&await Sh(r.localStore,e,!1).then((()=>{ud(r.remoteStore,e),gf(r,e)})).catch(zi)}}function Of(e){const t=ci(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=cf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ef.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lf.bind(null,t),t.Va.a_=zd.bind(null,t.eventManager),t.Va.Fa=$d.bind(null,t.eventManager),t}function Pf(e){const t=ci(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=df.bind(null,t),t}function Lf(e,t,n){const r=ci(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=ci(e),r=Hc(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Kr.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Yd(r));const i=new Qd(r,e.localStore,t.serializer);let s=await t.Ma();for(;s;){const e=await i.ea(s);e&&n._updateProgress(e),s=await t.Ma()}const o=await i.complete();return await bf(e,o.ra,void 0),await function(e,t){const n=ci(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Kr.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.na)}catch(e){return ri("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Mf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return yh(this.persistence,new mh,e.initialUser,this.serializer)}createPersistence(e){return new rh(sh.jr,this.serializer)}createSharedClientState(e){return new Bh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ff extends Mf{constructor(e,t,n){super(),this.xa=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await Pf(this.xa.syncEngine),await bd(this.xa.remoteStore),await this.persistence.mi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return yh(this.persistence,new mh,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ol(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new ts(t,this.persistence);return new es(e.asyncQueue,n)}createPersistence(e){const t=dh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?vl.withCacheSize(this.cacheSizeBytes):vl.DEFAULT;return new uh(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Yh(),Jh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Bh}}class Uf extends Ff{constructor(e,t){super(e,t,!1),this.xa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xa.syncEngine;this.sharedClientState instanceof jh&&(this.sharedClientState.syncEngine={Ys:kf.bind(null,t),Zs:Rf.bind(null,t),Xs:Df.bind(null,t),Bi:Nf.bind(null,t),Js:Sf.bind(null,t)},await this.sharedClientState.start()),await this.persistence.mi((async e=>{await Cf(this.xa.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Yh();if(!jh.D(t))throw new li(ui.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=dh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new jh(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Vf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>uf(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=If.bind(null,this.syncEngine),await Rd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jd}()}createDatastore(e){const t=Xh(e.databaseInfo.databaseId),n=function(e){return new Qh(e)}(e.databaseInfo);return function(e,t,n,r){return new rd(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new sd(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>uf(this.syncEngine,e,0)),function(){return zh.D()?new zh:new qh}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new nf(e,t,n,r,i,s);return o&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ci(e);ti("RemoteStore","RemoteStore shutting down."),t.C_.add(5),await ad(t),t.F_.shutdown(),t.M_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):ni("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.Ba=e,this.serializer=t,this.metadata=new hi,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then((e=>{e&&e.Z_()?this.metadata.resolve(e.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Y_)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(null===e)return null;const t=this.La.decode(e),n=Number(t);isNaN(n)&&this.Qa(`length string (${t}) is not valid number`);const r=await this.Ka(n);return new Wd(JSON.parse(r),e.length+n)}$a(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async qa(){for(;this.$a()<0;)if(await this.Ua())break;if(0===this.buffer.length)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const t=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new li(ui.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=ci(e),r=tu(n.serializer)+"/documents",i={documents:t.map((e=>Jc(n.serializer,e)))},s=await n.Co("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=su(n.serializer,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());oi(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new pc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Ri.fromPath(t);this.mutations.push(new mc(n,this.precondition(n)))})),await async function(e,t){const n=ci(e),r=tu(n.serializer)+"/documents",i={writes:t.map((e=>au(n.serializer,e)))};await n.wo("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw si();t=ki.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new li(ui.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ki.min())?tc.exists(!1):tc.updateTime(t):tc.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ki.min()))throw new li(ui.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return tc.updateTime(t)}return tc.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Wa=n.maxAttempts,this.zo=new Zh(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko((async()=>{const e=new zf(this.datastore),t=this.za(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.ja(e)}))))})).catch((e=>{this.ja(e)}))}))}za(e){try{const t=this.updateFunction(e);return!rs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ga(),Promise.resolve())))):this.deferred.reject(e)}Ha(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Ic(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Yr.UNAUTHENTICATED,this.clientId=bi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ti("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ti("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new li(ui.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ld(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Kf(e,t){e.asyncQueue.verifyOperationInProgress(),ti("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await vh(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Wf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Qf(e);ti("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Nd(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Nd(t.remoteStore,n))),e._onlineComponents=t}function Hf(e){return"FirebaseError"===e.name?e.code===ui.FAILED_PRECONDITION||e.code===ui.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Qf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ti("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Hf(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await Kf(e,new Mf)}}else ti("FirestoreClient","Using default OfflineComponentProvider"),await Kf(e,new Mf);return e._offlineComponents}async function Yf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ti("FirestoreClient","Using user provided OnlineComponentProvider"),await Wf(e,e._uninitializedComponentsProvider._online)):(ti("FirestoreClient","Using default OnlineComponentProvider"),await Wf(e,new Vf))),e._onlineComponents}function Jf(e){return Qf(e).then((e=>e.persistence))}function Xf(e){return Qf(e).then((e=>e.localStore))}function Zf(e){return Yf(e).then((e=>e.remoteStore))}function ep(e){return Yf(e).then((e=>e.syncEngine))}function tp(e){return Yf(e).then((e=>e.datastore))}async function np(e){const t=await Yf(e),n=t.eventManager;return n.onListen=rf.bind(null,t.syncEngine),n.onUnlisten=of.bind(null,t.syncEngine),n}function rp(e){return e.asyncQueue.enqueue((async()=>{const t=await Jf(e),n=await Zf(e);return t.setNetworkEnabled(!0),function(e){const t=ci(e);return t.C_.delete(0),od(t)}(n)}))}function ip(e){return e.asyncQueue.enqueue((async()=>{const t=await Jf(e),n=await Zf(e);return t.setNetworkEnabled(!1),async function(e){const t=ci(e);t.C_.add(0),await ad(t),t.M_.set("Offline")}(n)}))}function sp(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=ci(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new li(ui.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Ld(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Xf(e),t,n))),n.promise}function op(e,t,n={}){const r=new hi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Bf({next:s=>{t.enqueueAndForget((()=>qd(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new li(ui.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new li(ui.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Kd(ca(n.path),s,{includeMetadataChanges:!0,J_:!0});return Bd(e,o)}(await np(e),e.asyncQueue,t,n,r))),r.promise}function ap(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await kh(e,t,!0),i=new Zd(t,r.ls),s=i.ca(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Ld(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Xf(e),t,n))),n.promise}function cp(e,t,n={}){const r=new hi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Bf({next:n=>{t.enqueueAndForget((()=>qd(e,o))),n.fromCache&&"server"===r.source?i.reject(new li(ui.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Kd(n,s,{includeMetadataChanges:!0,J_:!0});return Bd(e,o)}(await np(e),e.asyncQueue,t,n,r))),r.promise}function up(e,t){const n=new Bf(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){ci(e).q_.add(t),t.next()}(await np(e),n))),()=>{n.Na(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){ci(e).q_.delete(t)}(await np(e),n)))}}function lp(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?Sc().encode(e):e,function(e,t){return new qf(e,t)}(function(e,t){if(e instanceof Uint8Array)return jf(e,t);if(e instanceof ArrayBuffer)return jf(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,Xh(t));e.asyncQueue.enqueueAndForget((async()=>{Lf(await ep(e),i,r)}))}function hp(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=ci(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Kr.getNamedQuery(e,t)))}(await Xf(e),t)))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dp(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const fp=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(e,t,n){if(!n)throw new li(ui.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mp(e,t,n,r){if(!0===t&&!0===r)throw new li(ui.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function gp(e){if(!Ri.isDocumentKey(e))throw new li(ui.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yp(e){if(Ri.isDocumentKey(e))throw new li(ui.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function vp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":si()}function wp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new li(ui.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vp(e);throw new li(ui.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function _p(e,t){if(t<=0)throw new li(ui.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new li(ui.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new li(ui.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dp(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new li(ui.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ip{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new li(ui.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new li(ui.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bp(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new fi;switch(e.type){case"firstParty":return new yi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new li(ui.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=fp.get(e);t&&(ti("ComponentProvider","Removing Datastore"),fp.delete(e),t.terminate())}(this),Promise.resolve()}}function Ep(e,t,n,r={}){var i;const s=(e=wp(e,Ip))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Yr.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new li(ui.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Yr(s)}e._authCredentials=new pi(new di(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Tp(this.firestore,e,this._query)}}class Sp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Sp(this.firestore,e,this._key)}}class kp extends Tp{constructor(e,t,n){super(e,t,ca(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Sp(this.firestore,null,new Ri(e))}withConverter(e){return new kp(this.firestore,e,this._path)}}function Cp(e,t,...n){if(e=(0,c.m9)(e),pp("collection","path",t),e instanceof Ip){const r=Ai.fromString(t,...n);return yp(r),new kp(e,null,r)}{if(!(e instanceof Sp||e instanceof kp))throw new li(ui.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ai.fromString(t,...n));return yp(r),new kp(e.firestore,null,r)}}function Ap(e,t){if(e=wp(e,Ip),pp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new li(ui.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Tp(e,null,function(e){return new oa(Ai.emptyPath(),e)}(t))}function xp(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=bi.newId()),pp("doc","path",t),e instanceof Ip){const r=Ai.fromString(t,...n);return gp(r),new Sp(e,null,new Ri(r))}{if(!(e instanceof Sp||e instanceof kp))throw new li(ui.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ai.fromString(t,...n));return gp(r),new Sp(e.firestore,e instanceof kp?e.converter:null,new Ri(r))}}function Np(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof Sp||e instanceof kp)&&(t instanceof Sp||t instanceof kp)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Rp(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof Tp&&t instanceof Tp&&e.firestore===t.firestore&&ga(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Dp{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Zh(this,"async_queue_retry"),this.iu=()=>{const e=Jh();e&&ti("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const e=Jh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=Jh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise((()=>{}));const t=new hi;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ya.push(e),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Qi(e))throw e;ti("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(e){const t=this.Ja.then((()=>(this.tu=!0,e().catch((e=>{this.eu=e,this.tu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw ni("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.tu=!1,e))))));return this.Ja=t,t}enqueueAfterDelay(e,t,n){this.su(),this.ru.indexOf(e)>-1&&(t=0);const r=Pd.createAndSchedule(this,e,t,n,(e=>this.au(e)));return this.Xa.push(r),r}su(){this.eu&&si()}verifyOperationInProgress(){}async uu(){let e;do{e=this.Ja,await e}while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then((()=>{this.Xa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Xa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()}))}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function Op(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Pp{constructor(){this._progressObserver={},this._taskCompletionResolver=new hi,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=-1;class Mp extends Ip{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new Dp}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Up(this),this._firestoreClient.terminate()}}function Fp(e){return e._firestoreClient||Up(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Up(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new to(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,dp(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Gf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function Vp(e,t){Hp(e=wp(e,Mp));const n=Fp(e);if(n._uninitializedComponentsProvider)throw new li(ui.FAILED_PRECONDITION,"SDK cache is already specified.");ri("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new Vf;return Bp(n,i,new Ff(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function jp(e){Hp(e=wp(e,Mp));const t=Fp(e);if(t._uninitializedComponentsProvider)throw new li(ui.FAILED_PRECONDITION,"SDK cache is already specified.");ri("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new Vf;return Bp(t,r,new Uf(r,n.cacheSizeBytes))}function Bp(e,t,n){const r=new hi;return e.asyncQueue.enqueue((async()=>{try{await Kf(e,n),await Wf(e,t),r.resolve()}catch(e){const n=e;if(!Hf(n))throw n;ri("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}})).then((()=>r.promise))}function qp(e){if(e._initialized&&!e._terminated)throw new li(ui.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new hi;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Ki.D())return Promise.resolve();const t=e+"main";await Ki.delete(t)}(dh(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function zp(e){return function(e){const t=new hi;return e.asyncQueue.enqueueAndForget((async()=>ff(await ep(e),t))),t.promise}(Fp(e=wp(e,Mp)))}function $p(e){return rp(Fp(e=wp(e,Mp)))}function Gp(e){return ip(Fp(e=wp(e,Mp)))}function Kp(e,t){const n=Fp(e=wp(e,Mp)),r=new Pp;return lp(n,e._databaseId,t,r),r}function Wp(e,t){return hp(Fp(e=wp(e,Mp)),t).then((t=>t?new Tp(e,null,t.query):null))}function Hp(e){if(e._initialized||e._terminated)throw new li(ui.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qp(Ws.fromBase64String(e))}catch(e){throw new li(ui.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Qp(Ws.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new li(ui.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ni(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jp{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new li(ui.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new li(ui.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ii(this._lat,e._lat)||Ii(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=/^__.*__$/;class em{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new lc(e,this.data,this.fieldMask,t,this.fieldTransforms):new uc(e,this.data,t,this.fieldTransforms)}}class tm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new lc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function nm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw si()}}class rm{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new rm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tu({path:n,du:!1});return r.Au(e),r}Ru(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Em(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(0===e.length)throw this.mu("Document fields must not be empty");if(nm(this.Iu)&&Zp.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class im{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Xh(e)}pu(e,t,n,r=!1){return new rm({Iu:e,methodName:t,gu:n,path:Ni.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sm(e){const t=e._freezeSettings(),n=Xh(e._databaseId);return new im(e._databaseId,!!t.ignoreUndefinedProperties,n)}function om(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);wm("Data must be an object, but it was:",o,r);const a=ym(r,o);let c,u;if(s.merge)c=new $s(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=_m(t,r,n);if(!o.contains(i))throw new li(ui.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Tm(e,i)||e.push(i)}c=new $s(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new em(new So(a),c,u)}class am extends Jp{_toFieldTransform(e){if(2!==e.Iu)throw 1===e.Iu?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof am}}function cm(e,t,n){return new rm({Iu:3,gu:t.settings.gu,methodName:e._methodName,du:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class um extends Jp{_toFieldTransform(e){return new Xa(e.path,new $a)}isEqual(e){return e instanceof um}}class lm extends Jp{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=cm(this,e,!0),n=this.yu.map((e=>gm(e,t))),r=new Ga(n);return new Xa(e.path,r)}isEqual(e){return this===e}}class hm extends Jp{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=cm(this,e,!0),n=this.yu.map((e=>gm(e,t))),r=new Wa(n);return new Xa(e.path,r)}isEqual(e){return this===e}}class dm extends Jp{constructor(e,t){super(e),this.wu=t}_toFieldTransform(e){const t=new Qa(e.serializer,Va(e.serializer,this.wu));return new Xa(e.path,t)}isEqual(e){return this===e}}function fm(e,t,n,r){const i=e.pu(1,t,n);wm("Data must be an object, but it was:",i,r);const s=[],o=So.empty();Ms(r,((e,r)=>{const a=Im(t,e,n);r=(0,c.m9)(r);const u=i.Ru(a);if(r instanceof am)s.push(a);else{const e=gm(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new $s(s);return new tm(o,a,i.fieldTransforms)}function pm(e,t,n,r,i,s){const o=e.pu(1,t,n),a=[_m(t,r,n)],u=[i];if(s.length%2!=0)throw new li(ui.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(_m(t,s[c])),u.push(s[c+1]);const l=[],h=So.empty();for(let f=a.length-1;f>=0;--f)if(!Tm(l,a[f])){const e=a[f];let t=u[f];t=(0,c.m9)(t);const n=o.Ru(e);if(t instanceof am)l.push(e);else{const r=gm(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new $s(l);return new tm(h,d,o.fieldTransforms)}function mm(e,t,n,r=!1){return gm(n,e.pu(r?4:3,t))}function gm(e,t){if(vm(e=(0,c.m9)(e)))return wm("Unsupported field value:",t,e),ym(e,t);if(e instanceof Jp)return function(e,t){if(!nm(t.Iu))throw t.mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.mu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&4!==t.Iu)throw t.mu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=gm(i,t.Vu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Va(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Si.fromDate(e);return{timestampValue:Gc(t.serializer,n)}}if(e instanceof Si){const n=new Si(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Gc(t.serializer,n)}}if(e instanceof Xp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Qp)return{bytesValue:Kc(t.serializer,e._byteString)};if(e instanceof Sp){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Qc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.mu(`Unsupported field value: ${vp(e)}`)}(e,t)}function ym(e,t){const n={};return Fs(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ms(e,((e,r)=>{const i=gm(r,t.Eu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function vm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Si||e instanceof Xp||e instanceof Qp||e instanceof Sp||e instanceof Jp)}function wm(e,t,n){if(!vm(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=vp(n);throw"an object"===r?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function _m(e,t,n){if((t=(0,c.m9)(t))instanceof Yp)return t._internalPath;if("string"==typeof t)return Im(e,t);throw Em("Field path arguments must be of type string or ",e,!1,void 0,n)}const bm=new RegExp("[~\\*/\\[\\]]");function Im(e,t,n){if(t.search(bm)>=0)throw Em(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Yp(...t.split("."))._internalPath}catch(I){throw Em(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Em(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new li(ui.INVALID_ARGUMENT,a+e+c)}function Tm(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Sp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new km(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class km extends Sm{data(){return super.data()}}function Cm(e,t){return"string"==typeof t?Im(e,t):t instanceof Yp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new li(ui.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xm{}class Nm extends xm{}function Rm(e,t,...n){let r=[];t instanceof xm&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Pm)).length,n=e.filter((e=>e instanceof Dm)).length;if(t>1||t>0&&n>0)throw new li(ui.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Dm extends Nm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Dm(e,t,n)}_apply(e){const t=this._parse(e);return Qm(e._query,t),new Tp(e.firestore,e.converter,pa(e._query,t))}_parse(e){const t=sm(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new li(ui.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Hm(o,s);const t=[];for(const n of o)t.push(Wm(r,e,n));a={arrayValue:{values:t}}}else a=Wm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Hm(o,s),a=mm(n,t,o,"in"===s||"not-in"===s);return Po.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Om(e,t,n){const r=t,i=Cm("where",e);return Dm._create(i,r,n)}class Pm extends xm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Pm(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Lo.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Qm(n,i),n=pa(n,i)}(e._query,t),new Tp(e.firestore,e.converter,pa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Lm extends Nm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Lm(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new li(ui.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new li(ui.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ro(t,n)}(e._query,this._field,this._direction);return new Tp(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new oa(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Mm(e,t="asc"){const n=t,r=Cm("orderBy",e);return Lm._create(r,n)}class Fm extends Nm{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Fm(e,t,n)}_apply(e){return new Tp(e.firestore,e.converter,ma(e._query,this._limit,this._limitType))}}function Um(e){return _p("limit",e),Fm._create("limit",e,"F")}function Vm(e){return _p("limitToLast",e),Fm._create("limitToLast",e,"L")}class jm extends Nm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new jm(e,t,n)}_apply(e){const t=Km(e,this.type,this._docOrFields,this._inclusive);return new Tp(e.firestore,e.converter,function(e,t){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Bm(...e){return jm._create("startAt",e,!0)}function qm(...e){return jm._create("startAfter",e,!1)}class zm extends Nm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new zm(e,t,n)}_apply(e){const t=Km(e,this.type,this._docOrFields,this._inclusive);return new Tp(e.firestore,e.converter,function(e,t){return new oa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function $m(...e){return zm._create("endBefore",e,!1)}function Gm(...e){return zm._create("endAt",e,!0)}function Km(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Sm)return function(e,t,n,r,i){if(!r)throw new li(ui.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of ha(e))if(o.field.isKeyField())s.push(fo(t,r.key));else{const e=r.data.field(o.field);if(Xs(e))throw new li(ui.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new li(ui.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ao(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=sm(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new li(ui.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new li(ui.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!la(e)&&-1!==s.indexOf("/"))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ai.fromString(s));if(!Ri.isDocumentKey(n))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new Ri(n);a.push(fo(t,i))}else{const e=mm(n,r,s);a.push(e)}}return new Ao(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Wm(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new li(ui.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!la(t)&&-1!==n.indexOf("/"))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ai.fromString(n));if(!Ri.isDocumentKey(r))throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fo(e,new Ri(r))}if(n instanceof Sp)return fo(e,n._key);throw new li(ui.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vp(n)}.`)}function Hm(e,t){if(!Array.isArray(e)||0===e.length)throw new li(ui.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Qm(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new li(ui.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new li(ui.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Ym{convertValue(e,t="none"){switch(so(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ys(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw si()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ms(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Xp(Ys(e.latitude),Ys(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Zs(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const t=Qs(e);return new Si(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ai.fromString(e);oi(Iu(n));const r=new no(n.get(1),n.get(3)),i=new Ri(n.popFirst(5));return r.isEqual(t)||ni(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Xm extends Ym{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sp(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zm{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eg extends Sm{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new tg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Cm("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class tg extends eg{data(e={}){return super.data(e)}}class ng{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Zm(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new tg(this._firestore,this._userDataWriter,n.key,n,new Zm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new li(ui.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new tg(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Zm(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new tg(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Zm(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:rg(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return si()}}function ig(e,t){return e instanceof eg&&t instanceof eg?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof ng&&t instanceof ng&&e._firestore===t._firestore&&Rp(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(e){e=wp(e,Sp);const t=wp(e.firestore,Mp);return op(Fp(t),e._key).then((n=>wg(t,e,n)))}class og extends Ym{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sp(this.firestore,null,t)}}function ag(e){e=wp(e,Sp);const t=wp(e.firestore,Mp),n=Fp(t),r=new og(t);return sp(n,e._key).then((n=>new eg(t,r,e._key,n,new Zm(null!==n&&n.hasLocalMutations,!0),e.converter)))}function cg(e){e=wp(e,Sp);const t=wp(e.firestore,Mp);return op(Fp(t),e._key,{source:"server"}).then((n=>wg(t,e,n)))}function ug(e){e=wp(e,Tp);const t=wp(e.firestore,Mp),n=Fp(t),r=new og(t);return Am(e._query),cp(n,e._query).then((n=>new ng(t,r,e,n)))}function lg(e){e=wp(e,Tp);const t=wp(e.firestore,Mp),n=Fp(t),r=new og(t);return ap(n,e._query).then((n=>new ng(t,r,e,n)))}function hg(e){e=wp(e,Tp);const t=wp(e.firestore,Mp),n=Fp(t),r=new og(t);return cp(n,e._query,{source:"server"}).then((n=>new ng(t,r,e,n)))}function dg(e,t,n){e=wp(e,Sp);const r=wp(e.firestore,Mp),i=Jm(e.converter,t,n);return vg(r,[om(sm(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,tc.none())])}function fg(e,t,n,...r){e=wp(e,Sp);const i=wp(e.firestore,Mp),s=sm(i);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof Yp?pm(s,"updateDoc",e._key,t,n,r):fm(s,"updateDoc",e._key,t),vg(i,[o.toMutation(e._key,tc.exists(!0))])}function pg(e){return vg(wp(e.firestore,Mp),[new pc(e._key,tc.none())])}function mg(e,t){const n=wp(e.firestore,Mp),r=xp(e),i=Jm(e.converter,t);return vg(n,[om(sm(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,tc.exists(!1))]).then((()=>r))}function gg(e,...t){var n,r,i;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Op(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Op(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Sp)l=wp(e.firestore,Mp),h=ca(e._key.path),u={next:n=>{t[o]&&t[o](wg(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=wp(e,Tp);l=wp(n.firestore,Mp),h=n._query;const r=new og(l);u={next:e=>{t[o]&&t[o](new ng(l,r,n,e))},error:t[o+1],complete:t[o+2]},Am(e._query)}return function(e,t,n,r){const i=new Bf(r),s=new Kd(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Bd(await np(e),s))),()=>{i.Na(),e.asyncQueue.enqueueAndForget((async()=>qd(await np(e),s)))}}(Fp(l),h,a,u)}function yg(e,t){return up(Fp(e=wp(e,Mp)),Op(t)?t:{next:t})}function vg(e,t){return function(e,t){const n=new hi;return e.asyncQueue.enqueueAndForget((async()=>af(await ep(e),t,n))),n.promise}(Fp(e),t)}function wg(e,t,n){const r=n.docs.get(t._key),i=new og(e);return new eg(e,i,t._key,r,new Zm(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _g={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=sm(e)}set(e,t,n){this._verifyNotCommitted();const r=Ig(e,this._firestore),i=Jm(r.converter,t,n),s=om(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,tc.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Ig(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Yp?pm(this._dataReader,"WriteBatch.update",i._key,t,n,r):fm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,tc.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ig(e,this._firestore);return this._mutations=this._mutations.concat(new pc(t._key,tc.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new li(ui.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ig(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new li(ui.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=sm(e)}get(e){const t=Ig(e,this._firestore),n=new Xm(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return si();const r=e[0];if(r.isFoundDocument())return new Sm(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Sm(this._firestore,n,t._key,null,t.converter);throw si()}))}set(e,t,n){const r=Ig(e,this._firestore),i=Jm(r.converter,t,n),s=om(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Ig(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Yp?pm(this._dataReader,"Transaction.update",i._key,t,n,r):fm(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Ig(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ig(e,this._firestore),n=new og(this._firestore);return super.get(e).then((e=>new eg(this._firestore,n,t._key,e._document,new Zm(!1,!1),t.converter)))}}function Tg(e,t,n){e=wp(e,Mp);const r=Object.assign(Object.assign({},_g),n);return function(e){if(e.maxAttempts<1)throw new li(ui.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new hi;return e.asyncQueue.enqueueAndForget((async()=>{const i=await tp(e);new $f(e.asyncQueue,i,n,t,r).run()})),r.promise}(Fp(e),(n=>t(new Eg(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){return new am("deleteField")}function kg(){return new um("serverTimestamp")}function Cg(...e){return new lm("arrayUnion",e)}function Ag(...e){return new hm("arrayRemove",e)}function xg(e){return new dm("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Jr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Mp(new mi(e.getProvider("auth-internal")),new wi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new li(ui.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(Qr,"4.3.2",e),(0,s.registerVersion)(Qr,"4.3.2","esm2017")}();const Ng="@firebase/firestore-compat",Rg="0.3.22";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dg(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new li("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(){if("undefined"===typeof Uint8Array)throw new li("unimplemented","Uint8Arrays are not available in this environment.")}function Pg(){if(!Ks())throw new li("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Lg{constructor(e){this._delegate=e}static fromBase64String(e){return Pg(),new Lg(Qp.fromBase64String(e))}static fromUint8Array(e){return Og(),new Lg(Qp.fromUint8Array(e))}toBase64(){return Pg(),this._delegate.toBase64()}toUint8Array(){return Og(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(e){return Fg(e,["next","error","complete"])}function Fg(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{enableIndexedDbPersistence(e,t){return Vp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return jp(e._delegate)}clearIndexedDbPersistence(e){return qp(e._delegate)}}class Vg{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof no||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||ri("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Ep(this._delegate,e,t,n)}enableNetwork(){return $p(this._delegate)}disableNetwork(){return Gp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,mp("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return zp(this._delegate)}onSnapshotsInSync(e){return yg(this._delegate,e)}get app(){if(!this._appCompat)throw new li("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ey(this,Cp(this._delegate,e))}catch(t){throw Kg(t,"collection()","Firestore.collection()")}}doc(e){try{return new Gg(this,xp(this._delegate,e))}catch(t){throw Kg(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Jg(this,Ap(this._delegate,e))}catch(t){throw Kg(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Tg(this._delegate,(t=>e(new qg(this,t))))}batch(){return Fp(this._delegate),new zg(new bg(this._delegate,(e=>vg(this._delegate,e))))}loadBundle(e){return Kp(this._delegate,e)}namedQuery(e){return Wp(this._delegate,e).then((e=>e?new Jg(this,e):null))}}class jg extends Ym{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lg(new Qp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Gg.forKey(t,this.firestore,null)}}function Bg(e){ei(e)}class qg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new jg(e)}get(e){const t=ty(e);return this._delegate.get(t).then((e=>new Qg(this._firestore,new eg(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=ty(e);return n?(Dg("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ty(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ty(e);return this._delegate.delete(t),this}}class zg{constructor(e){this._delegate=e}set(e,t,n){const r=ty(e);return n?(Dg("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ty(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ty(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class $g{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new tg(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Yg(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=$g.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new $g(e,new jg(e),t),r.set(t,i)),i}}$g.INSTANCES=new WeakMap;class Gg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new jg(e)}static forPath(e,t,n){if(e.length%2!==0)throw new li("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Gg(t,new Sp(t._delegate,n,new Ri(e)))}static forKey(e,t,n){return new Gg(t,new Sp(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ey(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ey(this.firestore,Cp(this._delegate,e))}catch(t){throw Kg(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof Sp&&Np(this._delegate,e)}set(e,t){t=Dg("DocumentReference.set",t);try{return t?dg(this._delegate,e,t):dg(this._delegate,e)}catch(n){throw Kg(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?fg(this._delegate,e):fg(this._delegate,e,t,...n)}catch(r){throw Kg(r,"updateDoc()","DocumentReference.update()")}}delete(){return pg(this._delegate)}onSnapshot(...e){const t=Wg(e),n=Hg(e,(e=>new Qg(this.firestore,new eg(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return gg(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?ag(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?cg(this._delegate):sg(this._delegate),t.then((e=>new Qg(this.firestore,new eg(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Gg(this.firestore,e?this._delegate.withConverter($g.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Kg(e,t,n){return e.message=e.message.replace(t,n),e}function Wg(e){for(const t of e)if("object"===typeof t&&!Mg(t))return t;return{}}function Hg(e,t){var n,r;let i;return i=Mg(e[0])?e[0]:Mg(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Qg{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Gg(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return ig(this._delegate,e._delegate)}}class Yg extends Qg{data(e){const t=this._delegate.data(e);return this._delegate._converter||ai(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Jg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new jg(e)}where(e,t,n){try{return new Jg(this.firestore,Rm(this._delegate,Om(e,t,n)))}catch(r){throw Kg(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Jg(this.firestore,Rm(this._delegate,Mm(e,t)))}catch(n){throw Kg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Jg(this.firestore,Rm(this._delegate,Um(e)))}catch(t){throw Kg(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Jg(this.firestore,Rm(this._delegate,Vm(e)))}catch(t){throw Kg(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Jg(this.firestore,Rm(this._delegate,Bm(...e)))}catch(t){throw Kg(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Jg(this.firestore,Rm(this._delegate,qm(...e)))}catch(t){throw Kg(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Jg(this.firestore,Rm(this._delegate,$m(...e)))}catch(t){throw Kg(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Jg(this.firestore,Rm(this._delegate,Gm(...e)))}catch(t){throw Kg(t,"endAt()","Query.endAt()")}}isEqual(e){return Rp(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?lg(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?hg(this._delegate):ug(this._delegate),t.then((e=>new Zg(this.firestore,new ng(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Wg(e),n=Hg(e,(e=>new Zg(this.firestore,new ng(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return gg(this._delegate,t,n)}withConverter(e){return new Jg(this.firestore,e?this._delegate.withConverter($g.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Xg{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Yg(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Zg{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Jg(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Yg(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Xg(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Yg(this._firestore,n))}))}isEqual(e){return ig(this._delegate,e._delegate)}}class ey extends Jg{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Gg(this.firestore,e):null}doc(e){try{return new Gg(this.firestore,void 0===e?xp(this._delegate):xp(this._delegate,e))}catch(t){throw Kg(t,"doc()","CollectionReference.doc()")}}add(e){return mg(this._delegate,e).then((e=>new Gg(this.firestore,e)))}isEqual(e){return Np(this._delegate,e._delegate)}withConverter(e){return new ey(this.firestore,e?this._delegate.withConverter($g.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ty(e){return wp(e,Sp)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(...e){this._delegate=new Yp(...e)}static documentId(){return new ny(Ni.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof Yp&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this._delegate=e}static serverTimestamp(){const e=kg();return e._methodName="FieldValue.serverTimestamp",new ry(e)}static delete(){const e=Sg();return e._methodName="FieldValue.delete",new ry(e)}static arrayUnion(...e){const t=Cg(...e);return t._methodName="FieldValue.arrayUnion",new ry(t)}static arrayRemove(...e){const t=Ag(...e);return t._methodName="FieldValue.arrayRemove",new ry(t)}static increment(e){const t=xg(e);return t._methodName="FieldValue.increment",new ry(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy={Firestore:Vg,GeoPoint:Xp,Timestamp:Si,Blob:Lg,Transaction:qg,WriteBatch:zg,DocumentReference:Gg,DocumentSnapshot:Qg,Query:Jg,QueryDocumentSnapshot:Yg,QuerySnapshot:Zg,CollectionReference:ey,FieldPath:ny,FieldValue:ry,setLogLevel:Bg,CACHE_SIZE_UNLIMITED:Lp};function sy(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},iy)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(e){sy(e,((e,t)=>new Vg(e,t,new Ug))),e.registerVersion(Ng,Rg)}oy(i.Z)},2483:function(e,t,n){n.d(t,{PO:function(){return V},p7:function(){return tt},tv:function(){return rt}});n(560);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=b(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return l(e)?_(e,t):l(t)?_(t,e):e===t}function _(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function b(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var I,E;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function T(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const S=/^[^#]+#/;function k(e,t){return e.replace(S,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function x(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=C(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const R=new Map;function D(e,t){R.set(e,t)}function O(e){const t=R.get(e);return R.delete(e),t}let P=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function M(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=L(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:I.pop,direction:l?l>0?E.forward:E.back:E.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:A()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function F(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function U(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,F(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:A()});s(o.current,o,!0);const c=a({},F(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function V(e){e=T(e);const t=U(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:k.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function j(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var $;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})($||($={}));function G(e,t){return a(new Error,{type:e,[z]:!0},t)}function K(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const W="[^/]+?",H={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function Y(e,t){const n=a({},H,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||W;if(l!==W){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function J(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=J(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function re(e,t,n){const r=Y(ne(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=oe(e);c.aliasOf=r&&r.record;const h=le(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=re(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ce(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw G(1,{location:e});0,o=i.record.name,c=a(se(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw G(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:ue(u)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function se(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function oe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const de=/#/g,fe=/&/g,pe=/\//g,me=/=/g,ge=/\?/g,ye=/\+/g,ve=/%5B/g,we=/%5D/g,_e=/%5E/g,be=/%60/g,Ie=/%7B/g,Ee=/%7C/g,Te=/%7D/g,Se=/%20/g;function ke(e){return encodeURI(""+e).replace(Ee,"|").replace(ve,"[").replace(we,"]")}function Ce(e){return ke(e).replace(Ie,"{").replace(Te,"}").replace(_e,"^")}function Ae(e){return ke(e).replace(ye,"%2B").replace(Se,"+").replace(de,"%23").replace(fe,"%26").replace(be,"`").replace(Ie,"{").replace(Te,"}").replace(_e,"^")}function xe(e){return Ae(e).replace(me,"%3D")}function Ne(e){return ke(e).replace(de,"%23").replace(ge,"%3F")}function Re(e){return null==e?"":Ne(e).replace(pe,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Oe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),s=De(n<0?e:e.slice(0,n)),o=n<0?null:De(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Pe(e){let t="";for(let n in e){const r=e[n];if(n=xe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),Fe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),je=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function qe(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(G(4,{from:n,to:t})):e instanceof Error?a(e):j(e)?a(G(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function ze(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if($e(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push(qe(c,n,r,s,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&qe(u,n,r,s,e)()}))))}}}return i}function $e(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ge(e){const t=(0,r.f3)(Ue),n=(0,r.f3)(Ve),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qe(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return He(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ke=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.qj)(Ge(e)),{options:s}=(0,r.f3)(Ue),o=(0,r.Fl)((()=>({[Je(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=Ke;function He(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(je),o=(0,r.Fl)((()=>e.route||s.value)),c=(0,r.f3)(Fe,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Fe,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Me,l),(0,r.JJ)(je,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&y(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return Ze(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Ze(n.default,{Component:m,route:i})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ie(e.routes,e),n=e.parseQuery||Oe,o=e.stringifyQuery||Pe,h=e.history;const d=Be(),m=Be(),y=Be(),v=(0,i.XI)(q);let w=q;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=c.bind(null,(e=>""+e)),b=c.bind(null,Re),E=c.bind(null,De);function T(e,n){let r,i;return B(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function R(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:E(s.params),hash:De(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:b(t)}),r.params=b(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=_(E(s.params));const u=p(o,a({},e,{hash:Ce(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pe?Le(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function P(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function L(e,t){if(w!==e)return G(8,{from:t,to:e})}function M(e){return V(e)}function F(e){return M(a(P(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function V(e,t){const n=w=R(e),r=v.value,i=e.state,s=e.force,c=!0===e.replace,u=U(n);if(u)return V(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&g(o,r,n)&&(h=G(16,{to:l,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):$(l,r)).catch((e=>K(e)?K(e,2)?e:ne(e):ee(e,l,r))).then((e=>{if(e){if(K(e,2))return V(a({replace:c},P(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=H(l,r,!0,c,i);return W(l,r,e),e}))}function j(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function z(e){const t=ae.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function $(e,t){let n;const[r,i,s]=nt(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=j.bind(null,e,t);return n.push(o),ue(n).then((()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),ue(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),ue(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),ue(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(s,"beforeRouteEnter",e,t),n.push(o),ue(n)))).then((()=>{n=[];for(const r of m.list())n.push(qe(r,e,t));return n.push(o),ue(n)})).catch((e=>K(e,8)?e:Promise.reject(e)))}function W(e,t,n){y.list().forEach((r=>z((()=>r(e,t,n)))))}function H(e,t,n,r,i){const o=L(e,t);if(o)return o;const c=t===q,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),v.value=e,re(e,t,n,c),ne()}let Q;function Y(){Q||(Q=h.listen(((e,t,n)=>{if(!ce.listening)return;const r=R(e),i=U(r);if(i)return void V(a(i,{replace:!0}),r).catch(u);w=r;const o=v.value;s&&D(N(o.fullPath,n.delta),A()),$(r,o).catch((e=>K(e,12)?e:K(e,2)?(V(e.to,r).then((e=>{K(e,20)&&!n.delta&&n.type===I.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),ee(e,r,o)))).then((e=>{e=e||H(r,o,!1),e&&(n.delta&&!K(e,8)?h.go(-n.delta,!1):n.type===I.pop&&K(e,20)&&h.go(-1,!1)),W(r,o,e)})).catch(u)})))}let J,X=Be(),Z=Be();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function te(){return J&&v.value!==q?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function ne(e){return J||(J=!e,Y(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function re(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&O(N(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&x(e))).catch((e=>ee(e,t,n)))}const se=e=>h.go(e);let oe;const ae=new Set,ce={currentRoute:v,listening:!0,addRoute:T,removeRoute:S,hasRoute:C,getRoutes:k,resolve:R,options:e,push:M,replace:F,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!oe&&v.value===q&&(oe=!0,M(h.location).catch((e=>{0})));const n={};for(const i in q)Object.defineProperty(n,i,{get:()=>v.value[i],enumerable:!0});e.provide(Ue,t),e.provide(Ve,(0,i.Um)(n)),e.provide(je,v);const r=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(w=q,Q&&Q(),Q=null,v.value=q,oe=!1,J=!1),r()}}};function ue(e){return e.reduce(((e,t)=>e.then((()=>z(t)))),Promise.resolve())}return ce}function nt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>y(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>y(e,a)))||i.push(a))}return[n,r,i]}function rt(){return(0,r.f3)(Ue)}}}]);
//# sourceMappingURL=chunk-vendors.22f2afba.js.map
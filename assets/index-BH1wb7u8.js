var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return ee(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function te(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(te)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=te,ne=function(){ie.postMessage(null)}}else ne=function(){_(te,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.1`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,`passive`,{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},k=kn(An),jn=h({},An,{view:0,detail:0}),Mn=kn(jn),A,Nn,j,Pn=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==j&&(j&&e.type===`mousemove`?(A=e.screenX-j.screenX,Nn=e.screenY-j.screenY):Nn=A=0,j=e),A)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),Fn=kn(Pn),In=kn(h({},Pn,{dataTransfer:0})),Ln=kn(h({},jn,{relatedTarget:0})),Rn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=kn(h({},An,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var M=kn(h({},jn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=kn(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=kn(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Jn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=kn(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=kn(h({},An,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=yn&&`CompositionEvent`in window,$n=null;yn&&`documentMode`in document&&($n=document.documentMode);var er=yn&&`TextEvent`in window&&!$n,tr=yn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=Tn(),wn=Cn=Sn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new k(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){yd(e,0)}function hr(e){if(Gt(Dt(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(yn){var vr;if(yn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,fn(e)),_n(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=yn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Kt(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new k(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};yn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),Mt(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=mi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=mi(13,n,t,a),e.elementType=T,e.lanes=o,e;case ee:return e=mi(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case ne:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-qe(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zi=zi.return}}function Ki(e){if(e!==zi)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else t===27?(t=N,Zd(e.type)?(e=lf,lf=null,N=e):N=t):N=zi?cf(e.stateNode.nextSibling):null;return!0}function qi(){N=zi=null,P=!1}function Ji(){var e=Bi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=pe(null),Zi=null,Qi=null;function $i(e,t,n){O(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,me(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,fa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new la,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=E.S;E.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var F=pe(null);function Ca(){var e=F.current;return e===null?K.pooledCache:e}function wa(e,t){t===null?O(F,F.current):O(F,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:fa._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,I(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,I(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function I(e){if(e===Ea||e===Oa)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),ja(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ne&&Ma(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case ne:return t=Ma(t),f(e,t,n)}if(le(t)||oe(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===C)return f(e,sa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ne:return n=Ma(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===C)return p(e,t,sa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:return r=Ma(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===C)return m(e,t,n,sa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ne&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case ne:return o=Ma(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===C)return b(e,r,sa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=va;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=pe(null),no=pe(0);function ro(e,t){e=Wl,O(no,e),O(to,t),Wl=e|t.baseLanes}function io(){O(no,Wl),O(to,to.current)}function ao(){Wl=no.current,me(to),me(no)}var oo=pe(null),so=null;function co(e){var t=e.alternate;O(L,L.current&1),O(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){O(L,L.current),O(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(O(L,L.current),O(oo,e),so===null&&(so=e)):fo(e)}function fo(){O(L,L.current),O(oo,oo.current)}function po(e){me(oo),so===e&&(so=null),me(L)}var L=pe(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,z=null,B=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){E.H=zs;var t=z!==null&&z.next!==null;if(ho=0,B=z=R=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ia(e)&&(ic=!0))}function Eo(e,t,n,r){R=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,B=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}ho=0,B=z=R=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return B===null?R.memoizedState=B=e:B=B.next=e,B}function H(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=B===null?R.memoizedState:B.next;if(t!==null)B=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},B===null?R.memoizedState=B=e:B=B.next=e}return B}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ja(xo,e,t),t=R,(B===null?t.memoizedState:B.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return oa(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),z,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((ho&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(ic=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=R,a=H(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((z||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||B!==null&&B.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||ho&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=Mo(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Go(e){var t=li(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,z,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(P){var n=K.formState;if(n!==null){a:{var r=R;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=cf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,R,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,R,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),z,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=z;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=Mo(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();R.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&Co(r,z.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(R.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=Mo(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||ho&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),R.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Or(n,t)?n:to.current===null?!(ho&42)||ho&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),R.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Or(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Fs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,xa(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ue,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return oa(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ci(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),K===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===R||t!==null&&t===R}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var zs={readContext:oa,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:oa,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,R,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=jo();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(P){var n=Ni,r=Mi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,R)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:oa,use:Po,useCallback:ys,useContext:oa,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),z.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),z,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:oa,use:Po,useCallback:ys,useContext:oa,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return z===null?xs(n,e,t):Ss(n,z.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return z===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,z,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ni(e)}function Ys(e){console.error(e)}function Xs(e){ni(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ka(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(P)return t=oo.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=$s(e.stateNode,r,a),Ya(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(P&&s&&Ii(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),io(),fo(t)):(wa(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:fa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),io(),uo(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Va(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(lo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ra(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,N=cf(s.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=fc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return aa(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ua||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ua||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return qi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ta()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(L.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(P){if(a?co(t):fo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(co(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ra(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=cf(c.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ta():(l=fa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Va(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=L.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(L,o),ac(e,t,r,n),r=P?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ia(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),$i(t,fa,e.memoizedState.cache),qi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(L,L.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:$i(t,fa,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,P&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,fa,r),r!==o.cache&&na(t,[fa],n,!0),Za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),Yi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=cf(e.firstChild),zi=t,P=!0,Bi=null,Vi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&P&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),zi=t,Vi=!0,a=N,Zd(t.type)?(lf=a,N=cf(r.firstChild)):N=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=tf(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,zi=t,N=cf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=nf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,zi=t,N=null,e=!0)),e||Ui(t)),null;case 13:return Cc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(fa),e===null?(a=Ca(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),$i(t,fa,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,fa,r),r!==a.cache&&na(t,[fa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,fa,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Na=ka,Da}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Na=ka,Da}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(fa),be(),n.pendingContext&&=(n.context=n.pendingContext,null),(e===null||e.child===null)&&(Ki(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=he.current,Ki(t)?Wi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=he.current,Ki(t))Wi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ui(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return ea(t.type),U(t),null;case 19:if(me(L),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return O(L,L.current&1|2),P&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return U(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=L.current,O(L,a?n&1|2:n&1),P&&Pi(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(F),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(fa),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(fa),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(L),null;case 4:return be(),null;case 10:return ea(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&me(F),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(fa),null;case 25:return null;default:return null}}function Vc(e,t){switch(Li(t),t.tag){case 3:ea(fa),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:me(L);break;case 10:ea(t.type);break;case 22:case 23:po(t),ao(),e!==null&&me(F);break;case 24:ea(fa)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=oa(fa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(fa).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?pt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||P){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=oo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Fe(),10<a)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Ml(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Qi=Zi=null,Ao(e),Fa=null,Ia=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=gi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,oi(),n}function Cu(e,t){R=null,E.H=zs,t===Ea||t===Oa?(t=Pa(),Y=3):t===Da?(t=Pa(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,wi(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(J&4194048)===J?so===null:(J&62914560)===J||J&536870912?e===so:!1}function Tu(){var e=E.H;return E.H=zs,e===null?zs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&oo.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,oi()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Fe()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Aa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Aa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Qi=Zi=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,oi(),X):0}function ju(){for(;q!==null&&!Ne();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=_i(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Qi=Zi=null,Ao(t),Fa=null,Ia=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,wi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,wi(n,e.current)),q=null;return}t.flags&32768?(P||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=wi(n,t),t=$s(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=wi(n,e),n=ec(2),r=qa(t,n,2),r!==null&&(tc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Fe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=li(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new k(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ei.length;hd++){var gd=ei[hd];ti(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=k,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=M;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Kr:case qr:case Jr:l=Rn;break;case Qr:l=Jn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c))if(_r)v=Er;else{v=wr;var y=Cr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(r){if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}}else if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,kt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=fi,e):fi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=li(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.1`)throw Error(i(527,Lp,`19.2.1`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.1`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))(),_=c(u(),1),v=`modulepreload`,y=function(e){return`/profilum/`+e},b={};const x=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=y(t,n),t in b)return;b[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:v,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var S=`popstate`;function C(e={}){function t(e,t){let{pathname:n,search:r,hash:i}=e.location;return ne(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){return typeof t==`string`?t:re(t)}return ae(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substring(2,10)}function te(e,t){return{usr:e.state,key:e.key,idx:t}}function ne(e,t,n=null,r){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ie(t):t,state:n,key:t&&t.key||r||ee()}}function re({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ie(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ae(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ne(h.location,e,t);n&&n(r,e),l=u()+1;let d=te(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ne(h.location,e,t);n&&n(r,e),l=u();let i=te(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return oe(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function oe(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:re(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function se(e,t,n=`/`){return ce(e,t,n,!1)}function ce(e,t,n,r){let i=Ce((typeof t==`string`?ie(t):t).pathname||`/`,n);if(i==null)return null;let a=E(e);ue(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Se(i);o=ye(a[e],t,r)}return o}function le(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function E(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Me([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),E(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:_e(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of D(e.path))a(e,t,!0,n)}),t}function D(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=D(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ue(e){e.sort((e,t)=>e.score===t.score?ve(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var de=/^:[\w-]+$/,fe=3,pe=2,me=1,O=10,he=-2,ge=e=>e===`*`;function _e(e,t){let n=e.split(`/`),r=n.length;return n.some(ge)&&(r+=he),t&&(r+=pe),n.filter(e=>!ge(e)).reduce((e,t)=>e+(de.test(t)?fe:t===``?me:O),r)}function ve(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ye(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Me([a,u.pathname]),pathnameBase:Ne(Me([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Me([a,u.pathnameBase]))}return o}function be(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xe(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function xe(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`)).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Se(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ce(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var we=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=e=>we.test(e);function Ee(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ie(e):e,a;if(n)if(Te(n))a=n;else{if(n.includes(`//`)){let e=n;n=n.replace(/\/\/+/g,`/`),T(!1,`Pathnames cannot have embedded double slashes - normalizing ${e} -> ${n}`)}a=n.startsWith(`/`)?De(n.substring(1),`/`):De(n,t)}else a=t;return{pathname:a,search:Pe(r),hash:Fe(i)}}function De(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Oe(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ke(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ae(e){let t=ke(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function je(e,t,n,r=!1){let i;typeof e==`string`?i=ie(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Oe(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Oe(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Oe(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ee(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Me=e=>e.join(`/`).replace(/\/\/+/g,`/`),Ne=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Pe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Fe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function Ie(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Le(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Re=_.createContext(null);Re.displayName=`DataRouter`;var ze=_.createContext(null);ze.displayName=`DataRouterState`,_.createContext(!1);var Be=_.createContext({isTransitioning:!1});Be.displayName=`ViewTransition`;var Ve=_.createContext(new Map);Ve.displayName=`Fetchers`;var He=_.createContext(null);He.displayName=`Await`;var Ue=_.createContext(null);Ue.displayName=`Navigation`;var We=_.createContext(null);We.displayName=`Location`;var Ge=_.createContext({outlet:null,matches:[],isDataRoute:!1});Ge.displayName=`Route`;var Ke=_.createContext(null);Ke.displayName=`RouteError`;function qe(e,{relative:t}={}){w(Je(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(Ue),{hash:i,pathname:a,search:o}=et(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Me([n,a])),r.createHref({pathname:s,search:o,hash:i})}function Je(){return _.useContext(We)!=null}function Ye(){return w(Je(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(We).location}var Xe=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Ze(e){_.useContext(Ue).static||_.useLayoutEffect(e)}function Qe(){let{isDataRoute:e}=_.useContext(Ge);return e?_t():$e()}function $e(){w(Je(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(Re),{basename:t,navigator:n}=_.useContext(Ue),{matches:r}=_.useContext(Ge),{pathname:i}=Ye(),a=JSON.stringify(Ae(r)),o=_.useRef(!1);return Ze(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(T(o.current,Xe),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=je(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Me([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function et(e,{relative:t}={}){let{matches:n}=_.useContext(Ge),{pathname:r}=Ye(),i=JSON.stringify(Ae(n));return _.useMemo(()=>je(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function tt(e,t){return nt(e,t)}function nt(e,t,n,r,i){w(Je(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:a}=_.useContext(Ue),{matches:o}=_.useContext(Ge),s=o[o.length-1],c=s?s.params:{},l=s?s.pathname:`/`,u=s?s.pathnameBase:`/`,d=s&&s.route;{let e=d&&d.path||``;yt(l,!d||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let f=Ye(),p;if(t){let e=typeof t==`string`?ie(t):t;w(u===`/`||e.pathname?.startsWith(u),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=f;let m=p.pathname||`/`,h=m;if(u!==`/`){let e=u.replace(/^\//,``).split(`/`);h=`/`+m.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let g=se(e,{pathname:h});T(d||g!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),T(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=st(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:Me([u,a.encodeLocation?a.encodeLocation(e.pathname.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?u:Me([u,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),o,n,r,i);return t&&v?_.createElement(We.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,...p},navigationType:`POP`}},v):v}function rt(){let e=gt(),t=Ie(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var it=_.createElement(rt,null),at=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){return this.state.error===void 0?this.props.children:_.createElement(Ge.Provider,{value:this.props.routeContext},_.createElement(Ke.Provider,{value:this.state.error,children:this.props.component}))}};function ot({routeContext:e,match:t,children:n}){let r=_.useContext(Re);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(Ge.Provider,{value:e},n)}function st(e,t=[],n=null,r=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(`,`)}`),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}let l=n&&r?(e,t)=>{r(e,{location:n.location,params:n.matches?.[0]?.params??{},unstable_pattern:Le(n.matches),errorInfo:t})}:void 0;return a.reduceRight((e,r,i)=>{let u,d=!1,f=null,p=null;n&&(u=o&&r.route.id?o[r.route.id]:void 0,f=r.route.errorElement||it,s&&(c<0&&i===0?(yt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):c===i&&(d=!0,p=r.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,i+1)),h=()=>{let t;return t=u?f:d?p:r.route.Component?_.createElement(r.route.Component,null):r.route.element?r.route.element:e,_.createElement(ot,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?_.createElement(at,{location:n.location,revalidation:n.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function ct(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lt(e){let t=_.useContext(Re);return w(t,ct(e)),t}function ut(e){let t=_.useContext(ze);return w(t,ct(e)),t}function dt(e){let t=_.useContext(Ge);return w(t,ct(e)),t}function ft(e){let t=dt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function pt(){return ft(`useRouteId`)}function mt(){return ut(`useNavigation`).navigation}function ht(){let{matches:e,loaderData:t}=ut(`useMatches`);return _.useMemo(()=>e.map(e=>le(e,t)),[e,t])}function gt(){let e=_.useContext(Ke),t=ut(`useRouteError`),n=ft(`useRouteError`);return e===void 0?t.errors?.[n]:e}function _t(){let{router:e}=lt(`useNavigate`),t=ft(`useNavigate`),n=_.useRef(!1);return Ze(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{T(n.current,Xe),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var vt={};function yt(e,t,n){!t&&!vt[e]&&(vt[e]=!0,T(!1,n))}_.useOptimistic,_.memo(bt);function bt({routes:e,future:t,state:n,unstable_onError:r}){return nt(e,void 0,n,r,t)}function xt(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function St({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){w(!Je(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ie(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`}=n,m=_.useMemo(()=>{let e=Ce(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p},navigationType:r}},[s,l,u,d,f,p,r]);return T(m!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:_.createElement(Ue.Provider,{value:c},_.createElement(We.Provider,{children:t,value:m}))}function Ct({children:e,location:t}){return tt(wt(e),t)}function wt(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,wt(e.props.children,i));return}w(e.type===xt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=wt(e.props.children,i)),n.push(a)}),n}var Tt=`get`,Et=`application/x-www-form-urlencoded`;function Dt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Ot(e){return Dt(e)&&e.tagName.toLowerCase()===`button`}function kt(e){return Dt(e)&&e.tagName.toLowerCase()===`form`}function At(e){return Dt(e)&&e.tagName.toLowerCase()===`input`}function jt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Mt(e,t){return e.button===0&&(!t||t===`_self`)&&!jt(e)}function Nt(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Pt(e,t){let n=Nt(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var Ft=null;function It(){if(Ft===null)try{new FormData(document.createElement(`form`),0),Ft=!1}catch{Ft=!0}return Ft}var Lt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Rt(e){return e!=null&&!Lt.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Et}"`),null):e}function zt(e,t){let n,r,i,a,o;if(kt(e)){let o=e.getAttribute(`action`);r=o?Ce(o,t):null,n=e.getAttribute(`method`)||Tt,i=Rt(e.getAttribute(`enctype`))||Et,a=new FormData(e)}else if(Ot(e)||At(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ce(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Tt,i=Rt(e.getAttribute(`formenctype`))||Rt(o.getAttribute(`enctype`))||Et,a=new FormData(o,e),!It()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Dt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Tt,r=null,i=Et,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function Bt(e,t){if(e===!1||e==null)throw Error(t)}function Vt(e,t,n){let r=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return r.pathname===`/`?r.pathname=`_root.${n}`:t&&Ce(r.pathname,t)===`/`?r.pathname=`${t.replace(/\/$/,``)}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,``)}.${n}`,r}async function Ht(e,t){if(e.id in t)return t[e.id];try{let n=await x(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ut(e){return e!=null&&typeof e.page==`string`}function Wt(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function Gt(e,t,n){return Xt((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Ht(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Wt).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function Kt(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function qt(e,t,{includeHydrateFallback:n}={}){return Jt(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Jt(e){return[...new Set(e)]}function Yt(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Xt(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Ut(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Yt(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Zt(){let e=_.useContext(Re);return Bt(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Qt(){let e=_.useContext(ze);return Bt(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var $t=_.createContext(void 0);$t.displayName=`FrameworkContext`;function en(){let e=_.useContext($t);return Bt(e,`You must render this element inside a <HydratedRouter> element`),e}function tn(e,t){let n=_.useContext($t),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:nn(s,p),onBlur:nn(c,m),onMouseEnter:nn(l,p),onMouseLeave:nn(u,m),onTouchStart:nn(d,p)}]:[a,f,{}]:[!1,f,{}]}function nn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function rn({page:e,...t}){let{router:n}=Zt(),r=_.useMemo(()=>se(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?_.createElement(on,{page:e,matches:r,...t}):null}function an(e){let{manifest:t,routeModules:n}=en(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return Gt(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function on({page:e,matches:t,...n}){let r=Ye(),{manifest:i,routeModules:a}=en(),{basename:o}=Zt(),{loaderData:s,matches:c}=Qt(),l=_.useMemo(()=>Kt(e,t,c,i,r,`data`),[e,t,c,i,r]),u=_.useMemo(()=>Kt(e,t,c,i,r,`assets`),[e,t,c,i,r]),d=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,c=!1;if(t.forEach(e=>{let t=i.routes[e.route.id];!t||!t.hasLoader||(!l.some(t=>t.route.id===e.route.id)&&e.route.id in s&&a[e.route.id]?.shouldRevalidate||t.hasClientLoader?c=!0:n.add(e.route.id))}),n.size===0)return[];let u=Vt(e,o,`data`);return c&&n.size>0&&u.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[u.pathname+u.search]},[o,s,r,i,l,t,e,a]),f=_.useMemo(()=>qt(u,i),[u,i]),p=an(u);return _.createElement(_.Fragment,null,d.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),f.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),p.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t})))}function sn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var cn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{cn&&(window.__reactRouterVersion=`7.10.1`)}catch{}function ln({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=_.useRef();i.current??=C({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(St,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n===!0})}function un({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(St,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r===!0})}un.displayName=`unstable_HistoryRouter`;var dn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fn=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,viewTransition:u,...d},f){let{basename:p,unstable_useTransitions:m}=_.useContext(Ue),h=typeof c==`string`&&dn.test(c),g,v=!1;if(typeof c==`string`&&h&&(g=c,cn))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=Ce(t.pathname,p);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:v=!0}catch{T(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=qe(c,{relative:r}),[b,x,S]=tn(n,d),C=yn(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,viewTransition:u,unstable_useTransitions:m});function w(t){e&&e(t),t.defaultPrevented||C(t)}let ee=_.createElement(`a`,{...d,...S,href:g||y,onClick:v||i?e:w,ref:sn(f,x),target:s,"data-discover":!h&&t===`render`?`true`:void 0});return b&&!h?_.createElement(_.Fragment,null,ee,_.createElement(rn,{page:y})):ee});fn.displayName=`Link`;var pn=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=et(a,{relative:c.relative}),d=Ye(),f=_.useContext(ze),{navigator:p,basename:m}=_.useContext(Ue),h=f!=null&&An(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Ce(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ee=typeof i==`function`?i(C):i;return _.createElement(fn,{...c,"aria-current":w,className:T,ref:l,style:ee,to:a,viewTransition:o},typeof s==`function`?s(C):s)});pn.displayName=`NavLink`;var mn=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Tt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,...f},p)=>{let{unstable_useTransitions:m}=_.useContext(Ue),h=Cn(),g=wn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&dn.test(s);return _.createElement(`form`,{ref:p,method:v,action:g,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,f=()=>h(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d});m&&n!==!1?_.startTransition(()=>f()):f()},...f,"data-discover":!y&&e===`render`?`true`:void 0})});mn.displayName=`Form`;function hn({getKey:e,storageKey:t,...n}){let r=_.useContext($t),{basename:i}=_.useContext(Ue),a=Ye(),o=ht();On({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=Dn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return _.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${JSON.stringify(t||Tn)}, ${JSON.stringify(s)})`}})}hn.displayName=`ScrollRestoration`;function gn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _n(e){let t=_.useContext(Re);return w(t,gn(e)),t}function vn(e){let t=_.useContext(ze);return w(t,gn(e)),t}function yn(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:o,unstable_useTransitions:s}={}){let c=Qe(),l=Ye(),u=et(e,{relative:a});return _.useCallback(d=>{if(Mt(d,t)){d.preventDefault();let t=n===void 0?re(l)===re(u):n,f=()=>c(e,{replace:t,state:r,preventScrollReset:i,relative:a,viewTransition:o});s?_.startTransition(()=>f()):f()}},[l,c,u,n,r,t,e,i,a,o,s])}function bn(e){T(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=_.useRef(Nt(e)),n=_.useRef(!1),r=Ye(),i=_.useMemo(()=>Pt(r.search,n.current?null:t.current),[r.search]),a=Qe();return[i,_.useCallback((e,t)=>{let r=Nt(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var xn=0,Sn=()=>`__${String(++xn)}__`;function Cn(){let{router:e}=_n(`useSubmit`),{basename:t}=_.useContext(Ue),n=pt(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=zt(e,t);a.navigate===!1?await r(a.fetcherKey||Sn(),n,a.action||o,{preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function wn(e,{relative:t}={}){let{basename:n}=_.useContext(Ue),r=_.useContext(Ge);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...et(e||`.`,{relative:t})},o=Ye();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Me([n,a.pathname])),re(a)}var Tn=`react-router-scroll-positions`,En={};function Dn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ce(e.pathname,n)||e.pathname},t)),i??=e.key,i}function On({getKey:e,storageKey:t}={}){let{router:n}=_n(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=vn(`useScrollRestoration`),{basename:a}=_.useContext(Ue),o=Ye(),s=ht(),c=mt();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),kn(_.useCallback(()=>{if(c.state===`idle`){let t=Dn(o,s,a,e);En[t]=window.scrollY}try{sessionStorage.setItem(t||Tn,JSON.stringify(En))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Tn);e&&(En=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(En,()=>window.scrollY,e?(t,n)=>Dn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function kn(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function An(e,{relative:t}={}){let n=_.useContext(Be);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=_n(`useViewTransitionState`),i=et(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ce(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ce(n.nextLocation.pathname,r)||n.nextLocation.pathname;return be(i.pathname,o)!=null||be(i.pathname,a)!=null}var k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},k.apply(this,arguments)};function jn(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Mn=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),A=`-ms-`,Nn=`-moz-`,j=`-webkit-`,Pn=`comm`,Fn=`rule`,In=`decl`,Ln=`@import`,Rn=`@keyframes`,zn=`@layer`,Bn=Math.abs,Vn=String.fromCharCode,Hn=Object.assign;function Un(e,t){return qn(e,0)^45?(((t<<2^qn(e,0))<<2^qn(e,1))<<2^qn(e,2))<<2^qn(e,3):0}function Wn(e){return e.trim()}function Gn(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Kn(e,t,n){return e.indexOf(t,n)}function qn(e,t){return e.charCodeAt(t)|0}function Jn(e,t,n){return e.slice(t,n)}function Yn(e){return e.length}function Xn(e){return e.length}function Zn(e,t){return t.push(e),e}function Qn(e,t){return e.map(t).join(``)}function $n(e,t){return e.filter(function(e){return!Gn(e,t)})}var er=1,tr=1,nr=0,rr=0,ir=0,ar=``;function or(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:er,column:tr,length:o,return:``,siblings:s}}function sr(e,t){return Hn(or(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function cr(e){for(;e.root;)e=sr(e.root,{children:[e]});Zn(e,e.siblings)}function lr(){return ir}function ur(){return ir=rr>0?qn(ar,--rr):0,tr--,ir===10&&(tr=1,er--),ir}function dr(){return ir=rr<nr?qn(ar,rr++):0,tr++,ir===10&&(tr=1,er++),ir}function fr(){return qn(ar,rr)}function pr(){return rr}function mr(e,t){return Jn(ar,e,t)}function hr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gr(e){return er=tr=1,nr=Yn(ar=e),rr=0,[]}function _r(e){return ar=``,e}function vr(e){return Wn(mr(rr-1,xr(e===91?e+2:e===40?e+1:e)))}function yr(e){for(;(ir=fr())&&ir<33;)dr();return hr(e)>2||hr(ir)>3?``:` `}function br(e,t){for(;--t&&dr()&&!(ir<48||ir>102||ir>57&&ir<65||ir>70&&ir<97););return mr(e,pr()+(t<6&&fr()==32&&dr()==32))}function xr(e){for(;dr();)switch(ir){case e:return rr;case 34:case 39:e!==34&&e!==39&&xr(ir);break;case 40:e===41&&xr(e);break;case 92:dr();break}return rr}function Sr(e,t){for(;dr()&&e+ir!==57&&!(e+ir===84&&fr()===47););return`/*`+mr(t,rr-1)+`*`+Vn(e===47?e:dr())}function Cr(e){for(;!hr(fr());)dr();return mr(e,rr)}function wr(e){return _r(Tr(``,null,null,null,[``],e=gr(e),0,[0],e))}function Tr(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=dr()){case 40:if(m!=108&&qn(C,d-1)==58){Kn(C+=M(vr(v),`&`,`&\f`),`&\f`,Bn(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=vr(v);break;case 9:case 10:case 13:case 32:C+=yr(m);break;case 92:C+=br(pr()-1,7);continue;case 47:switch(fr()){case 42:case 47:Zn(Dr(Sr(dr(),pr()),t,n,c),c);break;default:C+=`/`}break;case 123*h:s[l++]=Yn(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=M(C,/\f/g,``)),p>0&&Yn(C)-d&&Zn(p>32?Or(C+`;`,r,n,d-1,c):Or(M(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(Zn(S=Er(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)Tr(C,t,S,S,b,a,d,s,x);else switch(f===99&&qn(C,3)===110?100:f){case 100:case 108:case 109:case 115:Tr(e,S,S,r&&Zn(Er(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x);break;default:Tr(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Yn(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&ur()==125)continue}switch(C+=Vn(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Yn(C)-1)*_,_=1;break;case 64:fr()===45&&(C+=vr(dr())),f=fr(),u=d=Yn(y=C+=Cr(pr())),v++;break;case 45:m===45&&Yn(C)==2&&(h=0)}}return a}function Er(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Xn(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=Jn(e,f+1,f=Bn(g=o[h])),b=e;v<m;++v)(b=Wn(g>0?p[v]+` `+y:M(y,/&\f/g,p[v])))&&(c[_++]=b);return or(e,t,n,i===0?Fn:s,c,l,u,d)}function Dr(e,t,n,r){return or(e,t,n,Pn,Vn(lr()),Jn(e,2,-2),0,r)}function Or(e,t,n,r,i){return or(e,t,n,In,Jn(e,0,r),Jn(e,r+1,-1),r,i)}function kr(e,t,n){switch(Un(e,t)){case 5103:return j+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 4789:return Nn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+Nn+e+A+e+e;case 5936:switch(qn(e,t+11)){case 114:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return j+e+A+e+e;case 6165:return j+e+A+`flex-`+e+e;case 5187:return j+e+M(e,/(\w+).+(:[^]+)/,j+`box-$1$2`+A+`flex-$1$2`)+e;case 5443:return j+e+A+`flex-item-`+M(e,/flex-|-self/g,``)+(Gn(e,/flex-|baseline/)?``:A+`grid-row-`+M(e,/flex-|-self/g,``))+e;case 4675:return j+e+A+`flex-line-pack`+M(e,/align-content|flex-|-self/g,``)+e;case 5548:return j+e+A+M(e,`shrink`,`negative`)+e;case 5292:return j+e+A+M(e,`basis`,`preferred-size`)+e;case 6060:return j+`box-`+M(e,`-grow`,``)+j+e+A+M(e,`grow`,`positive`)+e;case 4554:return j+M(e,/([^-])(transform)/g,`$1`+j+`$2`)+e;case 6187:return M(M(M(e,/(zoom-|grab)/,j+`$1`),/(image-set)/,j+`$1`),e,``)+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,j+`box-pack:$3`+A+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+j+e+e;case 4200:if(!Gn(e,/flex-|baseline/))return A+`grid-column-align`+Jn(e,t)+e;break;case 2592:case 3360:return A+M(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Gn(e.props,/grid-\w+-end/)})?~Kn(e+(n=n[t].value),`span`,0)?e:A+M(e,`-start`,``)+e+A+`grid-row-span:`+(~Kn(n,`span`,0)?Gn(n,/\d+/):Gn(n,/\d+/)-+Gn(e,/\d+/))+`;`:A+M(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Gn(e.props,/grid-\w+-start/)})?e:A+M(M(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,j+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yn(e)-1-t>6)switch(qn(e,t+1)){case 109:if(qn(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,`$1`+j+`$2-$3$1`+Nn+(qn(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Kn(e,`stretch`,0)?kr(M(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return A+n+`:`+r+s+(i?A+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(qn(e,t+6)===121)return M(e,`:`,`:`+j)+e;break;case 6444:switch(qn(e,qn(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+j+(qn(e,14)===45?`inline-`:``)+`box$3$1`+j+`$2$3$1`+A+`$2box$3`)+e;case 100:return M(e,`:`,`:`+A)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,`scroll-`,`scroll-snap-`)+e}return e}function Ar(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function jr(e,t,n,r){switch(e.type){case zn:if(e.children.length)break;case Ln:case In:return e.return=e.return||e.value;case Pn:return``;case Rn:return e.return=e.value+`{`+Ar(e.children,r)+`}`;case Fn:if(!Yn(e.value=e.props.join(`,`)))return``}return Yn(n=Ar(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Mr(e){var t=Xn(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Nr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Pr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case In:e.return=kr(e.value,e.length,n);return;case Rn:return Ar([sr(e,{value:M(e.value,`@`,`@`+j)})],r);case Fn:if(e.length)return Qn(n=e.props,function(t){switch(Gn(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:cr(sr(e,{props:[M(t,/:(read-\w+)/,`:`+Nn+`$1`)]})),cr(sr(e,{props:[t]})),Hn(e,{props:$n(n,r)});break;case`::placeholder`:cr(sr(e,{props:[M(t,/:(plac\w+)/,`:`+j+`input-$1`)]})),cr(sr(e,{props:[M(t,/:(plac\w+)/,`:`+Nn+`$1`)]})),cr(sr(e,{props:[M(t,/:(plac\w+)/,A+`input-$1`)]})),cr(sr(e,{props:[t]})),Hn(e,{props:$n(n,r)});break}return``})}}var Fr=c(Mn()),Ir={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lr=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Rr=`active`,zr=`data-styled-version`,Br=`6.1.19`,Vr=`/*!sc*/
`,Hr=typeof window<`u`&&typeof document<`u`,Ur=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),Wr={},Gr=Object.freeze([]),Kr=Object.freeze({});function qr(e,t,n){return n===void 0&&(n=Kr),e.theme!==n.theme&&e.theme||t||n.theme}var Jr=new Set(`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.track.u.ul.use.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`)),Yr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xr=/(^-|-$)/g;function Zr(e){return e.replace(Yr,`-`).replace(Xr,``)}var Qr=/(a)(d)/gi,$r=52,ei=function(e){return String.fromCharCode(e+(e>25?39:97))};function ti(e){var t,n=``;for(t=Math.abs(e);t>$r;t=t/$r|0)n=ei(t%$r)+n;return(ei(t%$r)+n).replace(Qr,`$1-$2`)}var ni,ri=5381,ii=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ai=function(e){return ii(ri,e)};function oi(e){return ti(ai(e)>>>0)}function si(e){return e.displayName||e.name||`Component`}function ci(e){return typeof e==`string`&&!0}var li=typeof Symbol==`function`&&Symbol.for,ui=li?Symbol.for(`react.memo`):60115,di=li?Symbol.for(`react.forward_ref`):60112,fi={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mi={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hi=((ni={})[di]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ni[ui]=mi,ni);function gi(e){return(`type`in(t=e)&&t.type.$$typeof)===ui?mi:`$$typeof`in e?hi[e.$$typeof]:fi;var t}var _i=Object.defineProperty,vi=Object.getOwnPropertyNames,yi=Object.getOwnPropertySymbols,bi=Object.getOwnPropertyDescriptor,xi=Object.getPrototypeOf,Si=Object.prototype;function Ci(e,t,n){if(typeof t!=`string`){if(Si){var r=xi(t);r&&r!==Si&&Ci(e,r,n)}var i=vi(t);yi&&(i=i.concat(yi(t)));for(var a=gi(e),o=gi(t),s=0;s<i.length;++s){var c=i[s];if(!(c in pi||n&&n[c]||o&&c in o||a&&c in a)){var l=bi(t,c);try{_i(e,c,l)}catch{}}}}return e}function wi(e){return typeof e==`function`}function Ti(e){return typeof e==`object`&&`styledComponentId`in e}function Ei(e,t){return e&&t?`${e} ${t}`:e||t||``}function Di(e,t){if(e.length===0)return``;for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Oi(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function ki(e,t,n){if(n===void 0&&(n=!1),!n&&!Oi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ki(e[r],t[r]);else if(Oi(t))for(var r in t)e[r]=ki(e[r],t[r]);return e}function Ai(e,t){Object.defineProperty(e,`toString`,{value:t})}function ji(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Mi=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw ji(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=`${this.tag.getRule(a)}${Vr}`;return t},e}(),Ni=new Map,Pi=new Map,Fi=1,Ii=function(e){if(Ni.has(e))return Ni.get(e);for(;Pi.has(Fi);)Fi++;var t=Fi++;return Ni.set(e,t),Pi.set(t,e),t},Li=function(e,t){Fi=t+1,Ni.set(e,t),Pi.set(t,e)},Ri=`style[${Lr}][${zr}="${Br}"]`,zi=RegExp(`^${Lr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),N=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},P=function(e,t){for(var n=(t.textContent??``).split(Vr),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(zi);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(Li(l,c),N(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},Bi=function(e){for(var t=document.querySelectorAll(Ri),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Lr)!==Rr&&(P(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Vi(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var Hi=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${Lr}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(Lr,Rr),r.setAttribute(zr,Br);var o=Vi();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},Ui=function(){function e(e){this.element=Hi(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw ji(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),Wi=function(){function e(e){this.element=Hi(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),Gi=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),Ki=Hr,qi={isServer:!Hr,useCSSOMInjection:!Ur},Ji=function(){function e(e,t,n){e===void 0&&(e=Kr),t===void 0&&(t={});var r=this;this.options=k(k({},qi),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Hr&&Ki&&(Ki=!1,Bi(this)),Ai(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return Pi.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i),o=t.getGroup(n);if(a===void 0||!a.size||o.length===0)return`continue`;var s=`${Lr}.g${n}[id="${i}"]`,c=``;a!==void 0&&a.forEach(function(e){e.length>0&&(c+=`${e},`)}),r+=`${o}${s}{content:"${c}"}${Vr}`},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return Ii(e)},e.prototype.rehydrate=function(){!this.server&&Hr&&Bi(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(k(k({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Gi(n):t?new Ui(n):new Wi(n)}(this.options),new Mi(e));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Ii(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ii(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Ii(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yi=/&/g,Xi=/^\s*\/\/.*$/gm;function Zi(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=Zi(e.children,t)),e})}function Qi(e){var t,n,r,i=e===void 0?Kr:e,a=i.options,o=a===void 0?Kr:a,s=i.plugins,c=s===void 0?Gr:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(e.props[0]=e.props[0].replace(Yi,n).replace(r,l))}),o.prefix&&u.push(Pr),u.push(jr);var d=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=RegExp(`\\${n}\\b`,`g`);var c=e.replace(Xi,``),l=wr(a||i?`${a} ${i} { ${c} }`:c);o.namespace&&(l=Zi(l,o.namespace));var d=[];return Ar(l,Mr(u.concat(Nr(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||ji(15),ii(e,t.name)},ri).toString():``,d}var $i=new Ji,ea=Qi(),ta=_.createContext({shouldForwardProp:void 0,styleSheet:$i,stylis:ea});ta.Consumer;var na=_.createContext(void 0);function ra(){return(0,_.useContext)(ta)}function ia(e){var t=(0,_.useState)(e.stylisPlugins),n=t[0],r=t[1],i=ra().styleSheet,a=(0,_.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),o=(0,_.useMemo)(function(){return Qi({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,_.useEffect)(function(){(0,Fr.default)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,_.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:o}},[e.shouldForwardProp,a,o]);return _.createElement(ta.Provider,{value:s},_.createElement(na.Provider,{value:o},e.children))}var aa=function(){function e(e,t){var n=this;this.inject=function(e,t){t===void 0&&(t=ea);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,Ai(this,function(){throw ji(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=ea),this.name+e.hash},e}(),oa=function(e){return e>=`A`&&e<=`Z`};function sa(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;oa(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var ca=function(e){return e==null||!1===e||e===``},la=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!ca(a)&&(Array.isArray(a)&&a.isCss||wi(a)?r.push(`${sa(i)}:`,a,`;`):Oi(a)?r.push.apply(r,jn(jn([`${i} {`],la(a),!1),[`}`],!1)):r.push(`${sa(i)}: ${t=i,(n=a)==null||typeof n==`boolean`||n===``?``:typeof n!=`number`||n===0||t in Ir||t.startsWith(`--`)?String(n).trim():`${n}px`};`))}return r};function ua(e,t,n,r){if(ca(e))return[];if(Ti(e))return[`.${e.styledComponentId}`];if(wi(e))return!wi(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:ua(e(t),t,n,r);var i;return e instanceof aa?n?(e.inject(n,r),[e.getName(r)]):[e]:Oi(e)?la(e):Array.isArray(e)?Array.prototype.concat.apply(Gr,e.map(function(e){return ua(e,t,n,r)})):[e.toString()]}function da(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wi(n)&&!Ti(n))return!1}return!0}var fa=ai(Br),pa=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&da(e),this.componentId=t,this.baseHash=ii(fa,t),this.baseStyle=n,Ji.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ei(r,this.staticRulesId);else{var i=Di(ua(this.rules,e,t,n)),a=ti(ii(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Ei(r,a),this.staticRulesId=a}else{for(var s=ii(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Di(ua(u,e,t,n));s=ii(s,d+l),c+=d}}if(c){var f=ti(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(c,`.${f}`,void 0,this.componentId)),r=Ei(r,f)}}return r},e}(),ma=_.createContext(void 0);ma.Consumer;function ha(e){var t=_.useContext(ma),n=(0,_.useMemo)(function(){return function(e,t){if(!e)throw ji(14);if(wi(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw ji(8);return t?k(k({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?_.createElement(ma.Provider,{value:n},e.children):null}var ga={};function _a(e,t,n){var r=Ti(e),i=e,a=!ci(e),o=t.attrs,s=o===void 0?Gr:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?Zr(e):`sc`;ga[n]=(ga[n]||0)+1;var r=`${n}-${oi(Br+n+ga[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return ci(e)?`styled.${e}`:`Styled(${si(e)})`}(e):u,f=t.displayName&&t.componentId?`${Zr(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;m=function(e,t){return h(e,t)&&g(e,t)}}else m=h}var v=new pa(n,f,r?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=_.useContext(ma),u=ra(),d=e.shouldForwardProp||u.shouldForwardProp,f=qr(t,l,a)||Kr,p=function(e,t,n){for(var r,i=k(k({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=wi(r=e[a])?r(i):r;for(var s in o)i[s]=s===`className`?Ei(i[s],o[s]):s===`style`?k(k({},i[s]),o[s]):o[s]}return t.className&&(i.className=Ei(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var g in p)p[g]===void 0||g[0]===`$`||g===`as`||g===`theme`&&p.theme===f||(g===`forwardedAs`?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var v=function(e,t){var n=ra();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),y=Ei(o,s);return v&&(y+=` `+v),p.className&&(y+=` `+p.className),h[ci(m)&&!Jr.has(m)?`class`:`className`]=y,n&&(h.ref=n),(0,_.createElement)(m,h)}(b,e,t)}y.displayName=d;var b=_.forwardRef(y);return b.attrs=p,b.componentStyle=v,b.displayName=d,b.shouldForwardProp=m,b.foldedComponentIds=r?Ei(i.foldedComponentIds,i.styledComponentId):``,b.styledComponentId=f,b.target=r?i.target:e,Object.defineProperty(b,`defaultProps`,{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)ki(e,r[n],!0);return e}({},i.defaultProps,e):e}}),Ai(b,function(){return`.${b.styledComponentId}`}),a&&Ci(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function va(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ya=function(e){return Object.assign(e,{isCss:!0})};function ba(e){var t=[...arguments].slice(1);if(wi(e)||Oi(e))return ya(ua(va(Gr,jn([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?ua(n):ya(ua(va(n,t)))}function xa(e,t,n){if(n===void 0&&(n=Kr),!t)throw ji(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,ba.apply(void 0,jn([r],i,!1)))};return r.attrs=function(r){return xa(e,t,k(k({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return xa(e,t,k(k({},n),r))},r}var Sa=function(e){return xa(_a,e)},F=Sa;Jr.forEach(function(e){F[e]=Sa(e)});var Ca=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=da(e),Ji.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Di(ua(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Ji.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function wa(e){var t=[...arguments].slice(1),n=ba.apply(void 0,jn([e],t,!1)),r=`sc-global-${oi(JSON.stringify(n))}`,i=new Ca(n,r),a=function(e){var t=ra(),n=_.useContext(ma),a=_.useRef(t.styleSheet.allocateGSInstance(r)).current;return t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis),_.useLayoutEffect(function(){if(!t.styleSheet.server)return o(a,e,t.styleSheet,n,t.stylis),function(){return i.removeStyles(a,t.styleSheet)}},[a,e,t.styleSheet,n,t.stylis]),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Wr,n,o);else{var s=k(k({},t),{theme:qr(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return _.memo(a)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=Vi();return`<style ${Di([n&&`nonce="${n}"`,`${Lr}="true"`,`${zr}="${Br}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw ji(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw ji(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[Lr]=``,t[zr]=Br,t.dangerouslySetInnerHTML={__html:n},t),i=Vi();return i&&(r.nonce=i),[_.createElement(`style`,k({},r,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new Ji({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw ji(2);return _.createElement(ia,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw ji(3)},e})(),`${Lr}`;var Ta=wa`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: ${e=>e.theme.background};
    color: ${e=>e.theme.text};
    transition: background 0.3s ease, color 0.3s ease;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${e=>e.theme.primary};
    text-decoration: none;
  }

  button {
    font-family: inherit;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  input, textarea, select {
    font-family: inherit;
    border: 1px solid ${e=>e.theme.border};
    border-radius: 4px;
    padding: 0.5rem;
    background: ${e=>e.theme.background};
    color: ${e=>e.theme.text};
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.primary};
  }
`;const Ea={background:`#ffffff`,surface:`#f5f5f5`,text:`#333333`,textSecondary:`#666666`,primary:`#007bff`,secondary:`#6c757d`,accent:`#28a745`,border:`#e0e0e0`,shadow:`rgba(0, 0, 0, 0.1)`},Da={background:`#1a1a1a`,surface:`#2d2d2d`,text:`#ffffff`,textSecondary:`#cccccc`,primary:`#4dabf7`,secondary:`#adb5bd`,accent:`#51cf66`,border:`#404040`,shadow:`rgba(0, 0, 0, 0.3)`};var Oa=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),ka=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Aa=e=>{let t=ka(e);return t.charAt(0).toUpperCase()+t.slice(1)},ja=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Ma=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},Na={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Pa=(0,_.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,_.createElement)(`svg`,{ref:c,...Na,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ja(`lucide`,i),...!a&&!Ma(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])),I=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(Pa,{ref:i,iconNode:t,className:ja(`lucide-${Oa(Aa(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Aa(e),n},Fa=I(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),Ia=I(`battery`,[[`path`,{d:`M 22 14 L 22 10`,key:`nqc4tb`}],[`rect`,{x:`2`,y:`6`,width:`16`,height:`12`,rx:`2`,key:`13zb55`}]]),La=I(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),Ra=I(`car`,[[`path`,{d:`M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2`,key:`5owen`}],[`circle`,{cx:`7`,cy:`17`,r:`2`,key:`u2ysq9`}],[`path`,{d:`M9 17h6`,key:`r8uit2`}],[`circle`,{cx:`17`,cy:`17`,r:`2`,key:`axvx0g`}]]),za=I(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),Ba=I(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Va=I(`cog`,[[`path`,{d:`M11 10.27 7 3.34`,key:`16pf9h`}],[`path`,{d:`m11 13.73-4 6.93`,key:`794ttg`}],[`path`,{d:`M12 22v-2`,key:`1osdcq`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M14 12h8`,key:`4f43i9`}],[`path`,{d:`m17 20.66-1-1.73`,key:`eq3orb`}],[`path`,{d:`m17 3.34-1 1.73`,key:`2wel8s`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`m20.66 17-1.73-1`,key:`sg0v6f`}],[`path`,{d:`m20.66 7-1.73 1`,key:`1ow05n`}],[`path`,{d:`m3.34 17 1.73-1`,key:`nuk764`}],[`path`,{d:`m3.34 7 1.73 1`,key:`1ulond`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}],[`circle`,{cx:`12`,cy:`12`,r:`8`,key:`46899m`}]]),Ha=I(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),Ua=I(`grid-3x3`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M3 15h18`,key:`5xshup`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]]),Wa=I(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),Ga=I(`list`,[[`path`,{d:`M3 5h.01`,key:`18ugdj`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M3 19h.01`,key:`noohij`}],[`path`,{d:`M8 5h13`,key:`1pao27`}],[`path`,{d:`M8 12h13`,key:`1za7za`}],[`path`,{d:`M8 19h13`,key:`m83p4d`}]]),Ka=I(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),qa=I(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),Ja=I(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),Ya=I(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),Xa=I(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),Za=I(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),Qa=I(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),$a=I(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),eo=I(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),to=I(`shopping-cart`,[[`circle`,{cx:`8`,cy:`21`,r:`1`,key:`jimo8o`}],[`circle`,{cx:`19`,cy:`21`,r:`1`,key:`13723u`}],[`path`,{d:`M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12`,key:`9zh506`}]]),no=I(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),ro=I(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),io=I(`thermometer`,[[`path`,{d:`M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z`,key:`17jzev`}]]),ao=I(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),oo=I(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),so=I(`wrench`,[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,key:`1ngwbx`}]]),co=I(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),lo=I(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),uo=`/profilum/assets/avtohaus_logo-Cs_kc0ys.png`,fo=`/profilum/assets/avtohausblacktheme_logo-D7PWDMpK.png`,po=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),L=o(((e,t)=>{t.exports=po()}))(),mo=F.header`
  background: ${e=>e.theme.surface};
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px ${e=>e.theme.shadow};
`,ho=F.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`,R=F.img`
  height: 90px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 50px;
  }
`,z=F.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${e=>e.open?`flex`:`none`};
    flex-direction: column;
    width: 100%;
    background: ${e=>e.theme.surface};
    padding: 1rem 0;
    margin-top: 0.5rem;
  }
`,B=F(pn)`
  color: ${e=>e.theme.text};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  font-size: 0.95rem;

  &.active {
    color: ${e=>e.theme.primary};
  }

  &:hover {
    color: ${e=>e.theme.primary};
  }
`,go=F.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    order: 2;
    justify-content: center;
    width: 100%;
    margin-top: 0.5rem;
  }
`,_o=F(fn)`
  background: none;
  border: none;
  color: ${e=>e.theme.text};
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;

  &:hover {
    background: ${e=>e.theme.surface};
  }
`,vo=F.button`
  background: none;
  border: none;
  color: ${e=>e.theme.text};
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  font-size: 1.1rem;

  &:hover {
    background: ${e=>e.theme.surface};
  }
`,yo=F.button`
  background: none;
  border: none;
  color: ${e=>e.theme.text};
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: none;
  }
`,bo=({toggleTheme:e,theme:t})=>{let[n,r]=(0,_.useState)(!1);return(0,L.jsx)(mo,{children:(0,L.jsxs)(ho,{children:[(0,L.jsx)(fn,{to:`/`,children:(0,L.jsx)(R,{src:t===`light`?uo:fo,alt:`Avtohaus Logo`})}),(0,L.jsxs)(z,{open:n,children:[(0,L.jsx)(B,{to:`/`,end:!0,children:`Главная`}),(0,L.jsx)(B,{to:`/search-parts`,children:`Запчасти`}),(0,L.jsx)(B,{to:`/diagnostics`,children:`Диагностика`}),(0,L.jsx)(B,{to:`/booking`,children:`Запись на ремонт`}),(0,L.jsx)(B,{to:`/services`,children:`Услуги`}),(0,L.jsx)(B,{to:`/about`,children:`О компании`}),(0,L.jsx)(B,{to:`/contacts`,children:`Контакты`})]}),(0,L.jsxs)(go,{children:[(0,L.jsx)(_o,{to:`/favorites`,children:(0,L.jsx)(Wa,{size:20})}),(0,L.jsx)(_o,{to:`/cart`,children:(0,L.jsx)(to,{size:20})}),(0,L.jsx)(_o,{to:`/profile`,children:(0,L.jsx)(oo,{size:20})}),(0,L.jsx)(vo,{onClick:e,children:t===`light`?(0,L.jsx)(Xa,{size:20}):(0,L.jsx)(ro,{size:20})}),(0,L.jsx)(yo,{onClick:()=>r(!n),children:n?(0,L.jsx)(co,{size:24}):(0,L.jsx)(Ya,{size:24})})]})]})})},xo=F.footer`
  background: ${e=>e.theme.surface};
  padding: 2rem 1rem;
  margin-top: auto;
`,So=F.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,V=F.div`
  h3 {
    color: ${e=>e.theme.primary};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: ${e=>e.theme.text};
    text-decoration: none;
    &:hover {
      color: ${e=>e.theme.primary};
    }
  }
`,Co=F.div`
  p {
    margin: 0.5rem 0;
    color: ${e=>e.theme.textSecondary};
  }
`,wo=F.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,To=F.a`
  color: ${e=>e.theme.primary};
  font-size: 1.5rem;
  text-decoration: none;
`,Eo=()=>(0,L.jsxs)(xo,{children:[(0,L.jsxs)(So,{children:[(0,L.jsxs)(V,{children:[(0,L.jsx)(`h3`,{children:`Меню`}),(0,L.jsxs)(`ul`,{children:[(0,L.jsx)(`li`,{children:(0,L.jsx)(`a`,{href:`/`,children:`Главная`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(`a`,{href:`/search-parts`,children:`Запчасти`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(`a`,{href:`/diagnostics`,children:`Диагностика`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(`a`,{href:`/booking`,children:`Запись на ремонт`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(`a`,{href:`/services`,children:`Услуги`})})]})]}),(0,L.jsxs)(V,{children:[(0,L.jsx)(`h3`,{children:`Компания`}),(0,L.jsxs)(`ul`,{children:[(0,L.jsx)(`li`,{children:(0,L.jsx)(`a`,{href:`/about`,children:`О нас`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(`a`,{href:`/contacts`,children:`Контакты`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(`a`,{href:`#`,children:`FAQ`})})]})]}),(0,L.jsxs)(V,{children:[(0,L.jsx)(`h3`,{children:`Контакты`}),(0,L.jsxs)(Co,{children:[(0,L.jsx)(`p`,{children:`Телефон: +7 (909) 999-66-66`}),(0,L.jsx)(`p`,{children:`Email: admin@avtohaus.ru`}),(0,L.jsx)(`p`,{children:`Адрес: Тюмень, ул. Индустриальная, 5.`})]}),(0,L.jsxs)(wo,{children:[(0,L.jsx)(To,{href:`#`,children:`📘`}),(0,L.jsx)(To,{href:`#`,children:`📷`}),(0,L.jsx)(To,{href:`#`,children:`🚘`})]})]}),(0,L.jsxs)(V,{children:[(0,L.jsx)(`h3`,{children:`Карта сервисов`}),(0,L.jsx)(`p`,{children:`Найдите ближайший сервисный центр`}),(0,L.jsx)(`br`,{}),(0,L.jsx)(`div`,{style:{width:`100%`,height:`150px`,borderRadius:`8px`,overflow:`hidden`},children:(0,L.jsx)(`iframe`,{src:`https://yandex.com/map-widget/v1/-/CLg9q2OS`,width:`100%`,height:`150`})})]})]}),(0,L.jsx)(`div`,{style:{textAlign:`center`,marginTop:`2rem`,color:`#666`},children:`© 2025 AVTOHAUS FORT. Все права защищены.`})]}),Do=`/profilum/assets/camryred-20Q81-oD.png`,Oo=`/profilum/assets/main-cars-tronk-EdHqYQ7x.webp`,ko=F.div`
  min-height: 100vh;
`,Ao=F.section`
  position: relative;
  color: white;
  padding: 6rem 1rem;
  text-align: center;

  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.55) 100%
    ),
    url(${Oo}) center/85% no-repeat;
`,jo=F.div`
  max-width: 800px;
  margin: 0 auto;
`,H=F.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Mo=F.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`,No=F.form`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`,Po=F.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
`,Fo=F.button`
  background: ${e=>e.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: ${e=>e.theme.primary}dd;
  }
`,Io=F.section`
  padding: 4rem 1rem;
  background: ${e=>e.theme.surface};
`,Lo=F.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${e=>e.theme.text};
`,Ro=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,zo=F.div`
  background: ${e=>e.theme.background};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px ${e=>e.theme.shadow};
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`,Bo=F.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.primary};
`,Vo=F.h3`
  margin-bottom: 1rem;
  color: ${e=>e.theme.text};
`,Ho=F.p`
  color: ${e=>e.theme.textSecondary};
`,Uo=F.section`
  padding: 4rem 1rem;
  background: ${e=>e.theme.background};
`,Wo=F.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Go=F.div`
  width: 100%;
  height: 400px;
  background: ${e=>e.theme.surface};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: ${e=>e.theme.primary};
`,Ko=F.div`
  text-align: center;
`,qo=F.button`
  background: ${e=>e.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 2rem;
  &:hover {
    background: ${e=>e.theme.primary}dd;
  }
`,Jo=F.section`
  padding: 4rem 1rem;
  background: ${e=>e.theme.surface};
`,Yo=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Xo=F.div`
  background: ${e=>e.theme.background};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px ${e=>e.theme.shadow};
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`,Zo=F.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.primary};
`,Qo=F.h3`
  margin-bottom: 1rem;
  color: ${e=>e.theme.text};
`,$o=F.section`
  padding: 4rem 1rem;
  background: url('https://via.placeholder.com/1200x400/007bff/ffffff?text=Workshop') center/cover;
  color: white;
  text-align: center;
`,es=F.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(0,0,0,0.5);
  padding: 3rem;
  border-radius: 12px;
`,ts=F.h2`
  margin-bottom: 2rem;
`,ns=F.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,rs=F.input`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
`,is=F.button`
  grid-column: span 2;
  background: ${e=>e.theme.accent};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background: ${e=>e.theme.accent}dd;
  }
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,as=F.section`
  padding: 4rem 1rem;
  background: ${e=>e.theme.background};
`,os=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,ss=F.div`
  text-align: center;
  padding: 2rem;
`,cs=F.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.primary};
`,ls=F.h3`
  margin-bottom: 1rem;
  color: ${e=>e.theme.text};
`,us=F.p`
  color: ${e=>e.theme.textSecondary};
`,ds=F.section`
  padding: 4rem 1rem;
  background: ${e=>e.theme.surface};
`,fs=F.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`,ps=F.div`
  background: ${e=>e.theme.background};
  padding: 2rem;
  border-radius: 12px;
  min-width: 300px;
  box-shadow: 0 4px 20px ${e=>e.theme.shadow};
`,ms=F.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,hs=F.div`
  width: 50px;
  height: 50px;
  background: ${e=>e.theme.primary};
  border-radius: 50%;
  margin-right: 1rem;
`,gs=F.h4`
  color: ${e=>e.theme.text};
`,_s=F.div`
  color: ${e=>e.theme.accent};
  margin-bottom: 1rem;
`,vs=F.p`
  color: ${e=>e.theme.textSecondary};
`,ys=()=>(0,L.jsxs)(ko,{children:[(0,L.jsx)(Ao,{children:(0,L.jsxs)(jo,{children:[(0,L.jsx)(H,{children:`Быстрый подбор запчастей и диагностика онлайн`}),(0,L.jsx)(Mo,{children:`Найдите нужные запчасти по OEM-коду или артикулу детали`}),(0,L.jsxs)(No,{children:[(0,L.jsx)(Po,{type:`text`,placeholder:`Введите OEM или артикул детали`}),(0,L.jsx)(Fo,{type:`submit`,children:`Найти запчасти`})]})]})}),(0,L.jsxs)(Io,{children:[(0,L.jsx)(Lo,{children:`Популярные услуги`}),(0,L.jsxs)(Ro,{children:[(0,L.jsxs)(zo,{children:[(0,L.jsx)(Bo,{children:(0,L.jsx)(Ra,{})}),(0,L.jsx)(Vo,{children:`Диагностика`}),(0,L.jsx)(Ho,{children:`Компьютерная диагностика всех систем автомобиля`})]}),(0,L.jsxs)(zo,{children:[(0,L.jsx)(Bo,{children:(0,L.jsx)(so,{})}),(0,L.jsx)(Vo,{children:`ТО`}),(0,L.jsx)(Ho,{children:`Техническое обслуживание по регламенту`})]}),(0,L.jsxs)(zo,{children:[(0,L.jsx)(Bo,{children:(0,L.jsx)(eo,{})}),(0,L.jsx)(Vo,{children:`Ремонт подвески`}),(0,L.jsx)(Ho,{children:`Замена амортизаторов, рычагов и других элементов`})]}),(0,L.jsxs)(zo,{children:[(0,L.jsx)(Bo,{children:(0,L.jsx)(Fa,{})}),(0,L.jsx)(Vo,{children:`Электрика`}),(0,L.jsx)(Ho,{children:`Ремонт и обслуживание электрооборудования`})]}),(0,L.jsxs)(zo,{children:[(0,L.jsx)(Bo,{children:(0,L.jsx)(Ba,{})}),(0,L.jsx)(Vo,{children:`Ремонт ДВС`}),(0,L.jsx)(Ho,{children:`Капитальный ремонт двигателя`})]})]})]}),(0,L.jsx)(Uo,{children:(0,L.jsxs)(Wo,{children:[(0,L.jsx)(Go,{children:(0,L.jsx)(Go,{children:(0,L.jsx)(`img`,{src:Do,alt:`camry_red`,style:{width:`90%`,height:`auto`}})})}),(0,L.jsxs)(Ko,{children:[(0,L.jsx)(`h2`,{children:`Онлайн-диагностика автомобиля`}),(0,L.jsx)(`p`,{children:`Выберите зону автомобиля или симптом неисправности`}),(0,L.jsx)(qo,{children:`Начать диагностику`})]})]})}),(0,L.jsxs)(Jo,{children:[(0,L.jsx)(Lo,{children:`Категории автозапчастей`}),(0,L.jsxs)(Yo,{children:[(0,L.jsxs)(Xo,{children:[(0,L.jsx)(Zo,{children:`⚙️`}),(0,L.jsx)(Qo,{children:`Двигатель`})]}),(0,L.jsxs)(Xo,{children:[(0,L.jsx)(Zo,{children:`🔧`}),(0,L.jsx)(Qo,{children:`Трансмиссия`})]}),(0,L.jsxs)(Xo,{children:[(0,L.jsx)(Zo,{children:`🧷`}),(0,L.jsx)(Qo,{children:`Подвеска`})]}),(0,L.jsxs)(Xo,{children:[(0,L.jsx)(Zo,{children:`🔌`}),(0,L.jsx)(Qo,{children:`Электрика`})]}),(0,L.jsxs)(Xo,{children:[(0,L.jsx)(Zo,{children:`🚗`}),(0,L.jsx)(Qo,{children:`Кузов`})]}),(0,L.jsxs)(Xo,{children:[(0,L.jsx)(Zo,{children:`🛑`}),(0,L.jsx)(Qo,{children:`Тормозная система`})]})]}),(0,L.jsx)(`div`,{style:{textAlign:`center`,marginTop:`2rem`},children:(0,L.jsx)(`button`,{style:{background:`#007bff`,color:`white`,border:`none`,padding:`1rem 2rem`,borderRadius:`50px`,cursor:`pointer`},children:`Смотреть все`})})]}),(0,L.jsx)($o,{children:(0,L.jsxs)(es,{children:[(0,L.jsx)(ts,{children:`Запись на ремонт`}),(0,L.jsxs)(ns,{children:[(0,L.jsx)(rs,{type:`text`,placeholder:`Ваше имя`}),(0,L.jsx)(rs,{type:`tel`,placeholder:`Телефон`}),(0,L.jsx)(rs,{type:`email`,placeholder:`Email`}),(0,L.jsx)(rs,{type:`text`,placeholder:`Марка автомобиля`}),(0,L.jsx)(rs,{type:`date`,placeholder:`Дата`}),(0,L.jsx)(rs,{type:`time`,placeholder:`Время`}),(0,L.jsx)(is,{type:`submit`,children:`Записаться`})]})]})}),(0,L.jsxs)(as,{children:[(0,L.jsx)(Lo,{children:`Почему выбирают нас`}),(0,L.jsxs)(os,{children:[(0,L.jsxs)(ss,{children:[(0,L.jsx)(cs,{children:(0,L.jsx)(Ba,{})}),(0,L.jsx)(ls,{children:`Работаем 24/7`}),(0,L.jsx)(us,{children:`Круглосуточное обслуживание и поддержка`})]}),(0,L.jsxs)(ss,{children:[(0,L.jsx)(cs,{children:(0,L.jsx)(eo,{})}),(0,L.jsx)(ls,{children:`Гарантия на ремонт`}),(0,L.jsx)(us,{children:`Гарантийные обязательства на все виды работ`})]}),(0,L.jsxs)(ss,{children:[(0,L.jsx)(cs,{children:(0,L.jsx)(Fa,{})}),(0,L.jsx)(ls,{children:`Оригинальные запчасти`}),(0,L.jsx)(us,{children:`Используем только качественные оригинальные детали`})]}),(0,L.jsxs)(ss,{children:[(0,L.jsx)(cs,{children:(0,L.jsx)(no,{})}),(0,L.jsx)(ls,{children:`Быстрая диагностика`}),(0,L.jsx)(us,{children:`Компьютерная диагностика за 30 минут`})]})]})]}),(0,L.jsxs)(ds,{children:[(0,L.jsx)(Lo,{children:`Отзывы клиентов`}),(0,L.jsxs)(fs,{children:[(0,L.jsxs)(ps,{children:[(0,L.jsxs)(ms,{children:[(0,L.jsx)(hs,{}),(0,L.jsx)(gs,{children:`Кирилл Иванов`})]}),(0,L.jsx)(_s,{children:`★★`}),(0,L.jsx)(vs,{children:`Скам-сервис: по телефону комплект трубок стоил 4500, в наличии. Прихожу ,а цена  6000 — «видимо, я неправильно понял». Купил за 4200 в другом магазине..`})]}),(0,L.jsxs)(ps,{children:[(0,L.jsxs)(ms,{children:[(0,L.jsx)(hs,{}),(0,L.jsx)(gs,{children:`Мария Петрова`})]}),(0,L.jsx)(_s,{children:`★★★★★`}),(0,L.jsx)(vs,{children:`Добрый день. Очень полезный магазин. Всегда сразу беру все что мне нужно и по наличию. Спасибо за хорошую работу ребята!`})]}),(0,L.jsxs)(ps,{children:[(0,L.jsxs)(ms,{children:[(0,L.jsx)(hs,{}),(0,L.jsx)(gs,{children:`Илья Сидоров`})]}),(0,L.jsx)(_s,{children:`★★★★★`}),(0,L.jsx)(vs,{children:`Профессиональная команда, современное оборудование. Все работы выполнены в срок.`})]})]})]})]}),bs=[{id:1,name:`Масляный фильтр Bosch`,brand:`Bosch`,category:`Двигатель`,compatibility:`Toyota Camry 2015-2020`,price:2450,availability:`in_stock`,type:`original`,marka:`Toyota`,model:`Camry`,year:2018,motor:`2.5`},{id:2,name:`Свеча NGK`,brand:`NGK`,category:`Электрика`,compatibility:`Kia Rio 2018-2023`,price:790,availability:`order`,type:`analog`,marka:`Kia`,model:`Rio`,year:2020,motor:`1.6`},{id:3,name:`Ремень ГРМ Valeo`,brand:`Valeo`,category:`Двигатель`,compatibility:`Hyundai Solaris 2016-2021`,price:1600,availability:`in_stock`,type:`original`,marka:`Hyundai`,model:`Solaris`,year:2019,motor:`1.6`},{id:4,name:`Амортизатор Denso`,brand:`Denso`,category:`Подвеска`,compatibility:`Toyota Corolla 2015-2020`,price:3400,availability:`in_stock`,type:`analog`,marka:`Toyota`,model:`Corolla`,year:2017,motor:`1.8`},{id:5,name:`Тормозные колодки Bosch`,brand:`Bosch`,category:`Тормоза`,compatibility:`Volkswagen Golf 2016-2021`,price:3200,availability:`in_stock`,type:`original`,marka:`Volkswagen`,model:`Golf`,year:2018,motor:`1.4`},{id:6,name:`Аккумулятор Varta`,brand:`Varta`,category:`Электрика`,compatibility:`Ford Focus 2015-2020`,price:5500,availability:`order`,type:`original`,marka:`Ford`,model:`Focus`,year:2017,motor:`1.6`},{id:7,name:`Топливный насос Denso`,brand:`Denso`,category:`Двигатель`,compatibility:`Honda Civic 2016-2021`,price:4300,availability:`in_stock`,type:`original`,marka:`Honda`,model:`Civic`,year:2019,motor:`2.0`},{id:8,name:`Фильтр салона Valeo`,brand:`Valeo`,category:`Кузов`,compatibility:`Toyota RAV4 2015-2020`,price:900,availability:`in_stock`,type:`analog`,marka:`Toyota`,model:`RAV4`,year:2018,motor:`2.0`},{id:9,name:`Подшипник ступицы SKF`,brand:`SKF`,category:`Подвеска`,compatibility:`Mazda 6 2016-2021`,price:2100,availability:`in_stock`,type:`original`,marka:`Mazda`,model:`6`,year:2019,motor:`2.5`},{id:10,name:`Радиатор охлаждения Valeo`,brand:`Valeo`,category:`Двигатель`,compatibility:`Nissan Qashqai 2017-2022`,price:7400,availability:`order`,type:`original`,marka:`Nissan`,model:`Qashqai`,year:2020,motor:`1.6`},{id:11,name:`Ремень кондиционера Gates`,brand:`Gates`,category:`Двигатель`,compatibility:`Hyundai Tucson 2015-2021`,price:1300,availability:`in_stock`,type:`analog`,marka:`Hyundai`,model:`Tucson`,year:2018,motor:`2.0`},{id:12,name:`Стартер Bosch`,brand:`Bosch`,category:`Электрика`,compatibility:`Ford Fiesta 2016-2020`,price:6700,availability:`in_stock`,type:`original`,marka:`Ford`,model:`Fiesta`,year:2017,motor:`1.4`},{id:13,name:`Колодки тормозные Akebono`,brand:`Akebono`,category:`Тормоза`,compatibility:`Honda Accord 2015-2020`,price:2800,availability:`order`,type:`analog`,marka:`Honda`,model:`Accord`,year:2018,motor:`2.4`},{id:14,name:`Амортизатор Kayaba`,brand:`Kayaba`,category:`Подвеска`,compatibility:`Toyota Camry 2015-2020`,price:3600,availability:`in_stock`,type:`original`,marka:`Toyota`,model:`Camry`,year:2019,motor:`2.5`},{id:15,name:`Фара левая Valeo`,brand:`Valeo`,category:`Кузов`,compatibility:`Renault Megane 2016-2021`,price:8900,availability:`in_stock`,type:`original`,marka:`Renault`,model:`Megane`,year:2018,motor:`1.5`},{id:16,name:`Трос сцепления Sachs`,brand:`Sachs`,category:`Трансмиссия`,compatibility:`Volkswagen Polo 2015-2020`,price:1500,availability:`order`,type:`analog`,marka:`Volkswagen`,model:`Polo`,year:2017,motor:`1.6`},{id:17,name:`Масляный фильтр Mann`,brand:`Mann`,category:`Двигатель`,compatibility:`BMW 3 Series 2016-2021`,price:2100,availability:`in_stock`,type:`original`,marka:`BMW`,model:`3 Series`,year:2018,motor:`2.0`},{id:18,name:`Блок предохранителей VAG`,brand:`VAG`,category:`Электрика`,compatibility:`Audi A4 2015-2020`,price:4700,availability:`order`,type:`original`,marka:`Audi`,model:`A4`,year:2017,motor:`2.0`},{id:19,name:`Рулевая рейка TRW`,brand:`TRW`,category:`Подвеска`,compatibility:`Mercedes C-Class 2015-2020`,price:10500,availability:`in_stock`,type:`original`,marka:`Mercedes`,model:`C-Class`,year:2018,motor:`2.0`},{id:20,name:`Бампер передний Valeo`,brand:`Valeo`,category:`Кузов`,compatibility:`Opel Astra 2016-2021`,price:9500,availability:`order`,type:`analog`,marka:`Opel`,model:`Astra`,year:2019,motor:`1.4`}],xs=F.div`padding:2rem 1rem; max-width:1200px; margin:0 auto;`,Ss=F.div`margin-bottom:2rem;`,Cs=F.h1`color:${e=>e.theme.text}; margin-bottom:1rem;`,ws=F.form`
  display:grid; grid-template-columns:2fr 1fr 1fr 1fr 1fr auto; gap:1rem; margin-bottom:2rem;
  @media(max-width:768px){ grid-template-columns:1fr; }
`,Ts=F.input`
  padding:0.75rem; border:1px solid ${e=>e.theme.border}; border-radius:8px;
  background:${e=>e.theme.background}; color:${e=>e.theme.text}; font-size:1rem;
  &::placeholder{ color:${e=>e.theme.textSecondary}; }
`,Es=F.button`
  padding:0.75rem 1.5rem; background:${e=>e.theme.primary};
  color:white; border:none; border-radius:8px; cursor:pointer; font-weight:500;
  &:hover{ background:${e=>e.theme.primary}dd; }
`,Ds=F.div`display:grid; grid-template-columns:300px 1fr; gap:2rem; @media(max-width:768px){grid-template-columns:1fr;}`,Os=F.div`background:${e=>e.theme.surface}; padding:1.5rem; border-radius:12px; box-shadow:0 4px 20px ${e=>e.theme.shadow};`,ks=F.div`margin-bottom:2rem;`,As=F.h3`color:${e=>e.theme.text}; margin-bottom:1rem; font-size:1.1rem;`,js=F.div`display:flex; flex-direction:column; gap:0.5rem;`,Ms=F.label`display:flex; align-items:center; gap:0.5rem; color:${e=>e.theme.textSecondary}; cursor:pointer; &:hover{ color:${e=>e.theme.text}; }`,Ns=F.div`display:flex; gap:0.5rem; align-items:center;`,Ps=F.input`padding:0.5rem; border:1px solid ${e=>e.theme.border}; border-radius:4px; background:${e=>e.theme.background}; color:${e=>e.theme.text}; width:80px;`,Fs=F.div`background:${e=>e.theme.surface}; padding:1.5rem; border-radius:12px; box-shadow:0 4px 20px ${e=>e.theme.shadow};`,Is=F.div`display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;`,Ls=F.span`color:${e=>e.theme.textSecondary};`,Rs=F.div`display:flex; gap:0.5rem;`,zs=F.button`
  padding:0.5rem; border:1px solid ${e=>e.theme.border};
  background:${e=>e.active?e.theme.primary:e.theme.background};
  color:${e=>e.active?`white`:e.theme.text}; border-radius:4px; cursor:pointer;
`,Bs=F.select`
  padding:0.5rem; border:1px solid ${e=>e.theme.border}; border-radius:4px;
  background:${e=>e.theme.background}; color:${e=>e.theme.text};
`,Vs=F.div`
  display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1.5rem;
`,Hs=F.div`
  background:${e=>e.theme.background}; border-radius:8px; overflow:hidden;
  box-shadow:0 2px 10px ${e=>e.theme.shadow}; transition: transform 0.3s ease;
  &:hover{ transform:translateY(-5px); }
`,Us=F.div`height:200px; background:${e=>e.theme.surface}; display:flex; align-items:center; justify-content:center; font-size:3rem; color:${e=>e.theme.primary};`,Ws=F.div`padding:1rem;`,Gs=F.h3`color:${e=>e.theme.text}; margin-bottom:0.5rem; font-size:1.1rem;`,Ks=F.p`color:${e=>e.theme.textSecondary}; margin-bottom:0.5rem; font-size:0.9rem;`,qs=F.p`color:${e=>e.theme.accent}; margin-bottom:1rem; font-size:0.9rem;`,Js=F.div`display:flex; justify-content:space-between; align-items:center;`,Ys=F.span`font-size:1.2rem; font-weight:bold; color:${e=>e.theme.primary};`,Xs=F.button`
  padding:0.5rem 1rem; background:${e=>e.theme.accent};
  color:white; border:none; border-radius:4px; cursor:pointer; font-weight:500;
  &:hover{ background:${e=>e.theme.accent}dd; }
`,Zs=()=>{let[e,t]=(0,_.useState)(`grid`),[n,r]=bn(),[i,a]=(0,_.useState)({text:n.get(`text`)||``,marka:n.get(`marka`)||``,model:n.get(`model`)||``,year:n.get(`year`)||``,motor:n.get(`motor`)||``,categories:n.get(`categories`)?n.get(`categories`).split(`,`):[],brands:n.get(`brands`)?n.get(`brands`).split(`,`):[],availability:n.get(`availability`)?n.get(`availability`).split(`,`):[],types:n.get(`types`)?n.get(`types`).split(`,`):[],priceMin:n.get(`priceMin`)||``,priceMax:n.get(`priceMax`)||``,sort:n.get(`sort`)||``}),o=(e,t)=>a(n=>({...n,[e]:t})),s=(e,t)=>{a(n=>{let r=n[e];return r.includes(t)?{...n,[e]:r.filter(e=>e!==t)}:{...n,[e]:[...r,t]}})};(0,_.useEffect)(()=>{let e={};Object.keys(i).forEach(t=>{Array.isArray(i[t])&&i[t].length>0?e[t]=i[t].join(`,`):i[t]&&(e[t]=i[t])}),r(e)},[i]);let c=[...[...bs].filter(e=>{let{text:t,marka:n,model:r,year:a,motor:o,categories:s,brands:c,availability:l,types:u,priceMin:d,priceMax:f}=i;return!(t&&!e.name.toLowerCase().includes(t.toLowerCase())||n&&!e.marka.toLowerCase().includes(n.toLowerCase())||r&&!e.model.toLowerCase().includes(r.toLowerCase())||a&&e.year!==Number(a)||o&&!e.motor.includes(o)||s.length>0&&!s.includes(e.category)||c.length>0&&!c.includes(e.brand)||l.length>0&&!l.includes(e.availability)||u.length>0&&!u.includes(e.type)||d&&e.price<Number(d)||f&&e.price>Number(f))})].sort((e,t)=>i.sort===`price_asc`?e.price-t.price:i.sort===`price_desc`?t.price-e.price:i.sort===`brand`?e.brand.localeCompare(t.brand):i.sort===`category`?e.category.localeCompare(t.category):0);return(0,L.jsxs)(xs,{children:[(0,L.jsxs)(Ss,{children:[(0,L.jsx)(Cs,{children:`Поиск запчастей`}),(0,L.jsxs)(ws,{onSubmit:e=>e.preventDefault(),children:[(0,L.jsx)(Ts,{placeholder:`Название детали`,value:i.text,onChange:e=>o(`text`,e.target.value)}),(0,L.jsx)(Ts,{placeholder:`Марка`,value:i.marka,onChange:e=>o(`marka`,e.target.value)}),(0,L.jsx)(Ts,{placeholder:`Модель`,value:i.model,onChange:e=>o(`model`,e.target.value)}),(0,L.jsx)(Ts,{placeholder:`Год`,value:i.year,onChange:e=>o(`year`,e.target.value)}),(0,L.jsx)(Ts,{placeholder:`Мотор`,value:i.motor,onChange:e=>o(`motor`,e.target.value)}),(0,L.jsx)(Es,{children:`Найти`})]})]}),(0,L.jsxs)(Ds,{children:[(0,L.jsxs)(Os,{children:[(0,L.jsxs)(ks,{children:[(0,L.jsx)(As,{children:`Категории`}),(0,L.jsx)(js,{children:[`Двигатель`,`Трансмиссия`,`Подвеска`,`Электрика`,`Кузов`,`Тормозная система`].map(e=>(0,L.jsxs)(Ms,{children:[(0,L.jsx)(`input`,{type:`checkbox`,checked:i.categories.includes(e),onChange:()=>s(`categories`,e)}),` `,e]},e))})]}),(0,L.jsxs)(ks,{children:[(0,L.jsx)(As,{children:`Бренд`}),(0,L.jsx)(js,{children:[`Bosch`,`Valeo`,`Denso`,`NGK`].map(e=>(0,L.jsxs)(Ms,{children:[(0,L.jsx)(`input`,{type:`checkbox`,checked:i.brands.includes(e),onChange:()=>s(`brands`,e)}),` `,e]},e))})]}),(0,L.jsxs)(ks,{children:[(0,L.jsx)(As,{children:`Цена`}),(0,L.jsxs)(Ns,{children:[(0,L.jsx)(Ps,{placeholder:`от`,value:i.priceMin,onChange:e=>o(`priceMin`,e.target.value)}),(0,L.jsx)(`span`,{children:`—`}),(0,L.jsx)(Ps,{placeholder:`до`,value:i.priceMax,onChange:e=>o(`priceMax`,e.target.value)})]})]}),(0,L.jsxs)(ks,{children:[(0,L.jsx)(As,{children:`Наличие`}),(0,L.jsxs)(js,{children:[(0,L.jsxs)(Ms,{children:[(0,L.jsx)(`input`,{type:`checkbox`,checked:i.availability.includes(`in_stock`),onChange:()=>s(`availability`,`in_stock`)}),` В наличии`]}),(0,L.jsxs)(Ms,{children:[(0,L.jsx)(`input`,{type:`checkbox`,checked:i.availability.includes(`order`),onChange:()=>s(`availability`,`order`)}),` Под заказ`]})]})]}),(0,L.jsxs)(ks,{children:[(0,L.jsx)(As,{children:`Тип`}),(0,L.jsxs)(js,{children:[(0,L.jsxs)(Ms,{children:[(0,L.jsx)(`input`,{type:`checkbox`,checked:i.types.includes(`original`),onChange:()=>s(`types`,`original`)}),` Оригинал`]}),(0,L.jsxs)(Ms,{children:[(0,L.jsx)(`input`,{type:`checkbox`,checked:i.types.includes(`analog`),onChange:()=>s(`types`,`analog`)}),` Аналог`]})]})]})]}),(0,L.jsxs)(Fs,{children:[(0,L.jsxs)(Is,{children:[(0,L.jsxs)(Ls,{children:[`Найдено `,c.length,` товара`]}),(0,L.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,alignItems:`center`},children:[(0,L.jsxs)(Rs,{children:[(0,L.jsx)(zs,{active:e===`grid`,onClick:()=>t(`grid`),children:(0,L.jsx)(Ua,{size:16})}),(0,L.jsx)(zs,{active:e===`list`,onClick:()=>t(`list`),children:(0,L.jsx)(Ga,{size:16})})]}),(0,L.jsxs)(Bs,{value:i.sort,onChange:e=>o(`sort`,e.target.value),children:[(0,L.jsx)(`option`,{value:``,children:`Сортировать`}),(0,L.jsx)(`option`,{value:`price_asc`,children:`Цена ↑`}),(0,L.jsx)(`option`,{value:`price_desc`,children:`Цена ↓`}),(0,L.jsx)(`option`,{value:`brand`,children:`Бренд`}),(0,L.jsx)(`option`,{value:`category`,children:`Категория`})]})]})]}),(0,L.jsx)(Vs,{style:{gridTemplateColumns:e===`grid`?`repeat(auto-fill,minmax(280px,1fr))`:`1fr`},children:c.map(e=>(0,L.jsxs)(Hs,{children:[(0,L.jsx)(Us,{children:`🔧`}),(0,L.jsxs)(Ws,{children:[(0,L.jsx)(Gs,{children:e.name}),(0,L.jsx)(Ks,{children:e.brand}),(0,L.jsx)(qs,{children:e.compatibility}),(0,L.jsxs)(Js,{children:[(0,L.jsxs)(Ys,{children:[e.price,` ₽`]}),(0,L.jsx)(Xs,{children:`В корзину`})]})]})]},e.id))})]})]})]})},Qs=F.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`,$s=F.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,ec=F.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
`,tc=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,nc=F.div`
  width: 100px;
  height: 100px;
  background: ${e=>e.theme.surface};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  border: 2px solid transparent;
  &.active {
    border-color: ${e=>e.theme.primary};
  }
`,rc=F.div`
  width: 100%;
  height: 400px;
  background: ${e=>e.theme.surface};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
`,ic=F.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ac=F.h1`
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
`,oc=F.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 1.1rem;
`,sc=F.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${e=>e.theme.accent};
`,cc=F.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,lc=F.button`
  background: ${e=>e.theme.accent};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  &:hover {
    background: ${e=>e.theme.accent}dd;
  }
`,uc=F.button`
  background: ${e=>e.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    background: ${e=>e.theme.primary}dd;
  }
`,dc=F.button`
  background: ${e=>e.theme.surface};
  border: 2px solid ${e=>e.theme.border};
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  color: ${e=>e.theme.text};
  &:hover {
    background: ${e=>e.theme.border};
  }
`,fc=F.div`
  background: ${e=>e.theme.surface};
  padding: 1.5rem;
  border-radius: 12px;
`,pc=F.h2`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,mc=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`,hc=F.div`
  background: ${e=>e.theme.background};
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.border};
`,gc=F.div`
  margin-top: 3rem;
`,_c=F.div`
  display: flex;
  border-bottom: 1px solid ${e=>e.theme.border};
  margin-bottom: 2rem;
`,vc=F.button`
  background: none;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  color: ${e=>e.active?e.theme.primary:e.theme.textSecondary};
  border-bottom: 2px solid ${e=>e.active?e.theme.primary:`transparent`};
  &:hover {
    color: ${e=>e.theme.primary};
  }
`,yc=F.div`
  padding: 2rem 0;
`,bc=F.div`
  color: ${e=>e.theme.text};
  line-height: 1.6;
`,xc=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Sc=F.div`
  h3 {
    color: ${e=>e.theme.primary};
    margin-bottom: 1rem;
  }
`,Cc=F.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${e=>e.theme.border};
`,wc=F.span`
  color: ${e=>e.theme.textSecondary};
`,Tc=F.span`
  color: ${e=>e.theme.text};
  font-weight: bold;
`,Ec=F.div`
  margin-top: 2rem;
`,Dc=F.div`
  background: ${e=>e.theme.surface};
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
`,Oc=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,kc=F.div`
  font-weight: bold;
  color: ${e=>e.theme.text};
`,Ac=F.div`
  color: ${e=>e.theme.accent};
`,jc=F.p`
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
`,Mc=F.div`
  margin-top: 2rem;
`,Nc=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,Pc=F.div`
  background: ${e=>e.theme.surface};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Fc=F.div`
  flex: 1;
`,Ic=F.h4`
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
`,Lc=F.p`
  color: ${e=>e.theme.accent};
  font-weight: bold;
`,Rc=F.button`
  background: ${e=>e.theme.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${e=>e.theme.primary}dd;
  }
`,U=()=>{let[e,t]=(0,_.useState)(`description`),[n,r]=(0,_.useState)(0),i=[`🛢️`,`🔧`,`⚙️`,`🔌`];return(0,L.jsxs)(Qs,{children:[(0,L.jsxs)($s,{children:[(0,L.jsxs)(ec,{children:[(0,L.jsx)(tc,{children:i.map((e,t)=>(0,L.jsx)(nc,{className:n===t?`active`:``,onClick:()=>r(t),children:e},t))}),(0,L.jsx)(rc,{children:i[n]})]}),(0,L.jsxs)(ic,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(ac,{children:`Масляный фильтр Bosch F026402001`}),(0,L.jsx)(oc,{children:`Bosch`}),(0,L.jsx)(sc,{children:`1 250 ₽`})]}),(0,L.jsxs)(cc,{children:[(0,L.jsx)(lc,{children:`Купить`}),(0,L.jsxs)(uc,{children:[(0,L.jsx)(to,{size:20}),`В корзину`]}),(0,L.jsx)(dc,{children:(0,L.jsx)(Wa,{size:20})})]}),(0,L.jsxs)(fc,{children:[(0,L.jsx)(pc,{children:`Совместимые модели авто`}),(0,L.jsxs)(mc,{children:[(0,L.jsx)(hc,{children:`Toyota Camry 2015-2020`}),(0,L.jsx)(hc,{children:`Honda Accord 2016-2021`}),(0,L.jsx)(hc,{children:`Nissan Altima 2017-2022`}),(0,L.jsx)(hc,{children:`Mazda 6 2018-2023`})]})]})]})]}),(0,L.jsxs)(gc,{children:[(0,L.jsxs)(_c,{children:[(0,L.jsx)(vc,{active:e===`description`,onClick:()=>t(`description`),children:`Описание`}),(0,L.jsx)(vc,{active:e===`specifications`,onClick:()=>t(`specifications`),children:`Характеристики`}),(0,L.jsx)(vc,{active:e===`reviews`,onClick:()=>t(`reviews`),children:`Отзывы (2)`}),(0,L.jsx)(vc,{active:e===`analogs`,onClick:()=>t(`analogs`),children:`Аналоги`})]}),(0,L.jsxs)(yc,{children:[e===`description`&&(0,L.jsxs)(bc,{children:[(0,L.jsx)(`p`,{children:`Масляный фильтр Bosch F026402001 предназначен для эффективной очистки моторного масла от механических примесей и продуктов износа. Фильтр обеспечивает надежную защиту двигателя от загрязнений, продлевая срок его службы.`}),(0,L.jsx)(`p`,{children:`Особенности:`}),(0,L.jsxs)(`ul`,{children:[(0,L.jsx)(`li`,{children:`Высокая степень фильтрации`}),(0,L.jsx)(`li`,{children:`Устойчивость к высоким температурам`}),(0,L.jsx)(`li`,{children:`Легкая замена`}),(0,L.jsx)(`li`,{children:`Соответствует стандартам OEM`})]})]}),e===`specifications`&&(0,L.jsx)(xc,{children:Object.entries({"Основные характеристики":{Производитель:`Bosch`,Артикул:`F026402001`,Тип:`Масляный фильтр`,Совместимость:`Бензиновые и дизельные двигатели`},"Технические параметры":{"Высота, мм":`95`,"Диаметр, мм":`76`,Резьба:`M20x1.5`,Материал:`Бумага, металл`}}).map(([e,t])=>(0,L.jsxs)(Sc,{children:[(0,L.jsx)(`h3`,{children:e}),Object.entries(t).map(([e,t])=>(0,L.jsxs)(Cc,{children:[(0,L.jsx)(wc,{children:e}),(0,L.jsx)(Tc,{children:t})]},e))]},e))}),e===`reviews`&&(0,L.jsx)(Ec,{children:[{author:`Алексей Иванов`,rating:5,text:`Отличный фильтр, соответствует оригиналу. Установил на свой автомобиль, работает идеально.`},{author:`Мария Петрова`,rating:4,text:`Хорошее качество, доставили быстро. Рекомендую.`}].map((e,t)=>(0,L.jsxs)(Dc,{children:[(0,L.jsxs)(Oc,{children:[(0,L.jsx)(kc,{children:e.author}),(0,L.jsx)(Ac,{children:`★`.repeat(e.rating)})]}),(0,L.jsx)(jc,{children:e.text})]},t))}),e===`analogs`&&(0,L.jsx)(Mc,{children:(0,L.jsx)(Nc,{children:[{title:`Mann W719/2`,price:`1 150 ₽`},{title:`Mahle OC 355`,price:`1 300 ₽`},{title:`Filtron OP 570`,price:`950 ₽`}].map((e,t)=>(0,L.jsxs)(Pc,{children:[(0,L.jsxs)(Fc,{children:[(0,L.jsx)(Ic,{children:e.title}),(0,L.jsx)(Lc,{children:e.price})]}),(0,L.jsx)(Rc,{children:`Выбрать`})]},t))})})]})]})]})},zc=F.div`
  padding: 2rem 1rem;
  margin: 0 auto;
`,Bc=F.div`
  text-align: center;
  margin-bottom: 3rem;
`,Vc=F.h1`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,Hc=F.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`,Uc=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Wc=F.div`
  background: ${e=>e.theme.background};
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid ${e=>e.selected?e.theme.primary:e.theme.border};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  &:hover {
    border-color: ${e=>e.theme.primary};
    box-shadow: 0 8px 25px ${e=>e.theme.shadow};
  }
`,Gc=F.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.primary};
`,Kc=F.h3`
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
`,qc=F.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.9rem;
`,Jc=F.div`
  background: ${e=>e.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
`,Yc=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`,Xc=F.div`
  background: ${e=>e.theme.background};
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid ${e=>e.selected?e.theme.primary:e.theme.border};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover {
    border-color: ${e=>e.theme.primary};
    background: ${e=>e.theme.primary}05;
  }
`,Zc=F.input`
  accent-color: ${e=>e.theme.primary};
`,Qc=F.div`
  font-size: 1.5rem;
  color: ${e=>e.theme.primary};
`,$c=F.div`
  flex: 1;
`,el=F.h4`
  color: ${e=>e.theme.text};
  margin-bottom: 0.25rem;
`,tl=F.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.8rem;
`,nl=F.div`
  background: ${e=>e.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
`,rl=F.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: ${e=>e.theme.background};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 6rem;
  position: relative;
`,il=F.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`,al=F.button`
  background: ${e=>e.selected?e.theme.primary:e.theme.background};
  color: ${e=>e.selected?`white`:e.theme.text};
  border: 2px solid ${e=>e.selected?e.theme.primary:e.theme.border};
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    border-color: ${e=>e.theme.primary};
    background: ${e=>e.theme.primary}05;
  }
`,ol=F.div`
  font-size: 1.5rem;
`,sl=F.span`
  font-size: 0.8rem;
  text-align: center;
`,cl=F.button`
  background: ${e=>e.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  &:hover {
    background: ${e=>e.theme.primary}dd;
  }
  &:disabled {
    background: ${e=>e.theme.textSecondary};
    cursor: not-allowed;
  }
`,W=F.div`
  background: ${e=>e.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
`,ll=F.h2`
  color: ${e=>e.theme.text};
  text-align: center;
  margin-bottom: 2rem;
`,ul=F.div`
  background: ${e=>e.theme.background};
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border-left: 4px solid ${e=>{switch(e.severity){case`high`:return`#dc3545`;case`medium`:return`#ffc107`;case`low`:return`#28a745`;default:return e.theme.primary}}};
`,dl=F.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
`,fl=F.h3`
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
`,pl=F.div`
  color: ${e=>{switch(e.severity){case`high`:return`#dc3545`;case`medium`:return`#ffc107`;case`low`:return`#28a745`;default:return e.theme.primary}}};
  font-weight: bold;
  font-size: 0.9rem;
`,ml=F.p`
  color: ${e=>e.theme.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,hl=F.div`
  margin-bottom: 1.5rem;
`,gl=F.h4`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,_l=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`,vl=F.div`
  background: ${e=>e.theme.surface};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,yl=F.span`
  color: ${e=>e.theme.text};
`,bl=F.span`
  color: ${e=>e.theme.accent};
  font-weight: bold;
`,xl=F.div`
  margin-bottom: 1.5rem;
`,Sl=F.h4`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,Cl=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,wl=F.div`
  background: ${e=>e.theme.surface};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Tl=F.span`
  color: ${e=>e.theme.text};
`,El=F.span`
  color: ${e=>e.theme.accent};
  font-weight: bold;
`,Dl=F.button`
  background: ${e=>e.theme.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: ${e=>e.theme.primary}dd;
  }
`,Ol=()=>{let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)(!1),c=[{id:`symptoms`,icon:(0,L.jsx)(ao,{}),title:`По симптомам`,description:`Выберите симптомы неисправности`},{id:`zones`,icon:(0,L.jsx)(Ra,{}),title:`По зонам автомобиля`,description:`Укажите проблемную зону`},{id:`error_code`,icon:(0,L.jsx)(lo,{}),title:`По коду ошибки`,description:`Введите код ошибки OBD-II`}],l=[{id:`engine_noise`,name:`Стук в двигателе`,description:`Необычные звуки при работе двигателя`,icon:`🔧`},{id:`vibration`,name:`Вибрация`,description:`Вибрация кузова или руля`,icon:`📳`},{id:`power_loss`,name:`Потеря мощности`,description:`Двигатель не тянет, медленный разгон`,icon:`⚡`},{id:`brake_noise`,name:`Скрип тормозов`,description:`Шум при торможении`,icon:`🛑`},{id:`warning_lights`,name:`Горят чек`,description:`Загорелись индикаторы на панели`,icon:`🚨`},{id:`overheating`,name:`Перегрев`,description:`Двигатель перегревается`,icon:`🌡️`},{id:`battery_weak`,name:`Слабый аккумулятор`,description:`Трудный запуск, тусклые фары`,icon:`🔋`},{id:`transmission_issues`,name:`Проблемы с коробкой`,description:`Рывки при переключении передач`,icon:`🔄`}],u=[{id:`engine`,name:`Двигатель`,icon:`⚙️`},{id:`transmission`,name:`Трансмиссия`,icon:`🔧`},{id:`brakes`,name:`Тормоза`,icon:`🛑`},{id:`suspension`,name:`Подвеска`,icon:`🧷`},{id:`electrical`,name:`Электрика`,icon:`🔌`},{id:`cooling`,name:`Охлаждение`,icon:`❄️`}],d=[{id:1,title:`Изношенные тормозные колодки`,severity:`high`,description:`Тормозные колодки изношены более чем на 70%. Рекомендуется немедленная замена для обеспечения безопасности.`,parts:[{name:`Тормозные колодки передние`,price:`2 450 ₽`},{name:`Тормозные колодки задние`,price:`1 850 ₽`}],services:[{name:`Замена тормозных колодок`,price:`от 3 000 ₽`},{name:`Диагностика тормозной системы`,price:`1 500 ₽`}]},{id:2,title:`Низкий уровень масла`,severity:`medium`,description:`Уровень моторного масла ниже нормы. Возможна утечка или повышенный расход.`,parts:[{name:`Моторное масло 5W-30`,price:`1 200 ₽`},{name:`Масляный фильтр`,price:`450 ₽`}],services:[{name:`Замена масла и фильтра`,price:`1 800 ₽`},{name:`Диагностика системы смазки`,price:`800 ₽`}]}],f=e=>{r(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},p=e=>{a(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,L.jsxs)(zc,{children:[(0,L.jsxs)(Bc,{children:[(0,L.jsx)(Vc,{children:`Онлайн-диагностика автомобиля`}),(0,L.jsx)(Hc,{children:`Определите возможные причины неисправности вашего автомобиля`})]}),(0,L.jsx)(Uc,{children:c.map(n=>(0,L.jsxs)(Wc,{selected:e===n.id,onClick:()=>t(n.id),children:[(0,L.jsx)(Gc,{children:n.icon}),(0,L.jsx)(Kc,{children:n.title}),(0,L.jsx)(qc,{children:n.description})]},n.id))}),e===`symptoms`&&(0,L.jsxs)(Jc,{children:[(0,L.jsx)(`h2`,{children:`Выберите симптомы`}),(0,L.jsx)(Yc,{children:l.map(e=>(0,L.jsxs)(Xc,{selected:n.includes(e.id),onClick:()=>f(e.id),children:[(0,L.jsx)(Zc,{type:`checkbox`,checked:n.includes(e.id),onChange:()=>f(e.id)}),(0,L.jsx)(Qc,{children:e.icon}),(0,L.jsxs)($c,{children:[(0,L.jsx)(el,{children:e.name}),(0,L.jsx)(tl,{children:e.description})]})]},e.id))})]}),e===`zones`&&(0,L.jsxs)(nl,{children:[(0,L.jsx)(`h2`,{children:`Выберите зоны автомобиля`}),(0,L.jsx)(rl,{children:(0,L.jsx)(`img`,{src:`/profilum/assets/camryred-20Q81-oD.png`,alt:`camry_red`})}),(0,L.jsx)(il,{children:u.map(e=>(0,L.jsxs)(al,{selected:i.includes(e.id),onClick:()=>p(e.id),children:[(0,L.jsx)(ol,{children:e.icon}),(0,L.jsx)(sl,{children:e.name})]},e.id))})]}),e&&(0,L.jsx)(cl,{onClick:()=>{s(!0)},disabled:e===`symptoms`&&n.length===0||e===`zones`&&i.length===0,children:`Провести диагностику`}),o&&(0,L.jsxs)(W,{children:[(0,L.jsx)(ll,{children:`Результаты диагностики`}),d.map(e=>(0,L.jsxs)(ul,{severity:e.severity,children:[(0,L.jsxs)(dl,{children:[(0,L.jsx)(fl,{children:e.title}),(0,L.jsx)(pl,{severity:e.severity,children:e.severity===`high`?`Критично`:e.severity===`medium`?`Средне`:`Низко`})]}),(0,L.jsx)(ml,{children:e.description}),(0,L.jsxs)(hl,{children:[(0,L.jsx)(gl,{children:`Рекомендуемые запчасти:`}),(0,L.jsx)(_l,{children:e.parts.map((e,t)=>(0,L.jsxs)(vl,{children:[(0,L.jsx)(yl,{children:e.name}),(0,L.jsx)(bl,{children:e.price})]},t))})]}),(0,L.jsxs)(xl,{children:[(0,L.jsx)(Sl,{children:`Рекомендуемые услуги:`}),(0,L.jsx)(Cl,{children:e.services.map((e,t)=>(0,L.jsxs)(wl,{children:[(0,L.jsx)(Tl,{children:e.name}),(0,L.jsx)(El,{children:e.price})]},t))})]}),(0,L.jsx)(Dl,{children:`Записаться на ремонт`})]},e.id))]})]})},kl=F.div`
  padding: 2rem 1rem;
  margin: 0 auto;
`,Al=F.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`,jl=F.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${e=>e.active?e.theme.primary:e.theme.surface};
  color: ${e=>e.active?`white`:e.theme.text};
  font-weight: bold;
`,Ml=F.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${e=>e.completed?e.theme.accent:`transparent`};
  border: 2px solid ${e=>e.active?`white`:e.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.active?`white`:e.theme.primary};
  font-weight: bold;
`,Nl=F.form`
  background: ${e=>e.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${e=>e.theme.shadow};
`,Pl=F.div`
  margin-bottom: 2rem;
`,Fl=F.h2`
  color: ${e=>e.theme.text};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Il=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`,Ll=F.div`
  background: ${e=>e.theme.background};
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid ${e=>e.selected?e.theme.primary:e.theme.border};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border-color: ${e=>e.theme.primary};
    background: ${e=>e.theme.primary}05;
  }
`,Rl=F.h3`
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
`,zl=F.p`
  color: ${e=>e.theme.accent};
  font-weight: bold;
  margin-bottom: 0.5rem;
`,G=F.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.9rem;
`,K=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,q=F.div`
  background: ${e=>e.theme.background};
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid ${e=>e.selected?e.theme.primary:e.theme.border};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border-color: ${e=>e.theme.primary};
    background: ${e=>e.theme.primary}05;
  }
`,J=F.h3`
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
`,Y=F.p`
  color: ${e=>e.theme.textSecondary};
  margin-bottom: 0.5rem;
`,Bl=F.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.9rem;
`,Vl=F.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Hl=F.div`
  margin-bottom: 1.5rem;
`,Ul=F.label`
  display: block;
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
  font-weight: bold;
`,Wl=F.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${e=>e.theme.border};
  border-radius: 8px;
  font-size: 1rem;
  background: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
  }
`,X=F.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${e=>e.theme.border};
  border-radius: 8px;
  font-size: 1rem;
  background: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  min-height: 100px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
  }
`,Gl=F.button`
  background: ${e=>e.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: ${e=>e.theme.primary}dd;
  }
  &:disabled {
    background: ${e=>e.theme.textSecondary};
    cursor: not-allowed;
  }
`,Kl=F.div`
  text-align: center;
  background: ${e=>e.theme.surface};
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${e=>e.theme.shadow};
`,ql=F.div`
  font-size: 4rem;
  color: ${e=>e.theme.accent};
  margin-bottom: 1rem;
`,Jl=F.h2`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,Yl=F.p`
  color: ${e=>e.theme.textSecondary};
  margin-bottom: 2rem;
`,Xl=F.div`
  background: ${e=>e.theme.background};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: left;
`,Zl=F.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>e.theme.border};
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,Ql=F.span`
  color: ${e=>e.theme.textSecondary};
`,$l=F.span`
  color: ${e=>e.theme.text};
  font-weight: bold;
`,eu=F.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,tu=F.button`
  background: ${e=>e.primary?e.theme.primary:e.theme.surface};
  color: ${e=>e.primary?`white`:e.theme.text};
  border: ${e=>e.primary?`none`:`1px solid ${e.theme.border}`};
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  flex: 1;
  &:hover {
    background: ${e=>(e.primary,e.theme.primary)}dd;
    color: ${e=>(e.primary,`white`)};
  }
`,nu=()=>{let[e,t]=(0,_.useState)(1),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)({date:``,time:``,name:``,phone:``,email:``,carModel:``,vin:``,comment:``}),[c,l]=(0,_.useState)(!1),u=[{id:`diagnostic`,name:`Диагностика`,price:`от 1 500 ₽`,description:`Компьютерная диагностика всех систем автомобиля`},{id:`maintenance`,name:`ТО`,price:`от 3 000 ₽`,description:`Техническое обслуживание по регламенту`},{id:`brake_repair`,name:`Ремонт тормозов`,price:`от 2 500 ₽`,description:`Замена колодок, дисков, ремонт тормозной системы`},{id:`engine_repair`,name:`Ремонт двигателя`,price:`от 5 000 ₽`,description:`Капитальный ремонт двигателя`},{id:`suspension_repair`,name:`Ремонт подвески`,price:`от 4 000 ₽`,description:`Замена амортизаторов, рычагов, пружин`},{id:`electrical_repair`,name:`Ремонт электрики`,price:`от 2 000 ₽`,description:`Диагностика и ремонт электрооборудования`}],d=[{id:`center1`,name:`Автосервис "ТехноМотор"`,address:`ул. Индустриальная, 5`,phone:`+7 (495) 123-45-67`},{id:`center2`,name:`СТО "АвтоПрофи"`,address:`ул. Бульварная улица, 7`,phone:`+7 (495) 987-65-43`},{id:`center3`,name:`Сервис "Двигатель"`,address:`ул. Герцена, 80`,phone:`+7 (495) 555-12-34`}],f=e=>{s({...o,[e.target.name]:e.target.value})};return c?(0,L.jsx)(kl,{children:(0,L.jsxs)(Kl,{children:[(0,L.jsx)(ql,{children:(0,L.jsx)(za,{})}),(0,L.jsx)(Jl,{children:`Запись подтверждена!`}),(0,L.jsxs)(Yl,{children:[`Ваш номер заявки: `,(0,L.jsx)(`strong`,{children:`#A202312345`}),(0,L.jsx)(`br`,{}),`Мы свяжемся с вами в ближайшее время для подтверждения деталей.`]}),(0,L.jsxs)(Xl,{children:[(0,L.jsxs)(Zl,{children:[(0,L.jsx)(Ql,{children:`Услуга:`}),(0,L.jsx)($l,{children:u.find(e=>e.id===n)?.name})]}),(0,L.jsxs)(Zl,{children:[(0,L.jsx)(Ql,{children:`Сервисный центр:`}),(0,L.jsx)($l,{children:d.find(e=>e.id===i)?.name})]}),(0,L.jsxs)(Zl,{children:[(0,L.jsx)(Ql,{children:`Дата и время:`}),(0,L.jsxs)($l,{children:[o.date,` в `,o.time]})]}),(0,L.jsxs)(Zl,{children:[(0,L.jsx)(Ql,{children:`Контактное лицо:`}),(0,L.jsx)($l,{children:o.name})]}),(0,L.jsxs)(Zl,{children:[(0,L.jsx)(Ql,{children:`Телефон:`}),(0,L.jsx)($l,{children:o.phone})]})]}),(0,L.jsxs)(eu,{children:[(0,L.jsx)(tu,{primary:!0,children:`Добавить в календарь`}),(0,L.jsx)(tu,{children:`Вернуться на главную`})]})]})}):(0,L.jsxs)(kl,{children:[(0,L.jsxs)(Al,{children:[(0,L.jsxs)(jl,{active:e>=1,completed:e>1,children:[(0,L.jsx)(Ml,{active:e>=1,completed:e>1,children:`1`}),`Выбор услуги`]}),(0,L.jsxs)(jl,{active:e>=2,completed:e>2,children:[(0,L.jsx)(Ml,{active:e>=2,completed:e>2,children:`2`}),`Дата и время`]}),(0,L.jsxs)(jl,{active:e>=3,children:[(0,L.jsx)(Ml,{active:e>=3,children:`3`}),`Контакты`]})]}),(0,L.jsxs)(Nl,{onSubmit:n=>{n.preventDefault(),e<3?t(e+1):l(!0)},children:[e===1&&(0,L.jsxs)(Pl,{children:[(0,L.jsxs)(Fl,{children:[(0,L.jsx)(Ra,{}),`Выберите услугу`]}),(0,L.jsx)(Il,{children:u.map(e=>(0,L.jsxs)(Ll,{selected:n===e.id,onClick:()=>r(e.id),children:[(0,L.jsx)(Rl,{children:e.name}),(0,L.jsx)(zl,{children:e.price}),(0,L.jsx)(G,{children:e.description})]},e.id))})]}),e===2&&(0,L.jsxs)(Pl,{children:[(0,L.jsxs)(Fl,{children:[(0,L.jsx)(La,{}),`Выберите сервисный центр и время`]}),(0,L.jsx)(K,{children:d.map(e=>(0,L.jsxs)(q,{selected:i===e.id,onClick:()=>a(e.id),children:[(0,L.jsx)(J,{children:e.name}),(0,L.jsx)(Y,{children:e.address}),(0,L.jsx)(Bl,{children:e.phone})]},e.id))}),(0,L.jsxs)(Vl,{children:[(0,L.jsxs)(Hl,{children:[(0,L.jsx)(Ul,{children:`Дата`}),(0,L.jsx)(Wl,{type:`date`,name:`date`,value:o.date,onChange:f,required:!0})]}),(0,L.jsxs)(Hl,{children:[(0,L.jsx)(Ul,{children:`Время`}),(0,L.jsx)(Wl,{type:`time`,name:`time`,value:o.time,onChange:f,required:!0})]})]})]}),e===3&&(0,L.jsxs)(Pl,{children:[(0,L.jsxs)(Fl,{children:[(0,L.jsx)(oo,{}),`Ваши контактные данные`]}),(0,L.jsxs)(Hl,{children:[(0,L.jsx)(Ul,{children:`ФИО`}),(0,L.jsx)(Wl,{type:`text`,name:`name`,value:o.name,onChange:f,placeholder:`Иванов Иван Иванович`,required:!0})]}),(0,L.jsxs)(Hl,{children:[(0,L.jsx)(Ul,{children:`Телефон`}),(0,L.jsx)(Wl,{type:`tel`,name:`phone`,value:o.phone,onChange:f,placeholder:`+7 (___) ___-__-__`,required:!0})]}),(0,L.jsxs)(Hl,{children:[(0,L.jsx)(Ul,{children:`Email`}),(0,L.jsx)(Wl,{type:`email`,name:`email`,value:o.email,onChange:f,placeholder:`example@email.com`,required:!0})]}),(0,L.jsxs)(Hl,{children:[(0,L.jsx)(Ul,{children:`Марка и модель автомобиля`}),(0,L.jsx)(Wl,{type:`text`,name:`carModel`,value:o.carModel,onChange:f,placeholder:`Toyota Camry`,required:!0})]}),(0,L.jsxs)(Hl,{children:[(0,L.jsx)(Ul,{children:`VIN-код (опционально)`}),(0,L.jsx)(Wl,{type:`text`,name:`vin`,value:o.vin,onChange:f,placeholder:`17-значный VIN-код`})]}),(0,L.jsxs)(Hl,{children:[(0,L.jsx)(Ul,{children:`Комментарий`}),(0,L.jsx)(X,{name:`comment`,value:o.comment,onChange:f,placeholder:`Опишите проблему или дополнительные пожелания`})]})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,marginTop:`2rem`},children:[e>1&&(0,L.jsx)(Gl,{type:`button`,onClick:()=>{e>1&&t(e-1)},style:{background:`#6c757d`},children:`Назад`}),(0,L.jsx)(Gl,{type:`submit`,disabled:e===1&&!n||e===2&&(!i||!o.date||!o.time),children:e===3?`Подтвердить запись`:`Далее`})]})]})]})},ru=F.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`,iu=F.div`
  background: ${e=>e.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${e=>e.theme.shadow};
  margin-bottom: 2rem;
`,au=F.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,ou=F.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${e=>e.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
`,su=F.div`
  flex: 1;
`,cu=F.h1`
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
`,lu=F.p`
  color: ${e=>e.theme.textSecondary};
  margin-bottom: 1rem;
`,uu=F.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`,du=F.div`
  text-align: center;
`,fu=F.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>e.theme.primary};
`,pu=F.div`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.9rem;
`,mu=F.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,hu=F.div`
  background: ${e=>e.theme.surface};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${e=>e.theme.shadow};
`,gu=F.div`
  margin-bottom: 0.5rem;
`,_u=F.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${e=>e.active?e.theme.primary:`transparent`};
  color: ${e=>e.active?`white`:e.theme.text};
  border: none;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
  &:hover {
    background: ${e=>e.active?e.theme.primary:e.theme.surface};
  }
`,vu=F.div`
  background: ${e=>e.theme.surface};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px ${e=>e.theme.shadow};
`,yu=F.h2`
  color: ${e=>e.theme.text};
  margin-bottom: 1.5rem;
`,bu=F.div`
  display: grid;
  gap: 1rem;
`,xu=F.div`
  background: ${e=>e.theme.background};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px ${e=>e.theme.shadow};
`,Su=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Cu=F.h3`
  color: ${e=>e.theme.text};
`,wu=F.span`
  padding: 0.25rem 0.5rem;
  background: ${e=>e.theme.accent};
  color: white;
  border-radius: 4px;
  font-size: 0.8rem;
`,Tu=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`,Eu=F.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.textSecondary};
  font-size: 0.9rem;
`,Du=F.div`
  width: 80px;
  height: 60px;
  background: ${e=>e.theme.surface};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`,Ou=F.div`
  margin-top: 2rem;
`,ku=F.div`
  background: ${e=>e.theme.background};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px ${e=>e.theme.shadow};
  margin-bottom: 1rem;
`,Au=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,ju=F.h4`
  color: ${e=>e.theme.text};
`,Mu=F.span`
  padding: 0.25rem 0.5rem;
  background: ${e=>e.theme.primary};
  color: white;
  border-radius: 4px;
  font-size: 0.8rem;
`,Nu=F.div`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.9rem;
`,Pu=()=>{let[e,t]=(0,_.useState)(`cars`);return(0,L.jsxs)(ru,{children:[(0,L.jsx)(iu,{children:(0,L.jsxs)(au,{children:[(0,L.jsx)(ou,{children:(0,L.jsx)(oo,{size:40})}),(0,L.jsxs)(su,{children:[(0,L.jsx)(cu,{children:`Иван Ященко`}),(0,L.jsx)(lu,{children:`ivan.yashenko@ya.ru`}),(0,L.jsxs)(uu,{children:[(0,L.jsxs)(du,{children:[(0,L.jsx)(fu,{children:`3`}),(0,L.jsx)(pu,{children:`Автомобиля`})]}),(0,L.jsxs)(du,{children:[(0,L.jsx)(fu,{children:`12`}),(0,L.jsx)(pu,{children:`Заказов`})]}),(0,L.jsxs)(du,{children:[(0,L.jsx)(fu,{children:`4.8`}),(0,L.jsx)(pu,{children:`Рейтинг`})]})]})]})]})}),(0,L.jsxs)(mu,{children:[(0,L.jsxs)(hu,{children:[(0,L.jsx)(gu,{children:(0,L.jsxs)(_u,{active:e===`cars`,onClick:()=>t(`cars`),children:[(0,L.jsx)(Ra,{size:18,style:{marginRight:`0.5rem`}}),`Мои автомобили`]})}),(0,L.jsx)(gu,{children:(0,L.jsxs)(_u,{active:e===`orders`,onClick:()=>t(`orders`),children:[(0,L.jsx)(La,{size:18,style:{marginRight:`0.5rem`}}),`Заказы`]})}),(0,L.jsx)(gu,{children:(0,L.jsxs)(_u,{active:e===`bookings`,onClick:()=>t(`bookings`),children:[(0,L.jsx)($a,{size:18,style:{marginRight:`0.5rem`}}),`Записи на ремонт`]})}),(0,L.jsx)(gu,{children:(0,L.jsxs)(_u,{active:e===`settings`,onClick:()=>t(`settings`),children:[(0,L.jsx)($a,{size:18,style:{marginRight:`0.5rem`}}),`Настройки`]})}),(0,L.jsx)(gu,{children:(0,L.jsxs)(_u,{children:[(0,L.jsx)(Ka,{size:18,style:{marginRight:`0.5rem`}}),`Выйти`]})})]}),(0,L.jsxs)(vu,{children:[e===`cars`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(yu,{children:`Мои автомобили`}),(0,L.jsxs)(bu,{children:[(0,L.jsxs)(xu,{children:[(0,L.jsxs)(Su,{children:[(0,L.jsx)(Cu,{children:`BMW SERIES 3 -  2018`}),(0,L.jsx)(wu,{children:`Активный`})]}),(0,L.jsxs)(Tu,{children:[(0,L.jsx)(Eu,{children:(0,L.jsx)(Du,{children:(0,L.jsx)(`img`,{src:`/profilum/assets/bmw-ByHqSOgX.jpg`,alt:`hero`})})}),(0,L.jsx)(Eu,{children:(0,L.jsx)(`span`,{children:`Пробег: 75 900 км`})}),(0,L.jsx)(Eu,{children:(0,L.jsx)(`span`,{children:`Двигатель: 2.0L 184 HP`})}),(0,L.jsx)(Eu,{children:(0,L.jsx)(`span`,{children:`ТО: 01.12.2023`})})]})]}),(0,L.jsxs)(xu,{children:[(0,L.jsxs)(Su,{children:[(0,L.jsx)(Cu,{children:`Audi RS5 2013`}),(0,L.jsx)(wu,{children:`Неактивный`})]}),(0,L.jsxs)(Tu,{children:[(0,L.jsx)(Eu,{children:(0,L.jsxs)(Du,{children:[` `,(0,L.jsx)(`img`,{src:`/profilum/assets/audi-CMMIEa-4.jpg`,alt:`hero`})]})}),(0,L.jsx)(Eu,{children:(0,L.jsx)(`span`,{children:`Пробег: 203 000 км`})}),(0,L.jsx)(Eu,{children:(0,L.jsx)(`span`,{children:`Двигатель: 4.2L 450 HP`})}),(0,L.jsx)(Eu,{children:(0,L.jsx)(`span`,{children:`ТО: 15.01.2024`})})]})]})]})]}),e===`orders`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(yu,{children:`Мои заказы`}),(0,L.jsxs)(Ou,{children:[(0,L.jsxs)(ku,{children:[(0,L.jsxs)(Au,{children:[(0,L.jsx)(ju,{children:`Заказ #12345`}),(0,L.jsx)(Mu,{children:`Выполнен`})]}),(0,L.jsxs)(Nu,{children:[`Масляный фильтр Bosch + Замена масла`,(0,L.jsx)(`br`,{}),`15.11.2023 - 3 450 ₽`]})]}),(0,L.jsxs)(ku,{children:[(0,L.jsxs)(Au,{children:[(0,L.jsx)(ju,{children:`Заказ #12346`}),(0,L.jsx)(Mu,{children:`В обработке`})]}),(0,L.jsxs)(Nu,{children:[`Тормозные колодки + Замена`,(0,L.jsx)(`br`,{}),`20.11.2023 - 5 200 ₽`]})]})]})]}),e===`bookings`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(yu,{children:`Записи на ремонт`}),(0,L.jsx)(Ou,{children:(0,L.jsxs)(ku,{children:[(0,L.jsxs)(Au,{children:[(0,L.jsx)(ju,{children:`Запись #78901`}),(0,L.jsx)(Mu,{children:`Подтверждена`})]}),(0,L.jsxs)(Nu,{children:[`Диагностика автомобиля`,(0,L.jsx)(`br`,{}),`25.11.2023 в 14:00 - Сервис на ул. Бульварная, 7`]})]})})]}),e===`settings`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(yu,{children:`Настройки профиля`}),(0,L.jsx)(`div`,{children:`Скоро...`})]})]})]})]})},Fu=F.div`
  padding: 2rem 1rem;
  margin: 0 auto;
`,Iu=F.div`
  text-align: center;
  margin-bottom: 3rem;
`,Lu=F.h1`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,Ru=F.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`,zu=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Bu=F.div`
  background: ${e=>e.theme.background};
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.border};
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 8px 25px ${e=>e.theme.shadow};
    transform: translateY(-5px);
  }
`,Vu=F.div`
  width: 60px;
  height: 60px;
  background: ${e=>e.theme.primary};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`,Hu=F.h3`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,Uu=F.p`
  color: ${e=>e.theme.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,Wu=F.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${e=>e.theme.accent};
  margin-bottom: 1.5rem;
`,Z=F.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`,Gu=F.li`
  color: ${e=>e.theme.textSecondary};
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  &:before {
    content: '✓';
    color: ${e=>e.theme.accent};
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`,Ku=F.button`
  background: ${e=>e.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: ${e=>e.theme.primary}dd;
  }
`,qu=F.div`
  background: ${e=>e.theme.surface};
  padding: 3rem 1rem;
  border-radius: 12px;
  margin-bottom: 4rem;
`,Ju=F.h2`
  text-align: center;
  color: ${e=>e.theme.text};
  margin-bottom: 2rem;
`,Yu=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`,Xu=F.div`
  background: ${e=>e.theme.background};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid ${e=>e.theme.border};
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: ${e=>e.theme.primary};
    background: ${e=>e.theme.primary}05;
  }
`,Zu=F.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.primary};
`,Qu=F.h4`
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
`,$u=F.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.9rem;
`,ed=F.div`
  text-align: center;
  margin-bottom: 4rem;
`,td=F.h2`
  color: ${e=>e.theme.text};
  margin-bottom: 2rem;
`,nd=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`,rd=F.div`
  background: ${e=>e.theme.background};
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.border};
  text-align: center;
`,id=F.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.primary};
`,ad=F.h4`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,od=F.p`
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
`,sd=()=>(0,L.jsxs)(Fu,{children:[(0,L.jsxs)(Iu,{children:[(0,L.jsx)(Lu,{children:`Наши услуги`}),(0,L.jsx)(Ru,{children:`Профессиональное обслуживание автомобилей с использованием современного оборудования и качественных запчастей`})]}),(0,L.jsx)(zu,{children:[{id:`diagnostic`,icon:(0,L.jsx)($a,{}),title:`Диагностика автомобиля`,description:`Компьютерная диагностика всех систем автомобиля с использованием современного оборудования.`,price:`от 1 500 ₽`,features:[`Полная проверка всех систем`,`Чтение кодов ошибок`,`Анализ работы двигателя`,`Проверка электроники`]},{id:`engine_repair`,icon:(0,L.jsx)(Va,{}),title:`Ремонт двигателя`,description:`Капитальный ремонт и обслуживание двигателей всех типов.`,price:`от 5 000 ₽`,features:[`Разборка и дефектовка`,`Замена изношенных деталей`,`Балансировка коленвала`,`Установка новых комплектующих`]},{id:`brake_system`,icon:(0,L.jsx)(eo,{}),title:`Тормозная система`,description:`Диагностика и ремонт тормозной системы для обеспечения безопасности.`,price:`от 2 500 ₽`,features:[`Замена тормозных колодок`,`Ремонт тормозных дисков`,`Прокачка тормозной системы`,`Проверка ABS`]},{id:`electrical`,icon:(0,L.jsx)(lo,{}),title:`Электрооборудование`,description:`Ремонт и обслуживание всей электрики автомобиля.`,price:`от 2 000 ₽`,features:[`Диагностика электрики`,`Ремонт проводки`,`Замена предохранителей`,`Ремонт генератора и стартера`]},{id:`suspension`,icon:(0,L.jsx)(Ra,{}),title:`Ремонт подвески`,description:`Замена и ремонт элементов подвески для комфортной езды.`,price:`от 4 000 ₽`,features:[`Замена амортизаторов`,`Ремонт рычагов`,`Замена пружин`,`Выравнивание развала-схождения`]},{id:`maintenance`,icon:(0,L.jsx)(so,{}),title:`Техническое обслуживание`,description:`Регулярное ТО для поддержания автомобиля в отличном состоянии.`,price:`от 3 000 ₽`,features:[`Замена масла и фильтров`,`Проверка всех жидкостей`,`Осмотр ходовой части`,`Компьютерная диагностика`]},{id:`battery`,icon:(0,L.jsx)(Ia,{}),title:`Аккумуляторы`,description:`Продажа и установка автомобильных аккумуляторов.`,price:`от 3 500 ₽`,features:[`Подбор аккумулятора`,`Тестирование старого АКБ`,`Установка и подключение`,`Гарантия на работу`]},{id:`cooling`,icon:(0,L.jsx)(io,{}),title:`Система охлаждения`,description:`Ремонт и обслуживание системы охлаждения двигателя.`,price:`от 2 000 ₽`,features:[`Замена антифриза`,`Ремонт радиатора`,`Замена термостата`,`Проверка помпы`]}].map(e=>(0,L.jsxs)(Bu,{children:[(0,L.jsx)(Vu,{children:e.icon}),(0,L.jsx)(Hu,{children:e.title}),(0,L.jsx)(Uu,{children:e.description}),(0,L.jsx)(Wu,{children:e.price}),(0,L.jsx)(Z,{children:e.features.map((e,t)=>(0,L.jsx)(Gu,{children:e},t))}),(0,L.jsx)(Ku,{children:`Записаться`})]},e.id))}),(0,L.jsxs)(qu,{children:[(0,L.jsx)(Ju,{children:`Категории услуг`}),(0,L.jsx)(Yu,{children:[{icon:`⚙️`,title:`Двигатель`,description:`Ремонт и обслуживание`},{icon:`🔧`,title:`Трансмиссия`,description:`Коробка передач, приводы`},{icon:`🛞`,title:`Подвеска`,description:`Ходовая часть`},{icon:`🔌`,title:`Электрика`,description:`Электрооборудование`},{icon:`🚗`,title:`Кузов`,description:`Кузовные работы`},{icon:`🛑`,title:`Тормоза`,description:`Тормозная система`},{icon:`💡`,title:`Оптика`,description:`Фары и освещение`},{icon:`🛢️`,title:`ТО`,description:`Техобслуживание`}].map((e,t)=>(0,L.jsxs)(Xu,{children:[(0,L.jsx)(Zu,{children:e.icon}),(0,L.jsx)(Qu,{children:e.title}),(0,L.jsx)($u,{children:e.description})]},t))})]}),(0,L.jsxs)(ed,{children:[(0,L.jsx)(td,{children:`Почему выбирают нас`}),(0,L.jsx)(nd,{children:[{icon:`⏰`,title:`Быстрое обслуживание`,description:`Выполняем работы в кратчайшие сроки без потери качества`},{icon:`🛡️`,title:`Гарантия качества`,description:`Предоставляем гарантию на все виды выполненных работ`},{icon:`💰`,title:`Доступные цены`,description:`Оптимальное соотношение цены и качества услуг`},{icon:`🔧`,title:`Современное оборудование`,description:`Используем профессиональное диагностическое оборудование`}].map((e,t)=>(0,L.jsxs)(rd,{children:[(0,L.jsx)(id,{children:e.icon}),(0,L.jsx)(ad,{children:e.title}),(0,L.jsx)(od,{children:e.description})]},t))})]})]}),cd=F.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`,ld=F.div`
  background: linear-gradient(135deg, ${e=>e.theme.primary} 0%, ${e=>e.theme.accent} 100%);
  color: white;
  padding: 4rem 1rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 4rem;
`,ud=F.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,dd=F.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
`,fd=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,pd=F.div`
  background: ${e=>e.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px ${e=>e.theme.shadow};
`,md=F.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${e=>e.theme.primary};
  margin-bottom: 0.5rem;
`,hd=F.div`
  color: ${e=>e.theme.textSecondary};
  font-size: 1.1rem;
`,gd=F.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,_d=F.div`
  h2 {
    color: ${e=>e.theme.text};
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  p {
    color: ${e=>e.theme.textSecondary};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  ul {
    color: ${e=>e.theme.textSecondary};
    line-height: 1.7;
    margin-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`,vd=F.div`
  text-align: center;
  margin-bottom: 4rem;
`,yd=F.h2`
  color: ${e=>e.theme.text};
  margin-bottom: 2rem;
  font-size: 2.5rem;
`,Q=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,bd=F.div`
  background: ${e=>e.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px ${e=>e.theme.shadow};
`,xd=F.div`
  width: 100px;
  height: 100px;
  background: ${e=>e.theme.primary};
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
`,Sd=F.h3`
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
`,Cd=F.div`
  color: ${e=>e.theme.textSecondary};
  margin-bottom: 1rem;
`,wd=F.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
`,Td=F.div`
  background: ${e=>e.theme.surface};
  padding: 4rem 1rem;
  border-radius: 12px;
  margin-bottom: 4rem;
`,Ed=F.h2`
  text-align: center;
  color: ${e=>e.theme.text};
  margin-bottom: 3rem;
  font-size: 2.5rem;
`,Dd=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`,Od=F.div`
  text-align: center;
  padding: 2rem;
`,kd=F.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.primary};
`,Ad=F.h3`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,jd=F.p`
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
`,Md=F.div`
  background: ${e=>e.theme.surface};
  padding: 3rem 1rem;
  border-radius: 12px;
  text-align: center;
`,$=F.h2`
  color: ${e=>e.theme.text};
  margin-bottom: 2rem;
`,Nd=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Pd=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,Fd=F.div`
  width: 60px;
  height: 60px;
  background: ${e=>e.theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`,Id=F.div`
  h3 {
    color: ${e=>e.theme.text};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${e=>e.theme.textSecondary};
  }
`,Ld=()=>{let e=[{number:`5000+`,label:`Довольных клиентов`},{number:`10+`,label:`Лет опыта`},{number:`50+`,label:`Специалистов`},{number:`24/7`,label:`Поддержка`}],t=[{name:`Фархат Яминов`,position:`Генеральный директор`,description:`Более 15 лет в автомобильной отрасли. Специалист по управлению автосервисами.`,avatar:`👨‍💼`},{name:`Сергей Стрыгин`,position:`Главный механик`,description:`Эксперт по ремонту двигателей и трансмиссии. Сертифицированный специалист.`,avatar:`👨‍🔧`},{name:`Алексей Козлов`,position:`Менеджер по качеству`,description:`Отвечает за контроль качества работ и соблюдение стандартов обслуживания.`,avatar:`👨‍💼`},{name:`А Р`,position:`Генеральный директор`,description:`Эксперт по компьютерной диагностике всех систем автомобиля.`,avatar:`🧑‍💻`}],n=[{icon:`🎯`,title:`Качество превыше всего`,description:`Мы стремимся к совершенству в каждой детали ремонта и обслуживания вашего автомобиля.`},{icon:`🤝`,title:`Доверие и честность`,description:`Открытость в работе, честные цены и прозрачность всех процессов.`},{icon:`🚀`,title:`Инновации`,description:`Используем современное оборудование и передовые технологии для лучшего результата.`},{icon:`❤️`,title:`Забота о клиентах`,description:`Ваше удобство и удовлетворенность - наш главный приоритет.`}],r=[{icon:(0,L.jsx)(Ja,{}),title:`Адрес`,info:`Тюмень, ул. Индустриальная, 5`},{icon:(0,L.jsx)(Za,{}),title:`Телефон`,info:`7 (909) 999-66-66`},{icon:(0,L.jsx)(qa,{}),title:`Email`,info:`admin@avtohause.ru`},{icon:(0,L.jsx)(Ha,{}),title:`Сайт`,info:`avtohaus.ru`}];return(0,L.jsxs)(cd,{children:[(0,L.jsxs)(ld,{children:[(0,L.jsx)(ud,{children:`О компании Автохаус Форт`}),(0,L.jsx)(dd,{children:`Мы - современный автосервис с многолетним опытом работы. Наша команда профессионалов обеспечивает качественное обслуживание и ремонт автомобилей всех марок.`})]}),(0,L.jsx)(fd,{children:e.map((e,t)=>(0,L.jsxs)(pd,{children:[(0,L.jsx)(md,{children:e.number}),(0,L.jsx)(hd,{children:e.label})]},t))}),(0,L.jsxs)(gd,{children:[(0,L.jsxs)(_d,{children:[(0,L.jsx)(`h2`,{children:`Наша история`}),(0,L.jsx)(`p`,{children:`Компания Автохаус Форт была основана в 2013 году группой энтузиастов автомобильной отрасли. За годы работы мы выросли из небольшого гаража в современный многопрофильный автосервис, оборудованный по последнему слову техники.`}),(0,L.jsx)(`p`,{children:`Сегодня мы обслуживаем более 5000 клиентов ежегодно и продолжаем развиваться, внедряя новые технологии и расширяя спектр услуг.`})]}),(0,L.jsxs)(_d,{children:[(0,L.jsx)(`h2`,{children:`Наши преимущества`}),(0,L.jsxs)(`ul`,{children:[(0,L.jsx)(`li`,{children:`Современное диагностическое оборудование`}),(0,L.jsx)(`li`,{children:`Квалифицированные специалисты с опытом работы`}),(0,L.jsx)(`li`,{children:`Использование оригинальных запчастей и расходников`}),(0,L.jsx)(`li`,{children:`Гарантия на все виды работ`}),(0,L.jsx)(`li`,{children:`Удобное расположение и гибкий график работы`}),(0,L.jsx)(`li`,{children:`Прозрачное ценообразование без скрытых платежей`})]})]})]}),(0,L.jsxs)(vd,{children:[(0,L.jsx)(yd,{children:`Наша команда`}),(0,L.jsx)(Q,{children:t.map((e,t)=>(0,L.jsxs)(bd,{children:[(0,L.jsx)(xd,{children:e.avatar}),(0,L.jsx)(Sd,{children:e.name}),(0,L.jsx)(Cd,{children:e.position}),(0,L.jsx)(wd,{children:e.description})]},t))})]}),(0,L.jsxs)(Td,{children:[(0,L.jsx)(Ed,{children:`Наши ценности`}),(0,L.jsx)(Dd,{children:n.map((e,t)=>(0,L.jsxs)(Od,{children:[(0,L.jsx)(kd,{children:e.icon}),(0,L.jsx)(Ad,{children:e.title}),(0,L.jsx)(jd,{children:e.description})]},t))})]}),(0,L.jsxs)(Md,{children:[(0,L.jsx)($,{children:`Свяжитесь с нами`}),(0,L.jsx)(Nd,{children:r.map((e,t)=>(0,L.jsxs)(Pd,{children:[(0,L.jsx)(Fd,{children:e.icon}),(0,L.jsxs)(Id,{children:[(0,L.jsx)(`h3`,{children:e.title}),(0,L.jsx)(`p`,{children:e.info})]})]},t))})]})]})},Rd=F.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`,zd=F.div`
  text-align: center;
  margin-bottom: 4rem;
`,Bd=F.h1`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,Vd=F.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`,Hd=F.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Ud=F.div`
  h2 {
    color: ${e=>e.theme.text};
    margin-bottom: 2rem;
  }
`,Wd=F.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
`,Gd=F.div`
  color: ${e=>e.theme.primary};
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
`,Kd=F.div`
  flex: 1;
`,qd=F.div`
  color: ${e=>e.theme.text};
  font-weight: bold;
  margin-bottom: 0.5rem;
`,Jd=F.div`
  color: ${e=>e.theme.textSecondary};
  line-height: 1.5;
`,Yd=F.div`
  margin-bottom: 2rem;
`,Xd=F.div`
  background: ${e=>e.theme.background};
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.border};
  margin-bottom: 1rem;
`,Zd=F.h3`
  color: ${e=>e.theme.text};
  margin-bottom: 1rem;
`,Qd=F.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,$d=F.div`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.9rem;
`,ef=F.div`
  background: ${e=>e.theme.surface};
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 4rem;
`,tf=F.h2`
  color: ${e=>e.theme.text};
  margin-bottom: 2rem;
  text-align: center;
`,nf=F.div`
  width: 100%;
  height: 400px;
  background: ${e=>e.theme.background};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.textSecondary};
  font-size: 1.2rem;
  border: 2px dashed ${e=>e.theme.border};
`,rf=F.div`
  background: ${e=>e.theme.surface};
  padding: 2rem;
  border-radius: 12px;
`,af=F.h2`
  color: ${e=>e.theme.text};
  margin-bottom: 2rem;
  text-align: center;
`,of=F.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,sf=F.div`
  margin-bottom: 1.5rem;
`,cf=F.label`
  display: block;
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
  font-weight: bold;
`,lf=F.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${e=>e.theme.border};
  border-radius: 8px;
  font-size: 1rem;
  background: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
  }
`,uf=F.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${e=>e.theme.border};
  border-radius: 8px;
  font-size: 1rem;
  background: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  min-height: 120px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
  }
`,df=F.button`
  background: ${e=>e.theme.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    background: ${e=>e.theme.primary}dd;
  }
`,ff=()=>(0,L.jsxs)(Rd,{children:[(0,L.jsxs)(zd,{children:[(0,L.jsx)(Bd,{children:`Контакты`}),(0,L.jsx)(Vd,{children:`Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь с ремонтом вашего автомобиля.`})]}),(0,L.jsxs)(Hd,{children:[(0,L.jsxs)(Ud,{children:[(0,L.jsx)(`h2`,{children:`Свяжитесь с нами`}),[{icon:(0,L.jsx)(Ja,{}),label:`Главный офис`,value:`Тюмень, ул. Индустриальная, 5`},{icon:(0,L.jsx)(Za,{}),label:`Телефон`,value:`+7 (909) 999-66-66
+7 (495) 123-45-68 (запчасти)`},{icon:(0,L.jsx)(qa,{}),label:`Email`,value:`admin@avtohaus.ru
parts@avtohaus.ru (запчасти)`},{icon:(0,L.jsx)(Ba,{}),label:`Режим работы`,value:`Пн-Пт: 9:00 - 20:00
Сб-Вс: 10:00 - 18:00
Без выходных`}].map((e,t)=>(0,L.jsxs)(Wd,{children:[(0,L.jsx)(Gd,{children:e.icon}),(0,L.jsxs)(Kd,{children:[(0,L.jsx)(qd,{children:e.label}),(0,L.jsx)(Jd,{style:{whiteSpace:`pre-line`},children:e.value})]})]},t)),(0,L.jsxs)(Yd,{children:[(0,L.jsx)(`h3`,{style:{color:`#333`,marginBottom:`1rem`},children:`Сервисные центры`}),[{name:`Автосервис "ТехноМотор"`,address:`ул. Индустриальная, 5`,phone:`+7 (495) 123-45-67`,hours:`9:00 - 20:00`},{name:`СТО "АвтоПрофи"`,address:`ул. Бульварная улица, 7`,phone:`+7 (495) 987-65-43`,hours:`8:00 - 21:00`},{name:`Сервис "Двигатель"`,address:`ул. Герцена, 80`,phone:`+7 (495) 555-12-34`,hours:`9:00 - 19:00`}].map((e,t)=>(0,L.jsxs)(Xd,{children:[(0,L.jsx)(Zd,{children:e.name}),(0,L.jsxs)(Qd,{children:[(0,L.jsxs)($d,{children:[`📍 `,e.address]}),(0,L.jsxs)($d,{children:[`📞 `,e.phone]}),(0,L.jsxs)($d,{children:[`🕐 `,e.hours]})]})]},t))]})]}),(0,L.jsxs)(rf,{children:[(0,L.jsx)(af,{children:`Напишите нам`}),(0,L.jsxs)(of,{children:[(0,L.jsxs)(sf,{children:[(0,L.jsx)(cf,{children:`Имя`}),(0,L.jsx)(lf,{type:`text`,placeholder:`Ваше имя`})]}),(0,L.jsxs)(sf,{children:[(0,L.jsx)(cf,{children:`Телефон`}),(0,L.jsx)(lf,{type:`tel`,placeholder:`+7 (___) ___-__-__`})]})]}),(0,L.jsxs)(sf,{children:[(0,L.jsx)(cf,{children:`Email`}),(0,L.jsx)(lf,{type:`email`,placeholder:`your@email.com`})]}),(0,L.jsxs)(sf,{children:[(0,L.jsx)(cf,{children:`Тема`}),(0,L.jsx)(lf,{type:`text`,placeholder:`Тема сообщения`})]}),(0,L.jsxs)(sf,{children:[(0,L.jsx)(cf,{children:`Сообщение`}),(0,L.jsx)(uf,{placeholder:`Опишите ваш вопрос или проблему`})]}),(0,L.jsxs)(df,{children:[(0,L.jsx)(Qa,{size:20}),`Отправить сообщение`]})]})]}),(0,L.jsxs)(ef,{children:[(0,L.jsx)(tf,{children:`Наши сервисные центры на карте`}),(0,L.jsx)(nf,{children:(0,L.jsx)(`iframe`,{src:`https://yandex.com/map-widget/v1/-/CLg9q2OS`,style:{width:`100%`,height:`100%`,border:`0`},allowFullScreen:!0,loading:`lazy`})})]})]});function pf(){let[e,t]=(0,_.useState)(()=>localStorage.getItem(`theme`)||(window.matchMedia(`(prefers-color-scheme: light)`).matches?`light`:`dark`));return(0,_.useEffect)(()=>{localStorage.setItem(`theme`,e)},[e]),(0,L.jsxs)(ha,{theme:e===`light`?Ea:Da,children:[(0,L.jsx)(Ta,{}),(0,L.jsxs)(ln,{children:[(0,L.jsx)(bo,{toggleTheme:()=>{t(e=>e===`light`?`dark`:`light`)},theme:e}),(0,L.jsx)(`main`,{children:(0,L.jsxs)(Ct,{children:[(0,L.jsx)(xt,{path:`/`,element:(0,L.jsx)(ys,{})}),(0,L.jsx)(xt,{path:`/search-parts`,element:(0,L.jsx)(Zs,{})}),(0,L.jsx)(xt,{path:`/product/:id`,element:(0,L.jsx)(U,{})}),(0,L.jsx)(xt,{path:`/diagnostics`,element:(0,L.jsx)(Ol,{})}),(0,L.jsx)(xt,{path:`/booking`,element:(0,L.jsx)(nu,{})}),(0,L.jsx)(xt,{path:`/profile`,element:(0,L.jsx)(Pu,{})}),(0,L.jsx)(xt,{path:`/services`,element:(0,L.jsx)(sd,{})}),(0,L.jsx)(xt,{path:`/about`,element:(0,L.jsx)(Ld,{})}),(0,L.jsx)(xt,{path:`/contacts`,element:(0,L.jsx)(ff,{})})]})}),(0,L.jsx)(Eo,{})]})]})}var mf=pf;(0,g.createRoot)(document.getElementById(`root`)).render((0,L.jsx)(_.StrictMode,{children:(0,L.jsx)(mf,{})}));
function q(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var O=!1;if(typeof window<"u"){var C={get passive(){O=!0}};window.addEventListener("testPassive",null,C),window.removeEventListener("testPassive",null,C)}var v=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),d=[],y=!1,x=-1,g=void 0,s=void 0,h=void 0,D=function(e){return d.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},w=function(e){var n=e||window.event;return D(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},G=function(e){if(h===void 0){var n=!!e&&e.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(n&&i>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);h=document.body.style.paddingRight,document.body.style.paddingRight=r+i+"px"}}g===void 0&&(g=document.body.style.overflow,document.body.style.overflow="hidden")},H=function(){h!==void 0&&(document.body.style.paddingRight=h,h=void 0),g!==void 0&&(document.body.style.overflow=g,g=void 0)},X=function(){return window.requestAnimationFrame(function(){if(s===void 0){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,n=e.scrollY,i=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var f=r-window.innerHeight;f&&n>=r&&(document.body.style.top=-(n+f))})},300)}})},R=function(){if(s!==void 0){var e=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(n,e),s=void 0}},z=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},U=function(e,n){var i=e.targetTouches[0].clientY-x;return D(e.target)?!1:n&&n.scrollTop===0&&i>0||z(n)&&i<0?w(e):(e.stopPropagation(),!0)},V=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!d.some(function(r){return r.targetElement===e})){var i={targetElement:e,options:n||{}};d=[].concat(q(d),[i]),v?X():G(n),v&&(e.ontouchstart=function(r){r.targetTouches.length===1&&(x=r.targetTouches[0].clientY)},e.ontouchmove=function(r){r.targetTouches.length===1&&U(r,e)},y||(document.addEventListener("touchmove",w,O?{passive:!1}:void 0),y=!0))}},J=function(){v&&(d.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),y&&(document.removeEventListener("touchmove",w,O?{passive:!1}:void 0),y=!1),x=-1),v?R():H(),d=[]},K=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}d=d.filter(function(n){return n.targetElement!==e}),v&&(e.ontouchstart=null,e.ontouchmove=null,y&&d.length===0&&(document.removeEventListener("touchmove",w,O?{passive:!1}:void 0),y=!1)),v?R():H()};const pe=Object.freeze(Object.defineProperty({__proto__:null,clearAllBodyScrollLocks:J,disableBodyScroll:V,enableBodyScroll:K},Symbol.toStringTag,{value:"Module"}));var T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Q(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z="Expected a function",F=0/0,ee="[object Symbol]",te=/^\s+|\s+$/g,ne=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,re=/^0o[0-7]+$/i,ie=parseInt,le=typeof T=="object"&&T&&T.Object===Object&&T,de=typeof self=="object"&&self&&self.Object===Object&&self,ue=le||de||Function("return this")(),fe=Object.prototype,ae=fe.toString,se=Math.max,ce=Math.min,P=function(){return ue.Date.now()};function ve(t,e,n){var i,r,f,c,l,a,m=0,A=!1,b=!1,j=!0;if(typeof t!="function")throw new TypeError(Z);e=_(e)||0,L(n)&&(A=!!n.leading,b="maxWait"in n,f=b?se(_(n.maxWait)||0,e):f,j="trailing"in n?!!n.trailing:j);function I(o){var u=i,p=r;return i=r=void 0,m=o,c=t.apply(p,u),c}function W(o){return m=o,l=setTimeout(S,e),A?I(o):c}function $(o){var u=o-a,p=o-m,k=e-u;return b?ce(k,f-p):k}function E(o){var u=o-a,p=o-m;return a===void 0||u>=e||u<0||b&&p>=f}function S(){var o=P();if(E(o))return M(o);l=setTimeout(S,$(o))}function M(o){return l=void 0,j&&i?I(o):(i=r=void 0,c)}function N(){l!==void 0&&clearTimeout(l),m=0,i=a=r=l=void 0}function Y(){return l===void 0?c:M(P())}function B(){var o=P(),u=E(o);if(i=arguments,r=this,a=o,u){if(l===void 0)return W(a);if(b)return l=setTimeout(S,e),I(a)}return l===void 0&&(l=setTimeout(S,e)),c}return B.cancel=N,B.flush=Y,B}function L(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ye(t){return!!t&&typeof t=="object"}function me(t){return typeof t=="symbol"||ye(t)&&ae.call(t)==ee}function _(t){if(typeof t=="number")return t;if(me(t))return F;if(L(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=L(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(te,"");var n=oe.test(t);return n||re.test(t)?ie(t.slice(2),n?2:8):ne.test(t)?F:+t}var be=ve;const ge=Q(be);export{pe as b,ge as d,K as e};
//# sourceMappingURL=vendor-af36df9a.js.map

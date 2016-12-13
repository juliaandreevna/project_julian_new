/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.4.31
*/
(function(d){if(void 0===d.fn.inputmask){var R=function(d){var h=document.createElement("input");d="on"+d;var a=d in h;a||(h.setAttribute(d,"return;"),a="function"==typeof h[d]);return a},E=function(e,h,a){return(e=a.aliases[e])?(e.alias&&E(e.alias,void 0,a),d.extend(!0,a,e),d.extend(!0,a,h),!0):!1},D=function(e){function h(a){e.numericInput&&(a=a.split("").reverse().join(""));var f=!1,h=0,m=e.greedy,p=e.repeat;"*"==p&&(m=!1);1==a.length&&!1==m&&0!=p&&(e.placeholder="");a=d.map(a.split(""),function(a,
d){var l=[];if(a==e.escapeChar)f=!0;else if(a!=e.optionalmarker.start&&a!=e.optionalmarker.end||f){var r=e.definitions[a];if(r&&!f)for(var p=0;p<r.cardinality;p++)l.push(e.placeholder.charAt((h+p)%e.placeholder.length));else l.push(a),f=!1;h+=l.length;return l}});for(var s=a.slice(),r=1;r<p&&m;r++)s=s.concat(a.slice());return{mask:s,repeat:p,greedy:m}}function a(a){e.numericInput&&(a=a.split("").reverse().join(""));var f=!1,h=!1,p=!1;return d.map(a.split(""),function(a,d){var l=[];if(a==e.escapeChar)h=
!0;else{if(a!=e.optionalmarker.start||h){if(a!=e.optionalmarker.end||h){var k=e.definitions[a];if(k&&!h){for(var u=k.prevalidator,G=u?u.length:0,x=1;x<k.cardinality;x++){var C=G>=x?u[x-1]:[],K=C.validator,C=C.cardinality;l.push({fn:K?"string"==typeof K?RegExp(K):new function(){this.test=K}:/./,cardinality:C?C:1,optionality:f,newBlockMarker:!0==f?p:!1,offset:0,casing:k.casing,def:k.definitionSymbol||a});!0==f&&(p=!1)}l.push({fn:k.validator?"string"==typeof k.validator?RegExp(k.validator):new function(){this.test=
k.validator}:/./,cardinality:k.cardinality,optionality:f,newBlockMarker:p,offset:0,casing:k.casing,def:k.definitionSymbol||a})}else l.push({fn:null,cardinality:0,optionality:f,newBlockMarker:p,offset:0,casing:null,def:a}),h=!1;p=!1;return l}f=!1}else f=!0;p=!0}})}function k(a){for(var d=a.length,f=0;f<d&&a.charAt(f)!=e.optionalmarker.start;f++);var h=[a.substring(0,f)];f<d&&h.push(a.substring(f+1,d));return h}function f(l,t,x){for(var m=0,y=0,s=t.length,r=0;r<s&&!(t.charAt(r)==e.optionalmarker.start&&
m++,t.charAt(r)==e.optionalmarker.end&&y++,0<m&&m==y);r++);m=[t.substring(0,r)];r<s&&m.push(t.substring(r+1,s));r=k(m[0]);1<r.length?(t=l+r[0]+(e.optionalmarker.start+r[1]+e.optionalmarker.end)+(1<m.length?m[1]:""),-1==d.inArray(t,p)&&""!=t&&(p.push(t),s=h(t),u.push({mask:t,_buffer:s.mask,buffer:s.mask.slice(),tests:a(t),lastValidPosition:-1,greedy:s.greedy,repeat:s.repeat,metadata:x})),t=l+r[0]+(1<m.length?m[1]:""),-1==d.inArray(t,p)&&""!=t&&(p.push(t),s=h(t),u.push({mask:t,_buffer:s.mask,buffer:s.mask.slice(),
tests:a(t),lastValidPosition:-1,greedy:s.greedy,repeat:s.repeat,metadata:x})),1<k(r[1]).length&&f(l+r[0],r[1]+m[1],x),1<m.length&&1<k(m[1]).length&&(f(l+r[0]+(e.optionalmarker.start+r[1]+e.optionalmarker.end),m[1],x),f(l+r[0],m[1],x))):(t=l+m,-1==d.inArray(t,p)&&""!=t&&(p.push(t),s=h(t),u.push({mask:t,_buffer:s.mask,buffer:s.mask.slice(),tests:a(t),lastValidPosition:-1,greedy:s.greedy,repeat:s.repeat,metadata:x})))}var u=[],p=[];d.isFunction(e.mask)&&(e.mask=e.mask.call(this,e));d.isArray(e.mask)?
d.each(e.mask,function(a,d){void 0!=d.mask?f("",d.mask.toString(),d):f("",d.toString())}):f("",e.mask.toString());return e.greedy?u:u.sort(function(a,d){return a.mask.length-d.mask.length})},ea="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),fa=null!==navigator.userAgent.match(/iphone/i),Y=null!==navigator.userAgent.match(/android.*safari.*/i),ga=null!==navigator.userAgent.match(/android.*chrome.*/i),ha=null!==
navigator.userAgent.match(/android.*firefox.*/i),S=R("paste")?"paste":R("input")?"input":"propertychange",x=function(e,h,a,k){function f(){return e[h]}function u(){return f().tests}function p(){return f()._buffer}function l(){return f().buffer}function t(n,b,c){function g(n,b,c,g){for(var d=y(n),f=c?1:0,A="",z=b.buffer,e=b.tests[d].cardinality;e>f;e--)A+=G(z,d-(e-1));c&&(A+=c);return null!=b.tests[d].fn?b.tests[d].fn.test(A,z,n,g,a):c==G(b._buffer.slice(),n,!0)||c==a.skipOptionalPartCharacter?{refresh:!0,
c:G(b._buffer.slice(),n,!0),pos:n}:!1}if(c=!0===c){var z=g(n,f(),b,c);!0===z&&(z={pos:n});return z}var A=[],z=!1,L=h,p=l().slice(),k=f().lastValidPosition;H(n);var t=[];d.each(e,function(a,d){if("object"==typeof d){h=a;var e=n,v=f().lastValidPosition,q;if(v==k){if(1<e-k)for(v=-1==v?0:v;v<e&&(q=g(v,f(),p[v],!0),!1!==q);v++)I(l(),v,p[v],!0),!0===q&&(q={pos:v}),q=q.pos||v,f().lastValidPosition<q&&(f().lastValidPosition=q);if(!m(e)&&!g(e,f(),b,c)){v=r(e)-e;for(q=0;q<v&&!1===g(++e,f(),b,c);q++);t.push(h)}}(f().lastValidPosition>=
k||h==L)&&0<=e&&e<s()&&(z=g(e,f(),b,c),!1!==z&&(!0===z&&(z={pos:e}),q=z.pos||e,f().lastValidPosition<q&&(f().lastValidPosition=q)),A.push({activeMasksetIndex:a,result:z}))}});h=L;return function(a,c){var f=!1;d.each(c,function(n,b){if(f=-1==d.inArray(b.activeMasksetIndex,a)&&!1!==b.result)return!1});if(f)c=d.map(c,function(n,b){if(-1==d.inArray(n.activeMasksetIndex,a))return n;e[n.activeMasksetIndex].lastValidPosition=k});else{var A=-1,z=-1,l;d.each(c,function(n,b){-1!=d.inArray(b.activeMasksetIndex,
a)&&!1!==b.result&(-1==A||A>b.result.pos)&&(A=b.result.pos,z=b.activeMasksetIndex)});c=d.map(c,function(c,f){if(-1!=d.inArray(c.activeMasksetIndex,a)){if(c.result.pos==A)return c;if(!1!==c.result){for(var L=n;L<A;L++)if(l=g(L,e[c.activeMasksetIndex],e[z].buffer[L],!0),!1===l){e[c.activeMasksetIndex].lastValidPosition=A-1;break}else I(e[c.activeMasksetIndex].buffer,L,e[z].buffer[L],!0),e[c.activeMasksetIndex].lastValidPosition=L;l=g(A,e[c.activeMasksetIndex],b,!0);!1!==l&&(I(e[c.activeMasksetIndex].buffer,
A,b,!0),e[c.activeMasksetIndex].lastValidPosition=A);return c}}})}return c}(t,A)}function x(){var a=h,b={activeMasksetIndex:0,lastValidPosition:-1,next:-1};d.each(e,function(a,n){"object"==typeof n&&(h=a,f().lastValidPosition>b.lastValidPosition?(b.activeMasksetIndex=a,b.lastValidPosition=f().lastValidPosition,b.next=r(f().lastValidPosition)):f().lastValidPosition==b.lastValidPosition&&(-1==b.next||b.next>r(f().lastValidPosition))&&(b.activeMasksetIndex=a,b.lastValidPosition=f().lastValidPosition,
b.next=r(f().lastValidPosition)))});h=-1!=b.lastValidPosition&&e[a].lastValidPosition==b.lastValidPosition?a:b.activeMasksetIndex;a!=h&&(K(l(),r(b.lastValidPosition),s()),f().writeOutBuffer=!0);q.data("_inputmask").activeMasksetIndex=h}function m(a){a=y(a);a=u()[a];return void 0!=a?a.fn:!1}function y(a){return a%u().length}function s(){return a.getMaskLength(p(),f().greedy,f().repeat,l(),a)}function r(a){var b=s();if(a>=b)return b;for(;++a<b&&!m(a););return a}function H(a){if(0>=a)return 0;for(;0<
--a&&!m(a););return a}function I(a,b,c,g){g&&(b=E(a,b));g=u()[y(b)];var d=c;if(void 0!=d&&void 0!=g)switch(g.casing){case "upper":d=c.toUpperCase();break;case "lower":d=c.toLowerCase()}a[b]=d}function G(a,b,c){c&&(b=E(a,b));return a[b]}function E(a,b){for(var c;void 0==a[b]&&a.length<s();)for(c=0;void 0!==p()[c];)a.push(p()[c++]);return b}function C(a,b,c){a._valueSet(b.join(""));void 0!=c&&w(a,c)}function K(a,b,c,g){for(var d=s();b<c&&b<d;b++)!0===g?m(b)||I(a,b,""):I(a,b,G(p().slice(),b,!0))}function D(a,
b){var c=y(b);I(a,b,G(p(),c))}function O(n){return a.placeholder.charAt(n%a.placeholder.length)}function J(a,b,c,g,z){g=void 0!=g?g.slice():T(a._valueGet()).split("");d.each(e,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1,b.p=-1)});!0!==c&&(h=0);b&&a._valueSet("");s();d.each(g,function(g,e){if(!0===z){var l=f().p,l=-1==l?l:H(l),h=-1==l?g:r(l);-1==d.inArray(e,p().slice(l+1,h))&&U.call(a,void 0,!0,e.charCodeAt(0),b,c,g)}else U.call(a,void 0,!0,e.charCodeAt(0),
b,c,g),c=c||0<g&&g>f().p});!0===c&&-1!=f().p&&(f().lastValidPosition=H(f().p))}function R(a){return d.inputmask.escapeRegex.call(this,a)}function T(a){return a.replace(RegExp("("+R(p().join(""))+")*$"),"")}function V(a){var b=l(),c=b.slice(),g,d;for(d=c.length-1;0<=d;d--)if(g=y(d),u()[g].optionality)if(m(d)&&t(d,b[d],!0))break;else c.pop();else break;C(a,c)}function ia(n,b){if(!u()||!0!==b&&n.hasClass("hasDatepicker"))return n[0]._valueGet();var c=d.map(l(),function(a,b){return m(b)&&t(b,a,!0)?a:
null}),c=(B?c.reverse():c).join("");return void 0!=a.onUnMask?a.onUnMask.call(this,l().join(""),c):c}function M(d){!B||"number"!=typeof d||a.greedy&&""==a.placeholder||(d=l().length-d);return d}function w(n,b,c){var g=n.jquery&&0<n.length?n[0]:n;if("number"==typeof b)b=M(b),c=M(c),d(g).is(":visible")&&(c="number"==typeof c?c:b,g.scrollLeft=g.scrollWidth,!1==a.insertMode&&b==c&&c++,g.setSelectionRange?(g.selectionStart=b,g.selectionEnd=Y?b:c):g.createTextRange&&(n=g.createTextRange(),n.collapse(!0),
n.moveEnd("character",c),n.moveStart("character",b),n.select()));else{if(!d(n).is(":visible"))return{begin:0,end:0};g.setSelectionRange?(b=g.selectionStart,c=g.selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),b=0-n.duplicate().moveStart("character",-1E5),c=b+n.text.length);b=M(b);c=M(c);return{begin:b,end:c}}}function P(n){if("*"!=a.repeat){var b=!1,c=0,g=h;d.each(e,function(a,d){if("object"==typeof d){h=a;var g=H(s());if(d.lastValidPosition>=c&&
d.lastValidPosition==g){for(var f=!0,e=0;e<=g;e++){var l=m(e),k=y(e);if(l&&(void 0==n[e]||n[e]==O(e))||!l&&n[e]!=p()[k]){f=!1;break}}if(b=b||f)return!1}c=d.lastValidPosition}});h=g;return b}}function ja(a){a=d._data(a).events;d.each(a,function(a,c){d.each(c,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var c=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return c.apply(this,arguments)}}})})}function ka(a){function b(a){if(void 0==d.valHooks[a]||
!0!=d.valHooks[a].inputmaskpatch){var b=d.valHooks[a]&&d.valHooks[a].get?d.valHooks[a].get:function(a){return a.value},c=d.valHooks[a]&&d.valHooks[a].set?d.valHooks[a].set:function(a,b){a.value=b;return a};d.valHooks[a]={get:function(a){var c=d(a);if(c.data("_inputmask")){if(c.data("_inputmask").opts.autoUnmask)return c.inputmask("unmaskedvalue");a=b(a);c=c.data("_inputmask");return a!=c.masksets[c.activeMasksetIndex]._buffer.join("")?a:""}return b(a)},set:function(a,b){var g=d(a),f=c(a,b);g.data("_inputmask")&&
g.triggerHandler("setvalue.inputmask");return f},inputmaskpatch:!0}}}var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(a,"value"));if(c&&c.get){if(!a._valueGet){var g=c.get,f=c.set;a._valueGet=function(){return B?g.call(this).split("").reverse().join(""):g.call(this)};a._valueSet=function(a){f.call(this,B?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=d(this),b=d(this).data("_inputmask"),c=b.masksets,f=b.activeMasksetIndex;return b&&
b.opts.autoUnmask?a.inputmask("unmaskedvalue"):g.call(this)!=c[f]._buffer.join("")?g.call(this):""},set:function(a){f.call(this,a);d(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&a.__lookupGetter__("value")?a._valueGet||(g=a.__lookupGetter__("value"),f=a.__lookupSetter__("value"),a._valueGet=function(){return B?g.call(this).split("").reverse().join(""):g.call(this)},a._valueSet=function(a){f.call(this,B?a.split("").reverse().join(""):a)},a.__defineGetter__("value",
function(){var a=d(this),b=d(this).data("_inputmask"),c=b.masksets,f=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):g.call(this)!=c[f]._buffer.join("")?g.call(this):""}),a.__defineSetter__("value",function(a){f.call(this,a);d(this).triggerHandler("setvalue.inputmask")})):(a._valueGet||(a._valueGet=function(){return B?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=B?a.split("").reverse().join(""):a}),b(a.type))}function Z(a,b,c,
d){var e=l();if(!1!==d)for(;!m(a)&&0<=a-1;)a--;for(d=a;d<b&&d<s();d++)if(m(d)){D(e,d);var h=r(d),k=G(e,h);if(k!=O(h))if(h<s()&&!1!==t(d,k,!0)&&u()[y(d)].def==u()[y(h)].def)I(e,d,k,!0);else if(m(d))break}else D(e,d);void 0!=c&&I(e,H(b),c);if(!1==f().greedy){b=T(e.join("")).split("");e.length=b.length;d=0;for(c=e.length;d<c;d++)e[d]=b[d];0==e.length&&(f().buffer=p().slice())}return a}function $(a,b,c){var d=l();if(G(d,a,!0)!=O(a))for(var e=H(b);e>a&&0<=e;e--)if(m(e)){var h=H(e),k=G(d,h);k!=O(h)&&!1!==
t(h,k,!0)&&u()[y(e)].def==u()[y(h)].def&&(I(d,e,k,!0),D(d,h))}else D(d,e);void 0!=c&&G(d,a)==O(a)&&I(d,a,c);a=d.length;if(!1==f().greedy){c=T(d.join("")).split("");d.length=c.length;e=0;for(h=d.length;e<h;e++)d[e]=c[e];0==d.length&&(f().buffer=p().slice())}return b-(a-d.length)}function aa(d,b,c){if(a.numericInput||B){switch(b){case a.keyCode.BACKSPACE:b=a.keyCode.DELETE;break;case a.keyCode.DELETE:b=a.keyCode.BACKSPACE}if(B){var g=c.end;c.end=c.begin;c.begin=g}}g=!0;c.begin==c.end?(g=b==a.keyCode.BACKSPACE?
c.begin-1:c.begin,a.isNumeric&&""!=a.radixPoint&&l()[g]==a.radixPoint&&(c.begin=l().length-1==g?c.begin:b==a.keyCode.BACKSPACE?g:r(g),c.end=c.begin),g=!1,b==a.keyCode.BACKSPACE?c.begin--:b==a.keyCode.DELETE&&c.end++):1!=c.end-c.begin||a.insertMode||(g=!1,b==a.keyCode.BACKSPACE&&c.begin--);K(l(),c.begin,c.end);var h=s();if(!1==a.greedy)Z(c.begin,h,void 0,!B&&b==a.keyCode.BACKSPACE&&!g);else{for(var k=c.begin,p=c.begin;p<c.end;p++)if(m(p)||!g)k=Z(c.begin,h,void 0,!B&&b==a.keyCode.BACKSPACE&&!g);g||
(c.begin=k)}b=r(-1);K(l(),c.begin,c.end,!0);J(d,!1,void 0==e[1]||b>=c.end,l());f().lastValidPosition<b?(f().lastValidPosition=-1,f().p=b):f().p=c.begin}function ba(e){W=!1;var b=this,c=d(b),g=e.keyCode,h=w(b);g==a.keyCode.BACKSPACE||g==a.keyCode.DELETE||fa&&127==g||e.ctrlKey&&88==g?(e.preventDefault(),88==g&&(N=l().join("")),aa(b,g,h),x(),C(b,l(),f().p),b._valueGet()==p().join("")&&c.trigger("cleared"),a.showTooltip&&c.prop("title",f().mask)):g==a.keyCode.END||g==a.keyCode.PAGE_DOWN?setTimeout(function(){var d=
r(f().lastValidPosition);a.insertMode||d!=s()||e.shiftKey||d--;w(b,e.shiftKey?h.begin:d,d)},0):g==a.keyCode.HOME&&!e.shiftKey||g==a.keyCode.PAGE_UP?w(b,0,e.shiftKey?h.begin:0):g==a.keyCode.ESCAPE||90==g&&e.ctrlKey?(J(b,!0,!1,N.split("")),c.click()):g!=a.keyCode.INSERT||e.shiftKey||e.ctrlKey?!1!=a.insertMode||e.shiftKey||(g==a.keyCode.RIGHT?setTimeout(function(){var a=w(b);w(b,a.begin)},0):g==a.keyCode.LEFT&&setTimeout(function(){var a=w(b);w(b,a.begin-1)},0)):(a.insertMode=!a.insertMode,w(b,a.insertMode||
h.begin!=s()?h.begin:h.begin-1));c=w(b);!0===a.onKeyDown.call(this,e,l(),a)&&w(b,c.begin,c.end);ca=-1!=d.inArray(g,a.ignorables)}function U(n,b,c,g,k,p){if(void 0==c&&W)return!1;W=!0;var q=d(this);n=n||window.event;c=b?c:n.which||n.charCode||n.keyCode;if(!(!0===b||n.ctrlKey&&n.altKey)&&(n.ctrlKey||n.metaKey||ca))return!0;if(c){!0!==b&&46==c&&!1==n.shiftKey&&","==a.radixPoint&&(c=44);var m,u,y=String.fromCharCode(c);b?(c=k?p:f().lastValidPosition+1,m={begin:c,end:c}):m=w(this);p=B?1<m.begin-m.end||
1==m.begin-m.end&&a.insertMode:1<m.end-m.begin||1==m.end-m.begin&&a.insertMode;var E=h;p&&(d.each(e,function(a,b){"object"==typeof b&&(h=a,f().undoBuffer=l().join(""))}),h=E,aa(this,a.keyCode.DELETE,m),a.insertMode||d.each(e,function(a,b){"object"==typeof b&&(h=a,$(m.begin,s()),f().lastValidPosition=r(f().lastValidPosition))}),h=E);var D=l().join("").indexOf(a.radixPoint);a.isNumeric&&!0!==b&&-1!=D&&(a.greedy&&m.begin<=D?(m.begin=H(m.begin),m.end=m.begin):y==a.radixPoint&&(m.begin=D,m.end=m.begin));
var F=m.begin;c=t(F,y,k);!0===k&&(c=[{activeMasksetIndex:h,result:c}]);var v=-1;d.each(c,function(b,d){h=d.activeMasksetIndex;f().writeOutBuffer=!0;var c=d.result;if(!1!==c){var e=!1,g=l();!0!==c&&(e=c.refresh,F=void 0!=c.pos?c.pos:F,y=void 0!=c.c?c.c:y);if(!0!==e){if(!0==a.insertMode){c=s();for(g=g.slice();G(g,c,!0)!=O(c)&&c>=F;)c=0==c?-1:H(c);c>=F?($(F,s(),y),g=f().lastValidPosition,c=r(g),c!=s()&&g>=F&&G(l().slice(),c,!0)!=O(c)&&(f().lastValidPosition=c)):f().writeOutBuffer=!1}else I(g,F,y,!0);
if(-1==v||v>r(F))v=r(F)}else!k&&(g=F<s()?F+1:F,-1==v||v>g)&&(v=g);v>f().p&&(f().p=v)}});!0!==k&&(h=E,x());if(!1!==g&&(d.each(c,function(a,b){if(b.activeMasksetIndex==h)return u=b,!1}),void 0!=u)){var K=this;setTimeout(function(){a.onKeyValidation.call(K,u.result,a)},0);if(f().writeOutBuffer&&!1!==u.result){var J=l();g=b?void 0:a.numericInput?F>D?H(v):y==a.radixPoint?v-1:H(v-1):v;C(this,J,g);!0!==b&&setTimeout(function(){!0===P(J)&&q.trigger("complete");Q=!0;q.trigger("input")},0)}else p&&(f().buffer=
f().undoBuffer.split(""))}a.showTooltip&&q.prop("title",f().mask);n&&(n.preventDefault?n.preventDefault():n.returnValue=!1)}}function la(e){var b=d(this),c=e.keyCode,f=l();a.onKeyUp.call(this,e,f,a);c==a.keyCode.TAB&&a.showMaskOnFocus&&(b.hasClass("focus.inputmask")&&0==this._valueGet().length?(f=p().slice(),C(this,f),w(this,0),N=l().join("")):(C(this,f),f.join("")==p().join("")&&-1!=d.inArray(a.radixPoint,f)?(w(this,M(0)),b.click()):w(this,M(0),M(s()))))}function X(e){if(!0===Q&&"input"==e.type)return Q=
!1,!0;var b=this,c=d(b);if("propertychange"==e.type&&b._valueGet().length<=s())return!0;setTimeout(function(){var d=void 0!=a.onBeforePaste?a.onBeforePaste.call(this,b._valueGet()):b._valueGet();J(b,!1,!1,d.split(""),!0);C(b,l());!0===P(l())&&c.trigger("complete");c.click()},0)}function da(e){if(!0===Q)return Q=!1,!0;var b=this,c=d(b),f=w(b),h=b._valueGet();1!=l().length-h.length||h.charAt(f.begin)==l()[f.begin]||h.charAt(f.begin+1)==l()[f.begin]||m(f.begin)?(J(b,!1,!1),C(b,l()),setTimeout(function(){w(b,
r(f.begin-1));!0===P(l())&&c.trigger("complete")},0)):(e.keyCode=a.keyCode.BACKSPACE,ba.call(b,e))}function ma(k){q=d(k);if(q.is(":input")){q.data("_inputmask",{masksets:e,activeMasksetIndex:h,opts:a,isRTL:!1});a.showTooltip&&q.prop("title",f().mask);f().greedy=f().greedy?f().greedy:0==f().repeat;if(null!=q.attr("maxLength")){var b=q.prop("maxLength");-1<b&&d.each(e,function(a,c){"object"==typeof c&&"*"==c.repeat&&(c.repeat=b)});s()>=b&&-1<b&&(b<p().length&&(p().length=b),!1==f().greedy&&(f().repeat=
Math.round(b/p().length)),q.prop("maxLength",2*s()))}ka(k);a.numericInput&&(a.isNumeric=a.numericInput);("rtl"==k.dir||a.numericInput&&a.rightAlignNumerics||a.isNumeric&&a.rightAlignNumerics)&&q.css("text-align","right");if("rtl"==k.dir||a.numericInput){k.dir="ltr";q.removeAttr("dir");var c=q.data("_inputmask");c.isRTL=!0;q.data("_inputmask",c);B=!0}q.unbind(".inputmask");q.removeClass("focus.inputmask");q.closest("form").bind("submit",function(){N!=l().join("")&&q.change()}).bind("reset",function(){setTimeout(function(){q.trigger("setvalue")},
0)});q.bind("mouseenter.inputmask",function(){!d(this).hasClass("focus.inputmask")&&a.showMaskOnHover&&this._valueGet()!=l().join("")&&C(this,l())}).bind("blur.inputmask",function(){var b=d(this),c=this._valueGet(),f=l();b.removeClass("focus.inputmask");N!=l().join("")&&b.change();a.clearMaskOnLostFocus&&""!=c&&(c==p().join("")?this._valueSet(""):V(this));!1===P(f)&&(b.trigger("incomplete"),a.clearIncomplete&&(d.each(e,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=
-1)}),h=0,a.clearMaskOnLostFocus?this._valueSet(""):(f=p().slice(),C(this,f))))}).bind("focus.inputmask",function(){var b=d(this),c=this._valueGet();a.showMaskOnFocus&&!b.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&""==c)&&this._valueGet()!=l().join("")&&C(this,l(),r(f().lastValidPosition));b.addClass("focus.inputmask");N=l().join("")}).bind("mouseleave.inputmask",function(){var b=d(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||this._valueGet()==b.attr("placeholder")||
(this._valueGet()==p().join("")||""==this._valueGet()?this._valueSet(""):V(this)))}).bind("click.inputmask",function(){var b=this;setTimeout(function(){var c=w(b),e=l();if(c.begin==c.end){var c=B?M(c.begin):c.begin,g=f().lastValidPosition,e=a.isNumeric?!1===a.skipRadixDance&&""!=a.radixPoint&&-1!=d.inArray(a.radixPoint,e)?a.numericInput?r(d.inArray(a.radixPoint,e)):d.inArray(a.radixPoint,e):r(g):r(g);c<e?m(c)?w(b,c):w(b,r(c)):w(b,e)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){w(a,
0,r(f().lastValidPosition))},0)}).bind(S+".inputmask dragdrop.inputmask drop.inputmask",X).bind("setvalue.inputmask",function(){J(this,!0);N=l().join("");this._valueGet()==p().join("")&&this._valueSet("")}).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared);q.bind("keydown.inputmask",ba).bind("keypress.inputmask",U).bind("keyup.inputmask",la);Y&&(ga?q.bind("input.inputmask",da):"input"!=S&&q.bind("input.inputmask",X));ha&&("input"==
S&&q.unbind(S+".inputmask"),q.bind("input.inputmask",da));ea&&q.bind("input.inputmask",X);c=void 0!=a.onBeforeMask?a.onBeforeMask.call(this,k._valueGet()):k._valueGet();J(k,!0,!1,c.split(""));N=l().join("");var g;try{g=document.activeElement}catch(t){}g===k?(q.addClass("focus.inputmask"),w(k,r(f().lastValidPosition))):a.clearMaskOnLostFocus?l().join("")==p().join("")?k._valueSet(""):V(k):C(k,l());ja(k)}}var B=!1,N=l().join(""),q,W=!1,Q=!1,ca=!1;if(void 0!=k)switch(k.action){case "isComplete":return P(k.buffer);
case "unmaskedvalue":return B=k.$input.data("_inputmask").isRTL,ia(k.$input,k.skipDatepickerCheck);case "mask":ma(k.el);break;case "format":return q=d({}),q.data("_inputmask",{masksets:e,activeMasksetIndex:h,opts:a,isRTL:a.numericInput}),a.numericInput&&(a.isNumeric=a.numericInput,B=!0),J(q,!1,!1,k.value.split(""),!0),l().join("");case "isValid":return q=d({}),q.data("_inputmask",{masksets:e,activeMasksetIndex:h,opts:a,isRTL:a.numericInput}),a.numericInput&&(a.isNumeric=a.numericInput,B=!0),J(q,!1,
!0,k.value.split("")),P(l())}};d.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:d.noop,onincomplete:d.noop,oncleared:d.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:d.noop,onKeyDown:d.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:d.noop,
skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,
HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(d,h,a,k,f){f=d.length;h||("*"==a?f=k.length+1:1<a&&(f+=d.length*(a-1)));return f}},escapeRegex:function(d){return d.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)",
"gim"),"\\$1")},format:function(e,h){var a=d.extend(!0,{},d.inputmask.defaults,h);E(a.alias,h,a);return x(D(a),0,a,{action:"format",value:e})},isValid:function(e,h){var a=d.extend(!0,{},d.inputmask.defaults,h);E(a.alias,h,a);return x(D(a),0,a,{action:"isValid",value:e})}};d.fn.inputmask=function(e,h){var a=d.extend(!0,{},d.inputmask.defaults,h),k,f=0;if("string"===typeof e)switch(e){case "mask":return E(a.alias,h,a),k=D(a),0==k.length?this:this.each(function(){x(d.extend(!0,{},k),0,a,{action:"mask",
el:this})});case "unmaskedvalue":var u=d(this);return u.data("_inputmask")?(k=u.data("_inputmask").masksets,f=u.data("_inputmask").activeMasksetIndex,a=u.data("_inputmask").opts,x(k,f,a,{action:"unmaskedvalue",$input:u})):u.val();case "remove":return this.each(function(){var e=d(this);if(e.data("_inputmask")){k=e.data("_inputmask").masksets;f=e.data("_inputmask").activeMasksetIndex;a=e.data("_inputmask").opts;this._valueSet(x(k,f,a,{action:"unmaskedvalue",$input:e,skipDatepickerCheck:!0}));e.removeData("_inputmask");
e.unbind(".inputmask");e.removeClass("focus.inputmask");var h;Object.getOwnPropertyDescriptor&&(h=Object.getOwnPropertyDescriptor(this,"value"));h&&h.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(t){this._valueSet=this._valueGet=
void 0}}});case "getemptymask":return this.data("_inputmask")?(k=this.data("_inputmask").masksets,f=this.data("_inputmask").activeMasksetIndex,k[f]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return k=this.data("_inputmask").masksets,f=this.data("_inputmask").activeMasksetIndex,a=this.data("_inputmask").opts,x(k,f,a,{action:"isComplete",buffer:this[0]._valueGet().split("")});case "getmetadata":if(this.data("_inputmask"))return k=
this.data("_inputmask").masksets,f=this.data("_inputmask").activeMasksetIndex,k[f].metadata;break;default:return E(e,h,a)||(a.mask=e),k=D(a),0==k.length?this:this.each(function(){x(d.extend(!0,{},k),f,a,{action:"mask",el:this})})}else{if("object"==typeof e)return a=d.extend(!0,{},d.inputmask.defaults,e),E(a.alias,e,a),k=D(a),0==k.length?this:this.each(function(){x(d.extend(!0,{},k),f,a,{action:"mask",el:this})});if(void 0==e)return this.each(function(){var e=d(this).attr("data-inputmask");if(e&&""!=
e)try{var e=e.replace(RegExp("'","g"),'"'),f=d.parseJSON("{"+e+"}");d.extend(!0,f,h);a=d.extend(!0,{},d.inputmask.defaults,f);E(a.alias,f,a);a.alias=void 0;d(this).inputmask(a)}catch(k){}})}}}})(jQuery);

!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=46)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(30))},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(2),o=r(7),c=r(13);t.exports=e?function(t,n,r){return o.f(t,n,c(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(19),o=r(21);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(2),o=r(15),c=r(8),i=r(14),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(c(t),n=i(n,!0),c(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(0),o=r(5);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(0),o=r(9),c=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=c},function(t,n){t.exports={}},function(t,n,r){var e=r(2),o=r(31),c=r(13),i=r(6),u=r(14),a=r(1),f=r(15),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=i(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return c(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(2),o=r(3),c=r(22);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(10),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(3),o=r(20),c="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(0),o=r(4),c=e.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},function(t,n,r){var e=r(24),o=r(25),c=e("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},function(t,n,r){var e=r(35),o=r(10);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.1",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(38),o=r(0),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?c(e[t])||c(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(1),o=r(6),c=r(40).indexOf,i=r(11);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(i,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~c(f,r)||f.push(r));return f}},function(t,n,r){var e=r(17),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(0),o=r(12).f,c=r(5),i=r(32),u=r(9),a=r(36),f=r(43);t.exports=function(t,n){var r,s,l,p,v,d=t.target,y=t.global,b=t.stat;if(r=y?e:b?e[d]||u(d,{}):(e[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(y?s:d+(b?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&c(p,"sham",!0),i(r,s,p,t)}}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!e.call({1:2},1);n.f=c?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(0),o=r(5),c=r(1),i=r(9),u=r(16),a=r(33),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof n||c(r,"name")||o(r,"name",n),(a=s(r)).source||(a.source=l.join("string"==typeof n?n:""))),t!==e?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=r:o(t,n,r)):p?t[n]=r:i(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,r){var e,o,c,i=r(34),u=r(0),a=r(4),f=r(5),s=r(1),l=r(10),p=r(23),v=r(11),d=u.WeakMap;if(i){var y=l.state||(l.state=new d),b=y.get,h=y.has,m=y.set;e=function(t,n){return n.facade=t,m.call(y,t,n),n},o=function(t){return b.call(y,t)||{}},c=function(t){return h.call(y,t)}}else{var g=p("state");v[g]=!0,e=function(t,n){return n.facade=t,f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},c=function(t){return s(t,g)}}t.exports={set:e,get:o,has:c,enforce:function(t){return c(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(0),o=r(16),c=e.WeakMap;t.exports="function"==typeof c&&/native code/.test(o(c))},function(t,n){t.exports=!1},function(t,n,r){var e=r(1),o=r(37),c=r(12),i=r(7);t.exports=function(t,n){for(var r=o(n),u=i.f,a=c.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){var e=r(26),o=r(39),c=r(42),i=r(8);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(i(t)),r=c.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(27),o=r(18).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(6),o=r(28),c=r(41),i=function(t){return function(n,r,i){var u,a=e(n),f=o(a.length),s=c(i,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,n,r){var e=r(17),o=Math.max,c=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):c(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(3),o=/#|\.prototype\./,c=function(t,n){var r=u[i(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},i=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=c.data={},a=c.NATIVE="N",f=c.POLYFILL="P";t.exports=c},function(t,n,r){var e=r(0),o=r(24),c=r(1),i=r(25),u=r(45),a=r(54),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||i;t.exports=function(t){return c(f,t)||(u&&c(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,r){var e=r(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){"use strict";r.r(n);r(47);var e,o,c=wp.i18n.__;e=window.jQuery,null!==(o=document.getElementById("pb-btn--reset"))&&o.addEventListener("click",(function(t){t.preventDefault(),window.confirm(c("Do you really want to reset it?","useful-blocks"))&&function(t){var n=window.pbVars;if(void 0!==n){var r=n.ajaxUrl;if(void 0!==r){var o=n.ajaxNonce;void 0!==o&&e.ajax({type:"POST",url:r,data:{action:t,nonce:o}}).done((function(t){alert(t),location.reload()})).fail((function(){alert(c("Failed.","useful-blocks"))}))}}}("pb_reset_settings")})),e((function(){e(".pb-colorpicker").wpColorPicker({change:function(t,n){var r=e(this);setTimeout((function(){r.trigger("change")}),10)},clear:function(){var t=e(this).prev().find("input");setTimeout((function(){t.trigger("change")}),10)}})})),function(){window.scrollTo(0,0);var t=document.querySelectorAll(".nav-tab"),n=document.querySelectorAll(".tab-contents"),r=document.querySelector('[name="_wp_http_referer"]'),e=location.hash;if(e){var o=document.querySelector(e),c=document.querySelector('[href="'+e+'"]'),i=document.querySelector(".nav-tab.act_"),u=document.querySelector(".tab-contents.act_");o&&c&&i&&u&&(i.classList.remove("act_"),u.classList.remove("act_"),o.classList.add("act_"),c.classList.add("act_")),r.value="/wp-admin/admin.php?page=useful_blocks"+e}for(var a=function(e){t[e].addEventListener("click",(function(o){o.preventDefault();var c=o.target.getAttribute("href");history.replaceState(null,null,c),t[e].classList.contains("act_")||(document.querySelector(".nav-tab.act_").classList.remove("act_"),t[e].classList.add("act_"),document.querySelector(".tab-contents.act_").classList.remove("act_"),n[e].classList.add("act_")),r.value="/wp-admin/admin.php?page=useful_blocks"+c}))},f=0;f<t.length;f++)a(f)}(),e(".-pb-colset").find(".pb-colorpicker").change((function(){var t=e(this),n=t.val(),r=t.attr("data-key");document.documentElement.style.setProperty("--pb_"+r,n)}))},function(t,n,r){"use strict";var e=r(29),o=r(48).find,c=r(55),i=r(60),u=!0,a=i("find");"find"in[]&&Array(1).find((function(){u=!1})),e({target:"Array",proto:!0,forced:u||!a},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("find")},function(t,n,r){var e=r(49),o=r(19),c=r(51),i=r(28),u=r(52),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(d,y,b,h){for(var m,g,x=c(d),w=o(x),S=e(y,b,3),O=i(w.length),j=0,_=h||u,P=n?_(d,O):r||p?_(d,0):void 0;O>j;j++)if((v||j in w)&&(g=S(m=w[j],j,x),t))if(n)P[j]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return j;case 2:a.call(P,m)}else switch(t){case 4:return!1;case 7:a.call(P,m)}return l?-1:f||s?s:P}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},function(t,n,r){var e=r(50);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(21);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(4),o=r(53),c=r(44)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[c])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(20);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(45);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(44),o=r(56),c=r(7),i=e("unscopables"),u=Array.prototype;null==u[i]&&c.f(u,i,{configurable:!0,value:o(null)}),t.exports=function(t){u[i][t]=!0}},function(t,n,r){var e,o=r(8),c=r(57),i=r(18),u=r(11),a=r(59),f=r(22),s=r(23),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},d=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;d=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=i.length;r--;)delete d.prototype[i[r]];return d()};u[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=d(),void 0===n?r:c(r,n)}},function(t,n,r){var e=r(2),o=r(7),c=r(8),i=r(58);t.exports=e?Object.defineProperties:function(t,n){c(t);for(var r,e=i(n),u=e.length,a=0;u>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(27),o=r(18);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(26);t.exports=e("document","documentElement")},function(t,n,r){var e=r(2),o=r(3),c=r(1),i=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(c(u,t))return u[t];n||(n={});var r=[][t],f=!!c(n,"ACCESSORS")&&n.ACCESSORS,s=c(n,0)?n[0]:a,l=c(n,1)?n[1]:void 0;return u[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?i(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,l)}))}}]);
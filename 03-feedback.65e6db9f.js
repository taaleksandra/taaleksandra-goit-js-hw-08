function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,s=u||f||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return s.Date.now()};function v(e,t,n){var o,a,i,r,l,u,f=0,s=!1,c=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=a;return o=a=void 0,f=t,r=e.apply(i,n)}function w(e){return f=e,l=setTimeout(S,t),s?y(e):r}function h(e){var n=e-u;return void 0===u||n>=t||n<0||c&&e-f>=i}function S(){var e=g();if(h(e))return j(e);l=setTimeout(S,function(e){var n=t-(e-u);return c?d(n,i-(e-f)):n}(e))}function j(e){return l=void 0,v&&o?y(e):(o=a=void 0,r)}function O(){var e=g(),n=h(e);if(o=arguments,a=this,u=e,n){if(void 0===l)return w(u);if(c)return l=setTimeout(S,t),y(u)}return void 0===l&&(l=setTimeout(S,t)),r}return t=b(t)||0,p(n)&&(s=!!n.leading,i=(c="maxWait"in n)?m(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=u=a=l=void 0},O.flush=function(){return void 0===l?r:j(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||r.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),v(e,t,{leading:o,maxWait:t,trailing:a})};const y=document.querySelector(".feedback-form");let w={email:"",message:""};y.addEventListener("input",e(t)((()=>{w={email:y.elements.email.value,message:y.elements.message.value},console.log(w),localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500)),y.addEventListener("submit",(e=>{if(e.preventDefault(),""===y.elements.email.value||""===y.elements.message.value){alert("Proszę uzupełnić wszystkie pola formularza.")}else try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log("Submited form data: ",e),localStorage.removeItem("feedback-form-state"),y.elements.email.value="",y.elements.message.value=""}catch(e){console.log(e.name),console.log(e.message)}})),window.addEventListener("load",(()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===e)return;y.elements.email.value=e.email,y.elements.message.value=e.message}catch(e){console.log(e.name),console.log(e.message)}}));
//# sourceMappingURL=03-feedback.65e6db9f.js.map

function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("eWCmQ");const u=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),d=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');function s(e,n){return new Promise(((t,o)=>{const i=Math.random()>.3;setTimeout((()=>{i&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(let n=1,t=+l.value;n<=+a.value;n+=1,t+=+d.value)s(n,t).then((({position:n,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.d5a25c54.js.map
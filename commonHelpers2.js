import"./assets/modulepreload-polyfill-ec808ebb.js";import{i}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form"),c=document.querySelector('input[name="delay"]'),n=document.querySelector('input[value="fulfilled"]'),u=document.querySelector('input[value="rejected"]');o.addEventListener("submit",r=>{r.preventDefault();const t=c.value;new Promise((e,s)=>{setTimeout(()=>{n.checked===!0?e(t):u.checked===!0&&s(t)},t)}).then(e=>{i.success({title:`✅ Fulfilled promise in ${e}ms`,position:"topRight"}),o.reset()}).catch(e=>{i.error({title:`❌ Rejected promise in ${e}ms`,position:"topRight"}),o.reset()})});
//# sourceMappingURL=commonHelpers2.js.map

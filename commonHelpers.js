import{a as h,S as p,N as b,K as f,M as v,i as E,A as y}from"./assets/vendor-4e15793d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const S=document.querySelector(".menu-button"),d=document.querySelector(".mobile-menu-wrapper"),M=document.querySelector(".mobile-menu-close-btn"),q=document.querySelectorAll(".mobile-menu-link"),k=document.querySelector(".mobile-order-button"),u=document.querySelector(".tablet-and-desktop-menu-navigation-wrapper"),C=document.querySelector(".menu-link");S.addEventListener("click",()=>{d.classList.add("is-open")});M.addEventListener("click",()=>{d.classList.remove("is-open")});q.forEach(e=>{e.addEventListener("click",()=>{d.classList.remove("is-open")})});k.addEventListener("click",()=>{d.classList.remove("is-open")});C.addEventListener("click",e=>{e.preventDefault(),getComputedStyle(u).display==="none"?u.style.display="block":u.style.display="none"});function I(){const s="https://portfolio-js.b.goit.study/api/reviews";return h.get(s).then(o=>o.data).catch(o=>{throw console.error(o),o})}function B(e){const o="https://portfolio-js.b.goit.study/api/requests";return h.post(o,e).then(n=>n.data).catch(n=>{throw console.error(n),n})}const A=document.querySelector(".not-found"),O=document.querySelector(".reviews-list"),x=document.querySelector(".swiper-container");function P(e){E.error({title:"Error",message:e,position:"topRight"})}function D(e){if(e.length===0)m();else{const t=e.map(s=>`<li class="reviews-item swiper-slide">
                <img src="${s.avatar_url}" alt="" width="48" height="48"  class="reviews-avatar"/>
                <div class="reviews-info">
                    <h3 class="reviews-name">${s.author}</h3>
                    <p class="reviews-text">${s.review}</p>
                </div>
              </li>`).join("");O.insertAdjacentHTML("beforeend",t),V()}}function m(){x.style.display="none",A.style.display="block",P("The connection with the server has problem, so reviews are not rendered")}function T(){I().then(e=>{e&&e.length>0?D(e):m()}).catch(e=>{console.error(e),m()})}function V(){new p(".swiper-container",{modules:[b,f,v],slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},speed:800,spaceBetween:16,allowTouchMove:!0,loop:!1,watchOverflow:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews"}})}document.addEventListener("DOMContentLoaded",T);document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("contact-form"),t=document.querySelector("[data-modal]"),s=document.querySelector("[data-modal-close]");e.addEventListener("submit",function(n){n.preventDefault();const i=new FormData(e),c=i.get("email"),L=i.get("comment");B({email:c,comment:L}).then(w=>{t.classList.remove("is-hidden"),e.reset()}).catch(w=>{console.error(w)})}),s.addEventListener("click",function(){o()}),t.addEventListener("click",function(n){n.target===t&&o()}),document.addEventListener("keydown",function(n){n.key==="Escape"&&!t.classList.contains("is-hidden")&&o()});function o(){t.classList.add("is-hidden")}});const r=document.getElementById("email"),a=document.getElementById("comment"),l=document.getElementById("emailValidationMessage"),_=r.style.borderBottomColor;r.addEventListener("input",N);a.addEventListener("input",$);function N(){const e=new RegExp(r.pattern);return r.value===""?(r.style.borderBottomColor=_,l.textContent="",!1):e.test(r.value)?(l.textContent="Success!",l.style.color="#3cbc81",r.style.borderBottomColor="#3cbc81",!0):(l.textContent="Invalid email, try again",l.style.color="#e74a3b",r.style.borderBottomColor="#e74a3b",!1)}function $(){a.value.length>100&&(a.value=a.value.substring(0,100)+"...")}const F=document.querySelectorAll(".btn-about"),R=document.querySelectorAll(".ac");document.addEventListener("DOMContentLoaded",()=>{const e=new y(".accordion-container",{showMultiple:!0,openOnInit:[0]});R.forEach(t=>{const s=t.querySelector(".ac-header"),o=t.querySelector(".ac-panel");s.addEventListener("click",()=>{o.classList.contains("active")?e.close(o):e.open(o)})}),F.forEach(t=>{t.addEventListener("click",s=>{const o=s.currentTarget.querySelector(".icon-about");o.classList.toggle("icon-close"),o.classList.toggle("icon-open")})})});document.addEventListener("DOMContentLoaded",()=>{const e=new p(".swiper-about",{modules:[f,v],cssMode:!0,preventInteractionOnTransition:!0,speed:400,spaceBetween:0,allowTouchMove:!0,loop:!0,slideToClickedSlide:!0,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},slidesPerView:2,width:260,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});document.querySelector(".btn-arrow").addEventListener("click",()=>{e.slideNext(),e.updateSize(),e.updateSlides()})});function j(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function g(){var e=document.querySelectorAll(".benefits-item");e.forEach(function(t){j(t)&&t.classList.add("visible")})}window.addEventListener("scroll",function(){g()});document.addEventListener("DOMContentLoaded",function(){g()});const z=document.querySelector(".covers-section"),H={root:null,rootMargin:"500px",threshold:.5},K=e=>{e.forEach(t=>{t.isIntersecting?G():W()})};function W(){document.querySelectorAll(".covers-slide").forEach(t=>t.classList.remove("animation"))}function G(){document.querySelectorAll(".covers-slide").forEach(t=>t.classList.add("animation"))}const J=new IntersectionObserver(K,H);J.observe(z);new y(".faq-list",{duration:400,showOne:!0,showMultiple:!0,onToggle:function(e){const t=e.target.closest(".qwestions");t&&t.classList.toggle("is-active")}});function Q(){new p(".swiper",{modules:[b,f,v],keyboard:{enabled:!0},mousewheel:{enabled:!0},loop:!1,slidesPerView:1,speed:1e3,navigation:{prevEl:".swiper-prev",nextEl:".swiper-next",disabledClass:"disabled-button"}})}document.addEventListener("DOMContentLoaded",Q);
//# sourceMappingURL=commonHelpers.js.map

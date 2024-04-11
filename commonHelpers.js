import{a as w,S as l,N as c,K as a,M as u,i as h}from"./assets/vendor-ed84fc14.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();function v(){const i="https://portfolio-js.b.goit.study/api/reviews";return w.get(i).then(s=>s.data).catch(s=>{throw console.error(s),s})}const b=document.querySelector(".not-found"),y=document.querySelector(".reviews-list"),g=document.querySelector(".swiper-container");function L(e){h.error({title:"Error",message:e,position:"topRight"})}function E(e){if(e.length===0)d();else{const o=e.map(i=>`<li class="reviews-item swiper-slide">
                <img src="${i.avatar_url}" alt="" width="48" height="48"  class="reviews-avatar"/>
                <div class="reviews-info">
                    <h3 class="reviews-name">${i.author}</h3>
                    <p class="reviews-text">${i.review}</p>
                </div>
              </li>`).join("");y.insertAdjacentHTML("beforeend",o),M()}}function d(){g.style.display="none",b.style.display="block",L("The connection with the server has problem, so reviews are not rendered")}function S(){v().then(e=>{e&&e.length>0?E(e):d()}).catch(e=>{console.error(e),d()})}function M(){new l(".swiper-container",{modules:[c,a,u],slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},speed:800,spaceBetween:16,allowTouchMove:!0,loop:!1,watchOverflow:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}document.addEventListener("DOMContentLoaded",S);const p=document.querySelector(".backdrop"),O=document.querySelector("[data-modal-close]"),q=document.getElementById("submit-btn"),m=document.querySelector("body");function P(){p.classList.remove("is-hidden"),m.classList.add("modal-open")}function k(){p.classList.add("is-hidden"),m.classList.remove("modal-open")}O.addEventListener("click",k);q.addEventListener("click",P);function x(e){var o=e.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function f(){var e=document.querySelectorAll(".benefits-item");e.forEach(function(o){x(o)&&o.classList.add("visible")})}window.addEventListener("scroll",function(){f()});document.addEventListener("DOMContentLoaded",function(){f()});function B(){new l(".swiper",{modules:[c,a,u],keyboard:{enabled:!0},mousewheel:{enabled:!0},loop:!1,slidesPerView:1,speed:400,navigation:{prevEl:".swiper-prev",nextEl:".swiper-next",disabledClass:"disabled-button"}})}document.addEventListener("DOMContentLoaded",B);
//# sourceMappingURL=commonHelpers.js.map

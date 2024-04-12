import{a as d,S as a,N as u,K as m,M as f,i as w}from"./assets/vendor-ed84fc14.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();function v(){const i="https://portfolio-js.b.goit.study/api/reviews";return d.get(i).then(s=>s.data).catch(s=>{throw console.error(s),s})}function y(t){const s="https://portfolio-js.b.goit.study/api/footer";return d.post(s,t).then(n=>n.data).catch(n=>{throw console.error(n),n})}const g=document.querySelector(".not-found"),b=document.querySelector(".reviews-list"),E=document.querySelector(".swiper-container");function L(t){w.error({title:"Error",message:t,position:"topRight"})}function S(t){if(t.length===0)c();else{const e=t.map(i=>`<li class="reviews-item swiper-slide">
                <img src="${i.avatar_url}" alt="" width="48" height="48"  class="reviews-avatar"/>
                <div class="reviews-info">
                    <h3 class="reviews-name">${i.author}</h3>
                    <p class="reviews-text">${i.review}</p>
                </div>
              </li>`).join("");b.insertAdjacentHTML("beforeend",e),I()}}function c(){E.style.display="none",g.style.display="block",L("The connection with the server has problem, so reviews are not rendered")}function M(){v().then(t=>{t&&t.length>0?S(t):c()}).catch(t=>{console.error(t),c()})}function I(){new a(".swiper-container",{modules:[u,m,f],slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},speed:800,spaceBetween:16,allowTouchMove:!0,loop:!1,watchOverflow:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}document.addEventListener("DOMContentLoaded",M);document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("contact-form");document.getElementById("email"),document.getElementById("comment");const e=document.querySelector("[data-modal]"),i=document.querySelector("[data-modal-close]");t.addEventListener("submit",function(n){n.preventDefault();const o=new FormData(t),r=o.get("email"),h=o.get("comment");y({email:r,comment:h}).then(l=>{e.classList.remove("is-hidden"),t.reset()}).catch(l=>{console.error(l)})}),i.addEventListener("click",function(){s()}),e.addEventListener("click",function(n){n.target===e&&s()}),document.addEventListener("keydown",function(n){n.key==="Escape"&&!e.classList.contains("is-hidden")&&s()});function s(){e.classList.add("is-hidden")}});function O(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function p(){var t=document.querySelectorAll(".benefits-item");t.forEach(function(e){O(e)&&e.classList.add("visible")})}window.addEventListener("scroll",function(){p()});document.addEventListener("DOMContentLoaded",function(){p()});const q=document.querySelector(".covers-section"),A={root:null,rootMargin:"270px",threshold:.5},P=t=>{t.forEach(e=>{e.isIntersecting?k():_()})};function _(){document.querySelectorAll(".covers-slide").forEach(e=>e.classList.remove("animation"))}function k(){document.querySelectorAll(".covers-slide").forEach(e=>e.classList.add("animation"))}const x=new IntersectionObserver(P,A);x.observe(q);function B(){new a(".swiper",{modules:[u,m,f],keyboard:{enabled:!0},mousewheel:{enabled:!0},loop:!1,slidesPerView:1,speed:400,navigation:{prevEl:".swiper-prev",nextEl:".swiper-next",disabledClass:"disabled-button"}})}document.addEventListener("DOMContentLoaded",B);
//# sourceMappingURL=commonHelpers.js.map

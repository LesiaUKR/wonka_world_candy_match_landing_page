import{e as a,d,b as u}from"./vendor-af36df9a.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const o=document.location;if(o.pathname.includes("index"))return;const n=document.querySelectorAll(".js-link"),r=[...o.pathname.split("/").slice(0,-1),"index.html"].join("/");n.forEach(e=>e.addEventListener("click",t=>{const i=`${o.origin}${r}${e.hash}`;document.location.replace(i)}))})();const p=()=>{const o=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),s=document.querySelectorAll(".js-close-menu"),r=()=>{const e=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!e),o.classList.toggle("is-open"),u[e?"enableBodyScroll":"disableBodyScroll"](document.body)};n.addEventListener("click",r),s.forEach(e=>{e.addEventListener("click",t=>{r()})}),window.matchMedia("(min-width: 1440px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),a(document.body))}),window.addEventListener("resize",d(e=>{window.innerWidth>=1440&&(o.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),a(document.body))},100))},c=new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1},slidesPerView:1.07,watchOverflow:!0,spaceBetween:16,slidesPerGroup:1,freemode:!0,breakpoints:{1440:{slidesPerView:4.18,spaceBetween:36,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}});function l(){window.innerWidth>=1440?(c.pagination.destroy(),c.pagination.el.style.display="none"):(c.pagination.init(),c.pagination.el.style.display="")}l();window.addEventListener("resize",l);p();
//# sourceMappingURL=main-3c2d3a83.js.map

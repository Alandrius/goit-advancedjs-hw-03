import{a as h,S as p,i as n}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="664652-a597872e1d430aad87b92ac90",g="https://pixabay.com/api/";function y(i){return h.get(g,{params:{key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img
          class="gallery-image"
          src="${o}"
          alt="${e}"
          loading="lazy"
        />
      </a>
      <ul class="info">
        <li class="info-item">
          <h3>Likes</h3>
          <p>${t}</p>
        </li>
        <li class="info-item">
          <h3>Views</h3>
          <p>${s}</p>
        </li>
        <li class="info-item">
          <h3>Comments</h3>
          <p>${f}</p>
        </li>
        <li class="info-item">
          <h3>Downloads</h3>
          <p>${m}</p>
        </li>
      </ul>
    </li>
  `).join("");l.innerHTML=r,L.refresh()}function S(){l.innerHTML=""}function q(){c.classList.add("is-visible")}function w(){c.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}S(),q(),y(r).then(o=>{if(!o.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",maxWidth:432});return}b(o.hits)}).catch(()=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w(),u.reset()})}
//# sourceMappingURL=index.js.map

import{ar as f,ah as y}from"./index-BFZA48TR.js";const L=()=>{const e="DAILY_TIMESTAMP";return chrome.storage.local.get(e).then(r=>{const o=r[e];let a=Date.now();if(o&&!(new Date(a).getDay()>new Date(o).getDay()))return;const s=document.querySelector("#diff-modal");if(s){s.classList.add("show");return}chrome.storage.local.set({[e]:a});const d=new DOMParser,g=document.createDocumentFragment(),t=document.createElement("div");t.classList.add("modal","fade","show"),t.id="diff-modal",g.append(t);const h=document.createElement("div");h.classList.add("modal-dialog","modal-lg","modal-dialog-centered"),t.append(h);const n=document.createElement("div");n.classList.add("modal-content"),h.append(n);const c=document.createElement("header");c.classList.add("modal-header","g-border-bottom"),n.append(c);const i=document.createElement("h4");i.classList.add("modal-title","d-flex","align-items-center"),i.textContent="Onlyfans Downloader",c.append(i);const w=`
      <div class="g-avatar g-icon has-story mr-1">
      <div data-v-78bd6e0d class="g-avatar__img-wrapper">
        <img style="width: 100%;" src="${chrome.runtime.getURL("src/assets/ofol/icon48.png")}"/>
      </div>
      </div>
    `;i.prepend(d.parseFromString(w,"text/html").body.firstElementChild);const v=d.parseFromString(`
    <button data-v-583fb90a type="button" at-attr="close_btn" class="l-sidebar__btn-close m-with-round-hover g-btn m-with-round-hover m-icon m-icon-only m-gray m-sm-size">
      <svg data-v-583fb90a="" class="g-icon" data-icon-name="icon-close" aria-hidden="true">
        <use href="/theme/onlyfans/spa/icons/sprite.svg?rev=202306261027-6fa8a11695#icon-close" xlink:href="/theme/onlyfans/spa/icons/sprite.svg?rev=202306261027-6fa8a11695#icon-close"></use>
      </svg>
    </button>
    `,"text/html").body.firstElementChild;v.addEventListener("click",()=>t.classList.remove("show")),c.append(v);const l=document.createElement("div");n.id="",l.classList.add("modal-body","d-flex","flex-row"),n.append(l),l.append(d.parseFromString(`
      <div class="w-50 px-3">
        <h4 class="text-center">Free Version</h4>
        <ul class="gray-list px-4">
          <p>✔️ ≤ 2 Videos</p>
          <p>✔️ ≤ 10 Photos</p>
        </ul>
      </div>
    `,"text/html").body.firstElementChild),l.append(d.parseFromString(`
      <div class="w-50 px-3">
        <h4 class="text-center">Pro Version</h4>
        <ul class="gray-list px-4">
          <p>✅ Unlimit Videos</p>
          <p>✅ Unlimit Photos</p>
          <p>✅ Download Messages Content</p>
          <p>✅ Support Time Period Download</p>
        </ul>
      </div>
    `,"text/html").body.firstElementChild);const m=document.createElement("footer");m.classList.add("modal-footer","g-border-top","justify-content-around"),n.append(m);const p=document.createElement("button");p.classList.add("g-btn","m-flat","m-btn-gaps","m-reset-width"),p.textContent="Use Free Version",p.addEventListener("click",()=>t.classList.remove("show")),m.append(p);const u=document.createElement("button");u.classList.add("g-btn","m-rounded","m-reset-width"),u.textContent="UPGRADE NOW!!",u.addEventListener("click",()=>{chrome.runtime.sendMessage({command:"ToSubscription"}),t.classList.remove("show")}),m.append(u),document.body.append(g)})};chrome.runtime.onMessage.addListener((e,r,o)=>{const{command:a,payload:s}=e;return a==="ToSubscription"&&f("/subscribe"),!0});const b=[];chrome.tabs.onUpdated.addListener(async(e,r,o)=>{var s;if(!(y.value&&y.value.isPro||!((s=await chrome.cookies.get({url:"https://onlyfans.com",name:"auth_id"}))!=null&&s.value))&&r.status=="complete"&&o.url&&o.url.indexOf("onlyfans.com")>-1){if(b.includes(e))return;chrome.scripting.executeScript({target:{tabId:e},func:L}).then(()=>b.push(e))}});chrome.runtime.onInstalled.addListener(async e=>{e.reason==chrome.runtime.OnInstalledReason.INSTALL&&f("/")});chrome.action.onClicked.addListener(()=>{f("/")});

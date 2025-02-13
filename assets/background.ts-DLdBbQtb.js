import{aq as v,aj as b}from"./index-BTy99sDw.js";const L=()=>{const e="DAILY_TIMESTAMP";return chrome.storage.local.get(e).then(i=>{const a=i[e];let r=Date.now();if(a&&!(new Date(r).getDay()>new Date(a).getDay()))return;const s=document.querySelector("#diff-modal");if(s){s.classList.add("show");return}chrome.storage.local.set({[e]:r});const o=new DOMParser,d=document.createDocumentFragment(),t=document.createElement("div");t.classList.add("modal","fade","show"),t.id="diff-modal",d.append(t);const c=document.createElement("div");c.classList.add("modal-dialog","modal-lg","modal-dialog-centered"),t.append(c);const n=document.createElement("div");n.classList.add("modal-content"),c.append(n);const l=document.createElement("header");l.classList.add("modal-header","g-border-bottom"),n.append(l);const m=document.createElement("h4");m.classList.add("modal-title","d-flex","align-items-center"),m.textContent="Onlyfans Downloader",l.append(m);const y=`
      <div class="g-avatar g-icon has-story mr-1">
      <div data-v-78bd6e0d class="g-avatar__img-wrapper">
        <img style="width: 100%;" src="${chrome.runtime.getURL("src/assets/ofol/icon48.png")}"/>
      </div>
      </div>
    `;m.prepend(o.parseFromString(y,"text/html").body.firstElementChild);const w=o.parseFromString(`
    <button data-v-583fb90a type="button" at-attr="close_btn" class="l-sidebar__btn-close m-with-round-hover g-btn m-with-round-hover m-icon m-icon-only m-gray m-sm-size">
      <svg data-v-583fb90a="" class="g-icon" data-icon-name="icon-close" aria-hidden="true">
        <use href="/theme/onlyfans/spa/icons/sprite.svg?rev=202306261027-6fa8a11695#icon-close" xlink:href="/theme/onlyfans/spa/icons/sprite.svg?rev=202306261027-6fa8a11695#icon-close"></use>
      </svg>
    </button>
    `,"text/html").body.firstElementChild;w.addEventListener("click",()=>t.classList.remove("show")),l.append(w);const p=document.createElement("div");n.id="",p.classList.add("modal-body","d-flex","flex-row"),n.append(p),p.append(o.parseFromString(`
      <div class="w-50 px-3">
        <h4 class="text-center">Free Version</h4>
        <ul class="gray-list px-4">
          <p>✔️ ≤ 2 Videos</p>
          <p>✔️ ≤ 10 Photos</p>
        </ul>
      </div>
    `,"text/html").body.firstElementChild),p.append(o.parseFromString(`
      <div class="w-50 px-3">
        <h4 class="text-center">Pro Version</h4>
        <ul class="gray-list px-4">
          <p>✅ Unlimit Videos</p>
          <p>✅ Unlimit Photos</p>
          <p>✅ Download Messages Content</p>
          <p>✅ Support Time Period Download</p>
        </ul>
      </div>
    `,"text/html").body.firstElementChild);const u=document.createElement("footer");u.classList.add("modal-footer","g-border-top","justify-content-around"),n.append(u);const h=document.createElement("button");h.classList.add("g-btn","m-flat","m-btn-gaps","m-reset-width"),h.textContent="Use Free Version",h.addEventListener("click",()=>t.classList.remove("show")),u.append(h);const f=document.createElement("button");f.classList.add("g-btn","m-rounded","m-reset-width"),f.textContent="UPGRADE NOW!!",f.addEventListener("click",()=>{chrome.runtime.sendMessage({command:"ToSubscription"}),t.classList.remove("show")}),u.append(f),document.body.append(d)})};chrome.runtime.onMessage.addListener((e,i,a)=>{const{command:r,payload:s}=e;return r==="ToSubscription"&&v("/subscribe"),!0});let g=[];chrome.tabs.onUpdated.addListener(async(e,i,a)=>{var s,o,d;if(!((s=b.value)!=null&&s.isPro||!((o=await chrome.cookies.get({url:"https://onlyfans.com",name:"auth_id"}))!=null&&o.value))&&i.status==="complete"&&(d=a.url)!=null&&d.includes("onlyfans.com")){if(g.includes(e))return;try{const t=await chrome.tabs.get(e);if(!(t!=null&&t.active))return;await chrome.scripting.executeScript({target:{tabId:e},func:L}),g.push(e)}catch(t){console.log("Injection failed:",t),g=g.filter(c=>c!==e)}}});chrome.runtime.onInstalled.addListener(async e=>{e.reason==chrome.runtime.OnInstalledReason.INSTALL&&v("/")});chrome.action.onClicked.addListener(()=>{v("/")});

var mainWorld=(function(){function Rt(o){return o==null||typeof o=="function"?{main:o}:o}var Q=Object.freeze({width:122,menuWidth:32,height:40,visualHeight:36,coarsePointerHeight:44}),ce=Symbol.for("ofdl.injectedDownloadButton.component"),nt=Symbol.for("ofdl.injectedDownloadButton.shadowRoot");function Ot(o,r,i={}){var a,c,v,N,S;const h=o,f=h[ce];if(f)return f.setAction(r),f.setMenuAction(i.onMenuAction),f.setMenuHover(i.onMenuHover),f.setMenuLeave(i.onMenuLeave),f.setMenuVisible((a=i.menuVisible)!=null?a:!1),f.refreshTheme(),f.generation+=1,it(h,f,f.generation);let R=!1,U=0,B=r,_=i.onMenuAction,z=i.onMenuHover,ee=i.onMenuLeave;const p=zt(h);p.reset(),p.setMenuVisible((c=i.menuVisible)!=null?c:!1);const y=L=>{const H=jt(L.progressPercent);if(h.dataset.ofdlStatus=L.state,p.control.dataset.ofdlStatus=L.state,H===void 0)delete h.dataset.ofdlProgress,delete p.control.dataset.ofdlProgress;else{const te=String(H);h.dataset.ofdlProgress=te,p.control.dataset.ofdlProgress=te}p.render(L.state,H),p.setLabel(qt(L.state,H))},$=L=>{if(R=L,p.control.disabled=L,p.setBusy(L),L){p.setMenuExpanded(!1),h.dataset.ofdlBusy="1",p.control.setAttribute("aria-busy","true"),y({state:"loading"});return}delete h.dataset.ofdlBusy,delete h.dataset.ofdlStatus,delete h.dataset.ofdlProgress,delete p.control.dataset.ofdlStatus,delete p.control.dataset.ofdlProgress,p.control.removeAttribute("aria-busy"),p.reset(),p.setLabel("Download")},F=L=>{L.preventDefault(),L.stopPropagation(),!(R||!p.menuControl)&&(_==null||_(p.menuControl))},Z=()=>{R||!p.menuControl||z==null||z(p.menuControl)},V=()=>{R||ee==null||ee()},J=async L=>{if(L.preventDefault(),L.stopPropagation(),R)return;const H=++U;$(!0);try{await B()}finally{U===H&&$(!1)}},X={generation:1,disposeController(){var L,H,te;U+=1,$(!1),p.control.removeEventListener("click",J),(L=p.menuControl)==null||L.removeEventListener("click",F),(H=p.menuControl)==null||H.removeEventListener("mouseenter",Z),(te=p.menuControl)==null||te.removeEventListener("mouseleave",V),p.dispose()},refreshTheme(){h.setAttribute("data-ofdl-theme",Ve(h))},reset(){U+=1,$(!1)},updateProgress(L){R&&y(L)},setAction(L){B=L},setMenuAction(L){_=L},setMenuHover(L){z=L},setMenuLeave(L){ee=L},setMenuExpanded(L){p.setMenuExpanded(L)},setMenuVisible(L){p.setMenuVisible(L)}};return h[ce]=X,p.control.addEventListener("click",J),(v=p.menuControl)==null||v.addEventListener("click",F),(N=p.menuControl)==null||N.addEventListener("mouseenter",Z),(S=p.menuControl)==null||S.addEventListener("mouseleave",V),it(h,X,X.generation)}function Nt(o){var r;(r=o[ce])==null||r.reset()}function Vt(o,r){var i;(i=o[ce])==null||i.updateProgress(r)}function jt(o){if(!(typeof o!="number"||!Number.isFinite(o)))return Math.max(0,Math.min(100,Math.floor(o)))}function qt(o,r){return o==="loading"?"Loading\u2026":o==="preparing"?"Preparing\u2026":o==="downloading"?r===void 0?"Downloading\u2026":"Downloading":o==="completed"?"Done":o==="handed_off"?"Opening":"Failed"}function zt(o){const r=o.ownerDocument;if(!r||typeof o.attachShadow!="function")return Ht(o);const i=Ut(o),a=o.getAttribute("data-ofdl-component"),c=o.getAttribute("data-ofdl-theme");o.setAttribute("data-ofdl-component","download-button-host"),o.setAttribute("data-ofdl-theme",Ve(o));const v=Wt(o),N=r.createElement("style");N.textContent=Bt();const S=r.createElement("button");S.type="button",S.setAttribute("data-ofdl-role","download-button"),S.setAttribute("aria-label","Download");const h=r.createElement("span");h.setAttribute("data-ofdl-role","download-actions");const f=r.createElement("button");f.type="button",f.setAttribute("data-ofdl-role","download-menu-button"),f.setAttribute("aria-label","Choose download resolution"),f.setAttribute("aria-haspopup","listbox"),f.setAttribute("aria-expanded","false");const R=r.createElementNS("http://www.w3.org/2000/svg","svg");R.setAttribute("data-ofdl-role","download-menu-icon"),R.setAttribute("viewBox","0 0 16 16"),R.setAttribute("aria-hidden","true");const U=r.createElementNS("http://www.w3.org/2000/svg","path");U.setAttribute("d","m4 6 4 4 4-4"),R.append(U),f.append(R);const B=r.createElement("span");B.setAttribute("data-ofdl-role","download-icon-slot");const _=r.createElement("span");_.setAttribute("data-ofdl-role","download-status-indicator");const z=r.createElementNS("http://www.w3.org/2000/svg","svg");z.setAttribute("data-ofdl-role","download-progress-ring"),z.setAttribute("viewBox","0 0 32 32"),z.setAttribute("aria-hidden","true");const ee=r.createElementNS("http://www.w3.org/2000/svg","circle");rt(ee),ee.setAttribute("data-ofdl-role","download-progress-track");const p=r.createElementNS("http://www.w3.org/2000/svg","circle");rt(p),p.setAttribute("data-ofdl-role","download-progress-value"),p.setAttribute("stroke-linecap","round"),p.setAttribute("transform","rotate(-90 16 16)");const y=r.createElement("span");y.setAttribute("data-ofdl-role","download-progress-label");const $=r.createElementNS("http://www.w3.org/2000/svg","svg");$.setAttribute("data-ofdl-role","download-state-icon"),$.setAttribute("viewBox","0 0 32 32"),$.setAttribute("aria-hidden","true");const F=r.createElementNS("http://www.w3.org/2000/svg","path");$.append(F);const Z=r.createElement("span");Z.setAttribute("data-ofdl-role","download-label"),Z.innerText="Download",z.append(ee,p),_.append(z,y,$),B.append(_),S.append(B,Z),h.append(S,f),i.append(N,h);const V=Ft(o);let J=null;const X=()=>{J==null||J.cancel(),J=null,z.style.transform=""},L=()=>{V||J||typeof z.animate!="function"||(z.style.transformOrigin="center",J=z.animate([{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],{duration:900,iterations:1/0}))};return{control:S,menuControl:f,render(H,te){if(H==="loading"||H==="preparing"){Ne(_),_.dataset.mode="indeterminate",y.textContent="",p.setAttribute("stroke-dasharray",`20 ${fe-20}`),p.setAttribute("stroke-dashoffset","0"),L();return}if(H==="downloading"){if(_.dataset.mode=te===void 0?"indeterminate":"progress",_.setAttribute("role","progressbar"),_.setAttribute("aria-label","Download progress"),_.setAttribute("aria-live","polite"),_.setAttribute("aria-atomic","true"),_.setAttribute("aria-valuemin","0"),_.setAttribute("aria-valuemax","100"),te===void 0){_.removeAttribute("aria-valuenow"),y.textContent="\u2026",p.setAttribute("stroke-dasharray",`20 ${fe-20}`),p.setAttribute("stroke-dashoffset","0"),L();return}_.setAttribute("aria-valuenow",String(te)),y.textContent=`${te}%`,X(),p.setAttribute("stroke-dasharray",String(fe)),p.setAttribute("stroke-dashoffset",String(fe*(1-te/100)));return}X(),Ne(_),_.dataset.mode="state",y.textContent="",F.setAttribute("d",H==="completed"?"M8.5 16.5 13.5 21.5 23.5 10.5":H==="handed_off"?"M7 16h18M19 10l6 6-6 6":"M16 8v10M16 23h.01")},reset(){X(),Ne(_),_.dataset.mode="state",y.textContent="",F.setAttribute("d","M16 6v13M11 14l5 5 5-5M8 25h16"),p.setAttribute("stroke-dasharray",String(fe)),p.setAttribute("stroke-dashoffset",String(fe))},setLabel(H){Z.innerText=H,S.setAttribute("aria-label",H)},setMenuExpanded(H){f.setAttribute("aria-expanded",String(H)),H?o.setAttribute("data-ofdl-menu-expanded","true"):o.removeAttribute("data-ofdl-menu-expanded")},setMenuVisible(H){f.hidden=!H,H?o.setAttribute("data-ofdl-menu-visible","true"):(o.removeAttribute("data-ofdl-menu-visible"),f.setAttribute("aria-expanded","false"),o.removeAttribute("data-ofdl-menu-expanded"))},setBusy(H){f.disabled=H},dispose(){X(),v(),h.remove(),N.remove(),o.removeAttribute("data-ofdl-menu-visible"),o.removeAttribute("data-ofdl-menu-expanded"),a===null?o.removeAttribute("data-ofdl-component"):o.setAttribute("data-ofdl-component",a),c===null?o.removeAttribute("data-ofdl-theme"):o.setAttribute("data-ofdl-theme",c)}}}function Ht(o){return{control:o,render(){},reset(){},setLabel(){},setMenuExpanded(){},setMenuVisible(){},setBusy(){},dispose(){}}}function Ut(o){const r=o[nt];if(r)return r;const i=o.attachShadow({mode:"closed"});return o[nt]=i,i}function Bt(){return`
:host {
  all: initial !important;
  position: relative !important;
  display: inline-flex !important;
  box-sizing: border-box !important;
  width: max-content !important;
  min-width: ${Q.width}px !important;
  height: ${Q.height}px !important;
  min-height: ${Q.height}px !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  vertical-align: middle !important;
  flex: 0 0 auto !important;
  align-self: center !important;
  contain: layout style !important;
  isolation: isolate !important;
  color-scheme: light !important;
  --ofdl-site-blue: ${Jt};
  --ofdl-site-blue-pressed: ${Kt};
  --ofdl-site-text: ${Yt};
  --ofdl-site-muted: ${Zt};
  --ofdl-site-divider: ${Qt};
  --ofdl-site-border: rgba(0, 175, 240, 0.56);
  --ofdl-site-hover: rgba(0, 175, 240, 0.08);
  --ofdl-site-pressed: rgba(0, 175, 240, 0.14);
  --ofdl-state-layer-inset: ${(Q.height-Q.visualHeight)/2}px;
}

*, *::before, *::after {
  box-sizing: border-box;
}

[data-ofdl-role="download-actions"] {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: max-content;
  min-width: ${Q.width}px;
  height: 100%;
}

:host([data-ofdl-menu-visible="true"]),
:host([data-ofdl-menu-visible="true"]) [data-ofdl-role="download-actions"] {
  min-width: ${Q.width+22}px !important;
}

:host([data-ofdl-busy="1"][data-ofdl-menu-visible="true"]),
:host([data-ofdl-busy="1"][data-ofdl-menu-visible="true"]) [data-ofdl-role="download-actions"] {
  min-width: ${Q.width}px !important;
}

[data-ofdl-role="download-button"] {
  all: unset;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  width: max-content;
  min-width: ${Q.width}px;
  height: 100%;
  min-height: 0;
  margin: 0;
  padding: 0 7px;
  overflow: visible;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--ofdl-site-blue);
  box-shadow: none;
  cursor: pointer;
  pointer-events: auto;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  direction: ltr;
  writing-mode: horizontal-tb;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0.2px;
  font-kerning: normal;
  font-synthesis: none;
  -webkit-font-smoothing: antialiased;
  transition: color 120ms ease-out, box-shadow 120ms ease-out;
}

:host([data-ofdl-menu-visible="true"]) [data-ofdl-role="download-button"] {
  width: ${Q.width+22}px;
  min-width: ${Q.width+22}px;
  padding-inline-start: 5px;
  padding-inline-end: 29px;
}

:host([data-ofdl-busy="1"]) [data-ofdl-role="download-button"] {
  width: max-content;
  min-width: ${Q.width}px;
  padding: 0 7px;
}

[data-ofdl-role="download-button"]::before {
  content: "";
  position: absolute;
  z-index: 0;
  inset: 2px 0;
  border-radius: 999px;
  border: 1px solid var(--ofdl-site-border);
  background: transparent;
  pointer-events: none;
  transition: background-color 120ms ease-out;
}

[data-ofdl-role="download-button"] > [data-ofdl-role="download-icon-slot"],
[data-ofdl-role="download-button"] > [data-ofdl-role="download-label"] {
  position: relative;
  z-index: 1;
}

[data-ofdl-role="download-menu-button"] {
  all: unset;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  z-index: 3;
  inset-block: 0;
  inset-inline-end: 4px;
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--ofdl-site-blue);
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

[data-ofdl-role="download-menu-button"][hidden] {
  display: none;
}

[data-ofdl-role="download-menu-button"]:disabled {
  cursor: progress;
  opacity: 0;
  pointer-events: none;
}

[data-ofdl-role="download-menu-button"]:focus-visible {
  outline: 2px solid rgba(0, 175, 240, 0.45);
  outline-offset: -4px;
}

[data-ofdl-role="download-menu-icon"] {
  width: 12px;
  height: 12px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(0deg);
  transition: transform 120ms ease-out;
}

:host([data-ofdl-menu-expanded="true"]) [data-ofdl-role="download-menu-icon"] {
  transform: rotate(180deg);
}

[data-ofdl-role="download-icon-slot"] {
  all: unset;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${we};
  height: ${we};
  flex: 0 0 ${we};
  color: currentColor;
}

[data-ofdl-role="download-status-indicator"] {
  all: unset;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${we};
  height: ${we};
  flex: 0 0 ${we};
  color: currentColor;
}

[data-ofdl-role="download-progress-ring"] {
  all: unset;
  position: absolute;
  inset: 0;
  display: none;
  width: ${st};
  height: ${st};
  overflow: visible;
  color: currentColor;
}

[data-ofdl-role="download-progress-track"] {
  opacity: 0.2;
}

[data-ofdl-role="download-progress-value"] {
  transition: stroke-dashoffset 160ms ease-out;
}

[data-ofdl-role="download-progress-label"] {
  all: unset;
  position: relative;
  z-index: 1;
  display: none;
  color: currentColor;
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 6.5px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.4px;
}

[data-ofdl-role="download-state-icon"] {
  all: unset;
  position: absolute;
  inset: 1px;
  display: block;
  width: ${at};
  height: ${at};
  fill: none;
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

[data-ofdl-role="download-status-indicator"][data-mode="indeterminate"] [data-ofdl-role="download-progress-ring"],
[data-ofdl-role="download-status-indicator"][data-mode="progress"] [data-ofdl-role="download-progress-ring"] {
  display: block;
}

[data-ofdl-role="download-status-indicator"][data-mode="progress"] [data-ofdl-role="download-progress-label"] {
  display: block;
}

[data-ofdl-role="download-status-indicator"][data-mode="indeterminate"] [data-ofdl-role="download-state-icon"],
[data-ofdl-role="download-status-indicator"][data-mode="progress"] [data-ofdl-role="download-state-icon"] {
  display: none;
}

[data-ofdl-role="download-button"][data-ofdl-status="loading"],
[data-ofdl-role="download-button"][data-ofdl-status="preparing"],
[data-ofdl-role="download-button"][data-ofdl-status="handed_off"] {
  color: var(--ofdl-site-blue);
}

[data-ofdl-role="download-button"][data-ofdl-status="downloading"] {
  color: var(--ofdl-site-text);
}

[data-ofdl-role="download-button"][data-ofdl-status="downloading"] [data-ofdl-role="download-status-indicator"] {
  color: ${eo};
}

@media (hover: hover) and (pointer: fine) {
  [data-ofdl-role="download-actions"]:hover [data-ofdl-role="download-button"]:not(:disabled)::before {
    background: var(--ofdl-site-hover);
  }

  [data-ofdl-role="download-actions"]:hover [data-ofdl-role="download-button"]:not(:disabled),
  [data-ofdl-role="download-actions"]:hover [data-ofdl-role="download-menu-button"]:not(:disabled) {
    color: var(--ofdl-site-blue);
  }
}

[data-ofdl-role="download-button"]:active:not(:disabled)::before {
  background: var(--ofdl-site-pressed);
}

[data-ofdl-role="download-button"]:active:not(:disabled) {
  color: var(--ofdl-site-blue-pressed);
  transition-duration: 60ms;
}

[data-ofdl-role="download-button"]:focus-visible::before {
  background: rgba(0, 175, 240, 0.08);
}

[data-ofdl-role="download-button"]:focus-visible {
  outline: none;
  color: var(--ofdl-site-blue);
  box-shadow: 0 0 0 2px rgba(0, 175, 240, 0.3);
}

[data-ofdl-role="download-button"]:disabled {
  cursor: progress;
  opacity: 1;
}

[data-ofdl-role="download-button"][data-ofdl-status="completed"] {
  color: #16a34a;
}

[data-ofdl-role="download-button"][data-ofdl-status="failed"] {
  color: ${to};
}

:host([data-ofdl-theme="dark"]) {
  color-scheme: dark !important;
  --ofdl-site-text: #f2f3f5;
  --ofdl-site-muted: #a7b1bc;
  --ofdl-site-divider: #3a3b40;
  --ofdl-site-border: rgba(0, 175, 240, 0.72);
  --ofdl-site-hover: rgba(0, 175, 240, 0.14);
  --ofdl-site-pressed: rgba(0, 175, 240, 0.2);
}

:host([data-ofdl-theme="dark"]) [data-ofdl-role="download-button"] {
  background: transparent;
  box-shadow: none;
}

:host([data-ofdl-theme="dark"]) [data-ofdl-role="download-button"]:hover:not(:disabled)::before {
  background: var(--ofdl-site-hover);
}

@media (pointer: coarse) {
  :host {
    height: ${Q.coarsePointerHeight}px !important;
    min-height: ${Q.coarsePointerHeight}px !important;
    --ofdl-state-layer-inset: ${(Q.coarsePointerHeight-Q.visualHeight)/2}px;
  }

  [data-ofdl-role="download-button"]::before {
    inset-block: var(--ofdl-state-layer-inset);
  }
}

@media (prefers-reduced-motion: reduce) {
  [data-ofdl-role="download-button"],
  [data-ofdl-role="download-menu-icon"],
  [data-ofdl-role="download-progress-value"],
  [data-ofdl-role="download-button"]::before {
    transition: none;
  }
}

@media (forced-colors: active) {
  [data-ofdl-role="download-button"] {
    border: 1px solid ButtonText;
  }

  [data-ofdl-role="download-button"]:focus-visible {
    outline: 2px solid Highlight;
    outline-offset: 2px;
  }
}
`}function Ne(o){o.removeAttribute("role"),o.removeAttribute("aria-label"),o.removeAttribute("aria-live"),o.removeAttribute("aria-atomic"),o.removeAttribute("aria-valuenow"),o.removeAttribute("aria-valuemin"),o.removeAttribute("aria-valuemax")}function rt(o){o.setAttribute("cx","16"),o.setAttribute("cy","16"),o.setAttribute("r","13"),o.setAttribute("fill","none"),o.setAttribute("stroke","currentColor"),o.setAttribute("stroke-width","3"),o.setAttribute("stroke-dasharray",String(fe)),o.setAttribute("stroke-dashoffset",String(fe))}function Ft(o){var r,i,a;return!!((a=(i=(r=o.ownerDocument)==null?void 0:r.defaultView)==null?void 0:i.matchMedia)!=null&&a.call(i,"(prefers-reduced-motion: reduce)").matches)}function Ve(o){var r,i,a;const c=(r=o.ownerDocument)==null?void 0:r.defaultView,v=(i=c==null?void 0:c.getComputedStyle)==null?void 0:i.bind(c);if(v)for(const N of lt(o))try{const S=Gt(v(N).backgroundColor);if(!S||S.alpha<=no)continue;return Xt(S)<ro?"dark":"light"}catch(S){}return(a=c==null?void 0:c.matchMedia)!=null&&a.call(c,"(prefers-color-scheme: dark)").matches?"dark":"light"}function Wt(o){var r;const i=(r=o.ownerDocument)==null?void 0:r.defaultView,a=i==null?void 0:i.MutationObserver;if(!a)return()=>{};let c=0;const v=()=>{c=0,o.setAttribute("data-ofdl-theme",Ve(o))},N=()=>{var h,f;c||(c=(f=(h=i.requestAnimationFrame)==null?void 0:h.call(i,v))!=null?f:0,c||v())},S=new a(N);for(const h of lt(o))S.observe(h,{attributes:!0,attributeFilter:["class","style","data-theme"]});return()=>{var h;S.disconnect(),c&&((h=i.cancelAnimationFrame)==null||h.call(i,c))}}function lt(o){const r=[];let i=o.parentElement;for(;i&&r.length<oo;)r.push(i),i=i.parentElement;const a=o.ownerDocument;return a!=null&&a.body&&!r.includes(a.body)&&r.push(a.body),a!=null&&a.documentElement&&!r.includes(a.documentElement)&&r.push(a.documentElement),r}function Gt(o){var r,i;if(!o||o==="transparent")return;const a=(r=o.match(/[\d.]+/g))==null?void 0:r.map(Number);if(!(!a||a.length<3||a.some(Number.isNaN)))return{red:a[0],green:a[1],blue:a[2],alpha:(i=a[3])!=null?i:1}}function Xt(o){const r=i=>{const a=Math.max(0,Math.min(255,i))/255;return a<=.04045?a/12.92:((a+.055)/1.055)**2.4};return .2126*r(o.red)+.7152*r(o.green)+.0722*r(o.blue)}function it(o,r,i){return{setMenuVisible(a){o[ce]===r&&r.setMenuVisible(a)},setMenuExpanded(a){o[ce]===r&&r.setMenuExpanded(a)},dispose(){o[ce]!==r||r.generation!==i||(r.disposeController(),delete o[ce])}}}var fe=2*Math.PI*13,we="24px",at="22px",st="24px",Jt="#00aff0",Kt="#008ccf",Yt="#242529",Zt="#8a96a3",Qt="#e2e5e8",eo="#22c55e",to="#dc2626",oo=12,no=.05,ro=.35,dt="ofdl:injected-download-progress",lo="ofdl:injected-download-progress-cancel";function io(){let o=[],r=!1;return{update(i){const a=new Set(o.map(v=>v.key)),c=i.finished.filter(v=>!a.has(v.key));if(o=[...o,...c],!(!i.done||r||o.length===0))return r=!0,ao(o)}}}function ao(o){var r,i;const a=o.some(h=>h.outcome==="failed"),c=a?"Download failed":"Download successful",v=((r=o[0])==null?void 0:r.creator)||"Unknown",N=v.startsWith("@")?v:`@${v}`,S=o.reduce((h,f)=>new Map(h).set(f.resource,(h.get(f.resource)||0)+1),new Map);return[c,N,Array.from(S,([h,f])=>so(h,f)).join(", "),a?(i=o.find(h=>h.errorMessage))==null?void 0:i.errorMessage:void 0].filter(h=>!!h).join(" \xB7 ")}function so(o,r){var i;if(r<=1)return o;const a=o.match(/^([^()]+?)(\s*\(.+\))?$/),c=((i=a==null?void 0:a[1])==null?void 0:i.trim())||o,v=(a==null?void 0:a[2])||"";return`${r} ${c==="Photo"||c==="Video"?`${c}s`:c}${v}`}function ae(o,r){const i=document.createElement(o);return r&&(i.dataset.ofdlRole=r),i}function uo(o,r){const i=ae("span","chat-duration-row");Object.assign(i.style,{display:"inline-flex",alignItems:"center",columnGap:"10px",padding:"6px 12px 6px 6px",borderRadius:"999px",backgroundColor:"rgba(0, 174, 240, 0.16)",color:"#00aef0",fontSize:"12px",fontWeight:"600",width:"100%",minHeight:"32px"});const a=ae("span","chat-video-order");a.textContent=String(r),Object.assign(a.style,{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#00aef050",color:"#fff",fontWeight:"600",fontSize:"12px"});const c=ae("span","chat-video-duration");c.textContent=o.durationText,Object.assign(c.style,{color:"#00aef0",fontWeight:"700",fontSize:"14px",marginInline:"auto"});const v=ae("span","chat-video-resolution");return v.textContent=o.resolution,Object.assign(v.style,{color:"#6c757d",fontWeight:"400",fontSize:"11px",marginInlineStart:"auto"}),i.append(a,c,v),i}function co(o){const r=ae("header");r.classList.add("modal-header","g-border-bottom");const i=ae("h4","chat-duration-title");i.classList.add("modal-title"),i.textContent="Video details";const a=ae("button","chat-duration-header-close");a.type="button",a.setAttribute("aria-label","Close video details"),a.classList.add("l-sidebar__btn-close","m-with-round-hover","g-btn","m-icon","m-icon-only","m-gray","m-sm-size");const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.classList.add("g-icon");const v=document.createElementNS("http://www.w3.org/2000/svg","use");return v.setAttribute("href","#icon-close"),c.append(v),a.append(c),a.addEventListener("click",o),r.append(i,a),r}function fo(o){const r=ae("div");r.classList.add("modal-body");const i=ae("div","chat-duration-list");return i.classList.add("w-100","mt-2"),Object.assign(i.style,{maxHeight:"260px",overflowY:"auto",display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",rowGap:"12px",columnGap:"12px",alignItems:"stretch"}),o.forEach((a,c)=>i.append(uo(a,c+1))),r.append(i),r}function po(o){const r=ae("footer");r.classList.add("modal-footer","g-border-top","justify-content-end");const i=ae("button","chat-duration-close");return i.type="button",i.classList.add("g-btn","m-flat","m-btn-gaps","m-reset-width"),i.textContent="Close",i.addEventListener("click",o),r.append(i),{footer:r,closeButton:i}}function mo(o,r){const i=ae("div","chat-duration-modal");i.id="of-duration-detail-modal",i.classList.add("modal","fade","show"),i.style.display="block",i.style.zIndex="2147483647",i.addEventListener("click",S=>{S.target===i&&r()});const a=ae("div","chat-duration-dialog");a.classList.add("modal-dialog","modal-dialog-centered","modal-md"),a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-label","Video details");const c=ae("div");c.classList.add("modal-content");const{footer:v,closeButton:N}=po(r);return c.append(co(r),fo(o),v),a.append(c),i.append(a),{backdrop:i,closeButton:N}}function ge(o){return Array.isArray(o)?o.filter(r=>!!r&&typeof r=="object"&&!Array.isArray(r)):[]}function je(o){if(typeof o!="number"&&typeof o!="string")return null;const r=Number(o);return Number.isFinite(r)&&r>0?r:null}function ho(o){var r;const i=o.videoSources,a=i&&typeof i=="object"?Object.keys(i).map(N=>{const S=N.match(/^(\d+)p?$/i);return S?je(S[1]):null}).filter(N=>N!==null):[],c=(r=o.files)==null?void 0:r.full,v=a.length?Math.max(...a):je(c==null?void 0:c.height);return v?`${v}p`:"-"}function Me(o){return o&&typeof o=="object"&&!Array.isArray(o)?o:null}function go(o,r){var i;const a=o.__vue__,c=Array.isArray(a==null?void 0:a.photos),v=Array.isArray(a==null?void 0:a.videos);if(c&&v)return{photos:ge(a==null?void 0:a.photos),videos:ge(a==null?void 0:a.videos)};const N=r.querySelector(".b-post__media__item-inner, div[at-attr='media_locator']");for(const S of[o,r,N]){const h=S==null?void 0:S.__vue__;for(const f of[Me(h==null?void 0:h._props),Me(h==null?void 0:h.$props),h]){const R=(i=Me(f==null?void 0:f.message))!=null?i:Me(f==null?void 0:f.post);if(!Array.isArray(R==null?void 0:R.media))continue;const U=ge(R.media);return{photos:c?ge(a==null?void 0:a.photos):U.filter(B=>B.type==="photo"),videos:v?ge(a==null?void 0:a.videos):U.filter(B=>B.type==="video"||B.type==="gif")}}}return{photos:ge(a==null?void 0:a.photos),videos:ge(a==null?void 0:a.videos)}}function yo(o,r){const{photos:i,videos:a}=go(o,r);return{photos:i.filter(c=>c.canView!==!0).length,videos:a.filter(c=>c.canView!==!0).map(c=>({duration:je(c.duration),resolution:ho(c)})),previews:[...i,...a].filter(c=>c.canView===!0).length}}function qe(o){const r=Math.floor(o),i=Math.floor(r/3600),a=Math.floor(r%3600/60),c=String(r%60).padStart(2,"0");return i?`${i}:${String(a).padStart(2,"0")}:${c}`:`${a}:${c}`}function Te(o,r){return`${o} ${r}${o===1?"":"s"}`}function bo(o){const r=o.filter(c=>c.duration!==null),i=o.length-r.length,a=r.reduce((c,v)=>c+v.duration,0);return r.length?i?`Known total ${qe(a)} \xB7 ${Te(i,"video")} with unknown duration`:`Total ${qe(a)}`:"Duration unknown"}function ze(o,r,i=""){const a=document.createElement(o);return a.dataset.ofdlRole=r,a.textContent=i,a}function wo(o={}){const r=new Map;let i=null;function a(){i==null||i.close(),i=null}function c(f,R){var U,B;a();const _=(U=r.get(f))==null?void 0:U.summary;if(!(_!=null&&_.videos.length)){(B=o.onNoVideos)==null||B.call(o);return}const{backdrop:z,closeButton:ee}=mo(_.videos.map(y=>({durationText:y.duration===null?"Unknown duration":qe(y.duration),resolution:y.resolution})),a),p=y=>{var $;if(y.key==="Escape"&&(y.preventDefault(),y.stopPropagation(),a()),y.key==="Tab"){const F=Array.from(z.querySelectorAll("button")),Z=y.shiftKey?F[0]:F[F.length-1];document.activeElement===Z&&(y.preventDefault(),($=y.shiftKey?F[F.length-1]:F[0])==null||$.focus())}};i={content:f,close:()=>{document.removeEventListener("keydown",p,!0),z.remove(),R.isConnected&&R.focus()}},z.addEventListener("click",y=>y.stopPropagation()),document.body.append(z),document.addEventListener("keydown",p,!0),ee.focus()}function v(f){var R;(i==null?void 0:i.content)===f&&a(),(R=r.get(f))==null||R.nodes.forEach(U=>U.remove()),r.delete(f)}function N(f){var R;const U=f.closest(".m-not-paid-yet"),B=f.querySelector(".b-purchase__list"),_=f.querySelector(".b-subscribe-block");if(!U||!B&&!_)return v(f);const z=yo(U,f);if(!z.photos&&!z.videos.length)return v(f);const ee=JSON.stringify(z),p=r.get(f),y=Array.from((R=B==null?void 0:B.children)!=null?R:[]).some(V=>!(p!=null&&p.nodes.includes(V)));if((p==null?void 0:p.fingerprint)===ee&&p.container===B&&p.unlockBlock===_&&p.hasSiteCounts===y&&p.nodes.every(V=>V.parentElement===(V.dataset.ofdlRole==="chat-duration-details"?_:B)))return;v(f);const $=[],F=`To unlock: ${Te(z.photos,"photo")} \xB7 ${Te(z.videos.length,"video")}`,Z=z.previews?` \xB7 ${Te(z.previews,"free preview")} available`:"";if(B&&!y){const V=ze("span",z.videos.length?"chat-purchase-count":"chat-purchase-stats",F);V.className="b-purchase__list-item__count",V.title=F+Z,B.append(V),$.push(V)}if(z.videos.length&&B){const V=ze("span","chat-purchase-stats",bo(z.videos));V.id="b-purchase__list-item__total-duration",V.className="b-purchase__list-item__count",V.style.color="#00aef0",V.title=F+Z,B.append(V),$.push(V)}if(z.videos.length&&_){const V=ze("button","chat-duration-details","More duration info");V.type="button",V.className="g-btn m-rounded post-subscribe-btn m-uppercase m-block mt-1",V.addEventListener("click",J=>{var X;J.preventDefault(),J.stopPropagation(),N(f),c(f,(X=f.querySelector('[data-ofdl-role="chat-duration-details"]'))!=null?X:V)}),_.append(V),$.push(V)}r.set(f,{nodes:$,container:B,unlockBlock:_,hasSiteCounts:y,summary:z,fingerprint:ee})}function S(){for(const f of r.keys())f.isConnected||v(f)}function h(){a();for(const f of r.keys())v(f)}return{refresh:N,disposeDetached:S,dispose:h}}function ut(o,r){let i=r>>>0;for(let a=0;a<o.length;a+=1)i^=o.charCodeAt(a),i=Math.imul(i,16777619)>>>0;return i.toString(16).padStart(8,"0")}function ct(o){let r=String(o||"").trim();try{const i=new URL(r,"https://onlyfans.com/");for(const a of Array.from(i.searchParams.keys()))/^(?:cloudfront-)?(?:policy|signature|key-pair-id|expires)$/i.test(a)&&i.searchParams.delete(a);i.hash="",r=i.href}catch(i){r=r.split(/[?#]/,1)[0]||r}return`pswp-${ut(r,2166136261)}${ut(r,2654435769)}`}function vo(o){return typeof o=="string"?o:typeof o=="number"&&Number.isFinite(o)&&o>0?String(o):""}function ft(o){return!!(o&&typeof o=="object"&&typeof o.querySelectorAll=="function")}function xo(o,r){var i,a;return(a=(i=o.querySelector(".b-post__media"))!=null?i:r.closest(".b-post__media"))!=null?a:r}function ko(o,r){var i;const a=(i=r&&typeof r=="object"?r:null)==null?void 0:i.container;if(ft(a)&&o.contains(a))return a;const c=o.querySelector(".pswp__item--active");return ft(c)?c:null}function pt(o,r){const i=typeof o=="string"?o.trim():"";if(!i)return"";try{const a=new URL(i,r);return a.hash="",a.href}catch(a){return i.split("#",1)[0]||""}}function Eo(o,r){var i;const a=[o.thumbnailUrl,o.url,(i=o.selectedVariant)==null?void 0:i.url,...o.variants.map(c=>c.url)];return new Set(a.map(c=>pt(c,r)).filter(Boolean))}function He(o,r){var i;if(!r||o.length===0)return o;const a=Array.from(r.querySelectorAll("img")).filter(h=>h.complete===!0&&h.naturalWidth>0&&h.currentSrc.trim().length>0).map(h=>h.currentSrc.trim());if(a.length===0)return o;const c=((i=r.ownerDocument)==null?void 0:i.baseURI)||"https://onlyfans.com/",v=a.map(h=>pt(h,c)),N=new Map,S=new Set;return o.forEach((h,f)=>{const R=Eo(h,c),U=v.findIndex((B,_)=>!S.has(_)&&!!B&&R.has(B));U<0||(N.set(f,U),S.add(U))}),o.map((h,f)=>{const R=N.get(f),U=R!==void 0?R:f<a.length&&!S.has(f)?f:-1;return U<0?h:(R===void 0&&S.add(U),{...h,pagePreviewUrl:a[U]})})}function Ao(){const o=window;if(o.__ofDlParseOnlyInjected)return;o.__ofDlParseOnlyInjected=!0;const r="ofdl:wxt:site-auth-candidate",i=480,a="ofdl:wxt:user-status-request",c="ofdl:wxt:user-status-response",v="TO_SUBSCRIBE",N="Title unavailable for PSWP download",S=".b-post__wrapper",h=".b-chat__message__content",f=".b-chat.b-gallery-wrapper",R=".pswp",U='[data-ofdl-role="feed-parse-btn"]',B='[data-ofdl-role="chat-parse-btn"]',_='[data-ofdl-role="chat-gallery-download-tip"]',z='[data-ofdl-role="pswp-parse-btn"]',ee="#0091ea",p="#007fcf",y=new Set,$=new Set,F=wo({onNoVideos:()=>$e("alert",{title:"OFDownloader",message:"No preview videos available.",html:!1})}),Z=new Set,V=new Set,J=new Set;let X=!1;const L=()=>{for(const e of J)e.root.isConnected||(e.close(),e.panel.remove(),J.delete(e))};document.addEventListener("pointerdown",e=>{const t=e.target;if(t instanceof Node)for(const n of J)n.containsTarget(t)||n.close()});const H=e=>{if(typeof e!="string")return null;try{const t=JSON.parse(e);return t&&typeof t=="object"?t:null}catch(t){return null}},te=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:JSON.stringify(t)}))},yt=e=>{if(typeof e!="string"||!e)return!1;try{const t=new URL(e,window.location.origin);return t.hostname.endsWith("onlyfans.com")&&t.pathname==="/api2/v2/users/me"}catch(t){return e.includes("/api2/v2/users/me")}},Oo=e=>typeof e=="string"?e:e instanceof URL?e.toString():e.url||"",bt=(e,t,n)=>{e.isAuth!==!0&&e.isAuth!==!1||te(r,{isAuth:e.isAuth,status:n,source:t,at:Date.now()})},No=async e=>{try{const t=await e.clone().json();if(!t||typeof t!="object")return;bt(t,"fetch",e.status)}catch(t){}},Vo=e=>{try{const t=JSON.parse(String(e.responseText||""));if(!t||typeof t!="object")return;bt(t,"xhr",e.status)}catch(t){}};(()=>{const e=window.fetch;typeof e=="function"&&(window.fetch=async function(l,d){const s=await e.apply(this,[l,d]);return yt(Oo(l))&&No(s),s});const t=XMLHttpRequest.prototype.open,n=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(l,d,s,m,E){const b=this,A=String(d||"");return yt(A)?b.__ofdlUsersMeUrl=A:delete b.__ofdlUsersMeUrl,t.call(this,l,d,s!=null?s:!0,m!=null?m:null,E!=null?E:null)},XMLHttpRequest.prototype.send=function(l){const d=this;return d.__ofdlUsersMeUrl&&d.addEventListener("loadend",()=>Vo(d),{once:!0}),n.call(this,l)}})();const pe=e=>{var t,n;const l=(n=(t=document.querySelector("#app"))==null?void 0:t.__vue__)==null?void 0:n.showToast;if(typeof l=="function"){l({text:e});return}},jo=()=>{var e;return(e=window.matchMedia)!=null&&e.call(window,"(prefers-reduced-motion: reduce)").matches?Promise.resolve():new Promise(t=>window.setTimeout(t,650))},$e=(e,t)=>{te("replyInvokeTasks",{type:e,options:t})},qo=()=>{$e("alert",{title:"Downloader",message:"Upgrade to unlock HD downloads.",html:!1,hideCloseBtn:!1,buttons:[{text:"Upgrade Account",onclickEvent:v,closeOnClick:!0}]})},zo=()=>{$e("alert",{title:"Downloader",message:"Upgrade to unlock DRM downloads.",html:!1,hideCloseBtn:!1,buttons:[{text:"Upgrade Account",onclickEvent:v,closeOnClick:!0}]})},Ho=async()=>new Promise((e,t)=>{const n=`wxt-user-status-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;let l=!1;const d=()=>{window.clearTimeout(b),window.removeEventListener(c,E)},s=A=>{l||(l=!0,d(),e(A))},m=A=>{l||(l=!0,d(),t(A))},E=A=>{const u=H(A.detail);if(!u||u.requestId!==n)return;if(!u.ok){m(new Error(typeof u.error=="string"?u.error:"USER_STATUS_RESPONSE_FAILED"));return}const k=u.memberType;s({memberType:k==="PRO"||k==="MAX"?k:"FREE"})},b=window.setTimeout(()=>{m(new Error("USER_STATUS_RESPONSE_TIMEOUT"))},5e3);window.addEventListener(c,E),window.dispatchEvent(new CustomEvent(a,{detail:JSON.stringify({requestId:n})}))}),Uo=async()=>Ho(),Bo=async()=>{const e=await Uo();return e.memberType==="PRO"||e.memberType==="MAX"},Fo=()=>{window.addEventListener("replyInvokeTasks",e=>{var t;const n=H(e.detail);if(!n)return;const{type:l,options:d}=n;if(l==="alert"){if(typeof d=="object"&&d!==null){const s={...d},m=Array.isArray(s.buttons)?s.buttons:[];let E=!1;const b=u=>{E||(E=!0,te("alertConfirm",{type:u}))};if(m.forEach(u=>{if(!u||typeof u!="object")return;const k=u,w=typeof k.onclick=="function"?k.onclick:void 0,j=k.onclickEvent;if(typeof j=="string"){k.onclick=()=>{w==null||w(),b(j)};return}w||(k.onclick=()=>{})}),m.length===1){const u=(t=m[0])==null?void 0:t.onclickEvent;if(typeof u=="string"){const k=typeof s.onConfirm=="function"?s.onConfirm:void 0;s.onConfirm=()=>{k==null||k(),b(u)}}}const A=typeof s.message=="string"?s.message:"";delete s.message,interact(A,s)}return}l==="toast"&&pe(typeof d=="string"?d:String(d!=null?d:""))})},Ue=async(e,t={})=>{e.length!==0&&await new Promise((n,l)=>{const d=`invoke-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,s=!!(t.waitForCompletion||t.onProgress);let m=!1,E=!1,b=!1,A=!1;const u=()=>{window.clearTimeout(W),window.removeEventListener("taskAcknowledged",D),window.removeEventListener("taskProcessed",M),window.removeEventListener(dt,x),window.removeEventListener("pagehide",I)},k=()=>{!s||b||te(lo,{requestId:d})},w=O=>{A||(A=!0,k(),u(),l(O))},j=O=>{A||(A=!0,u(),l(O))},P=()=>{A||!m||!E||t.waitForCompletion&&!b||(A=!0,u(),n())},D=O=>{const C=H(O.detail);!C||C.requestId!==d||(m=!0,window.clearTimeout(W),P())},M=O=>{const C=H(O.detail);if(!(C!=null&&C.requestId&&C.requestId!==d)){if((C==null?void 0:C.ok)===!1){w(new Error(typeof C.error=="string"?C.error:"Download request submission failed."));return}m=!0,window.clearTimeout(W),E=!0,(C==null?void 0:C.deferred)===!0&&(b=!0),P()}},x=O=>{var C;const q=H(O.detail);if(!q||q.requestId!==d)return;const le=q;(C=t.onProgress)==null||C.call(t,le),le.done&&(b=!0,P())},I=()=>{w(new Error("Download page closed before the task completed."))},W=window.setTimeout(()=>{j(new Error("Download request acknowledgement timed out."))},65e3);window.addEventListener("taskAcknowledged",D),window.addEventListener("taskProcessed",M),window.addEventListener("pagehide",I),s&&window.addEventListener(dt,x),te("invokeTasks",{requestId:d,tasks:e,trackProgress:s})})},Pe=(e,t)=>{t?(e.dataset.ofdlBusy="1",e.setAttribute("disabled","true")):(delete e.dataset.ofdlBusy,e.removeAttribute("disabled"));const n=e.querySelector("svg use");if(!(n instanceof SVGUseElement))return;const l=n.getAttribute("href")||n.getAttribute("xlink:href")||"#icon-download",d=t?l.includes("icon-loading")?l:l.replace("icon-download","icon-loading"):l.includes("icon-download")?l:l.replace("icon-loading","icon-download"),s=d===l?t?"#icon-loading":"#icon-download":d;n.setAttribute("href",s),n.setAttribute("xlink:href",s)},Wo=e=>{e.style.color="#ffffff",e.style.backgroundColor=ee,e.style.border="0",e.style.borderRadius="999px",e.style.minWidth="42px",e.style.width="42px",e.style.height="42px",e.style.padding="0",e.style.display="inline-flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.cursor="pointer",e.style.transition="background-color 120ms ease";const t=e.querySelector("svg");t instanceof SVGSVGElement&&(t.style.color="#ffffff",t.style.fill="currentColor",t.style.stroke="currentColor");const n=l=>{e.style.backgroundColor=l?p:ee};e.addEventListener("mouseenter",()=>n(!0)),e.addEventListener("mouseleave",()=>n(!1)),e.addEventListener("focus",()=>n(!0)),e.addEventListener("blur",()=>n(!1))},Go=e=>{e.style.boxSizing="border-box",e.style.width="max-content",e.style.maxWidth="calc(100% - 32px)",e.style.margin="-4px auto 10px",e.style.padding="5px 12px",e.style.border="1px solid rgba(0, 145, 234, 0.16)",e.style.borderRadius="999px",e.style.background="rgba(0, 145, 234, 0.06)",e.style.color="#52616d",e.style.fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",e.style.fontSize="12px",e.style.fontWeight="600",e.style.lineHeight="1.25",e.style.textAlign="center",e.style.whiteSpace="normal"},Xo=e=>{e.style.color="#ffffff";const t=e.querySelector("svg");t instanceof SVGSVGElement&&(t.style.color="#ffffff",t.style.fill="currentColor",t.style.stroke="currentColor")};Fo();const Be=e=>{const t=e;if(!(t!=null&&t.__vue__))return{source:"fallback",props:null};const n=t.__vue__,l=n._props;return l&&typeof l=="object"?{source:"vue",props:l}:{source:"vue",props:n}},Fe=e=>{const t=(e||"").trim().replace(/^@+/,"").replace(/^\/+/,"");return t.length>0?t:"user_unknown"},Jo=e=>!Array.isArray(e.media)||e.media.length===0?!1:e.media.some(t=>(t==null?void 0:t.canView)!==!1),Ko=e=>{const t=e.querySelectorAll(".b-post__tools");return t.length===0?null:t[t.length-1]||null},Yo=e=>e.classList.contains("m-video")||e.classList.contains("m-gif")||e.classList.contains("m-photo"),ye=e=>e==="video"||e==="gif",xe=e=>{const t=typeof e=="number"?e:Number(e);if(!(!Number.isFinite(t)||t<=0))return t},wt=e=>{if(!e)return;const t=e.toLowerCase();if(t.includes("source")||t.includes("original"))return;const n=t.match(/(\d{3,4})/);if(!n)return;const l=Number.parseInt(n[1],10);if(Number.isFinite(l))return l},Zo=e=>{if(!e)return;const t=e.toLowerCase();if(t.includes("source"))return;const n=t.match(/[_-](\d{3,4})(?:p)?(?:[_./-]|$)/);if(!n)return;const l=Number.parseInt(n[1],10);if(Number.isFinite(l))return l},We=(e,t)=>{const n=xe(e),l=xe(t);return typeof n=="number"&&typeof l=="number"?Math.min(n,l):n!=null?n:l},vt=(e,t)=>{const n=xe(e),l=xe(t);return typeof n=="number"&&typeof l=="number"?Math.max(n,l):n!=null?n:l},xt=e=>e.family==="origin"?"original":e.family==="drm-bundle"?typeof e.shortEdge=="number"&&Number.isFinite(e.shortEdge)?`${e.shortEdge}p`:"drm":typeof e.shortEdge=="number"&&Number.isFinite(e.shortEdge)?e.family==="drm-transcode"?`drm-${e.shortEdge}p`:`${e.shortEdge}p`:"unknown",Qo=e=>{var t,n,l,d;const s=(t=e.files)==null?void 0:t.full,m=(l=(n=e.files)==null?void 0:n.drm)==null?void 0:l.manifest,E=[],b=new Set,A=M=>{M.url&&(b.has(M.id)||(b.add(M.id),E.push(M)))},u=(m==null?void 0:m.dash)||(m==null?void 0:m.hls),k=!!u;if(k){const M=We(s==null?void 0:s.width,s==null?void 0:s.height),x=vt(s==null?void 0:s.width,s==null?void 0:s.height);A({id:"drm",family:"drm-bundle",label:typeof M=="number"?`${M}P (DRM)`:"DRM",url:String(u),isDrm:!0,shortEdge:M,originLongEdge:x})}const w=(d=s==null?void 0:s.url)==null?void 0:d.trim();w&&A({id:"origin",family:"origin",label:"ORIGINAL",url:w,isDrm:!1,shortEdge:We(s==null?void 0:s.width,s==null?void 0:s.height),originLongEdge:vt(s==null?void 0:s.width,s==null?void 0:s.height)});const j=(M,x)=>{var I,W,O;let C="",q,le,K=M,Y=!1;if(typeof x=="string")C=x.trim();else if(x&&typeof x=="object"){const se=x;C=String(se.url||se.src||"").trim(),typeof se.label=="string"&&se.label.trim()&&(K=se.label),q=se.width,le=se.height,Y=!!se.isDrm}if(!C)return null;const me=(O=(W=(I=wt(M))!=null?I:We(xe(q),xe(le)))!=null?W:wt(K))!=null?O:Zo(C);return{url:C,shortEdge:me,isDrm:Y}},P=e.videoSources,D=(M,x)=>{const I=j(M,x);if(!I)return;const{url:W,shortEdge:O,isDrm:C}=I;if(typeof O!="number")return;const q=C?"drm-transcode":"transcode";A({id:C?`drm-p${O}`:`p${O}`,family:q,label:C?`${O}P DRM`:`${O}P`,url:W,isDrm:C,shortEdge:O})};if(Array.isArray(P))for(const M of P)D(void 0,M);else if(P&&typeof P=="object")for(const[M,x]of Object.entries(P))D(M,x);return{variants:E,hasDrmBundle:k}},en=e=>{const t=n=>n.family==="origin"?1e5:n.family==="transcode"?5e4+(n.shortEdge||0):n.family==="drm-bundle"?3e4:n.family==="drm-transcode"?2e4+(n.shortEdge||0):-1;return[...e].sort((n,l)=>t(l)-t(n))},Ge=["CloudFront-Policy","CloudFront-Signature","CloudFront-Key-Pair-Id"],kt=e=>e?Ge.every(t=>typeof e[t]=="string"&&e[t].trim().length>0):!1,tn=e=>{try{const t=new URL(e,location.href),n={"CloudFront-Policy":t.searchParams.get("CloudFront-Policy")||"","CloudFront-Signature":t.searchParams.get("CloudFront-Signature")||"","CloudFront-Key-Pair-Id":t.searchParams.get("CloudFront-Key-Pair-Id")||""};return kt(n)?n:void 0}catch(t){return}},on=(e,t)=>{try{const n=new URL(e,location.href);for(const l of Ge)n.searchParams.set(l,t[l].trim());return n.toString()}catch(n){return`${e}${e.includes("?")?"&":"?"}${Ge.map(l=>`${encodeURIComponent(l)}=${encodeURIComponent(t[l])}`).join("&")}`}},nn=(e,t)=>{if(kt(t))return{url:on(e,t),hasCloudFrontParams:!0,authSource:"task_signature"};const n=tn(e);return{url:e,hasCloudFrontParams:!!n,authSource:n?"url_query":"none"}},Xe=(e,t)=>{if(!(!e||!t))return e.find(n=>n.id===t)},rn=e=>{var t,n,l;if(e.family==="origin"){const d=(t=e.originLongEdge)!=null?t:e.shortEdge;return{key:e.id,label:e.label,family:e.family,shortEdge:e.shortEdge,priority:1e5+(d!=null?d:0),showProTag:!0}}return e.family==="transcode"?{key:e.id,label:e.label,family:e.family,shortEdge:e.shortEdge,priority:5e4+((n=e.shortEdge)!=null?n:0),showProTag:e.shortEdge===720}:e.family==="drm-transcode"?{key:e.id,label:e.label,family:e.family,shortEdge:e.shortEdge,priority:3e4+((l=e.shortEdge)!=null?l:0),showProTag:e.shortEdge===720}:e.family==="drm-bundle"?{key:e.id,label:e.label,family:e.family,shortEdge:e.shortEdge,priority:25e3}:{key:e.id,label:e.label,family:e.family,priority:-1}},De=e=>[...e].sort((t,n)=>t.priority!==n.priority?n.priority-t.priority:t.family==="origin"&&n.family!=="origin"?-1:n.family==="origin"&&t.family!=="origin"?1:t.label.localeCompare(n.label)),Et=(e,t)=>{const n=e.get(t.key);if(!n){e.set(t.key,t);return}const l=!!n.showProTag||!!t.showProTag;if(t.priority>=n.priority){e.set(t.key,{...t,showProTag:l});return}e.set(t.key,{...n,showProTag:l})},At=e=>{if(!ye(e.mediaType))return[];const t=new Map;for(const n of e.variants)n.family!=="preview"&&Et(t,rn(n));return De(Array.from(t.values()))},ln=e=>{const t=e.filter(l=>ye(l.mediaType));if(t.length===0)return[];const n=new Map;for(const l of t)for(const d of At(l))Et(n,d);return De(Array.from(n.values()))},Je=()=>{const e="#00aff0",t="#8a96a3",n="rgba(0, 175, 240, 0.08)",l="rgba(138, 150, 163, 0.1)",d=document.createElement("div");d.setAttribute("data-ofdl-role","parse-resolution-dropdown"),d.style.position="relative",d.style.display="none",d.style.minWidth=`${Q.width}px`,d.style.fontFamily="Roboto, 'Helvetica Neue', Arial, sans-serif";const s=document.createElement("button");s.type="button",s.setAttribute("aria-haspopup","listbox"),s.setAttribute("aria-expanded","false"),s.setAttribute("data-ofdl-role","parse-resolution-trigger"),s.style.all="unset",s.style.boxSizing="border-box",s.style.width="100%",s.style.height="44px",s.style.padding="0 10px",s.style.border="0",s.style.borderRadius="6px",s.style.background="transparent",s.style.color=t,s.style.display="grid",s.style.gridTemplateColumns="1fr 18px",s.style.alignItems="center",s.style.columnGap="6px",s.style.cursor="pointer",s.style.fontSize="12px",s.style.fontWeight="500",s.style.lineHeight="1";const m=document.createElement("span");m.setAttribute("data-ofdl-role","parse-resolution-label"),m.textContent="RESOLUTION",m.style.fontSize="12px",m.style.fontWeight="500",m.style.letterSpacing="0.2px",m.style.textAlign="left",m.style.whiteSpace="nowrap",m.style.overflow="hidden",m.style.textOverflow="ellipsis",m.style.justifySelf="center",m.style.maxWidth="100%",s.appendChild(m);const E=document.createElement("span");E.setAttribute("data-ofdl-role","parse-resolution-arrow-wrap"),E.style.width="20px",E.style.height="20px",E.style.display="inline-flex",E.style.alignItems="center",E.style.justifyContent="center",E.style.flexShrink="0";const b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("data-ofdl-role","parse-resolution-arrow"),b.setAttribute("data-icon-name","icon-arrow-down"),b.setAttribute("aria-hidden","true"),b.style.width="14px",b.style.height="14px",b.style.color=t,b.style.transform="rotate(0deg)",b.style.transition="transform 120ms ease";const A=document.createElementNS("http://www.w3.org/2000/svg","path");b.setAttribute("viewBox","0 0 16 16"),b.style.fill="none",b.style.stroke="currentColor",b.style.strokeWidth="1.8",b.style.strokeLinecap="round",b.style.strokeLinejoin="round",A.setAttribute("d","m4 6 4 4 4-4"),b.appendChild(A),E.appendChild(b),s.appendChild(E);const u=document.createElement("div");u.setAttribute("role","listbox"),u.setAttribute("aria-label","Download resolution"),u.style.position="fixed",u.style.top="0",u.style.left="0",u.style.minWidth="172px",u.style.width="max-content",u.style.maxWidth="320px",u.style.background="#fff",u.style.border="1px solid #e2e5e8",u.style.borderRadius="12px",u.style.boxShadow="0 12px 28px rgba(18, 43, 73, 0.16)",u.style.maxHeight="210px",u.style.overflowX="hidden",u.style.overflowY="auto",u.style.display="none",u.style.zIndex="2147483646",u.style.pointerEvents="auto";const k=document.createElement("div");k.style.minWidth="100%",u.appendChild(k),d.append(s);let w=!1,j=!1,P=s,D=!1,M=!1,x=[],I,W=!1,O=null,C=null,q=null,le=!1,K;const Y=g=>{const T=String(g||"").trim();return T?T.toUpperCase():"RESOLUTION"},me=()=>{le||(document.body.appendChild(u),le=!0)},se=()=>{if(!w)return;const g=P.getRootNode(),T=g instanceof ShadowRoot?g.host:P,ne=j&&g instanceof ShadowRoot,re=T.getBoundingClientRect(),G=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),Le=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),Ae=8,et=Math.max(172,G-Ae*2),$t=Math.min(et,Math.max(1,Math.round(re.width))),Pt=ne?$t:Math.max(172,Math.round(re.width));u.style.maxWidth=`${Math.min(320,et)}px`,u.style.width=ne?`${$t}px`:"max-content",u.style.minWidth=`${Math.min(Pt,et)}px`;let tt=re.left;const Dt=u.offsetWidth||Pt;tt+Dt>G-Ae&&(tt=Math.max(Ae,G-Ae-Dt));let ot=re.bottom+8;const It=u.offsetHeight||210;ot+It>Le-Ae&&(ot=Math.max(Ae,re.top-It-8)),u.style.left=`${Math.round(tt)}px`,u.style.top=`${Math.round(ot)}px`},be=()=>{se()},Se=()=>{window.addEventListener("scroll",be,!0),window.addEventListener("resize",be)},Re=()=>{window.removeEventListener("scroll",be,!0),window.removeEventListener("resize",be)},ue=()=>{K!==void 0&&(window.clearTimeout(K),K=void 0)},Oe=()=>{ue(),K=window.setTimeout(()=>{K=void 0,oe()},160)},ie=()=>{const g=d.getAttribute("data-ofdl-surface")==="pswp",T=d.getAttribute("data-ofdl-surface")==="feed-accessory",ne=de(I),re=!!ne&&(ne.key==="drm"||ne.key.startsWith("drm-")||/(^|\s)drm(\s|$)/i.test(ne.label)),G=!W&&(w||D);s.style.background=g?G?"#ffffff":"rgba(255, 255, 255, 0.94)":G?l:"transparent";const Le=g||T||G||re?e:t;s.style.color=Le,m.style.color=Le,b.style.color=Le},he=g=>{W=g,g&&oe(),E.style.display=g?"none":"inline-flex",d.getAttribute("data-ofdl-surface")==="feed-accessory"&&(d.style.display=!j&&M&&!g?"inline-flex":"none"),s.style.cursor=g?"default":"pointer",s.setAttribute("aria-haspopup",g?"false":"listbox"),s.setAttribute("aria-disabled",g?"true":"false"),ie()},oe=()=>{ue();const g=w;w=!1,u.style.display="none",s.setAttribute("aria-expanded","false"),b.style.transform="rotate(0deg)",Re(),ie(),g&&(C==null||C(!1))},de=g=>{if(g)return x.find(T=>T.key===g)},Ee=()=>{k.innerHTML="";for(const g of x){const T=document.createElement("button");T.type="button",T.setAttribute("role","option"),T.setAttribute("aria-selected",String(g.key===I)),T.style.all="unset",T.style.boxSizing="border-box",T.style.width="100%",T.style.border="0",T.style.background=g.key===I?e:"#fff",T.style.color=g.key===I?"#fff":"#2e3136",T.style.textAlign="left",T.style.padding="10px 14px",T.style.fontSize="13px",T.style.cursor="pointer",T.style.lineHeight="1.1",T.style.display="block",T.style.fontWeight="500";const ne=document.createElement("span");ne.style.display="flex",ne.style.alignItems="center",ne.style.justifyContent="space-between",ne.style.gap="8px";const re=document.createElement("span");if(re.textContent=Y(g.label),re.style.minWidth="0",re.style.whiteSpace="nowrap",re.style.overflow="visible",re.style.textOverflow="clip",ne.appendChild(re),g.showProTag){const G=document.createElement("span");G.textContent="PRO",G.style.display="inline-flex",G.style.alignItems="center",G.style.padding="1px 6px",G.style.borderRadius="999px",G.style.fontSize="10px",G.style.fontWeight="700",G.style.letterSpacing="0.04em",g.key===I?(G.style.border="1px solid rgba(255,255,255,0.55)",G.style.background="rgba(255,255,255,0.2)",G.style.color="#fff"):(G.style.border="1px solid #dbeafe",G.style.background="#eff6ff",G.style.color="#2563eb"),ne.appendChild(G)}T.appendChild(ne),T.addEventListener("mouseenter",()=>{g.key!==I&&(T.style.background=n)}),T.addEventListener("mouseleave",()=>{g.key!==I&&(T.style.background="#fff")}),T.addEventListener("click",()=>{if(I===g.key){oe();return}I=g.key,m.textContent=Y(g.label),Ee(),oe(),q==null||q(I)}),k.appendChild(T)}},Ce=g=>{ue(),!W&&(O==null||O(),x.length!==0&&(P=g,me(),u.style.display="block",w||Se(),w=!0,se(),s.setAttribute("aria-expanded","true"),b.style.transform="rotate(180deg)",ie(),C==null||C(!0)))},_t=g=>{if(w){oe();return}Ce(g)};return s.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation(),_t(s)}),s.addEventListener("mouseenter",()=>{D=!0,ie()}),s.addEventListener("mouseleave",()=>{D=!1,ie()}),u.addEventListener("mouseenter",ue),u.addEventListener("mouseleave",oe),s.addEventListener("focus",()=>{D=!0,ie()}),s.addEventListener("blur",()=>{D=!1,ie()}),J.add({root:d,panel:u,close:oe,containsTarget(g){if(d.contains(g)||u.contains(g)||P===g)return!0;const T=P.getRootNode();return T instanceof ShadowRoot&&T.host===g}}),d.addEventListener("keydown",g=>{g.key==="Escape"&&oe()}),ie(),{root:d,setExternalTrigger:g=>{j=g,d.style.display=g?"none":M&&!W?"inline-flex":"none",g&&oe()},setVisible:g=>{M=g,d.style.display=!j&&g&&!W?"inline-flex":"none",g||oe()},setOptions:(g,T)=>{var ne,re;if(x=De(g),x.length===0){I=void 0,m.textContent="RESOLUTION",he(!1),oe(),Ee();return}I=T&&((ne=de(T))==null?void 0:ne.key)||I&&((re=de(I))==null?void 0:re.key)||x[0].key;const G=de(I)||x[0];return I=G.key,m.textContent=Y(G.label),Ee(),G},setPanelDisabled:g=>{he(g)},setValue:g=>{if(!g)return;const T=de(g);T&&(I=T.key,m.textContent=Y(T.label),Ee())},getValue:()=>I,onBeforeToggle:g=>{O=g},onChange:g=>{q=g},onOpenChange:g=>{C=g},openFrom:Ce,scheduleClose:Oe,toggleFrom:_t,close:oe}},an=(e,t,n)=>{const l=t.filter(b=>ye(b.mediaType)),d=l.length>0,s=ln(t);if(!d||s.length===0)return e.setVisible(!1),e.setPanelDisabled(!1),{options:[],hasVideoTask:d};e.setVisible(!0);const m=e.setOptions(s,n),E=s.length===1&&l.every(b=>!!b.isDRM||!!b.signature);return e.setPanelDisabled(E),{options:s,selectedOption:m,selectedHeight:m==null?void 0:m.shortEdge,hasVideoTask:d}},sn=(e,t)=>{const n=At(e);if(n.length===0)return;const l=n.find(s=>s.key===t.key);if(l)return l;const d=t.family;if((d==="transcode"||d==="drm-transcode")&&typeof t.shortEdge=="number"){const s=De(n.filter(m=>m.family===d&&typeof m.shortEdge=="number"&&m.shortEdge<=t.shortEdge));if(s.length>0)return s[0]}},Ke=(e,t)=>{if(!t)return{tasks:e,downgradedCount:0};const n=[];let l=0;for(const d of e){if(!ye(d.mediaType)){n.push(d);continue}const s=sn(d,t);if(!s){n.push(d),l+=1;continue}s.key!==t.key&&(l+=1);const m=Xe(d.variants,s.key);if(!m){n.push(d),l+=1;continue}n.push({...d,url:m.url,selectedVariant:m,resolutionShortEdge:m.shortEdge,resolutionTag:xt(m)})}return{tasks:n,downgradedCount:l}},dn=e=>e.some(t=>{var n;return t.isDRM||t.signature||(n=t.selectedVariant)!=null&&n.isDrm?!0:(t.variants||[]).some(l=>!!l.isDrm)}),Ie=async(e,t,n,l)=>{let d=!1;try{d=await Bo()}catch(s){return $e("alert",{title:"OFDownloader",message:"Failed to get user status. Please retry.",html:!1,hideCloseBtn:!1}),!0}if(!d){if(dn(e)){if(zo(),n){const s=n.getValue();n.setValue(s)}return!0}if((l==null?void 0:l.key)==="origin"||typeof t=="number"&&Number.isFinite(t)&&t>i){if(qo(),n){const s=n.getValue();n.setValue(s)}return!0}}return!1},Ye=(e,t)=>{const n=l=>an(e,t(),l);return e.onBeforeToggle(()=>{n(e.getValue())}),e.onChange(async l=>{const d=n(l);d.hasVideoTask&&await Ie(t(),d.selectedHeight,e,d.selectedOption)}),{refresh:n}},un=e=>{const t=e.root.querySelector('[data-ofdl-role="parse-resolution-trigger"]');if(!t)return;const n=t.querySelector('[data-ofdl-role="parse-resolution-label"]'),l=t.querySelector('[data-ofdl-role="parse-resolution-arrow"]');e.root.style.minWidth="140px",e.root.setAttribute("data-ofdl-surface","pswp"),e.root.style.filter="drop-shadow(0 8px 18px rgba(0, 0, 0, 0.22))",t.style.background="rgba(255, 255, 255, 0.94)",t.style.border="1px solid rgba(11, 141, 227, 0.28)",t.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.12)",t.style.color="#0b8de3",n&&(n.style.color="#0b8de3"),l&&(l.style.color="#0b8de3")},ke=(e,t)=>{var n,l,d,s,m,E,b,A,u,k,w,j,P;const D=[],{id:M,responseType:x,media:I=[],text:W}=e,O=typeof e.postedAt=="string"?e.postedAt:typeof e.createdAt=="string"?e.createdAt:"",C=Date.now();for(const q of I){if(!q||q.canView===!1)continue;const le=q.id,K=q.type,Y=q.duration,me=(d=(l=(n=q.files)==null?void 0:n.drm)==null?void 0:l.signature)==null?void 0:d.dash,se=((m=(s=q.files)==null?void 0:s.thumb)==null?void 0:m.url)||"",be=((b=(E=q.files)==null?void 0:E.preview)==null?void 0:b.url)||"",Se=se||be,Re=(k=(u=(A=q.files)==null?void 0:A.drm)==null?void 0:u.manifest)==null?void 0:k.dash;if(ye(K)){const{variants:ie}=Qo(q);if(Re){const oe=nn(Re,me),de={...(w=Xe(ie,"drm"))!=null?w:{id:"drm",family:"drm-bundle",label:"DRM",url:oe.url,isDrm:!0},url:oe.url},Ee=Xe(ie,"drm")?ie.map(Ce=>Ce.id==="drm"?de:Ce):[de,...ie];D.push({id:M,siteId:"onlyfans",username:t,responseType:x,dateString:O,generatedAt:C,mid:le,mediaType:K,duration:Y,isDRM:!0,signature:me,hasCloudFrontParams:oe.hasCloudFrontParams,drmAuthSource:oe.authSource,url:oe.url,thumbnailUrl:Se||void 0,variants:Ee,selectedVariant:de,resolutionShortEdge:de.shortEdge,resolutionTag:"drm",text:W});continue}if(ie.length===0)continue;const he=en(ie)[0];D.push({id:M,siteId:"onlyfans",username:t,responseType:x,dateString:O,generatedAt:C,mid:le,mediaType:K,duration:Y,isDRM:!1,url:he.url,thumbnailUrl:Se||he.url,variants:ie,selectedVariant:he,resolutionShortEdge:he.shortEdge,resolutionTag:xt(he),text:W});continue}const ue=((P=(j=q.files)==null?void 0:j.full)==null?void 0:P.url)||be;if(!ue)continue;const Oe={id:"origin",family:"origin",label:"ORIGINAL",url:ue,isDrm:!1};D.push({id:M,siteId:"onlyfans",username:t,responseType:x,dateString:O,generatedAt:C,mid:le,mediaType:K,duration:Y,isDRM:!1,url:ue,thumbnailUrl:Se||ue,variants:[Oe],selectedVariant:Oe,resolutionShortEdge:void 0,resolutionTag:"original",text:W})}return D.filter(q=>q.id!==void 0&&q.mid!==void 0&&typeof q.url=="string"&&q.url.trim().length>0&&typeof q.siteId=="string"&&q.siteId.trim().length>0)},St=(e,t=!1)=>{const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("g-icon"),t&&n.classList.add("m-lg");const l=document.createElementNS("http://www.w3.org/2000/svg","use");return l.setAttribute("href",`#${e}`),l.setAttribute("xlink:href",`#${e}`),n.appendChild(l),n},Ze=e=>{const{scene:t,username:n,tasks:l,source:d,context:s={},vueProps:m=null}=e,E=l.filter(A=>ye(A.mediaType)).map(A=>{var u,k;return{mid:A.mid,selected:A.selectedVariant?{id:A.selectedVariant.id,label:A.selectedVariant.label,shortEdge:(u=A.selectedVariant.shortEdge)!=null?u:null,isDrm:A.selectedVariant.isDrm}:null,resolutionList:(A.variants||[]).map(w=>{var j;return{id:w.id,label:w.label,shortEdge:(j=w.shortEdge)!=null?j:null,isDrm:w.isDrm,url:w.url}}),resolutionShortEdge:(k=A.resolutionShortEdge)!=null?k:null,resolutionTag:A.resolutionTag}}),b={scene:t,source:d,username:n,taskCount:l.length,tasks:l,videoVariantSummary:E,timestamp:new Date().toISOString(),...s}},Qe=()=>{const e=window.pswp;return e&&typeof e=="object"?e:null},cn=()=>{var e;const t=Qe(),n=(e=t!=null&&t.options&&typeof t.options=="object"?t.options:null)==null?void 0:e.dataSource;if(Array.isArray(n))return n;if(n&&typeof n=="object"){const l=n.items;if(Array.isArray(l))return l}return[]},fn=()=>{const e=Qe(),t=Number(e==null?void 0:e.currIndex);if(!Number.isNaN(t)&&t>=0)return t;const n=e!=null&&e.options&&typeof e.options=="object"?e.options:null,l=Number(n==null?void 0:n.index);return!Number.isNaN(l)&&l>=0?l:-1},pn=(e,t)=>{var n,l,d,s,m,E,b,A,u,k,w,j,P,D,M;if(!e||typeof e!="object")return null;const x=e,I=typeof x.entityType=="string"?x.entityType:"post",W=(d=(l=(n=x.postId)!=null?n:x.entityId)!=null?l:x.id)!=null?d:x.uniqueId,O=vo(x.createdAt);if(x.media&&typeof x.media=="object"){const Y=x.media,me=((m=(s=Y.files)==null?void 0:s.full)==null?void 0:m.url)||((b=(E=Y.files)==null?void 0:E.preview)==null?void 0:b.url)||((u=(A=Y.files)==null?void 0:A.thumb)==null?void 0:u.url)||((j=(w=(k=Y.files)==null?void 0:k.drm)==null?void 0:w.manifest)==null?void 0:j.dash)||String(Y.id||"pswp-media");return ke({id:(P=W!=null?W:Y.id)!=null?P:ct(me),responseType:I,createdAt:O,text:N,media:[Y]},t)[0]||null}const C=typeof x.src=="string"?x.src:"";if(!C)return null;const q=W!=null?W:ct(C),le=(M=(D=x.id)!=null?D:x.uniqueId)!=null?M:q,K={id:"origin",family:"origin",label:"ORIGINAL",url:C,isDrm:!1};return{id:q,siteId:"onlyfans",username:t,responseType:I,dateString:O,generatedAt:Date.now(),text:N,url:C,mid:le,mediaType:"photo",variants:[K],selectedVariant:K,resolutionTag:"original",thumbnailUrl:C}},Ct=()=>{var e,t;return Fe(((e=document.querySelector(".l-profile-container .g-user-username"))==null?void 0:e.textContent)||((t=document.querySelector(".b-chat__header__wrapper a"))==null?void 0:t.getAttribute("href"))||void 0)},mn=()=>{const e=cn(),t=fn();if(t<0||t>=e.length)return[];const n=pn(e[t],Ct());return n?[n]:[]},hn=e=>{var t,n,l;if(e.querySelector(U))return;const d=(t=Be(e).props)==null?void 0:t.post;if(!d||!Jo(d))return;const s=Ko(e);if(!s)return;const m=s.querySelector(".b-post__tools__item.m-with-text-button");if(!(m instanceof HTMLElement))return;const E=document.createElement("span");E.setAttribute("data-ofdl-role","feed-parse-btn");const b=document.createElement("span");b.setAttribute("data-ofdl-role","feed-download-actions");const A=(l=(n=window.matchMedia)==null?void 0:n.call(window,"(pointer: coarse)"))!=null&&l.matches?Q.coarsePointerHeight:Q.height;b.style.display="inline-flex",b.style.alignItems="center",b.style.height=`${A}px`,b.style.gap="0",b.style.flex="0 0 auto";const u=Je();u.setExternalTrigger(!0),u.root.style.marginInlineStart="0",u.root.style.minWidth="0",b.append(E,u.root);const k=()=>{var D,M;const x=Be(e),I=((D=x.props)==null?void 0:D.post)||null,W=Fe((M=e.querySelector(".g-user-username"))==null?void 0:M.textContent);return{vueCtx:x,post:I,username:W,tasks:I?ke(I,W):[]}},w=Ye(u,()=>k().tasks);s.insertBefore(b,m.nextSibling);const j=Ot(E,async()=>{var D,M;u.close();try{const x=k(),I=x.post;if(!I)return;const W=x.tasks;if(W.length===0){pe("No downloadable media found.");return}const O=P(u.getValue());let C=W;if(O.hasVideoTask&&O.selectedOption){if(await Ie(W,O.selectedHeight,u,O.selectedOption))return;const K=Ke(W,O.selectedOption);C=K.tasks,K.downgradedCount>0&&pe("Some videos were auto-downgraded to available resolutions.")}const q=(D=e.querySelector(".b-post__media"))!=null?D:e.querySelector("[at-attr='media_locator']");C=He(C,q),Ze({scene:"feed",username:x.username,tasks:C,source:x.vueCtx.source,vueProps:x.vueCtx.props,context:{entityId:I.id,resolutionShortEdge:(M=O.selectedHeight)!=null?M:null}});const le=io();await Ue(C,{waitForCompletion:!0,onProgress(K){Vt(E,{state:K.state,progressPercent:K.progressPercent});const Y=le.update(K);Y&&pe(Y)}}),await jo()}catch(x){}},{menuVisible:!1,onMenuAction(D){u.openFrom(D)},onMenuHover(D){u.openFrom(D)},onMenuLeave(){u.scheduleClose()}});u.onOpenChange(D=>{j.setMenuExpanded(D)});const P=D=>{const M=w.refresh(D);return j.setMenuVisible(M.options.length>1),M};P()},gn=e=>{const t=e.querySelector(".b-tabs__nav"),n=e.querySelector(".b-photos");if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement))return;const l=n.parentElement;if(!(l instanceof HTMLElement)||t.parentElement!==l)return;const d=e.querySelector(_),s=d instanceof HTMLElement?d:document.createElement("div");s.setAttribute("data-ofdl-role","chat-gallery-download-tip"),s.textContent="Click to open the resource details page to download.",Go(s),(s.parentElement!==l||s.nextElementSibling!==n)&&l.insertBefore(s,n)},yn=e=>{if(e.querySelector(B))return;const t=e.querySelector(".b-post__media__item-inner, div[at-attr='media_locator']");if(!(t instanceof HTMLElement)||!Yo(t))return;const n=document.createElement("div");n.style.position="absolute",n.style.bottom="-2px",n.style.right="-40px",n.style.width="84px",n.style.minWidth="84px",n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.rowGap="6px",n.style.zIndex="2";const l=document.createElement("button");l.classList.add("m-with-round-hover","g-btn","m-rounded"),l.setAttribute("data-ofdl-role","chat-parse-btn"),l.appendChild(St("icon-download")),Wo(l),n.appendChild(l);const d=Je();d.root.style.width="128px",d.root.style.transform="scale(0.68)",d.root.style.transformOrigin="top center";const s=d.root.querySelector('[data-ofdl-role="parse-resolution-trigger"]');s&&(s.style.border="1px solid #cfd4dc",s.style.borderRadius="999px"),n.appendChild(d.root);const m=()=>{var u;const k=Be(t),w=k.props,j=Fe(((u=e.querySelector(".g-avatar"))==null?void 0:u.getAttribute("href"))||void 0);let P=[];return(w==null?void 0:w.entityType)==="post"&&w.post?P=ke(w.post,j):(w==null?void 0:w.entityType)==="message"&&w.message?P=ke(w.message,j):w!=null&&w.post?P=ke(w.post,j):w!=null&&w.message&&(P=ke(w.message,j)),{vueCtx:k,username:j,entityType:(w==null?void 0:w.entityType)||"unknown",tasks:P}},E=Ye(d,()=>m().tasks),b=u=>{n.style.right=u?"-84px":"-64px",n.style.bottom=u?"-10px":"-2px"},A=u=>{const k=E.refresh(u);return b(k.hasVideoTask&&k.options.length>0),k};A(),l.addEventListener("click",async u=>{var k;if(u.preventDefault(),u.stopPropagation(),l.dataset.ofdlBusy!=="1"){Pe(l,!0);try{const w=m(),j=w.tasks;if(j.length===0){pe("No downloadable media found.");return}const P=A(d.getValue());let D=j;if(P.hasVideoTask&&P.selectedOption){if(await Ie(j,P.selectedHeight,d,P.selectedOption))return;const x=Ke(j,P.selectedOption);D=x.tasks,x.downgradedCount>0&&pe("Some videos were auto-downgraded to available resolutions.")}const M=xo(e,t);D=He(D,M),Ze({scene:"chat",username:w.username,tasks:D,source:w.vueCtx.source,vueProps:w.vueCtx.props,context:{entityType:w.entityType,resolutionShortEdge:(k=P.selectedHeight)!=null?k:null}}),await Ue(D)}catch(w){}finally{Pe(l,!1)}}}),e.appendChild(n)},bn=e=>{if(e.querySelector(z))return;const t=document.createElement("div");t.style.position="absolute",t.style.top="40px",t.style.left="40px",t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.rowGap="8px",t.style.zIndex="10";const n=document.createElement("button");n.classList.add("m-size-lg-hover","m-with-round-hover","g-btn","m-rounded","m-lg"),n.setAttribute("data-ofdl-role","pswp-parse-btn"),n.style.minWidth="fit-content",n.style.padding="16px",n.appendChild(St("icon-download",!0)),Xo(n),t.appendChild(n);const l=Je();l.root.style.minWidth="140px",l.root.style.transform="scale(0.92)",l.root.style.transformOrigin="top center",un(l),t.appendChild(l.root);const d=()=>{const m=mn();if(m.length>0){const E=m[0];return{scene:ye(E.mediaType)?"pswp-video":"pswp-image",source:"fallback",tasks:m}}return{scene:"pswp-unknown",source:"fallback",tasks:[]}},s=Ye(l,()=>d().tasks);s.refresh(),e.addEventListener("click",()=>{s.refresh(l.getValue())},!0),n.addEventListener("click",async m=>{var E,b;if(m.preventDefault(),m.stopPropagation(),n.dataset.ofdlBusy!=="1"){Pe(n,!0);try{const A=Ct(),u=d();if(u.scene==="pswp-unknown")return;if(u.tasks.length===0){pe("No downloadable media found.");return}const k=s.refresh(l.getValue());let w=u.tasks;if(k.hasVideoTask&&k.selectedOption){if(await Ie(u.tasks,k.selectedHeight,l,k.selectedOption))return;const P=Ke(u.tasks,k.selectedOption);w=P.tasks,P.downgradedCount>0&&pe("Some videos were auto-downgraded to available resolutions.")}const j=ko(e,(E=Qe())==null?void 0:E.currSlide);w=He(w,j),Ze({scene:u.scene,username:A,tasks:w,source:u.source,vueProps:u.vueProps,context:{resolutionShortEdge:(b=k.selectedHeight)!=null?b:null}}),await Ue(w)}catch(A){}finally{Pe(n,!1)}}}),e.appendChild(t)},wn=()=>{F.disposeDetached(),y.forEach(e=>hn(e)),$.forEach(e=>{F.refresh(e),yn(e)}),Z.forEach(e=>gn(e)),V.forEach(e=>bn(e)),y.clear(),$.clear(),Z.clear(),V.clear()},Lt=()=>{X||(X=!0,queueMicrotask(()=>{X=!1,wn()}))},Mt=e=>{e.matches(S)&&y.add(e),e.querySelectorAll(S).forEach(n=>y.add(n)),e.matches(h)&&$.add(e),e.querySelectorAll(h).forEach(n=>$.add(n));const t=e.matches(f)?e:e.closest(f);t&&Z.add(t),e.querySelectorAll(f).forEach(n=>Z.add(n)),e.matches(R)&&V.add(e),e.querySelectorAll(R).forEach(n=>V.add(n))},vn=new MutationObserver(e=>{L();for(const t of e){const n=t.target;if(n instanceof Element){const l=n.closest(h);l&&$.add(l),n.querySelectorAll(h).forEach(d=>$.add(d))}if(t.type==="attributes"){const l=t.target;if(l instanceof Element){const d=l.matches(S)?l:l.closest(S);d&&y.add(d);const s=l.matches(h)?l:l.closest(h);s&&$.add(s);const m=l.matches(f)?l:l.closest(f);m&&Z.add(m);const E=l.matches(R)?l:l.closest(R);E&&V.add(E)}continue}for(let l=0;l<t.addedNodes.length;l+=1){const d=t.addedNodes[l];d instanceof Element&&Mt(d)}}Lt()}),Tt=()=>{document.body&&(Mt(document.body),Lt(),vn.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]}))},xn=e=>{e.persisted&&document.querySelectorAll(U).forEach(t=>{Nt(t)})};window.addEventListener("pageshow",xn),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tt,{once:!0}):Tt()}var kn="ofdl:main-world-file-download:request",So="ofdl:main-world-file-download:response",En="ofdl:main-world-file-download:cancel",Co=600*1e3,mt=64*1024*1024*1024,Lo=4,Mo=64,To=256*1024*1024*1024,_o=4096,ht="__ofdlMainWorldFileDownloadRegistryV1",_e;function $o(){const o=window,r=o[ht];if(typeof(r==null?void 0:r.claim)=="function"&&typeof r.current=="function")return r;let i=0;const a=Object.freeze({claim(){const c=document.currentScript instanceof HTMLScriptElement?document.currentScript.src:"";if(!/^(?:moz|chrome)-extension:\/\/[^/]+\/main-world\.js(?:[?#]|$)/.test(c))throw new Error("Main-world download handler registration was rejected.");return i+=1,i},current(){return i}});return Object.defineProperty(o,ht,{configurable:!1,enumerable:!1,writable:!1,value:a}),a}function Po(o){var r;const i=((r=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())!=null?r:"").replace(/[<>:"/\\|?*\u0000-\u001F]/g,"_").replace(/^\.+$/,"_").trim();if(!i||i.length>128)throw new Error("Main-world staged download filename is invalid.");return i}function ve(o,r,i){window.postMessage({kind:So,token:o,ok:r,...i?{error:i}:{}},location.origin)}function Do(o={}){var r;if(_e)return()=>{};const i=$o(),a=i.claim(),c=(r=o.objectUrlRetentionMs)!=null?r:Co,v=new Map,N=new Set,S=new Map;let h=0,f=0;const R=p=>{const y=v.get(p);y&&(v.delete(p),f-=y.size,window.clearTimeout(y.timeoutId),URL.revokeObjectURL(p))},U=p=>{const y=S.get(p);return y?(S.delete(p),h-=y.size,window.clearTimeout(y.timeoutId),!0):!1},B=p=>{for(;N.size>=_o;){const y=N.values().next().value;if(typeof y!="string")break;N.delete(y)}N.add(p)},_=p=>{if(i.current()!==a||p.origin!==location.origin)return;const y=p.data;if((y==null?void 0:y.kind)==="ofdl:main-world-file-download:cancel"){U(typeof y.token=="string"?y.token:"");return}if(!y||y.kind!=="ofdl:main-world-file-download:request")return;const $=typeof y.token=="string"?y.token:"";if(!(!$||$.length>128)&&!N.has($))try{if(!(y.file instanceof File))throw new Error("Main-world staged download payload is not a File.");if(!Number.isSafeInteger(y.expectedSize)||y.expectedSize!==y.file.size||y.file.size<=0||y.file.size>mt)throw new Error("Main-world staged download size mismatch.");if(typeof y.filename!="string")throw new Error("Main-world staged download filename is invalid.");B($);const F=y.file,Z=Po(y.filename);if(v.size+S.size>=Mo||f+h+F.size>To){ve($,!1,"Main-world staged download retention capacity was reached.");return}for(;S.size>=Lo||h+F.size>mt;){const J=S.keys().next().value;if(typeof J!="string")break;U(J),ve(J,!1,"Main-world staged download was superseded by a newer request.")}const V=window.setTimeout(()=>{var J;if(U($)){if(i.current()!==a){ve($,!1,"Main-world staged download handler was replaced.");return}try{const X=URL.createObjectURL(F),L=document.createElement("a");L.href=X,L.download=Z,L.rel="noopener",L.style.display="none";const H=(J=document.body)!=null?J:document.documentElement;if(!H)throw URL.revokeObjectURL(X),new Error("Main-world download document is not ready.");H.append(L);try{L.click()}finally{L.remove()}const te=window.setTimeout(()=>R(X),c);v.set(X,{timeoutId:te,size:F.size}),f+=F.size,ve($,!0)}catch(X){ve($,!1,X instanceof Error?X.message:String(X))}}},0);S.set($,{timeoutId:V,size:F.size}),h+=F.size}catch(F){ve($,!1,F instanceof Error?F.message:String(F))}},z=p=>{window.removeEventListener("message",_);for(const y of S.values())window.clearTimeout(y.timeoutId);if(S.clear(),h=0,p){for(const[y,$]of v)window.clearTimeout($.timeoutId),URL.revokeObjectURL(y);v.clear(),f=0}N.clear(),_e===ee&&(_e=void 0)},ee=()=>z(!0);return _e=ee,window.addEventListener("message",_),ee}var Io=Rt(()=>{Do(),Ao()});function An(){}var gt={debug:(...o)=>([...o],void 0),log:(...o)=>([...o],void 0),warn:(...o)=>([...o],void 0),error:(...o)=>([...o],void 0)},Ro=(()=>{let o;try{o=Io.main(),o instanceof Promise&&(o=o.catch(r=>{throw gt.error('The unlisted script "main-world" crashed on startup!',r),r}))}catch(r){throw gt.error('The unlisted script "main-world" crashed on startup!',r),r}return o})();return Ro})();
